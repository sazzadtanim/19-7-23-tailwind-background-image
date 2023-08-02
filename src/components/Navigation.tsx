import Link from 'next/link'

export default function Navigation() {
  return (
    <div className='fixed z-30 flex w-full justify-center gap-5 bg-white/20 bg-auto bg-top py-5 capitalize'>
      <Link
        className='button relative translate-x-1 rounded-full px-5 py-2 lowercase duration-300 first-letter:capitalize hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-8'
        href={'/'}
      >
        <span className='z-10 text-white'>svg pattern</span>
      </Link>
      <Link
        className='button relative translate-x-1 rounded-full px-5 py-2 lowercase duration-300 first-letter:capitalize hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-8'
        href={'/svg_full'}
      >
        <span className='z-10 text-white'>svg full</span>
      </Link>
      <Link
        className='button relative translate-x-1 rounded-full px-5 py-2 lowercase duration-300 first-letter:capitalize hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-8'
        href={'/png_full'}
      >
        <span className='z-10 text-white'>png full</span>
      </Link>
      <Link
        className='button relative translate-x-1 rounded-full px-5 py-2 lowercase duration-300 first-letter:capitalize hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-8'
        href={'/css_gradient'}
      >
        <span className='z-10 text-white'>css gradient</span>
      </Link>
      <Link
        className='button relative translate-x-1 rounded-full px-5 py-2 lowercase duration-300 first-letter:capitalize hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-8'
        href={'/svg_blend'}
      >
        <span className='z-10 text-white'>svg blend</span>
      </Link>
    </div>
  )
}
