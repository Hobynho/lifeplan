import React, { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Hero } from '@/components/sections/Hero'
import BlogContent from './BlogContent'

function BlogPageSkeleton() {
  return (
    <Section py="lg" bg="white">
      <Container>
        <div className="animate-pulse">
          <div className="h-12 bg-neutral-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-64 bg-neutral-200 rounded w-full mb-8"></div>
        </div>
      </Container>
    </Section>
  )
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      <Hero
        title="Blog de Saúde"
        subtitle="Informações e Dicas"
        description="Artigos, guia e dicas para ajudá-lo a fazer melhores escolhas sobre sua saúde"
        primaryCta={{
          label: 'Explorar Artigos',
          href: '#artigos',
        }}
      />

      <Suspense fallback={<BlogPageSkeleton />}>
        <BlogContent />
      </Suspense>

      <Footer />
    </main>
  )
}
