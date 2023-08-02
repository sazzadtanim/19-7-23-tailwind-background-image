import capture from '@png/blurry-gradient.png'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Single png as background',
  description: 'Nextjs tailwindcss bacground image implementations',
}

export default function Home() {
  return (
    <main className=''>
      {/* background */}
      <Image
        alt='background'
        src={capture}
        className='absolute top-0 -z-10 h-full w-full object-cover'
        priority
        sizes='100vw'
      />
      <div className='prose mx-auto px-2 text-white'>
        <h1 className='text-center font-mono lowercase text-white first-letter:capitalize lg:whitespace-nowrap'>
          Single png as background
        </h1>

        <h2 className='text-red-500 '>Quality may not be good</h2>
        <div>
          <ol className='list-decimal marker:text-white'>
            <li className='lowercase first-letter:capitalize'>
              Add png in nextjs image component.
            </li>
            <li className='lowercase first-letter:capitalize'>
              In image component add negative z index to make it background
            </li>
            <li className='lowercase first-letter:capitalize'>
              In image component use object-cover, object-contain etc object
              property.
            </li>
            <li className='lowercase first-letter:capitalize'>
              Give image component widht and height to use object-cover
            </li>
          </ol>
        </div>
        <pre className='text-xs'>
          {`<Image
        alt='background'
        src={bg2}
        className='absolute top-0 -z-10 h-full w-full object-cover'
      />`}
        </pre>
      </div>
    </main>
  )
}
