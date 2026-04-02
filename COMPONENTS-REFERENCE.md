# 🎪 Catálogo Completo de Componentes

## UI Components

### 1. Button
**Arquivo**: `components/ui/Button.tsx`

```tsx
<Button>Primary</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Perigo</Button>

<Button size="sm">Pequeno</Button>
<Button size="md">Médio</Button>
<Button size="lg">Grande</Button>

<Button icon={<Icon name="check" size={20} />}>Com Ícone</Button>
<Button icon={<Icon name="arrow" />} iconPosition="right">Ícone Direita</Button>

<Button disabled>Desabilitado</Button>
<Button loading>Carregando</Button>
<Button fullWidth>Largura Completa</Button>
```

**Props**:
- `variant`: 'primary' | 'secondary' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `icon`: React.ReactNode
- `iconPosition`: 'left' | 'right'
- `fullWidth`: boolean
- `loading`: boolean
- Todos os HTMLButtonElement props

---

### 2. Input
**Arquivo**: `components/ui/Input.tsx`

```tsx
<Input label="Nome" placeholder="João..." />
<Input type="email" label="Email" />
<Input label="Com erro" error="Email inválido" />
<Input label="Com help" helper="Mínimo 8 caracteres" />
<Input label="Com ícone" icon={<Icon name="search" />} />
<Input label="Ícone direita" icon={<Icon name="check" />} iconPosition="right" />
```

**Props**:
- `label`: string
- `error`: string
- `helper`: string
- `icon`: React.ReactNode
- `iconPosition`: 'left' | 'right'
- todos os HTMLInputElement props

---

### 3. Textarea
**Arquivo**: `components/ui/Textarea.tsx`

```tsx
<Textarea label="Mensagem" placeholder="Escreva aqui..." />
<Textarea label="Com erro" error="Campo obrigatório" />
<Textarea label="Com help" helper="Máximo 500 caracteres" />
```

**Props**:
- `label`: string
- `error`: string
- `helper`: string
- Todos os HTMLTextAreaElement props

---

### 4. Card
**Arquivo**: `components/ui/Card.tsx`

```tsx
<Card>Conteúdo padrão</Card>
<Card hover={false}>Sem hover</Card>
<Card elevated>Card elevado com sombra lg</Card>
```

**Props**:
- `hover`: boolean (default: true)
- `elevated`: boolean (shadow lg) (default: false)
- HTML div props

---

### 5. Badge
**Arquivo**: `components/ui/Badge.tsx`

```tsx
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="neutral">Neutral</Badge>

<Badge size="sm">Pequeno</Badge>
<Badge size="md">Médio</Badge>
```

**Props**:
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
- `size`: 'sm' | 'md'

---

### 6. Checkbox
**Arquivo**: `components/ui/Checkbox.tsx`

```tsx
<Checkbox label="Concordo com os termos" />
<Checkbox label="Leia isto" helper="Saiba mais sobre privacidade" />
<Checkbox label="Desabilitado" disabled />
<Checkbox required />
```

**Props**:
- `label`: string
- `helper`: string
- `required`: boolean
- Todos os HTMLInputElement[type=checkbox] props

---

### 7. Radio
**Arquivo**: `components/ui/Radio.tsx`

```tsx
<div className="space-y-3">
  <Radio name="option" label="Opção 1" value="option1" />
  <Radio name="option" label="Opção 2" value="option2" />
</div>
```

**Props**:
- `label`: string
- `helper`: string
- `required`: boolean
- Todos os HTMLInputElement[type=radio] props

---

### 8. Select
**Arquivo**: `components/ui/Select.tsx`

```tsx
<Select
  label="Plano"
  options={[
    { value: 'basic', label: 'Básico' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' }
  ]}
  placeholder="Selecione..."
/>
<Select
  label="Com erro"
  options={options}
  error="Escolha um plano"
/>
```

**Props**:
- `label`: string
- `options`: Array<{ value: string | number; label: string }>
- `error`: string
- `helper`: string
- `placeholder`: string
- Todos os HTMLSelectElement props

---

### 9. Accordion
**Arquivo**: `components/ui/Accordion.tsx`

```tsx
<Accordion
  items={[
    { id: '1', title: 'Como funciona?', content: 'Assim...' },
    { id: '2', title: 'Quanto custa?', content: 'Depende...' },
  ]}
  variant="default"
  defaultOpen="1"
/>
```

**Props**:
- `items`: Array<{ id: string; title: string | React.ReactNode; content: string | React.ReactNode }>
- `variant`: 'default' | 'minimal'
- `defaultOpen`: string (id do item aberto)
- HTML div props

---

### 10. Icon
**Arquivo**: `components/ui/Icon.tsx`

