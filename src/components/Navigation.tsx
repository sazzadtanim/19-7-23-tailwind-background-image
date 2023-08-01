import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='fixed z-30 flex w-full justify-center gap-5 bg-white/60 py-5 capitalize backdrop-blur-sm'>
      <Link className='lowercase first-letter:capitalize' href={'/'}>
        svg pattern
      </Link>
      <Link className='lowercase first-letter:capitalize' href={'/svg_full'}>
        svg full
      </Link>
      <Link className='lowercase first-letter:capitalize' href={'/png_full'}>
        png full
      </Link>
      <Link className='lowercase first-letter:capitalize' href={'/svg_blend'}>
        svg blend
      </Link>
      <Link
        className='lowercase first-letter:capitalize'
        href={'/css_gradient'}
      >
        css gradient
      </Link>
    </div>
  )
}
