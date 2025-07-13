import Link from 'next/link'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <html>
      <body className="font-sans bg-gray-100 text-gray-800">
        <div className="flex min-h-screen">
          <div className="w-64 bg-black text-white py-4 shadow-lg">
            <h1 className="text-2xl font-bold ml-4 text-white-500 mb-6">
              Admin Panel
            </h1>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/simpleDashboard/dashboard"
                  className="block py-2 px-4 rounded-md hover:bg-white hover:text-black transition duration-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/simpleDashboard/users"
                  className="block py-2 px-4 rounded-md hover:bg-white hover:text-black transition duration-300"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="/simpleDashboard/reports"
                  className="block py-2 px-4 rounded-md hover:bg-white hover:text-black transition duration-300"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/simpleDashboard/settings"
                  className="block py-2 px-4 rounded-md hover:bg-white hover:text-black transition duration-300"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          <main className="flex-1 p-8 bg-white shadow-inner rounded-lg">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default layout