# Economics & Recommended Parameters

These are modeling assumptions for the OK Brokers prototype. They are not deployed economics, investment promises, or guaranteed reward terms.

## Native token

```text
Native token: $BLANK
Role: terminal work / fuel / ticket / accounting token
```

`$BLANK` is printed or accounted for through active Terminal Floor shifts. It should make the holder feel like the OK Computer is doing work, not sitting in a passive vault.

## Activation tiers

Early tier model:

| Tier | Example cost | Weight | Notes |
| --- | ---: | ---: | --- |
| Base | 50,000 `$BLANK` | 1.0x | Standard terminal activation |
| Desk | 150,000 `$BLANK` | 2.0x | Higher shift capacity / quotas |
| Broker | 400,000 `$BLANK` | 3.5x | Priority floor access and features |
| Pit Boss | 1,000,000 `$BLANK` | 6.0x | Highest modeled weight and exclusive desks |

Activation should reset or revalidate on NFT transfer so rewards cannot detach from ownership.

## Fee structure model

Working simulator assumptions:

- Standard floor fee: `10%`.
- Special launch/snipe fee: `15%`.
- Modeled split:
  - `70%` → reward routes.
  - `15%` → creator/community continuity.
  - `15%` → protocol/build treasury.

## Reward assets

Primary reward asset:

```text
$BNKR
```

Additional routes:

```text
$ETH
$USDG
```

Future premium route:

```text
eligible-region stock-tokenized asset pools
```

Stock-token routing is optional and compliance-gated. It is not live, not guaranteed, and not universal.

## Design goals

- Active loop first: clock in, produce, inspect, clock out.
- `$BLANK` should have sinks and access value, not only emission.
- `$BNKR` should be the clearest ecosystem-aligned reward rail.
- ETH/USDG routes should make the reward desk legible without relying on stock-token hype.
- Stock-token routes should remain future-facing until legal/technical rails are real.
- The product should still make sense even if the Stock Desk never launches.

## Modeling still needed

Before implementation:

- Shift emission curves and anti-bot rules.
- Activation adoption rates by tier.
- Reward route sensitivity to floor volume and BNKR price assumptions.
- Slippage and buyback execution controls.
- Transfer/reset rules.
- Treasury runway and security-review budget.
