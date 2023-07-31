import Image from 'next/image'
import bg2 from '@svg/blurry-gradient.svg'
import pattern from '@svg/pattern3.svg'

export default function Home() {
  return (
    <main className='h-screen bg-my_pattern bg-cover py-10'>
      {/* background */}

      <Image
        alt='background'
        src={bg2}
        className='absolute top-0 h-full w-full object-cover mix-blend-hue'
      />
      <div className='prose mx-auto px-2 text-white'>
        <h1 className='py-10 text-center font-mono lowercase text-white first-letter:capitalize lg:whitespace-nowrap'>
          blend svg as background
        </h1>
        <h2 className='text-red-600'>Flicker issue may be seen</h2>
        <div>
          <ol className='list-decimal marker:text-white'>
            <li className='lowercase first-letter:capitalize'>
              top svg pattern should be used like SVG PATTERN method
            </li>

            <li className='lowercase first-letter:capitalize'>
              Add svg in nextjs image component.
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
