import type { Metadata } from "next";

export const metadata: Metadata = { title: "OK Brokers FAQ" };

const faqs = [
  { q: "Is OK Brokers official?", a: "No. It is an independent community prototype unless the relevant teams explicitly say otherwise." },
  { q: "Does the current demo connect to a wallet?", a: "No. The current site is local simulation only. It does not read wallets, request signatures, transfer assets, or deploy contracts." },
  { q: "Does an OK Computer need to leave my wallet?", a: "The intended early design says no. The safer path is read-only ownership checks and signatures before any testnet or mainnet action." },
  { q: "Does this use real OK Computer commands yet?", a: "No. The current site only simulates the command flow. Future native work may map to connect, status, gmpost, boardpost, channelwrite, datawrite/dataread, and pageedit after limits and behavior are verified on the real terminal." },
  { q: "Should OK Brokers ever ask me to transfer my OK Computer?", a: "No. The intended early path avoids transfer and custody. The OK Computer help menu has a transfer command, but OK Brokers should not require it for activation, gameplay, receipts, or testing." },
  { q: "Can this live inside an OK Computer page?", a: "That is the target, not a current claim. The editor limit and script support need live verification because older guidance says 51,200 bytes and no inline scripts while later v1.1 material says 64kb and JavaScript support." },
  { q: "What is $BLANK?", a: "$BLANK is the proposed native work token and score for Terminal Floor activity. It is not live unless contracts are deployed later." },
  { q: "Are rewards guaranteed?", a: "No. BNKR, ETH, USDG, and Stock Desk references are modeled routes, not guaranteed payouts." },
  { q: "What about stock-tokenized assets?", a: "Stock Desk is future-only, optional, and eligibility-gated. The core OK Brokers loop must work without stock-token access." },
];

export default function Faq() {
  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">FAQ</p>
        <h1>Clear answers before anyone clicks a wallet button.</h1>
        <p className="lede">The project should be readable before it is interactive. This FAQ keeps status, safety, token language, and reward routing boundaries clear.</p>
      </section>
      <section className="section-shell faq-list">
        {faqs.map((f) => (
          <article key={f.q}>
            <h2>{f.q}</h2>
            <p>{f.a}</p>
          </article>
        ))}
      </section>
    </>
  );
}
