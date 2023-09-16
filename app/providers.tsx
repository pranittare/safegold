'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, Show } from '@chakra-ui/react'
import { AuthProvider, Props } from './AuthProvider';




export function Providers({
  children
}: Props) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <AuthProvider>
          <Header />
          <Show above='501px'>
            <Box paddingX={'32px'} mb={'24px'}>
              {children}
            </Box>
          </Show>
          <Show below='500px'>
            <Box mb={'24px'}>
              {children}
            </Box>
          </Show>
          <Footer />
        </AuthProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}