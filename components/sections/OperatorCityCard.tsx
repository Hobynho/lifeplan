'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'

interface OperatorCityCardProps {
  name: string
  strength: string
  ideal: string
  icon: string
  highlighted?: boolean
  href?: string
}

export const OperatorCityCard: React.FC<OperatorCityCardProps> = ({
  name,
  strength,
  ideal,
  icon,
  highlighted = false,
  href = '#',
}) => {
  return (
    <div
      className={`relative flex flex-col h-full p-7 rounded-xl border transition-all duration-300 group ${
        highlighted
          ? 'border-2 border-primary-400 bg-gradient-to-br from-primary-50 to-primary-100/50 shadow-md hover:shadow-lg'
          : 'border border-neutral-100 bg-white shadow-sm hover:shadow-md hover:border-neutral-200'
      }`}
    >
      {/* Highlight Badge */}
      {highlighted && (
        <div className="absolute -top-4 left-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-600 text-white text-body-xs font-bold shadow-md">
          <Icon name="verified" size={16} />
          Destaque
        </div>
      )}

      {/* Icon & Name Section */}
      <div className="space-y-4 mb-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors shadow-md ${
          highlighted ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'
        }`}>
          <Icon
            name={icon}
            size={24}
            className={highlighted ? 'text-white' : 'text-primary-600'}
          />
        </div>
        <h3 className={`text-heading-5 font-bold ${
          highlighted ? 'text-primary-700' : 'text-neutral-900'
        }`}>
          {name}
        </h3>
      </div>

      {/* Strength Section */}
      <div className="mb-6 pb-6 border-b border-neutral-200/60">
        <p className="text-body-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Destaque</p>
        <p className={`text-body-sm font-medium leading-relaxed ${
          highlighted ? 'text-primary-700' : 'text-neutral-800'
        }`}>
          {strength}
        </p>
      </div>

      {/* Ideal For Section */}
      <div className="mb-auto pb-6">
        <p className="text-body-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Ideal Para</p>
        <p className={`text-body-sm leading-relaxed ${
          highlighted ? 'text-primary-600' : 'text-neutral-700'
        }`}>
          {ideal}
        </p>
      </div>

      {/* CTA Button */}
      <Link href={href} className="w-full">
        <Button
          variant={highlighted ? 'primary' : 'ghost'}
          size="sm"
          className={`w-full transition-all duration-300 ${
            highlighted ? 'shadow-md hover:shadow-lg' : ''
          }`}
        >
          Solicitar Cotação
        </Button>
      </Link>
    </div>
  )
}
