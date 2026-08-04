# OK Brokers Economy Spec

**Status:** Modeling spec for human review. Not deployed economics, not an investment promise, not a guarantee of reward terms.
**Last updated:** 2026-08-03
**Owner decision:** all features wanted — native `$BLANK`, `$BNKR` reward routes, real-asset structure. No arcade fluff. Promise nothing; let mechanics speak. The structural hope of turning a few bucks into a million is the honest core of NFT buying — design for it without lying.

This spec answers three questions in order:

1. Why would I invest in OK Brokers?
2. How is it going to make me money?
3. Why would I clock in each day?

---

## 1. Why invest in OK Brokers

OK Brokers sells a **machine with a limited number of seats**, and the machine is visibly working.

- **Scarcity.** Founding Seats are finite. First ones are cheapest; the price climbs per seat sold. Everyone can watch the ladder move.
- **The machine.** Activated terminals clock in, mine `$BLANK`, climb rank, work desks. The Floor page shows live counters — shifts, receipts, `$BLANK` printed, terminals activated. Motion sells.
- **Deflation.** Activation fees and `$BLANK` sinks burn supply. Less token + more demand is the honest mechanism behind "could go up."
- **The flex.** A shareable terminal card with rank, receipts, and `$BLANK` balance. Status is a currency.

The investment thesis is: **early access to a machine that might print.** That is structural, not promised.

---

## 2. How it makes money

Three honest routes — mechanisms, not promises:

### Route A — Appreciation (primary)

Buy a Founding Seat at the cheap end of the ladder. As the machine proves out and more people want in, the seat/terminal floor can rise on secondary markets. Sell the seat. This is the main money route for holders.

- Not guaranteed. Market risk, liquidity risk, project risk — could go to zero.
- Honest framing: fixed supply + rising entry price + burns + visible activity create the *possibility* of appreciation. The site never states a return.

### Route B — Printing (secondary)

Clock in, work shifts, mine `$BLANK`. Sell it on a DEX or burn it in sinks.

- `$BLANK` has value because it has sinks and a market, not because the site says it will moon.
- Emission comes only from work. No premine, no free tokens.

### Route C — Reward rails (tertiary)

`$BNKR` routed from floor fees to activated terminals by weight and shift activity. Treasury buyback-and-burn puts a floor under `$BLANK`.

- Route = modeled allocation, not guaranteed payout.
- ETH/USDG desks secondary and gated.
- Stock-token pools: only with real legal structure, eligibility gate, and US-person exclusion. Not live, not promised.

---

## 3. Why clock in daily

Real answer: most people won't. The design does not depend on daily attendance.

- **For the degens:** streaks, season ranks, lottery prints (44 up to 4,444 — a big hit is the hook), leaderboard position. Ritual + dopamine.
- **For everyone else:** helper/shadow automation — one signature runs shifts, prints land in the wallet, budget-capped. "Set it and forget it."
- The floor works whether you show up or not. Showing up gets you more.

---

## Tokenomics: `$BLANK`

### Identity

```text
Name:      OK Brokers Blank
Symbol:    $BLANK
Role:      terminal work token / fuel / ticket / accounting token
Max supply: 3,469,000,000 (fixed; motif ties to the OK Computer terminal)
```

### Emission

- `$BLANK` is mined **only through active Terminal Floor shifts**.
- **No premine, no team allocation, no airdrop.** Circulation starts with work.
- Per-terminal pace is fixed — nobody can mine faster than anyone else.
- Emission rate decays by season (Season 0 highest, later seasons lower). Season caps are published before each season opens.
- Anti-bot rules: per-terminal daily cap, streak multiplier (max +50%), transfer resets active shift.

### Sinks (consumption)

`$BLANK` must be useful inside the game before it is useful outside it.

| Sink | Effect |
| --- | --- |
| Activation upgrades (Desk / Broker / Pit Boss tiers) | Consumed, part burned |
| Desk tickets | Consumed |
| Rank boosts | Consumed |
| Receipt styling / terminal themes | Consumed |
| Box / raffle entries | Consumed, entries burned |
| Season entry fees | Consumed |
| Future cartridge features | Consumed |

### Burns (deflation)

1. **50% of every activation fee is burned** (StonkBrokers pattern — deflationary for both the token and the collection).
2. **Treasury buyback-and-burn:** a scheduled share of treasury fee flow buys `$BLANK` from the market and burns it — the "floor under the token" mechanic. Slippage and execution controls required before any real deployment.
3. Box/raffle entry burns.

### Activation tiers (existing model, retained)

| Tier | Cost | Weight | Notes |
| --- | ---: | ---: | --- |
| Base | 50,000 `$BLANK` | 1.0x | Standard terminal activation |
| Desk | 150,000 `$BLANK` | 2.0x | Higher shift capacity / quotas |
| Broker | 400,000 `$BLANK` | 3.5x | Priority floor access and features |
| Pit Boss | 1,000,000 `$BLANK` | 6.0x | Highest modeled weight and exclusive desks |

Activation revalidates or resets on NFT transfer so rewards cannot detach from ownership.

---

## Reward routes: `$BNKR` and beyond

