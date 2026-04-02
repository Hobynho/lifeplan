'use client'

import React from 'react'
import { Container } from '@/components/layout/Container'
import { StatCard } from './StatCard'

interface StatItem {
  icon?: string | React.ReactNode
  number?: string | number
  label: string
  description?: string
  badge?: string
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  variant?: 'default' | 'highlight' | 'success'
}

interface StatsRowProps {
  stats: StatItem[]
  columns?: 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
}

const gridColsMap = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

const gapMap = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
}

export const StatsRow: React.FC<StatsRowProps> = ({
  stats,
  columns = 3,
  gap = 'md',
  fullWidth = false,
  className = '',
}) => {
  const content = (
    <div className={`grid ${gridColsMap[columns]} ${gapMap[gap]} ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          number={stat.number}
          label={stat.label}
          description={stat.description}
          badge={stat.badge}
          badgeVariant={stat.badgeVariant}
          variant={stat.variant}
        />
      ))}
    </div>
  )

  if (fullWidth) {
    return <div className="w-full">{content}</div>
  }

  return <Container>{content}</Container>
}
