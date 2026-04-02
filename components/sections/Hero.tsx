'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/layout/Section'

export interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCta?: {
    label: string
    href?: string
  }
  secondaryCta?: {
    label: string
    href?: string
  }
  image?: React.ReactNode
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
}: HeroProps) {
  return (
    <Section py="lg" bg="light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          {subtitle && (
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                {subtitle}
              </span>
            </div>
          )}

          <h1 className="text-display-lg md:text-display-xl leading-tight text-neutral-900">
            {title}
          </h1>

          {description && (
            <p className="text-body-lg text-neutral-600 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {primaryCta && (
                <Button
                  onClick={() => {
                    if (primaryCta.href) window.location.href = primaryCta.href
                  }}
                  size="lg"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => {
                    if (secondaryCta.href) window.location.href = secondaryCta.href
                  }}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Image/Visual */}
        {image && (
          <div className="hidden md:block">
            {image}
          </div>
        )}
      </div>
    </Section>
  )
}
