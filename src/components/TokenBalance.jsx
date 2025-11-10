import { useEffect } from "react";
import { ethers } from "ethers";

const TokenBalance = ({ contract, account, balance, setBalance }) => {
  const fetchBalance = async () => {
    if (contract && account) {
      const bal = await contract.balanceOf(account);
      const decimals = await contract.decimals();
      setBalance(ethers.formatUnits(bal, decimals));
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [contract, account]);

  return (
    <div className="balance-card">
      <p><strong>Wallet:</strong> {account}</p>
      <p><strong>Balance:</strong> {balance} PRT</p>
    </div>
  );
};

export default TokenBalance;

