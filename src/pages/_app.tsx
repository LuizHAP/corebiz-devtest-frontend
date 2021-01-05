import React from 'react'

import type { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'

import GlobalStyle from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

import 'react-toastify/dist/ReactToastify.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
      />
    </ThemeProvider>
  )
}

export default MyApp
