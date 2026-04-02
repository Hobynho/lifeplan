'use client'

import React from 'react'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helper?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helper, className = '', ...props }, ref) => {
    return (
      <div className="flex items-start space-x-3">
        <div className="flex items-center h-6 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            className={`
              w-5 h-5 rounded border-2 border-neutral-300
              accent-primary-500
              focus:ring-2 focus:ring-primary-500 focus:ring-offset-0
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors duration-200
              ${className}
            `}
            {...props}
          />
        </div>
        
        {label && (
          <div className="flex-1">
            <label className="text-body-md font-medium text-neutral-700 cursor-pointer">
              {label}
              {props.required && <span className="text-error-500 ml-1">*</span>}
            </label>
            {helper && (
              <p className="text-caption text-neutral-500 mt-1">{helper}</p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
