import { Category, CATEGORY_LABELS } from '../data/games'

interface CategoryFilterProps {
  selected: Category | null
  onChange: (cat: Category | null) => void
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const categories = Object.entries(CATEGORY_LABELS) as [Category, string][]
  return (
    <div className="flex gap-1.5 flex-wrap">
      <button
        className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-colors ${
          selected === null
            ? 'bg-navy text-white'
            : 'text-gray-500 hover:text-gray-700 border border-gray-200'
        }`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {categories.map(([key, label]) => (
        <button
          key={key}
          className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-colors ${
            selected === key
              ? 'bg-navy text-white'
              : 'text-gray-500 hover:text-gray-700 border border-gray-200'
          }`}
          onClick={() => onChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
