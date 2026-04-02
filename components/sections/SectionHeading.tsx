'use client'

import React from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string | React.ReactNode
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'neutral'
  badge?: string
  badgeColor?: 'primary' | 'secondary' | 'success'
  className?: string
}

const sizeMap = {
  sm: {
    title: 'text-heading-lg',
    subtitle: 'text-body-md',
    description: 'text-body-sm',
  },
  md: {
    title: 'text-display-sm',
    subtitle: 'text-body-lg',
    description: 'text-body-md',
  },
  lg: {
    title: 'text-display-md',
    subtitle: 'text-heading-lg',
    description: 'text-body-lg',
  },
}

const alignMap = {
  left: 'text-left',
  center: 'text-center',
}

const badgeColorMap = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  success: 'bg-success-100 text-success-700',
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  align = 'left',
  size = 'md',
  color = 'neutral',
  badge,
  badgeColor = 'primary',
  className = '',
}) => {
  const sizeConfig = sizeMap[size]

  return (
    <div
      className={`space-y-3 ${alignMap[align]} ${align === 'center' ? 'mx-auto max-w-2xl' : ''} ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <span className={`inline-block px-3 py-1 rounded-full text-body-xs font-semibold ${badgeColorMap[badgeColor]}`}>
            {badge}
          </span>
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`${sizeConfig.subtitle} font-semibold text-primary-600`}
        >
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h2
        className={`${sizeConfig.title} font-bold ${color === 'primary' ? 'text-primary-900' : 'text-neutral-900'}`}
      >
        {title}
      </h2>

      {/* Description */}
      {description && typeof description === 'string' ? (
        <p className={`${sizeConfig.description} text-neutral-600 leading-relaxed`}>
          {description}
        </p>
      ) : (
        <div className={`${sizeConfig.description} text-neutral-600`}>{description}</div>
      )}
    </div>
  )
}
