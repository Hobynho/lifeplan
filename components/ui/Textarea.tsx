'use client'

import React from 'react'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helper?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helper, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-label font-medium text-neutral-700">
            {label}
            {props.required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-lg 
            border-2 border-neutral-200
            text-body-md
            placeholder-neutral-400
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-0 focus:border-primary-500
            disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed
            resize-vertical min-h-[120px]
            ${error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}
            ${className}
          `}
          {...props}
        />

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

Textarea.displayName = 'Textarea'
