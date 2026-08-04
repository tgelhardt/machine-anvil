# Phase 2 Technical Notes

OK Brokers / Machine Anvil is an independent community-led architecture effort unless official teams choose to engage. This document captures the technical path from static demo into mock protocol without implying official support from OK Computers, Bankr, Robinhood, Net Protocol, or any affiliated team.

## Independence assumption

Phase 2 must not depend on private access or official hooks.

Independent components:

- Static Terminal Floor demo.
- `$BLANK` emission modeling.
- Reward Router specification.
- Mock contracts and tests.
- Frontend-only wallet-flow mock.
- Threat model.

Integration-dependent components:

- Real Bankr fee routing.
- Real Net Protocol fee routing.
- Official OK Computer terminal-page integration.
- Robinhood Chain or stock-tokenized reward rails.
- Any production deployment with real funds.

## Reward Router

Use `RewardRouter`, not “guaranteed yield” language.

Working split for simulation:

```text
70% -> reward routes
15% -> creator/community continuity
15% -> protocol/build treasury
```

Open implementation questions:

- Is the split immutable or governance-controlled?
- Which assets are accepted?
- Are rewards distributed as the received asset or swapped into BNKR/ETH/USDG?
- Who can call routing functions?
- What slippage protections are required?

## Reward accounting

Avoid loops over token IDs.

Preferred model:

- Global accumulator per reward desk.
- Per-token reward debt/checkpoint.
- O(1) clock-in, clock-out, and claim paths.
- Lazy transfer/revalidation checks.

Design target:

```text
Distribution cost must not grow with the number of activated OK Computers.
```

## Transfer and ownership revalidation

Activation must not keep earning after the NFT moves away from the activating wallet.

Possible approaches:

1. Lazy revalidation on clock-in/claim.
2. Delegation registry.
3. Wrapper/lock model.
4. Official collection transfer hook, only if available through cooperation.

Early preference: lazy revalidation or delegation registry. Avoid custody in the first wallet-gated build.

## BNKR route

If the router uses fees to acquire `$BNKR`, execution must be MEV/slippage aware.

Recommended constraints:

- Verify canonical BNKR address independently before implementation.
- Use slippage limits.
- Cap batch sizes.
- Emit transparent route events.
- Consider TWAP or keeper-triggered execution.

Known BNKR address referenced for Base research:

```text
0x22af33fe49fd1fa80c7149773dde5890d3c76f3b
```

Treat this as research data until independently verified.

## Stock Desk

The Stock Desk is a placeholder for future eligible-region stock-tokenized asset routing.

Rules:

- Disabled by default.
- No universal access copy.
- No guaranteed stock-token rewards.
- Requires eligibility checks and compliant rails before any live use.
- Must be safe to remove without breaking the core product.

## Tier model

Working four-tier model:

| Tier | Example cost | Weight |
| --- | ---: | ---: |
| Base | 50,000 `$BLANK` | 1.0x |
| Desk | 150,000 `$BLANK` | 2.0x |
| Broker | 400,000 `$BLANK` | 3.5x |
| Pit Boss | 1,000,000 `$BLANK` | 6.0x |

No tier model is final until simulation and playtesting.

## Security questions

Phase 2 must answer:

- Can activation accounting be manipulated by transferring NFTs around claim windows?
- Can `$BLANK` mint/burn paths be reentered or spoofed?
- Can `clockIn()` / `clockOut()` be griefed?
- Can BNKR routing be sandwiched?
- Can governance redirect rewards maliciously?
- Can a Stock Desk accidentally imply or grant access to ineligible wallets?
- Can the frontend accidentally request approvals before the project is ready?

## Engineering position

The next practical step is not deployment.

The next practical step is:

```text
localhost Terminal Floor → docs alignment → mock contracts → tests → testnet
```

Real contracts that custody NFTs or route funds wait until the above is complete and reviewed.
