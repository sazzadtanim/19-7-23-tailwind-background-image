import Image from 'next/image'
import capture1 from '@png/capture.png'

export default function Home() {
  return (
    <main className='h-screen w-screen bg-my_bg bg-contain py-10'>
      <div className='prose mx-auto px-2  text-white'>
        <h1 className='mx-auto py-10 text-center font-mono capitalize text-white lg:whitespace-nowrap'>
          Svg pattern as background
        </h1>
        <div>
          <ol className='marker:text-white'>
            <li>
              <span>
                Add svg in tailwind.config.js as background image.
                <span className='text-red-500'>
                  {' '}
                  Be careful about the image path.
                </span>
              </span>
              <Image alt='' src={capture1} />
            </li>

            <li>Add width and height. </li>
            <li>Add bg-my_bg in className. </li>
          </ol>
        </div>
        <pre>{`  <main className='h-screen w-screen bg-my_bg bg-contain py-10'>`}</pre>
      </div>
    </main>
  )
}
