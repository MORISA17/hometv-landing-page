import {
  Monitor,
  Server,
  CheckCheck,
  Crown,
  Check,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    title: 'Segment Multy Platform',
    icon: Monitor,
  },
  {
    title: 'Support Diberbagai OS',
    icon: Monitor,
  },
  {
    title: 'Infrastruktur Real Server Mandiri',
    icon: Server,
  },
  {
    title: 'Full Server Indonesia',
    icon: Server,
  },
  {
    title: 'Jaminan Kualitas Siaran',
    icon: CheckCheck,
  },
  {
    title: 'Ringan dan Stabilitas 24/7',
    icon: CheckCheck,
  },
  {
    title: 'Channel Tanpa Acak & Stabil',
    icon: CheckCheck,
  },
  {
    title: 'Channel Premium (99% tanpa Watermark)',
    icon: Crown,
  },
  {
    title: '1500+ Movies & Series',
    icon: Check,
  },
  {
    title: 'Open All Channel',
    icon: Check,
  },
  {
    title: 'Maintenance & Team Support',
    icon: ShieldCheck,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mengapa Memilih HomeTV?
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Infrastruktur modern dan performa tinggi untuk pengalaman streaming terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                  group
                "
              >
                <div
                  className="
                    w-10 h-10 md:w-12 md:h-12
                    rounded-2xl
                    bg-yellow-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon className="w-6 h-6 text-yellow-700" />
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold leading-relaxed">
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}