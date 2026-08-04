# Design Principles

OK Brokers should stay active, legible, holder-first, and safety-gated.

## Principles

1. **Active terminals, not passive promises**
   The product loop is clock in, work, print `$BLANK`, inspect routes, clock out. Avoid passive-income framing.

2. **Clear naming stack**
   Public brand: OK Brokers. Product surface: Terminal Floor. Mechanism: Machine Anvil. Native token: `$BLANK`. Primary reward rail: `$BNKR`.

3. **Safety before asset touching**
   Start with sandbox simulation. Then read-only ownership checks. Then signatures. Only then testnet transactions. Never jump straight to custody or approvals.

4. **Reward routes, not guarantees**
   BNKR, ETH, USDG, and future stock-token pools are routes to model and build toward, not guaranteed payouts.

5. **Stock Desk stays gated**
   Stock-tokenized assets are future eligible-region/compliance-gated modules. The core product must work without them.

6. **Transparent mechanics**
   Ratios, fees, weights, emission rules, and route splits should be readable by a holder in one sitting.

7. **Onchain where it matters**
   Activation, reward accounting, and claims should be verifiable once deployed. UI-only state is acceptable only in the simulator.

8. **No official-status claims**
   Until adopted by relevant teams, OK Brokers remains an independent community prototype inspired by public ecosystems.
