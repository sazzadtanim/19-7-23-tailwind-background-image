import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='fixed z-30 flex w-full justify-center gap-5 bg-white/60 py-5 capitalize backdrop-blur-sm'>
      <Link
        className='button flex h-[2rem] items-center justify-center rounded-full bg-blue-700 px-5 py-2 lowercase first-letter:capitalize'
        href={'/'}
      >
        <span className='z-10 text-white'>svg pattern</span>
      </Link>
      <Link
        className='button flex h-[2rem] items-center justify-center rounded-full bg-blue-700 px-5 py-2 lowercase first-letter:capitalize'
        href={'/svg_full'}
      >
        <span className='z-10 text-white'>svg full</span>
      </Link>
      <Link
        className='button flex h-[2rem] items-center justify-center rounded-full bg-blue-700 px-5 py-2 lowercase first-letter:capitalize'
        href={'/png_full'}
      >
        <span className='z-10 text-white'>png full</span>
      </Link>
      <Link
        className='button flex h-[2rem] items-center justify-center rounded-full bg-blue-700 px-5 py-2 lowercase first-letter:capitalize'
        href={'/svg_blend'}
      >
        <span className='z-10 text-white'>svg blend</span>
      </Link>
      <Link
        className='button flex h-[2rem] items-center justify-center rounded-full bg-blue-700 px-5 py-2 lowercase first-letter:capitalize'
        href={'/css_gradient'}
      >
        <span className='z-10 text-white'>css gradient</span>
      </Link>
    </div>
  )
}
