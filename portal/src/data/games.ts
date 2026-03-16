export type Category = 'arcade' | 'puzzle' | 'board'

export const CATEGORY_LABELS: Record<Category, string> = {
  arcade: 'アーケード',
  puzzle: 'パズル',
  board: 'ボードゲーム',
}

export interface GameInfo {
  id: string
  folderName: string
  name: string
  subtitle: string
  description: string
  category: Category
  controls: string[]
  features: string[]
  hasSound: boolean
  difficulty: 'easy' | 'medium' | 'hard'
  thumbnail: string
}

export const GAMES: GameInfo[] = [
  {
    id: 'tetris',
    folderName: '01-tetris',
    name: 'テトリス',
    subtitle: '落ちものパズルの金字塔',
    description:
      '7種のテトリミノを回転・移動させてラインを揃えて消す。レベルが上がるほど落下速度が加速する完全再現版。BGMと効果音つき。',
    category: 'puzzle',
    controls: [
      '← → : 左右移動',
      '↑ : 回転',
      '↓ : ソフトドロップ',
      'Space : ハードドロップ',
      'P : ポーズ',
    ],
    features: [
      '7種テトリミノ',
      'ネクスト表示',
      'ホールド機能',
      'レベルアップで速度上昇',
      'ライン消去エフェクト',
      'BGM・効果音',
    ],
    hasSound: true,
    difficulty: 'medium',
    thumbnail: '/screenshots/tetris.svg',
  },
  {
    id: 'snake',
    folderName: '02-snake',
    name: 'スネークゲーム',
    subtitle: '懐かしの携帯ゲーム',
    description:
      'ヘビを操作してエサを食べて成長させる。壁や自分の体にぶつかるとゲームオーバー。シンプルだが中毒性が高い。',
    category: 'arcade',
    controls: ['← → ↑ ↓ : 方向転換', 'Space : ポーズ/再開'],
    features: [
      'グリッドベース描画',
      'スコアカウンター',
      'ハイスコア保存',
      '速度段階上昇',
      '効果音',
    ],
    hasSound: true,
    difficulty: 'easy',
    thumbnail: '/screenshots/snake.svg',
  },
  {
    id: 'othello',
    folderName: '03-othello',
    name: 'オセロ',
    subtitle: '定番リバーシ対戦',
    description:
      '8x8盤面で白黒の石を交互に置き、相手の石を挟んで裏返す。CPU対戦モード搭載。合法手のハイライト表示で初心者にも遊びやすい。',
    category: 'board',
    controls: ['クリック : 石を置く', 'R : リセット'],
    features: [
      'CPU対戦（3段階AI）',
      '合法手ハイライト',
      '石カウント表示',
      'パス自動判定',
      '反転アニメーション',
    ],
    hasSound: false,
    difficulty: 'medium',
    thumbnail: '/screenshots/othello.svg',
  },
  {
    id: 'pacman',
    folderName: '04-pacman',
    name: 'パックマン',
    subtitle: 'ドットイートの元祖',
    description:
      '迷路を移動してドットを食べ尽くす。4体のゴーストから逃げつつ、パワーエサで逆襲。ステージクリア型。',
    category: 'arcade',
    controls: ['← → ↑ ↓ : 移動', 'Space : ポーズ'],
    features: [
      'クラシック迷路',
      'ゴースト4体（個性あり）',
      'パワーエサ',
      'フルーツボーナス',
      'ステージクリア',
      '効果音',
    ],
    hasSound: true,
    difficulty: 'hard',
    thumbnail: '/screenshots/pacman.svg',
  },
  {
    id: 'breakout',
    folderName: '05-breakout',
    name: 'ブロック崩し',
    subtitle: 'アーケードの原点',
    description:
      'パドルでボールを跳ね返してブロックを全て壊す。ステージが進むとブロック配置が複雑に。ボールの角度制御が鍵。',
    category: 'arcade',
    controls: [
      '← → : パドル移動',
      'Space : 発射/ポーズ',
      'マウス : パドル移動',
    ],
    features: [
      '複数ステージ',
      'ブロック耐久度',
      'ボール加速',
      'スコア・残機表示',
      'パワーアップアイテム',
      '効果音',
    ],
    hasSound: true,
    difficulty: 'easy',
    thumbnail: '/screenshots/breakout.svg',
  },
]
