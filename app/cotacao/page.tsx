'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeadForm } from '@/components/sections/LeadForm'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

export default function CotacaoPage() {
  const benefits = [
    { icon: 'speed', title: 'Até 2 horas', description: 'Cotação em tempo recorde' },
    { icon: 'verified_user', title: 'Seguro e Anônimo', description: 'Seus dados são protegidos' },
    { icon: 'trending_down', title: 'Melhor Preço', description: 'Comparamos as operadoras' },
    { icon: 'phone', title: 'Suporte 24/7', description: 'Dúvidas? Estamos aqui' },
  ]

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero */}
      <Section py="lg" bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg md:text-display-xl font-bold text-neutral-900 mb-6">
              Cotação Personalizda
            </h1>
            <p className="text-body-lg text-neutral-600">
              Preencha os dados abaixo e receba as melhores propostas de planos de saúde em até 2 horas.
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefícios */}
      <Section py="lg">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit) => (
              <Card key={benefit.icon}>
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mx-auto">
                    <Icon name={benefit.icon} size={20} className="text-primary-600" />
                  </div>
                  <h3 className="text-body-md font-bold text-neutral-900">{benefit.title}</h3>
                  <p className="text-caption text-neutral-600">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <LeadForm
        variant="block"
        onSubmit={(data) => {
          console.log('Cotação solicitada:', data)
        }}
      />

      {/* Como funciona */}
      <Section py="lg" bg="white">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-12 text-center">
            Como Funciona Nossa Cotação
          </h2>

          <div className="space-y-12 max-w-3xl mx-auto">
            {[
              {
                step: '1',
                title: 'Preencha os Dados',
                description: 'Informações básicas para análise das melhores opções de quer você precisa',
              },
              {
                step: '2',
                title: 'Análise Especializada',
                description: 'Nossa equipe compara mais de 150 planos diferentes entre as operadoras',
              },
              {
                step: '3',
                title: 'Propostas Personalizadas',
                description: 'Você recebe as 3 melhores opções via WhatsApp ou email em até 2h',
              },
              {
                step: '4',
                title: 'Contrate com Segurança',
                description: 'Escolha o plano que melhor se adequa ao seu perfil e orçamento',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-h4 font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-body-md text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
