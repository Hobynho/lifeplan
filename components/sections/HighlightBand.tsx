'use client'

import React from 'react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface HighlightBandProps {
  title: string
  description?: string | React.ReactNode
  cta?: {
    label: string
    href?: string
    onClick?: () => void
    variant?: 'primary' | 'secondary' | 'ghost'
  }
  icon?: string | React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'neutral'
  backgroundImage?: string
  align?: 'left' | 'center'
  children?: React.ReactNode
  className?: string
}

const bgColorMap = {
  primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white',
  secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-700 text-white',
  accent: 'bg-gradient-to-r from-accent-600 to-accent-700 text-white',
  success: 'bg-gradient-to-r from-success-600 to-success-700 text-white',
  neutral: 'bg-gradient-to-r from-neutral-700 to-neutral-800 text-white',
}

const textAlignMap = {
  left: 'text-left',
  center: 'text-center',
}

export const HighlightBand: React.FC<HighlightBandProps> = ({
  title,
  description,
  cta,
  icon,
  variant = 'primary',
  backgroundImage,
  align = 'center',
  children,
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden ${bgColorMap[variant]} ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay para garantir legibilidade */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      <Container>
        <div className={`relative py-16 md:py-24 ${textAlignMap[align]}`}>
          <div className={align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
            {/* Icon if center aligned */}
            {icon && align === 'center' && (
              <div className="flex justify-center mb-4">
                <div className="inline-flex p-3 bg-white/20 rounded-lg">
                  {typeof icon === 'string' ? (
                    <Icon name={icon} size={24} />
                  ) : (
                    icon
                  )}
                </div>
              </div>
            )}

            {/* Title */}
            <h2 className="text-display-md md:text-display-lg font-bold mb-4">
              {title}
            </h2>

            {/* Description */}
            {description && typeof description === 'string' ? (
              <p className="text-body-lg mb-8 opacity-95">
                {description}
              </p>
            ) : (
              <div className="mb-8 opacity-95">{description}</div>
            )}

            {/* Children */}
            {children && <div className="mb-8">{children}</div>}

            {/* CTA */}
            {cta && (
              <div className={align === 'center' ? 'flex justify-center' : ''}>
                <Button
                  variant={cta.variant || 'secondary'}
                  size="lg"
                  icon={<Icon name="arrow_forward" size={16} />}
                  iconPosition="right"
                  onClick={cta.onClick}
                  {...(cta.href && { as: 'a', href: cta.href })}
                >
                  {cta.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
