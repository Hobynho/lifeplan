# 📐 Refatoração de Páginas - Documentação de Componentes Visuais

## Visão Geral da Refatoração

As páginas de **operadoras** e **tipos de plano** foram completamente redesenhadas para serem mais **visuais, modulares e focadas em conversão**. Em vez de grandes blocos de texto, agora usam **seções compostas com ícones, cards e componentes de design**.

---

## ✅ O Que Mudou

### **ANTES: Problemas Identificados**
- ❌ Longos blocos de HTML em `dangerouslySetInnerHTML`
- ❌ Parágrafos densos e difíceis de escanear
- ❌ Sem hierarquia visual entre seções
- ❌ Listas em HTML plano
- ❌ Estatísticas perdidas no texto
- ❌ Design estático e text-heavy

### **DEPOIS: Nova Abordagem**
- ✅ Componentes visuais modulares e reutilizáveis
- ✅ Layouts com grids, cards e ícones
- ✅ Seções com ritmo visual claro
- ✅ Informações em blocos compactos
- ✅ Destaque de dados e métricas
- ✅ Design premium e moderno

---

## 🧩 Novos Componentes Criados

### **1. StatCard** - Cartão de Estatísticas
**Arquivo**: `components/sections/StatCard.tsx`

Destaca números, métricas e dados importantes com ícone, número, label e descrição opcional.

```tsx
<StatCard
  icon="people"
  number="7.3M+"
  label="Beneficiários"
  description="Em diferentes regiões"
  variant="highlight"
  badge="Maior"
  badgeVariant="success"
/>
```

**Props**:
- `icon`: string ou React.ReactNode
- `number`: string | number
- `label`: string (obrigatório)
- `description`: string
- `variant`: 'default' | 'highlight' | 'success'
- `badge`: string opcional
- `badgeVariant`: cor da badge

---

### **2. FeatureCard** - Cartão de Características
**Arquivo**: `components/sections/FeatureCard.tsx`

Apresenta uma característica/benefício com ícone, título, descrição e opção de CTA.

```tsx
<FeatureCard
  icon="local_hospital"
  title="Internação Hospitalar"
  description="Cobertura integral de acomodação e procedimentos"
  badge="Incluído"
  badgeVariant="success"
  variant="default"
  iconColor="primary"
/>
```

**Props**:
- `icon`, `title`, `description` (básicos)
- `badge`/`badgeVariant` (opcional)
- `link` ou `onClick` (para interatividade)
- `variant`: 'default' | 'elevated'
- `iconColor`: 'primary' | 'secondary' | 'success' | 'accent'

---

### **3. SocialProofBadge** - Badge de Confiança
**Arquivo**: `components/sections/SocialProofBadge.tsx`

Exibe certificações, reconhecimentos e badges de confiança em diferentes estilos.

```tsx
<SocialProofBadge
  icon="verified"
  label="ISO 9001:2015"
  description="Gestão de Qualidade"
  variant="seal"
  color="primary"
/>
```

**Variantes**:
- `variant`: 'seal' (quadrado com ícone) | 'badge' (inline) | 'highlight' (colorido)
- `color`: 'primary' | 'secondary' | 'success' | 'neutral' | 'accent'

---

### **4. ServiceCard** - Cartão de Serviço
**Arquivo**: `components/sections/ServiceCard.tsx`

Cartão maior para apresentar serviços/soluções com destaque opcional.

```tsx
<ServiceCard
  icon="business"
  title="Planos Coletivos"
  description="Benefícios corporativos para empresas de qualquer tamanho"
  cta={{ label: 'Saiba Mais', href: '#' }}
  highlighted={false}
/>
```

---

### **5. HighlightBand** - Seção de Destaque
**Arquivo**: `components/sections/HighlightBand.tsx`

Seção com fundo colorido/gradiente para chamar atenção. Pode conter ícone, título, descrição e CTA.

```tsx
<HighlightBand
  title="App com Telemedicina 24/7"
  description="Plataforma digital completa com agendamento e consultas virtuais"
  variant="primary"
  align="center"
  icon="smartphone"
  cta={{ label: 'Downloado App', href: '#' }}
/>
```

