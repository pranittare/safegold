import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const dummy = [
  'SafeGold coins are set in 24 Karat Yellow Gold',
  'Guaranteed weight and purity',
  'Specially manufactured in state of the art facilities',
  'independent assay certification with zero negative tolarance for weight and purity',
  'Sealed in international quality packaging'
]

type tableDataProps = {
  name: string;
  value: string;
}


export default function Description({weight}:{weight:string}) {
  const tableData: tableDataProps[] = [
    { name: 'Material', value: 'Fine Gold' },
    { name: 'Gold Purity', value: '24Karat, 99.5% pure gold' },
    { name: 'Weight', value: weight },
    { name: 'Quality', value: 'Independently assay certified &zero negative weight tolarance' },
  ]
  return (
    <Box my={'16px'}>
      <Text fontSize={'large'} my={'8px'} fontWeight={'bold'}>Description</Text>
      <Flex direction={'column'} gap={'16px'} pl={'18px'}>
        {dummy.map(item => {
          return <Text className='marker' key={item}>{item}</Text>
        })}
      </Flex>
      <TableContainer>
        <Table>
          <Tbody>
            {tableData.map(item => {
              return <Tr key={item.name}>
                <Td width={'200px'}>{item.name}</Td>
                <Td>:</Td>
                <Td fontWeight={'bold'}>{item.value}</Td>
              </Tr>
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
