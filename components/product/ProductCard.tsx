"use client"
import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SingleProductProps } from './AllProducts'

interface data {
    data: SingleProductProps
}


export default function ProductCard({data}: data) {
  const router = useRouter()
  const handleViewDetails = () => {
    router.push(`product/${data.id}`)
  }

  return (
    <Box border={'1px solid #ccc'} minWidth={'300px'}>
         <Badge height={'36px'} maxWidth={'fit-content'} p={data.offer ? '8px' : '0px'}>{data.offer}</Badge>
        <Flex direction={'column'} gap={'16px'} padding={'16px'}>
            <Flex direction={'column'} gap={'32px'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
                <Image src={data.coinIcon} alt={data.name} width={'100'} height={'100'}/>
                <Text fontWeight={'bold'}>{data.name}</Text>
                <Text color={'teal'} fontWeight={'bold'}>{data.amount}</Text>
                <Flex justifyContent={'space-between'} width={'180px'}>
                <Text textDecoration={'line-through'}>₹{data.maxAmount}</Text>
                <Text fontStyle={'italic'} color={'teal'} fontWeight={'bold'}>Save ₹{data.maxAmount - data.amount}</Text>

                </Flex>
            </Flex>
            <Button alignSelf={'center'} width={'120px'} onClick={handleViewDetails}>View Details</Button>
        </Flex>
    </Box>
  )
}
