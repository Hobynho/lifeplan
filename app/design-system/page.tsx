'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Checkbox } from '@/components/ui/Checkbox'
import { Radio } from '@/components/ui/Radio'
import { Select } from '@/components/ui/Select'
import { Accordion } from '@/components/ui/Accordion'
import { Icon } from '@/components/ui/Icon'
import { BenefitCard } from '@/components/sections/BenefitCard'
import { TestimonialCard } from '@/components/sections/TestimonialCard'

/**
 * Design System Page
 * 
 * Esta página documenta e showcasa todos os componentes,
 * tokens e padrões visuais do design system.
 * 
 * Seções:
 * - Fundação (cores, tipografia, espaçamento)
 * - Componentes UI
 * - Componentes de Seção
 * - Exemplos de Combinação
 */

export default function DesignSystemPage() {
  const panelOptions = [
    { value: 'basico', label: 'Plano Básico' },
    { value: 'standard', label: 'Plano Standard' },
    { value: 'premium', label: 'Plano Premium' },
  ]

  const faqItems = [
    {
      id: '1',
      title: 'Como funciona a cotação?',
      content: 'Nossa cotação é rápida e gratuita. Você recebe propostas personalizadas em até 2 horas via WhatsApp.',
    },
    {
      id: '2',
      title: 'Preciso de dados de dependentes?',
      content: 'Sim, se tiver dependentes, precisamos de idade e dados essenciais para calcular o valor do plano.',
    },
    {
      id: '3',
      title: 'Qual é a melhor operadora?',
      content: 'Não existe uma "melhor" operadora. Tudo depende das suas necessidades, localização e orçamento.',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Header da Página */}
      <Section py="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display-lg md:text-display-xl font-bold text-neutral-900 mb-4">
            Design System
          </h1>
          <p className="text-body-lg text-neutral-600">
            Documentação visual completa do sistema de design SaudePlus. Use como referência para manter consistência visual.
          </p>
        </div>
      </Section>

      {/* 1. FUNDAÇÃO */}
      <Section py="lg" bg="white">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-8">1. Fundação</h2>

          {/* Cores */}
          <div className="mb-16">
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Paleta de Cores</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Primary */}
              <div>
                <h4 className="text-h4 font-bold text-neutral-900 mb-4">Primary</h4>
                <div className="space-y-2">
                  {[
                    { name: 'primary-50', value: '#f0f4f1', text: 'light' },
                    { name: 'primary-100', value: '#dce5e0', text: 'light' },
                    { name: 'primary-500', value: '#2d5a42', text: 'white' },
                    { name: 'primary-900', value: '#0d1622', text: 'white' },
                  ].map((color) => (
                    <div key={color.name} className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg shadow-sm border border-neutral-200"
                        style={{ backgroundColor: color.value }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">{color.name}</p>
                        <p className="text-xs text-neutral-500">{color.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success */}
              <div>
                <h4 className="text-h4 font-bold text-neutral-900 mb-4">Semântica</h4>
                <div className="space-y-2">
                  {[
                    { name: 'success', value: '#22c55e', text: 'white' },
                    { name: 'warning', value: '#f59e0b', text: 'white' },
                    { name: 'error', value: '#ef4444', text: 'white' },
                    { name: 'info', value: '#0ea5e9', text: 'white' },
                  ].map((color) => (
                    <div key={color.name} className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg shadow-sm border border-neutral-200"
                        style={{ backgroundColor: color.value }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">{color.name}</p>
                        <p className="text-xs text-neutral-500">{color.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral */}
              <div>
                <h4 className="text-h4 font-bold text-neutral-900 mb-4">Neutral</h4>
                <div className="space-y-2">
                  {[
                    { name: 'neutral-50', value: '#fafaf9', text: 'light' },
                    { name: 'neutral-100', value: '#f5f5f4', text: 'light' },
                    { name: 'neutral-500', value: '#78746e', text: 'white' },
                    { name: 'neutral-900', value: '#1c1917', text: 'white' },
                  ].map((color) => (
                    <div key={color.name} className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg shadow-sm border border-neutral-200"
                        style={{ backgroundColor: color.value }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">{color.name}</p>
                        <p className="text-xs text-neutral-500">{color.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tipografia */}
          <div className="mb-16">
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Tipografia</h3>

            <div className="space-y-8">
              <div>
                <p className="text-caption text-neutral-500 mb-2">DISPLAY XL</p>
                <p className="text-display-xl font-bold text-neutral-900">
                  Empowering Innovators to Build
                </p>
                <p className="text-xs text-neutral-500 mt-2">3.5rem / line-height 1.1 / bold</p>
              </div>

              <div>
                <p className="text-caption text-neutral-500 mb-2">H1</p>
                <h1 className="text-h1 font-bold text-neutral-900">
                  Design System Heading 1
                </h1>
                <p className="text-xs text-neutral-500 mt-2">2rem / line-height 1.3 / bold</p>
              </div>

              <div>
                <p className="text-caption text-neutral-500 mb-2">H2</p>
                <h2 className="text-h2 font-bold text-neutral-900">
                  Design System Heading 2
                </h2>
                <p className="text-xs text-neutral-500 mt-2">1.75rem / line-height 1.3 / bold</p>
              </div>

              <div>
                <p className="text-caption text-neutral-500 mb-2">BODY LG</p>
                <p className="text-body-lg text-neutral-700">
                  This is a large body text that presents important information in a clear and readable way.
                </p>
                <p className="text-xs text-neutral-500 mt-2">1.125rem / line-height 1.6 / regular</p>
              </div>

              <div>
                <p className="text-caption text-neutral-500 mb-2">BODY MD</p>
                <p className="text-body-md text-neutral-700">
                  This is medium body text for standard content and descriptions.
                </p>
                <p className="text-xs text-neutral-500 mt-2">1rem / line-height 1.6 / regular</p>
              </div>

              <div>
                <p className="text-caption text-neutral-500 mb-2">LABEL</p>
                <p className="text-label font-medium text-neutral-700">
                  Form label or important small text
                </p>
                <p className="text-xs text-neutral-500 mt-2">0.875rem / line-height 1.4 / medium</p>
              </div>

              <div>
                <p className="text-caption text-neutral-500 mb-2">CAPTION</p>
                <p className="text-caption text-neutral-600">
                  Small helper text or meta information
                </p>
                <p className="text-xs text-neutral-500 mt-2">0.75rem / line-height 1.4 / regular</p>
              </div>
            </div>
          </div>

          {/* Espaçamento */}
          <div>
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Espaçamento (Escala Tailwind)</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'p-4', value: '1rem' },
                { name: 'p-6', value: '1.5rem' },
                { name: 'p-8', value: '2rem' },
                { name: 'p-12', value: '3rem' },
                { name: 'p-16', value: '4rem' },
                { name: 'p-20', value: '5rem' },
                { name: 'p-24', value: '6rem' },
                { name: 'p-32', value: '8rem' },
              ].map((space) => (
                <div key={space.name}>
                  <div
                    className="bg-primary-100 rounded-lg mb-2"
                    style={{ height: space.value }}
                  />
                  <p className="text-sm font-semibold text-neutral-900">{space.name}</p>
                  <p className="text-xs text-neutral-500">{space.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. COMPONENTES UI */}
      <Section py="lg">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-8">2. Componentes UI</h2>

          {/* Buttons */}
          <div className="mb-16">
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Buttons</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-label font-semibold text-neutral-700 mb-4">Variantes</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>Primário</Button>
                  <Button variant="secondary">Secundário</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Perigo</Button>
                </div>
              </div>

              <div>
                <h4 className="text-label font-semibold text-neutral-700 mb-4">Tamanhos</h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="sm">Pequeno</Button>
                  <Button size="md">Médio</Button>
                  <Button size="lg">Grande</Button>
                </div>
              </div>

              <div>
                <h4 className="text-label font-semibold text-neutral-700 mb-4">Com Ícones</h4>
                <div className="flex flex-wrap gap-4">
                  <Button icon={<Icon name="check" size={20} />}>
                    Com Ícone
                  </Button>
                  <Button icon={<Icon name="arrow_forward" size={20} />} iconPosition="right">
                    Ícone à Direita
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-label font-semibold text-neutral-700 mb-4">Estados</h4>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>Desabilitado</Button>
                  <Button loading>Carregando</Button>
                  <Button fullWidth className="max-w-xs">
                    Largura Completa
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="mb-16">
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Componentes de Formulário</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                label="Texto padrão"
                placeholder="Seu nome..."
                helper="Insira seu nome completo"
              />

              <Input
                label="Com erro"
                placeholder="Email..."
                error="Este email já está registrado"
                defaultValue="teste@"
              />

              <Input
                label="Com ícone"
                placeholder="Buscar..."
                icon={<Icon name="search" size={20} />}
              />

              <Select
                label="Selecione um plano"
                options={panelOptions}
                placeholder="Escolha..."
              />

              <Textarea
                label="Mensagem"
                placeholder="Escreva sua mensagem..."
              />

              <div>
                <h4 className="text-label font-semibold text-neutral-700 mb-4">Checkboxes</h4>
                <div className="space-y-3">
                  <Checkbox label="Opção 1" />
                  <Checkbox label="Opção 2" />
                  <Checkbox label="Opção desabilitada" disabled />
                </div>
              </div>

              <div>
                <h4 className="text-label font-semibold text-neutral-700 mb-4">Radios</h4>
                <div className="space-y-3">
                  <Radio name="option" label="Opção 1" />
                  <Radio name="option" label="Opção 2" />
                  <Radio name="option" label="Opção desabilitada" disabled />
                </div>
              </div>
            </div>
          </div>

          {/* Cards e Badges */}
          <div className="mb-16">
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Cards e Badges</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <h4 className="text-h4 font-bold text-neutral-900 mb-2">Card Padrão</h4>
                <p className="text-body-md text-neutral-600">
                  Este é um card padrão com sombra suave.
                </p>
              </Card>

              <Card elevated>
                <h4 className="text-h4 font-bold text-neutral-900 mb-2">Card Elevado</h4>
                <p className="text-body-md text-neutral-600">
                  Este card tem sombra mais pronunciada.
                </p>
              </Card>

              <Card hover={false}>
                <h4 className="text-h4 font-bold text-neutral-900 mb-2">Card Sem Hover</h4>
                <p className="text-body-md text-neutral-600">
                  Este card não tem efeito hover.
                </p>
              </Card>
            </div>

            <div>
              <h4 className="text-label font-semibold text-neutral-700 mb-4">Badges</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="neutral">Neutral</Badge>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div>
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Accordion</h3>
            <Accordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* 3. COMPONENTES DE SEÇÃO */}
      <Section py="lg" bg="white">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-8">3. Componentes de Seção</h2>

          {/* Benefit Cards */}
          <div className="mb-16">
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Benefit Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BenefitCard
                icon="health_and_safety"
                title="Cobertura Completa"
                description="Acesso a rede credenciada em todo o Brasil"
                badge="Popular"
              />
              <BenefitCard
                icon="card_membership"
                title="Sem Carência"
                description="Cobertura imediata para suas necessidades"
                badge="Premium"
                badgeVariant="secondary"
              />
              <BenefitCard
                icon="favorite"
                title="Atendimento 24/7"
                description="Suporte via WhatsApp e teleatendimento"
                badge="Inclusivo"
                badgeVariant="success"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-h2 font-bold text-neutral-900 mb-6">Testimonial Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                author="Maria Silva"
                role="São Paulo, SP"
                content="Encontrei o melhor plano com o melhor preço. Recomendo muito!"
                rating={5}
              />
              <TestimonialCard
                author="João Santos"
                role="Rio de Janeiro, RJ"
                content="Processo rápido e transparente. Muito satisfeito com o resultado."
                rating={5}
              />
              <TestimonialCard
                author="Ana Costa"
                role="Belo Horizonte, MG"
                content="Excelente qualidade de atendimento. Tirou todas as minhas dúvidas."
                rating={4}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. ÍCONES */}
      <Section py="lg">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-8">4. Iconografia (Material Symbols)</h2>

          <div className="mb-8">
            <p className="text-body-lg text-neutral-600 mb-6">
              Font weight: 200 | Tamanhos: 16, 20, 24, 32, 40px
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {[
              'home',
              'favorite',
              'check_circle',
              'health_and_safety',
              'verified_user',
              'award_star',
              'search',
              'settings',
              'bell',
              'person',
              'shopping_cart',
              'phone',
            ].map((iconName) => (
              <div key={iconName} className="flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  <Icon name={iconName} size={20} className="text-neutral-700" />
                  <Icon name={iconName} size={24} className="text-primary-500" />
                </div>
                <p className="text-xs text-neutral-500 text-center">{iconName}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. PADRÕES */}
      <Section py="lg" bg="white">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-8">5. Padrões de Uso</h2>

          <div className="space-y-12">
            {/* CTA Section */}
            <div>
              <h3 className="text-h2 font-bold text-neutral-900 mb-6">Blocos de CTA</h3>
              <Card className="bg-primary-50 border-l-4 border-primary-500 p-8">
                <div className="flex items-center justify-between flex-col md:flex-row gap-6">
                  <div>
                    <h4 className="text-h3 font-bold text-neutral-900 mb-2">
                      Pronto para encontrar seu plano?
                    </h4>
                    <p className="text-body-md text-neutral-700">
                      Receba uma cotação personalizada em até 2 horas.
                    </p>
                  </div>
                  <Button size="lg">Cotar Agora</Button>
                </div>
              </Card>
            </div>

            {/* Trust Section */}
            <div>
              <h3 className="text-h2 font-bold text-neutral-900 mb-6">Seção de Confiança</h3>
              <div className="bg-white p-8 rounded-lg shadow-base">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-display-md font-bold text-primary-600 mb-2">50K+</p>
                    <p className="text-body-md text-neutral-600">Cotações realizadas</p>
                  </div>
                  <div className="border-l border-r border-neutral-200 px-6">
                    <p className="text-display-md font-bold text-primary-600 mb-2">4.8★</p>
                    <p className="text-body-md text-neutral-600">Avaliação média</p>
                  </div>
                  <div>
                    <p className="text-display-md font-bold text-primary-600 mb-2">24h</p>
                    <p className="text-body-md text-neutral-600">Suporte ativo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
