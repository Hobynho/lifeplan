'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Hero } from '@/components/sections/Hero'

const cidades = [
  {
    id: 'recife',
    name: 'Recife',
    state: 'PE',
    population: '1.6M',
    description: 'Capital pernambucana com grande mercado de saúde',
    href: '/cidades/recife',
    icon: 'location_city',
  },
  {
    id: 'olinda',
    name: 'Olinda',
    state: 'PE',
    population: '400K',
    description: 'Histórica e encantadora, com ótimas opções de saúde',
    href: '/cidades/olinda',
    icon: 'location_city',
  },
  {
    id: 'paulista',
    name: 'Paulista',
    state: 'PE',
    population: '340K',
    description: 'Município da região metropolitana de Recife',
    href: '/cidades/paulista',
    icon: 'location_city',
  },
  {
    id: 'jaboatao-dos-guararapes',
    name: 'Jaboatão dos Guararapes',
    state: 'PE',
    population: '650K',
    description: 'Maior município da RMR fora do invólucro de Recife',
    href: '/cidades/jaboatao-dos-guararapes',
    icon: 'location_city',
  },
]

export default function CidadesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      <Hero
        title="Cobertura por Cidades"
        subtitle="Operadoras Regionais"
        description="Encontre as melhores operadoras de saúde em sua cidade"
        primaryCta={{
          label: 'Solicitar Cotação',
          href: '#cidades',
        }}
      />

      <Section py="lg" bg="white" id="cidades">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Atendimento em Várias Cidades
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Oferecemos cobertura abrangente em todas estas cidades com as melhores operadoras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cidades.map((cidade) => (
              <div
                key={cidade.id}
                className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-h3 font-bold text-neutral-900 mb-1">{cidade.name}</h3>
                    <p className="text-body-md text-neutral-600">{cidade.state}</p>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-primary-500">
                    {cidade.icon}
                  </span>
                </div>

                <p className="text-body-md text-neutral-600 mb-6 flex-grow">
                  {cidade.description}
                </p>
                <div className="mb-6">
                  <p className="text-sm text-neutral-500">População aproximada</p>
                  <p className="text-h4 font-bold text-neutral-900">{cidade.population}</p>
                </div>

                <a
                  href={cidade.href}
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200 block text-center"
                >
                  Ver Operadoras
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
