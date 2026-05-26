import {
  BadgeCheck,
  Info,
} from 'lucide-react'

const syarat = [
  'Deposit awal minimal 30rb untuk selanjutnya bebas',
  'Saldo akan terpotong otomatis sesuai dengan harga paket',
]

const benefit = [
  'Pegang Panel Sendiri',
  'Bebas kelola dan Control User',
  'Bebas Create Trial tanpa biaya (free)',
  'Saldo Aman tidak ada masa Expired',
]

const platform = [
  'HomeTV Player',
  'XC-PLAYER',
  'ZALTV',
  'Televizo',
  'TiviMate',
  'OTT Navigator',
  'Smarters Pro',
  'XCIPTV Player',
  'M3U IPTV (SMART TV)',
  'TM IPTV PC/Laptop',
  'STB DVB T2',
]

const os = [
  'STB AIROS',
  'Android TV',
  'Google TV',
  'Smart TV',
  'Windows',
  'IOS Apple',
]

const layanan = [
  'HomeTV AKUN',
  'Playlist M3U',
  'Xtream Codes',
  'Layanan Hotel, Villa, Resort, RT/RW Net, dll',
  'M3U Bagi Penjual ZAL TV',
  'Reseller Panel (System Deposit Saldo)',
]

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
            bg-white
            rounded-[40px]
            p-6 md:p-16
            shadow-lg
            border
            border-gray-100
          "
        >

          {/* TOP SECTION */}
          <div className="grid md:grid-cols-2 gap-16">

            {/* SYARAT */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Info className="w-5 h-5 text-yellow-500" />

                <h3 className="text-xl font-bold uppercase">
                  Syarat dan Ketentuan
                </h3>
              </div>

              <div className="space-y-5">
                {syarat.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <BadgeCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />

                    <p className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFIT */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Info className="w-5 h-5 text-yellow-500" />

                <h3 className="text-xl font-bold uppercase">
                  Benefit yang Didapat
                </h3>
              </div>

              <div className="space-y-5">
                {benefit.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <BadgeCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />

                    <p className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM BOX */}
          <div
            className="
              mt-20
              border
              border-gray-200
              rounded-[35px]
              p-6 md:p-14
            "
          >

            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Info className="w-5 h-5 text-yellow-500" />

                <h3 className="text-xl md:text-2xl font-bold uppercase">
                  Hadir dengan Segment Multy Platform
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* PLATFORM */}
              <div>
                <h4 className="font-bold text-green-700 mb-6">
                  ● Support di berbagai Aplikasi / Player
                </h4>

                <div className="space-y-3">
                  {platform.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <BadgeCheck className="w-4 h-4 text-blue-500 mt-1 shrink-0" />

                      <p className="text-gray-700 text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* OS */}
              <div>
                <h4 className="font-bold text-green-700 mb-6">
                  ● Support di berbagai OS
                </h4>

                <div className="space-y-3">
                  {os.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <BadgeCheck className="w-4 h-4 text-green-500 mt-1 shrink-0" />

                      <p className="text-gray-700 text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* LAYANAN */}
              <div>
                <h4 className="font-bold text-green-700 mb-6">
                  ● Layanan Kami
                </h4>

                <div className="space-y-3">
                  {layanan.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <BadgeCheck className="w-4 h-4 text-lime-500 mt-1 shrink-0" />

                      <p className="text-gray-700 text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TELEGRAM */}
            <div className="text-center mt-16">

              <p className="text-gray-500 mb-3">
                Join :
              </p>

              <a
                href="https://wa.me/usernamegroup"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-green-600
                  hover:text-green-700
                  font-semibold
                  text-lg
                  transition
                "
              >
                Grup WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}