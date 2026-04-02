'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { LeadForm } from '@/components/sections/LeadForm'
import { StatsRow } from '@/components/sections/StatsRow'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { SocialProofBadge } from '@/components/sections/SocialProofBadge'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { HighlightBand } from '@/components/sections/HighlightBand'
import { IconGrid } from '@/components/sections/IconGrid'
import { FAQSection } from '@/components/sections/FAQSection'
import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'

const operadorasInfo = {
  'amil': {
    name: 'Amil',
    title: 'Amil',
    subtitle: 'Maior operadora de saúde do Brasil',
    tagline: 'Saúde e Bem-estar para milhões de brasileiros',
    logo: 'https://via.placeholder.com/200',
    founded: 1967,
    members: 7300000,
    rating: 4.7,
    reviews: 2400,
    network: 85000,
    description: 'A maior operadora de planos de saúde do Brasil com mais de 57 anos de atuação em saúde suplementar.',
    
    // Seções estruturadas
    highlights: [
      { icon: 'people', number: '7.3M+', label: 'Beneficiários', variant: 'highlight' as const },
      { icon: 'business', number: '85k+', label: 'Prestadores', variant: 'default' as const },
      { icon: 'star', number: '4.7', label: 'Avaliação', badge: 'Excelente', badgeVariant: 'success' as const }
    ],
    
    solutions: [
      {
        title: 'Planos Individuais',
        description: 'Soluções flexíveis para você e sua família com coberturas personalizadas',
        icon: 'person',
      },
      {
        title: 'Planos Coletivos',
        description: 'Benefícios corporativos para empresas de qualquer tamanho',
        icon: 'business',
      },
      {
        title: 'Especializados',
        description: 'Soluções para saúde mental, odontologia, visão e mais',
        icon: 'psychology',
      },
      {
        title: 'Complementares',
        description: 'Seguros de vida, proteção de renda e coberturas adicionais',
        icon: 'shield',
      },
    ],
    
    network_highlights: [
      { icon: 'local_hospital', label: 'Hospitais de Referência', description: 'Redes de excelência em todo Brasil' },
      { icon: 'medical_services', label: 'Especialidades', description: 'Todas as especialidades médicas' },
      { icon: 'location_on', label: 'Cobertura Nacional', description: 'Presente em todos estados' },
    ],
    
    technology: {
      title: 'App Amil - Sua Saúde na Palma da Mão',
      description: 'Plataforma digital completa com agendamento, telemedicina e acesso ao histórico de saúde',
      features: [
        { icon: 'calendar_today', label: 'Agendamento Online', description: 'Marque consultas em segundos' },
        { icon: 'video_call', label: 'Telemedicina', description: 'Consultas virtuais 24/7' },
        { icon: 'receipt_long', label: 'Histórico de Saúde', description: 'Acesso completo aos seus registros' },
        { icon: 'download', label: 'Prescrição Digital', description: 'Receitas eletrônicas integradas' },
      ]
    },
    
    certifications: [
      { icon: 'verified', label: 'ISO 9001:2015', description: 'Gestão de Qualidade' },
      { icon: 'verified', label: 'NIAHO', description: 'Padrão Internacional' },
      { icon: 'verified', label: 'ONA', description: 'Excelência Hospitalar' },
      { icon: 'verified', label: 'Boas Práticas', description: 'Assistenciais' },
    ],
    
    faqItems: [
      {
        question: 'Como estou coberto?',
        answer: 'Você está coberto por consultas, internações, exames, procedimentos cirúrgicos, medicamentos e telemedicina conforme seu plano.'
      },
      {
        question: 'Qual o valor da mensalidade?',
        answer: 'Os valores variam conforme a idade e o tipo de cobertura escolhida. Entre em contato para uma cotação personalizada.'
      },
      {
        question: 'Posso usar em qualquer estado?',
        answer: 'Sim, a Amil tem cobertura em todos os estados brasileiros com prestadores credenciados em cada região.'
      },
      {
        question: 'Como funciona a telemedicina?',
        answer: 'Pelo app Amil você agenda consultas virtuais com especialistas disponíveis 24/7 em poucos minutos.'
      },
    ]
  },
  'hapvida': {
    name: 'Hapvida',
    title: 'Hapvida - Saúde com Inovação',
    subtitle: 'Pioneira em telemedicina',
    description: 'A Hapvida é uma operadora inovadora que revolucionou o mercado com seu modelo centrado em telemedicina e tecnologia. Atende mais de 5,8 milhões de beneficiários em múltiplos estados com uma proposta diferenciada.',
    logo: 'https://via.placeholder.com/200',
    founded: 1980,
    members: 5800000,
    rating: 4.5,
    reviews: 1900,
    
    highlights: [
      { icon: 'people', number: '5.8M+', label: 'Beneficiários', variant: 'highlight' as const },
      { icon: 'video_call', number: '50k+', label: 'Médicos Telemedicina', variant: 'default' as const },
      { icon: 'star', number: '4.5', label: 'Avaliação', badge: 'Inovadora', badgeVariant: 'primary' as const }
    ],
    
    solutions: [
      {
        title: 'Telemedicina 24/7',
        description: 'Consultas com especialistas sem sair de casa',
        icon: 'video_call',
      },
      {
        title: 'Planos Individuais',
        description: 'Coberturas flexíveis com tecnologia integrada',
        icon: 'person',
      },
      {
        title: 'Saúde Mental',
        description: 'Acompanhamento psicológico incluído',
        icon: 'psychology',
      },
      {
        title: 'Prevenção',
        description: 'Ações preventivas e promoção de bem-estar',
        icon: 'favorite',
      },
    ],
    
    network_highlights: [
      { icon: 'video_call', label: 'Telemedicina', description: 'Consultas virtuais 24/7 com especialistas' },
      { icon: 'local_hospital', label: 'Rede Credenciada', description: 'Hospitais, clínicas e laboratórios' },
      { icon: 'location_on', label: 'Cobertura Nacional', description: 'Presente em múltiplos estados' },
    ],
    
    technology: {
      title: 'App Hapvida - Integrado com Habmeds',
      description: 'Plataforma digital completa para gerenciar sua saúde com telemedicina em primeiro plano',
      features: [
        { icon: 'video_call', label: 'Telemedicina', description: 'Consultas virtuais com especialistas' },
        { icon: 'calendar_today', label: 'Agendamento Online', description: 'Marque com médicos credenciados' },
        { icon: 'receipt_long', label: 'Prescrição Digital', description: 'Receitas eletrônicas integradas' },
        { icon: 'assignment', label: 'Resultados de Exames', description: 'Acesso digital ao histórico' },
      ]
    },
    
    certifications: [
      { icon: 'verified', label: 'Inovação Digital', description: 'Melhor em tecnologia' },
      { icon: 'verified', label: 'Excelência', description: 'Atendimento certificado' },
      { icon: 'verified', label: 'ANS', description: 'Aprovação regulatória' },
      { icon: 'verified', label: 'Telemedicina', description: 'Investimento líder' },
    ],
    
    faqItems: [
      {
        question: 'Como funciona a telemedicina?',
        answer: 'Pelo app Hapvida você agenda consultas virtuais com especialistas disponíveis 24/7 em poucos minutos, sem sair de casa.'
      },
      {
        question: 'Quais são as vantagens de usar telemedicina?',
        answer: 'Maior comodidade, agilidade no atendimento, redução de filas e acesso a especialistas em qualquer horário. Além de consultas mais rápidas e eficientes.'
      },
      {
        question: 'Posso usar a telemedicina para todas as consultas?',
        answer: 'Telemedicina é ideal para consultas iniciais, follow-ups, orientações e triagem. Para procedimentos que exigem exame físico, indicamos a rede credenciada presencial.'
      },
    ]
  },
  'sulamerica': {
    name: 'SulAmérica',
    title: 'SulAmérica - Segurança em Saúde',
    subtitle: 'Especializada em soluções customizadas',
    description: 'A SulAmérica se destaca pela excelente personalização de planos e qualidade em atendimento corporativo. Com 25+ anos de experiência, atende aproximadamente 3,2 milhões de beneficiários em todo o Brasil.',
    logo: 'https://via.placeholder.com/200',
    founded: 1999,
    members: 3200000,
    rating: 4.6,
    reviews: 1700,
    
    highlights: [
      { icon: 'people', number: '3.2M+', label: 'Beneficiários', variant: 'highlight' as const },
      { icon: 'tune', number: '100%', label: 'Customizável', variant: 'default' as const },
      { icon: 'star', number: '4.6', label: 'Avaliação', badge: 'Ótimo', badgeVariant: 'primary' as const }
    ],
    
    solutions: [
      {
        title: 'Planos Individuais',
        description: 'Coberturas flexíveis adaptadas a cada perfil de beneficiário',
        icon: 'person',
      },
      {
        title: 'Planos Empresariais',
        description: 'Soluções corporativas com consultoria dedicada',
        icon: 'business',
      },
      {
        title: 'Saúde e Bem-estar',
        description: 'Programas de prevenção e qualidade de vida',
        icon: 'exercise',
      },
      {
        title: 'Complementares',
        description: 'Odontologia, visão e coberturas adicionais',
        icon: 'shield',
      },
    ],
    
    network_highlights: [
      { icon: 'local_hospital', label: 'Hospitals de Referência', description: 'Parcerias com excelentes hospitais' },
      { icon: 'tune', label: 'Customização', description: 'Planos totalmente personalizáveis' },
      { icon: 'location_on', label: 'Cobertura Nacional', description: 'Presente em todo o Brasil' },
    ],
    
    technology: {
      title: 'Portal SulAmérica - Sua Saúde Online',
      description: 'Plataforma digital completa para gerenciar seus benefícios com facilidade',
      features: [
        { icon: 'calendar_today', label: 'Agendamento Online', description: 'Marque consultas em segundos' },
        { icon: 'video_call', label: 'Telemedicina', description: 'Consultas virtuais 24/7' },
        { icon: 'description', label: 'Solicitação de Autorizações', description: 'Rápido e descomplicado' },
        { icon: 'receipt_long', label: 'Reembolsos', description: 'Processamento ágil e eficiente' },
      ]
    },
    
    certifications: [
      { icon: 'verified', label: 'ISO 9001:2015', description: 'Qualidade' },
      { icon: 'verified', label: 'NIAHO', description: 'Padrão Internacional' },
      { icon: 'verified', label: 'ONA', description: 'Excelência Hospitalar' },
      { icon: 'verified', label: 'Protegido', description: 'Segurança Financeira' },
    ],
    
    faqItems: [
      {
        question: 'Como faço para customizar meu plano?',
        answer: 'A SulAmérica oferece telas de configuração onde você escolhe as coberturas que deseja. Nossos consultores também podem ajudar com recomendações personalizadas.'
      },
      {
        question: 'Quais são as carências?',
        answer: 'As carências variam conforme o tipo de cobertura, mas oferecemos planos com carências reduzidas para beneficiários selecionados.'
      },
      {
        question: 'Posso cancelar e reativar facilmente?',
        answer: 'Sim, nós oferecemos flexibilidade no cancelamento e reativação de benefícios conforme suas necessidades mudam.'
      },
    ]
  },
  'unimed': {
    name: 'Unimed',
    title: 'Unimed - Cooperativa de Saúde',
    subtitle: 'Pelos amigos da medicina',
    description: 'A Unimed é a maior cooperativa de trabalho médico do Brasil, com modelo inovador onde médicos são proprietários. Atende aproximadamente 4,5 milhões de beneficiários com foco em excelência médica e qualidade assistencial.',
    logo: 'https://via.placeholder.com/200',
    founded: 1967,
    members: 4500000,
    rating: 4.4,
    reviews: 1500,
    
    highlights: [
      { icon: 'people', number: '4.5M+', label: 'Beneficiários', variant: 'highlight' as const },
      { icon: 'person_check', number: '100k+', label: 'Médicos Cooperados', variant: 'default' as const },
      { icon: 'star', number: '4.4', label: 'Avaliação', badge: 'Ótimo', badgeVariant: 'primary' as const }
    ],
    
    solutions: [
      {
        title: 'Planos Individuais',
        description: 'Cobertura flexível para você e sua família',
        icon: 'person',
      },
      {
        title: 'Planos Coletivos',
        description: 'Soluções corporativas e de grupos',
        icon: 'business',
      },
      {
        title: 'MEI e Autônomos',
        description: 'Planos especializados para profissionais independentes',
        icon: 'work',
      },
      {
        title: 'Interoperabilidade',
        description: 'Use seu plano em qualquer região do Brasil',
        icon: 'public',
      },
    ],
    
    network_highlights: [
      { icon: 'person_check', label: 'Médicos Cooperados', description: 'Profissionais qualificados e dedicados' },
      { icon: 'public', label: 'Cobertura Nacional', description: 'Operadoras em quase todas as cidades' },
      { icon: 'medical_services', label: 'Todas Especialidades', description: 'Acesso a todas as especialidades médicas' },
    ],
    
    technology: {
      title: 'Plataforma Unimed - Saúde na Sua Mão',
      description: 'Sistema completo para gerenciar sua saúde com tecnologia de ponta',
      features: [
        { icon: 'calendar_today', label: 'Agendamento Online', description: 'Marque com médicos cooperados' },
        { icon: 'video_call', label: 'Telemedicina', description: 'Consultas virtuais 24/7' },
        { icon: 'assignment', label: 'Resultados de Exames', description: 'Acesso digital ao histórico' },
        { icon: 'healing', label: 'Saúde Preventiva', description: 'Programas e acompanhamento' },
      ]
    },
    
    certifications: [
      { icon: 'verified', label: 'ISO 9001', description: 'Qualidade' },
      { icon: 'verified', label: 'Cooperativa', description: 'Modelo Único' },
      { icon: 'verified', label: 'NIAHO', description: 'Acreditação' },
      { icon: 'verified', label: 'Nacional', description: 'Maior Rede' },
    ],
    
    faqItems: [
      {
        question: 'O que significa ser cooperativa?',
        answer: 'Significa que os médicos são proprietários da empresa. Isso garante que decisões priorizem a qualidade médica e o bem-estar dos beneficiários.'
      },
      {
        question: 'Posso usar meu plano em todo o Brasil?',
        answer: 'Sim! A Unimed oferece interoperabilidade total, permitindo usar seu plano em qualquer estado brasileiro.'
      },
      {
        question: 'Como é o atendimento ao beneficiário?',
        answer: 'Temos múltiplos canais de atendimento, com equipes qualificadas e tempos de resposta rápidos para resolver suas dúvidas.'
      },
    ]
  },
  'bradesco-saude': {
    name: 'Bradesco Saúde',
    title: 'Bradesco Saúde - Confiança Bradesco',
    subtitle: 'Solidez de um grande banco em saúde',
    description: 'O Bradesco Saúde é a operadora de saúde do Bradesco, aproveitando a solidez de um dos maiores bancos brasileiros. Com 40+ anos de experiência, atende aproximadamente 1,8 milhões de beneficiários com segurança financeira e qualidade assistencial.',
    logo: 'https://via.placeholder.com/200',
    founded: 1982,
    members: 1800000,
    rating: 4.5,
    reviews: 1200,
    
    highlights: [
      { icon: 'people', number: '1.8M+', label: 'Beneficiários', variant: 'highlight' as const },
      { icon: 'verified', number: '40+', label: 'Anos de Solidez', variant: 'default' as const },
      { icon: 'star', number: '4.5', label: 'Avaliação', badge: 'Ótimo', badgeVariant: 'primary' as const }
    ],
    
    solutions: [
      {
        title: 'Planos Individuais',
        description: 'Cobertura flexível com múltiplas opções de valores',
        icon: 'person',
      },
      {
        title: 'Planos Corporativos',
        description: 'Gestão integrada para empresas de qualquer porte',
        icon: 'business',
      },
      {
        title: 'Complementares',
        description: 'Odontologia, visão, acupuntura e especialidades',
        icon: 'shield',
      },
      {
        title: 'Bem-estar',
        description: 'Programas de saúde preventiva e qualidade de vida',
        icon: 'favorite',
      },
    ],
    
    network_highlights: [
      { icon: 'verified', label: 'Solidez Financeira', description: 'Segurança comprovada do Bradesco' },
      { icon: 'handshake', label: 'Integração', description: 'Serviços integrados com o banco' },
      { icon: 'location_on', label: 'Cobertura Total', description: 'Rede em todo o Brasil' },
    ],
    
    technology: {
      title: 'App Bradesco Saúde - Integrado ao Bradesco',
      description: 'Sua saúde e suas finanças em um único aplicativo',
      features: [
        { icon: 'calendar_today', label: 'Agendamento Online', description: 'Marque suas consultas facilmente' },
        { icon: 'video_call', label: 'Telemedicina', description: 'Consultas virtuais disponíveis' },
        { icon: 'account_balance', label: 'Integração Bancária', description: 'Tudo em um lugar' },
        { icon: 'receipt_long', label: 'Autorização Rápida', description: 'Processamento ágil' },
      ]
    },
    
    certifications: [
      { icon: 'verified', label: 'ISO 9001', description: 'Qualidade' },
      { icon: 'verified', label: 'NIAHO', description: 'Acreditação' },
      { icon: 'verified', label: 'Bradesco', description: 'Solidez' },
      { icon: 'verified', label: 'Segurança', description: 'Financeira' },
    ],
    
    faqItems: [
      {
        question: 'Como funciona a integração com o Bradesco?',
        answer: 'Clientes Bradesco recebem benefícios diferenciados, acesso prioritário, pontos do programa, e gerenciamento unificado de contas bancárias e de saúde.'
      },
      {
        question: 'Qual é o diferencial do Bradesco Saúde?',
        answer: 'A solidez financeira comprovada, resolutividade rápida em reembolsos e autorizações, além de atendimento especializado integrado ao banco.'
      },
      {
        question: 'Existem planos com carência zero?',
        answer: 'Sim, oferecemos opções de planos com carências reduzidas ou consultoria para encontrar a melhor solução para seu perfil.'
      },
    ]
  }
}

