'use client'

import React from 'react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helper?: string
  options: Array<{ value: string | number; label: string }>
  placeholder?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helper, options, placeholder, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-label font-medium text-neutral-700">
            {label}
            {props.required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-3 rounded-lg 
              border-2 border-neutral-200
              text-body-md
              bg-white appearance-none
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-0 focus:border-primary-500
              disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed
              ${error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}
              ${className}
            `}
            {...props}
          >
            {placeholder && (
              <option value="">{placeholder}</option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
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

Select.displayName = 'Select'
