'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { OperatorCard } from '@/components/sections/OperatorCard'
import { BenefitCard } from '@/components/sections/BenefitCard'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export default function OperadorasPage() {
  const operators = [
    {
      name: 'Amil',
      description: 'Maior operadora do Brasil com cobertura nacional abrangente',
      rating: 4.7,
      reviews: 2400,
      highlight: 'Melhor cobertura',
      coverage: 'Rede credenciada em todo Brasil',
    },
    {
      name: 'Hapvida',
      description: 'Pioneira em tecnologia e telemedicina',
      rating: 4.5,
      reviews: 1900,
      highlight: 'Inovação',
      coverage: 'Telemedicina 24/7 incluída',
    },
    {
      name: 'SulAmérica',
      description: 'Especializada em planos corporativos e individuais',
      rating: 4.6,
      reviews: 1700,
      highlight: 'Flexibilidade',
      coverage: 'Planos customizáveis',
    },
    {
      name: 'Unimed',
      description: 'Cooperativa com foco em qualidade',
      rating: 4.4,
      reviews: 1500,
      highlight: 'Qualidade',
      coverage: 'Foco em excelência',
    },
    {
      name: 'Bradesco Saúde',
      description: 'Solidez do Banco com saúde de qualidade',
      rating: 4.5,
      reviews: 1200,
      highlight: 'Solidez',
      coverage: 'Segurança financeira',
    },
    {
      name: 'Porto Seguro',
      description: 'Planos flexíveis e acessíveis',
      rating: 4.3,
      reviews: 900,
      highlight: 'Acessibilidade',
      coverage: 'Melhor custo-benefício',
    },
  ]

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero */}
      <Section py="lg" bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg md:text-display-xl font-bold text-neutral-900 mb-6">
              Operadoras Parceiras
            </h1>
            <p className="text-body-lg text-neutral-600">
              Conheça as maiores e mais confiáveis operadoras de saúde do Brasil
            </p>
          </div>
        </Container>
      </Section>

      {/* Grid de Operadoras */}
      <Section py="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operators.map((op) => (
              <OperatorCard
                key={op.name}
                name={op.name}
                description={op.description}
                rating={op.rating}
                reviews={op.reviews}
                highlight={op.highlight}
                onCta={() => console.log(`Clicou em ${op.name}`)}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparação de Features */}
      <Section py="lg" bg="white">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-12 text-center">
            Comparar Operadoras
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b-2 border-neutral-200">
                <tr>
                  <th className="py-4 px-4 text-label font-bold text-neutral-900">Operadora</th>
                  <th className="py-4 px-4 text-label font-bold text-neutral-900">Cobertura</th>
                  <th className="py-4 px-4 text-label font-bold text-neutral-900">Telemedicina</th>
                  <th className="py-4 px-4 text-label font-bold text-neutral-900">App</th>
                  <th className="py-4 px-4 text-label font-bold text-neutral-900">Suporte</th>
                </tr>
              </thead>
              <tbody>
                {operators.map((op) => (
                  <tr key={op.name} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-neutral-900">{op.name}</td>
                    <td className="py-4 px-4 text-neutral-700">
                      <Icon name="check_circle" size={20} className="text-success-500" />
                    </td>
                    <td className="py-4 px-4 text-neutral-700">
                      <Icon name="check_circle" size={20} className="text-success-500" />
                    </td>
                    <td className="py-4 px-4 text-neutral-700">
                      <Icon name="check_circle" size={20} className="text-success-500" />
                    </td>
                    <td className="py-4 px-4 text-neutral-700">
                      <Icon name="check_circle" size={20} className="text-success-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Selo de Confiança */}
      <Section py="lg">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-12 text-center">
            Por Que Confiar Nessas Operadoras
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <BenefitCard
              icon="verified_user"
              title="Reguladas"
              description="Todas, reguladas pela ANS e Ministério da Saúde"
              badge="Certificado"
            />
            <BenefitCard
              icon="shield"
              title="Seguras"
              description="Solidez financeira e transparência comprovada"
              badge="Auditadas"
            />
            <BenefitCard
              icon="people"
              title="Credibilidade"
              description="Milhares de brasileiros confiam diariamente"
              badge="Confiável"
            />
            <BenefitCard
              icon="trending_up"
              title="Crescimento"
              description="Investem em inovação e qualidade constantemente"
              badge="Crescente"
            />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section py="lg" bg="primary-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Encontre o Melhor Para Você
            </h2>
            <p className="text-body-lg text-neutral-600 mb-8">
              Receba uma cotação personalizada comparando todas as operadoras.
            </p>
            <Button size="lg">
              Cotar Agora
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
