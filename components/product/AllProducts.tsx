import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './ProductCard'
import Guarantee from '../ads/guarantee'
import Pincode from '../pincode'

interface SingleProductProps {
    offer: string, 
    coinIcon: string,
    name: string,
    maxAmount: number,
    amount: number,
    id: number 
}

const dummy: SingleProductProps[] = [
    {
        id: 1,
        offer: 'akshay trithiya offer',
        coinIcon: 'some icon',
        name: 'some name',
        maxAmount: 3825.31,
        amount: 3525.31,
    },
    {   id:2,
        offer: 'akshay trithiya offer',
        coinIcon: 'some icon',
        name: 'some name',
        maxAmount: 3825.31,
        amount: 3525.31,
    },
    {   
        id:3,
        offer: '',
        coinIcon: 'some icon',
        name: 'some name',
        maxAmount: 3825.31,
        amount: 3525.31,
    },
    {
        id: 6,
        offer: 'akshay trithiya offer',
        coinIcon: 'some icon',
        name: 'some name',
        maxAmount: 3825.31,
        amount: 3525.31,
    },
    {   id:4,
        offer: 'akshay trithiya offer',
        coinIcon: 'some icon',
        name: 'some name',
        maxAmount: 3825.31,
        amount: 3525.31,
    },
    {   
        id:5,
        offer: '',
        coinIcon: 'some icon',
        name: 'some name',
        maxAmount: 3825.31,
        amount: 3525.31,
    },
]

export default function AllProducts() {
  return (
    <Box>
        <Flex justifyContent={'space-between'} my={'36px'} flexWrap={'wrap'}>
            <Text fontSize={'2xl'} fontWeight={'bold'}>All Products</Text>
            <Pincode />
        </Flex>
        <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
            {dummy.map((item, index:number) => {
                if (index === 3) {
                  return  <Guarantee key={'break'} smallSize={false}/>
                }
                return <ProductCard data={item} key={item.id}/>
            })}
        </Flex>
    </Box>
  )
}
