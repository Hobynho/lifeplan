'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero */}
      <Section py="lg" bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg md:text-display-xl font-bold text-neutral-900 mb-6">
              Sobre SaudePlus
            </h1>
            <p className="text-body-lg text-neutral-600 mb-8">
              Somos uma plataforma especializada em conectar brasileiros aos melhores planos de saúde com total transparência e segurança.
            </p>
          </div>
        </Container>
      </Section>

      {/* Missão, Visão, Valores */}
      <Section py="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card elevated>
              <div className="text-center space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center mx-auto">
                  <Icon name="target" size={24} className="text-primary-600" />
                </div>
                <h3 className="text-h3 font-bold text-neutral-900">Missão</h3>
                <p className="text-body-md text-neutral-600">
                  Tornar simples e acessível a contratação de planos de saúde de qualidade para todos os brasileiros.
                </p>
              </div>
            </Card>

            <Card elevated>
              <div className="text-center space-y-4">
                <div className="w-14 h-14 rounded-lg bg-secondary-100 flex items-center justify-center mx-auto">
                  <Icon name="visibility" size={24} className="text-secondary-600" />
                </div>
                <h3 className="text-h3 font-bold text-neutral-900">Visão</h3>
                <p className="text-body-md text-neutral-600">
                  Ser a plataforma mais confiável e inovadora em saúde suplementar no Brasil.
                </p>
              </div>
            </Card>

            <Card elevated>
              <div className="text-center space-y-4">
                <div className="w-14 h-14 rounded-lg bg-accent-100 flex items-center justify-center mx-auto">
                  <Icon name="favorite" size={24} className="text-accent-600" />
                </div>
                <h3 className="text-h3 font-bold text-neutral-900">Valores</h3>
                <p className="text-body-md text-neutral-600">
                  Transparência, integridade, foco no cliente e inovação contínua.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Nossa História */}
      <Section py="lg" bg="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md font-bold text-neutral-900 mb-8">Nossa História</h2>

            <div className="space-y-6">
              <p className="text-body-lg text-neutral-700 leading-relaxed">
                SaudePlus foi fundada em 2020 com uma missão clara: simplificar o processo de escolha e contratação de planos de saúde no Brasil. Nossos fundadores perceberam uma grande dificuldade no mercado: falta de transparência, informações desorganizadas e dificuldade em comparar operadoras.
              </p>

              <p className="text-body-lg text-neutral-700 leading-relaxed">
                A partir daí, desenvolvemos uma plataforma que conecta pessoas às melhores operadoras de forma segura, rápida e gratuita. Hoje, somos referência na comparação e contratação de planos de saúde, com mais de 50 mil cotações realizadas e avaliação média de 4.8 estrelas.
              </p>

              <p className="text-body-lg text-neutral-700 leading-relaxed">
                Nossa equipe é composta por especialistas em saúde suplementar, tecnologia e atendimento ao cliente. Trabalhamos diariamente para oferecer a melhor experiência possível.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Por que confiar em nós */}
      <Section py="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Por que Confiar em Nós?
            </h2>
            <p className="text-body-lg text-neutral-600">
              Transparência e segurança são a base do nosso negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: 'security',
                title: 'Dados Protegidos',
                description: 'Conformidade total com LGPD e criptografia de ponta a ponta',
              },
              {
                icon: 'verified_user',
                title: 'Operadoras Oficiais',
                description: 'Parcerias diretas com as maiores operadoras do Brasil',
              },
              {
                icon: 'people',
                title: 'Equipe Dedicada',
                description: 'Especialistas em saúde suplementar à sua disposição 24/7',
              },
              {
                icon: 'trending_up',
                title: 'Melhor Preço',
                description: 'Comparamos operadoras para você economizar ao máximo',
              },
            ].map((item) => (
              <Card key={item.icon}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-h4 font-bold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-body-sm text-neutral-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section py="lg" bg="primary-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Começar Agora é Fácil
            </h2>
            <p className="text-body-lg text-neutral-600 mb-8">
              Receba uma cotação personalizada em até 2 horas. Totalmente grátis e sem compromisso.
            </p>
            <Button size="lg">
              Receber Cotação
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
