const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const decimal = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });

const els = {
  swapVolume: document.getElementById('swapVolume'),
  agentFees: document.getElementById('agentFees'),
  activatedNodes: document.getElementById('activatedNodes'),
  avgWeight: document.getElementById('avgWeight'),
  swapFee: document.getElementById('swapFee'),
  swapVolumeOut: document.getElementById('swapVolumeOut'),
  agentFeesOut: document.getElementById('agentFeesOut'),
  activatedNodesOut: document.getElementById('activatedNodesOut'),
  avgWeightOut: document.getElementById('avgWeightOut'),
  swapFeeOut: document.getElementById('swapFeeOut'),
  totalFees: document.getElementById('totalFees'),
  boosterShare: document.getElementById('boosterShare'),
  creatorShare: document.getElementById('creatorShare'),
  protocolShare: document.getElementById('protocolShare'),
  yieldPerBase: document.getElementById('yieldPerBase'),
  calcNote: document.getElementById('calcNote')
};

function updateSimulator() {
  const swapVolume = Number(els.swapVolume.value);
  const agentFees = Number(els.agentFees.value);
  const activatedNodes = Number(els.activatedNodes.value);
  const avgWeight = Number(els.avgWeight.value);
  const swapFee = Number(els.swapFee.value) / 100;

  const swapTax = swapVolume * swapFee;
  const totalFees = swapTax + agentFees;
  const booster = totalFees * 0.70;
  const creator = totalFees * 0.15;
  const protocol = totalFees * 0.15;
  const totalWeight = activatedNodes * avgWeight;
  const yieldPerBase = totalWeight > 0 ? booster / totalWeight : 0;

  els.swapVolumeOut.textContent = money.format(swapVolume);
  els.agentFeesOut.textContent = money.format(agentFees);
  els.activatedNodesOut.textContent = `${activatedNodes.toLocaleString()} nodes`;
  els.avgWeightOut.textContent = `${decimal.format(avgWeight)}x average`;
  els.swapFeeOut.textContent = `${decimal.format(swapFee * 100)}%`;

  els.totalFees.textContent = money.format(totalFees);
  els.boosterShare.textContent = money.format(booster);
  els.creatorShare.textContent = money.format(creator);
  els.protocolShare.textContent = money.format(protocol);
  els.yieldPerBase.textContent = money.format(yieldPerBase);
  els.calcNote.textContent = `${money.format(swapTax)} comes from swap tax and ${money.format(agentFees)} comes from terminal / agent fees. A 3.5x node would model at roughly ${money.format(yieldPerBase * 3.5)} before gas, slippage, treasury policy, and real liquidity constraints.`;
}

Object.values(els).forEach((el) => {
  if (el && el.tagName === 'INPUT') el.addEventListener('input', updateSimulator);
});

updateSimulator();
