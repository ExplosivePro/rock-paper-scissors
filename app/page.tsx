import Image from 'next/image'

export default function Home() {
  return (
    <Image
      className="relative"
      src="/images/icon-rock.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />

  )
}
