import Content from "./Components/Content"
import Menu from "./Components/Menu"
const App = () => {
  return (
    <div className="flex min-h-screen w-full overflow-y-auto overflow-x-hidden">
      <Menu/>
      <Content/>
    </div>
  )
}

export default App
