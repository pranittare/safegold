"use client"
import { Avatar, Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Show } from '@chakra-ui/react'
import React, { useState } from 'react'
import { header } from '@/constants/header'
import Link from 'next/link'
import logo from '../../assets/safegold-logo.svg'
import userLogo from '../../assets/user.svg'
import Image from 'next/image'
import Login from '../auth/login'
import { useAuth } from '../../app/AuthProvider'
import { signOut } from 'firebase/auth'
import { auth } from '@/app/config'

export default function Header() {
  const [active, setActive] = useState<Boolean | Number>(false)
  const { user } = useAuth()
  return (
    <Flex justifyContent={'space-evenly'} alignItems={'center'} height={'70px'}>
      <Link href={'/'}><Image src={logo} alt='logo' /></Link>
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
          {user ? <Flex alignItems={'center'} gap={'8px'}>
            <Avatar size={'sm'} 
            icon={<Box border={'1px solid goldenrod'} borderRadius={'full'} height={'30px'} width={'30px'} padding={'1px'}>
              <Image src={userLogo} style={{marginLeft: 'auto', marginRight:'auto'}} alt='user' height={'17'} width={'17'}/> 
              </Box>
            }
            backgroundColor={'white'}
            // src={userLogo}
            />
            <Menu>
              <MenuButton>Test </MenuButton>
              <MenuList>
                <MenuItem onClick={() => signOut(auth)}>Singout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
            :
            <><Login login={true} />
              <Login login={false} />
            </>
          }
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
