'use client'

import React from 'react'
import Link from 'next/link'

export interface ArticleCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: number
  image?: string
  highlighted?: boolean
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
  highlighted = false,
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className={`rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg h-full flex flex-col ${highlighted ? 'border-primary-200 bg-primary-50' : 'border-neutral-200 bg-white'}`}>
        {image && (
          <div className="relative w-full h-48 overflow-hidden bg-neutral-200">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold">
                {category}
              </span>
            </div>
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-h5 font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h2>
          <p className="text-body-md text-neutral-600 mb-4 line-clamp-3 flex-1">
            {excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-100">
            <div className="flex items-center gap-2">
              <span>{author}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
            <span>{readTime} min</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
