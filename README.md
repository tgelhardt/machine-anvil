# OK Brokers

A community proposal to clock OK Computers into a browser-powered Terminal Floor.

OK Brokers explores applying a StonkPit-style active loop to the OK Computers collection: holders clock terminals in, run shifts, print `$BLANK`, and route protocol revenue into `$BNKR` rewards. The Machine Anvil model remains the lower-level market / vault mechanism, while the public product is the Terminal Floor.

This repository is a research and design proposal only. It is not an official product of @dailofrog, Bankr, OK Computers, Robinhood, or any affiliated team.

## Live Site

The public site is built with Next.js (App Router) and lives in [`web/`](web/). Production URL: https://ok-brokrs.vercel.app

- Source: `web/src/` — pages in `src/app/`, shared components in `src/components/`, site config (including the single source of truth for the nav) in `src/config/site.ts`.
- The legacy static prototype remains in [`site/`](site/) for reference.
- Local preview: `cd web && npm run dev`

## Core Idea

- OK Computers act as broker-terminal identities.
- Terminal Floor shifts produce `$BLANK`, the native work / fuel / ticket token.
- Protocol revenue routes into `$BNKR`, the primary reward asset for activated terminals.
- `$BLANK / $BNKR` is the likely ecosystem-aligned pair.
- Stock-token rewards are an optional eligible-region module, not the base promise.
- Contract custody, wallet delegation, and reward routing require separate security review before real assets are touched.

## Key Documents

- [Architecture](docs/architecture.md)
- [Brand Architecture](docs/brand-architecture.md)
- [Design Principles](docs/principles.md)
- [Economics & Parameters](docs/economics.md)
- [Technical Interfaces](docs/interfaces.md)
- [Independent Build Plan](docs/independent-build-plan.md)
- [Track 1 Landing Page + Simulator](site/README.md)
- [Phase 2 Technical Notes](docs/phase-2-technical-notes.md)
- [Roadmap](docs/roadmap.md)
- [Open Questions](docs/open-questions.md)
- [Public Timestamp](docs/public-timestamp.md)

## Status

This is an early-stage independent community proposal. Feedback from @dailofrog, the Bankr team, and OK Computers holders is welcome, but the project does not depend on receiving official responses or private access.

The current focus is the localhost/static demo: product narrative, Terminal Floor simulator, compliance-safe reward language, and independently buildable specs. Contracts that custody real NFTs or route real funds require a separate security and launch-readiness process.

## Disclaimer

See [DISCLAIMER.md](DISCLAIMER.md).
