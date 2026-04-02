'use client'

import React from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface PlanFeature {
  label: string
  included: boolean
  icon?: string
}

interface PlanCardProps {
  title: string
  subtitle?: string
  priceRange?: {
    min: number
    max: number
    currency?: string
  }
  features: PlanFeature[] | string[]
  cta?: {
    label: string
    href?: string
    onClick?: () => void
  }
  highlighted?: boolean
  badge?: string
  description?: string
  className?: string
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  priceRange,
  features,
  cta,
  highlighted = false,
  badge,
  description,
  className = '',
}) => {
  const borderClass = highlighted ? 'border-2 border-primary-400 shadow-xl scale-105 md:scale-100 md:origin-center' : 'border border-neutral-200'

  return (
    <div
      className={`relative flex flex-col h-full p-6 rounded-lg bg-white transition-all duration-200 ${borderClass} hover:shadow-lg ${className}`}
    >
      {/* Highlighted Badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-caption font-bold whitespace-nowrap">
          Mais Popular
        </div>
      )}

      {/* Content Wrapper */}
      <div className="space-y-4 flex-1 flex flex-col">
        {/* Header */}
        <div>
          {badge && (
            <Badge variant="primary" size="sm" className="mb-3">
              {badge}
            </Badge>
          )}
          <h3 className="text-heading-lg font-bold text-neutral-900">{title}</h3>
          {subtitle && (
            <p className="text-body-sm text-neutral-600 mt-1">{subtitle}</p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-body-sm text-neutral-600">{description}</p>
        )}

        {/* Pricing */}
        {priceRange && (
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
            <p className="text-body-xs text-neutral-600 font-medium">A partir de</p>
            <div className="flex gap-1 items-baseline">
              <span className="text-display-sm font-bold text-primary-700">
                R$ {priceRange.min.toLocaleString('pt-BR')}
              </span>
              <span className="text-body-sm text-neutral-600 font-medium">/mês</span>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="flex-1 space-y-2">
          {Array.isArray(features) && features.map((feature, index) => {
            const isFeatureObj = typeof feature === 'object' && feature !== null
            const label = isFeatureObj ? (feature as PlanFeature).label : feature
            const included = isFeatureObj ? (feature as PlanFeature).included : true
            const icon = isFeatureObj ? (feature as PlanFeature).icon : 'check_circle'

            return (
              <div
                key={index}
                className={`flex gap-3 items-start ${!included ? 'opacity-50' : ''}`}
              >
                <Icon
                  name={included ? icon || 'check_circle' : 'close'}
                  size={16}
                  className={included ? 'text-success-600 flex-shrink-0 mt-0.5' : 'text-neutral-400 flex-shrink-0 mt-0.5'}
                />
                <span className={`text-body-sm ${included ? 'font-medium text-neutral-700' : 'text-neutral-500'}`}>
                  {label}
                </span>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        {cta && (
          <div className="pt-4 border-t border-neutral-200">
            <Button
              variant={highlighted ? 'primary' : 'secondary'}
              size="md"
              fullWidth
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
