import { TattooContextProvider } from "./store/TattooContext.jsx"
import AppContent from "./AppContent.jsx"

function App() {

  return (
    <TattooContextProvider>
      <AppContent/>
    </TattooContextProvider>
  )
}

export default App
