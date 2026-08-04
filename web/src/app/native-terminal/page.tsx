import type { Metadata } from "next";

export const metadata: Metadata = { title: "OK Brokers Native Terminal Spec" };

const commands = [
  { cmd: "connect", title: "Owner gate", body: "Connects the wallet to the OK network. Future OK Brokers can treat this as the beginning of a safe ownership check." },
  { cmd: "status", title: "Session state", body: "Confirms whether the terminal has a connected wallet context before any broker action is shown." },
  { cmd: "switch 420", title: "Desk selection", body: "Maps naturally to choosing which OK Computer is clocking into the floor." },
  { cmd: "username", title: "Broker identity", body: "Lets a terminal carry a visible broker handle instead of only a token number." },
  { cmd: "gmpost", title: "Clock-in ritual", body: "Turns the daily gm stream into an attendance mechanic for Terminal Floor shifts." },
  { cmd: "boardpost", title: "Public receipt", body: "Can announce shift closeouts, rank-ups, or desk unlocks as clearly labeled future actions." },
  { cmd: "channelwrite", title: "Floor bus", body: "A shared okbrokers channel can model rank movement, desk events, or season chatter." },
  { cmd: "datawrite", title: "Token-owned data", body: "Can store a compact shift receipt or rank snapshot against a token the wallet owns." },
  { cmd: "pageedit", title: "Cartridge deploy", body: "Publishes an OK Computer page. This is the future native build target, not a live OK Brokers deployment yet." },
];

export default function NativeTerminal() {
  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">Native terminal spec</p>
        <h1>Designed for the machine OK Computers already are.</h1>
        <p className="lede">OK Computers expose a terminal, wallet connection, public boards, daily gm posts, direct bot mail, usernames, arbitrary channels, token-owned data, and page publishing. OK Brokers maps the broker-floor game to those primitives without claiming the integration is live today.</p>
      </section>

      <section className="section-shell split-section page-split">
        <div>
          <h2>The native thesis</h2>
          <p>OK Brokers is not trying to bolt generic staking utility onto an NFT. The stronger path is to turn the OK Computers command system into a broker-floor game: command in, receipt out.</p>
          <p>The public site is the polished explainer. The future native target is a compressed terminal cartridge that can fit inside the OK Computer page/editor flow after the current byte and script limits are verified.</p>
        </div>
        <div className="flow-list">
          <div><span>01</span><p><strong>Terminal identity</strong> comes from the owned OK Computer and its connected wallet context.</p></div>
          <div><span>02</span><p><strong>Social floor</strong> can use gm, board, email, and channel commands as activity rails.</p></div>
          <div><span>03</span><p><strong>Shift state</strong> can be modeled through token-owned data keys before full contracts exist.</p></div>
          <div><span>04</span><p><strong>Cartridge path</strong> uses pageedit only after storage and JavaScript support are verified live.</p></div>
        </div>
      </section>

      <section className="section-shell native-section page-cards">
        <div className="section-heading">
          <p className="eyebrow">Command map</p>
          <h2>Real OK commands, broker-floor meaning.</h2>
        </div>
        <div className="command-grid">
          {commands.map((c) => (
            <article key={c.cmd}><code>{c.cmd}</code><h3>{c.title}</h3><p>{c.body}</p></article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section page-split">
        <div>
          <p className="eyebrow">Mock transcript</p>
          <h2>A native-feeling shift.</h2>
          <p>This is a product model, not current production output. It shows how OK Brokers should sound if it belongs inside the terminal.</p>
        </div>
        <article className="command-console full-width" aria-label="Mock command transcript">
          <pre>{`> connect
mock wallet connected
simulated owner verified: OK COMPUTER #3469

> username
broker: abearica

> gmpost clocking in to the terminal floor
gm post staged ☀️

> channelwrite okbrokers #3469 CLOCK_IN BNKR_DESK
floor event staged

> datawrite 3469 OKB_SHIFT_001 mined=12.4 blank;rank=trainee
shift receipt previewed

> boardpost #3469 clocked in to the BNKR desk
public receipt preview ready`}</pre>
        </article>
      </section>
    </>
  );
}
