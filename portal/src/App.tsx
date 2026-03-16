import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { GamePage } from './pages/GamePage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:gameId" element={<GamePage />} />
    </Routes>
  )
}
