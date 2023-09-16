import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'

export default function Pincode() {
  return (
    <InputGroup maxWidth={'400px'} backgroundColor={'#edececc9'} height={'20px'} flexWrap={'wrap'}>
      <InputLeftElement pointerEvents={'none'} p={'4px'}>
        <Text>Icon</Text>
      </InputLeftElement>
      <Input placeholder='Enter your pincode' />
      <InputRightElement flexWrap={'wrap'} width={'auto'}>
        <Button variant={'ghost'} colorScheme='teal'>Check availability</Button>
      </InputRightElement>
    </InputGroup>
  )
}
