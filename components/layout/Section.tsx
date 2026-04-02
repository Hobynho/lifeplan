'use client'

import React from 'react'

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  py?: 'sm' | 'md' | 'lg'
  bg?: 'light' | 'elevated' | 'primary' | 'white' | 'primary-50' | 'primary-900'
}

export function Section({
  children,
  py = 'lg',
  bg = 'light',
  className = '',
  ...props
}: SectionProps) {
  const paddingY = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  }

  const backgrounds = {
    light: 'bg-neutral-50',
    elevated: 'bg-white',
    primary: 'bg-primary-50',
    'white': 'bg-white',
    'primary-50': 'bg-primary-50',
    'primary-900': 'bg-primary-900',
  }

  return (
    <section
      className={`${paddingY[py]} ${backgrounds[bg]} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
