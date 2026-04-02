'use client'

import React from 'react'

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{
    id: string
    title: string | React.ReactNode
    content: string | React.ReactNode
  }>
  variant?: 'default' | 'minimal'
  defaultOpen?: string
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, variant = 'default', defaultOpen, className = '', ...props }, ref) => {
    const [openId, setOpenId] = React.useState<string | null>(defaultOpen || null)

    const toggle = (id: string) => {
      setOpenId(openId === id ? null : id)
    }

    return (
      <div ref={ref} className={`space-y-2 ${className}`} {...props}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`border rounded-lg overflow-hidden transition-all duration-200 ${
              variant === 'minimal'
                ? 'border-neutral-200'
                : 'border-neutral-200 bg-white'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className={`
                w-full px-6 py-4 flex items-center justify-between
                text-left font-semibold transition-colors duration-200
                ${variant === 'minimal'
                  ? 'text-neutral-900 hover:bg-neutral-50'
                  : 'text-neutral-900 hover:bg-neutral-50'
                }
              `}
            >
              <span>{item.title}</span>
              <span
                className={`
                  text-neutral-500 transition-transform duration-200
                  ${openId === item.id ? 'rotate-180' : ''}
                `}
              >
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </button>

            {openId === item.id && (
              <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 text-neutral-700 text-body-md">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
)

Accordion.displayName = 'Accordion'
