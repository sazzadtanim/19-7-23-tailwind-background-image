'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const myNavs: NavBarInterface[] = [
    { name: 'svg pattern', url: '/' },
    { name: 'svg full', url: '/svg_full' },
    { name: 'png full', url: '/png_full' },
    { name: 'css gradient', url: '/css_gradient' },
    { name: 'svg blob', url: '/svg_blob' },
    { name: 'svg blend', url: '/svg_blend' },
  ]
  const currentPath = usePathname()
  return (
    <div className='z-20 flex flex-wrap items-center justify-center bg-white/10 py-5 backdrop-blur-sm'>
      {myNavs.map((nav, index) => (
        <NavBar
          key={index}
          index={index}
          name={nav.name}
          url={nav.url}
          intent={currentPath === nav.url ? 'active' : 'inactive'}
          size='sm'
        />
      ))}
    </div>
  )
}

interface NavBarInterface {
  name: string
  url: string
}

function NavBar(
  props: NavBarInterface & {
    index: number
    intent: 'active' | 'inactive'
    size: 'sm' | 'md' | 'lg'
  }
) {
  const linkStyles = {
    base: 'button relative rounded-full px-5 py-2 lowercase duration-300 first-letter:capitalize hover:underline hover:decoration-blue-600 hover:decoration-2 underline-offset-8 whitespace-nowrap',
    active: 'underline decoration-green-400 decoration-2',
    inactive: '',
    sm: '',
    md: '',
    lg: '',
  }
  return (
    <Link
      key={props.index}
      className={`${linkStyles[props.intent]} ${linkStyles['base']} ${
        linkStyles[props.size]
      }`}
      href={props.url}
    >
      <span className='z-10 text-white'>{props.name}</span>
    </Link>
  )
}

//i want my type to be
type mytype = { intent: 'primary' | 'secondary'; size: 'sm' | 'md' | 'lg' }

// i want the css in object form like
const cssStyles = {
  intent: {
    primary: '',
    secondary: '',
  },
  size: {
    sm: '',
    md: '',
    lg: '',
  },
}
// and then I want to implement the css like
{
  /* <div className={cssStyles}></div> */
}

// my first target to create type of cssStyles from mytype
type NewTypeKeys = keyof mytype

type test1=mytype['intent']

//   ^?

type test2=mytype['size']

//   ^?

type test3= mytype[keyof mytype]

//   ^?


type NewType = { [K in NewTypeKeys]: string } // 50% done
//     ^?

type NewType2 = { [K in NewTypeKeys]: mytype['intent'] }

//    ^?
