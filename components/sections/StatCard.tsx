'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'

interface StatCardProps {
  icon?: string | React.ReactNode
  number?: string | number
  label: string
  description?: string
  variant?: 'default' | 'highlight' | 'success'
  badge?: string
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  className?: string
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  number,
  label,
  description,
  variant = 'default',
  badge,
  badgeVariant = 'primary',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200',
    highlight: 'bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200 shadow-md',
    success: 'bg-gradient-to-br from-success-50 to-success-100/50 border border-success-200 shadow-md',
  }

  return (
    <div
      className={`p-7 rounded-xl transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      <div className="flex flex-col h-full gap-5">
        {/* Icon + Badge Row */}
        <div className="flex items-start justify-between">
          {icon && (
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
              variant === 'default' ? 'bg-primary-50 text-primary-600' : 
              variant === 'highlight' ? 'bg-primary-200 text-primary-700' :
              'bg-success-200 text-success-700'
            }`}>
              {typeof icon === 'string' ? (
                <Icon name={icon} size={24} />
              ) : (
                icon
              )}
            </div>
          )}
          {badge && (
            <Badge variant={badgeVariant} size="sm">
              {badge}
            </Badge>
          )}
        </div>

        {/* Number + Label */}
        <div className="flex-1 space-y-2">
          {number && (
            <div className={`text-heading-md font-bold transition-colors ${
              variant === 'default' ? 'text-neutral-900' :
              variant === 'highlight' ? 'text-primary-700' :
              'text-success-700'
            }`}>
              {number}
            </div>
          )}
          <div className={`text-body-md font-semibold transition-colors ${
            variant === 'default' ? 'text-neutral-800' :
            variant === 'highlight' ? 'text-primary-600' :
            'text-success-600'
          }`}>
            {label}
          </div>
        </div>

        {/* Description */}
        {description && (
          <div className="text-body-sm text-neutral-600 leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}
