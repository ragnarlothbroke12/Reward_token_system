import { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import TokenBalance from "./components/TokenBalance";
import TransferTokens from "./components/TransferTokens";
import RewardUser from "./components/RewardUser";
import "./App.css";

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [balance, setBalance] = useState("0");

  const refreshBalance = async () => {
    if (contract && account) {
      const bal = await contract.balanceOf(account);
      const decimals = await contract.decimals();
      setBalance((Number(bal) / 10 ** decimals).toString());
    }
  };

  return (
    <div className="app">
      <h1> Phillip Reward Token (PRT)</h1>
      <ConnectWallet
        setAccount={setAccount}
        setContract={setContract}
        setProvider={setProvider}
      />

      {account && (
        <>
          <TokenBalance
            contract={contract}
            account={account}
            balance={balance}
            setBalance={setBalance}
          />
          <TransferTokens contract={contract} refreshBalance={refreshBalance} />
          <RewardUser
            contract={contract}
            account={account}
            refreshBalance={refreshBalance}
          />
        </>
      )}
    </div>
  );
}

export default App;
