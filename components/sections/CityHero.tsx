'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface CityHeroProps {
  cityName: string
  tagline: string
  description: string
  image?: string
  onQuoteClick?: () => void
}

export const CityHero: React.FC<CityHeroProps> = ({
  cityName,
  tagline,
  description,
  image,
  onQuoteClick,
}) => {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background Image with Overlay */}
      {image && (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary-700 via-primary-700/90 to-transparent" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white">
            <Icon name="location_on" size={16} className="opacity-90" />
            <span className="text-body-sm font-semibold">Atendimento em {cityName}</span>
          </div>

          {/* Title Section */}
          <div className="space-y-4">
            <h1 className="text-display-2xl md:text-display-3xl font-bold text-white max-w-2xl leading-tight">
              Planos de Saúde Premium em {cityName}
            </h1>
            
            {/* Tagline */}
            <p className="text-heading-3 text-primary-50 max-w-xl font-medium">
              {tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-body-lg text-primary-100 max-w-2xl leading-relaxed font-light">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              variant="secondary"
              size="lg"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Icon name="description" size={20} />
              Cotação Personalizada
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Icon name="call" size={20} />
              (81) 9999-9999
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-4 text-white/90">
            <div className="flex items-center gap-2">
              <Icon name="verified" size={16} />
              <span className="text-body-sm font-medium">100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="access_time" size={16} />
              <span className="text-body-sm font-medium">Resposta em minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="shield" size={16} />
              <span className="text-body-sm font-medium">Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
