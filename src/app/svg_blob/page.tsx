import blob from '@svg/blob1.svg'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'css gradient as background',
  description: 'Nextjs tailwindcss bacground image implementations',
  creator: 'SazzadTanim',
}

export default function Home() {
  return (
    <main className='absolute inset-0 -z-20 h-screen w-screen bg-[hsla(0,100%,50%,1)] bg-radial_gradient bg-cover bg-center pt-10'>
      <div className='prose mx-auto px-2 pt-10 text-white'>
        <h1 className='relative mx-auto py-10 text-center font-mono lowercase text-[] first-letter:capitalize lg:whitespace-nowrap'>
          svg blob in background
          <Image
            alt=''
            src={blob}
            className='absolute -left-44 -top-20 -z-10 scale-150'
          />
        </h1>
        <div>
          <ol className='marker:text-white'>
            <li className='lowercase first-letter:capitalize'>
              add svg blob in the image component.
            </li>
            <li>make it absolute.</li>

            <pre className='text-xs'>{` <h1 className='relative mx-auto py-10 text-center font-mono lowercase text-[] first-letter:capitalize lg:whitespace-nowrap'>
          svg blob in background
          <Image
            alt=''
            src={blob}
            className='absolute -left-44 -top-20 scale-150'
          />
        </h1>`}</pre>
          </ol>
        </div>
      </div>
    </main>
  )
}
