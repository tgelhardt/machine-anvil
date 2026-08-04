# OK Brokers Site

Static localhost prototype for OK Brokers: production-facing homepage, holder explanation pages, and an interactive Terminal Floor shift simulator.

## Current demo thesis

```text
Clock your OK Computer into the Terminal Floor.
Mine $BLANK. Route rewards.
```

The page intentionally keeps stock-tokenized rewards as a future eligible-region module. Default reward language is BNKR/ETH/USDG-safe, not universal stock-token access.

## What the prototype includes

- Production-facing homepage copy written for OK Computer holders.
- Real static pages: `how-it-works.html`, `holder-guide.html`, `gameplay.html`, and `faq.html`.
- Models OK Computer #3469 as the first sandbox terminal seat.
- Lets the visitor activate the terminal without a wallet.
- Lets the visitor clock in / clock out.
- Accumulates fake `$BLANK` during the shift.
- Lights up reward-route previews for BNKR, ETH, USDG, and the future Stock Desk.
- Shows a separate economic model for monthly reward routing assumptions.

## Safety boundaries

- No wallet connection.
- No signatures.
- No NFT custody.
- No approvals or transfers.
- No deployed protocol.
- No guaranteed rewards or stock-token access.

## Local preview

```bash
cd site
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Vercel deployment

Use `site` as the Vercel project root directory. No build command is required for this static version.

Do not deploy until the copy, disclaimer, and public timestamp are approved. This site is intentionally static for the first public marketing surface. The app/dashboard can move to Next.js once wallet connection, contract reads, and testnet interactions are introduced.
