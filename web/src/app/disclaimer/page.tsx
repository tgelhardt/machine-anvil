import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer" };

export default function Disclaimer() {
  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">Disclaimer</p>
        <h1>Read this before you buy in.</h1>
        <p className="lede">OK Brokers is an independent community prototype and research proposal. It is a simulator — not a financial product, and not a promise.</p>
      </section>
      <section className="section-shell split-section page-split">
        <div>
          <h2>What this project is</h2>
          <p>OK Brokers is not affiliated with, endorsed by, or officially supported by OK Computers, @dailofrog, Bankr, Robinhood, Net Protocol, or any related team unless explicitly stated by those teams in the future.</p>
          <p>No smart contracts referenced by this project are production deployments. Nothing here has been audited for mainnet asset safety.</p>
          <p>Nothing on this site constitutes financial, investment, legal, tax, or trading advice.</p>
        </div>
        <div>
          <h2>What the demo does</h2>
          <p>The current website is a simulator. It does not connect wallets, request signatures, custody NFTs, transfer assets, price rewards live, or guarantee any rewards.</p>
          <p><strong>$BLANK</strong>, <strong>$BNKR</strong>, <strong>$ETH</strong>, <strong>$USDG</strong>, and stock-tokenized asset references are design and modeling language unless and until real contracts and compliant integrations are deployed.</p>
          <p>Stock-tokenized asset routing, if ever built, must be eligibility-gated and jurisdiction-aware. It is not universal, not live, and not promised.</p>
        </div>
      </section>
      <section className="section-shell cards-grid three page-cards">
        <article><span>01</span><h3>No guarantees</h3><p>Anyone building on these ideas does so at their own risk. There is no promise of yield, return, or reward.</p></article>
        <article><span>02</span><h3>No custody</h3><p>The demo never touches your wallet. Nothing is staked, transferred, or signed.</p></article>
        <article><span>03</span><h3>Real assets need real rails</h3><p>Asset-touching deployments require separate security review, legal and compliance review, and explicit human approval.</p></article>
      </section>
    </>
  );
}
