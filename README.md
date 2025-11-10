# 🪙 Reward Token DApp

This project was developed during the PhillipCapital blockchain case study challenge to explore ERC-20 implementation and wallet integration.

---

## 📚 Table of Contents
- [📌 Project Overview](#-project-overview)
- [📁 Folder Structure](#-folder-structure)
- [⚙️ Smart Contract Details](#️-smart-contract-details)
- [🚀 Getting Started](#-getting-started)
- [🧾 Author](#-author)

---


---

## 📌 Project Overview

**Use Case:**  
PhillipCapital India aims to build a blockchain-based reward system for customers completing learning activities.  
Each user earns ERC-20 tokens (PRT – *Phillip Reward Token*), which can be transferred and checked via MetaMask.

**Tech Stack:**
- Solidity (Smart Contract)
- React.js (Frontend)
- Ethers.js (Blockchain interaction)
- MetaMask (Wallet connection)
- Remix + Sepolia Testnet (Deployment)

---

## 📁 Folder Structure
```bash
client/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ConnectWallet.jsx
│   │   ├── TokenBalance.jsx
│   │   ├── RewardUser.jsx
│   │   └── TransferTokens.jsx
│   │
│   ├── smart_contract/
│   │   └── RewardToken.sol
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── contract.js
│
├── package.json
└── vite.config.js
```

---

## ⚙️ Smart Contract Details

**File:** `src/smart_contract/RewardToken.sol`

### Contract Summary:
- **Token Name:** Phillip Reward Token  
- **Symbol:** PRT  
- **Total Supply:** 1,000,000 tokens  
- **Network:** Sepolia Testnet  
- **Contract Address:** *0x60f61615c1f4e289e3aaabc32fb852f3f4216716*  

### Main Functions:
| Function | Description |
|-----------|--------------|
| `transfer(address to, uint amount)` | Allows users to send tokens to another wallet |
| `balanceOf(address account)` | Checks the token balance of any wallet |
| `rewardUser(address user, uint amount)` | Mints new tokens as a reward (only owner can call) |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ragnarlothbroke12/Reward_token_system.git
cd client

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/ragnarlothbroke12/Reward_token_system.git
cd client

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev


The app will start on http://localhost:5173
```
## 🧾 Author

Name: Siyaram Kumar

Email: siyarambiss886@gmail.com
