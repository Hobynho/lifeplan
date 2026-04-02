'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

interface InfrastructureCardProps {
  name: string
  category: string
  icon: string
  description: string
  specialty?: string
}

export const InfrastructureCard: React.FC<InfrastructureCardProps> = ({
  name,
  category,
  icon,
  description,
  specialty,
}) => {
  return (
    <div className="p-8 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-200 group">
      <div className="space-y-5">
        {/* Header with Icon */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3 flex-1">
            <p className="text-body-xs font-semibold text-primary-600 uppercase tracking-wide">
              {category}
            </p>
            <h3 className="text-heading-5 font-bold text-neutral-900">
              {name}
            </h3>
          </div>
          <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:bg-primary-200 transition-all duration-300">
            <Icon name={icon} size={24} className="text-primary-600" />
          </div>
        </div>

        {/* Description */}
        <p className="text-body-sm text-neutral-700 leading-relaxed">
          {description}
        </p>

        {/* Specialty */}
        {specialty && (
          <div className="pt-4 border-t border-neutral-200">
            <p className="text-body-xs text-neutral-600 leading-relaxed">
              <span className="font-semibold text-neutral-700">Especialidade:</span> {specialty}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
