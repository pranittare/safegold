"use client"
import Guarantee from '@/components/ads/guarantee'
import Pincode from '@/components/pincode'
import Description from '@/components/product/Description'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

const dummy = ['1', '2', '3', '4']
const star = ['*', '*', '*', '*', '*']

export default function Dynamic() {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [startSelected, setStarSelected] = useState<number>(0);
    return (
        <Box>
            <Link href={'/'}>{`< Back to All Products`}</Link>
            <Flex justifyContent={'space-between'}>
                <Box width={'100%'} padding={'24px'}>
                    <Text>{dummy[selectedImage]}</Text>
                    <Flex justifyContent={'space-between'}>
                        {dummy.map((item, index: number) => {
                            return <Text border={index === selectedImage ? '1px solid blue' : '0px'} padding={'8px'} key={item} onClick={() => setSelectedImage(index)}>{item}</Text>
                        })}
                    </Flex>
                </Box>
                <Box width={'100%'} padding={'24px'}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} color='teal'>Title</Text>
                    <Flex>
                        {star.map((item, index:number) => {
                            return <Text key={index} color={startSelected >= index ? 'goldenrod': 'white'} fontSize={'3xl'} borderColor={'goldenrod'} fontWeight={'bold'} onClick={()=> setStarSelected(index)}>{item}</Text>
                        })}
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Text>Minting Charges</Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>Amount</Text>
                    </Flex>
                    <Button colorScheme='teal' my={'36px'}>Buy Now {`->`}</Button>
                    <Box mt={'24px'} mb={'58px'}>
                    <Pincode />

                    </Box>
                    <Box my={'16px'}>
                    <Guarantee smallSize={true}/>

                    </Box>
                    <Description />
                </Box>
            </Flex>
            <Guarantee smallSize={false}/>
        </Box>
    )
}
