'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

interface SocialProofBadgeProps {
  icon?: string | React.ReactNode
  label: string
  description?: string
  variant?: 'seal' | 'badge' | 'highlight'
  color?: 'primary' | 'secondary' | 'success' | 'neutral' | 'accent'
  className?: string
}

const colorStyles = {
  primary: {
    seal: 'bg-primary-50 border-primary-200 text-primary-700',
    badge: 'bg-primary-100 text-primary-700',
    highlight: 'bg-primary-500 text-white',
  },
  secondary: {
    seal: 'bg-secondary-50 border-secondary-200 text-secondary-700',
    badge: 'bg-secondary-100 text-secondary-700',
    highlight: 'bg-secondary-500 text-white',
  },
  success: {
    seal: 'bg-success-50 border-success-200 text-success-700',
    badge: 'bg-success-100 text-success-700',
    highlight: 'bg-success-500 text-white',
  },
  neutral: {
    seal: 'bg-neutral-50 border-neutral-200 text-neutral-700',
    badge: 'bg-neutral-100 text-neutral-700',
    highlight: 'bg-neutral-600 text-white',
  },
  accent: {
    seal: 'bg-accent-50 border-accent-200 text-accent-700',
    badge: 'bg-accent-100 text-accent-700',
    highlight: 'bg-accent-500 text-white',
  },
}

export const SocialProofBadge: React.FC<SocialProofBadgeProps> = ({
  icon,
  label,
  description,
  variant = 'seal',
  color = 'primary',
  className = '',
}) => {
  const styleClass = colorStyles[color][variant]

  if (variant === 'seal') {
    return (
      <div
        className={`flex flex-col items-center justify-center p-4 rounded-lg border ${styleClass} ${className}`}
      >
        {icon && (
          <div className="mb-2">
            {typeof icon === 'string' ? (
              <Icon name={icon} size={24} />
            ) : (
              icon
            )}
          </div>
        )}
        <div className="text-center">
          <p className="text-body-sm font-semibold text-center">{label}</p>
          {description && (
            <p className="text-caption text-opacity-75 mt-1">{description}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium text-body-sm ${styleClass} ${className}`}
    >
      {icon &&
        (typeof icon === 'string' ? (
          <Icon name={icon} size={16} />
        ) : (
          <span className="flex items-center">{icon}</span>
        ))}
      <span>{label}</span>
    </div>
  )
}
