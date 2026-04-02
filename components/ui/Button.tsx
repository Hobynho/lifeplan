'use client'

import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    fullWidth = false,
    loading = false,
    className = '',
    children,
    disabled,
    ...props
  }, ref) => {
    const baseStyles = 'font-semibold rounded-lg focus-ring transition-all duration-200 flex items-center justify-center gap-2'

    const variants = {
      primary: 'text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed',
      secondary: 'text-primary-500 border-2 border-primary-500 hover:bg-primary-50 active:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed',
      ghost: 'text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed',
      danger: 'text-white bg-error-500 hover:bg-error-600 active:bg-error-700 disabled:opacity-50 disabled:cursor-not-allowed',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const widthClass = fullWidth ? 'w-full' : ''

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        {...props}
      >
        {loading && (
          <span className="inline-block animate-spin">
            <span className="material-symbols-outlined">schedule</span>
          </span>
        )}
        {!loading && icon && iconPosition === 'left' && icon}
        {children}
        {!loading && icon && iconPosition === 'right' && icon}
      </button>
    )
  }
)

Button.displayName = 'Button'
