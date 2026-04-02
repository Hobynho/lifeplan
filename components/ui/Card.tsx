'use client'

import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  elevated?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ hover = true, elevated = false, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          bg-white rounded-lg p-6
          ${elevated ? 'shadow-lg' : 'shadow-base'}
          ${hover ? 'transition-shadow duration-200 hover:shadow-md' : ''}
          ${className}
        `}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'
