# OK Brokers Architecture

## Thesis

OK Brokers turns OK Computers into activated broker terminals on a browser-powered Terminal Floor. The holder action is active: select a terminal, activate it, clock into a shift, produce `$BLANK`, and qualify for modeled reward routes.

Machine Anvil remains the lower-level mechanism name for the market, accounting, vault, and routing layer. It is not the public hero.

## Core Components

### 1. OK Computer terminal identity

- The OK Computer NFT is the terminal seat.
- Early demo mode is read-only/sandbox-only: no wallet reads, approvals, transfers, custody, or signatures.
- Later wallet testing should start with read-only ownership verification, then activation signatures, then testnet transactions.
- Early architecture should avoid NFT custody unless a separate security review approves it.

### 2. Terminal Floor

The app surface gives holders a loop:

```text
Activate terminal → Clock in → Run shift → Mine $BLANK → Inspect reward routes → Clock out
```

The floor can support browser-work sessions, agent task execution, token-launch desks, reward desks, and future wallet-gated modules.

### 3. `$BLANK` work token

`$BLANK` is the native work/fuel/ticket token printed by terminal shifts. It can be used for:

- shift receipts
- activation or boost costs
- access/rank accounting
- burns and sinks
- BLANK/BNKR liquidity alignment
- reward eligibility and claim previews

### 4. Reward Router

The Reward Router is the safer replacement language for “guaranteed yield.” It routes modeled or real protocol revenue into selected reward pools once contracts and controls exist.

Default routes:

- `$BNKR` — primary reward rail.
- `$ETH` — settlement/revenue route.
- `$USDG` — stable desk route.

Future route:

- Stock-tokenized assets — eligible-region/compliance-gated module only, never a universal base promise.

### 5. Revenue sources to model

Potential sources, all speculative until deployed:

- Terminal Floor fees.
- Token launch / trading desks.
- Agent task execution fees.
- Sponsored floor events or boxes.
- Marketplace or protocol revenue if approved.

### 6. Fee split model

Working model for simulation only:

```text
70% → reward routes
15% → creator/community continuity
15% → protocol/build treasury
```

Any real split requires governance, contracts, legal review, and explicit launch approval.

## Safety boundaries

- No official affiliation is implied with OK Computers, Bankr, Robinhood, or related teams.
- No guaranteed rewards, yield, dividends, or passive income.
- No stock-token access claim unless compliant rails and user eligibility exist.
- No asset-touching implementation should proceed without mock tests, threat modeling, and human approval.
