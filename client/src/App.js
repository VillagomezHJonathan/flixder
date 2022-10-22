import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

function App() {
  const [currentProfileId, setCurrentProfileId] = useState(
    '635305b6c1b00ed227436b1c'
  )

  const updateCurrentProfile = (id) => {
    setCurrentProfileId(id)
  }

  return (
    <div className="App">
      <NavBar
        currentProfileId={currentProfileId}
        updateCurrentProfile={updateCurrentProfile}
      />
      <main>
        <Routes>
          <Route
            path="/profiles/:id"
            element={<Profile currentProfileId={currentProfileId} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