```tsx
<Icon name="home" />
<Icon name="favorite" size={20} />
<Icon name="check_circle" size={32} filled />

// Sizes: 16, 20, 24 (default), 32, 40
// Names: qualquer Material Symbol (check, home, star, etc)
```

**Props**:
- `name`: string (Material Symbols name)
- `size`: 16 | 20 | 24 | 32 | 40
- `filled`: boolean
- HTML span props

---

## Layout Components

### 1. Header
**Arquivo**: `components/layout/Header.tsx`

```tsx
<Header />
<Header brand="MeuBrand" logo={<CustomLogo />} />
```

**Props**:
- `brand`: string (default: 'SaudePlus')
- `logo`: React.ReactNode

---

### 2. Footer
**Arquivo**: `components/layout/Footer.tsx`

```tsx
<Footer />
```

**Features**:
- Links organizados em colunas
- Social media icons
- Copyright info

---

### 3. Container
**Arquivo**: `components/layout/Container.tsx`

```tsx
<Container>
  Conteúdo com max-width
</Container>
```

**Props**:
- HTML div props
- max-width: 1280px (7xl)

---

### 4. Section
**Arquivo**: `components/layout/Section.tsx`

```tsx
<Section py="lg" bg="white">
  <Container>Conteúdo</Container>
</Section>

<Section py="sm" bg="light">...</Section>
<Section py="md" bg="primary">...</Section>
```

**Props**:
- `py`: 'sm' (py-8) | 'md' (py-12) | 'lg' (py-16)
- `bg`: 'light' (bg-neutral-50) | 'elevated' (bg-white) | 'primary' (bg-primary-50)
- HTML section props

---

## Section Components (Domínio)

### 1. Hero
**Arquivo**: `components/sections/Hero.tsx`

```tsx
<Hero
  title="Encontre o Melhor Plano"
  subtitle="Subtítulo"
  description="Descrição clara e atraente"
  primaryCta={{ label: 'Cotar Agora', href: '/#form' }}
  secondaryCta={{ label: 'Saiba Mais', href: '/sobre' }}
  image={<div>Imagem aqui</div>}
/>
```

**Props**:
- `title`: string
- `subtitle`: string
- `description`: string
- `primaryCta`: { label: string; href?: string }
- `secondaryCta`: { label: string; href?: string }
- `image`: React.ReactNode
- `backgroundImage`: string (CSS background-image)

---

### 2. LeadForm
**Arquivo**: `components/sections/LeadForm.tsx`

```tsx
// Variante block (recomendado)
<LeadForm
  title="Receba uma Cotação"
  description="Preencha os dados..."
  variant="block"
  compact={false}
  onSubmit={(data) => {
    console.log(data)
    // Enviar para API
  }}
/>

// Variante inline (newsletter-style)
<LeadForm variant="inline" />
```

**Props**:
- `title`: string
- `description`: string
- `variant`: 'inline' | 'block'
- `compact`: boolean
- `onSubmit`: (data: FormData) => void

**Form Fields**:
- fullName (string)
- email (string)
- phone (string)
- zipCode (string)
- age (number)
- plan (string)
- terms (boolean)

---

### 3. BenefitCard
**Arquivo**: `components/sections/BenefitCard.tsx`

```tsx
<BenefitCard
  icon="check_circle"
  title="Cobertura Completa"
  description="Acesso a rede credenciada em todo Brasil"
  badge="Popular"
  badgeVariant="success"
/>
```

**Props**:
- `icon`: string (Material Symbol name)
- `title`: string
- `description`: string
- `badge`: string (opcional)
- `badgeVariant`: 'primary' | 'secondary' | 'success' | 'info'

---

### 4. OperatorCard
**Arquivo**: `components/sections/OperatorCard.tsx`

```tsx
<OperatorCard
  name="Amil"
  description="Maior operadora do Brasil"
  rating={4.7}
  reviews={2400}
  highlight="Melhor cobertura"
  ctaLabel="Ver Planos"
  onCta={() => console.log('Clicou em Amil')}
/>
```

**Props**:
- `name`: string
- `logo`: React.ReactNode
- `description`: string
- `rating`: number (0-5)
- `reviews`: number
- `highlight`: string
- `ctaLabel`: string (default: 'Ver Planos')
- `onCta`: () => void

---

### 5. ComparisonCard
**Arquivo**: `components/sections/ComparisonCard.tsx`

```tsx
<ComparisonCard
  operatorName="Amil"
  planName="Plano Premium"
  monthlyPrice={450}
  highlighted={true}
  features={[
    { name: 'Cobertura completa', included: true },
    { name: 'Carência reduzida', included: false },
    { name: 'Telemedicina', included: true },
  ]}
  mainBenefit="Acesso imediato à rede"
  onSelect={() => console.log('Selecionou plano')}
/>
```

