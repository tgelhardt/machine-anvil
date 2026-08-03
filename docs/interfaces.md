# Technical Interfaces

These are high-level smart contract interface sketches only. They are not production-ready, deployed, or audited.

## `IAnvil.sol`

Core fixed-ratio AMM interface for swapping between OK Computers NFTs and `$MACHINE`.

Conceptual functions:

```solidity
function swapNftForTokens(uint256 tokenId) external;
function swapTokensForNft() external returns (uint256 tokenId);
function snipe(uint256 tokenId) external payable;
function quoteNftForTokens(uint256 tokenId) external view returns (uint256 machineOut, uint256 fee);
function quoteTokensForNft() external view returns (uint256 machineIn, uint256 fee);
```

Responsibilities:

- Hold custody of available OK Computers in a vault.
- Maintain the fixed `1 NFT = 1,000,000 $MACHINE` ratio.
- Collect standard and snipe fees.
- Route fees according to the uniform split.

## `IMachineBooster.sol`

Yield vault responsible for receiving fees, buying `$BNKR`, and distributing to activated machines.

Conceptual functions:

```solidity
function receiveFees(address asset, uint256 amount) external;
function buyBNKR(uint256 minAmountOut) external;
function clockIn() external;
function pendingYield(uint256 tokenId) external view returns (uint256);
function totalActivatedWeight() external view returns (uint256);
```

Responsibilities:

- Receive routed fee assets.
- Convert selected assets into `$BNKR`.
- Track distributable yield.
- Allow permissionless `clockIn()` calls.
- Distribute pro-rata according to activation weight.

## `IActivation.sol`

Handles tier activation, weight tracking, and state that resets on transfer.

Conceptual functions:

```solidity
function activate(uint256 tokenId, uint8 tier) external;
function deactivateOnTransfer(uint256 tokenId) external;
function getWeight(uint256 tokenId) external view returns (uint256);
function getTier(uint256 tokenId) external view returns (uint8);
function isActivated(uint256 tokenId) external view returns (bool);
```

Responsibilities:

- Burn `$MACHINE`, or `$MACHINE + $BNKR`, to activate tiers.
- Store activation state against OK Computer token IDs.
- Reset activation on transfer.
- Expose tier and weight data to terminal frontends.

## Implementation Caution

This repository intentionally avoids full contract implementation at this stage. Real contracts that custody NFTs or route funds should wait until the economic model, official integrations, and security review path are clearer.
