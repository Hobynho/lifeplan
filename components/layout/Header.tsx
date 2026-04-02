'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

export interface HeaderProps {
  logo?: React.ReactNode
  brand?: string
}

interface NavItem {
  label: string
  href?: string
  submenu?: { label: string; href: string }[]
}

export function Header({ logo, brand = 'SaudePlus' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navItems: NavItem[] = [
    { label: 'Início', href: '/' },
    {
      label: 'Operadoras',
      href: '/operadoras',
      submenu: [
        { label: 'Amil', href: '/operadoras/amil' },
        { label: 'Hapvida', href: '/operadoras/hapvida' },
        { label: 'SulAmérica', href: '/operadoras/sulamerica' },
        { label: 'Unimed', href: '/operadoras/unimed' },
        { label: 'Bradesco Saúde', href: '/operadoras/bradesco-saude' },
      ],
    },
    {
      label: 'Tipos de Plano',
      href: '/tipos-de-plano',
      submenu: [
        { label: 'Individual', href: '/tipos-de-plano/individual' },
        { label: 'Familiar', href: '/tipos-de-plano/familiar' },
        { label: 'Empresarial', href: '/tipos-de-plano/empresarial' },
        { label: 'MEI', href: '/tipos-de-plano/mei' },
        { label: 'Coletivo por Adesão', href: '/tipos-de-plano/coletivo-por-adesao' },
      ],
    },
    {
      label: 'Cidades',
      href: '/cidades',
      submenu: [
        { label: 'Recife', href: '/cidades/recife' },
        { label: 'Olinda', href: '/cidades/olinda' },
        { label: 'Paulista', href: '/cidades/paulista' },
        { label: 'Jaboatão dos Guararapes', href: '/cidades/jaboatao-dos-guararapes' },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
      submenu: [
        { label: 'Saúde', href: '/blog?category=saude' },
        { label: 'Dicas', href: '/blog?category=dicas' },
        { label: 'Novidades', href: '/blog?category=novidades' },
        { label: 'Guias', href: '/blog?category=guias' },
      ],
    },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
    { label: 'Cotação', href: '/cotacao' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-lg text-primary-500">
            {logo || (
              <>
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
                  S+
                </div>
                <span className="hidden sm:inline">{brand}</span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href || '#'}
                  className="px-3 py-2 text-neutral-700 hover:text-primary-500 transition-colors duration-200 font-medium rounded-lg hover:bg-neutral-50 flex items-center space-x-1"
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform duration-200">
                      expand_more
                    </span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-neutral-100">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-4 py-2.5 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg text-sm"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button className="hidden md:inline-flex px-6 py-2.5 rounded-lg font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200">
              Cotar Agora
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-neutral-200 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <span
                        className={`material-symbols-outlined text-sm transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200 text-sm"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <button className="w-full px-4 py-3 mt-2 rounded-lg font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200">
              Cotar Agora
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
