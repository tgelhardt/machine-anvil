import type { Metadata } from "next";

export const metadata: Metadata = { title: "OK Brokers Gameplay" };

const pillars = [
  { num: "01", title: "Shifts", body: "A shift is an active session. It can map to gm/board/channel/data commands later, with a timer, output, receipt, and clock-out event." },
  { num: "02", title: "$BLANK", body: "$BLANK is the score and fuel. It is earned through shifts and can be designed with burns, tickets, boosts, and rank requirements." },
  { num: "03", title: "Ranks", body: "Observer → Trainee → Broker → Desk Captain → Pit Boss. Ranks give holders clear goals and explain why another shift matters." },
  { num: "04", title: "Desks", body: "Desks are unlockable counters. BNKR Rail opens first. ETH and USDG require higher status. Stock Desk remains eligibility-gated." },
];

export default function Gameplay() {
  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">Gameplay</p>
        <h1>The game loop behind the Terminal Floor.</h1>
        <p className="lede">OK Brokers should feel like a trading-floor arcade running in the OK Computer command world: short actions, visible meters, native posts, rank progression, unlockable desks, and receipts that prove the terminal worked.</p>
      </section>
      <section className="section-shell cards-grid four page-cards">
        {pillars.map((p) => (
          <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.body}</p></article>
        ))}
      </section>
      <section className="section-shell split-section page-split">
        <div><h2>What makes it an arcade?</h2><p>Not the word arcade. The loop. The holder should always know the next move: clock in, fill the meter, earn receipts, hit the next rank, unlock a desk, and compare progress. That creates repeat play without pretending rewards are guaranteed.</p></div>
        <div className="flow-list">
          <div><span>Loop</span><p><strong>Clock in</strong> starts the run.</p></div>
          <div><span>Meter</span><p><strong>$BLANK mined</strong> shows progress.</p></div>
          <div><span>Rank</span><p><strong>Floor status</strong> unlocks new desks.</p></div>
          <div><span>Receipt</span><p><strong>Shift proof</strong> becomes the collectible/accounting trail and future board/channel/data payload.</p></div>
        </div>
      </section>
    </>
  );
}
