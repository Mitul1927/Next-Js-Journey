import React from 'react'
import {Inter} from 'next/font/google';

const inter = Inter({
    subsets:['latin'],
    weight:['400']
})
const Fonts = () => {
  return (
    <div className={inter.className}>Fonts</div>
  )
}

export default Fonts