'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export interface OperatorCardProps {
  name: string
  logo?: React.ReactNode
  description?: string
  rating?: number
  reviews?: number
  highlight?: string
  ctaLabel?: string
  onCta?: () => void
}

export function OperatorCard({
  name,
  logo,
  description,
  rating,
  reviews,
  highlight,
  ctaLabel = 'Ver Planos',
  onCta,
}: OperatorCardProps) {
  return (
    <Card className="flex flex-col h-full space-y-4">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center bg-neutral-50 rounded-lg">
        {logo ? (
          logo
        ) : (
          <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center">
            <span className="text-primary-700 font-bold">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-h4 font-bold text-neutral-900 mb-2">{name}</h3>
        {description && (
          <p className="text-body-sm text-neutral-600 line-clamp-2">{description}</p>
        )}
      </div>

      {/* Rating */}
      {rating && (
        <div className="flex items-center gap-2">
          <div className="flex text-accent-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-sm">
                star
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-neutral-900">{rating}</span>
          {reviews && <span className="text-caption text-neutral-500">({reviews})</span>}
        </div>
      )}

      {/* Highlight Badge */}
      {highlight && <Badge variant="success">{highlight}</Badge>}

      {/* CTA */}
      <div className="flex-1 flex flex-col justify-end">
        <Button variant="primary" fullWidth size="md" onClick={onCta}>
          {ctaLabel}
        </Button>
      </div>
    </Card>
  )
}
