import React, { Fragment } from 'react'
import { Image, Flex, Box, Stack, Text, useColorMode } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { Heading } from './Heading'
import { Button } from './Button'
import { Col, Row, Spacer, PageContainer, FloatingElement } from './layout'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'
import { GradientRect } from './decorations'
import { useColor, clone } from './support'
import Color from 'color-js'
import { Bullet } from './Bullet'

export function Hero({
    heading,
    subhead,
    cta,
    image,
    bullet = '',
    animate = true,
    fingerprint = '',
    ...rest
}) {
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 4,
    })
    return (
        <PageContainer {...rest}>
            <Row
                justify='flex-start'
                w='100%'
                flexDir={['column', 'column', 'row']}
                align='center'
                ref={ref}
            >
                <Stack
                    maxW={['none', 'none', image ? '500px' : 'none']}
                    spacing='40px'
                    align={[
                        'center',
                        'center',
                        image ? 'flex-start' : 'center',
                    ]}
                    textAlign={['center', 'center', image ? 'left' : 'center']}
                >
                    <Box>
                        {bullet && <Bullet my='10px'>{bullet}</Bullet>}
                        <Heading
                            as={animated.h1}
                            style={animations[0]}
                            fontSize='46px'
                        >
                            {heading}
                        </Heading>
                    </Box>
                    <SubHeading
                        as={animated.h2}
                        style={animations[1]}
                        fontSize='22px'
                        maxW='700px'
                    >
                        {subhead}
                    </SubHeading>
                    <Stack
                        as={animated.div}
                        style={animations[2]}
                        align={['center', 'center', 'flex-start']}
                    >
                        <Box>{clone(cta)}</Box>
                        {/* <Button
                            px='40px'
                            bg='primary'
                            d='block'
                            width='auto'
                        ></Button> */}
                        <Box opacity={0.8} fontSize='13px' lineHeight='26px'>
                            {fingerprint}
                        </Box>
                    </Stack>
                </Stack>
                {image && (
                    <Fragment>
                        <Box ml='40px' mt='40px' flex='1' />
                        <Col
                            as={animated.div}
                            style={animations[3]}
                            align='center'
                            // h='100%'
                        >
                            {image}
                        </Col>
                    </Fragment>
                )}
            </Row>
        </PageContainer>
    )
}