**Props**:
- `operatorName`: string
- `planName`: string
- `monthlyPrice`: number
- `highlighted`: boolean
- `features`: Array<{ name: string; included: boolean }>
- `mainBenefit`: string
- `onSelect`: () => void

---

### 6. TestimonialCard
**Arquivo**: `components/sections/TestimonialCard.tsx`

```tsx
<TestimonialCard
  author="Maria Silva"
  role="São Paulo, SP"
  content="Adorei o atendimento! Muito bom mesmo."
  rating={5}
  image={<div>Foto aqui</div>}
/>
```

**Props**:
- `author`: string
- `role`: string
- `content`: string
- `rating`: number (1-5)
- `image`: React.ReactNode

---

### 7. FAQSection
**Arquivo**: `components/sections/FAQSection.tsx`

```tsx
<FAQSection
  title="Dúvidas Frequentes"
  description="Encontre respostas"
  items={[
    {
      id: '1',
      question: 'Como contrato?',
      answer: 'É simples: preencha o formulário...'
    },
    // Mais items
  ]}
/>
```

**Props**:
- `title`: string
- `description`: string
- `items`: Array<{ id: string; question: string; answer: string }>

---

## 📚 Padrões de Uso

### Forms Completas
```tsx
<Section py="lg" bg="white">
  <Container>
    <div className="max-w-2xl mx-auto">
      <h2 className="text-h2 font-bold text-neutral-900 mb-8">Formulário</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input label="Nome" required />
        <Input type="email" label="Email" required />
        <Textarea label="Mensagem" />
        <Button type="submit" fullWidth>Enviar</Button>
      </form>
    </div>
  </Container>
</Section>
```

### Card Grids
```tsx
<Section py="lg">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id}>
          {/* Conteúdo */}
        </Card>
      ))}
    </div>
  </Container>
</Section>
```

### Stats Section
```tsx
<Section py="lg" bg="primary-900">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
      <div>
        <p className="text-display-lg font-bold">50K+</p>
        <p className="text-body-lg">Cotações</p>
      </div>
      {/* Mais stats */}
    </div>
  </Container>
</Section>
```

---

## 📊 Resumo de Componentes

| Categoria | Componente | Props | Arquivo |
|-----------|-----------|-------|---------|
| **UI** | Button | 6 props | `ui/Button.tsx` |
| **UI** | Input | 5 props | `ui/Input.tsx` |
| **UI** | Textarea | 3 props | `ui/Textarea.tsx` |
| **UI** | Card | 2 props | `ui/Card.tsx` |
| **UI** | Badge | 2 props | `ui/Badge.tsx` |
| **UI** | Checkbox | 2 props | `ui/Checkbox.tsx` |
| **UI** | Radio | 2 props | `ui/Radio.tsx` |
| **UI** | Select | 4 props | `ui/Select.tsx` |
| **UI** | Accordion | 3 props | `ui/Accordion.tsx` |
| **UI** | Icon | 3 props | `ui/Icon.tsx` |
| **Layout** | Header | 2 props | `layout/Header.tsx` |
| **Layout** | Footer | 0 props | `layout/Footer.tsx` |
| **Layout** | Container | HTML props | `layout/Container.tsx` |
| **Layout** | Section | 2 props | `layout/Section.tsx` |
| **Section** | Hero | 6 props | `sections/Hero.tsx` |
| **Section** | LeadForm | 4 props | `sections/LeadForm.tsx` |
| **Section** | BenefitCard | 5 props | `sections/BenefitCard.tsx` |
| **Section** | OperatorCard | 7 props | `sections/OperatorCard.tsx` |
| **Section** | ComparisonCard | 7 props | `sections/ComparisonCard.tsx` |
| **Section** | TestimonialCard | 5 props | `sections/TestimonialCard.tsx` |
| **Section** | FAQSection | 3 props | `sections/FAQSection.tsx` |

**Total**: 21 componentes reutilizáveis

---

## 🎯 Como Combinar Componentes

Na prática, você combinará assim:

```tsx
// Página = Layout + Sections + UI Components
export default function HomePage() {
  return (
    <main>
      <Header />  {/* Layout */}
      
      <Hero ... />  {/* Section */}
      
      <Section>  {/* Layout */}
        <Container>
          <div className="grid grid-cols-3 gap-6">
            {data.map(item => (
              <BenefitCard key={item.id} {...item} />  {/* Section */}
            ))}
          </div>
        </Container>
      </Section>
      
      <LeadForm ... />  {/* Section */}
      
      <Footer />  {/* Layout */}
    </main>
  )
}
```

---

**Este é seu mapa de todos os componentes disponíveis! 🗺️**
