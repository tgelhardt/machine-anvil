# Phase 2 Technical Notes

Machine Anvil should be treated as an independent community-led architecture effort unless and until official teams choose to engage.

This document captures technical decisions and implementation concerns for moving from public proposal into a more serious engineering specification. It does not claim official support from Bankr, OK Computers, Net Protocol, @dailofrog, or any affiliated team.

## Independence Assumption

The working assumption for Phase 2 is:

- No dependency on responses from the Bankr team.
- No dependency on responses from @dailofrog.
- No dependency on responses from OK Computers maintainers.
- No dependency on private Net Protocol or Bankr fee hooks.

Therefore, the architecture should separate:

1. **Independent components** that can be specified, simulated, mocked, or prototyped publicly.
2. **Integration-dependent components** that require official cooperation before deployment.

## Independent Components

These can move forward without official access:

- Public architecture documentation.
- Economic modeling and simulations.
- Solidity interface specifications.
- Frontend-only dashboard / terminal mock.
- Yield accounting design.
- Vault routing design.
- Security threat model.
- Governance design.

## Integration-Dependent Components

These should remain explicitly marked as future possibilities:

- Routing real Bankr skill execution fees.
- Routing real Net Protocol messaging or storage fees.
- Integrating directly into official OK Computer terminal pages.
- Using official OK Computer transfer hooks, if unavailable externally.
- Any production deployment that depends on team-controlled contracts, interfaces, or treasuries.

## VaultRouter

A `VaultRouter` can be specified as the single revenue-routing surface for all eligible inflows.

Proposed invariant:

```text
70% -> MachineBooster / activated holders
15% -> creator continuity treasury
15% -> protocol / ecosystem treasury
```

The purpose of a single router is to keep accounting legible and prevent each revenue source from implementing separate split logic.

Open implementation questions:

- Should the 70/15/15 split be immutable?
- Should recipient addresses be immutable or governance-controlled?
- Should unsupported assets be rejected, swapped, or held for governance action?
- Should routing be push-based, pull-based, or both?

## Yield Accounting

MachineBooster should avoid looping across activated token IDs during distribution.

Preferred model:

- MasterChef-style global yield index.
- `accYieldPerShare` or equivalent accumulator.
- Per-token reward debt / checkpoint accounting.
- O(1) `clockIn()` and claim paths.

Design target:

```text
Distribution cost should not grow with the number of activated OK Computers.
```

This matters because the collection scale may be thousands of nodes.

## Transfer Reset

The proposal says activation resets on NFT transfer. That requirement is simple conceptually but difficult technically unless the activation contract can reliably observe transfers.

Possible approaches:

### 1. Native collection hook

If the OK Computers ERC-721 contract exposes or supports transfer hooks, activation can be cleared directly during transfer.

Risk: likely unavailable without official cooperation.

### 2. Wrapper registry

Owners opt into a wrapper or registry layer where activation state is valid only while the NFT remains locked, registered, or delegated under known conditions.

Risk: adds friction and may weaken UX.

### 3. Lazy invalidation

Activation state is checked against current ownership during claim / `clockIn()` paths. If ownership changed since activation, the position is treated as inactive until reactivated.

Risk: requires careful accounting so stale weight cannot keep earning after transfer.

### 4. Indexer-assisted invalidation

Offchain indexers observe transfers and flag stale activation state for frontend display.

Risk: not sufficient alone for trustless onchain accounting.

Phase 2 should specify which approach is viable without official OK Computers contract changes.

## BNKR Buybacks

If MachineBooster performs `$BNKR` buybacks on Base, execution should be MEV-aware.

Recommended constraints:

- Use Uniswap V3 or another deep Base liquidity venue only after liquidity review.
- Use slippage limits.
- Use capped batch sizes.
- Consider TWAP-style execution.
- Avoid predictable large buy intervals when possible.
- Expose buyback events for transparent accounting.

Known `$BNKR` address referenced for Base research:

```text
0x22af33fe49fd1fa80c7149773dde5890d3c76f3b
```

This address should be independently verified before being treated as canonical in any implementation.

## NFT Vault Custody

The Anvil vault would custody NFTs if users deposit OK Computers for `$MACHINE` minting.

Therefore, the design should not call this non-custodial unless the final architecture genuinely avoids vault custody.

Custody requirements:

- Safe ERC-721 receiver behavior.
- Clear withdrawal rules.
- Protection against reentrancy during deposit, swap, snipe, and withdrawal.
- No admin seizure path.
- Clear handling of ERC-6551 / token-bound account assumptions.
- Explicit statement about whether TBA state, assets, or permissions are affected by vault custody.

## Tier Model Alternatives

The current public proposal uses a four-tier model:

| Tier | Burn Cost | Weight |
| --- | ---: | ---: |
| Base | 50,000 `$MACHINE` | 1.0x |
| T2 | 150,000 `$MACHINE` | 2.0x |
| T3 | 400,000 `$MACHINE` | 3.5x |
| T4 | 1,000,000 `$MACHINE` | 6.0x |

An alternate simplified three-tier model could be simulated:

| Tier | Burn Cost | Weight | Extra BNKR Burn |
| --- | ---: | ---: | ---: |
| Tier 1 | 50,000 `$MACHINE` | 1.0x | $10 equivalent |
| Tier 2 | 150,000 `$MACHINE` | 2.5x | $30 equivalent |
| Tier 3 | 400,000 `$MACHINE` | 5.0x | $100 equivalent |

No tier model should be treated as final without simulation.

## Security Questions

Phase 2 should answer:

- Can activation accounting be manipulated by transferring NFTs around claim windows?
- Can `$MACHINE` mint / burn paths be reentered?
- Can `clockIn()` be griefed?
- Can buybacks be sandwiched?
- Can governance redirect yield away from holders?
- Can treasury recipients be changed maliciously?
- Can vault inventory selection be exploited by sniping rare NFTs?
- Should rare-trait sniping require separate pricing rules or should the vault remain trait-blind?

## Engineering Position

The next practical step is not deployment.

The next practical step is a tighter Phase 2 specification with:

- Solidity interfaces.
- Event definitions.
- Accounting formulas.
- Simulation assumptions.
- Threat model.
- Mock frontend flows.

Real contracts that custody NFTs or route funds should wait until the above is complete and reviewed.
