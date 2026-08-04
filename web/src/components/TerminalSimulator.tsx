"use client";

import { useEffect, useRef, useState } from "react";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const bnkr = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const decimal = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
const price = new Intl.NumberFormat("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 });

function formatTimer(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function rankFor(blank: number) {
  if (blank >= 250) return "Pit Boss";
  if (blank >= 125) return "Desk Captain";
  if (blank >= 50) return "Broker";
  if (blank > 0) return "Trainee";
  return "Observer";
}

export default function TerminalSimulator() {
  // Simulator model sliders
  const [ownedTerminals, setOwnedTerminals] = useState(1);
  const [floorVolume, setFloorVolume] = useState(750000);
  const [agentFees, setAgentFees] = useState(50000);
  const [activatedNodes, setActivatedNodes] = useState(500);
  const [avgWeight, setAvgWeight] = useState(2.4);
  const [bnkrPriceVal, setBnkrPriceVal] = useState(0.003);

  // Terminal seat state
  const [activated, setActivated] = useState(false);
  const [running, setRunning] = useState(false);
  const [startedAt, setStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [blank, setBlank] = useState(0);
  const [, setTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function currentStats() {
    const liveElapsed = running ? elapsed + (Date.now() - startedAt) / 1000 : elapsed;
    const liveBlank = blank + (running ? ((Date.now() - startedAt) / 1000) * 3.469 : 0);
    return {
      liveElapsed,
      blank: liveBlank,
      receipts: Math.floor(liveBlank / 25),
      progress: Math.min(100, (liveBlank / 250) * 100),
      claimBnkr: liveBlank >= 50 ? liveBlank * 18.5 : 0,
      rank: rankFor(liveBlank),
      route: liveBlank >= 250 ? "USDG model desk" : liveBlank >= 125 ? "ETH model desk" : liveBlank >= 50 ? "BNKR rail preview" : "BNKR locked",
    };
  }

  function activateTerminal() {
    setActivated(true);
  }

  function toggleClock() {
    if (!activated) return;
    if (running) {
      const now = Date.now();
      setElapsed((e) => e + (now - startedAt) / 1000);
      setBlank((b) => b + ((now - startedAt) / 1000) * 3.469);
      setRunning(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setStartedAt(Date.now());
      setRunning(true);
      timerRef.current = setInterval(() => setTick((t) => t + 1), 250);
    }
  }

  function resetShift() {
    if (timerRef.current) clearInterval(timerRef.current);
    setActivated(false);
    setRunning(false);
    setElapsed(0);
    setBlank(0);
  }

  // Model math
  const floorFees = floorVolume * 0.1;
  const totalFees = floorFees + agentFees;
  const rewardRail = totalFees * 0.7;
  const bnkrPool = rewardRail / bnkrPriceVal;
  const totalWeight = activatedNodes * avgWeight;
  const yourWeight = ownedTerminals * avgWeight;
  const yourShare = totalWeight > 0 ? bnkrPool * (yourWeight / totalWeight) : 0;
  const blankEmitted = activatedNodes * 1440 * avgWeight;

  const stats = currentStats();
  const floorEvent = running ? "CLOCK_IN BNKR_DESK" : stats.blank > 0 ? "CLOCK_OUT BNKR_DESK" : "READY BNKR_DESK";
  const boardLine = stats.blank > 0 ? `#3469 clocked out with ${decimal.format(stats.blank)} $BLANK` : "#3469 is warming up the BNKR desk";
  const receiptStatus = running ? "clocked in" : stats.blank > 0 ? "clocked out" : "waiting for clock-out";

  return (
    <>
      <div className="simulator-grid legacy-model">
        <form className="control-panel" id="simulatorForm" onSubmit={(e) => e.preventDefault()}>
          <label>
            Your OK Computers
            <input type="range" min={1} max={50} step={1} value={ownedTerminals} onChange={(e) => setOwnedTerminals(Number(e.target.value))} />
            <output>{ownedTerminals.toLocaleString()} OK Computer{ownedTerminals === 1 ? "" : "s"}</output>
          </label>
          <label>
            Monthly floor volume
            <input type="range" min={10000} max={5000000} step={10000} value={floorVolume} onChange={(e) => setFloorVolume(Number(e.target.value))} />
            <output>{money.format(floorVolume)}</output>
          </label>
          <label>
            Terminal / agent monthly fees
            <input type="range" min={0} max={1000000} step={5000} value={agentFees} onChange={(e) => setAgentFees(Number(e.target.value))} />
            <output>{money.format(agentFees)}</output>
          </label>
          <label>
            Activated OK Computers on floor
            <input type="range" min={25} max={5000} step={25} value={activatedNodes} onChange={(e) => setActivatedNodes(Number(e.target.value))} />
            <output>{activatedNodes.toLocaleString()} terminals</output>
          </label>
          <label>
            Average tier weight
            <input type="range" min={1} max={6} step={0.1} value={avgWeight} onChange={(e) => setAvgWeight(Number(e.target.value))} />
            <output>{decimal.format(avgWeight)}x average</output>
          </label>
          <label>
            BNKR market price assumption
            <input type="range" min={0.0001} max={0.02} step={0.0001} value={bnkrPriceVal} onChange={(e) => setBnkrPriceVal(Number(e.target.value))} />
            <output>${price.format(bnkrPriceVal)} / BNKR</output>
          </label>
        </form>

        <div className="results-panel" aria-live="polite">
          <div className="metric large">
            <span>Monthly BNKR routed to activated terminals</span>
            <strong>{bnkr.format(bnkrPool)} BNKR</strong>
          </div>
          <div className="metric-grid">
            <div className="metric"><span>Fees captured</span><strong>{money.format(totalFees)}</strong></div>
            <div className="metric"><span>BNKR reward rail 70%</span><strong>{money.format(rewardRail)}</strong></div>
            <div className="metric"><span>$BLANK emitted / month</span><strong>{bnkr.format(blankEmitted)}</strong></div>
            <div className="metric"><span>Your model claim</span><strong>{bnkr.format(yourShare)} BNKR</strong></div>
          </div>
          <p className="calc-note">
            {money.format(floorFees)} comes from a modeled 10% floor fee and {money.format(agentFees)} from terminal / agent fees. The reward route assumes {ownedTerminals} terminal{ownedTerminals === 1 ? "" : "s"} at the floor average weight. Real deployment would require live prices, slippage controls, audits, and explicit user approval before touching assets.
          </p>
          <div className="ticker-tape" aria-hidden="true"><span>activate</span><span>clock in</span><span>mine $BLANK</span><span>rank up</span><span>route BNKR</span></div>
        </div>
      </div>

      <div className="terminal-lab">
        <article className="activation-panel">
          <div className="panel-kicker">Terminal seat</div>
          <div className="computer-id">OK Computer <strong>#3469</strong></div>
          <div className="status-stack">
            <p><span>Activation</span><strong>{activated ? "Activated for sandbox" : "Not activated"}</strong></p>
            <p><span>Shift</span><strong>{running ? "Clocked in" : "Clocked out"}</strong></p>
            <p><span>Custody</span><strong>NFT stays in wallet later</strong></p>
          </div>
          <div className="terminal-actions">
            <button className="button primary" type="button" onClick={activateTerminal} disabled={activated}>
              {activated ? "Terminal activated" : "Activate terminal"}
            </button>
            <button className="button secondary" type="button" onClick={toggleClock} disabled={!activated}>
              {running ? "Clock out" : "Clock in"}
            </button>
            <button className="button ghost" type="button" onClick={resetShift}>Reset sim</button>
          </div>
          <p className="microcopy">Native path: connect → status → gmpost → channelwrite → datawrite → boardpost. Early builds should never require NFT transfer or custody.</p>
        </article>

        <article className="shift-panel" aria-live="polite">
          <div className="panel-kicker">Live shift</div>
          <div className="shift-timer">{formatTimer(stats.liveElapsed)}</div>
          <div className="blank-meter">
            <span style={{ width: `${stats.progress}%` }}></span>
          </div>
          <div className="metric-grid">
            <div className="metric"><span>$BLANK mined</span><strong>{decimal.format(stats.blank)}</strong></div>
            <div className="metric"><span>Floor rank</span><strong>{stats.rank}</strong></div>
            <div className="metric"><span>Shift receipts</span><strong>{stats.receipts}</strong></div>
            <div className="metric"><span>Claim preview</span><strong>{stats.claimBnkr > 0 ? `${bnkr.format(stats.claimBnkr)} BNKR model` : "Locked"}</strong></div>
          </div>
          <div className="route-board">
            <div data-route="BNKR"><span>BNKR Rail</span><strong>{stats.blank >= 50 ? "Preview open" : "Needs 50 $BLANK"}</strong></div>
            <div data-route="ETH"><span>ETH Desk</span><strong>{stats.blank >= 125 ? "Model route open" : "Needs Desk Captain"}</strong></div>
            <div data-route="USDG"><span>USDG Desk</span><strong>{stats.blank >= 250 ? "Model route open" : "Needs Pit Boss"}</strong></div>
            <div data-route="STOCK"><span>Stock Desk</span><strong>{stats.blank >= 250 ? "Future eligible wallets only" : "Eligibility gated"}</strong></div>
          </div>
        </article>
      </div>

      <div className="native-console-grid">
        <article className="command-console" aria-label="Mock OK Computer command transcript">
          <div className="panel-kicker">Native command preview</div>
          <pre>{`> connect
mock wallet connected
simulated owner verified: OK COMPUTER #3469

> gmpost clocking in to the terminal floor
gm post preview staged ☀️

> channelwrite okbrokers #3469 ${floorEvent}
floor event ${running ? "staged" : "previewed"}

> datawrite 3469 OKB_SHIFT_001 mined=${decimal.format(stats.blank)} blank;rank=${stats.rank.toLowerCase()}
shift receipt ${stats.blank > 0 ? "previewed" : "waiting"}

> boardpost ${boardLine}
public receipt preview ${stats.blank > 0 ? "ready" : "waiting"}`}</pre>
        </article>
        <article className="receipt-card" aria-live="polite">
          <div className="panel-kicker">Receipt printer</div>
          <div className="receipt-paper">
            <strong>SHIFT RECEIPT</strong>
            <span>Terminal: OK Computer #3469</span>
            <span>Status: {receiptStatus}</span>
            <span>Timer: {formatTimer(stats.liveElapsed)}</span>
            <span>$BLANK: {decimal.format(stats.blank)}</span>
            <span>Receipts: {stats.receipts}</span>
            <span>Rank: {stats.rank}</span>
            <span>Route: {stats.route}</span>
            <small>Demo only · no wallet · no onchain write</small>
          </div>
        </article>
      </div>
    </>
  );
}
