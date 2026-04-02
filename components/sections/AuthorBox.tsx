'use client'

import React from 'react'

export interface AuthorBoxProps {
  name: string
  role: string
  bio: string
  avatar?: string
  email?: string
}

export function AuthorBox({ name, role, bio, avatar, email }: AuthorBoxProps) {
  return (
    <div className="bg-primary-50 rounded-lg p-8 border border-primary-100">
      <div className="flex items-start gap-6">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
        )}
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-h4 font-bold text-neutral-900 mb-1">{name}</h3>
            <p className="text-sm text-primary-600 font-semibold">{role}</p>
          </div>
          <p className="text-body-md text-neutral-700 mb-4 leading-relaxed">
            {bio}
          </p>
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Envie uma mensagem
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
