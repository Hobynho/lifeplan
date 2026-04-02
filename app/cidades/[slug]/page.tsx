'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { LeadForm } from '@/components/sections/LeadForm'
import { CityHero } from '@/components/sections/CityHero'
import { LocalStatCard } from '@/components/sections/LocalStatCard'
import { CityBenefitCard } from '@/components/sections/CityBenefitCard'
import { OperatorCityCard } from '@/components/sections/OperatorCityCard'
import { InfrastructureCard } from '@/components/sections/InfrastructureCard'
import { PlanTypeCard } from '@/components/sections/PlanTypeCard'
import { CityFAQSection } from '@/components/sections/CityFAQSection'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { HighlightBand } from '@/components/sections/HighlightBand'
import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'

const cidadesInfo = {
  'recife': {
    name: 'Recife',
    state: 'PE',
    tagline: 'Mercado de saúde referência no Nordeste com infraestrutura premium e todas as grandes operadoras presentes',
    description: 'Capital de Pernambuco é um dos principais mercados de saúde suplementar do Nordeste. Oferece infraestrutura hospitalar avançada, rede credenciada extensa, todas as grandes operadoras atuando e acesso facilitado a especialistas de excelência.',
    image: 'https://images.unsplash.com/photo-1551874014-7ee2a757ac2d?w=800&h=400&fit=crop&q=80',

    // Seção 2: Quick Stats
    stats: [
      { icon: 'people', number: '1.6M+', label: 'Residentes', highlight: true },
      { icon: 'business', number: '5', label: 'Operadoras', description: 'Amil, Hapvida, SulAmérica, Unimed, Bradesco' },
      { icon: 'local_hospital', number: '40+', label: 'Hospitais & Clínicas' },
      { icon: 'star', number: 'A+', label: 'Ranking Regional', description: 'Melhor infraestrutura de saúde do NE' },
    ],

    // Seção 3: Benefits Grid
    benefits: [
      {
        icon: 'local_hospital',
        title: 'Hospitais de Referência',
        description: 'Acesso a instituições como Hospital da Restauração, Hospital da Sagrada Família e Hospital Otávio de Freitas',
        highestBenefit: true,
      },
      {
        icon: 'group_add',
        title: 'Forte Presença de Operadoras',
        description: 'Todas as 5 maiores operadoras com escritórios locais, gerentes dedicados e atendimento especializado',
      },
      {
        icon: 'trending_down',
        title: 'Valores Competitivos',
        description: 'Grande concorrência entre operadoras resulta em preços mais acessíveis e promoções frequentes',
      },
      {
        icon: 'directions_run',
        title: 'Acesso a Especialistas',
        description: 'Facilidade para marcar consultas e procedimentos com profissionais renomados de várias especialidades',
      },
      {
        icon: 'favorite',
        title: 'Programas de Bem-estar',
        description: 'Iniciativas de saúde preventiva, fitness e orientação nutricional incluídas nos planos',
      },
      {
        icon: 'headset_mic',
        title: 'Atendimento Local',
        description: 'Equipes dedicadas nas operadoras com compreensão das necessidades específicas da região',
      },
    ],

    // Seção 4: Operators
    operators: [
      {
        name: 'Amil',
        strength: 'Maior rede credenciada com tecnologia integrada',
        ideal: 'Famílias e empresas que buscam cobertura completa',
        icon: 'business',
        highlighted: true,
      },
      {
        name: 'Hapvida',
        strength: 'Telemedicina 24/7 e modelo inovador',
        ideal: 'Pessoas em busca de flexibilidade e agilidade',
        icon: 'video_call',
      },
      {
        name: 'SulAmérica',
        strength: 'Planos totalmente customizáveis',
        ideal: 'Empresas e profissionais que buscam personalização',
        icon: 'tune',
      },
      {
        name: 'Unimed Recife',
        strength: 'Cooperativa local com tradição desde 1967',
        ideal: 'Pacientes que valorizam proximidade com médicos',
        icon: 'person_check',
      },
      {
        name: 'Bradesco Saúde',
        strength: 'Solidez financeira e integração bancária',
        ideal: 'Clientes do Bradesco e empresas consolidadas',
        icon: 'verified',
      },
    ],

    // Seção 5: Infrastructure
    infrastructure: [
      {
        name: 'Hospital da Restauração',
        category: 'Hospital de Referência',
        icon: 'local_hospital',
        description: 'Instituição tradicional com múltiplas especialidades e tecnologia médica avançada',
        specialty: 'Cirurgia, Clínica Médica, Pediatria',
      },
      {
        name: 'Hospital da Sagrada Família',
        category: 'Hospital de Referência',
        icon: 'local_hospital',
        description: 'Centro de excelência com equipes multidisciplinares e atendimento humanizado',
        specialty: 'Obstetrícia, Otorrino, Neurologia',
      },
      {
        name: 'Hospital Otávio de Freitas',
        category: 'Hospital Especializado',
        icon: 'local_hospital',
        description: 'Especializado em oftalmologia e oftalmologia com reconhecimento nacional',
        specialty: 'Oftalmologia, Cirurgias Oftalmológicas',
      },
      {
        name: 'IMIP - Instituto de Medicina Integral',
        category: 'Centro Diagnóstico',
        icon: 'science',
        description: 'Centro multi-especializado com laboratório, imagem e ambulatório integrado',
        specialty: 'Diagnóstico por Imagem, Patologia Clínica',
      },
      {
        name: 'Centro de Câncer de Recife',
        category: 'Hospital Especializado',
        icon: 'healing',
        description: 'Centro de referência em oncologia com protocolos internacionais',
        specialty: 'Oncologia, Radioterapia, Quimioterapia',
      },
      {
        name: 'Instituto de Cardiologia de Pernambuco',
        category: 'Hospital Especializado',
        icon: 'favorite',
        description: 'Especializado em cardiopatias com tecnologia de ponta',
        specialty: 'Cardiologia, Cirurgia Cardíaca',
      },
    ],

    // Seção 6: Plan Types
    planTypes: [
      {
        title: 'Plano Individual',
        description: 'Cobertura completa com flexibilidade total de escolha de procedimentos',
        icon: 'person',
        audience: 'Profissionais autônomos e pessoas sem dependentes',
        recommended: false,
      },
      {
        title: 'Plano Familiar',
        description: 'Proteção para você e sua família com economia em relação a planos individuais',
        icon: 'family_restroom',
        audience: 'Famílias que buscam cobertura de múltiplos dependentes',
        recommended: true,
      },
      {
        title: 'Plano Empresarial',
        description: 'Solução corporativa com descontos por volume e benefícios para equipes',
        icon: 'corporate_fare',
        audience: 'Pequenas e médias empresas de Recife',
        recommended: false,
      },
      {
        title: 'Plano MEI/PJ',
        description: 'Especialmente desenvolvido para profissionais autônomos and micro-empreendedores',
        icon: 'trending_up',
        audience: 'Empreendedores e profissionais liberais',
        recommended: false,
      },
      {
        title: 'Plano Senior',
        description: 'Cobertura especial para maiores de 60 anos com atendimento diferenciado',
        icon: 'person_3',
        audience: 'Pessoas acima de 60 anos',
        recommended: false,
      },
      {
        title: 'Plano Específico',
        description: 'Odontológico, oftalmológico, psicológico ou outras especialidades',
        icon: 'specialty',
        audience: 'Quem busca cobertura focada em um serviço específico',
        recommended: false,
      },
    ],

    // Seção 8: FAQ
    faqItems: [
      {
        question: 'Quais operadoras de saúde atuam em Recife?',
        answer: 'As 5 principais operadoras funcionam em Recife: Amil, Hapvida, SulAmérica, Unimed Recife e Bradesco Saúde. Todas oferecem toda gama de planos: individuais, familiares, empresariais e especiais.',
        category: 'Operadoras',
      },
      {
        question: 'Qual é o melhor plano de saúde para contratar em Recife?',
        answer: 'Depende do seu perfil: Se você é indivíduo, prefira que oferece flexibilidade (Hapvida); se é empresa, a Amil tem maior penetração; se valoriza customização, SulAmérica se sobressai.',
        category: 'Contratação',
      },
      {
        question: 'Quanto custa um plano de saúde em Recife?',
        answer: 'Os valores variam conforme idade, cobertura e operadora, mas em Recife há competição que torna os preços mais acessíveis. Solicite uma cotação personalizada para sua situação específica.',
        category: 'Preços',
      },
      {
        question: 'Qual plano é ideal para famílias em Recife?',
        answer: 'Planos familiares são mais econômicos que somas de individuais. Na região, Amil e SulAmérica oferecem excelentes opções com larga rede. Hapvida destaca-se por telemedicina.',
        category: 'Famílias',
      },
      {
        question: 'Qual operadora tem melhor telemedicina em Recife?',
        answer: 'Hapvida é referência em telemedicina 24/7 com 50+ mil médicos. As demais operadoras também oferecem, mas Hapvida se sobressai nessa modalidade.',
        category: 'Serviços',
      },
      {
        question: 'Posso mudar de operadora após contratação?',
        answer: 'Sim, respeitando prazos de carência. Aconselhamos avaliar planos antes de contratar. Cada operadora tem regras específicas - consulte a escolhida.',
        category: 'Políticas',
      },
    ],
  },
  'olinda': {
    name: 'Olinda',
    state: 'PE',
    tagline: 'Patrimônio histórico com acesso completo à infraestrutura médica de Recife e todas operadoras',
    description: 'Olinda é patrimônio histórico do Brasil e destino turístico consolidado. Como parte da região metropolitana de Recife, oferece excelentes planos de saúde com acesso à mesma infraestrutura hospitalar de qualidade e todas as principais operadoras atuando localmente.',
    image: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=800&h=400&fit=crop&q=80',

    stats: [
      { icon: 'people', number: '390k+', label: 'Residentes', highlight: true },
      { icon: 'business', number: '5', label: 'Operadoras', description: 'Mesma rede de Recife' },
      { icon: 'local_hospital', number: 'Acesso', label: 'Hospitais Próximos', description: 'A minutos de Recife' },
      { icon: 'location_on', number: 'Metro', label: 'Região Metropolitana', description: 'Integrada a Recife' },
    ],

    benefits: [
      {
        icon: 'directions_car',
        title: 'Proximidade com Infraestrutura',
        description: 'Acesso rápido aos hospitais de referência de Recife sem agravo de valores',
        highestBenefit: true,
      },
      {
        icon: 'trending_down',
        title: 'Mesmos Preços',
        description: 'Sem aumento de mensalidade pelas operadoras pelo fato de residir em Olinda',
      },
      {
        icon: 'health_and_safety',
        title: 'Programas Preventivos',
        description: 'Saúde preventiva para idosos, crianças e adultos com foco em bem-estar',
      },
      {
        icon: 'business_center',
        title: 'Atendimento Local',
        description: 'Clínicas especializadas distribuídas pela cidade para conveniência',
      },
      {
        icon: 'handshake',
        title: 'Serviços Integrados',
        description: 'Compatibilidade com redes de Recife para continuidade de atendimento',
      },
      {
        icon: 'phone',
        title: 'Suporte Local',
        description: 'Equipes dedicadas compreendendo a comunidade de Olinda',
      },
    ],

    operators: [
      {
        name: 'Amil',
        strength: 'Rede integrada metropolitana com tecnologia',
        ideal: 'Famílias em Olinda que usam centros em Recife',
        icon: 'business',
        highlighted: true,
      },
      {
        name: 'Hapvida',
        strength: 'Telemedicina que elimina deslocamentos',
        ideal: 'Quem prefere conveniência com agilidade',
        icon: 'video_call',
      },
      {
        name: 'SulAmérica',
        strength: 'Customização para residentes de Olinda',
        ideal: 'Empresas e freelancers locais',
        icon: 'tune',
      },
      {
        name: 'Unimed Recife',
        strength: 'Abrangência regional com qualidade',
        ideal: 'Pacientes que valorizam cooperativas',
        icon: 'person_check',
      },
      {
        name: 'Bradesco Saúde',
        strength: 'Solidez com integração bancária',
        ideal: 'Clientes Bradesco em Olinda',
        icon: 'verified',
      },
    ],

    infrastructure: [
      {
        name: 'Clínica Santo Agostinho',
        category: 'Clínica Local',
        icon: 'local_hospital',
        description: 'Clínica especializada em Olinda com atendimento de urgência e eletivo',
        specialty: 'Clínica Médica, Urgência',
      },
      {
        name: 'Hospital da Restauração',
        category: 'Hospital Referência (Recife)',
        icon: 'local_hospital',
        description: 'Acesso próximo ao maior hospital público de pernambuco',
        specialty: 'Cirurgias, Clínica Médica',
      },
      {
        name: 'IMIP',
        category: 'Centro Diagnóstico (Recife)',
        icon: 'science',
        description: 'A poucos quilômetros para diagnósticos avançados',
        specialty: 'Imagem, Patologia Clínica',
      },
      {
        name: 'Consultórios Espelhados',
        category: 'Consultórios',
        icon: 'domain',
        description: 'Múltiplos consultórios de especialistas em Olinda',
        specialty: 'Pediatria, Ginecologia, Cardiologia',
      },
    ],

    planTypes: [
      {
        title: 'Plano Individual',
        description: 'Proteção pessoal completa com acesso à rede inteira',
        icon: 'person',
        audience: 'Profissionais independentes de Olinda',
        recommended: false,
      },
      {
        title: 'Plano Familiar',
        description: 'Cobertura para você, cônjuge e filhos por um preço competitivo',
        icon: 'family_restroom',
        audience: 'Famílias que residem em Olinda',
        recommended: true,
      },
      {
        title: 'Plano Empresarial',
        description: 'Solução para pequenas e médias empresas de Olinda',
        icon: 'corporate_fare',
        audience: 'Empresas locais com equipe',
        recommended: false,
      },
    ],

    faqItems: [
      {
        question: 'Qual é a diferença de contratar em Olinda vs Recife?',
        answer: 'A mesma operadora, mesmo preço, mesma rede. Você tem conveniência local em Olinda e acesso a centros de referência de Recife quando necessário. Nenhuma desvantagem.',
        category: 'Cidades',
      },
      {
        question: 'As operadoras cobrem hospitais de Recife?',
        answer: 'Sim. Todos os planos contratados em Olinda cobrem toda a rede de Recife. Há integração completa entre as cidades da região metropolitana.',
        category: 'Cobertura',
      },
      {
        question: 'Qual operadora é melhor para Olinda?',
        answer: 'Amil tem maior penetração. Hapvida se sobressai em telemedicina. A melhor depende de seu perfil. Recomendamos cotação personalizada.',
        category: 'Operadoras',
      },
      {
        question: 'Posso usar meu plano em Recife sendo residente de Olinda?',
        answer: 'Sim, completamente. Você tem acesso a toda rede de Recife sem restrições. A proximidade é vantagem pois você está a minutos dos melhores hospitais.',
        category: 'Cobertura',
      },
    ],
  },
  'paulista': {
    name: 'Paulista',
    state: 'PE',
    tagline: 'Município estratégico da região metropolitana com economia dinâmica e acesso a infraestrutura premium',
    description: 'Paulista é um município estratégico da região metropolitana de Recife, com significativo desenvolvimento econômico e população crescente. Oferece planos de saúde completos com todas operadoras principais, garantindo acesso facilitado à infraestrutura médica regional de primeira qualidade.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&q=80',

    stats: [
      { icon: 'people', number: '320k+', label: 'Residentes', highlight: true },
      { icon: 'trending_up', number: 'Alto', label: 'Desenvolvimento', description: 'Economia dinâmica' },
      { icon: 'business', number: '5', label: 'Operadoras', description: 'Mercado aquecido' },
      { icon: 'star', number: 'Premium', label: 'Infraestrutura', description: 'Qualidade garantida' },
    ],

    benefits: [
      {
        icon: 'local_hospital',
        title: 'Clínicas e Consultórios Locais',
        description: 'Clínicas especializadas distribuídas em Paulista com profissionais de excelência',
        highestBenefit: true,
      },
      {
        icon: 'trending_down',
        title: 'Competição de Preços',
        description: 'Múltiplas operadoras competem por melhor custo-benefício em Paulista',
      },
      {
        icon: 'speed',
        title: 'Atendimento Ágil',
        description: 'Agendamento rápido e proximidade com especialistas de várias áreas',
      },
      {
        icon: 'family_restroom',
        title: 'Planos para Famílias',
        description: 'Ofertas especiais para famílias residentes com descontos e benefícios',
      },
      {
        icon: 'accessibility',
        title: 'Acesso Facilitado',
        description: 'Hospitais de Recife a poucos quilômetros para procedimentos complexos',
      },
      {
        icon: 'attach_money',
        title: 'Valores Justos',
        description: 'Sem agravo de preços por residência em Paulista vs cidades vizinhas',
      },
    ],

    operators: [
      {
        name: 'Amil',
        strength: 'Maior cobertura no município com equipes locais',
        ideal: 'Famílias e empresas que buscam amplitude',
        icon: 'business',
        highlighted: true,
      },
      {
        name: 'Hapvida',
        strength: 'Telemedicina e agilidade no atendimento',
        ideal: 'Profissionais que valorizam tecnologia',
        icon: 'video_call',
      },
      {
        name: 'SulAmérica',
        strength: 'Customização total de planos',
        ideal: 'Empresas em busca de personalização',
        icon: 'tune',
      },
      {
        name: 'Unimed',
        strength: 'Modelo cooperativista de qualidade',
        ideal: 'Quem valoriza relacionamento com médicos',
        icon: 'person_check',
      },
      {
        name: 'Bradesco Saúde',
        strength: 'Solidez financeira e integração bancária',
        ideal: 'Empresas e clientes Bradesco',
        icon: 'verified',
      },
    ],

    infrastructure: [
      {
        name: 'Hospital Getúlio Vargas',
        category: 'Hospital',
        icon: 'local_hospital',
        description: 'Hospital geral em Paulista com múltiplas especialidades',
        specialty: 'Clínica Médica, Cirurgia',
      },
      {
        name: 'Clínica Paulista de Saúde',
        category: 'Clínica',
        icon: 'local_hospital',
        description: 'Centro especializado para atendimento eletivo',
        specialty: 'Pediatria, Ginecologia, Odontologia',
      },
      {
        name: 'Centro Diagnóstico Paulista',
        category: 'Centro Diagnóstico',
        icon: 'science',
        description: 'Laboratório e imagem com equipamento moderno',
        specialty: 'Ultrassom, Tomografia, Laboratorial',
      },
      {
        name: 'Consultórios Distribuídos',
        category: 'Redes de Consultórios',
        icon: 'domain',
        description: 'Múltiplos consultórios em diversos bairros de Paulista',
        specialty: 'Todas especialidades médicas',
      },
    ],

    planTypes: [
      {
        title: 'Plano Individual',
        description: 'Proteção pessoal com toda cobertura e flexibilidade',
        icon: 'person',
        audience: 'Profissionais autônomos de Paulista',
        recommended: false,
      },
      {
        title: 'Plano Familiar',
        description: 'O mais popular em Paulista - proteção completa da família',
        icon: 'family_restroom',
        audience: 'Famílias que residem em Paulista',
        recommended: true,
      },
      {
        title: 'Plano Empresarial',
        description: 'Solução corporativa com gerenciamento e descontos',
        icon: 'corporate_fare',
        audience: 'Empresas e PMEs de Paulista',
        recommended: false,
      },
      {
        title: 'Plano MEI/PJ',
        description: 'Especial para empreendedores locais',
        icon: 'trending_up',
        audience: 'Microempreendedores e PJs',
        recommended: false,
      },
    ],

    faqItems: [
      {
        question: 'Qual operadora tem melhor cobertura em Paulista?',
        answer: 'Amil lidera em penetração no município. Todas as 5 operadoras oferecem excelente cobertura. A melhor depende do seu perfil - recomendamos solicitar cotação.',
        category: 'Operadoras',
      },
      {
        question: 'Vale a pena pagar por plano de saúde em Paulista?',
        answer: 'Sim, principalmente para famílias. Você garante acesso a especialistas, hospitais de qualidade e tranquilidade financeira em caso de emergência médica.',
        category: 'Decisão',
      },
      {
        question: 'Qual plano é ideal para minha família em Paulista?',
        answer: 'Planos familiares são mais econômicos que múltiplos individuais. Recomendamos avaliar cobertura desejada e solicitar cotações de 2-3 operadoras para comparar.',
        category: 'Famílias',
      },
      {
        question: 'Posso usar em Recife se contratar em Paulista?',
        answer: 'Sim, completamente integrado. Você tem acesso a toda infraestrutura de Recife sem restrições, facilitado pela proximidade geográfica.',
        category: 'Cobertura',
      },
    ],
  },
  'jaboatao-dos-guararapes': {
    name: 'Jaboatão dos Guararapes',
    state: 'PE',
    tagline: 'Maior município metropolitano com economia forte e infraestrutura de saúde distribuída',
    description: 'Jaboatão dos Guararapes é um dos maiores municípios da região metropolitana de Recife, com população superior a 600 mil habitantes e economia diversificada. Conta com excelente cobertura de saúde suplementar, oferecendo todas operadoras principais com planos adaptados para residentes locais e forte concorrência de preços.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=400&fit=crop&q=80',

    stats: [
      { icon: 'people', number: '620k+', label: 'Residentes', highlight: true },
      { icon: 'business', number: 'Centenas', label: 'Consultórios', description: 'Distribuídos na cidade' },
      { icon: 'trending_up', number: 'Forte', label: 'Concorrência', description: 'Melhores preços' },
      { icon: 'local_hospital', number: '12+', label: 'Hospitais', description: 'Diversos níveis' },
    ],

    benefits: [
      {
        icon: 'domain',
        title: 'Infraestrutura Distribuída',
        description: 'Centenas de consultórios, clínicas e hospitais em vários bairros de Jaboatão',
        highestBenefit: true,
      },
      {
        icon: 'trending_down',
        title: 'Preços Competitivos',
        description: 'Forte concorrência entre operadoras resulta em tarifas mais acessíveis',
      },
      {
        icon: 'schedule',
        title: 'Agendamento Rápido',
        description: 'Proximidade de múltiplos prestadores facilita marcação de consultas',
      },
      {
        icon: 'groups',
        title: 'Atendimento Diversificado',
        description: 'Diferentes grupos populacionais com ofertas específicas',
      },
      {
        icon: 'card_giftcard',
        title: 'Programas de Fidelização',
        description: 'Operadoras oferecem benefícios exclusivos para residentes de Jaboatão',
      },
      {
        icon: 'location_on',
        title: 'Acesso Recife',
        description: 'Poucos quilômetros para centros de referência se necessário',
      },
    ],

    operators: [
      {
        name: 'Amil',
        strength: 'Maior penetração em Jaboatão com múltiplas filiais',
        ideal: 'Famílias e empresas que buscam amplitude',
        icon: 'business',
        highlighted: true,
      },
      {
        name: 'Hapvida',
        strength: 'Competição acirrada mantém preços baixos',
        ideal: 'Indivíduos e pequenas empresas',
        icon: 'video_call',
      },
      {
        name: 'SulAmérica',
        strength: 'Soluções customizadas para empresas locais',
        ideal: 'Empresas em crescimento',
        icon: 'tune',
      },
      {
        name: 'Unimed',
        strength: 'Cooperativa regional com estrutura local forte',
        ideal: 'Quem valoriza relacionamento médico',
        icon: 'person_check',
      },
      {
        name: 'Bradesco Saúde',
        strength: 'Solidez com agências integradas em Jaboatão',
        ideal: 'Clientes Bradesco e empresas consolidadas',
        icon: 'verified',
      },
    ],

    infrastructure: [
      {
        name: 'Hospital Memorial',
        category: 'Hospital',
        icon: 'local_hospital',
        description: 'Hospital geral em Jaboatão com equipes multidisciplinares',
        specialty: 'Cirurgia, Clínica Médica, UTI',
      },
      {
        name: 'Hospital Jaboatão',
        category: 'Hospital',
        icon: 'local_hospital',
        description: 'Instituto hospitalar com foco em urgência e emergência',
        specialty: 'Urgência, Pronto-Socorro',
      },
      {
        name: 'Clínica de Saúde Central',
        category: 'Clínica',
        icon: 'local_hospital',
        description: 'Centro de atendimento eletivo e especialidades',
        specialty: 'Pediatria, Ginecologia, Clínica',
      },
      {
        name: 'Centro Diagnóstico Jaboatão',
        category: 'Centro Diagnóstico',
        icon: 'science',
        description: 'Laboratório completo com imagem avançada',
        specialty: 'Radiologia, Ultrassom, Análises',
      },
      {
        name: 'Consultórios Distribuídos',
        category: 'Rede de Consultórios',
        icon: 'domain',
        description: 'Centenas de consultórios em múltiplos bairros',
        specialty: 'Todas especialidades',
      },
      {
        name: 'Clínica Odontológica Integrada',
        category: 'Clínica Odontológica',
        icon: 'dentistry',
        description: 'Centros de atendimento odontológico credenciados',
        specialty: 'Odontologia Geral, Ortodontia',
      },
    ],

    planTypes: [
      {
        title: 'Plano Individual',
        description: 'Proteção pessoal completa com máxima flexibilidade',
        icon: 'person',
        audience: 'Profissionais autônomos de Jaboatão',
        recommended: false,
      },
      {
        title: 'Plano Familiar',
        description: 'Mais popular em Jaboatão - proteção integrada para toda família',
        icon: 'family_restroom',
        audience: 'Famílias que residem em Jaboatão',
        recommended: true,
      },
      {
        title: 'Plano Empresarial',
        description: 'Solução corporativa com benefícios para equipes',
        icon: 'corporate_fare',
        audience: 'Pequenas e médias empresas locais',
        recommended: false,
      },
      {
        title: 'Plano MEI/PJ',
        description: 'Especial para empreendedores e profissionais liberais',
        icon: 'trending_up',
        audience: 'Microempreendedores de Jaboatão',
        recommended: false,
      },
      {
        title: 'Plano Senior',
        description: 'Cobertura especial para maiores de 60 anos',
        icon: 'person_3',
        audience: 'Idosos em Jaboatão',
        recommended: false,
      },
    ],

    faqItems: [
      {
        question: 'Qual operadora é melhor em Jaboatão?',
        answer: 'Amil lidera em mercado share, mas todas 5 operadoras são competitivas. A melhor depende de seu perfil. Recomendamos solicitar cotação de todas.',
        category: 'Operadoras',
      },
      {
        question: 'Por que há tanta concorrência em Jaboatão?',
        answer: 'Por ser o maior município metropolitano com 600+ mil habitantes, o mercado é grande e atrativo. Isso resulta em melhores preços para você.',
        category: 'Mercado',
      },
      {
        question: 'Qual plano é melhor para empresa em Jaboatão?',
        answer: 'Amil e SulAmérica dominam soluções corporativas. Recomendamos avaliar sua equipe, dependentes e necessidades de cobertura para escolher.',
        category: 'Empresas',
      },
      {
        question: 'Preciso de plano de saúde em Jaboatão?',
        answer: 'Sim, especialmente para famílias. Garante acesso a médicos especializados, hospitais de qualidade, e proteção financeira. Valores são acessíveis pela concorrência.',
        category: 'Decisão',
      },
      {
        question: 'Posso usar em Recife com contrato em Jaboatão?',
        answer: 'Sim, completamente integrado. Toda rede de Recife está disponível. Proximidade (30km) facilita acesso a centros de referência quando necessário.',
        category: 'Cobertura',
      },
    ],
  }
}

