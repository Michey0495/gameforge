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
  {
    id: 'minesweeper',
    folderName: '06-minesweeper',
    name: 'マインスイーパー',
    subtitle: 'Windows定番パズル',
    description:
      '地雷の埋まったマス目を数字のヒントだけで推理して開いていく。旗を立てて地雷位置をマーキング。初級・中級・上級の3段階。',
    category: 'puzzle',
    controls: ['左クリック : マスを開く', '右クリック : 旗を立てる/外す', 'R : リセット'],
    features: [
      '3段階の難易度',
      '初手安全保証',
      '旗マーキング',
      'タイマー',
      '地雷カウンター',
      '連鎖オープン',
    ],
    hasSound: false,
    difficulty: 'medium',
    thumbnail: '/screenshots/minesweeper.svg',
  },
  {
    id: 'invaders',
    folderName: '07-invaders',
    name: 'スペースインベーダー',
    subtitle: 'シューティングの原点',
    description:
      '画面上部から迫るエイリアン群を自機のレーザーで撃ち落とす。端に到達するたび一段降下。UFOボーナスあり。',
    category: 'arcade',
    controls: ['← → : 自機移動', 'Space : 発射', 'P : ポーズ'],
    features: [
      '5x11エイリアン編隊',
      'UFOボーナス',
      '防護壁4基',
      'エイリアン加速',
      'ステージクリア',
      '効果音',
    ],
    hasSound: true,
    difficulty: 'medium',
    thumbnail: '/screenshots/invaders.svg',
  },
  {
    id: '2048',
    folderName: '08-2048',
    name: '2048',
    subtitle: '数字パズルの中毒ゲー',
    description:
      '4x4グリッドでタイルをスライドさせ同じ数字を合体。2048タイルの生成を目指す。一手ごとにランダムタイル出現。',
    category: 'puzzle',
    controls: ['← → ↑ ↓ : タイルスライド', 'R : リセット'],
    features: [
      '4x4グリッド',
      'スライドアニメーション',
      'スコア表示',
      'ベストスコア保存',
      '勝利/敗北判定',
      'タイル色分け',
    ],
    hasSound: false,
    difficulty: 'easy',
    thumbnail: '/screenshots/2048.svg',
  },
  {
    id: 'shogi',
    folderName: '09-shogi',
    name: '将棋',
    subtitle: '日本の伝統戦略ゲーム',
    description:
      '9x9盤で40枚の駒を操る。取った駒を再利用できる独自ルール。CPU対戦で駒の動きを学べる入門モード搭載。',
    category: 'board',
    controls: ['クリック : 駒選択・移動', 'R : リセット'],
    features: [
      '全駒の正規移動ルール',
      '成り判定',
      '持ち駒・打ち',
      'CPU対戦',
      '合法手ハイライト',
      '王手検出',
    ],
    hasSound: false,
    difficulty: 'hard',
    thumbnail: '/screenshots/shogi.svg',
  },
  {
    id: 'frogger',
    folderName: '10-frogger',
    name: 'フロッガー',
    subtitle: '道路横断アクション',
    description:
      'カエルを操作して車が行き交う道路と丸太が流れる川を渡り、向こう岸のゴールを目指す。全5匹到達でステージクリア。',
    category: 'arcade',
    controls: ['← → ↑ ↓ : カエル移動', 'Space : ポーズ'],
    features: [
      '道路ゾーン+川ゾーン',
      '丸太・亀の足場',
      '5匹ゴール制',
      'タイマー制限',
      'ステージクリア',
      '効果音',
    ],
    hasSound: true,
    difficulty: 'medium',
    thumbnail: '/screenshots/frogger.svg',
  },
]
