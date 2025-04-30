import Image from "next/image"

export function AsSeenIn() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">As Seen In</h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-32 md:w-40 h-auto grayscale opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/logos/abc-logo.png" alt="ABC Logo" width={160} height={160} className="w-full h-auto" />
          </div>

          <div className="w-32 md:w-40 h-auto grayscale opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/logos/nbc-logo.png" alt="NBC Logo" width={160} height={160} className="w-full h-auto" />
          </div>

          <div className="w-32 md:w-40 h-auto grayscale opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/logos/cbs-logo.png" alt="CBS Logo" width={160} height={160} className="w-full h-auto" />
          </div>

          <div className="w-32 md:w-40 h-auto grayscale opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/logos/fox-logo.png" alt="FOX Logo" width={160} height={160} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
