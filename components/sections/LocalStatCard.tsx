'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

interface LocalStatCardProps {
  icon: string
  number: string
  label: string
  description?: string
  highlight?: boolean
}

export const LocalStatCard: React.FC<LocalStatCardProps> = ({
  icon,
  number,
  label,
  description,
  highlight = false,
}) => {
  return (
    <div
      className={`p-8 rounded-xl transition-all duration-300 ${
        highlight
          ? 'bg-gradient-to-br from-primary-50 to-primary-100/70 border border-primary-200 shadow-md hover:shadow-lg'
          : 'bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200'
      }`}
    >
      <div className="space-y-6">
        {/* Icon Container */}
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center transition-colors ${
          highlight ? 'bg-primary-600 text-white shadow-md' : 'bg-primary-100 text-primary-600'
        }`}>
          <Icon name={icon} size={24} />
        </div>

        {/* Number & Label Section */}
        <div className="space-y-3">
          <p className={`text-display-sm font-bold ${
            highlight ? 'text-primary-700' : 'text-neutral-900'
          }`}>
            {number}
          </p>
          <p className={`text-body-md font-semibold leading-snug ${
            highlight ? 'text-primary-600' : 'text-neutral-800'
          }`}>
            {label}
          </p>
        </div>

        {/* Description */}
        {description && (
          <p className={`text-body-sm leading-relaxed ${
            highlight ? 'text-primary-600 font-medium' : 'text-neutral-600'
          }`}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
