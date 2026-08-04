# Independent Build Plan

OK Brokers / Machine Anvil can be developed independently without waiting for official involvement from Bankr, OK Computers, Robinhood, Net Protocol, or related teams.

Official involvement would improve distribution, native integrations, and legitimacy, but it is not required for the public concept, simulator, docs, mock contracts, or testnet prototype.

## Strategic position

Use:

```text
An independent community-built Terminal Floor prototype for OK Computers holders and the broader Bankr / onchain-agent ecosystem.
```

Avoid:

```text
Official OK Computers product.
Official Bankr integration.
Guaranteed yield system.
Universal stock-token reward platform.
```

## What we can build independently

### 1. Public architecture repository

Current repo:

```text
https://github.com/tgelhardt/machine-anvil
```

The repo is the professional home for architecture, docs, disclaimers, simulator code, and future mock contracts.

### 2. Static Terminal Floor site

The site explains:

- OK Brokers brand.
- Terminal Floor product loop.
- `$BLANK` as work/fuel/ticket token.
- `$BNKR` as primary reward route.
- ETH/USDG as additional route concepts.
- Stock Desk as future eligible-region module only.
- What is live versus simulated.

### 3. Interactive simulator

The simulator should show:

- Mock OK Computer terminal seat.
- Activate terminal.
- Clock in / clock out.
- `$BLANK` mined during shifts.
- Floor rank and claim preview.
- BNKR/ETH/USDG/Stock Desk route status.

Until contracts exist, this is clearly labeled as sandbox-only.

### 4. Wallet-flow prototype

Later frontend stages can add:

- Read-only wallet connection.
- OK Computer ownership detection.
- Token ID #3469 as a local test anchor.
- Activation signature intent.
- Testnet transaction flow only after mocks pass.

No early version should require NFT transfer, custody, or approvals.

### 5. Mock contracts

Build and test:

- `MockOKComputerNFT`
- `BLANKToken`
- `TerminalFloor`
- `ShiftLedger`
- `RewardRouter`
- `BNKRDesk`
- `StableDesk`
- `StockDeskPlaceholder`

This proves mechanics without risking real NFTs or funds.

### 6. Testnet preview

After local tests pass, deploy mocks to Base Sepolia or equivalent. Market it as a technical preview, not a production financial protocol.

### 7. Mainnet candidate

Only after:

- Full unit tests.
- Invariant/fuzz tests.
- Static analysis.
- Threat model.
- External review or audit path.
- Legal/compliance review.
- Human approval of deployment keys, treasury addresses, and launch parameters.

## Extra-care zones

### Branding

Reference public ecosystems as context, not endorsement.

### Real NFT custody

Avoid custody in the first real build. If custody ever enters the design, require a separate security review.

### Treasury routing

Do not route funds to guessed third-party addresses. Use placeholders on testnet and explicit policy before mainnet.

### BNKR address

The referenced Base `$BNKR` address:

```text
0x22af33fe49fd1fa80c7149773dde5890d3c76f3b
```

must be independently verified before production use.

### Stock Desk

Stock-tokenized assets require compliant rails and eligibility checks. The core product must still work if the Stock Desk never launches.

## Development phases

1. Canon and simulator.
2. Docs/disclaimer alignment.
3. Public prototype deployment after approval.
4. Mock contracts and local tests.
5. Testnet preview.
6. Mainnet readiness review.

## Immediate build target

The next deliverable is the upgraded Terminal Floor simulator plus docs cleanup.

Reason:

- It creates a marketable public surface.
- It does not touch assets.
- It makes the project understandable in 30 seconds.
- It gives us something visual to review before contracts.

## Principle

Build aggressively in public. Deploy cautiously when assets are at risk.
