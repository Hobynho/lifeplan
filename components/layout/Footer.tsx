'use client'

import Link from 'next/link'

export function Footer() {
  const footerLinks = {
    Produto: [
      { label: 'Operadoras', href: '/operadoras' },
      { label: 'Comparar Planos', href: '/comparar' },
      { label: 'Tipos de Plano', href: '/tipos-de-plano' },
      { label: 'Cidades', href: '/cidades' },
    ],
    Empresa: [
      { label: 'Sobre', href: '/sobre' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contato', href: '/contato' },
      { label: 'Carência', href: '/carencia' },
    ],
    Legal: [
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
      { label: 'Termo de Consentimento', href: '#' },
    ],
    Social: [
      { label: 'WhatsApp', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  }

  return (
    <footer className="bg-primary-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 font-bold text-lg text-white mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary-900 font-bold">
                S+
              </div>
              <span>SaudePlus</span>
            </div>
            <p className="text-sm text-neutral-300">
              Encontre o melhor plano de saúde com confiança e transparência.
            </p>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4 text-sm">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-neutral-400">
              © 2024 SaudePlus. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined">home</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined">language</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
