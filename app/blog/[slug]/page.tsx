'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { ShareButtons } from '@/components/sections/ShareButtons'
import { AuthorBox } from '@/components/sections/AuthorBox'
import { RelatedArticles } from '@/components/sections/RelatedArticles'
import { blogArticles, blogCategories } from '@/lib/blog-data'
import { LeadForm } from '@/components/sections/LeadForm'
import Link from 'next/link'

export default function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = blogArticles.find(a => a.slug === params.slug)

  if (!article) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <Header />
        <Section py="lg" bg="white">
          <Container>
            <h1 className="text-display-md font-bold text-neutral-900">Artigo não encontrado</h1>
            <Link href="/blog" className="text-primary-500 hover:underline mt-4 block">
              ← Voltar para Blog
            </Link>
          </Container>
        </Section>
        <Footer />
      </main>
    )
  }

  const relatedArticles = article.relatedArticleIds
    ? blogArticles.filter(a => article.relatedArticleIds?.includes(a.id))
    : []

  const category = blogCategories.find(c => c.id === article.category)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero Article */}
      <Section py="lg" bg="primary-50">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-4 flex items-center gap-2">
              <Link
                href="/blog"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Blog
              </Link>
              <span className="text-neutral-400">/</span>
              <span className="text-primary-600 font-semibold">{category?.name}</span>
            </div>
            <h1 className="text-display-lg md:text-display-xl font-bold text-neutral-900 mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-primary-200">
              <div className="flex items-center gap-4">
                {article.author.avatar && (
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-body-md font-semibold text-neutral-900">
                    {article.author.name}
                  </p>
                  <p className="text-sm text-neutral-600">{article.date}</p>
                </div>
              </div>
              <span className="text-sm text-neutral-600">{article.readTime} minutos de leitura</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section py="lg" bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full rounded-lg mb-8"
                />
              )}

              {/* Share Buttons Top */}
              <ShareButtons title={article.title} url={currentUrl} className="mb-8" />

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none text-neutral-700 mb-12"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share Buttons Bottom */}
              <div className="py-8 border-t border-b border-neutral-200 mb-8">
                <ShareButtons title={article.title} url={currentUrl} />
              </div>

              {/* Author Box */}
              <AuthorBox
                name={article.author.name}
                role={article.author.role}
                bio={article.author.bio}
                avatar={article.author.avatar}
                email={article.author.email}
              />

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <RelatedArticles
                  articles={relatedArticles.map(a => ({
                    id: a.id,
                    slug: a.slug,
                    title: a.title,
                    excerpt: a.excerpt,
                    image: a.image,
                    category: a.category,
                    readTime: a.readTime,
                  }))}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Banner */}
              <div className="bg-primary-600 rounded-lg p-8 text-white mb-8 sticky top-20">
                <h3 className="text-h5 font-bold mb-2">Precisa de um Plano de Saúde?</h3>
                <p className="text-sm mb-4">Receba cotações personalizadas das melhores operadoras.</p>
                <button className="w-full px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors text-sm">
                  Quero Cotação
                </button>
              </div>

              {/* Categories Widget */}
              <div className="bg-white rounded-lg p-6 mb-8 border border-neutral-200">
                <h4 className="text-h5 font-bold text-neutral-900 mb-4">Categorias</h4>
                <ul className="space-y-2">
                  {blogCategories.map(cat => {
                    const count = blogArticles.filter(a => a.category === cat.id).length
                    return (
                      <li key={cat.id}>
                        <Link
                          href={`/blog?category=${cat.id}`}
                          className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                            article.category === cat.id
                              ? 'bg-primary-100 text-primary-600 font-semibold'
                              : 'text-neutral-700 hover:bg-neutral-100'
                          }`}
                        >
                          <span className="material-symbols-outlined text-sm">
                            {cat.icon}
                          </span>
                          <span className="flex-1">{cat.name}</span>
                          <span className="text-xs bg-neutral-200 px-2 py-1 rounded">
                            {count}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <h4 className="text-h5 font-bold text-neutral-900 mb-2">Newsletter</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Receba novos artigos sobre saúde no seu email.
                </p>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm mb-2"
                />
                <button className="w-full px-4 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors text-sm">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section py="lg" bg="primary-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h3 font-bold text-neutral-900 mb-4">
              Ficou com dúvidas? Fale com nosso time
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Nossos especialistas estão prontos para ajudá-lo a encontrar o melhor plano de saúde.
            </p>
            <LeadForm variant="inline" />
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
