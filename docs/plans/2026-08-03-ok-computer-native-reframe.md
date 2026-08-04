# OK Computer Native Reframe Implementation Plan

> **For Hermes:** Implement only after Abearica approves the phase. Do not commit, push, deploy, connect wallets, or perform onchain writes without explicit approval.

**Goal:** Reframe OK Brokers from a generic holder website into a credible OK Computer-native broker terminal concept with a public site, native command model, and future cartridge path.

**Architecture:** Keep the current static public site as the polished outreach surface. Add a native-command narrative and future single-file cartridge target without claiming live integration. Preserve safety boundaries: no wallet connection, no NFT transfer, no onchain writes in the current demo.

**Tech Stack:** Static HTML/CSS/JS in `site/`, documentation in `docs/`, future compressed single-file target under `cartridge/`.

---

## Phase 0: Freeze and review current work

### Task 0.1: Capture current diff before more edits

**Objective:** Ensure existing uncommitted work is understood before adding the native reframe.

**Files:**
- Inspect: all modified/untracked files from `git status --short`

**Steps:**
1. Run `git status --short`.
2. Run `git diff --stat`.
3. Review `site/index.html`, `site/app.js`, `site/styles.css`, and new static pages.
4. Do not commit until Abearica approves the current direction.

**Verification:** Existing site still serves locally and has no JS errors.

---

## Phase 1: Public site native reframe

### Task 1.1: Add OK-native positioning above the fold

**Objective:** Make the homepage immediately communicate that OK Brokers is designed for the actual OK Computers terminal ecosystem.

**Files:**
- Modify: `site/index.html`
- Modify: `site/styles.css`

**Copy direction:**

```text
OK Brokers turns the existing OK Computers command system into a playable broker floor.

Open your terminal. Verify ownership. Clock in. Mine $BLANK. Print receipts. Route rewards.
```

**Verification:** Homepage must not imply official affiliation, deployed protocol, guaranteed rewards, or live wallet integration.

### Task 1.2: Add “Built on OK Commands” section

**Objective:** Map OK Brokers mechanics to real OK Computer commands.

**Files:**
- Modify: `site/index.html`
- Modify: `site/styles.css`

**Cards:**
- `connect` — verify terminal ownership
- `status` — check wallet/session state
- `gmpost` — clock-in ritual
- `boardpost` — public floor receipts
- `channelwrite` — broker floor events
- `datawrite` / `dataread` — token-owned shift data
- `pageedit` — publish the terminal page

**Verification:** Commands are described as future/possible integration points, not as live OK Brokers production behavior.

### Task 1.3: Add command transcript simulator panel

**Objective:** Show the product loop in native terminal language.

**Files:**
- Modify: `site/index.html`
- Modify: `site/app.js`
- Modify: `site/styles.css`

**Example transcript:**

```text
> connect
wallet connected
owner verified: OK COMPUTER #3469

> gmpost clocking in to the terminal floor
gm posted ☀️

> channelwrite okbrokers #3469 CLOCK_IN BNKR_DESK
floor event written

> datawrite 3469 OKB_SHIFT_001 mined=42.69 blank;rank=broker
shift receipt saved

> boardpost #3469 clocked out with 42.69 $BLANK
receipt posted to public board
```

**Verification:** Transcript is visually clear and labeled as a demo/future integration model.

---

## Phase 2: Native terminal page

### Task 2.1: Create `native-terminal.html`

**Objective:** Add a dedicated page explaining how OK Brokers could use the OK Computer command system.

**Files:**
- Create: `site/native-terminal.html`
- Modify: `site/index.html` nav
- Modify: other page navs if needed

**Required sections:**
1. What OK Computers already provide
2. OK Brokers command map
3. Mock command transcript
4. Safety rules
5. Cartridge roadmap

**Safety copy:**

```text
OK Brokers should never ask users to transfer their OK Computer. Early testing should use read-only checks, signatures, board/channel posts, or token-owned data writes only.
```

**Verification:** Page returns HTTP 200 and has no broken local links.

### Task 2.2: Update FAQ and Holder Guide

**Objective:** Correct outdated “website for holders” language.

