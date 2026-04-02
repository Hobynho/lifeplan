'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'

interface ServiceCardProps {
  icon?: string | React.ReactNode
  title: string
  description: string
  cta?: {
    label: string
    href?: string
    onClick?: () => void
  }
  highlighted?: boolean
  className?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  cta,
  highlighted = false,
  className = '',
}) => {
  const borderClass = highlighted
    ? 'border-2 border-primary-400 shadow-lg'
    : 'border border-neutral-200'

  return (
    <div
      className={`relative p-6 rounded-lg bg-white transition-all duration-200 ${borderClass} hover:shadow-lg ${className}`}
    >
      {highlighted && (
        <div className="absolute -top-3 -right-3 bg-primary-500 text-white px-3 py-1 rounded-full text-caption font-semibold">
          Populares
        </div>
      )}

      <div className="space-y-4">
        {/* Icon */}
        {icon && (
          <div className="inline-flex p-3 bg-primary-50 rounded-lg">
            {typeof icon === 'string' ? (
              <Icon name={icon} size={24} className="text-primary-600" />
            ) : (
              icon
            )}
          </div>
        )}

        {/* Content */}
        <div>
          <h3 className="text-heading-sm font-bold text-neutral-900 mb-2">{title}</h3>
          <p className="text-body-sm text-neutral-600 leading-relaxed">{description}</p>
        </div>

        {/* CTA */}
        {cta && (
          <div className="pt-4 border-t border-neutral-150">
            <Button
              variant={highlighted ? 'primary' : 'ghost'}
              size="sm"
              fullWidth
              icon={<Icon name="arrow_forward" size={16} />}
              iconPosition="right"
              onClick={cta.onClick}
              {...(cta.href && { as: 'a', href: cta.href })}
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