**Props**:
- `variant`: 'primary' | 'secondary' | 'accent' | 'success' | 'neutral'
- `align`: 'left' | 'center'
- `backgroundImage`: URL opcional para imagem de fundo

---

### **6. StatsRow** - Linha de Estatísticas
**Arquivo**: `components/sections/StatsRow.tsx`

Container grid para exibir múltiplos `StatCard` em linha.

```tsx
<StatsRow
  stats={[
    { icon: 'people', number: '7.3M+', label: 'Beneficiários' },
    { icon: 'business', number: '85k+', label: 'Prestadores' },
    { icon: 'star', number: '4.7', label: 'Avaliação' },
  ]}
  columns={3}
  gap="lg"
/>
```

**Props**:
- `stats`: array de objetos StatCard
- `columns`: 2 | 3 | 4
- `gap`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean

---

### **7. IconGrid** - Grade de Ícones
**Arquivo**: `components/sections/IconGrid.tsx`

Grid flexible para exibir items com ícone em diferentes layouts.

```tsx
<IconGrid
  items={[
    { icon: 'local_hospital', label: 'Hospitais de Referência', description: 'Redes de excelência' },
    { icon: 'medical_services', label: 'Especialidades', description: 'Todas especialidades' },
  ]}
  columns={3}
  variant="card"
/>
```

**Variantes**:
- `variant`: 'default' | 'compact' | 'card'
- `columns`: 2 | 3 | 4 | 6

---

### **8. SectionHeading** - Cabeçalho de Seção
**Arquivo**: `components/sections/SectionHeading.tsx`

Título + subtítulo + descrição para iniciar seções com hierarquia clara.

```tsx
<SectionHeading
  title="Soluções e Planos"
  subtitle="Para cada necessidade"
  description="Escolha o plano que melhor se adequa ao seu perfil"
  align="center"
  size="md"
  badge="Principais"
  badgeColor="primary"
/>
```

**Props**:
- `size`: 'sm' | 'md' | 'lg'
- `align`: 'left' | 'center'
- `color`: 'primary' | 'neutral'
- `badge`/`badgeColor`: opcional

---

### **9. PlanCard** - Cartão de Plano
**Arquivo**: `components/sections/PlanCard.tsx`

Card especializado para apresentar planos de saúde com preço, features e CTA.

```tsx
<PlanCard
  title="Plano Individual"
  subtitle="Cobertura personalizada"
  priceRange={{ min: 150, max: 800, currency: 'BRL' }}
  features={[
    { label: 'Consultas Médicas', included: true },
    { label: 'Internação', included: true },
    { label: 'Check-up Anual', included: false },
  ]}
  cta={{ label: 'Contratar', href: '#' }}
  highlighted={false}
  badge="Mais Flexível"
/>
```

---

## 🎨 Nova Estrutura de Páginas

### **Operadoras (`/operadoras/[slug]`)**

Nova composição em 9 seções:

```
1. HERO + FORMULÁRIO
   └─ Título, subtitle, descrição, lead form lado a lado

2. STATS PRINCIPAIS (StatsRow)
   └─ 3 estatísticas em cards: Beneficiários, Rede, Avaliação

3. RESUMO + TRUST BADGES
   └─ SocialProofBadge com confiança e diferenciais

4. SOLUÇÕES (ServiceCard Grid)
   └─ 4 cards: Individuais, Coletivo, Especializados, Complementares

5. REDE DE CREDENCIADOS (IconGrid)
   └─ 3 cards com ícones: Hospitais, Especialidades, Cobertura

6. TECNOLOGIA (HighlightBand com grid interno)
   └─ Seção destaque com App e funcionalidades

7. CERTIFICAÇÕES (SocialProofBadge Grid)
   └─ Grid de seals: ISO, NIAHO, ONA, etc.

8. FAQ (FAQSection)
   └─ 5-6 perguntas frequentes em accordion

9. CTA FINAL (HighlightBand)
   └─ Seção final com chamada para cotação
```

**Dados Estruturados** (em vez de HTML blocks):
```tsx
const operadorasInfo = {
  'amil': {
    name: 'Amil',
    title: 'Amil',
    subtitle: 'Maior operadora de saúde do Brasil',
    members: 7300000,
    rating: 4.7,
    
    highlights: [ /* StatCard items */ ],
    solutions: [ /* ServiceCard items */ ],
    network_highlights: [ /* IconGrid items */ ],
    technology: {
      title: 'App Amil',
      features: [ /* ícone + label + description */ ]
    },
    certifications: [ /* SocialProofBadge items */ ],
    faqItems: [ /* { question, answer } */ ]
  }
}
```

