import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', to: '/dashboard' },
  { name: 'Clients',   to: '/clients'   },
  { name: 'Quotes',    to: '/quotes'    },
  { name: 'Schedule',  to: '/schedule'  },
  { name: 'Invoices',  to: '/invoices'  },
  { name: 'Billing',   to: '/billing'   },
]

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </button>
          <div className="text-2xl font-bold">ServicePro Elite</div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-gray-900 ${isActive ? 'font-semibold' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`
            bg-gray-50 border-r 
            md:relative md:translate-x-0 md:w-64 
            absolute top-0 bottom-0 z-20 w-64 p-4
            transform transition-transform duration-200
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <ul className="space-y-3">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-2 py-1 rounded ${
                      isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 overflow-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  )
}
