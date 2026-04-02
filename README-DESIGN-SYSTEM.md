# SaudePlus - Design System & Website

Um sistema de design completo e modular para uma plataforma de comparação e contratação de planos de saúde brasileiros.

## 📋 Visão Geral

Este projeto é um **Design System funcional** para um website B2C de saúde suplementar no Brasil. Inclui:

- ✅ Tokens de Design (cores, tipografia, espaçamento)
- ✅ Componentes UI reutilizáveis
- ✅ Componentes de Layout
- ✅ Componentes de Seção específicos do domínio
- ✅ Página do Design System (visual showcase)
- ✅ Páginas principais do website
- ✅ Implementação em Next.js + React + Tailwind CSS

---

## 🎨 Visual Inspiration

O design foi inspirado no arquivo `_.jpeg` localizado na raiz do projeto, do qual extraímos:

### Análise Visual:
- **Paleta**: Verde escuro premium (#2d5a42) como cor principal de confiança
- **Ritmo**: Espaçamento generoso, layouts respiráveis
- **Cards**: Quadrados/retangulares com sombras sutis
- **Tipografia**: Headlines grandes e bold, hierarquia clara
- **Hierarchy**: Grid 3 colunas para benefícios, CTAs em destaque
- **Mood**: Profissional, moderno, acessível, institucional + amigável

---

## 📂 Estrutura do Projeto

```
.
├── app/                              # App Router (Next.js 13+)
│   ├── layout.tsx                   # RootLayout
│   ├── page.tsx                     # Página inicial (Home)
│   ├── design-system/
│   │   └── page.tsx                 # 📊 Showcase do Design System
│   ├── sobre/
│   │   └── page.tsx                 # Página Sobre
│   ├── contato/
│   │   └── page.tsx                 # Página Contato
│   ├── cotacao/
│   │   └── page.tsx                 # Página Cotação
│   ├── operadoras/
│   │   └── page.tsx                 # Página Operadoras
│   └── blog/
│       └── page.tsx                 # Página Blog
│
├── components/
│   ├── ui/                          # Componentes elementares
│   │   ├── Button.tsx               # Botão com variantes
│   │   ├── Input.tsx                # Campo de texto
│   │   ├── Textarea.tsx             # Área de texto
│   │   ├── Card.tsx                 # Card base
│   │   ├── Badge.tsx                # Badge/etiqueta
│   │   ├── Checkbox.tsx             # Checkbox
│   │   ├── Radio.tsx                # Radio button
│   │   ├── Select.tsx               # Select dropdown
│   │   ├── Accordion.tsx            # Accordion/collapse
│   │   ├── Icon.tsx                 # Icon wrapper
│   │   └── index.ts                 # Exports
│   │
│   ├── layout/                      # Componentes de layout
│   │   ├── Header.tsx               # Cabeçalho com nav
│   │   ├── Footer.tsx               # Rodapé
│   │   ├── Container.tsx            # Content container
│   │   ├── Section.tsx              # Section wrapper
│   │   └── index.ts                 # Exports
│   │
│   └── sections/                    # Componentes de seção (domain-specific)
│       ├── Hero.tsx                 # Hero section
│       ├── LeadForm.tsx             # Lead form
│       ├── BenefitCard.tsx          # Card de benefícios
│       ├── OperatorCard.tsx         # Card de operadora
│       ├── ComparisonCard.tsx       # Card de comparação
│       ├── TestimonialCard.tsx      # Card de testemunho
│       ├── FAQSection.tsx           # Seção FAQ
│       └── index.ts                 # Exports
│
├── lib/                             # Utilitários e helpers
├── styles/
│   └── globals.css                  # Estilos globais
├── public/                          # Ativos estáticos
├── tailwind.config.ts               # Configuração Tailwind (Design Tokens)
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependências
├── postcss.config.js                # PostCSS config
└── README.md                        # Este arquivo

```

---

## 🎯 Design Tokens

### Cores

#### Primary - Verde Escuro Premium
```
primary-50:  #f0f4f1
primary-100: #dce5e0
primary-500: #2d5a42  (Core)
primary-900: #0d1622
```

**Uso**: CTAs, elementos principais, confiança, ações

#### Semantic Colors
```
success:  #22c55e  (Sucesso, checkmarks, aprovado)
warning:  #f59e0b  (Aviso, atenção)
error:    #ef4444  (Erros, validação)
info:     #0ea5e9  (Informação, dicas)
```

#### Neutral - Tons de Cinza/Bege
```
neutral-50:  #fafaf9   (Fundo ligth)
neutral-100: #f5f5f4
neutral-500: #78746e
neutral-900: #1c1917   (Texto principal)
```

### Tipografia

Sistema baseado em **scale modular (1.25x)**:

```
display-xl:  3.5rem  | line-height: 1.1  | bold
display-lg:  3rem    | line-height: 1.1  | bold
display-md:  2.5rem  | line-height: 1.2  | bold

h1:  2rem    | line-height: 1.3 | bold
h2:  1.75rem | line-height: 1.3 | bold
h3:  1.5rem  | line-height: 1.4 | bold (semibold)
h4:  1.25rem | line-height: 1.4 | bold (semibold)

body-lg: 1.125rem | line-height: 1.6 | regular
body-md: 1rem     | line-height: 1.6 | regular
body-sm: 0.875rem | line-height: 1.5 | regular

label:   0.875rem | line-height: 1.4 | medium
caption: 0.75rem  | line-height: 1.4 | regular
```

**Font Family**: 
- Body: Inter (sans-serif)
- Display: Poppins (bold headlines)

### Espaçamento

Escala Tailwind padrão:
```
0    1    2    4    6    8    12   16   20   24   32   40   48   64   80   96
0px  0.25 0.5  1    1.5  2    3    4    5    6    8    10   12   16   20   24
```

**Rhythm**:
- Section padding: 16px-24px
- Card padding: 6px (24px)
- Form spacing: 6px (24px)
- Mobile gap: 4px (16px)
- Desktop gap: 6px-8px (24px-32px)

### Radius, Borders, Shadows

```
Border Radius:
- xs:  0.25rem
- sm:  0.375rem
- md:  0.5rem (default)
- lg:  0.75rem
- xl:  1rem
- 2xl: 1.25rem
- 3xl: 1.5rem

Shadow System:
- xs:   1px blur, opacity 5%
- sm:   1px blur, opacity 8%
- base: 3px blur, mixed opacity
- md:   6px blur, mixed opacity
- lg:   15px blur → hover state
- xl:   25px blur → elevated cards
```

### Iconografia

**Font**: Material Symbols Outlined, weight 200

**Tamanhos**:
```
Size 20: Labels, small UI (16px)
Size 24: Default, body (24px)
Size 32: Section headers (32px)
Size 40: Heroes (40px)
```

**Uso**:
- Ícones 24px → padrão
- Ícones 20px → compact, dentro de botões
- Ícones 32px+ → destaque, ilustrações
- Sempre usar weight 200 para keeping elegante

---

## 🧩 Componentes UI

### Button
```tsx
<Button variant="primary" size="md" icon={<Icon name="check" />} />
```
**Variantes**: primary (verde), secondary (bordered), ghost, danger
**Tamanhos**: sm, md, lg
**Props**: loading, disabled, fullWidth, icon, iconPosition

### Input
```tsx
<Input
  label="Email"
  placeholder="seu@email.com"
  icon={<Icon name="mail" />}
  error="Campo obrigatório"
  helper="Use um email válido"
  required
/>
```
**Props**: label, error, helper, icon, iconPosition, all HTML input props

### Textarea
```tsx
<Textarea label="Mensagem" placeholder="..." error="" helper="" />
```

### Card
```tsx
<Card hover elevated>Conteúdo</Card>
```
**Props**: hover (default true), elevated (shadow lg)

### Badge
```tsx
<Badge variant="success" size="md">Aprovado</Badge>
```
**Variantes**: primary, secondary, success, warning, error, info, neutral
**Tamanhos**: sm, md

### Checkbox & Radio
```tsx
<Checkbox label="Concorda?" helper="Saiba mais" />
<Radio label="Opção" helper="Descrição" />
```

### Select
```tsx
<Select
  label="Plano"
  options={[{ value: 'basic', label: 'Básico' }]}
  placeholder="Selecione..."
/>
```

### Accordion
```tsx
<Accordion
  items={[
    { id: '1', title: 'Pergunta?', content: 'Resposta...' }
  ]}
  defaultOpen="1"
/>
```

### Icon
```tsx
<Icon name="favorite" size={24} filled />
```
**Sizes**: 16, 20, 24, 32, 40
**Prop**: filled (para preenchidas)

---

## 🎪 Componentes de Seção

### Hero
```tsx
<Hero
  title="Encontre o Melhor Plano"
  subtitle="Comparação confiável"
  description="Descrição aqui"
  primaryCta={{ label: 'Cotar', href: '#' }}
  secondaryCta={{ label: 'Saiba Mais', href: '#' }}
  image={<div>Imagem aqui</div>}
/>
```

### LeadForm
```tsx
<LeadForm
  title="Cotação Personalizada"
  variant="block" // ou "inline"
  compact={false}
  onSubmit={(data) => console.log(data)}
/>
```

### BenefitCard
```tsx
<BenefitCard
  icon="check_circle"
  title="Benefício"
  description="Descrição"
  badge="Popular"
  badgeVariant="success"
/>
```

### OperatorCard
```tsx
<OperatorCard
  name="Amil"
  description="Grande operadora"
  rating={4.7}
  reviews={2400}
  highlight="Melhor cobertura"
  onCta={() => {}}
/>
```

### ComparisonCard
```tsx
<ComparisonCard
  operatorName="Amil"
  planName="Plano Top"
  monthlyPrice={450}
  highlighted={true}
  features={[
    { name: 'Cobertura', included: true },
    { name: 'Carência reduzida', included: false }
  ]}
  mainBenefit="Telemedicina incluída"
  onSelect={() => {}}
/>
```

### TestimonialCard
```tsx
<TestimonialCard
  author="Maria Silva"
  role="São Paulo"
  content="Ótimo serviço!"
  rating={5}
/>
```

### FAQSection
```tsx
<FAQSection
  title="Dúvidas Frequentes"
  items={[
    { id: '1', title: 'Como funciona?', content: 'Assim...' }
  ]}
/>
```

---

## 📄 Páginas Implementadas

### 1. **Página Inicial** (`/`)
- Hero section com CTAs
- 3 motivos para escolher SaudePlus
- LeadForm inline
- Grid de operators
- Como funciona (4 passos)
- Estatísticas
- FAQ
- Testimoniais
- CTA final

### 2. **Design System** (`/design-system`)
📊 **Showcase visual completo** com todos os tokens e componentes

Seções:
- Paleta de cores (primária, semântica, neutral)
- Tipografia (display, headings, body, labels, captions)
- Espaçamento (16 itens com preview)
- Buttons (variantes, tamanhos, estados)
- Forms (inputs, textareas, selects, checkboxes, radios)
- Cards e badges
- Accordion
- Ícones (12 exemplos)
- Padrões (CTA blocks, trust sections)

### 3. **Sobre** (`/sobre`)
- Missão, visão, valores
- História
- Por que confiar (4 pontos com ícones)
- CTA final

### 4. **Contato** (`/contato`)
- 3 canais (WhatsApp, Email, Agendamento)
- Formulário completo
- Mapa + horários
- Localização

### 5. **Cotação** (`/cotacao`)
- Hero com benefícios (4 cards)
- LeadForm completo
- Como funciona (4 passos com timeline)

### 6. **Operadoras** (`/operadoras`)
- Hero
- Grid 3 colunas com 6 operadoras
- Tabela de comparação
- 4 benefícios das operadoras
- CTA final

### 7. **Blog** (`/blog`)
- Grid 3 colunas com 6 posts exemplo
- Categorias populares
- Newsletter signup

---

## 🚀 Como Usar

### Instalação
```bash
npm install
# ou
yarn install
```

### Desenvolvimento
```bash
npm run dev
# Abrir http://localhost:3000
```

### Build
```bash
npm run build
npm start
```

### Ver Design System
Acesse: http://localhost:3000/design-system

---

## 💡 Padrões de Uso

### Estrutura de Página
```tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export default function Page() {
  return (
    <main>
      <Header />
      
      <Section py="lg" bg="white">
        <Container>
          {/* Conteúdo */}
        </Container>
      </Section>
      
      <Footer />
    </main>
  )
}
```

### Section Props
```tsx
<Section py="lg" bg="light">  {/* py: sm | md | lg */}
                              {/* bg: light | elevated | primary */}
  <Container>Conteúdo</Container>
</Section>
```

### Form Pattern
```tsx
const [formData, setFormData] = useState({...})

const handleChange = (e: React.ChangeEvent<...>) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Processar dados
}
```

### Responsividade
- **Mobile first**: Estilos mobile são o padrão
- **Breakpoints**: `md:` (768px), `lg:` (1024px)
- **Grid**: responsivo com grid-cols-1, md:grid-cols-2, etc

---

## 🎨 Personalizações Futuras

Sugestões para expansão:

1. **Páginas Dinâmicas**:
   - `/tipos-de-plano/[slug]`
   - `/operadoras/[slug]`
   - `/cidades/[slug]`
   - `/comparar/[slug]`
   - `/blog/[slug]`
   - `/carencia`

2. **Componentes Adicionais**:
   - Floating WhatsApp button
   - Sticky CTA bar
   - Newsletter modal
   - Live chat widget

3. **Features**:
   - Sistema de autenticação
   - Dashboard de usuário
   - Histórico de cotações
   - Salvar favoritos
   - Notificações

4. **E-commerce**:
   - Carrinho de compra
   - Processo de checkout
   - Integração de pagamento

---

## 📚 Arquivo Design System

Todos os tokens estão centralizados em:
- `tailwind.config.ts` → Cores, tipografia, espaçamento, sombras
- `styles/globals.css` → Estilos globais, utilities customizadas
- Componentes individuais → Implementam os tokens

---

## ✅ Checklist de Completude

- [x] Estrutura de pastas bem organizada
- [x] Design tokens completos (cores, tipografia, espaçamento)
- [x] 10 componentes UI reutilizáveis
- [x] 4 componentes de layout
- [x] 7 componentes de seção específicos
- [x] Página Design System com showcase visual
- [x] 7 páginas principais implementadas
- [x] Responsividade mobile-first
- [x] Accessibility basics (labels, roles, focus)
- [x] TypeScript em toda a base de código
- [x] Documentação completa

---

## 🎯 Próximos Passos

1. Integrar com backend/API
2. Adicionar animações e transições
3. Implementar testes automatizados
4. Setup de CI/CD
5. Otimizar performance (images, code splitting)
6. Adicionar Dark Mode
7. Analytics e tracking
8. SEO optimization

---

**Desenvolvido como um Design System moderno e profissional para plataforma de saúde suplementar brasileira.**
