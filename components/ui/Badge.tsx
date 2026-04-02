'use client'

import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  size?: 'sm' | 'md'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-100 text-primary-700',
      secondary: 'bg-secondary-100 text-secondary-700',
      success: 'bg-success-100 text-success-700',
      warning: 'bg-warning-100 text-warning-700',
      error: 'bg-error-100 text-error-700',
      info: 'bg-info-100 text-info-700',
      neutral: 'bg-neutral-100 text-neutral-700',
    }

    const sizes = {
      sm: 'px-3 py-1 text-xs font-medium rounded',
      md: 'px-4 py-2 text-sm font-medium rounded-md',
    }

    return (
      <span
        ref={ref}
        className={`${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
