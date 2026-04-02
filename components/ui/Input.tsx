'use client'

import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, icon, iconPosition = 'left', className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-label font-medium text-neutral-700">
            {label}
            {props.required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              w-full px-4 py-3 rounded-lg 
              border-2 border-neutral-200
              text-body-md
              placeholder-neutral-400
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-0 focus:border-primary-500
              disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed
              ${error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}
              ${icon && iconPosition === 'left' ? 'pl-10' : ''}
              ${icon && iconPosition === 'right' ? 'pr-10' : ''}
              ${className}
            `}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {icon}
            </div>
          )}
        </div>

        {error && (
          <p className="text-caption text-error-500">{error}</p>
        )}
        
        {helper && !error && (
          <p className="text-caption text-neutral-500">{helper}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
