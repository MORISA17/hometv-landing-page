'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-white
        overflow-hidden
        pt-32
        md:pt-36
        pb-20
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.08),transparent_30%)]
        "
      />

      {/* CONTAINER */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          grid
          lg:grid-cols-2
          gap-14
          items-center
        "
      >

        {/* LEFT */}
        <div>

          {/* TEXT SMALL */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              uppercase
              tracking-[4px]
              text-yellow-700
              text-xs
              md:text-sm
              mb-6
            "
          >
            Mari Gabung Menjadi Mitra HomeTV
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-tight
            "
          >
            Nikmati Layanan IPTV Terbaik

            <span
              className="
                block
                bg-gradient-to-r
                from-yellow-500
                to-yellow-300
                bg-clip-text
                text-transparent
              "
            >
              Full Server Indonesia
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="
              text-gray-600
              mt-8
              text-base
              md:text-lg
              leading-relaxed
              max-w-2xl
            "
          >
            Streaming stabil, ringan, tanpa buffering,
            support berbagai perangkat dan sistem operasi
            dengan kualitas premium 24/7.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >

            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Saya%20ingin%20order%20layanan%20HomeTV"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                sm:w-auto
                bg-yellow-500
                hover:bg-yellow-600
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                shadow-xl
                transition
                text-center
              "
            >
              Mulai Sekarang
            </a>

            <a
              href="#features"
              className="
                w-full
                sm:w-auto
                border
                border-gray-300
                hover:border-black
                px-8
                py-4
                rounded-full
                font-semibold
                transition
                text-center
              "
            >
              Pelajari Lebih Lanjut
            </a>

          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-yellow-400/20
              blur-3xl
              rounded-full
            "
          />

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >

            <Image
              src="/images/hometv-app.png"
              alt="HomeTV App"
              width={700}
              height={700}
              priority
              className="
                w-full
                max-w-[500px]
                object-contain
                drop-shadow-2xl
              "
            />

          </motion.div>
        </div>
      </div>
    </section>
  )
}