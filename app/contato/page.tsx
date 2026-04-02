'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Textarea } from '@/components/ui/Textarea'
import React, { useState } from 'react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Mensagem enviada:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero */}
      <Section py="lg" bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg md:text-display-xl font-bold text-neutral-900 mb-6">
              Fale Conosco
            </h1>
            <p className="text-body-lg text-neutral-600">
              Dúvidas? Sugestões? Entre em contato. Nossa equipe responde em até 24 horas.
            </p>
          </div>
        </Container>
      </Section>

      {/* Canais de Contato */}
      <Section py="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mx-auto">
                  <Icon name="phone" size={24} className="text-primary-600" />
                </div>
                <h3 className="text-h4 font-bold text-neutral-900">WhatsApp</h3>
                <p className="text-body-md text-neutral-600">(11) 99999-9999</p>
                <Button variant="secondary" fullWidth size="sm">
                  Enviar Mensagem
                </Button>
              </div>
            </Card>

            <Card>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center mx-auto">
                  <Icon name="mail" size={24} className="text-secondary-600" />
                </div>
                <h3 className="text-h4 font-bold text-neutral-900">Email</h3>
                <p className="text-body-md text-neutral-600">contato@saude.plus</p>
                <Button variant="secondary" fullWidth size="sm">
                  Enviar Email
                </Button>
              </div>
            </Card>

            <Card>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mx-auto">
                  <Icon name="schedule" size={24} className="text-accent-600" />
                </div>
                <h3 className="text-h4 font-bold text-neutral-900">Horário</h3>
                <p className="text-body-md text-neutral-600">Seg-Sex: 08h - 20h</p>
                <Button variant="secondary" fullWidth size="sm">
                  Agendar Chamada
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Formulário de Contato */}
      <Section py="lg" bg="white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-h2 font-bold text-neutral-900 mb-8">Envie uma Mensagem</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nome Completo"
                  name="name"
                  placeholder="Seu nome..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                label="Telefone"
                name="phone"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
              />

              <Textarea
                label="Mensagem"
                name="message"
                placeholder="Escreva sua mensagem..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" fullWidth size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </Container>
      </Section>

      {/* Informações Adicionais */}
      <Section py="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-h2 font-bold text-neutral-900 mb-6">Localização</h3>
              <p className="text-body-md text-neutral-700 mb-4">
                Av. Paulista, 1578 - Sala 1000<br />
                São Paulo - SP<br />
                CEP: 01311-200
              </p>
              <Button variant="secondary">Ver no Mapa</Button>
            </div>

            <div>
              <h3 className="text-h2 font-bold text-neutral-900 mb-6">Horário de Atendimento</h3>
              <div className="space-y-2 text-body-md text-neutral-700">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span className="font-semibold">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-semibold">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-semibold">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
