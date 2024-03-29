import classNames from 'classnames'

type Props = {
  progress: number | null
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'orange'
}

export default function CircularProgressBadge({ progress, color }: Props) {
  const diameter = 50
  const strokeWidth = 5
  const radius = (diameter - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = progress === null ? circumference : circumference - (progress / 100) * circumference
  const score = progress === null ? 'N/A' : progress.toFixed(0)

  return (
    <div className="relative h-12 w-12">
      <svg viewBox={`0 0 ${diameter} ${diameter}`} xmlns="http://www.w3.org/2000/svg">
        <circle
          fill="none"
          stroke="currentColor"
          className={classNames(
            'opacity-30',
            color === undefined && 'text-white',
            color === 'blue' && 'text-blue-600',
            color === 'green' && 'text-emerald-600',
            color === 'red' && 'text-rose-600',
            color === 'yellow' && 'text-amber-400',
            color === 'orange' && 'text-orange-600'
          )}
          r={radius}
          cx={diameter / 2}
          cy={diameter / 2}
          strokeWidth={strokeWidth}
        />
        <circle
          fill="none"
          className={classNames(
            'origin-center -rotate-90 transform stroke-current',
            color === undefined && 'text-white',
            color === 'blue' && 'text-blue-600',
            color === 'green' && 'text-emerald-600',
            color === 'red' && 'text-rose-600',
            color === 'yellow' && 'text-amber-400',
            color === 'orange' && 'text-orange-600'
          )}
          r={radius}
          cx={diameter / 2}
          cy={diameter / 2}
          strokeWidth={strokeWidth}
          strokeDashoffset={offset}
          strokeDasharray={circumference}
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <span className="text-xs lg:text-sm">{score}</span>
      </div>
    </div>
  )
}
