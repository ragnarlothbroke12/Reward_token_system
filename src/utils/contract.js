import { ethers } from "ethers";

export const CONTRACT_ADDRESS = "0x6CbE2b4C5eC1fa753B6e6cA89304B2a2E447dC9D";

export const ABI = [
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function rewardUser(address user, uint256 amount)",
  "function decimals() view returns (uint8)"
];

export const getContract = (signer) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};
