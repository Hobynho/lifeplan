'use client'

import React from 'react'
import Link from 'next/link'

export interface RelatedArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  image?: string
  category: string
  readTime: number
}

export interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="mt-16 pt-12 border-t border-neutral-200">
      <h2 className="text-h3 font-bold text-neutral-900 mb-8">Artigos Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group block"
          >
            <div className="mb-4 rounded-lg overflow-hidden bg-neutral-200 h-40">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-600 font-semibold">
                {article.category}
              </span>
              <span className="text-xs text-neutral-500">{article.readTime} min</span>
            </div>
            <h3 className="text-h5 font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-body-sm text-neutral-600 line-clamp-2">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
