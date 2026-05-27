'use client'

import Link from 'next/link'
import { Download, MessageCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/90
        backdrop-blur-md
        border-b
        border-gray-100
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <Link
          href="#top"
          className="
            text-xl
            md:text-2xl
            font-bold
            tracking-wide
            hover:opacity-80
            transition
          "
        >
          HOME<span className="text-yellow-600">TV</span>
        </Link>

        {/* BUTTON */}
        <a
          href="https://wa.me/62895700910953?text=Halo%20Admin%20Saya%20ingin%20order%20layanan%20HomeTV"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-green-500
            hover:bg-green-600
            transition
            text-white
            px-4
            md:px-6
            py-2.5
            md:py-3
            rounded-full
            font-medium
            shadow-lg
            flex
            items-center
            gap-2
            text-sm
            md:text-base
          "
        >
          <MessageCircle size={18} />
          Bantuan Admin
        </a>

      </div>
    </nav>
  )
}