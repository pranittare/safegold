"use client"
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { detailsProps } from '@/constants/types'
import certificate from '../../assets/certificate.png'
import priceTag from '../../assets/price-tag.png'
import truck from '../../assets/truck.png'
import Image from 'next/image'


const details: detailsProps[] = [
    {description: '24k Pure Gold Quality Guaranteed', icon: certificate},
    {description: '100% Secure with Delivery Insurance', icon: truck},
    {description: 'Best Prices in the market', icon: priceTag },
]


export default function HeaderBanner() {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
        <Flex direction={'column'} gap={'36px'}>
        <Text fontSize={'4xl'} fontWeight={'bold'} maxWidth={'500px'}>Get 24k Gold delivered to your doorstep</Text>
        {/* Inner Add Description */}
        <Flex gap={'24px'} alignItems={'center'} flexWrap={'wrap'}>
            {details.map(item => {
                return <Box key={item.description} textAlign={'center'}>
                    <Image src={item.icon} alt='icon' height={'50'} width={'50'} 
                    style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '16px', paddingBottom: '16px'}}/>
                    <Text>{item.description.substring(0, item.description.lastIndexOf(" "))}</Text>
                    <Text maxWidth={'190px'} wordBreak={'break-word'}>{item.description.split(" ").pop()}</Text>
                </Box>
            })}
        </Flex>
        </Flex>
        <Text fontSize={'5xl'}>No Image available</Text>
    </Flex>
  )
}
