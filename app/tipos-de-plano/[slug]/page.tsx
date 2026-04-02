'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { LeadForm } from '@/components/sections/LeadForm'
import { StatsRow } from '@/components/sections/StatsRow'
import { FeatureCard } from '@/components/sections/FeatureCard'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { HighlightBand } from '@/components/sections/HighlightBand'
import { FAQSection } from '@/components/sections/FAQSection'
import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'

const tiposDeInfo = {
  'individual': {
    title: 'Plano Individual',
    subtitle: 'O plano ideal para você',
    tagline: 'Cobertura completa personalizada',
    featured: true,
    price_min: 150,
    price_max: 800,
    summary: 'Contratado para uma única pessoa, oferece máxima flexibilidade na escolha de coberturas e rede credenciada.',
    
    highlights: [
      { icon: 'star', number: '100%', label: 'Personalizado', badge: 'Flexível', badgeVariant: 'primary' as const },
      { icon: 'trending_down', number: '150-800', label: 'R$/mês', variant: 'highlight' as const },
      { icon: 'thumb_up', number: '4.8★', label: 'Avaliação Média', badgeVariant: 'success' as const },
    ],
    
    coverage: [
      { icon: 'local_hospital', label: 'Consultas Médicas', description: 'Cobertura em especialidades com copagamento' },
      { icon: 'bed', label: 'Internação Hospitalar', description: 'Cobertura integral de acomodação' },
      { icon: 'science', label: 'Exames Diagnósticos', description: 'Laboratório, raios-X, ultrassom, ressonância' },
      { icon: 'surgical_services', label: 'Procedimentos Cirúrgicos', description: 'Cirurgias ambulatoriais ou internação' },
      { icon: 'medication', label: 'Medicamentos', description: 'Cobertura hospitalar e pós-hospitalar' },
      { icon: 'video_call', label: 'Telemedicina', description: 'Consultas virtuais com especialistas' },
    ],
    
    ideal_for: [
      { icon: 'person', label: 'Autônomos e PJs', description: 'Profissionais independentes' },
      { icon: 'person', label: 'pessoa Sem Plano', description: 'Sem acesso a vantagens coletivas' },
      { icon: 'check', label: 'Customização', description: 'Quem quer escolher cada detalhe' },
    ],
    
    benefits: [
      { icon: 'settings', label: 'Flexibilidade Máxima', description: 'Personalize cada aspecto do seu plano' },
      { icon: 'trending_down', label: 'Preço Justo', description: 'Valor corresponde ao seu perfil' },
      { icon: 'public', label: 'Rede Ampla', description: 'Acesso a todas as operadoras' },
      { icon: 'lock', label: 'Exclusividade', description: 'Contrato dedicado para você' },
    ],
    
    faqItems: [
      {
        question: 'Como funciona o copagamento?',
        answer: 'O copagamento é um valor fixo que você paga em cada consulta, acima do que a operadora cobre. Quanto maior o plano, menor o copagamento.'
      },
      {
        question: 'Há carência para usar o plano?',
        answer: 'Sim, há carência legal de 12 meses para procedimentos eletivos. Para emergências, a carência é de apenas 24 horas.'
      },
      {
        question: 'Posso incluir dependentes?',
        answer: 'Planos individuais são pessoais, mas você pode contratar um plano familiar se quiser proteger seus dependentes.'
      },
      {
        question: 'Como fica a cobertura após 60 anos?',
        answer: 'Após 60 anos, operadoras podem aumentar o valor até 100% (máximo legal). O plano continua válido, mas o custo sobe.'
      },
    ]
  },
  'familiar': {
    title: 'Plano Familiar',
    subtitle: 'Proteção completa para a família',
    tagline: 'Economia de escala com máxima proteção',
    featured: true,
    price_min: 350,
    price_max: 1200,
    summary: 'Solução inteligente para proteger todos os membros da família com um único contrato compartilhando benefícios.',
    
    highlights: [
      { icon: 'group', number: '2-4+', label: 'Pessoas Cobertas', badge: 'Flexível', badgeVariant: 'primary' as const },
      { icon: 'trending_down', number: '350-1.2k', label: 'R$/mês', variant: 'highlight' as const },
      { icon: 'local_offer', number: '40%', label: 'Mais Barato', badgeVariant: 'success' as const },
    ],
    
    coverage: [
      { icon: 'two_wheeler', label: 'Titular + Cônjuge', description: 'Cobertura equivalente para ambos' },
      { icon: 'child_care', label: 'Filhos até 24 anos', description: 'Até maioridade ou enquanto estudam' },
      { icon: 'favorite', label: 'Cobertura Maternidade', description: 'Pré-natal, parto e pós-natal' },
      { icon: 'child_friendly', label: 'Pediatria Especializada', description: 'Saúde completa de crianças' },
      { icon: 'supervised_user_circle', label: 'Um Contrato', description: 'Gestão simplificada para todos' },
      { icon: 'check_circle', label: 'Todos os Procedimentos', description: 'Mesma cobertura para toda família' },
    ],
    
    ideal_for: [
      { icon: 'family_restroom', label: 'Famílias', description: 'Titulares com cônjuge e filhos' },
      { icon: 'trending_down', label: 'Economia', description: 'Querem economizar em saúde' },
      { icon: 'security', label: 'Proteção Total', description: 'Toda família protegida' },
    ],
    
    benefits: [
      { icon: 'savings', label: 'Grande Economia', description: 'Até 40% menor que contratar individualmente' },
      { icon: 'child_friendly', label: 'Proteção Infantil', description: 'Beneficiários menores com cobertura completa' },
      { icon: 'pregnant_woman', label: 'Maternidade Incluida', description: 'Gravidez e parto sem restrições' },
      { icon: 'manage_accounts', label: 'Gestão Simples', description: 'Um contrato para gerenciar tudo' },
    ],
    
    faqItems: [
      {
        question: 'Até que idade os filhos ficam cobertos?',
        answer: 'Até 24 anos se estiverem em instituição de ensino, ou até a maioridade aos 18. Após isso, precisam contratar plano individual.'
      },
      {
        question: 'E se eu separar/divorciar?',
        answer: 'O cônjuge pode solicitar portabilidade individual ou se desligar. O plano continua para o titular e dependentes menores.'
      },
      {
        question: 'Inclui saúde mental?',
        answer: 'Sim, planos familiares incluem cobertura para psicologia e psiquiatria para todos os membros da família.'
      },
      {
        question: 'Qual é a cobertura para maternidade?',
        answer: 'Cobertura completa: pré-natal, parto, cesariana, internação e medicações. Sem restrições ou períodos de carência.'
      },
    ]
  },
  'empresarial': {
    title: 'Plano Empresarial',
    subtitle: 'Estratégia de benefícios corporativos',
    tagline: 'Saúde para sua equipe, sucesso para empresa',
    featured: true,
    price_min: 200,
    price_max: 600,
    summary: 'Benefício estratégico que melhora produtividade, atrai talentos e demonstra comprometimento com bem-estar da equipe.',
    
    highlights: [
      { icon: 'business', number: '10+', label: 'Colaboradores Min.', badge: 'Escalável', badgeVariant: 'primary' as const },
      { icon: 'trending_down', number: '200-600', label: 'R$/mês p/ pessoa', variant: 'highlight' as const },
      { icon: 'tax_exempt', number: '+Tax', label: 'Benefício Fiscal', badgeVariant: 'success' as const },
    ],
    
    coverage: [
      { icon: 'person_check', label: 'Cobertura Colaborador', description: 'Médica completa com rede abrangente' },
      { icon: 'group_add', label: 'Dependentes Opcionais', description: 'Cônjuge e filhos podem ser inclusos' },
      { icon: 'tune', label: 'Planos Dimensionáveis', description: 'Básico, Standard ou Premium' },
      { icon: 'check', label: 'Sem Análise Prévia', description: 'Grupos de 30+ não precisam análise' },
      { icon: 'calendar_month', label: 'Adesão Facilitada', description: 'Processo simplificado para empresa' },
      { icon: 'update', label: 'Revisão Anual', description: 'Ajustes conforme necessidade' },
    ],
    
    ideal_for: [
      { icon: 'domain', label: 'Empresas', description: 'Médias e grandes organizações' },
      { icon: 'trending_up', label: 'Crescimento', description: 'Retensão de talentos' },
      { icon: 'groups', label: 'Equipes', description: '10+  colaboradores' },
    ],
    
    benefits: [
      { icon: 'savings', label: 'Desconto Fiscal', description: 'Contribuição patronal dedutível IRPJ' },
      { icon: 'trending_up', label: 'Reduz Absenteísmo', description: 'Equipe com melhor acesso à saúde' },
      { icon: 'star_half', label: 'Retém Talentos', description: 'Benefício muito valorizado' },
      { icon: 'speed', label: 'Mais Produtividade', description: 'Equipe mais saudável e motivada' },
    ],
    
    faqItems: [
      {
        question: 'Qual o número mínimo de funcionários?',
        answer: 'Geralmente é 2 pessoas, mas planos com 30+ colaboradores abrem acesso a vantagens especiais e sem análise prévia.'
      },
      {
        question: 'Como funciona a contribuição patronal?',
        answer: 'A empresa Define a % de subsídio. O restante pode sair do salário (desconto em folha). É dedutível IRPJ da empresa.'
      },
      {
        question: 'E se um funcionário sair?',
        answer: 'Ele pode usar portabilidade individual. Empresa pode solicitar exclusão do grupo. Preço ajusta conforme grupo menor.'
      },
      {
        question: 'Inclui dependentes?',
        answer: 'Sim, é opcional. Empresa e/ou funcionário pode subsidiar dependentes. Geralmente custa 20-30% a mais por dependente.'
      },
    ]
  },
  'mei': {
    title: 'Plano MEI',
    subtitle: 'Especial para microempreendedores',
    tagline: 'Cobertura completa com benefícios fiscais',
    featured: true,
    price_min: 120,
    price_max: 500,
    summary: 'Desenvolvido para MEI com valores reduzidos, flexibilidade e reconhecimento fiscal como despesa profissional.',
    
    highlights: [
      { icon: 'business_center', number: '20-30%', label: 'Mais Barato', badge: 'Economize', badgeVariant: 'success' as const },
      { icon: 'trending_down', number: '120-500', label: 'R$/mês', variant: 'highlight' as const },
      { icon: 'assignment_turned_in', number: '✓', label: 'Dedutível Imposto', badgeVariant: 'primary' as const },
    ],
    
    coverage: [
      { icon: 'local_hospital', label: 'Consultas Médicas', description: 'Rede abrangente de especialidades' },
      { icon: 'bed', label: 'Internação', description: 'Cobertura integral hospitalar' },
      { icon: 'science', label: 'Exames e Diagnóstico', description: 'Laboratório, imagem, etc.' },
      { icon: 'surgical_services', label: 'Procedimentos', description: 'Cirurgias e procedimentos' },
      { icon: 'tune', label: 'Customizável', description: 'Monte seu plano conforme necessidade' },
      { icon: 'group', label: 'Dependentes', description: 'Possibilidade de incluir família' },
    ],
    
    ideal_for: [
      { icon: 'person', label: 'MEI', description: 'Microempreendedor Individual' },
      { icon: 'trending_down', label: 'Autônomos', description: 'Profissionais independentes' },
      { icon: 'trending_up', label: 'PJ', description: 'Pessoa Jurídica pequena' },
    ],
    
    benefits: [
      { icon: 'trending_down', label: 'Preços Reduzidos', description: '20-30% menor que individual' },
      { icon: 'tune', label: 'Flexibilidade', description: 'Escolha coberturas conforme renda' },
      { icon: 'attach_money', label: 'Benefício Fiscal', description: 'Deduzível na declaração de IR' },
      { icon: 'family_restroom', label: 'Família Incluída', description: 'Opção de proteger dependentes' },
    ],
    
    faqItems: [
      {
        question: 'Como aproveitar o benefício fiscal?',
        answer: 'Guarde o comprovante de pagamento e declare como despesa profissional no IR. Reduz base tributária.'
      },
      {
        question: 'Posso incluir família?',
        answer: 'Sim, mas aumenta o custo. Geralmente família custa 30-50% a mais que o plano do titular MEI.'
      },
      {
        question: 'Qual plano contratar?',
        answer: 'Comece com básico ou standard. Muitos MEI escolhem planos com franquia para manter custo baixo.'
      },
      {
        question: 'Posso alterar o plano depois?',
        answer: 'Sim! Você pode aumentar ou reduzir cobertura anualmente ou por solicitação especial.'
      },
    ]
  },
  'coletivo-por-adesao': {
    title: 'Coletivo por Adesão',
    subtitle: 'Benefícios de grupo sem estar em empresa',
    tagline: 'Preços negociados com economias de até 50%',
    featured: true,
    price_min: 180,
    price_max: 600,
    summary: 'Filie-se a um grupo pré-negociado aproveitando descontos corporativos sem vínculo empregatício.',
    
    highlights: [
      { icon: 'groups', number: '30-50%', label: 'Economia', badge: 'Desconto Grupo', badgeVariant: 'success' as const },
      { icon: 'trending_down', number: '180-600', label: 'R$/mês', variant: 'highlight' as const },
      { icon: 'assignment_turned_in', number: '✓', label: 'Simples Adesão', badgeVariant: 'primary' as const },
    ],
    
    coverage: [
      { icon: 'security', label: 'Cobertura Inicial', description: 'Grupos pré-negociados' },
      { icon: 'directions', label: 'Mesmos Beneficiários', description: 'Acesso idêntico a planos comerciais' },
      { icon: 'person_add', label: 'Adesão Simplificada', description: 'Processo rápido sem análise rigorosa' },
      { icon: 'trending_down', label: 'Preços Coletivos', description: 'Benefício dos descontos negociados' },
      { icon: 'check_circle', label: 'Mesmo Operadora', description: 'Acesso à rede de prestadores' },
      { icon: 'handshake', label: 'Segurança Coletiva', description: 'Estabilidade de um grupo organizado' },
    ],
    
    ideal_for: [
      { icon: 'local_florist', label: 'Sindicatos', description: 'Categorias profissionais' },
      { icon: 'engineering', label: 'Associações', description: 'De profissionais e classe' },
      { icon: 'apartment', label: 'Condomínios', description: 'Moradores de prédios' },
    ],
    
    benefits: [
      { icon: 'trending_down', label: 'Preços Muito Reduzidos', description: '30-50% mais barato vs individual' },
      { icon: 'group', label: 'Segurança Coletiva', description: 'Stability de grupo estruturado' },
      { icon: 'public', label: 'Rede Ampla', description: 'Prestadores da operadora principal' },
      { icon: 'check_circle', label: 'Cobertura Abrangente', description: 'Procedimentos normalmente necessários' },
    ],
    
    faqItems: [
      {
        question: 'Qual grupo devo escolher?',
        answer: 'Se você pertence a profissão, sindicato ou associação, procure saber se têm grupo pré-negociado com convênios.'
      },
      {
        question: 'Por que é mais barato?',
        answer: 'Grupos têm poder de negociação com operadoras. Volume maior = desconto negociado que beneficia todos.'
      },
      {
        question: 'E se eu sair do grupo?',
        answer: 'Você tem direito à portabilidade para plano individual da operadora mantendo cobertura, mas preço sobe.'
      },
      {
        question: 'É incluído telemedicina?',
        answer: 'Sim, geralmente incluída em planos por adesão. Consulte o grupo sobre quais benefícios estão inclusos.'
      },
    ]
  }
}

