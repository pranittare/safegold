import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { detailsProps } from '@/constants/types'
import certificate from '../../assets/certificate.png'
import truck from '../../assets/truck.png'
import priceTag from '../../assets/price-tag.png'
import Image from 'next/image'

const dummy: detailsProps[] = [
    { description: '24k Guaranteed Quality Certified', icon: 'some icon' },
    { description: 'Free Insurance on Delivery', icon: 'some icon' },
    { description: 'Zero negative weight tolarance', icon: 'some icon' },
    { description: 'Order Tracking & Support', icon: 'some icon' }
]
const dummy2: detailsProps[] = [
    { description: '24k Guaranteed Quality Certified', icon: certificate },
    { description: '100% Secure with Delivery Insurance', icon: truck },
    { description: 'Best Prices in the market', icon: priceTag },
]

const Guarantee = ({smallSize}:{smallSize:boolean}) => {
    if (smallSize) {
        return <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
        {dummy2.map(item => {
            return <Flex justifyContent={'center'} direction={'column'} alignItems={'center'} key={item.description} maxWidth={'150px'} >
                <Box height={'60px'} width={'60px'}><Image src={item.icon} alt={item.description} /></Box>
                <Text textAlign={'center'}>{item.description}</Text>
            </Flex>
        })}
    </Flex>
    }
    return (
        <Flex width={'100%'} my={'36px'} backgroundColor={'lightyellow'} alignItems={'center'} justifyContent={'space-around'} flexWrap={'wrap'}>
            <Text textAlign={'center'} maxWidth={'200px'} fontSize={'3xl'}>Safe Gold Guarantee</Text>
            <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                {dummy.map(item => {
                    return <Box key={item.description} maxWidth={'150px'}>
                        <Text>{item.icon}</Text>
                        <Text>{item.description}</Text>
                    </Box>
                })}
            </Flex>
        </Flex>
    )
}
export default Guarantee