**Files:**
- Modify: `site/faq.html`
- Modify: `site/holder-guide.html`
- Modify: `site/how-it-works.html`

**Required clarifications:**
- Current demo has no wallet connection.
- Future OK-native path may use `connect`, `pageedit`, `boardpost`, `channelwrite`, and `datawrite`.
- Storage/script limits must be verified on the actual OK Computer editor before cartridge development.

**Verification:** No copy claims JavaScript/64kb as guaranteed until verified inside Abearica's current editor.

---

## Phase 3: Cartridge target skeleton

### Task 3.1: Create future cartridge directory

**Objective:** Establish a real build target for a compressed OK Computer page.

**Files:**
- Create: `cartridge/README.md`
- Create: `cartridge/ok-brokers-terminal.html`

**Constraints:**
- Single file
- Inline CSS
- No external assets
- No external scripts
- Byte-budgeted for both 51,200 and 65,536 bytes
- Clearly marked as prototype/mock until terminal APIs are verified

**Verification:** File opens locally without external network assets.

### Task 3.2: Add size checker

**Objective:** Prove discipline around OK Computer storage limits.

**Files:**
- Create: `scripts/check-cartridge-size.mjs`
- Modify: `README.md` or `site/README.md`

**Expected command:**

```bash
node scripts/check-cartridge-size.mjs cartridge/ok-brokers-terminal.html
```

**Expected output shape:**

```text
OK Brokers cartridge
file: cartridge/ok-brokers-terminal.html
bytes: 38412
v1.0 budget: 38412 / 51200 (75.02%)
v1.1 budget: 38412 / 65536 (58.61%)
```

**Verification:** Script exits non-zero if file exceeds 51,200 unless called with a v1.1-only flag later.

---

## Phase 4: Visual credibility pass

### Task 4.1: Add terminal floor visual identity

**Objective:** Replace generic crypto-site feel with OK-native artifact feel.

**Files:**
- Modify: `site/index.html`
- Modify: `site/styles.css`

**Visual motifs:**
- command transcript
- printed shift receipt
- broker rank badge
- floor channel feed
- tiny cartridge / byte meter
- BNKR desk as unlock route

**Verification:** Desktop and mobile screenshots should look custom, not like a Tailwind SaaS landing page.

### Task 4.2: Add receipt printer interaction

**Objective:** Make the simulator produce a shareable-feeling artifact.

**Files:**
- Modify: `site/app.js`
- Modify: `site/index.html`
- Modify: `site/styles.css`

**Behavior:**
- Clock in starts timer/mining.
- Clock out prints receipt.
- Receipt includes terminal ID, route, mined `$BLANK`, rank, and mock command outputs.
- UI shows future post targets: `boardpost`, `channelwrite`, `datawrite`.

**Verification:** Browser click test confirms receipt updates and console has zero JS errors.

---

## Phase 5: Verification gate

### Task 5.1: Static verification

**Objective:** Confirm site remains healthy before any commit.

**Commands:**

```bash
node --check site/app.js
node scripts/check-cartridge-size.mjs cartridge/ok-brokers-terminal.html
python3 -m http.server 4173 --bind 0.0.0.0
```

**HTTP checks:**
- `/`
- `/how-it-works.html`
- `/holder-guide.html`
- `/gameplay.html`
- `/faq.html`
- `/native-terminal.html`
- `/styles.css`
- `/app.js`
- `/favicon.svg`

**Browser checks:**
- Homepage loads.
- Native terminal page loads.
- Simulator buttons work.
- No console errors.

### Task 5.2: Approval checkpoint

**Objective:** Stop before external actions.

**Required human approval before:**
- `git commit`
- `git push`
- Vercel deploy
- wallet connection
- OpenSea/OK terminal interaction
- any `boardpost`, `channelwrite`, `datawrite`, `pageedit`, or `transfer`

---

## Recommended execution order

1. Phase 1: Public site native reframe
2. Phase 2: `native-terminal.html`
3. Phase 4: Receipt/visual wow pass
4. Phase 3: Cartridge skeleton + byte checker
5. Phase 5: Full verification
6. Abearica review
7. Commit/push/deploy only after approval
