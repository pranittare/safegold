import { Box, Button, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import SingleProduct from './SingleProduct'
import Guarantee from '../ads/guarantee'

type SingleProductProps = {
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
            <InputGroup maxWidth={'400px'} backgroundColor={'#edececc9'} height={'20px'} flexWrap={'wrap'}>
            <InputLeftElement pointerEvents={'none'} p={'4px'}>
                <Text>Icon</Text>
            </InputLeftElement>
            <Input placeholder='Enter your pincode'/>
            <InputRightElement flexWrap={'wrap'} width={'auto'}>
                <Button variant={'ghost'} colorScheme='teal'>Check availability</Button>
            </InputRightElement>
            </InputGroup>
        </Flex>
        <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
            {dummy.map((item, index:number) => {
                if (index === 3) {
                  return  <Guarantee key={'break'}/>
                }
                return <SingleProduct name={item.name} offer={item.offer} amount={item.amount} coinIcon={item.coinIcon} maxAmount={item.maxAmount} key={item.id}/>
            })}
        </Flex>
    </Box>
  )
}
