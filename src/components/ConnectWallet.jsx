import { useState } from "react";
import { ethers } from "ethers";
import { getContract } from "../utils/contract";

const ConnectWallet = ({ setAccount, setContract, setProvider }) => {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask first");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const contract = getContract(signer);

      setProvider(provider);
      setAccount(address);
      setContract(contract);
      setConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {!connected ? (
        <button onClick={connectWallet}>Connect MetaMask</button>
      ) : (
        <p>✅ Wallet Connected</p>
      )}
    </div>
  );
};

export default ConnectWallet;

