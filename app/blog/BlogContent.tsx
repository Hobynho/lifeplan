'use client'

import React, { useMemo } from 'react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { ArticleCard } from '@/components/sections/ArticleCard'
import { blogArticles, blogCategories } from '@/lib/blog-data'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function BlogContent() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('category')

  const filteredArticles = useMemo(() => {
    if (!selectedCategory) return blogArticles
    return blogArticles.filter(article => article.category === selectedCategory)
  }, [selectedCategory])

  const featuredArticle = filteredArticles[0]
  const otherArticles = filteredArticles.slice(1)

  return (
    <Section py="lg" bg="white" id="artigos">
      <Container>
        {/* Categories Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              !selectedCategory
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
          >
            Todos
          </Link>
          {blogCategories.map(category => (
            <Link
              key={category.id}
              href={`/blog?category=${category.id}`}
              className={`px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {category.icon}
              </span>
              {category.name}
            </Link>
          ))}
        </div>

        {filteredArticles.length > 0 ? (
          <>
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-16 pb-16 border-b border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {featuredArticle.image && (
                    <div className="rounded-lg overflow-hidden h-80">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="inline-block mb-4">
                      <span className="px-4 py-2 rounded-full bg-primary-100 text-primary-600 font-semibold text-sm">
                        Destaque
                      </span>
                    </div>
                    <h2 className="text-display-md font-bold text-neutral-900 mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-body-lg text-neutral-600 mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-600 mb-6">
                      <div className="flex items-center gap-2">
                        {featuredArticle.author.avatar && (
                          <img
                            src={featuredArticle.author.avatar}
                            alt={featuredArticle.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <span>{featuredArticle.author.name}</span>
                      </div>
                      <span>•</span>
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime} min</span>
                    </div>
                    <a
                      href={`/blog/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Ler Artigo
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            {otherArticles.length > 0 && (
              <>
                <h3 className="text-h3 font-bold text-neutral-900 mb-8">
                  {selectedCategory ? 'Mais Artigos' : 'Todos os Artigos'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherArticles.map(article => (
                    <ArticleCard
                      key={article.id}
                      slug={article.slug}
                      title={article.title}
                      excerpt={article.excerpt}
                      category={article.category}
                      author={article.author.name}
                      date={article.date}
                      readTime={article.readTime}
                      image={article.image}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-h4 font-bold text-neutral-900 mb-2">
              Nenhum artigo encontrado
            </h3>
            <p className="text-body-lg text-neutral-600">
              Tente selecionar outra categoria
            </p>
          </div>
        )}
      </Container>
    </Section>
  )
}
