import '../styles/globals.css'
// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`

const myFont = localFont({src: '../font/LPMQ-Isep-Misbah/LPMQ-Isep-Misbah.woff2'})

export default function App({ Component, pageProps }) {
  return ( 
  <>
    <style jsx global>{`
        :root{
          --arabicFont: ${myFont.style.fontFamily};
        `}
    </style>
  
  <Component {...pageProps} />
 </>
  )
}
