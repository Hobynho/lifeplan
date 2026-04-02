'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'

export interface BenefitCardProps {
  icon: string
  title: string
  description: string
  badge?: string
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'info'
}

export function BenefitCard({
  icon,
  title,
  description,
  badge,
  badgeVariant = 'primary',
}: BenefitCardProps) {
  return (
    <Card className="text-center space-y-4">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
          <Icon name={icon} size={32} />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-h4 font-bold text-neutral-900">{title}</h3>
        <p className="text-body-sm text-neutral-600">{description}</p>
      </div>

      {/* Badge */}
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
    </Card>
  )
}
