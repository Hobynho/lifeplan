export interface BlogArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: 'saude' | 'dicas' | 'novidades' | 'guias'
  author: {
    name: string
    role: string
    bio: string
    avatar?: string
    email?: string
  }
  date: string
  readTime: number
  image?: string
  relatedArticleIds?: string[]
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'importancia-check-up-anual',
    title: 'Importância do Check-up Anual para Sua Saúde',
    excerpt: 'Descubra por que fazer check-ups anuais é essencial para manter sua saúde em dia...',
    category: 'saude',
    author: {
      name: 'Dra. Mariana Silva',
      role: 'Médica Clínica Geral',
      bio: 'Médica formada pela USP com 10 anos de experiência em medicina preventiva. Especialista em saúde integral.',
      avatar: 'https://via.placeholder.com/100',
      email: 'mariana@saudeplus.com',
    },
    date: '15 de Março de 2024',
    readTime: 5,
    image: 'https://via.placeholder.com/800x400',
    relatedArticleIds: ['2', '3'],
    content: `
      <h2>Importância do Check-up Anual para Sua Saúde</h2>
      
      <p>O check-up anual é um procedimento fundamental para manter sua saúde em dia. Muitas pessoas negligenciam exames preventivos, mas a verdade é que eles são capazes de detectar problemas antes que se tornem graves.</p>

      <h3>Benefícios do Check-up Anual</h3>
      
      <ul>
        <li><strong>Detecção Precoce:</strong> Possibilita identificar doenças em estágios iniciais</li>
        <li><strong>Prevenção:</strong> Ajuda a evitar complicações de saúde</li>
        <li><strong>Economia:</strong> Reduz custos com tratamentos mais complexos</li>
        <li><strong>Tranquilidade:</strong> Oferece paz de espírito sobre sua saúde</li>
      </ul>

      <h3>O Que Esperar em um Check-up?</h3>
      
      <p>Um check-up completo geralmente inclui:</p>
      
      <ul>
        <li>Anamnese (histórico médico)</li>
        <li>Exame físico completo</li>
        <li>Medição de pressão arterial</li>
        <li>Análise de sangue</li>
        <li>Exame de urina</li>
        <li>ECG (para maiores de 40 anos)</li>
        <li>Outras avaliações conforme necessário</li>
      </ul>

      <h3>Com Que Frequência Fazer?</h3>
      
      <p>A recomendação geral é fazer um check-up anual. Porém, pessoas com histórico de doenças crônicas ou idade avançada devem consultar seu médico sobre a frequência ideal.</p>

      <p>Não deixe sua saúde para depois. Agende seu check-up anual agora e viva com mais tranquilidade!</p>
    `,
  },
  {
    id: '2',
    slug: 'dicas-saude-mental',
    title: '5 Dicas Para Cuidar da Sua Saúde Mental',
    excerpt: 'Saiba como manter sua saúde mental em dia com essas práticas simples...',
    category: 'dicas',
    author: {
      name: 'Dr. Roberto Santos',
      role: 'Psicólogo Clínico',
      bio: 'Psicólogo especializado em terapia cognitivo-comportamental com 8 anos de prática clínica.',
      avatar: 'https://via.placeholder.com/100',
      email: 'roberto@saudeplus.com',
    },
    date: '10 de Março de 2024',
    readTime: 6,
    image: 'https://via.placeholder.com/800x400',
    relatedArticleIds: ['1', '4'],
    content: `
      <h2>5 Dicas Para Cuidar da Sua Saúde Mental</h2>
      
      <p>A saúde mental é tão importante quanto a física. Aqui estão 5 práticas simples que você pode implementar no seu dia a dia.</p>

      <h3>1. Durma Bem</h3>
      <p>Um sono de qualidade é fundamental. Procure dormir 7-8 horas por noite e mantenha uma rotina regular.</p>

      <h3>2. Pratique Exercícios</h3>
      <p>Atividades físicas liberam endorfinas, melhorando seu humor e bem-estar geral.</p>

      <h3>3. Conecte-se com Pessoas</h3>
      <p>Relacionamentos saudáveis são essenciais. Dedique tempo para estar com amigos e família.</p>

      <h3>4. Pratique Meditação</h3>
      <p>Apenas 10 minutos de meditação diária pode reduzir significativamente o stress e a ansiedade.</p>

      <h3>5. Procure um Profissional</h3>
      <p>Não hesite em procurar ajuda psicológica quando necessário. Cuidar da saúde mental é tão importante quanto cuidar do corpo.</p>

      <p>Lembre-se: sua saúde mental merece atenção e cuidado constante!</p>
    `,
  },
  {
    id: '3',
    slug: 'novos-planos-2024',
    title: 'Conheça os Novos Planos de Saúde para 2024',
    excerpt: 'As operadoras lançaram novidades em seus portfólios de planos...',
    category: 'novidades',
    author: {
      name: 'Analista de Saúde',
      role: 'Especialista em Mercado de Saúde',
      bio: 'Profissional com experiência em análise de mercado de saúde suplementar.',
      avatar: 'https://via.placeholder.com/100',
    },
    date: '01 de Março de 2024',
    readTime: 7,
    image: 'https://via.placeholder.com/800x400',
    relatedArticleIds: ['1', '2'],
    content: `
      <h2>Conheça os Novos Planos de Saúde para 2024</h2>
      
      <p>O mercado de saúde suplementar continua evoluindo. Confira as principais novidades lançadas em 2024.</p>

      <h3>Telemedicina Expandida</h3>
      <p>Todas as grandes operadoras agora oferecem telemedicina 24/7 incluída em seus planos.</p>

      <h3>Análise Genômica</h3>
      <p>Novas coberturas incluem testes genômicos para diagnóstico preventivo de doenças.</p>

      <h3>Bem-estar Digital</h3>
      <p>Aplicativos expandidos com monitoramento de saúde, nutrição e fitness integrados.</p>

      <h3>Flexibilidade de Cobertura</h3>
      <p>Possibilidade de customizar planos de acordo com necessidades específicas.</p>

      <h3>Preços Mais Competitivos</h3>
      <p>Competição entre operadoras resultou em propostas com melhor custo-benefício.</p>

      <p>Fique atento às novidades e escolha o plano que melhor se adequa ao seu perfil!</p>
    `,
  },
  {
    id: '4',
    slug: 'como-escolher-plano-saude',
    title: 'Guia Completo: Como Escolher seu Plano de Saúde',
    excerpt: 'Aprenda os passos essenciais para escolher o plano certo para você...',
    category: 'guias',
    author: {
      name: 'João Consultor',
      role: 'Consultor de Saúde',
      bio: 'Consultor especializado em ajudar pessoas a escolher os melhores planos de saúde.',
      avatar: 'https://via.placeholder.com/100',
      email: 'joao@saudeplus.com',
    },
    date: '25 de Fevereiro de 2024',
    readTime: 8,
    image: 'https://via.placeholder.com/800x400',
    relatedArticleIds: ['2', '3'],
    content: `
      <h2>Guia Completo: Como Escolher seu Plano de Saúde</h2>
      
      <p>Escolher um plano de saúde é uma decisão importante. Aqui está um guia passo a passo para ajudá-lo.</p>

      <h3>Passo 1: Avalie Suas Necessidades</h3>
      <p>Pense sobre sua saúde atual, histórico familiar e necessidades previsíveis (gravidez, cirurgias, etc).</p>

      <h3>Passo 2: Estabeleça um Orçamento</h3>
      <p>Defina quanto você pode investir mensalmente em saúde preventiva.</p>

      <h3>Passo 3: Compare Operadoras</h3>
      <p>Pesquise diferentes operadoras e seus planos. Compare coberturas, rede credenciada e avaliações.</p>

      <h3>Passo 4: Verifique a Rede Credenciada</h3>
      <p>Certifique-se de que há médicos e hospitais de qualidade na sua região.</p>

      <h3>Passo 5: Leia as Condições</h3>
      <p>Entenda bem carências, franquias, coberturas excluídas e procedimentos não cobertos.</p>

      <h3>Passo 6: Faça Sua Escolha</h3>
      <p>Após analisar tudo, escolha o plano que oferece melhor relação custo-benefício para suas necessidades.</p>

      <p>Precisar de ajuda? Nossa equipe está pronta para orientá-lo!</p>
    `,
  },
  {
    id: '5',
    slug: 'cobertura-odontologica',
    title: 'Entenda a Cobertura Odontológica dos Planos de Saúde',
    excerpt: 'Saiba como funciona a cobertura de procedimentos dentários nos planos...',
    category: 'saude',
    author: {
      name: 'Dra. Fernanda Odonto',
      role: 'Dentista',
      bio: 'Dentista com especialização em ortodontia e 12 anos de experiência.',
      avatar: 'https://via.placeholder.com/100',
    },
    date: '20 de Fevereiro de 2024',
    readTime: 5,
    image: 'https://via.placeholder.com/800x400',
    relatedArticleIds: ['1', '4'],
    content: `
      <h2>Entenda a Cobertura Odontológica dos Planos de Saúde</h2>
      
      <p>A cobertura odontológica varia bastante entre planos. Aqui está tudo o que você precisa saber.</p>

      <h3>Tipos de Cobertura</h3>
      <ul>
        <li><strong>Básica:</strong> Limpeza, restauração e extração</li>
        <li><strong>Intermediária:</strong> Inclui canais e próteses simples</li>
        <li><strong>Premium:</strong> Cobertura completa incluindo implantes</li>
      </ul>

      <h3>Carência Odontológica</h3>
      <p>A maioria dos planos tiene carência de 1-3 meses para procedimentos básicos e 6-12 meses para procedimentos mais complexos.</p>

      <h3>Como Verificar Sua Cobertura</h3>
      <p>Solicite a Tabela de Procedimentos (TIOS) à sua operadora para ver exatamente o que está coberto.</p>

      <p>Mantenha sua saúde bucal em dia e aproveite as coberturas oferecidas pelo seu plano!</p>
    `,
  },
]

export const blogCategories = [
  { id: 'saude', name: 'Saúde', icon: 'favorite' },
  { id: 'dicas', name: 'Dicas', icon: 'tips_and_updates' },
  { id: 'novidades', name: 'Novidades', icon: 'newspaper' },
  { id: 'guias', name: 'Guias', icon: 'menu_book' },
] as const