### Fee model (retained)

```text
Standard floor fee:  10%
Special launch/snipe: 15%
```

### Fee split

```text
70% → reward routes (the pool activated terminals share)
15% → protocol/build treasury
15% → creator/community continuity
```

### Primary route — `$BNKR`

- `$BNKR` is the clearest ecosystem-aligned reward rail (Bankr ecosystem).
- The 70% pool is used to route `$BNKR` to activated terminals **proportionally by tier weight × shift activity × streak**.
- Claimed `$BNKR` is the holder's to keep or sell. No staking lock required in the base model.

### Secondary routes

```text
$ETH  Desk  — gated, optional
$USDG Desk  — gated, optional
```

### Future route — Stock Desk

- **Not live. Not universal. Not promised.**
- Stock-tokenized asset pools (Robinhood Chain / Bankr rails) require: offshore legal entity, eligibility gate, US-person exclusion, jurisdiction-aware disclaimers, and security review.
- The core product must make sense even if the Stock Desk never launches.

---

## Treasury / Real-asset structure

### What the treasury is

A visible, onchain-verifiable pool funded by:

```text
15% protocol/build share of fees
Activation fee proceeds
Founding Seat proceeds
```

### What the treasury does

1. **Buyback-and-burn** of `$BLANK` on a published schedule — the floor mechanic.
2. **Security review budget** — audits, threat modeling, bug bounties.
3. **Build budget** — terminal cartridge, floor tools, community grants.
4. **Reserve** — runway so the machine survives quiet seasons.

### Real-asset framing (honest)

- **Real asset #1: the treasury itself.** Visible balance + buyback/burn = a real, verifiable mechanism behind the token. "Fees everyone pays back a floor under the token."
- **Real asset #2 (later, conditional):** stock-token pools via compliant rails. Requires the entity, the gate, and the wall. If the structure isn't done properly, it stays a documented future route — never a promise.
- **Rejected:** revenue-share on Southern Oregon Web, fractional real estate, arcade cabinets. Anything security-like muddies both the project and the business.

---

## Season 0 — Founding Seats

### The product

```text
Season 0 Founding Seats
346 seats. First is cheapest. Price climbs with every seat sold.
```

### Pricing ladder (modeled, ascending — USDC)

| Band | Seats | Seat price (USDC) |
| --- | ---: | ---: |
| 1 | 1–50 | 15 |
| 2 | 51–150 | 25 |
| 3 | 151–250 | 40 |
| 4 | 251–346 | 60 |

Seats are paid in **USDC on Base**. `$BLANK` is never a purchase currency — it is work-earned only. ETH acceptance at contract level is optional, but the quoted ladder is stablecoin-denominated so the campaign price does not move with ETH volatility.

Total modeled raise at full sellout: **~13,010 USDC** (illustrative, before gas/fees).

### What a Founding Seat includes

- **Base activation** for one OK Computer terminal (or activation credit).
- **Founding Terminal badge** — permanent Season 0 marker.
- **Season 0 receipt trail** — every shift printed and linked to the seat.
- **Floor board listing** — public rank visibility from day one.
- **Priority cartridge access** — first shot at the OK Computer-native page build.
- **`$BLANK` test eligibility** — early access to emission testing phases.

### What a seat is NOT

- Not equity. No revenue share. No dividend. No guaranteed return.
- A participation/status artifact with mechanical upside, priced on an ascending ladder.
- Transferable seat, but activation revalidates on transfer.

### Campaign honesty

- Seat sales do not start until: copy approved, structure reviewed, entity/rails decision made, and explicit human go.
- Public counters on the Season 0 page are **modeled mock data until a real campaign is approved** — the page will say so.
- No wallet connection, no payments, no signatures on the current site. Full stop.

---

## Compliance posture

Mirrors the seriousness of comparable projects (e.g., the StonkBrokers disclosure wall), because the stock-token route demands it:

1. **NFA everywhere.** Nothing is financial, investment, legal, or tax advice.
2. **No guarantees.** No promised drops, distributions, activation returns, or appreciation.
3. **"Distributions" is nomenclature only.** Protocol fee routing, mechanically like LP fees. Not corporate dividends, not equity, no shareholder rights.
4. **US restriction on stock-token swaps** if that route ever builds. Eligibility gate + jurisdiction awareness required.
5. **Offshore entity required** before any stock-token route (Cayman-style structure like comparable projects). Until then: no stock language on public pages.
6. **Experimental software wall.** Users acknowledge risk before any real interaction.
7. **No official-affiliation claims.** OK Brokers is an independent community prototype until teams say otherwise.
8. **Never custody NFTs, never request broad approvals, never require transfer** in early flows.

---

## Open modeling questions (before implementation)

- Emission curve constants and season caps.
- Activation adoption rate by tier.
- Reward route sensitivity to floor volume and `$BNKR` price.
- Buyback execution controls (slippage, scheduling, circuit breakers).
- Transfer/revalidation edge cases.
- Entity decision: which structure, where, and who operates it.
- Seat purchase rail: **DECIDED — USDC on Base** (stablecoin-denominated ladder; $BLANK never a purchase currency).
