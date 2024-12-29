import { Test } from './test'
import Example from './tutorial/04-project-structure/starter/Example'
import Navbar from './tutorial/04-project-structure/starter/Navbar'
import { Home, About } from './tutorial/04-project-structure/starter/Pages'
import List from './tutorial/05-leverage-javascript/starter/List'
import Final from './tutorial/09-context-api/final/context/Navbar'
import Starter from './tutorial/10-useReducer/starter/01-useReducer'
function App() {
  return (
    <div className="container">
      {/* <Navbar />
      <Home />
      <About />
      <Example />
      <List /> */}
      <Final />
      <Starter />

      {/* <h2>Advanced React</h2> */}
    </div>
  )
}

export default App
