'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Header/>
        <Box paddingX={'32px'} mb={'24px'}>
        {children}
        </Box>
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  )
}