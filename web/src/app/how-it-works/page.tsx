import type { Metadata } from "next";

export const metadata: Metadata = { title: "How OK Brokers Works" };

export default function HowItWorks() {
  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">How it works</p>
        <h1>OK Brokers in plain English.</h1>
        <p className="lede">An OK Computer already has a terminal, wallet connection, pages, boards, usernames, channels, and token-owned data. OK Brokers turns those primitives into a playable broker-floor loop without promising guaranteed returns.</p>
      </section>
      <section className="section-shell split-section page-split">
        <div>
          <h2>The simple version</h2>
          <p>OK Brokers is a proposed native terminal game for OK Computers. The holder opens the terminal, verifies ownership, clocks into sessions called shifts, earns $BLANK through activity, and uses rank plus $BLANK to unlock reward desks.</p>
          <p>The project is not a promise of passive income. It is a playable holder experience first. Any real rewards would require deployed contracts, audits, compliant routing, and explicit user approval.</p>
        </div>
        <div className="flow-list">
          <div><span>01</span><p><strong>connect/status</strong> verifies the owner-controlled OK Computer context.</p></div>
          <div><span>02</span><p><strong>gmpost/boardpost</strong> turns clock-ins and receipts into native social actions.</p></div>
          <div><span>03</span><p><strong>channelwrite/datawrite</strong> can model floor events and token-owned shift state.</p></div>
          <div><span>04</span><p><strong>pageedit</strong> is the future cartridge path after byte and script limits are verified.</p></div>
        </div>
      </section>
      <section className="section-shell cards-grid three page-cards">
        <article><span>CMD</span><h3>OK Commands</h3><p>The product maps to real terminal commands instead of treating the NFT like a passive stake receipt.</p></article>
        <article><span>BLK</span><h3>$BLANK</h3><p>The floor token and score. It tracks work, powers game actions, and can become the accounting layer for eligibility.</p></article>
        <article><span>BNK</span><h3>$BNKR</h3><p>The first reward route. Fees or revenue can be modeled as routed toward BNKR pools for activated terminals.</p></article>
      </section>
    </>
  );
}
