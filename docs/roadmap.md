# Roadmap

## Phase 1 — Public Spec & Model

- Publish the public architecture repository.
- Finalize token name and NFT-to-token ratio assumptions.
- Document fee split, activation tiers, and open questions.
- Run basic economic simulations.

## Phase 2 — Contract Specifications

- Expand Solidity interface sketches.
- Define event surfaces for terminal frontends and indexers.
- Specify custody requirements for the Anvil vault.
- Specify transfer-reset behavior for activation.
- Define governance boundaries and non-upgradeability requirements.

## Phase 3 — Terminal & Dashboard Mock

- Build a frontend-only mock of activation, tier selection, yield tracking, and `clockIn()`.
- Use an OK Computer terminal-inspired interface.
- Keep it clearly labeled as a mock with no live contracts.

## Phase 4 — Revenue Hook Design

- Map possible integrations for Net Protocol messaging / storage fees.
- Map Bankr skill and tool execution fee routing.
- Map token-launch terminal fee share.
- Identify which hooks require official cooperation.

## Phase 5 — Governance Design

- Decide whether voting should use activated NFTs, `$MACHINE`, or a hybrid.
- Define which parameters are governable.
- Define which invariants cannot be changed by governance.

## Not Yet

Do not build or deploy real contracts that hold NFTs or funds until the model has been reviewed, official integration constraints are known, and the audit path is clear.
