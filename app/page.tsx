'use client'
import { Box } from '@chakra-ui/react'
import HeaderBanner from '@/components/ads/HeaderBanner'
import AllProducts from '@/components/product/AllProducts'

export default function Home() {

  return (<><Box py={'36px'}>
    <HeaderBanner />
    </Box>
    <Box>
      <AllProducts />
    </Box>
    </>
  )
}
