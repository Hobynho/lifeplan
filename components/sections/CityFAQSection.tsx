'use client'

import React, { useState } from 'react'
import { Icon } from '@/components/ui/Icon'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface CityFAQSectionProps {
  items: FAQItem[]
  title?: string
  description?: string
}

export const CityFAQSection: React.FC<CityFAQSectionProps> = ({
  items,
  title = 'Perguntas Frequentes',
  description = 'Encontre respostas para as dúvidas mais comuns',
}) => {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <h2 className="text-display-sm font-bold text-neutral-900">{title}</h2>
        <p className="text-body-lg text-neutral-600 mt-3">{description}</p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-neutral-100 rounded-xl overflow-hidden hover:border-primary-300 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
          >
            <button
              onClick={() => setOpenId(openId === index ? null : index)}
              className="w-full flex items-center justify-between p-7 hover:bg-neutral-50/50 transition-colors duration-200"
            >
              <div className="flex-1 text-left">
                <p className="text-body-md md:text-body-lg font-semibold text-neutral-900 leading-relaxed">
                  {item.question}
                </p>
                {item.category && (
                  <span className="inline-block mt-3 px-3 py-1.5 rounded-lg bg-primary-100 text-body-xs font-semibold text-primary-700">
                    {item.category}
                  </span>
                )}
              </div>
              <div className="flex-shrink-0 ml-4 transition-transform duration-300">
                <Icon
                  name={openId === index ? 'expand_less' : 'expand_more'}
                  size={24}
                  className="text-primary-600"
                />
              </div>
            </button>

            {/* Answer */}
            {openId === index && (
              <div className="px-7 py-6 bg-primary-50/30 border-t border-neutral-100">
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
