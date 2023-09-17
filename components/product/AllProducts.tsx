import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Guarantee from '../ads/guarantee'
import Pincode from '../pincode'
import { db } from '@/app/config'
import { collection, getDocs } from 'firebase/firestore'

export interface SingleProductProps {
    offer: string,
    coinIcon: string,
    name: string,
    location: string,
    maxAmount: number,
    amount: number,
    id: string
}

const AllProducts = () => {
    const [data, setData] = useState<SingleProductProps[]>([]);
    const [isMobile] = useMediaQuery('(max-width: 500px)')

    useEffect(() => {
        getDocs(collection(db, "products")).then(res => {
            const data1: any = []
            res.forEach((doc) => {
                let x: any = { ...doc.data() }
                x.id = doc.id
                data1.push(x)
            });
            setData(data1)
        })
    }, [])
    return (
        <Box maxWidth={'1200px'}>
            <Flex justifyContent={isMobile ? 'center' : 'space-between'} my={'36px'} flexWrap={'wrap'}>
                <Text fontSize={'2xl'} fontWeight={'bold'}>All Products</Text>
                <Pincode />
            </Flex>
            <Flex justifyContent={isMobile ? 'center' : 'space-between'} flexWrap={'wrap'} gap={'36px'}>
                {data.map((item, index: number) => {
                    if (index === 3) {
                        return <Guarantee key={'break'} smallSize={false} />
                    }
                    return <ProductCard data={item} key={item.id} />
                })}
            </Flex>
        </Box>
    )
}
export default AllProducts