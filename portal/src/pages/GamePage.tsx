import { useParams, Navigate } from 'react-router-dom'
import { GAMES } from '../data/games'
import { GameDetail } from '../components/GameDetail'
import { Logo } from '../components/Logo'

export function GamePage() {
  const { gameId } = useParams<{ gameId: string }>()
  const game = GAMES.find((g) => g.id === gameId)

  if (!game) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Logo />
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <GameDetail game={game} />
      </main>
    </div>
  )
}
