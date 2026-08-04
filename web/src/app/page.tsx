import Link from "next/link";
import TerminalSimulator from "@/components/TerminalSimulator";

export default function Home() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Independent community prototype · OK Computers native commands · Bankr ecosystem · Base-first</p>
          <h1>Turn the OK Computers command system into a playable broker floor.</h1>
          <p className="lede">
            OK Brokers is a terminal-native game concept for OK Computers. Open the terminal, verify ownership, clock into a Terminal Floor shift, mine <strong>$BLANK</strong>, print receipts, climb ranks, and model reward desks led by <strong>$BNKR</strong>.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#simulator">Try the terminal demo</a>
            <Link className="button secondary" href="/native-terminal">See native command map</Link>
          </div>
          <p className="status-note">Current state: public simulator only. No wallet connection, no approvals, no transfers, no deployed protocol, and no investment promise.</p>
        </div>

        <div className="terminal-card" aria-label="OK Brokers terminal concept">
          <div className="terminal-top"><span></span><span></span><span></span><strong>ok://terminal-floor</strong></div>
          <div className="terminal-body">
            <p><span className="muted">&gt; connect</span> owner verified later</p>
            <p><span className="muted">&gt; gmpost</span> clock-in ritual</p>
            <p><span className="muted">&gt; channelwrite</span> floor event</p>
            <p><span className="muted">&gt; datawrite</span> shift receipt</p>
            <p><span className="muted">&gt; boardpost</span> public closeout</p>
            <div className="crt-screen" aria-hidden="true">
              <b>SHIFT READY</b>
              <i></i><i></i><i></i><i></i><i></i><i></i>
              <small>connect → gm → write → receipt → route</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell proof-strip" aria-label="Core holder actions">
        <article><strong>1. Open the terminal</strong><span>Your OK Computer is the identity and command surface.</span></article>
        <article><strong>2. Verify ownership</strong><span>The real path starts with connect/status; the demo stays local.</span></article>
        <article><strong>3. Print shift receipts</strong><span>Clock-ins map to gm, board, channel, and data primitives.</span></article>
        <article><strong>4. Route rewards</strong><span>BNKR is the first modeled desk. ETH/USDG and Stock Desk stay gated.</span></article>
      </section>

      <section id="ok-native" className="section-shell native-section">
        <div className="section-heading">
          <p className="eyebrow">Built on OK commands</p>
          <h2>OK Brokers starts where OK Computers already work: inside the terminal.</h2>
          <p>OK Computers already expose owner connection, pages, message boards, daily gm posts, usernames, token-owned data, arbitrary channels, and direct bot-to-bot messages. OK Brokers maps the broker floor to those primitives instead of pretending the NFT is a passive stake receipt.</p>
        </div>
        <div className="command-grid">
          <article><code>connect</code><h3>Verify ownership</h3><p>Future builds can confirm the wallet controls the terminal before any broker action.</p></article>
          <article><code>gmpost</code><h3>Clock-in ritual</h3><p>The daily gm primitive can become an attendance signal for terminal-floor sessions.</p></article>
          <article><code>boardpost</code><h3>Public receipt</h3><p>Clock-outs can become visible floor chatter without promising financial rewards.</p></article>
          <article><code>channelwrite</code><h3>Floor events</h3><p>A shared okbrokers channel can model desks, ranks, streaks, and broker activity.</p></article>
          <article><code>datawrite</code><h3>Token-owned state</h3><p>Shift receipts and rank snapshots can be stored against an owned OK Computer.</p></article>
          <article><code>pageedit</code><h3>Terminal cartridge</h3><p>The long-term target is a byte-budgeted page that can live inside the OK Computer.</p></article>
        </div>
        <div className="center-actions"><Link className="button secondary" href="/native-terminal">Read the native terminal spec</Link></div>
      </section>

      <section id="terminal-floor" className="section-shell floor-section">
        <div className="section-heading">
          <p className="eyebrow">What the site does</p>
          <h2>A holder dashboard, a game loop, and a reward model in one place.</h2>
          <p>The site gives holders a clear path from ownership to action. Every screen should answer three questions: where is my terminal, what can I do next, and what did that action unlock? OK Brokers is built around one simple loop: <strong>activate, clock in, mine $BLANK, unlock desks, review claim routes.</strong></p>
        </div>
        <div className="cards-grid three">
          <article>
            <span>01</span>
            <h3>Terminal dashboard</h3>
            <p>After wallet connect, holders see their OK Computers, activation status, rank, current shift, $BLANK balance, receipts, and available desks.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Shift gameplay</h3>
            <p>Clocking in starts a session. The longer and cleaner the shift, the more $BLANK and receipts the terminal records. Closing the session clocks out.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Reward routing</h3>
            <p>$BLANK and rank determine access to reward desks. BNKR is the primary route. Other routes are optional, gated, and never guaranteed.</p>
          </article>
        </div>
      </section>

      <section id="model" className="section-shell split-section">
        <div>
          <p className="eyebrow">Token and reward stack</p>
          <h2>$BLANK is the floor score. $BNKR is the main reward route.</h2>
          <p><strong>$BLANK</strong> is the native work token and scoreboard for Terminal Floor activity. It can power activations, boosts, tickets, rank progression, burns, and eligibility. <strong>$BNKR</strong> is the primary reward asset OK Brokers routes toward because it fits the Bankr ecosystem.</p>
          <p>ETH and USDG can be secondary desks. Stock-tokenized assets belong behind an eligibility gate only if compliant rails exist. The core product must work without promising stock exposure.</p>
        </div>
        <div className="flow-list">
          <div><span>01</span><p><strong>OK Computer</strong> identifies the holder&apos;s terminal. The NFT should not need to leave the holder&apos;s wallet.</p></div>
          <div><span>02</span><p><strong>Activation</strong> turns that terminal on for the floor and gives it a visible status.</p></div>
          <div><span>03</span><p><strong>Shifts</strong> produce $BLANK, receipts, and rank progress through active participation.</p></div>
          <div><span>04</span><p><strong>Desks</strong> show what routes are open: BNKR first, ETH/USDG later, Stock Desk only where eligible.</p></div>
        </div>
      </section>

      <section className="section-shell arcade-section">
        <div className="section-heading">
          <p className="eyebrow">Gamification</p>
          <h2>The arcade is the loop, not just the buttons.</h2>
          <p>The current demo has basic controls. A production version needs visible game systems around them: ranks, unlock thresholds, shift receipts, desk access, terminal streaks, season scoreboards, and safe claim previews.</p>
        </div>
        <div className="cards-grid four">
          <article><span>XP</span><h3>$BLANK mined</h3><p>The main score. It increases during active shifts and can be spent, burned, or used for access.</p></article>
          <article><span>R1</span><h3>Floor rank</h3><p>Observer, Trainee, Broker, Desk Captain, Pit Boss. Higher ranks unlock more desks and better visibility.</p></article>
          <article><span>▣</span><h3>Shift receipts</h3><p>Receipts prove a terminal completed work. They can feed leaderboards, boxes, raffles, or claim windows.</p></article>
          <article><span>$</span><h3>Reward desks</h3><p>Desks are the prize counters. BNKR opens first; ETH/USDG and Stock Desk stay gated by design.</p></article>
        </div>
        <div className="center-actions"><Link className="button secondary" href="/gameplay">Open the gameplay spec</Link></div>
      </section>

      <section id="simulator" className="section-shell simulator-section">
        <div className="section-heading">
          <p className="eyebrow">Interactive prototype</p>
          <h2>Try the holder flow without touching a wallet.</h2>
          <p>This simulator shows the intended OK-native flow using OK Computer #3469 as a test terminal. In a live version, commands such as connect, gmpost, channelwrite, datawrite, and boardpost could anchor the loop. In this prototype, every number and command output is local modeling only.</p>
        </div>

        <div className="demo-warning" role="note">
          <strong>Simulation mode:</strong> no wallet connection, no approvals, no transfers, no deployed protocol. Reward routes are product modeling only: BNKR, ETH, USDG, and future eligible stock-token pools.
        </div>

        <TerminalSimulator />
      </section>

      <section id="build" className="section-shell build-section">
        <div className="section-heading">
          <p className="eyebrow">Roadmap</p>
          <h2>From demo to production, the order matters.</h2>
          <p>The safe path is UI clarity first, then read-only wallet checks, then signatures, then testnet contracts. Real asset routing comes last, after threat modeling and human approval.</p>
        </div>
        <div className="phase-grid">
          <article><span>Now</span><h3>Public native simulator</h3><p>Explain the OK command map, holder loop, $BLANK score, BNKR desk, and safety boundaries.</p></article>
          <article><span>Next</span><h3>Terminal cartridge</h3><p>Compress the experience into a single-file OK Computer page target after editor limits are verified.</p></article>
          <article><span>Then</span><h3>Safe ownership prototype</h3><p>Use read-only ownership, signatures, board/channel posts, or token-owned data writes — never custody.</p></article>
          <article><span>Later</span><h3>Protocol review</h3><p>Only after audits: testnet $BLANK accounting, BNKR routing, claim windows, and real asset controls.</p></article>
        </div>
      </section>
    </>
  );
}
