import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terminal Floor | OK Brokers" };

const counters = [
  { icon: "⌁", title: "Terminals activated", value: "346", note: "/ 346 Season 0 seats" },
  { icon: "⇄", title: "Shifts worked", value: "1,279,514", note: "cumulative" },
  { icon: "▤", title: "Receipts printed", value: "15,452", note: "certified prints" },
  { icon: "$", title: "$BLANK mined", value: "3,247,697,348", note: "left in this mine" },
];

const mechanics = [
  { num: "01", title: "Terminals activated", body: "Count of activated terminals, derived from activation events. Season 0 seats map to activations." },
  { num: "02", title: "Shifts worked", body: "Cumulative clock-in/clock-out sessions. Pace is fixed per terminal — nobody can mine faster than anyone else." },
  { num: "03", title: "Receipts printed", body: "Shift closeouts with a print size. Lottery mechanic: prints range from 44 up to 4,444 $BLANK — a big hit is the hook." },
  { num: "04", title: "$BLANK mined", body: "Total emitted, capped by the mine. Fixed supply of 3,469,000,000 — what's left shrinks as the floor works." },
  { num: "05", title: "The index", body: "Season progress and floor health indicator. 90/90 means a full index of seats and desks accounted for." },
  { num: "06", title: "Desks", body: "Reward routes: BNKR Rail is the primary modeled desk. ETH/USDG and Stock Desk stay gated until compliant rails exist." },
];

export default function Floor() {
  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">The machine, visible · modeled data · not live</p>
        <h1>The Terminal Floor.</h1>
        <p className="lede">This is the machine people are buying a seat in. Shifts worked, receipts printed, $BLANK mined, terminals activated — the counters move, the board ranks, and the floor feels alive before anyone has been asked to pay.</p>
        <div className="hero-actions">
          <Link className="button secondary" href="/season-zero">Season 0 Founding Seats</Link>
          <a className="button ghost" href="#board">Floor board</a>
        </div>
        <p className="status-note">Current state: all counters and board entries are modeled mock data for design review. Nothing here is a live claim, a record of real activity, or an investment promise.</p>
      </section>

      <section className="section-shell" aria-label="Live counters">
        <div className="cards-grid four">
          {counters.map((c) => (
            <article key={c.title}>
              <span>{c.icon}</span>
              <h3>{c.title}</h3>
              <p><strong style={{ fontSize: 30, color: "var(--accent)" }}>{c.value}</strong> {c.note}</p>
            </article>
          ))}
        </div>
        <div className="ticker-tape" aria-hidden="true" style={{ marginTop: 18 }}>
          <span>pace 20,000/s</span>
          <span>index 90/90</span>
          <span>tank fuel 6.90733 ETH</span>
          <span>activate</span>
          <span>clock in</span>
          <span>print</span>
          <span>route BNKR</span>
        </div>
      </section>

      <section id="board" className="section-shell page-split">
        <div>
          <p className="eyebrow">Floor board</p>
          <h2>Status is a currency.</h2>
          <p>Rank, terminal, receipts, $BLANK, desk. The board makes participation visible — and visibility is what makes a seat feel worth holding. Entries are modeled mock data.</p>
        </div>
        <div className="terminal-card" aria-label="Floor board preview">
          <div className="terminal-top"><span></span><span></span><span></span><strong>ok://floor-board</strong></div>
          <div className="terminal-body" style={{ padding: 18 }}>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "#d8f7e2", font: "13px/1.7 'SFMono-Regular', Consolas, monospace" }}>{`#   TERMINAL   BROKER      SHIFTS   RECEIPTS   $BLANK      DESK
01  OKC #3469  abearica    12       842        842.19      BNKR Rail
02  OKC #1287  basedesk    9        621        621.44      Observer
03  OKC #0420  gmterminal  7        410        410.12      Trainee
04  OKC #0777  pitbob      6        388        388.90      BNKR Rail
05  OKC #2319  datalady    5        299        299.51      Observer
…   …         …           …        …          …           …`}</pre>
          </div>
        </div>
      </section>

      <section className="section-shell page-cards">
        <div className="section-heading">
          <p className="eyebrow">What the counters will mean</p>
          <h2>When this becomes real, every number maps to a mechanism.</h2>
          <p>Nothing on this page is live yet. The design intent: each counter is eventually derived from onchain or terminal-native activity — never from a central database the team can edit.</p>
        </div>
        <div className="cards-grid three">
          {mechanics.map((m) => (
            <article key={m.num}><span>{m.num}</span><h3>{m.title}</h3><p>{m.body}</p></article>
          ))}
        </div>
      </section>

      <section className="section-shell" style={{ paddingBottom: 78 }}>
        <div className="notice-card">
          <p className="panel-kicker">The honesty line</p>
          <p style={{ marginBottom: 0 }}>Counters create motion, motion creates belief, belief creates demand. That is how the machine works — but the counters are mock data today, and the page says so. When they become real, they will be verifiable, not decorative.</p>
        </div>
      </section>
    </>
  );
}
