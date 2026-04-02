'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface PlanTypeCardProps {
  title: string
  description: string
  icon: string
  audience: string
  recommended?: boolean
}

export const PlanTypeCard: React.FC<PlanTypeCardProps> = ({
  title,
  description,
  icon,
  audience,
  recommended = false,
}) => {
  return (
    <div
      className={`relative flex flex-col h-full p-8 rounded-xl border transition-all duration-300 ${
        recommended
          ? 'border-2 border-success-400 bg-gradient-to-br from-success-50 to-success-100/50 shadow-md hover:shadow-lg'
          : 'border border-neutral-100 bg-white shadow-sm hover:shadow-md hover:border-neutral-200'
      }`}
    >
      {/* Recommended Badge */}
      {recommended && (
        <div className="absolute -top-4 left-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-success-600 text-white text-body-xs font-bold shadow-md">
          <Icon name="star" size={16} />
          Recomendado
        </div>
      )}

      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all shadow-md ${
        recommended ? 'bg-success-600 text-white' : 'bg-primary-100 text-primary-600'
      }`}>
        <Icon
          name={icon}
          size={24}
          className={recommended ? 'text-white' : 'text-primary-600'}
        />
      </div>

      {/* Title */}
      <h3 className={`text-heading-5 font-bold mb-4 ${
        recommended ? 'text-success-700' : 'text-neutral-900'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-body-sm mb-6 leading-relaxed ${
        recommended ? 'text-success-700/80' : 'text-neutral-700'
      }`}>
        {description}
      </p>

      {/* Audience */}
      <div className="mb-6 pb-6 border-b border-neutral-200/60 flex-1">
        <p className="text-body-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Ideal Para</p>
        <p className={`text-body-sm font-medium leading-relaxed ${
          recommended ? 'text-success-700' : 'text-neutral-800'
        }`}>
          {audience}
        </p>
      </div>

      {/* CTA */}
      <Button
        variant={recommended ? 'primary' : 'ghost'}
        size="sm"
        className={`w-full transition-all duration-300 ${
          recommended ? 'shadow-md hover:shadow-lg' : ''
        }`}
      >
        Comparar Planos
      </Button>
    </div>
  )
}
