'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

export interface TestimonialProps {
  author: string
  role?: string
  content: string
  rating?: number
  image?: React.ReactNode
}

export function TestimonialCard({
  author,
  role,
  content,
  rating,
  image,
}: TestimonialProps) {
  return (
    <Card className="space-y-4">
      {/* Rating */}
      {rating && (
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Icon key={i} name="star" size={20} className="text-accent-400" filled />
          ))}
        </div>
      )}

      {/* Content */}
      <p className="text-body-md text-neutral-700 italic">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
        {image ? (
          image
        ) : (
          <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-sm">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-neutral-900">{author}</p>
          {role && <p className="text-caption text-neutral-500">{role}</p>}
        </div>
      </div>
    </Card>
  )
}
