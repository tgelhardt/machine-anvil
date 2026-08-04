# Technical Interfaces

High-level interface sketches only. Nothing here is deployed, audited, or approved for real assets.

## `ITerminalFloor.sol`

Activation and shift lifecycle for OK Computer terminals.

```solidity
function activateTerminal(uint256 tokenId, uint8 tier) external;
function clockIn(uint256 tokenId) external;
function clockOut(uint256 tokenId) external;
function terminalState(uint256 tokenId) external view returns (bool active, uint8 tier, uint256 weight);
function shiftState(uint256 tokenId) external view returns (bool running, uint256 startedAt, uint256 blankAccrued);
```

Responsibilities:

- Verify OK Computer ownership or approved delegation.
- Store activation state by token ID.
- Account for active shifts.
- Revalidate or reset state on transfer.
- Avoid NFT custody in the first real implementation unless separately approved.

## `IBLANK.sol`

Native work/fuel/ticket token for the Terminal Floor.

```solidity
function mintFromShift(address to, uint256 amount) external;
function burnForActivation(address from, uint256 amount) external;
function burnForBoost(address from, uint256 amount) external;
```

Responsibilities:

- Mint/account `$BLANK` from approved shift logic.
- Burn `$BLANK` for activation, boosts, tickets, or sinks.
- Prevent arbitrary minting.

## `IRewardRouter.sol`

Routes modeled or real protocol revenue into reward desks.

```solidity
function receiveFees(address asset, uint256 amount) external;
function routeToDesk(bytes32 desk, address asset, uint256 amount) external;
function pendingReward(uint256 tokenId, bytes32 desk) external view returns (uint256);
function claim(bytes32 desk, uint256 tokenId, uint256 minAmountOut) external;
```

Initial desks:

```text
BNKR_DESK
ETH_DESK
USDG_DESK
```

Future desk:

```text
STOCK_DESK // eligibility-gated placeholder only
```

Responsibilities:

- Track reward accounting with global indexes, not loops over all terminals.
- Support slippage controls for any swaps/buybacks.
- Keep stock-token routing disabled unless compliant rails and eligibility checks exist.

## `IEligibilityGate.sol`

Placeholder for any future restricted reward route.

```solidity
function isEligible(address wallet, bytes32 route) external view returns (bool);
function routeStatus(bytes32 route) external view returns (bool enabled, string memory notice);
```

Responsibilities:

- Keep restricted routes opt-in and jurisdiction-aware.
- Prevent public copy or UI state from implying universal stock-token access.

## Implementation caution

The first production-grade path should be:

```text
mock contracts → local tests → Base Sepolia → security review → explicit launch approval
```

Do not connect real OK Computer assets to contract custody, approvals, or transfer flows until that path is complete.
