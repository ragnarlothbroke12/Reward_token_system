import { useState } from "react";

const TransferTokens = ({ contract, refreshBalance }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const transferTokens = async () => {
    try {
      const tx = await contract.transfer(recipient, amount);
      await tx.wait();
      alert(` Transferred ${amount} PRT to ${recipient}`);
      refreshBalance();
      setRecipient("");
      setAmount("");
    } catch (err) {
      console.error(err);
      alert(" Transfer failed");
    }
  };

  return (
    <div className="card">
      <h3>Transfer Tokens</h3>
      <input
        type="text"
        placeholder="Recipient address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={transferTokens}>Transfer</button>
    </div>
  );
};

export default TransferTokens;
