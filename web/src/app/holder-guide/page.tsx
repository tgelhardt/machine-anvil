import type { Metadata } from "next";

export const metadata: Metadata = { title: "OK Brokers Holder Guide" };

const steps = [
  { step: "Step 1", title: "Open the OK terminal", body: "The native path begins inside the OK Computer interface, not on a generic staking page. Early public demos stay local and read-only." },
  { step: "Step 2", title: "Connect and check status", body: "The real terminal exposes connect and status commands. Future builds can use that ownership context without asking for custody." },
  { step: "Step 3", title: "Choose the broker context", body: "If you hold more than one OK Computer, switch/select which terminal is clocking into the floor." },
  { step: "Step 4", title: "Clock in and print receipts", body: "Clock-ins can map to gmpost, boardpost, channelwrite, or datawrite-style events once the live integration is designed." },
  { step: "Step 5", title: "Use $BLANK", body: "$BLANK is the game token: rank progression, boosts, boxes, raffles, desk tickets, burns, or reward eligibility. Exact sinks should be published before launch." },
  { step: "Step 6", title: "Review desks", body: "Desks show routes that may become available. BNKR is primary. ETH and USDG are optional. Stock Desk is future-only and eligibility-gated." },
];

export default function HolderGuide() {
  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">Holder guide</p>
        <h1>What an OK Computer holder actually does.</h1>
        <p className="lede">This page is the plain holder path. You open your OK Computer terminal, verify ownership, clock into shifts, mine $BLANK, print receipts, rank up, and review available desks.</p>
      </section>
      <section className="section-shell step-list">
        {steps.map((s) => (
          <article key={s.step}>
            <span>{s.step}</span>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
          </article>
        ))}
      </section>
      <section className="section-shell notice-card"><strong>Holder safety rule:</strong> if a page asks for NFT transfer, broad approval, unexplained asset movement, or use of the transfer command, that is not the intended early OK Brokers flow.</section>
    </>
  );
}
