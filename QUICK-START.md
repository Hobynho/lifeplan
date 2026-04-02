# Guia Rápido de Desenvolvimento

## 🚀 Começar um Novo Componente

### 1. UI Component
```tsx
// components/ui/MyComponent.tsx
'use client'

import React from 'react'

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-neutral-100 text-neutral-900',
    }

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg',
    }

    return (
      <div
        ref={ref}
        className={`rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)

MyComponent.displayName = 'MyComponent'
```

### 2. Exportar em index.ts
```tsx
// components/ui/index.ts
export { MyComponent, type MyComponentProps } from './MyComponent'
```

### 3. Usar em página
```tsx
import { MyComponent } from '@/components/ui'

export default function Page() {
  return <MyComponent variant="primary" size="lg" />
}
```

---

## 📐 Using Design Tokens

### Cores
```tsx
// Classes Tailwind diretas
<div className="bg-primary-500 text-neutral-900" />

// Variantes semânticas
<div className="bg-success-100 text-success-700" />
<div className="bg-error-500" />
<div className="bg-warning-400" />
<div className="bg-info-600" />
```

### Tipografia
```tsx
// Headlines
<h1 className="text-display-xl font-bold" />
<h2 className="text-display-md font-bold" />
<h3 className="text-h3 font-bold" />

// Body
<p className="text-body-lg" />
<p className="text-body-md" />
<p className="text-body-sm" />

// Labels & Captions
<label className="text-label font-medium" />
<p className="text-caption" />
```

### Espaçamento
```tsx
// Padding
<div className="p-4 md:p-8" />

// Margin
<div className="mb-6 md:mb-12" />

// Gap (flex/grid)
<div className="flex gap-4 md:gap-8" />
```

### Sombras
```tsx
// Shadow levels
<div className="shadow-xs" />   {/* hover text */}
<div className="shadow-base" /> {/* default cards */}
<div className="shadow-lg" />   {/* elevated cards */}
```

### Border Radius
```tsx
<div className="rounded-lg" />  {/* 0.75rem - padrão */}
<div className="rounded-xl" />  {/* 1rem - maior */}
<div className="rounded-full" /> {/* 9999px - pills */}
```

---

## 🎨 Padrões Comuns

### Hero Section
```tsx
<Section py="lg" bg="light">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-display-lg font-bold text-neutral-900">Título</h1>
        <p className="text-body-lg text-neutral-600">Descrição</p>
        <Button>CTA</Button>
      </div>
      <div>{/* Imagem ou conteúdo */}</div>
    </div>
  </Container>
</Section>
```

### Card Grid
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

### Form Section
```tsx
<Section py="lg" bg="white">
  <Container>
    <div className="max-w-2xl mx-auto">
      <h2 className="text-h2 font-bold text-neutral-900 mb-8">Formulário</h2>
      <form className="space-y-6">
        <Input label="Campo 1" />
        <Input label="Campo 2" />
        <Button fullWidth type="submit">Enviar</Button>
      </form>
    </div>
  </Container>
</Section>
```

### Stats/Numbers
```tsx
<Section py="lg" bg="primary-900">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
      <div>
        <p className="text-display-lg font-bold">50K+</p>
        <p className="text-body-lg">Descrição</p>
      </div>
      {/* Mais stats */}
    </div>
  </Container>
</Section>
```

---

## 🔧 Recomendações

### Do's ✅
- Use design tokens do tailwind.config.ts
- Mantenha componentes pequenos e focados
- Use TypeScript para type safety
- Implemente forwardRef para componentes de UI
- Sempre export em index.ts
- Documente Props com interfaces
- Use 'use client' apenas quando necessário
- Mantenha hierarchy clara

### Don'ts ❌
- Não hardcode colors (use tailwind)
- Não crie unidades de spacing inconsistentes
- Não reescreva estilos em componentes (use inheritance)
- Não misture component logic com styling
- Não esqueça de mobile-first responsividade
- Não ignore acessibilidade (labels, roles)

---

## 📖 Referências Rápidas

### Cores Principais
```
Primary:  #2d5a42 (primary-500, verde escuro)
Success:  #22c55e (success-500)
Error:    #ef4444 (error-500)
Warning:  #f59e0b (warning-500)
Info:     #0ea5e9 (info-500)
```

### Tamanhos de Fonte
```
Display XL: 3.5rem
Display LG: 3rem
H1: 2rem
H2: 1.75rem
H3: 1.5rem
Body LG: 1.125rem
Body MD: 1rem
Body SM: 0.875rem
Label: 0.875rem
Caption: 0.75rem
```

### Breakpoints
```
sm: 640px  (default, não precisa prefix)
md: 768px  (md:)
lg: 1024px (lg:)
xl: 1280px (xl:)
```

---

## 🐛 Debug Tips

### Ver Design System
http://localhost:3000/design-system

### Verificar espaçamento
Adicione uma classe `bg-red-500 bg-opacity-20` temporariamente para ver boxes

### Verificar tipografia
Use DevTools para inspecionar classes tailwind aplicadas

### TypeScript errors
Sempre confira se as Props estão sendo exportadas corretamente

---

**Good luck! 🚀**
