import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Season 0 — Founding Seats | OK Brokers" };

const bands = [
  { num: "1", title: "Band 1 · 1–50", price: "0.005 ETH", body: "per seat — the earliest entry. First-mover pricing for the first fifty seats." },
  { num: "2", title: "Band 2 · 51–150", price: "0.008 ETH", body: "per seat — after the first fifty sell, the ladder steps up." },
  { num: "3", title: "Band 3 · 151–250", price: "0.012 ETH", body: "per seat — momentum pricing as the floor becomes visible." },
  { num: "4", title: "Band 4 · 251–346", price: "0.018 ETH", body: "per seat — the final band before Season 0 closes." },
  { num: "≈", title: "Modeled raise", price: "~3.75 ETH", body: "at full sellout — illustrative, before gas and fees. Not a target, not a promise." },
  { num: "S0", title: "What stays open", price: "Human go", body: "Seat sales do not start until copy is approved, structure is reviewed, and an explicit human go is given." },
];

const includes = [
  { num: "01", body: "<strong>Base activation</strong> for one OK Computer terminal, or an activation credit toward a future terminal." },
  { num: "02", body: "<strong>Founding Terminal badge</strong> — a permanent Season 0 marker on the terminal card." },
  { num: "03", body: "<strong>Season 0 receipt trail</strong> — every shift printed and linked to the seat." },
  { num: "04", body: "<strong>Floor board listing</strong> — public rank visibility from day one." },
  { num: "05", body: "<strong>Priority cartridge access</strong> — first shot at the OK Computer-native page build." },
  { num: "06", body: "<strong>$BLANK test eligibility</strong> — early access to emission testing phases." },
];

const rules = [
  { num: "01", title: "Modeled, labeled", body: "Public counters on this page and the Floor are modeled mock data until a real campaign is approved. The page says so." },
  { num: "02", title: "No wallet, no payment", body: "No wallet connection, no payments, no signatures on the current site. Full stop." },
  { num: "03", title: "Go is human", body: "Seat sales start only after copy approval, structure review, entity/rails decision, and explicit human go." },
  { num: "04", title: "Mechanics over promises", body: "The site never states a return. Scarcity, ladder, burns, and visible activity create the possibility — that is all." },
];

export default function SeasonZero() {
  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">Modeled campaign · not live · not an investment promise</p>
        <h1>Season 0 Founding Seats.</h1>
        <p className="lede">346 seats. The first is cheapest. The price climbs with every seat sold. A Founding Seat is early access to a machine that might print — the mechanics are visible, the return is not promised.</p>
        <div className="hero-actions">
          <Link className="button secondary" href="/floor">See the floor</Link>
          <a className="button ghost" href="#not-a-seat">What a seat is not</a>
        </div>
        <p className="status-note">Current state: modeling only. No wallet connection, no payments, no signatures, no deployed campaign. Public counters are modeled mock data until a real campaign is approved.</p>
      </section>

      <section className="section-shell page-split">
        <div>
          <p className="eyebrow">The ladder</p>
          <h2>Earlier is cheaper. Everyone can watch the ladder move.</h2>
          <p>Founding Seats are priced on an ascending ladder: each seat sold raises the price of the next. The first buyers get the cheapest entry. If the machine proves out, later demand meets a higher floor — that structural dynamic is the honest source of upside. It is not a guarantee.</p>
        </div>
        <div className="terminal-card" aria-label="Season 0 ladder preview">
          <div className="terminal-top"><span></span><span></span><span></span><strong>ok://season-zero</strong></div>
          <div className="terminal-body">
            <p><span className="muted">&gt; seat_status</span> 87 / 346 sold</p>
            <p><span className="muted">&gt; next_seat</span> 0.008 ETH</p>
            <p><span className="muted">&gt; raise_modeled</span> ~3.75 ETH at full sellout</p>
            <p><span className="muted">&gt; campaign</span> awaiting human go</p>
          </div>
        </div>
      </section>

      <section className="section-shell page-cards">
        <div className="section-heading">
          <p className="eyebrow">Pricing ladder (modeled)</p>
          <h2>Four bands. One direction: up.</h2>
        </div>
        <div className="cards-grid three">
          {bands.map((b) => (
            <article key={b.num}>
              <span>{b.num}</span>
              <h3>{b.title}</h3>
              <p><strong>{b.price}</strong> {b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell page-split" id="includes">
        <div>
          <p className="eyebrow">What a seat includes</p>
          <h2>You are buying a seat on the floor, not a promise.</h2>
          <p>Every Founding Seat carries the artifacts that make participation visible — and nothing that pretends to be a security.</p>
        </div>
        <div className="flow-list">
          {includes.map((item) => (
            <div key={item.num}><span>{item.num}</span><p dangerouslySetInnerHTML={{ __html: item.body }} /></div>
          ))}
        </div>
      </section>

      <section className="section-shell" id="not-a-seat">
        <div className="notice-card">
          <p className="panel-kicker">What a seat is NOT</p>
          <p style={{ marginBottom: 0 }}>Not equity. No revenue share. No dividend. No guaranteed return. A seat is a participation and status artifact with mechanical upside, priced on an ascending ladder. It is transferable, but activation revalidates on transfer — rewards cannot detach from ownership.</p>
        </div>
      </section>

      <section className="section-shell step-list">
        <div className="section-heading">
          <p className="eyebrow">Campaign honesty</p>
          <h2>The rules of the road.</h2>
        </div>
        {rules.map((r) => (
          <article key={r.num}><span>{r.num}</span><h2>{r.title}</h2><p>{r.body}</p></article>
        ))}
      </section>
    </>
  );
}
