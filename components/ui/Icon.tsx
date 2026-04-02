'use client'

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: 16 | 20 | 24 | 32 | 40
  filled?: boolean
}

export function Icon({ name, size = 24, filled = false, className = '', ...props }: IconProps) {
  const sizeClass = {
    16: 'text-[1rem]',
    20: 'text-[1.25rem]',
    24: 'text-[1.5rem]',
    32: 'text-[2rem]',
    40: 'text-[2.5rem]',
  }[size]

  return (
    <span
      className={`material-symbols-outlined ${sizeClass} ${filled ? 'fill-current' : ''} ${className}`}
      {...props}
    >
      {name}
    </span>
  )
}
