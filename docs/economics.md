# Economics & Recommended Parameters

These are starting recommendations intended for discussion and modeling. All numbers are adjustable.

## Token Ratio

```text
1 OK Computer = 1,000,000 $MACHINE
```

## Activation Tiers

| Tier | Burn Cost | Weight | Notes |
| --- | ---: | ---: | --- |
| Base | 50,000 `$MACHINE` | 1.0x | Standard distribution |
| T2 | 150,000 `$MACHINE` | 2.0x | Higher Net Protocol quotas |
| T3 | 400,000 `$MACHINE` | 3.5x | Priority compute / skill limits |
| T4 | 1,000,000 `$MACHINE` | 6.0x | Highest weight + exclusive terminal features |

Activation resets on transfer.

## Fee Structure

- Standard swap fee: `10%`.
- Snipe / direct launch fee: `15%`.
- Uniform split across all revenue sources:
  - `70%` → MachineBooster / holders.
  - `15%` → @dailofrog / creator continuity.
  - `15%` → Bankr protocol / treasury.

## Yield Asset

The primary proposed yield asset is `$BNKR` via systematic buybacks on Base.

## Design Goals

- Activation should feel meaningful but not extractive.
- Burns should create ongoing scarcity in `$MACHINE`.
- Higher tiers should offer both higher yield weight and real utility inside the terminal.
- The system should remain attractive even if agent activity volume is modest in early stages, with AMM trading volume acting as the bootstrap.
- Revenue sources should use a consistent split to keep the system legible.

## Modeling Still Needed

Before implementation, the following should be simulated:

- Expected AMM volume under different NFT floor and token market assumptions.
- Sensitivity of yields to trading volume, agent execution volume, and Net Protocol activity.
- Activation tier adoption rates.
- `$MACHINE` burn rate and circulating supply pressure.
- Booster buyback cadence and slippage on Base liquidity.
