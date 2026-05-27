import Image from 'next/image'

export default function WorldCup() {
  return (
    <section
      className="
        relative
        py-24
        bg-black
        text-white
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_30%)]
        "
      />

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
          gap-16
          items-center
        "
      >

        {/* LEFT CONTENT */}
        <div>

          <p
            className="
              uppercase
              tracking-[4px]
              text-yellow-500
              mb-5
              text-sm
            "
          >
            FIFA WORLD CUP 2026
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              leading-tight
            "
          >
            Saksikan Seluruh Match
            <br />

            <span className="text-yellow-500">
              Piala Dunia 2026
            </span>

            <br />
            Tanpa Buffering
          </h2>

          <p
            className="
              text-gray-400
              mt-8
              text-lg
              leading-relaxed
              max-w-2xl
            "
          >
            Nikmati seluruh pertandingan FIFA World Cup 2026
            dengan kualitas streaming premium,
            server Indonesia super stabil,
            dan tayangan olahraga dunia tanpa gangguan.
          </p>

          {/* LIST BENEFIT */}
          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />

              <p>Full Match Piala Dunia 2026</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />

              <p>Channel Sports Dunia Lengkap</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />

              <p>Kualitas HD & Full HD</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />

              <p>Support Android TV, Smart TV, HP & STB</p>
            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-12">

            <a
              href="#pricing"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                bg-yellow-500
                hover:bg-yellow-600
                text-black
                px-8
                py-4
                rounded-full
                font-bold
                transition
                shadow-2xl
              "
            >
              Mulai Berlangganan
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-yellow-500/20
              blur-3xl
              rounded-full
            "
          />

          <Image
            src="/images/worldcup.png"
            alt="FIFA World Cup 2026"
            width={900}
            height={900}
            className="
              relative
              z-10
              rounded-[30px]
              shadow-2xl
              w-full
              max-w-[550px]
              object-cover
            "
          />

        </div>

      </div>
    </section>
  )
}