'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

interface IconGridItem {
  icon: string | React.ReactNode
  label: string
  description?: string
  link?: string
  onClick?: () => void
}

interface IconGridProps {
  items: IconGridItem[]
  columns?: 2 | 3 | 4 | 6
  gap?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'compact' | 'card'
  className?: string
}

const gridColsMap = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
}

const gapMap = {
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
}

export const IconGrid: React.FC<IconGridProps> = ({
  items,
  columns = 3,
  gap = 'md',
  variant = 'default',
  className = '',
}) => {
  return (
    <div className={`grid ${gridColsMap[columns]} ${gapMap[gap]} ${className}`}>
      {items.map((item, index) => {
        const content = (
          <>
            {variant === 'compact' && (
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  {typeof item.icon === 'string' ? (
                    <Icon name={item.icon} size={20} className="text-primary-600" />
                  ) : (
                    item.icon
                  )}
                </div>
                <span className="text-body-sm font-medium text-neutral-700">{item.label}</span>
              </div>
            )}

            {variant === 'default' && (
              <div className="space-y-2">
                <div className="inline-flex p-2 bg-primary-50 rounded">
                  {typeof item.icon === 'string' ? (
                    <Icon name={item.icon} size={20} className="text-primary-600" />
                  ) : (
                    item.icon
                  )}
                </div>
                <p className="text-body-sm font-medium text-neutral-900">{item.label}</p>
                {item.description && (
                  <p className="text-caption text-neutral-600">{item.description}</p>
                )}
              </div>
            )}

            {variant === 'card' && (
              <div className="p-4 rounded-lg border border-neutral-200 bg-white hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-primary-50 rounded">
                    {typeof item.icon === 'string' ? (
                      <Icon name={item.icon} size={20} className="text-primary-600" />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-body-sm font-medium text-neutral-900">{item.label}</p>
                    {item.description && (
                      <p className="text-caption text-neutral-600 mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )

        if (item.link) {
          return (
            <a key={index} href={item.link} className="hover:no-underline block">
              {content}
            </a>
          )
        }

        if (item.onClick) {
          return (
            <button key={index} onClick={item.onClick} className="text-left cursor-pointer w-full">
              {content}
            </button>
          )
        }

        return <div key={index}>{content}</div>
      })}
    </div>
  )
}
