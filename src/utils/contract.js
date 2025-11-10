import { ethers } from "ethers";

export const CONTRACT_ADDRESS = "0x60f61615c1f4e289e3aaabc32fb852f3f4216716";

export const ABI = [
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function rewardUser(address user, uint256 amount)",
  "function decimals() view returns (uint8)"
];

export const getContract = (signer) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};
