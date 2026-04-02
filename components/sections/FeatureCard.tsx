'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'

interface FeatureCardProps {
  icon?: string | React.ReactNode
  title: string
  description?: string
  badge?: string
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  link?: string
  onClick?: () => void
  variant?: 'default' | 'elevated'
  iconColor?: 'primary' | 'secondary' | 'success' | 'accent'
  className?: string
}

const colorMap = {
  primary: 'text-primary-600 bg-primary-50',
  secondary: 'text-secondary-600 bg-secondary-50',
  success: 'text-success-600 bg-success-50',
  accent: 'text-accent-600 bg-accent-50',
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  badge,
  badgeVariant = 'primary',
  link,
  onClick,
  variant = 'default',
  iconColor = 'primary',
  className = '',
}) => {
  const content = (
    <div
      className={`p-6 rounded-lg transition-all duration-200 h-full flex flex-col gap-4
        ${variant === 'default' ? 'bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-md' : ''}
        ${variant === 'elevated' ? 'bg-white shadow-md hover:shadow-lg border border-neutral-150' : ''}
        ${className}`}
    >
      {/* Icon + Badge Row */}
      <div className="flex items-start justify-between gap-3">
        {icon && (
          <div className={`flex-shrink-0 p-3 rounded-lg ${colorMap[iconColor]}`}>
            {typeof icon === 'string' ? (
              <Icon name={icon} size={20} />
            ) : (
              icon
            )}
          </div>
        )}
        {badge && (
          <Badge variant={badgeVariant} size="sm" className="flex-shrink-0">
            {badge}
          </Badge>
        )}
      </div>

      {/* Title + Description */}
      <div className="flex-1">
        <h3 className="text-body-lg font-semibold text-neutral-900 mb-1">{title}</h3>
        {description && (
          <p className="text-body-sm text-neutral-600 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )

  if (link) {
    return (
      <a href={link} className="block hover:no-underline">
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="text-left cursor-pointer w-full">
        {content}
      </button>
    )
  }

  return content
}
