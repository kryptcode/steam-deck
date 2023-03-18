import Header from "./components/Header"
import DeckV from "./components/Home/DeckV"
import EldenRing from "./components/Home/EldenRing"
import Hero from "./components/Home/Hero"
import LearnMore from "./components/Home/LearnMore"
import Morales from "./components/Home/Morales"
import Pricing from "./components/Home/Pricing"
import Stray from "./components/Home/Stray"

function App() {

  return (
    <div className="">
      <Header />
      <Hero />
      <Morales />
      <LearnMore />
      <DeckV />
      <EldenRing />
      <Pricing />
      <Stray />
    </div>
  )
}

export default App