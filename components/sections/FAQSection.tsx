'use client'

import React from 'react'
import { Section } from '@/components/layout/Section'
import { Accordion } from '@/components/ui/Accordion'

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface FAQSectionProps {
  title?: string
  description?: string
  items: FAQItem[]
}

export function FAQSection({
  title = 'Dúvidas Frequentes',
  description = 'Encontre respostas para as perguntas mais comuns',
  items,
}: FAQSectionProps) {
  return (
    <Section py="lg" bg="light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-h2 md:text-display-md font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-body-lg text-neutral-600">{description}</p>
        </div>

        <Accordion
          items={items.map(item => ({
            id: item.id,
            title: item.question,
            content: item.answer,
          }))}
        />
      </div>
    </Section>
  )
}
