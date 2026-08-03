# Machine Anvil Architecture

## Thesis

StonkBrokers demonstrated a powerful flywheel: a fixed-ratio NFT ↔ token AMM generates fees that are converted into real yield and distributed to activated NFTs.

OK Computers already possess strong technical primitives: fully onchain terminals, storage, Net Protocol messaging, personal pages, and agent-ready identity. Machine Anvil proposes applying a refined version of that economic model so OK Computers can become productive hardware in the Bankr agent economy.

Yield should come from both speculative trading activity and real agent execution / Net Protocol usage.

## Core Components

### 1. Fixed-Ratio Anvil AMM (`$MACHINE`)

- Clean ERC-20 token: `$MACHINE`.
- Fixed ratio: `1 OK Computer = 1,000,000 $MACHINE`.
- Anvil-style continuous swap market on Base.
- Users can swap between an OK Computer NFT and exactly `1,000,000 $MACHINE` plus fee.
- The contract maintains a vault of available OK Computers.
- Recommended fees:
  - Standard swaps: `10%`.
  - Snipes / direct launches: `15%`.
  - Fees paid in ETH or `$BNKR`.

This design prioritizes clear price discovery and simplicity over complex bonding curves or pure fractionalization vaults.

### 2. MachineBooster Vault

- Receives the majority of protocol fees.
- Uses accumulated ETH, and optionally other routed assets, to systematically buy `$BNKR` on Base.
- Holds `$BNKR` until a permissionless `clockIn()` is called.
- Distributes `$BNKR` pro-rata to activated OK Computers according to tier weight.

### 3. Activation & Tiers

Holders burn `$MACHINE`, or a mix of `$MACHINE` and `$BNKR`, to activate an OK Computer.

Activation state is stored against the NFT and resets on transfer.

Higher tiers receive higher distribution weight and practical benefits such as increased Net Protocol quotas, priority compute / skill limits, and exclusive terminal features.

### 4. Revenue Sources

All of the following can feed the MachineBooster under the same fee split:

- Anvil AMM trading fees.
- Net Protocol messaging and storage micro-payments originating from OK Computers.
- Bankr skill / tool execution fees when an agent operates through an OK Computer.
- Share of trading fees from tokens launched via an OK Computer terminal.
- Secondary marketplace royalties, if implemented.

### 5. Uniform Fee Split

- `70%` → MachineBooster / holders.
- `15%` → @dailofrog / creator continuity.
- `15%` → Bankr protocol / treasury.

### 6. Governance

Machine Anvil should use light but real governance from the start.

Activated OK Computer holders, `$MACHINE` holders, or a hybrid group can vote on:

- Fee routing adjustments.
- Adding or removing revenue sources.
- Tier parameter changes.
- Which assets the Booster buys, initially `$BNKR`.

No admin key should be able to seize the Booster or unilaterally alter core distribution logic.
