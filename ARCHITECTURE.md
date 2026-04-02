# 📊 Arquitetura do Design System

## Hierarquia de Componentes

```
App
├── Layout Root
│   ├── Header
│   ├── Main Content
│   │   ├── Section (wrapper)
│   │   │   └── Container (max-width)
│   │   │       └── UI / Feature Components
│   │   └── Section
│   └── Footer
```

## Camadas de Abstração

### 1️⃣ **Base Layer** - Design Tokens
- Tailwind config (cores, tipografia, espaçamento)
- CSS utilities (globals.css)
- Theme constants

**Arquivo**: `tailwind.config.ts`, `styles/globals.css`

### 2️⃣ **UI Layer** - Componentes Elementares
- Button, Input, Card, Badge, etc
- Sem lógica de domínio
- Reutilizáveis em qualquer contexto
- Tipados com TypeScript

**Pasta**: `components/ui/`

Exemplos:
- Interação: Button, Input, Checkbox, Radio, Select
- Apresentação: Card, Badge, Icon
- Comportamento: Accordion

### 3️⃣ **Layout Layer** - Estrutura de Página
- Header, Footer
- Container, Section
- Navegação, rodapé global
- Consistent em todas as páginas

**Pasta**: `components/layout/`

### 4️⃣ **Section Layer** - Domínio Específico
- Hero, LeadForm, OperatorCard
- ComparisonCard, TestimonialCard
- FAQSection, BenefitCard
- Componem seções completas de página

**Pasta**: `components/sections/`

### 5️⃣ **Page Layer** - Páginas Completas
- Combinam seções e layouts
- Lógica de página específica
- Dados e estado da página

**Pasta**: `app/*/page.tsx`

---

## Fluxo de Dados

```
Page
  ├── Header (layout)
  ├── Hero (section)
  │   └── Button (ui)
  ├── Section (layout)
  │   ├── BenefitCard (section)
  │   │   ├── Icon (ui)
  │   │   └── Badge (ui)
  │   └── BenefitCard
  ├── LeadForm (section)
  │   ├── Input (ui)
  │   ├── Select (ui)
  │   ├── Checkbox (ui)
  │   └── Button (ui)
  └── Footer (layout)
```

---

## Convenções & Patterns

### 📝 Nomenclatura
- **Components**: PascalCase
- **Props interfaces**: `ComponentNameProps`
- **Event handlers**: `onAction` (onSubmit, onClick, onChange)
- **CSS classes**: kebab-case (TailwindCSS)
- **Files**: PascalCase para componentes, kebab-case para pastas

### 🎨 Styling
- **Primário via Tailwind**: Coloque todas as classes diretamente no JSX
- **CSS Modules**: Apenas para estilos complexos ou animações
- **Inline styles**: Evite ao máximo

### ♿ Acessibilidade
- ✅ Sempre use `<label>` para inputs
- ✅ Implemente `htmlFor` em labels
- ✅ Use `aria-*` quando necessário
- ✅ Teste com teclado (Tab navigation)
- ✅ Mantenha contraste de cores (AAA quando possível)

### 📱 Responsividade
```tsx
// Mobile first - sempre!
<div className="px-4 md:px-8 lg:px-12" />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" />
```

### ♻️ Reuso
- Componentes UI → sem dependências, máximo reuso
- Componentes section → podem ter dependências de UI
- Páginas → montagem final de tudo

---

## Padrão de Implementação

### Novo UI Component

```tsx
// 1. Define interface de Props
export interface MyComponentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  [prop]: [type]
}

// 2. Implementa componente com forwardRef
export const MyComponent = React.forwardRef<HTMLElement, MyComponentProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    // 3. Define variantes
    const variants = {
      primary: 'bg-primary-500',
      secondary: 'bg-neutral-100',
    }

    // 4. Define tamanhos
    const sizes = {
      sm: 'px-3 py-2',
      md: 'px-4 py-3',
      lg: 'px-6 py-4',
    }

    // 5. Renderiza
    return (
      <button
        ref={ref}
        className={`rounded-lg ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {/* Content */}
      </button>
    )
  }
)

// 6. Define display name
MyComponent.displayName = 'MyComponent'
```

---

## Estrutura de Página

Todas as páginas seguem este padrão:

```tsx
'use client'

import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'
import { Section, Container } from '@/components/layout'
import { Hero, LeadForm } from '@/components/sections'

export default function PageName() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero/Intro */}
      <Hero
        title="..."
        description="..."
        primaryCta={{ label: '...', href: '/' }}
      />

      {/* 3. Content Sections */}
      <Section py="lg" bg="white">
        <Container>
          {/* Conteúdo */}
        </Container>
      </Section>

      {/* 4. Form/CTA */}
      <LeadForm />

      {/* 5. Footer */}
      <Footer />
    </main>
  )
}
```

---

## State Management

Padrão simples com useState:

```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  // ...
})

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = (e) => {
  e.preventDefault()
  // Enviar para API
  console.log(formData)
}
```

**Para estado complexo**: Considerar usar Context API ou biblioteca de estado

---

## Performance Tips

1. **Code Splitting**: Next.js faz automaticamente por página
2. **Images**: Use Next Image quando possível
3. **CSS**: Tailwind purga CSS não usado automaticamente
4. **Fonts**: Sistema usa Google Fonts com `@import` - otimizar depois
5. **Lazy Loading**: Use `dynamic()` para componentes pesados

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'))
```

---

## Testing Strategy

Estrutura recomendada:

```
__tests__/
├── components/
│   ├── ui/
│   │   ├── Button.test.tsx
│   │   └── Input.test.tsx
│   └── sections/
│       └── Hero.test.tsx
├── pages/
│   └── home.test.tsx
└── lib/
    └── utils.test.ts
```

Usar: Jest + React Testing Library

---

## Deployment Checklist

- [ ] Todas as páginas têm meta tags (SEO)
- [ ] Link verification (não há links quebrados)
- [ ] Performance check (Lighthouse)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Acessibilidade (axe DevTools)
- [ ] Environment variables configuradas
- [ ] Build funciona sem erros

```bash
npm run build
npm run start
```

---

## Próximos Passos Recomendados

1. **Database**: Redis/Supabase para cotações
2. **API**: Backend para processamento de leads
3. **Analytics**: Google Analytics / Mixpanel
4. **CMS**: Headless CMS para blog
5. **Testing**: Unit tests para componentes críticos
6. **CI/CD**: GitHub Actions para deploy automático

---

**Este é um projeto profissional e escalável. Sinta-se livre para expandir! 🚀**
