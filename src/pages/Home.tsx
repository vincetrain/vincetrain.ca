import TerminalNav from "../components/TerminalNav/TerminalNav"
import commands from "../assets/commands.json"
import styles from "../assets/terminalstyles.json"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-sepia text-white">
      <TerminalNav commands={commands}/>
    </div>
  )
}

export default Home