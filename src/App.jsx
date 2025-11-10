
import './App.css'
import ConnectWallet from './components/ConnectWallet'
import RewardUser from './components/RewardUser'
import TokenBalance from './components/TokenBalance'
import TransferTokens from './components/TransferTokens'

function App() {

  return (
    <div>
      <ConnectWallet />
      <RewardUser />
      <TokenBalance />
      <TransferTokens />
    </div>
  )
}

export default App
