import { Link } from 'react-router-dom'
import { GameInfo, CATEGORY_LABELS } from '../data/games'

interface GameCardProps {
  game: GameInfo
}

const DIFFICULTY_LABELS: Record<GameInfo['difficulty'], string> = {
  easy: '初級',
  medium: '中級',
  hard: '上級',
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/game/${game.id}`} className="block card-hover">
      <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
        <div className="aspect-[4/3] bg-gray-900 relative overflow-hidden">
          <img
            src={game.thumbnail}
            alt={game.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-white font-bold text-lg leading-tight">
              {game.name}
            </h3>
            <p className="text-white/70 text-xs mt-0.5">{game.subtitle}</p>
          </div>
        </div>
        <div className="p-3 flex items-center gap-2">
          <span className="text-[11px] font-medium px-2 py-0.5 border border-gray-200 text-gray-500 rounded-sm">
            {CATEGORY_LABELS[game.category]}
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 border border-gray-200 text-gray-500 rounded-sm">
            {DIFFICULTY_LABELS[game.difficulty]}
          </span>
          {game.hasSound && (
            <span className="text-[11px] font-medium px-2 py-0.5 bg-navy/5 text-navy border border-navy/20 rounded-sm">
              Sound
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