export default function TipoDePlanPage({
  params,
}: {
  params: { slug: string }
}) {
  const info = tiposDeInfo[params.slug as keyof typeof tiposDeInfo]

  if (!info) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <Header />
        <Section py="lg" bg="white">
          <Container>
            <h1 className="text-display-md font-bold text-neutral-900">Tipo de plano não encontrado</h1>
            <Link href="/tipos-de-plano" className="text-primary-500 hover:underline mt-4 block">
              ← Voltar para Tipos de Plano
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
                  {info.tagline}
                </span>
              </div>
              <h1 className="text-display-xl md:text-display-2xl font-bold text-neutral-900">
                {info.title}
              </h1>
              <p className="text-body-xl text-neutral-600">
                {info.summary}
              </p>
              <p className="text-body-lg text-primary-600 font-semibold">
                De R$ {info.price_min.toLocaleString('pt-BR')} a R$ {info.price_max.toLocaleString('pt-BR')} mensais
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

      {/* ==== SEÇÃO 3: COBERTURA (FEATURE CARDS) ==== */}
      <Section py="lg" bg="white">
        <Container>
          <SectionHeading
            title="Cobertura Incluída"
            subtitle="O que você está protegido"
            description="Todos estes benefícios estão incluídos no seu plano"
            align="center"
            size="md"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.coverage.map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={item.icon}
                title={item.label}
                description={item.description}
                variant="default"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 4: PARA QUEM É ==== */}
      <Section py="lg" bg="light">
        <Container>
          <SectionHeading
            title="Para Quem é Ideal?"
            subtitle="Perfil do Beneficiário"
            align="center"
            size="md"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {info.ideal_for.map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white border border-neutral-200 text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <Icon name={item.icon as any} size={24} className="text-primary-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900">{item.label}</h3>
                <p className="text-body-sm text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 5: BENEFÍCIOS (EM DESTAQUE) ==== */}
      <Section py="lg" bg="white">
        <Container>
          <SectionHeading
            title="Principais Benefícios"
            subtitle="Por que escolher este plano"
            align="center"
            size="md"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {info.benefits.map((benefit, idx) => (
              <FeatureCard
                key={idx}
                icon={benefit.icon}
                title={benefit.label}
                description={benefit.description}
                iconColor="success"
                variant="elevated"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 6: COMPARAÇÃO COM OUTROS ==== */}
      <HighlightBand
        title="Comparando Tipos de Plano"
        description="Cada tipo tem seu lugar dependendo da sua situação"
        variant="accent"
        align="center"
        cta={{
          label: 'Ver Comparação Completa',
          href: '/tipos-de-plano',
        }}
      />

      {/* ==== SEÇÃO 7: FAQ ==== */}
      <Section py="lg" bg="white">
        <Container>
          <SectionHeading
            title="Dúvidas Frequentes"
            description="Respostas para as perguntas mais comuns sobre este tipo de plano"
            align="center"
            size="md"
            className="mb-12"
          />
          
          <FAQSection items={info.faqItems.map((item, idx) => ({ ...item, id: String(idx) }))} />
        </Container>
      </Section>

      {/* ==== SEÇÃO 8: CTA FINAL ==== */}
      <HighlightBand
        title="Encontre o Plano Certo para Você"
        description="Solicite uma cotação gratuita e sem compromisso com condições especiais"
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
