import capture1 from '@png/capture3.png'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'css gradient as background',
  description: 'Nextjs tailwindcss bacground image implementations',
  creator: 'SazzadTanim',
}

export default function Home() {
  return (
    <main className='absolute inset-0 h-screen w-screen bg-[hsla(0,100%,50%,1)] bg-radial_gradient bg-cover bg-center pt-10'>
      <div className='prose mx-auto px-2 pt-10 text-white'>
        <h1 className='mx-auto py-10 text-center font-mono lowercase text-white first-letter:capitalize lg:whitespace-nowrap'>
          css gradient as background
        </h1>
        <div>
          <ol className='marker:text-white'>
            <li className='lowercase first-letter:capitalize'>
              <span>
                Add radial gradients from {''}
                <Link
                  href={'https://csshero.org/mesher/'}
                  className='text-blue-900'
                >
                  https://csshero.org/mesher/
                </Link>{' '}
                in tailwind.config.js as background image.
              </span>
              <Image alt='' src={capture1} />
            </li>
            <li>Add hsl color and background image in html tag</li>

            <pre className='text-xs'>{`<main className='h-screen w-screen bg-[hsla(234,89%,9%,1)] 
            bg-radial_gradient bg-contain py-10'>`}</pre>

            <li className='lowercase first-letter:capitalize'>
              Add width and height.{' '}
            </li>
          </ol>
        </div>
      </div>
    </main>
  )
}
