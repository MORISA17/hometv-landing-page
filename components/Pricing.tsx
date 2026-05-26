import {
  Check,
  Crown,
} from 'lucide-react'

const pricingPlans = [
  {
    title: 'REGULER',
    price: '10RB',
    duration: '1 Bulan',
    featured: false,
    whatsappMessage:
      'Halo Admin, saya ingin order Paket REGULER 1 Bulan - 10RB',
  },
  {
    title: 'BEST VALUE',
    price: '70RB',
    duration: '1 Tahun',
    featured: true,
    badge: 'Bestseller',
    whatsappMessage:
      'Halo Admin, saya ingin order Paket BEST VALUE 1 Tahun - 70RB',
  },
  {
    title: 'POPULAR',
    price: '25RB',
    duration: '3 Bulan',
    featured: false,
    whatsappMessage:
      'Halo Admin, saya ingin order Paket POPULAR 3 Bulan - 25RB',
  },
  {
    title: 'EXTENDED',
    price: '40RB',
    duration: '6 Bulan',
    featured: false,
    whatsappMessage:
      'Halo Admin, saya ingin order Paket EXTENDED 6 Bulan - 40RB',
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-gradient-to-r from-gray-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">
            DAFTAR HARGA MODAL PAKET
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            *Harga sewaktu-waktu dapat berubah sesuai kebijakan pasar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">

          {pricingPlans.map((plan, index) => (

            <div
              key={index}
              className={`
                relative
                rounded-[30px] md:rounded-[40px]
                p-8 md:p-10
                transition-all
                duration-300
                hover:-translate-y-2

                ${
                  plan.featured
                    ? 'bg-zinc-900 text-white shadow-2xl scale-105'
                    : 'bg-white text-black shadow-lg'
                }
              `}
            >

              {plan.badge && (
                <div
                  className="
                    absolute
                    -top-4
                    left-1/2
                    -translate-x-1/2
                    bg-red-500
                    text-white
                    px-5
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                  "
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">

                <p
                  className={`
                    text-xl
                    mb-4
                    ${
                      plan.featured
                        ? 'text-white'
                        : 'text-gray-700'
                    }
                  `}
                >
                  {plan.title}
                </p>

                <h3
                  className="
                    text-4xl md:text-5xl
                    font-black
                    text-yellow-500
                  "
                >
                  {plan.price}
                </h3>
              </div>

              <ul className="space-y-5">

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>{plan.duration}</span>
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>Untuk 1 Perangkat</span>
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>Multy Platform</span>
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>1500+ Movies & Series</span>
                </li>

                <li className="flex items-start gap-3">
                  <Crown className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>
                    Channel Premium
                    <br />
                    (99% tanpa watermark)
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-1" />
                  <span>Open All Channel</span>
                </li>

              </ul>

              <a
                href={`https://wa.me/62895700910953?text=${encodeURIComponent(
                  plan.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-full
                  mt-10
                  py-4
                  rounded-full
                  font-bold
                  transition
                  flex
                  items-center
                  justify-center

                  ${
                    plan.featured
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                      : 'bg-zinc-900 hover:bg-black text-white'
                  }
                `}
              >
                Pilih Paket
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}