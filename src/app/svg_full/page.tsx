import Image from 'next/image'
import bg from '@svg/blurry-gradient.svg'
import bg2 from '@svg/stacked-waves.svg'

export default function Home() {
  return (
    <main className='py-10'>
      {/* background */}
      <Image
        alt='background'
        src={bg2}
        className='absolute top-0 -z-10 h-full w-full object-cover'
      />
      <div className='prose mx-auto text-white'>
        <h1 className='py-10 text-center font-mono capitalize text-white lg:whitespace-nowrap'>
          Single svg as background
        </h1>
        <div>
          <ol className='list-decimal marker:text-white'>
            <li>Add svg in nextjs image component.</li>
            <li>
              In image component add negative z index to make it background
            </li>
            <li>
              In image component use object-cover, object-contain etc object
              property.
            </li>
            <li>Give image component a height to use object-cover</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
