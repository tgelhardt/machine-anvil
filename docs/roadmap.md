# Roadmap

## Phase 1 — Canon and localhost demo

- Lock public brand: OK Brokers.
- Lock app surface: Terminal Floor.
- Lock native token: `$BLANK`.
- Lock primary reward route: `$BNKR`.
- Keep ETH/USDG as default secondary routes.
- Keep stock-tokenized assets as future eligible-region module only.
- Build a static simulator with no wallet connection and no asset touching.

## Phase 2 — Terminal Floor prototype

- Mock OK Computer #3469 as the first terminal seat.
- Add activate → clock in → mine `$BLANK` → reward route preview → clock out flow.
- Add clear simulation disclaimers.
- Keep all reward language modeled, not guaranteed.
- Verify locally with HTTP checks, JS syntax, browser console, and visual inspection.

## Phase 3 — Public-safe repo package

- Align README, docs, disclaimer, and site copy.
- Remove legacy token / passive-reward framing from public docs.
- Add public timestamp once copy is approved.
- Commit and push only after local verification.
- Deploy Vercel only after explicit approval.

## Phase 4 — Mock protocol

- Build mock contracts:
  - `MockOKComputerNFT`
  - `BLANKToken`
  - `TerminalFloor`
  - `ShiftLedger`
  - `RewardRouter`
  - `BNKRDesk`
  - `StableDesk`
  - `StockDeskPlaceholder`
- Test activation, clock-in/out, `$BLANK` accounting, reward indexes, and transfer/revalidation rules.
- Keep Stock Desk disabled/placeholder unless eligibility rails exist.

## Phase 5 — Wallet-gated testnet

- Read-only wallet ownership check first.
- Sign activation intent second.
- Testnet activation only after mock tests pass.
- No NFT custody, approvals, or transfer requirement unless separately approved.
- Use OK Computer #3469 only as a test anchor when ready.

## Phase 6 — Launch review

- Threat model.
- Slippage/buyback controls.
- Custody/delegation review.
- Legal/compliance review for restricted reward routes.
- Explicit human approval before any mainnet deployment.

## Not yet

Do not deploy real contracts, request wallet approvals, custody NFTs, route real funds, or promise stock-tokenized assets until the prototype, tests, security path, and approval gate are complete.