---

### **Tipos de Plano (`/tipos-de-plano/[slug]`)**

Nova composição em 8 seções:

```
1. HERO + FORMULÁRIO
   └─ Título, summary, faixa de preço destaque

2. STATS PRINCIPAIS
   └─ 3 números-chave em cards

3. COBERTURA (FeatureCard Grid)
   └─ 6 cards: Consultas, Internação, Exames, etc.

4. PARA QUEM É (Profile Cards)
   └─ 3 personas com ícone

5. BENEFÍCIOS (FeatureCard Grid)
   └─ 4 benefit cards com ícones coloridos

6. COMPARAÇÃO (HighlightBand)
   └─ Link para comparação com outros tipos

7. FAQ
   └─ 5-6 perguntas

8. CTA FINAL
   └─ Seção final
```

**Dados Estruturados**:
```tsx
const tiposDeInfo = {
  'individual': {
    title: 'Plano Individual',
    price_min: 150,
    price_max: 800,
    
    highlights: [ /* StatCard items */ ],
    coverage: [ /* FeatureCard items */ ],
    ideal_for: [ /* Profile items */ ],
    benefits: [ /* FeatureCard items */ ],
    faqItems: [ /* { question, answer } */ ]
  }
}
```

---

## 🎯 Benefícios da Nova Abordagem

| Aspecto | Antes | Depois |
|---------|-------|--------|
| **Escanabilidade** | Parágrafos longos | Seções curtas e visuais |
| **Hierarquia** | Fraca | Clara com cards e ícones |
| **Conversão** | Estática | CTAs próximos às informações |
| **Mobile** | Texto embrulhado | Cards responsivos |
| **Dinamismo** | Monótono | Alternância de cores e layouts |
| **Confiança** | Institutional | Visual profissional moderna |
| **Dados** | Perdidos no texto | Destacados em cards |

---

## 💡 Como Usar

### **Para Operadoras**
1. Adicione dados estruturados em `operadorasInfo`
2. Use `StatsRow` para métricas
3. Use `ServiceCard` para soluções
4. Use `IconGrid` para rede
5. Use `HighlightBand` para destaque de tecnologia
6. Use `SocialProofBadge` para certificações

### **Para Tipos de Plano**
1. Estruture dados em `tiposDeInfo`
2. Use `FeatureCard` para cobertura
3. Customize com `badge` para destacar incluídos/não-incluídos
4. Use `PlanCard` para comparação
5. Mantenha FAQ atualizado

---

## 📱 Responsividade

Todos os componentes são fully responsive:
- ✅ Mobile: 1 coluna / layout stacked
- ✅ Tablet: 2-3 colunas
- ✅ Desktop: 3-4 colunas
- ✅ Sticky forms em desktop

---

## 🎨 Design System Utilizado

- **Paleta**: Primary, Secondary, Accent, Success, Neutral
- **Tipografia**: Display, Heading, Body, Caption
- **Espaçamento**: Escala Tailwind 0-96px
- **Ícones**: Material Symbols weight 200
- **Radius**: Mínimo 8px (design moderno)

---

## ✅ Checklist de Implementação

- [x] StatCard criado
- [x] FeatureCard criado
- [x] SocialProofBadge criado
- [x] ServiceCard criado
- [x] HighlightBand criado
- [x] StatsRow criado
- [x] IconGrid criado
- [x] SectionHeading criado
- [x] PlanCard criado
- [x] Operadoras refatoradas
- [x] Tipos de plano refatorados
- [x] Exportações em index.ts atualizadas
- [x] Documentação completa

---

## 📝 Próximos Passos Opcionais

1. **Blog/Service Pages**: Aplicar mesmo padrão
2. **Analytics**: Rastrear cliques em CTAs
3. **A/B Testing**: Testar diferentes layouts
4. **Conteúdo**: Adicionar mais operadoras e tipos de plano
5. **Personalização**: Dynamic content baseado em perfil
