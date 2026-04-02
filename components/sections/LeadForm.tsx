'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'
import { Section } from '@/components/layout/Section'

export interface LeadFormProps {
  title?: string
  description?: string
  onSubmit?: (data: FormData) => void
  variant?: 'inline' | 'block'
  compact?: boolean
}

export interface FormData {
  fullName: string
  email: string
  phone: string
  zipCode: string
  age?: number
  plan?: string
  terms: boolean
}

export function LeadForm({
  title = 'Encontre seu plano ideal',
  description = 'Preencha seus dados para recebermos uma cotação personalizada',
  onSubmit,
  variant = 'block',
  compact = false,
}: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    age: undefined,
    plan: '',
    terms: false,
  })

  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      if (onSubmit) {
        onSubmit(formData)
      }
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        zipCode: '',
        age: undefined,
        plan: '',
        terms: false,
      })
    } finally {
      setSubmitting(false)
    }
  }

  const planOptions = [
    { value: 'basic', label: 'Plano Básico' },
    { value: 'standard', label: 'Plano Standard' },
    { value: 'premium', label: 'Plano Premium' },
  ]

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder="Seu email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="flex-1"
        />
        <Button type="submit" size="md" loading={submitting}>
          Cotar
        </Button>
      </form>
    )
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Nome Completo"
            name="fullName"
            type="text"
            placeholder="João Silva"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="joao@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Telefone (WhatsApp)"
            name="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Input
            label="CEP"
            name="zipCode"
            type="text"
            placeholder="01310-100"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Idade"
            name="age"
            type="number"
            placeholder="30"
            value={formData.age || ''}
            onChange={handleChange}
          />
          <Select
            label="Tipo de Plano Procurado"
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            options={planOptions}
            placeholder="Selecione..."
          />
        </div>

        <Checkbox
          label="Concordo com os termos e política de privacidade"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          fullWidth
          size="md"
          loading={submitting}
        >
          Receber Cotação
        </Button>

        <p className="text-center text-caption text-neutral-500">
          Entraremos em contato em até 2 horas via WhatsApp
        </p>
      </form>
    )
  }

  return (
    <Section py="lg" bg="primary">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-h2 md:text-display-md font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-body-lg text-neutral-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nome Completo"
              name="fullName"
              type="text"
              placeholder="João Silva"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="joao@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Telefone (WhatsApp)"
              name="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              label="CEP"
              name="zipCode"
              type="text"
              placeholder="01310-100"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Idade"
              name="age"
              type="number"
              placeholder="30"
              value={formData.age || ''}
              onChange={handleChange}
            />
            <Select
              label="Tipo de Plano Procurado"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              options={planOptions}
              placeholder="Selecione..."
            />
          </div>

          <Checkbox
            label="Concordo com os termos e política de privacidade"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            fullWidth
            size="lg"
            loading={submitting}
          >
            Receber Cotação Personalizada
          </Button>

          <p className="text-center text-caption text-neutral-500">
            Entraremos em contato em até 2 horas via WhatsApp
          </p>
        </form>
      </div>
    </Section>
  )
}
