import React from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import {
    Hero,
    Heading,
    LandingProvider,
    SubHeading,
    Divider,
    Col,
    Feature,
    HowItWorks,
    FeaturesList,
    NavBar,
    Footer,
    TestimonialsLogos,
    SectionTitle,
    PageContainer,
} from 'react-landing/src'

import { Box, Stack, Image, Button, Flex, Text } from '@chakra-ui/core'
import * as landingCards from '../../svgs/landingCards'
import { IndexCardsPaths } from '../../constants'

export const LaindgCardsLinks = ({ ...rest }) => {
    return (
        <PageContainer>
            <Stack
                width='auto'
                justify={['center', null, 'flex-start']}
                alignSelf='center'
                flexDirection='row'
                flexWrap='wrap'
                spacing='40px'
                flexGrow={0}
                flex='0 0 auto'
                {...rest}
            >
                {IndexCardsPaths.map((k) => {
                    const { icon, path, title } = k
                    return (
                        <Box key={k.path}>
                            <NextLink href={path}>
                                <Button
                                    borderRadius='8px'
                                    p='20px'
                                    mx='20px'
                                    h='auto'
                                    variant='ghost'
                                >
                                    <Stack spacing='20px'>
                                        <Box
                                            // border='1px solid'
                                            borderColor='gray.200'
                                            borderRadius='8px'
                                            width='300px'
                                            shadow='md'
                                            as={icon}
                                        />
                                        <Text>{title}</Text>
                                    </Stack>
                                </Button>
                            </NextLink>
                        </Box>
                    )
                })}
            </Stack>
        </PageContainer>
    )
}

const Page = () => (
    <LandingProvider primary='white'>
        <Stack spacing='60px' bg='#323452' pb='100px'>
            <NavBar
                dark
                logo={
                    <Stack align='center' direction='row' spacing='20px'>
                        <Image width='30px' src='/quovery/logo.png' />
                        <Box fontWeight='medium' fontSize='20px'>
                            Quovery
                        </Box>
                    </Stack>
                }
                navs={[
                    <a>Home</a>,
                    <a>Pricing</a>,
                    <a>Community</a>,
                    <a>Enterprise</a>,
                    <a>Blog</a>,
                    <Button px='10px'>Sign up</Button>,
                ]}
            />
            <Hero
                dark
                bullet='SUPERPOWERS FOR DEVELOPER'
                heading='Deploy complex application, seamlessly'
                subhead='Just push your code, we handle the rest'
                image={<img width='600px' src='/quovery/hero.png' />}
                cta='DEPLOY MY APPLICATION'
                fingerprint='Qovery combines the power of Kubernetes, the reliability of AWS and the simplicity of Heroku to augment the developer experience. Give a try now !'
            />
            <Divider heading='DEVELOPERS FROM GREAT COMPANIES TRUST US' dark />
            <TestimonialsLogos
                testimonials={[
                    <img src='quovery/google.png' />,
                    <img src='quovery/datadog.png' />,
                    <img src='quovery/itiviti.png' />,
                    <img src='quovery/redhat.png' />,
                    <img src='quovery/criteol.png' />,
                ]}
            />
        </Stack>
        <SectionTitle
            heading='Deploy your application with ease'
            subhead='Deploying an application with Qovery is as simple as pushing code with git'
            image={null}
        />
        <LaindgCardsLinks alignSelf='center' />
        <Footer
            businessName='Quovery'
            bg='#F8F8FF'
            columns={{
                Developers: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
                Company: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
                Product: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
            }}
        />
    </LandingProvider>
)

export default Page
