import { Box, Flex, Show, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/safegold-logo.svg'
import Image from 'next/image'
import { footer } from '@/constants/footer'

export default function Footer() {
    return (
        <Box backgroundColor={'#e1eef3b3'} p={'24px'}>
            <br />
            <Flex justifyContent={'space-around'} flexWrap={'wrap'}>
                <Box>
                    <Image src={logo} alt='logo' />
                    <Text mt={'8px'} maxWidth={'350px'}>In publishing and graphic design,  a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</Text>
                </Box>
                <Flex flexWrap={'wrap'} direction={'column'} gap={'24px'} maxHeight={'120px'} justifyContent={'space-between'} maxWidth={'400px'} width={'100%'} my={'16px'}>
                    <Show above='501px'>
                    {footer.map(item => {
                        return <Text key={item} fontWeight={'bold'} px={'36px'}>{item}</Text>
                    })}
                    </Show>
                    <Show below='500px'>
                    {footer.map(item => {
                        return <Text key={item} wordBreak={'break-word'} maxWidth={'200px'} fontWeight={'bold'}>{item}</Text>
                    })}
                    </Show>

                </Flex>
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
