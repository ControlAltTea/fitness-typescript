import { useState } from 'react'
import NavBar from "@/scenes/navbar"

function App() {
const {selectedPage, setSelectedPage} = useState()
  return (
    <div className="app bg-gray-20">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