export default function CidadePage({
  params,
}: {
  params: { slug: string }
}) {
  const info = cidadesInfo[params.slug as keyof typeof cidadesInfo]

  if (!info) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <Header />
        <Section py="lg" bg="white">
          <Container>
            <h1 className="text-display-md font-bold text-neutral-900">Cidade não encontrada</h1>
            <Link href="/cidades" className="text-primary-500 hover:underline mt-4 inline-flex items-center gap-2">
              <Icon name="arrow_back" size={20} />
              ← Voltar para Cidades
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

      {/* ==== SEÇÃO 1: HERO ==== */}
      <CityHero
        cityName={info.name}
        tagline={info.tagline}
        description={info.description}
        image={info.image}
        onQuoteClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* ==== SEÇÃO 2: QUICK STATS ==== */}
      <Section py="lg" bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {info.stats.map((stat, idx) => (
              <LocalStatCard
                key={idx}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                description={stat.description}
                highlight={stat.highlight}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 3: WHY THIS CITY ==== */}
      <Section py="lg" bg="light">
        <Container>
          <SectionHeading
            title="Por que contratar saúde em {info.name}"
            size="lg"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.benefits.map((benefit, idx) => (
              <CityBenefitCard
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                highestBenefit={benefit.highestBenefit}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 4: OPERATORS ==== */}
      <Section py="lg" bg="white">
        <Container>
          <SectionHeading
            title="Operadoras em {info.name}"
            subtitle="Escolha a que melhor se adequa ao seu perfil"
            size="lg"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {info.operators.map((op, idx) => (
              <OperatorCityCard
                key={idx}
                name={op.name}
                strength={op.strength}
                ideal={op.ideal}
                icon={op.icon}
                highlighted={op.highlighted}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 5: INFRASTRUCTURE ==== */}
      <Section py="lg" bg="light">
        <Container>
          <SectionHeading
            title="Infraestrutura de Saúde"
            subtitle="Hospitais, clínicas e centros diagnósticos em {info.name}"
            size="lg"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.infrastructure.map((infra, idx) => (
              <InfrastructureCard
                key={idx}
                name={infra.name}
                category={infra.category}
                icon={infra.icon}
                description={infra.description}
                specialty={infra.specialty}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 6: PLAN TYPES ==== */}
      <Section py="lg" bg="white">
        <Container>
          <SectionHeading
            title="Tipos de Planos em {info.name}"
            subtitle="Escolha o modelo que melhor atende suas necessidades"
            size="lg"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.planTypes.map((plan, idx) => (
              <PlanTypeCard
                key={idx}
                title={plan.title}
                description={plan.description}
                icon={plan.icon}
                audience={plan.audience}
                recommended={plan.recommended}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 7: LEAD FORM ==== */}
      <Section py="lg" bg="primary-50" id="form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-display-sm font-bold text-neutral-900">
                Pronto para encontrar o melhor plano?
              </h2>
              <p className="text-body-lg text-neutral-700">
                Solicite uma cotação personalizada e sem compromisso. Vamos te ajudar a encontrar a operadora e plano perfeitos para sua realidade em {info.name}.
              </p>
              <ul className="space-y-3 text-body-sm">
                <li className="flex items-center gap-3">
                  <Icon name="done" size={20} className="text-success-600" />
                  <span>Cotação 100% gratuita</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="done" size={20} className="text-success-600" />
                  <span>Sem compromisso</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="done" size={20} className="text-success-600" />
                  <span>Resultado em minutos</span>
                </li>
              </ul>
            </div>
            <LeadForm variant="block" />
          </div>
        </Container>
      </Section>

      {/* ==== SEÇÃO 8: FAQ ==== */}
      <Section py="lg" bg="white">
        <Container>
          <SectionHeading
            title="Dúvidas Frequentes"
            description="Encontre respostas para as perguntas mais comuns sobre saúde em {info.name}"
            size="lg"
            align="center"
            className="mb-12"
          />
          <CityFAQSection items={info.faqItems} />
        </Container>
      </Section>

      {/* ==== SEÇÃO 9: FINAL CTA ==== */}
      <HighlightBand
        title="Não deixe sua saúde para depois"
        description="Contratar um plano de saúde é investir na sua tranquilidade e na de sua família. Em {info.name}, você tem excelentes opções com preços competitivos."
        variant="primary"
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