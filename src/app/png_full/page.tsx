import Image from 'next/image'
import capture from '@png/blurry-gradient.png'

export default function Home() {
  return (
    <main className='py-10'>
      {/* background */}
      <Image
        alt='background'
        src={capture}
        className='absolute top-0 -z-10 h-full w-full object-cover'
      />
      <div className='prose mx-auto px-2 text-white'>
        <h1 className='py-10 text-center font-mono capitalize text-white lg:whitespace-nowrap'>
          Single png as background
        </h1>

        <h2 className='text-red-500 '>Quality may not be good</h2>
        <div>
          <ol className='list-decimal marker:text-white'>
            <li>Add png in nextjs image component.</li>
            <li>
              In image component add negative z index to make it background
            </li>
            <li>
              In image component use object-cover, object-contain etc object
              property.
            </li>
            <li>Give image component widht and height to use object-cover</li>
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
