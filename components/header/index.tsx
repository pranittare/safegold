"use client"
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Show } from '@chakra-ui/react'
import React, { useState } from 'react'
import { header } from '@/constants/header'
import Link from 'next/link'
import logo from '../../assets/safegold-logo.svg'
import Image from 'next/image'

export default function Header() {
  const [active, setActive] = useState<Boolean | Number>(false)
  return (
    <Flex justifyContent={'space-around'} alignItems={'center'} height={'70px'}>
      <Image src={logo} alt='logo'/>
      <Show above='501px'>
      <Flex gap={'24px'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'space-around'}>
        {header.map((item, index: Number) => {
          return <Box key={item.name} borderBottom={active === index ? '1px solid' : 'none'}
            onMouseOver={() => setActive(index)}
            onMouseLeave={() => setActive(false)}
            fontWeight={'500'}
            color={item.name === 'Lease' ? 'goldenrod' : 'black'}
          ><Link href={item.link}>{item.name}</Link></Box>
        })}
        <Button colorScheme='teal' >
          Singup
        </Button>
      </Flex>
      </Show>
      <Show below='500px'>
        <Menu>
          <MenuButton aria-label='Options'>
      Menu
    </MenuButton>
  <MenuList>
     {header.map((item, index: Number) => {
          return <MenuItem key={item.name} borderBottom={active === index ? '1px solid' : 'none'}
            onMouseOver={() => setActive(index)}
            onMouseLeave={() => setActive(false)}
            fontWeight={'500'}
            color={item.name === 'Lease' ? 'goldenrod' : 'black'}
          ><Link href={item.link}>{item.name}</Link></MenuItem>
        })}
  </MenuList>
        </Menu>
      </Show>
    </Flex>
  )
}
