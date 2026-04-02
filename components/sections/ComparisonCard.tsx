'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export interface PlanComparisonItem {
  name: string
  included: boolean
}

export interface ComparisonCardProps {
  operatorName: string
  planName: string
  monthlyPrice: number
  highlighted?: boolean
  features: PlanComparisonItem[]
  mainBenefit?: string
  onSelect?: () => void
}

export function ComparisonCard({
  operatorName,
  planName,
  monthlyPrice,
  highlighted = false,
  features,
  mainBenefit,
  onSelect,
}: ComparisonCardProps) {
  return (
    <Card
      className={`flex flex-col h-full transition-all duration-200 ${
        highlighted ? 'ring-2 ring-primary-500 shadow-lg' : ''
      }`}
      hover={true}
    >
      {highlighted && (
        <div className="mb-4">
          <Badge variant="primary">Melhor escolha</Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-neutral-500 font-medium mb-1">{operatorName}</p>
        <h3 className="text-h4 font-bold text-neutral-900 mb-2">{planName}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-display-md font-bold text-primary-600">
            R$ {monthlyPrice}
          </span>
          <span className="text-body-sm text-neutral-600">/mês</span>
        </div>
      </div>

      {mainBenefit && (
        <div className="mb-6 p-3 bg-primary-50 rounded-lg">
          <p className="text-sm font-semibold text-primary-700">{mainBenefit}</p>
        </div>
      )}

      {/* Features */}
      <div className="flex-1 mb-6 space-y-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {feature.included ? (
              <Icon name="check_circle" size={20} className="text-success-500 flex-shrink-0 mt-0.5" />
            ) : (
              <Icon name="cancel" size={20} className="text-neutral-300 flex-shrink-0 mt-0.5" />
            )}
            <span
              className={`text-body-sm ${
                feature.included ? 'text-neutral-700' : 'text-neutral-400'
              }`}
            >
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        fullWidth
        variant={highlighted ? 'primary' : 'secondary'}
        onClick={onSelect}
      >
        Contratar Plano
      </Button>
    </Card>
  )
}
