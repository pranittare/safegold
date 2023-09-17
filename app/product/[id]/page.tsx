"use client"
import { db, storage } from '@/app/config'
import Guarantee from '@/components/ads/guarantee'
import Pincode from '@/components/pincode'
import { SingleProductProps } from '@/components/product/AllProducts'
import Description from '@/components/product/Description'
import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { doc, getDoc } from 'firebase/firestore'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const star = ['*', '*', '*', '*', '*']

export default function Dynamic() {
    const router = useParams();
    const [allImages, setAllImages] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [startSelected, setStarSelected] = useState<number>(5);
    const [data, setData] = useState<SingleProductProps | null>(null);
    const docRef = doc(db, `products/${router.id}`);
    const [isMobile] = useMediaQuery('(min-width: 500px)')

    const getAllImagesList = (location: string) => {
        const storageRef = ref(storage, `/${location}`);
        listAll(storageRef).then(res => {
            res.items.forEach(async (itemRef, index) => {
                // All the items under listRef.
                const url = await getUrls(itemRef.fullPath)
                setAllImages((prev)=> [...prev, url])
            });
        })
    }

    const getUrls = async(singleRef:string) => {
        const imageurl = await getDownloadURL(ref(storage, singleRef))
        return imageurl
    }
    useEffect(() => {
        setAllImages([])
        getDoc(docRef).then((res:any) => {
            if (res.exists()) {
                getAllImagesList(res.data().location)
                setData(res.data())
            } else {
                console.log('something went wrong')
            }
        })

    }, [])

    return (
        <Box padding={'8px'}>
            <Link href={'/'}><span className='color-golden backarrow'>{`<`}</span>Back to All Products</Link>
            <Flex justifyContent={'space-between'} direction={isMobile ? 'row' :'column'}>
               <Flex direction={'column'} gap={'36px'}  width={'100%'} padding={'16px'}flexWrap={'wrap'}>
                <Box height={'300px'} marginLeft={'auto'} marginRight={'auto'}>
                    <Image src={allImages[selectedImage]} alt='img' width={'200'} height={'200'} />

                </Box>
                    <Flex justifyContent={'space-between'} >
                        {allImages.map((item, index: number) => {
                            return <Box cursor={'pointer'} border={index === selectedImage ? '1px solid blue' : '1px solid #ccc'} padding={'8px'} key={item} onClick={() => setSelectedImage(index)}>
                                <Image width={'40'} height={'40'} src={item} alt={index + 'alt'}/>
                                </Box>
                        })}
                    </Flex>
                </Flex>
                
                <Box width={'100%'} padding={'24px'}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} color='teal'>{data?.name}</Text>
                    <Flex>
                        {star.map((item, index: number) => {
                            return <Text key={index} color={startSelected >= index ? 'goldenrod' : 'white'} fontSize={'3xl'} borderColor={'goldenrod'} fontWeight={'bold'} _hover={{color: 'goldenrod'}} onClick={() => setStarSelected(index)}>{item}</Text>
                        })}
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Text>Minting Charges</Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>399</Text>
                    </Flex>
                    <Button colorScheme='teal' my={'36px'}>Buy Now {`->`}</Button>
                    <Box mt={'24px'} mb={'58px'}>
                        <Pincode />
                    </Box>
                    <Box my={'16px'}>
                        <Guarantee smallSize={true} />

                    </Box>
                    <Description weight={data?.location || ""}/>
                </Box>
            </Flex>
            <Guarantee smallSize={false} />
        </Box>
    )
}
