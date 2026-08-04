const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const bnkr = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const decimal = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });
const price = new Intl.NumberFormat('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 });

const els = {
  simulatorForm: document.getElementById('simulatorForm'),
  ownedTerminals: document.getElementById('ownedTerminals'),
  floorVolume: document.getElementById('floorVolume'),
  agentFees: document.getElementById('agentFees'),
  activatedNodes: document.getElementById('activatedNodes'),
  avgWeight: document.getElementById('avgWeight'),
  bnkrPrice: document.getElementById('bnkrPrice'),
  ownedTerminalsOut: document.getElementById('ownedTerminalsOut'),
  floorVolumeOut: document.getElementById('floorVolumeOut'),
  agentFeesOut: document.getElementById('agentFeesOut'),
  activatedNodesOut: document.getElementById('activatedNodesOut'),
  avgWeightOut: document.getElementById('avgWeightOut'),
  bnkrPriceOut: document.getElementById('bnkrPriceOut'),
  bnkrPool: document.getElementById('bnkrPool'),
  totalFees: document.getElementById('totalFees'),
  boosterShare: document.getElementById('boosterShare'),
  blankEmitted: document.getElementById('blankEmitted'),
  yourClaim: document.getElementById('yourClaim'),
  calcNote: document.getElementById('calcNote'),
  activateTerminal: document.getElementById('activateTerminal'),
  clockToggle: document.getElementById('clockToggle'),
  resetShift: document.getElementById('resetShift'),
  activationStatus: document.getElementById('activationStatus'),
  shiftStatus: document.getElementById('shiftStatus'),
  shiftTimer: document.getElementById('shiftTimer'),
  blankMeter: document.getElementById('blankMeter'),
  blankMined: document.getElementById('blankMined'),
  floorRank: document.getElementById('floorRank'),
  shiftReceipts: document.getElementById('shiftReceipts'),
  claimPreview: document.getElementById('claimPreview'),
  routeBnkr: document.getElementById('routeBnkr'),
  routeEth: document.getElementById('routeEth'),
  routeUsdg: document.getElementById('routeUsdg'),
  routeStock: document.getElementById('routeStock'),
  commandTranscript: document.getElementById('commandTranscript'),
  shiftReceipt: document.getElementById('shiftReceipt')
};

const shift = {
  activated: false,
  running: false,
  startedAt: 0,
  elapsed: 0,
  blank: 0,
  receipts: 0,
  timer: null
};

function formatTimer(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function rankFor(blank) {
  if (blank >= 250) return 'Pit Boss';
  if (blank >= 125) return 'Desk Captain';
  if (blank >= 50) return 'Broker';
  if (blank > 0) return 'Trainee';
  return 'Observer';
}

function currentShiftStats() {
  const liveElapsed = shift.running ? shift.elapsed + ((Date.now() - shift.startedAt) / 1000) : shift.elapsed;
  const blank = shift.blank + (shift.running ? (Date.now() - shift.startedAt) / 1000 * 3.469 : 0);
  const receipts = Math.floor(blank / 25);
  const progress = Math.min(100, (blank / 250) * 100);
  const claimBnkr = blank >= 50 ? blank * 18.5 : 0;
  const rank = rankFor(blank);
  const route = blank >= 250 ? 'USDG model desk' : blank >= 125 ? 'ETH model desk' : blank >= 50 ? 'BNKR rail preview' : 'BNKR locked';
  return { liveElapsed, blank, receipts, progress, claimBnkr, rank, route };
}

function updateNativePreview(stats = currentShiftStats()) {
  if (els.commandTranscript) {
    const mined = decimal.format(stats.blank);
    const rank = stats.rank.toLowerCase();
    const floorEvent = shift.running ? 'CLOCK_IN BNKR_DESK' : stats.blank > 0 ? 'CLOCK_OUT BNKR_DESK' : 'READY BNKR_DESK';
    const boardLine = stats.blank > 0
      ? `#3469 clocked out with ${mined} $BLANK`
      : '#3469 is warming up the BNKR desk';

    els.commandTranscript.textContent = `> connect\nmock wallet connected\nsimulated owner verified: OK COMPUTER #3469\n\n> gmpost clocking in to the terminal floor\ngm post preview staged ☀️\n\n> channelwrite okbrokers #3469 ${floorEvent}\nfloor event ${shift.running ? 'staged' : 'previewed'}\n\n> datawrite 3469 OKB_SHIFT_001 mined=${mined} blank;rank=${rank}\nshift receipt ${stats.blank > 0 ? 'previewed' : 'waiting'}\n\n> boardpost ${boardLine}\npublic receipt preview ${stats.blank > 0 ? 'ready' : 'waiting'}`;
  }

  if (els.shiftReceipt) {
    const status = shift.running ? 'clocked in' : stats.blank > 0 ? 'clocked out' : 'waiting for clock-out';
    els.shiftReceipt.innerHTML = `
            <strong>SHIFT RECEIPT</strong>
            <span>Terminal: OK Computer #3469</span>
            <span>Status: ${status}</span>
            <span>Timer: ${formatTimer(stats.liveElapsed)}</span>
            <span>$BLANK: ${decimal.format(stats.blank)}</span>
            <span>Receipts: ${stats.receipts}</span>
            <span>Rank: ${stats.rank}</span>
            <span>Route: ${stats.route}</span>
            <small>Demo only · no wallet · no onchain write</small>`;
  }
}

function updateShiftUi() {
  const stats = currentShiftStats();

  els.activationStatus.textContent = shift.activated ? 'Activated for sandbox' : 'Not activated';
  els.shiftStatus.textContent = shift.running ? 'Clocked in' : 'Clocked out';
  els.clockToggle.disabled = !shift.activated;
  els.clockToggle.textContent = shift.running ? 'Clock out' : 'Clock in';
  els.activateTerminal.textContent = shift.activated ? 'Terminal activated' : 'Activate terminal';
  els.activateTerminal.disabled = shift.activated;

  els.shiftTimer.textContent = formatTimer(stats.liveElapsed);
  els.blankMined.textContent = `${decimal.format(stats.blank)} $BLANK`;
  els.blankMeter.style.width = `${stats.progress}%`;
  els.floorRank.textContent = stats.rank;
  els.shiftReceipts.textContent = stats.receipts.toString();
  els.claimPreview.textContent = stats.claimBnkr > 0 ? `${bnkr.format(stats.claimBnkr)} BNKR model` : 'Mine 50 $BLANK';

  els.routeBnkr.textContent = stats.blank >= 50 ? 'Preview open' : 'Needs 50 $BLANK';
  els.routeEth.textContent = stats.blank >= 125 ? 'Model route open' : 'Needs Desk Captain';
  els.routeUsdg.textContent = stats.blank >= 250 ? 'Model route open' : 'Needs Pit Boss';
  els.routeStock.textContent = stats.blank >= 250 ? 'Future eligible wallets only' : 'Eligibility gated';
  updateNativePreview(stats);
}

function activateTerminal() {
  shift.activated = true;
  updateShiftUi();
}

function toggleClock() {
  if (!shift.activated) return;

  if (shift.running) {
    shift.elapsed += (Date.now() - shift.startedAt) / 1000;
    shift.blank += (Date.now() - shift.startedAt) / 1000 * 3.469;
    shift.receipts = Math.floor(shift.blank / 25);
    shift.running = false;
    clearInterval(shift.timer);
    shift.timer = null;
  } else {
    shift.running = true;
    shift.startedAt = Date.now();
    shift.timer = setInterval(updateShiftUi, 250);
  }
  updateShiftUi();
}

function resetShift() {
  clearInterval(shift.timer);
  shift.activated = false;
  shift.running = false;
  shift.startedAt = 0;
  shift.elapsed = 0;
  shift.blank = 0;
  shift.receipts = 0;
  shift.timer = null;
  updateShiftUi();
}

function updateSimulator() {
  const ownedTerminals = Number(els.ownedTerminals.value);
  const floorVolume = Number(els.floorVolume.value);
  const agentFees = Number(els.agentFees.value);
  const activatedNodes = Number(els.activatedNodes.value);
  const avgWeight = Number(els.avgWeight.value);
  const bnkrPrice = Number(els.bnkrPrice.value);

  const floorFeeRate = 0.10;
  const floorFees = floorVolume * floorFeeRate;
  const totalFees = floorFees + agentFees;
  const rewardRail = totalFees * 0.70;
  const bnkrPool = rewardRail / bnkrPrice;
  const totalWeight = activatedNodes * avgWeight;
  const yourWeight = ownedTerminals * avgWeight;
  const yourShare = totalWeight > 0 ? bnkrPool * (yourWeight / totalWeight) : 0;
  const blankEmitted = activatedNodes * 1440 * avgWeight;

  els.ownedTerminalsOut.textContent = `${ownedTerminals.toLocaleString()} OK Computer${ownedTerminals === 1 ? '' : 's'}`;
  els.floorVolumeOut.textContent = money.format(floorVolume);
  els.agentFeesOut.textContent = money.format(agentFees);
  els.activatedNodesOut.textContent = `${activatedNodes.toLocaleString()} terminals`;
  els.avgWeightOut.textContent = `${decimal.format(avgWeight)}x average`;
  els.bnkrPriceOut.textContent = `$${price.format(bnkrPrice)} / BNKR`;

  els.bnkrPool.textContent = `${bnkr.format(bnkrPool)} BNKR`;
  els.totalFees.textContent = money.format(totalFees);
  els.boosterShare.textContent = money.format(rewardRail);
  els.blankEmitted.textContent = `${bnkr.format(blankEmitted)} $BLANK`;
  els.yourClaim.textContent = `${bnkr.format(yourShare)} BNKR`;
  els.calcNote.textContent = `${money.format(floorFees)} comes from a modeled 10% floor fee and ${money.format(agentFees)} from terminal / agent fees. The reward route assumes ${ownedTerminals} terminal${ownedTerminals === 1 ? '' : 's'} at the floor average weight. Real deployment would require live prices, slippage controls, audits, and explicit user approval before touching assets.`;
}

if (els.simulatorForm) {
  Object.values(els).forEach((el) => {
    if (el && el.tagName === 'INPUT') el.addEventListener('input', updateSimulator);
  });

  els.activateTerminal?.addEventListener('click', activateTerminal);
  els.clockToggle?.addEventListener('click', toggleClock);
  els.resetShift?.addEventListener('click', resetShift);

  updateSimulator();
  updateShiftUi();
}
