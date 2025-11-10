import { useState } from "react";

const RewardUser = ({ contract, refreshBalance }) => {
  const [userAddress, setUserAddress] = useState("");
  const [amount, setAmount] = useState("");

  const rewardUser = async () => {
    try {
      const tx = await contract.rewardUser(userAddress, amount);
      await tx.wait();
      alert(` Rewarded ${userAddress} with ${amount} PRT successfully!`);
      refreshBalance();
      setUserAddress("");
      setAmount("");
    } catch (err) {
      alert(" Only owner can reward users");
      console.error(err);
    }
  };

  return (
    <div className="card">
      <h3>Reward User </h3>
      <input
        type="text"
        placeholder="User Wallet Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input"
      />
      <button onClick={rewardUser}>Reward</button>
    </div>
  );
};

export default RewardUser;