export default function OperadoraPage({
  params,
}: {
  params: { slug: string }
}) {
  const info = operadorasInfo[params.slug as keyof typeof operadorasInfo]

  if (!info) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <Header />
        <Section py="lg" bg="white">
          <Container>
            <h1 className="text-display-md font-bold text-neutral-900">Operadora não encontrada</h1>
            <Link href="/operadoras" className="text-primary-500 hover:underline mt-4 block">
              ← Voltar para Operadoras
            </Link>
          </Container>
        </Section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      {/* ==== SEÇÃO 1: HERO + FORMULÁRIO ==== */}
      <Section py="lg" bg="white" id="form" className="py-16 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Conteúdo Hero */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-body-xs font-semibold">
                  {info.subtitle}
                </span>
              </div>
              <h1 className="text-display-xl md:text-display-2xl font-bold text-neutral-900">
                {info.title}
              </h1>
              <p className="text-body-xl text-neutral-600">
                {info.description}
              </p>
              <p className="text-body-md text-neutral-500 font-medium">
                Desde {info.founded} • {(info.members / 1000000).toFixed(1)}M beneficiários
              </p>
            </div>

            {/* Formulário */}
            <div className="sticky top-20">
              <LeadForm variant="block" compact={true} />
            </div>
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 2: STATS PRINCIPAIS ==== */}
      <Section py="lg" bg="primary-50">
        <StatsRow stats={info.highlights} columns={3} gap="lg" fullWidth={true} />
      </Section>

      {/* ==== SEÇÃO 3: RESUMO + TRUST BADGES ==== */}
      <Section py="lg" bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <SectionHeading
              title="Porquê Escolher a {info.name}?"
              subtitle="Confiança e Qualidade"
              size="lg"
              align="center"
            />
            
            <div className="flex flex-wrap gap-3 justify-center">
              <SocialProofBadge label="Maior Rede" icon="verified" variant="badge" color="primary" />
              <SocialProofBadge label="24/7 Disponível" icon="verified" variant="badge" color="success" />
              <SocialProofBadge label="{info.rating}★ Avaliado" icon="verified" variant="badge" color="primary" />
            </div>
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 4: SOLUÇÕES E PLANOS ==== */}
      <Section py="lg" bg="light">
        <Container>
          <SectionHeading
            title="Soluções e Planos"
            subtitle="Para cada necessidade"
            description="Escolha o plano que melhor se adequa ao seu perfil e ao da sua família"
            align="center"
            size="md"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {info.solutions.map((solution, idx) => (
              <ServiceCard
                key={idx}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                cta={{
                  label: 'Saiba Mais',
                  href: '#',
                }}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 5: REDE DE CREDENCIADOS ==== */}
      <Section py="lg" bg="white">
        <Container>
          <SectionHeading
            title="Rede de Credenciados"
            subtitle="Acesso à Saúde"
            description="Maior rede credenciada do Brasil com prestadores de qualidade"
            align="center"
            size="md"
            className="mb-12"
          />
          
          <IconGrid
            items={info.network_highlights}
            columns={3}
            gap="lg"
            variant="card"
          />
        </Container>
      </Section>

      {/* ==== SEÇÃO 6: TECNOLOGIA ==== */}
      <HighlightBand
        title={info.technology.title}
        description={info.technology.description}
        variant="primary"
        align="center"
        icon="smartphone"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {info.technology.features.map((feature, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="inline-flex p-3 bg-white/20 rounded-lg">
                <Icon name={feature.icon as any} size={24} />
              </div>
              <p className="font-medium text-body-sm">{feature.label}</p>
            </div>
          ))}
        </div>
      </HighlightBand>

      {/* ==== SEÇÃO 7: CERTIFICAÇÕES ==== */}
      <Section py="lg" bg="white">
        <Container>
          <SectionHeading
            title="Certificações e Reconhecimentos"
            subtitle="Qualidade Garantida"
            align="center"
            size="md"
            className="mb-12"
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {info.certifications.map((cert, idx) => (
              <SocialProofBadge
                key={idx}
                icon={cert.icon}
                label={cert.label}
                description={cert.description}
                variant="seal"
                color="primary"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 8: FAQ ==== */}
      <Section py="lg" bg="light">
        <Container>
          <SectionHeading
            title="Dúvidas Frequentes"
            description="Encontre respostas para as perguntas mais comuns"
            align="center"
            size="md"
            className="mb-12"
          />
          
          <FAQSection items={info.faqItems.map((item, idx) => ({ ...item, id: String(idx) }))} />
        </Container>
      </Section>

      {/* ==== SEÇÃO 9: CTA FINAL ==== */}
      <HighlightBand
        title="Pronto para contratar?"
        description="Solicite uma cotação personalizada sem compromisso"
        variant="secondary"
        align="center"
        cta={{
          label: 'Solicitar Cotação Agora',
          href: '#form',
        }}
      />

      <Footer />
    </main>
  )
}
