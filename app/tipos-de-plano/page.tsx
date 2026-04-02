'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Hero } from '@/components/sections/Hero'

const tiposDePrograma = [
  {
    id: 'individual',
    title: 'Plano Individual',
    description: 'Cobertura completa para você',
    icon: 'person',
    href: '/tipos-de-plano/individual',
  },
  {
    id: 'familiar',
    title: 'Plano Familiar',
    description: 'Proteção para toda a família',
    icon: 'group',
    href: '/tipos-de-plano/familiar',
  },
  {
    id: 'empresarial',
    title: 'Plano Empresarial',
    description: 'Soluções corporativas',
    icon: 'business',
    href: '/tipos-de-plano/empresarial',
  },
  {
    id: 'mei',
    title: 'Plano MEI',
    description: 'Especial para microempreendedores',
    icon: 'business_center',
    href: '/tipos-de-plano/mei',
  },
  {
    id: 'coletivo',
    title: 'Coletivo por Adesão',
    description: 'Planos grupais com excelentes preços',
    icon: 'groups',
    href: '/tipos-de-plano/coletivo-por-adesao',
  },
]

export default function TiposDePlan() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      <Hero
        title="Tipos de Plano de Saúde"
        subtitle="Diversidade de Opções"
        description="Encontre o tipo de plano ideal para suas necessidades"
        primaryCta={{
          label: 'Solicitar Cotação',
          href: '#contato',
        }}
      />

      <Section py="lg" bg="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Escolha o Melhor para Você
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Cada tipo de plano foi desenvolvido para atender diferentes necessidades e orçamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiposDePrograma.map((tipo) => (
              <div
                key={tipo.id}
                className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <span className="material-symbols-outlined text-4xl text-primary-500 mb-4">
                  {tipo.icon}
                </span>
                <h3 className="text-h3 font-bold text-neutral-900 mb-2">{tipo.title}</h3>
                <p className="text-body-md text-neutral-600 mb-6">{tipo.description}</p>
                <a
                  href={tipo.href}
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200 block text-center"
                >
                  Saiba Mais
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
