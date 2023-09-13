import { Box } from '@chakra-ui/react'
import React from 'react'
import gold10gm from '../../assets/10gm_bar_9999_front.jpeg';
import gold5gm from '../../assets/5gm_coin_999_front.jpeg';
import Image from 'next/image';

export default function ThreeImages() {
  return (
    <Box>
        <Box height={'200px'} position={'relative'} right={'10px'}>
        <Image src={gold10gm} height={'200'}  alt='10gm'/>
        </Box>
        <Box height={'100px'} position={'relative'} top={'-73px'} left={'90px'}>
        <Image src={gold5gm}  height={'100'} alt='5gm'/>
        </Box>
    </Box>
  )
}
