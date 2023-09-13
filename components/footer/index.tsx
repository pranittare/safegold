import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/safegold-logo.svg'
import Image from 'next/image'
import { footer } from '@/constants/footer'

export default function Footer() {
  return (
    <Box backgroundColor={'#ccc'} p={'24px'}>
        <Flex justifyContent={'space-around'} >
            <Box>
            <Image src={logo} alt='logo'/>
            <Text maxWidth={'350px'}>In publishing and graphic design,  a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</Text>
            </Box>
            <Box>
                <Flex flexWrap={'wrap'} direction={'column'} gap={'24px'} maxHeight={'120px'} justifyContent={'space-between'} maxWidth={'400px'}>
                {footer.map(item => {
                    return <Text key={item} fontWeight={'bold'} mx={'36px'}>{item}</Text>
                })}

                </Flex>
            </Box>
            <Box>
                <Flex direction={'column'} gap={'24px'} maxWidth={'430px'} flexWrap={'wrap'}>
                    <Text color='teal'>888 100 888</Text>
                    <Text color='teal'>care@safegold.in</Text>
                    <Text color='teal'>Birla Centurion, Century Mills, P.B Marg, Worli, Mumbai - 400030</Text>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}
