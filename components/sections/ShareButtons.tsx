'use client'

import React from 'react'

export interface ShareButtonsProps {
  title: string
  url: string
  className?: string
}

export function ShareButtons({ title, url, className = '' }: ShareButtonsProps) {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm font-semibold text-neutral-700">Compartilhe:</span>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
        title="Compartilhar no Facebook"
      >
        <span className="text-sm">f</span>
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors"
        title="Compartilhar no Twitter"
      >
        <span className="text-sm">𝕏</span>
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
        title="Compartilhar no LinkedIn"
      >
        <span className="material-symbols-outlined text-sm">business</span>
      </a>
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
        title="Compartilhar no WhatsApp"
      >
        <span className="material-symbols-outlined text-sm">chat</span>
      </a>
    </div>
  )
}
