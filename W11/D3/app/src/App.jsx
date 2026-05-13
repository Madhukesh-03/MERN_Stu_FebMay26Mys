import './App.css'
import { ManagingAPIState } from "./components/P1"
import { UseEffectLifecycle } from "./components/P2"
import { AxiosLifecycle } from "./components/P3"

function App() {

  return (
    <>
      <ManagingAPIState />
      <UseEffectLifecycle />
      <AxiosLifecycle />
    </>
  )
}

export default App