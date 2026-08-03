# Machine Anvil

A community proposal to turn OK Computers into yield-accruing agent infrastructure nodes.

Machine Anvil explores applying a refined version of the StonkBrokers economic model to the OK Computers collection on Base. The goal is to create a fair, decentralized, holder-first system where activated OK Computers earn yield driven by both trading activity and real agent execution / Net Protocol usage.

This repository is a research and design proposal only. It is not an official product of @dailofrog, Bankr, OK Computers, or any affiliated team.

## Core Idea

- Fixed-ratio Anvil-style AMM pairing OK Computers NFTs with a clean `$MACHINE` token.
- Trading fees and agent activity fees flow into a MachineBooster vault.
- The vault buys `$BNKR` and distributes it to activated OK Computers through permissionless `clockIn()` calls.
- Higher activation tiers receive higher distribution weight and practical terminal benefits.
- Primary economic benefit accrues to holders, with clean ongoing value for the creator and Bankr.

## Key Documents

- [Architecture](docs/architecture.md)
- [Design Principles](docs/principles.md)
- [Economics & Parameters](docs/economics.md)
- [Technical Interfaces](docs/interfaces.md)
- [Independent Build Plan](docs/independent-build-plan.md)
- [Phase 2 Technical Notes](docs/phase-2-technical-notes.md)
- [Roadmap](docs/roadmap.md)
- [Open Questions](docs/open-questions.md)
- [Public Timestamp](docs/public-timestamp.md)

## Status

This is an early-stage independent community proposal. Feedback from @dailofrog, the Bankr team, and OK Computers holders is welcome, but the project does not depend on receiving official responses or private access.

The current focus is public architecture, economic modeling, technical specifications, mock interfaces, and independently buildable prototypes. Contracts that custody real NFTs or route real funds require a separate security and launch-readiness process.

## Disclaimer

See [DISCLAIMER.md](DISCLAIMER.md).
