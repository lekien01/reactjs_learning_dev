import { Test } from './test'
import Example from './tutorial/04-project-structure/starter/Example'
import Navbar from './tutorial/04-project-structure/starter/Navbar'
import { Home, About } from './tutorial/04-project-structure/starter/Pages'
import List from './tutorial/05-leverage-javascript/starter/List'
import Final from './tutorial/06-forms/starter/01-controlled-inputs'
import Starter from './tutorial/06-forms/starter/01-controlled-inputs'
function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Example />
      <List />
      <Starter />
      {/* <Final /> */}
      {/* <h2>Advanced React</h2> */}
    </div>
  )
}

export default App
