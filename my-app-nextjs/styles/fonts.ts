import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const Noto = localFont({ src: './fonts/NotoSerifDisplay-VariableFont.ttf' })
const NotoItalic = localFont({ src: './fonts/NotoSerifDisplay-Italic-VariableFont.ttf' })
const Karla = localFont({ src: './fonts/Karla.ttf' })
const KarlaItalic = localFont({ src: './fonts/Karla-Italic.ttf' })
export {Noto, NotoItalic, Karla, KarlaItalic};