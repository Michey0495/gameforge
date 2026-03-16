import { useState } from 'react'
import { GameInfo, CATEGORY_LABELS } from '../data/games'
import { Link } from 'react-router-dom'

interface GameDetailProps {
  game: GameInfo
}

const DIFFICULTY_LABELS: Record<GameInfo['difficulty'], string> = {
  easy: '初級',
  medium: '中級',
  hard: '上級',
}

const DIFFICULTY_COLORS: Record<GameInfo['difficulty'], string> = {
  easy: 'text-emerald-600 border-emerald-200 bg-emerald-50',
  medium: 'text-amber-600 border-amber-200 bg-amber-50',
  hard: 'text-rose-600 border-rose-200 bg-rose-50',
}

function getGamePrompt(gameId: string): string {
  const prompts: Record<string, string> = {
    tetris: `単一HTMLファイルで完結するテトリスを作成してください。

要件:
- Canvas APIで描画（10x20マス）
- 7種のテトリミノ（I, O, T, S, Z, J, L）
- 矢印キーで移動・回転、Spaceでハードドロップ
- ネクストピース表示
- ライン消去時のエフェクト
- レベルシステム（10ライン消去でレベルアップ、速度上昇）
- スコア表示（1ライン=100, 2ライン=300, 3ライン=500, 4ライン=800）
- Web Audio APIでBGMと効果音（移動音、回転音、ライン消去音、ドロップ音）
- ゲームオーバー判定とリスタート
- レトロゲーム風のビジュアル`,

    snake: `単一HTMLファイルで完結するスネークゲームを作成してください。

要件:
- Canvas APIで描画（20x20グリッド）
- 矢印キーで方向転換（逆方向入力は無視）
- エサを食べると1マス伸びる
- 壁・自分の体に当たるとゲームオーバー
- スコアカウンター
- ローカルストレージにハイスコア保存
- エサ取得ごとに少しずつ速度上昇
- Web Audio APIで効果音（エサ取得、ゲームオーバー）
- レトロ風ピクセルデザイン`,

    othello: `単一HTMLファイルで完結するオセロ（リバーシ）を作成してください。

要件:
- 8x8盤面をCanvasまたはDOMで描画
- プレイヤー（黒）vs CPU（白）
- クリックで石を配置
- 合法手をハイライト表示
- 石の反転アニメーション
- CPU AI: 3段階の強さ選択（弱・中・強）
  - 弱: ランダム
  - 中: 角優先＋枚数最大化
  - 強: 評価テーブル方式
- パス自動判定
- 石のカウント表示
- 勝敗判定とリスタート`,

    pacman: `単一HTMLファイルで完結するパックマンを作成してください。

要件:
- Canvas APIで描画
- クラシック風の迷路レイアウト
- パックマンのアニメーション（口の開閉）
- 4体のゴースト（赤・ピンク・水色・オレンジ）
  - 各ゴーストに異なる追跡アルゴリズム
- ドット・パワーエサ配置
- パワーエサ取得でゴーストがイジケ状態に
- スコア表示、残機表示
- ステージクリア判定
- Web Audio APIで効果音（ワカワカ音、ゴースト撃破、ミス音）
- レトロ風ピクセルデザイン`,

    breakout: `単一HTMLファイルで完結するブロック崩しを作成してください。

要件:
- Canvas APIで描画
- パドル操作（矢印キー＋マウス両対応）
- ボールの物理反射
- 複数ステージ（ブロック配置が変化）
- ブロックに耐久度（1〜3、色で区別）
- スコア・残機・ステージ表示
- ボールをパドルのどこで当てるかで角度変化
- Spaceキーで発射・ポーズ
- Web Audio APIで効果音（反射音、ブロック破壊音、ミス音）
- レトロ風デザイン`,
  }
  return prompts[gameId] ?? ''
}

export function GameDetail({ game }: GameDetailProps) {
  const prompt = getGamePrompt(game.id)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-gray-500 hover:text-navy mb-6"
      >
        ← ゲーム一覧に戻る
      </Link>

      <div className="border border-gray-200 rounded-sm overflow-hidden mb-8">
        <div className="aspect-[16/9] bg-gray-900 relative">
          <img
            src={game.thumbnail}
            alt={game.name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{game.name}</h1>
          <p className="text-gray-500 mt-1">{game.subtitle}</p>
          <div className="flex gap-2 mt-3">
            <span className="text-[11px] font-medium px-2 py-0.5 border border-gray-200 text-gray-500 rounded-sm">
              {CATEGORY_LABELS[game.category]}
            </span>
            <span
              className={`text-[11px] font-medium px-2 py-0.5 border rounded-sm ${DIFFICULTY_COLORS[game.difficulty]}`}
            >
              {DIFFICULTY_LABELS[game.difficulty]}
            </span>
            {game.hasSound && (
              <span className="text-[11px] font-medium px-2 py-0.5 bg-navy/5 text-navy border border-navy/20 rounded-sm">
                Sound
              </span>
            )}
          </div>
        </div>
        <a
          href={`/games/${game.folderName}/index.html`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-sm hover:bg-navy/90 transition-colors flex-shrink-0"
        >
          プレイする
        </a>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">{game.description}</p>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
          操作方法
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-sm p-4">
          <ul className="space-y-1.5">
            {game.controls.map((ctrl, i) => (
              <li key={i} className="text-sm text-gray-700 font-mono">
                {ctrl}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
          機能
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {game.features.map((feat, i) => (
            <div
              key={i}
              className="text-sm text-gray-600 border border-gray-200 rounded-sm px-3 py-2"
            >
              {feat}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
          再現プロンプト
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          このゲームをバイブコーディングで再現するためのプロンプト。Gemini
          CanvasやClaude Artifactsにそのまま貼り付けて使える。
        </p>
        <div className="relative">
          <pre className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-700 whitespace-pre-wrap overflow-x-auto leading-relaxed">
            {prompt}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-2.5 py-1 text-[11px] font-medium text-gray-500 bg-white border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6">
        <p className="text-xs text-gray-400">
          Gemini Canvas / Claude Artifacts
          等のAIコーディング機能で開発。プロンプト一発で動くゲームが生成できることを実証するデモ。
        </p>
      </section>
    </div>
  )
}
