'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, Show } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Header/>
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
      </ChakraProvider>
    </CacheProvider>
  )
}