# Independent Build Plan

Machine Anvil can be developed as a full independent project without waiting for official involvement from Bankr, OK Computers, Net Protocol, or related teams.

Official involvement would improve distribution, native integrations, and legitimacy, but it is not required to build the public architecture, smart contracts, simulator, dashboard, or marketing site.

## Strategic Position

The project should be framed as:

```text
An independent community-built protocol and research project for OK Computers holders and the broader Bankr / onchain-agent ecosystem.
```

It should not be framed as:

```text
An official OK Computers, Bankr, Net Protocol, or dailofrog product.
```

The difference matters. We can build around public onchain assets and public interfaces. We should not imply endorsement, partnership, treasury routing, or official roadmap ownership unless those parties explicitly grant it.

## What We Can Build Independently

### 1. Public Architecture Repository

Already live:

```text
https://github.com/tgelhardt/machine-anvil
```

This is the canonical public timestamp and professional home for the concept.

### 2. Standalone Landing Page

A public website can explain:

- What Machine Anvil is.
- Why OK Computers are a strong substrate for agent hardware.
- How the proposed NFT/token/yield flywheel works.
- What is live vs proposed.
- Links to GitHub, docs, simulations, and dashboard.

The landing page must clearly state that the project is independent unless official adoption occurs.

### 3. Economic Simulator

A simulator can model:

- OK Computer floor assumptions.
- `$MACHINE` mint / burn supply.
- Swap volume.
- Swap taxes.
- Snipe / launch fees.
- Activation tier adoption.
- `$BNKR` buyback amounts.
- Estimated pro-rata yield by tier.

This gives the project credibility before deploying contracts.

### 4. Frontend Dashboard Mock

A dashboard can show:

- Connect wallet.
- Detect OK Computer holdings using public Base / Ethereum RPC and NFT APIs where available.
- Activation tier selection.
- Simulated claimable yield.
- `clockIn()` interaction flow.
- Vault and router stats.

Until contracts are deployed, this should be labeled as a mock / simulator.

### 5. Solidity Interface Specs

We can write and test interface-level contracts for:

- `IAnvil`
- `IMachineToken`
- `IMachineBooster`
- `IActivation`
- `IVaultRouter`
- `IGovernanceMinimal`

### 6. Prototype Contracts

We can build a testnet prototype with mock assets:

- Mock OK Computer ERC-721.
- Mock `$MACHINE` ERC-20.
- Mock `$BNKR` ERC-20 or testnet token address.
- Fixed-ratio Anvil vault.
- Activation registry.
- MachineBooster with pull-claim accounting.
- VaultRouter with 70/15/15 split.

This avoids risking real NFTs or funds while proving the mechanics.

### 7. Testnet Deployment

After local tests pass, we can deploy to Base Sepolia or another testnet.

The testnet launch can be marketed as a technical preview, not a production financial protocol.

### 8. Mainnet Candidate

A mainnet candidate should only happen after:

- Full test coverage.
- Static analysis.
- Fuzz / invariant tests.
- Security review.
- External audit or at least independent expert review.
- Clear legal / trademark / affiliation disclaimers.
- Human approval of deployment keys, treasury addresses, and launch parameters.

## What Requires Extra Care

### Branding

We can reference public projects for context, but we should avoid implying official status.

Use:

```text
Inspired by OK Computers and the Bankr/onchain-agent ecosystem.
Independent community proposal.
```

Avoid:

```text
Official OK Computers yield system.
Official Bankr integration.
Endorsed by dailofrog.
```

### Real NFT Custody

A contract that accepts real OK Computers creates custody risk.

Before mainnet custody:

- Keep vault logic minimal.
- Avoid upgradeable admin capture.
- Use pull accounting.
- Protect against reentrancy.
- Verify ERC-721 receiver behavior.
- Define rare-trait / selected-withdrawal behavior.
- Avoid unbounded loops.

### Treasury Routing

If there is no official Bankr or creator treasury agreement, funds should not be routed to guessed third-party addresses.

Options:

1. Use placeholder addresses only in testnet.
2. Route non-holder portions to a project-controlled multisig until official recipients are confirmed.
3. Make recipient slots configurable only before final launch, then immutable.
4. Publicly document recipient policy.

### `$BNKR` Address

The referenced Base `$BNKR` address:

```text
0x22af33fe49fd1fa80c7149773dde5890d3c76f3b
```

must be independently verified before use in any production contract.

## Development Phases

### Phase A — Public Foundation

- Architecture repo.
- README / docs / disclaimer.
- Build plan.
- Public timestamp.

Status: in progress.

### Phase B — Simulator + Landing Page

- Static marketing site.
- Public simulator.
- Visual explanation of the flywheel.
- FAQ and disclaimers.

### Phase C — Contract Specification

- Solidity interfaces.
- Events.
- Accounting formulas.
- Threat model.
- Invariants.

### Phase D — Local Prototype

- Foundry project.
- Mock ERC-721 / ERC-20.
- Anvil vault.
- MachineBooster.
- VaultRouter.
- Activation registry.
- Unit tests.
- Fuzz tests.

### Phase E — Testnet Preview

- Base Sepolia deployment.
- Testnet dashboard.
- Public walkthrough.
- Bug bounty / review request.

### Phase F — Mainnet Readiness

- External review.
- Deployment playbook.
- Launch parameters.
- Multisig / key custody plan.
- Final legal / brand review.

## Immediate Next Build Target

The next best deliverable is a landing page plus simulator.

Reason:

- It creates a marketable public surface.
- It does not custody assets.
- It helps people understand the economic model.
- It gives us something visual to share while contracts are specified carefully.

Parallel track:

- Begin Foundry scaffold for contract interfaces and mock tests.

## Principle

Build aggressively in public. Deploy cautiously when assets are at risk.
