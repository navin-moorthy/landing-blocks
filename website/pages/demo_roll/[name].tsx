import {
    LandingProvider,
    Section,
    NavBar,
    PageContainer,
    Box,
    Stack,
} from 'landing-blocks/src'

import { HeadingLogoIcon } from '../_app'
import { headingNavLinks } from '../../constants'
import { BuyDemosButton } from '..'
import Iframe from 'react-iframe'
import { useRouter } from 'next/router'

export default function Page({}) {
    const { query } = useRouter()
    const name = query.name
    return (
        <LandingProvider
            bg='gray.800'
            pageWidth='100%'
            spacing='0px'
            primary='white'
            p='20px'
            h='100vh'
        >
            <NavBar
                dark
                bg='gray.800'
                m='0px'
                logo={<BuyDemosButton w='auto' />}
                navs={headingNavLinks}
                pb='20px'
                borderBottomWidth='1px'
            />

            <Stack
                mx='10px'
                overflow='hidden'
                borderRadius='lg'
                bg='white'
                h='100%'
                align='flex-start'
            >
                <Iframe
                    url={`/demos/${name}`}
                    width='100%'
                    height='100%'
                    // display='initial'
                    position='relative'
                />
            </Stack>
        </LandingProvider>
    )
}