'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

interface CityBenefitCardProps {
  icon: string
  title: string
  description: string
  highestBenefit?: boolean
}

export const CityBenefitCard: React.FC<CityBenefitCardProps> = ({
  icon,
  title,
  description,
  highestBenefit = false,
}) => {
  return (
    <div
      className={`p-8 rounded-xl border transition-all duration-300 group ${
        highestBenefit
          ? 'bg-gradient-to-br from-success-50 to-success-100/70 border-success-200 shadow-md hover:shadow-lg hover:border-success-300'
          : 'bg-white border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200'
      }`}
    >
      <div className="space-y-6">
        {/* Icon with background */}
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all ${
          highestBenefit 
            ? 'bg-success-600 text-white shadow-md group-hover:shadow-lg' 
            : 'bg-gradient-to-br from-primary-100 to-primary-50 text-primary-600'
        }`}>
          <Icon name={icon} size={32} />
        </div>

        {/* Title Section */}
        <h3 className={`text-heading-5 font-bold leading-snug ${
          highestBenefit ? 'text-success-700' : 'text-neutral-900'
        }`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-body-sm leading-relaxed font-normal ${
          highestBenefit ? 'text-success-700' : 'text-neutral-700'
        }`}>
          {description}
        </p>

        {/* Highlight Indicator */}
        {highestBenefit && (
          <div className="flex items-center gap-2 pt-2 text-success-700">
            <Icon name="verified" size={16} />
            <span className="text-body-xs font-semibold">Destaque Principal</span>
          </div>
        )}
      </div>
    </div>
  )
}
