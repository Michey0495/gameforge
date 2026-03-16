import { useState } from 'react'
import { Logo } from '../components/Logo'
import { CategoryFilter } from '../components/CategoryFilter'
import { GameCard } from '../components/GameCard'
import { GAMES, Category } from '../data/games'

export function Home() {
  const [category, setCategory] = useState<Category | null>(null)

  const filtered = category
    ? GAMES.filter((g) => g.category === category)
    : GAMES

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <span className="text-xs text-gray-400">
            バイブコーディング x レトロゲーム
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            レトロゲーム再現コレクション
          </h1>
          <p className="text-sm text-gray-500 max-w-2xl">
            生成AIのバイブコーディングで再現したレトロゲーム集。プロンプト一つで動くゲームが作れることを体験するハンズオン教材。
          </p>
        </div>

        <div className="mb-6">
          <CategoryFilter selected={category} onChange={setCategory} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            該当するゲームがありません
          </p>
        )}
      </main>

      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
          GameForge - AI駆動開発デモ
        </div>
      </footer>
    </div>
  )
}
