### Check this project by this [link](https://19-7-23-tailwind-background-image.vercel.app/)

Todo

1.  Add blob(svg) in background =>done
    > blob copied from [this site](https://fffuel.co/bbblurry/) 
2.  I want to make something like class variance

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
