import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type SingleProductProps = {
    offer: string, 
    coinIcon: string,
    name: string,
    maxAmount: number,
    amount: number, 
}


export default function SingleProduct({offer, coinIcon, name, maxAmount, amount}: SingleProductProps) {
  return (
    <Box border={'1px solid #ccc'} minWidth={'300px'}>
        <Flex direction={'column'} gap={'16px'}>
         <Badge height={'36px'} maxWidth={'fit-content'} p={offer ? '8px' : '0px'}>{offer}</Badge>
            <Flex direction={'column'} gap={'32px'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
                <Text>{coinIcon}</Text>
                <Text>{name}</Text>
                <Text>{amount}</Text>
                <Flex justifyContent={'space-between'} >
                <Text>{maxAmount}</Text>
                <Text>Save ₹{maxAmount - amount}</Text>

                </Flex>
            </Flex>
            <Button>View Details</Button>
        </Flex>
    </Box>
  )
}
