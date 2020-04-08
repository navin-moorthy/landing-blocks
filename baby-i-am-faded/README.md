# `baby-i-am-faded`

Animates react components when in view, uses amotion for the animations code, completely tree shakable

## Features

-   🏷 **TypeScript support** - It is written in TypeScript to make it easier and faster to use the library
-   🍃 **Lightweight** - Very little footprint on your project and no other dependencies required
-   ⚙️ **Uses native APIs** - Intersection Observer and CSS Animations are now supported by all major browsers
-   🚀 **Fast** - Buttery smooth experience thanks to the use of native asynchronous APIs and hardware acceleration
-   🌳 **Tree-shakeable** - Only the parts you use will be included in your final bundle

## Demo

You can find a demo website [here](https://react-awesome-reveal.morello.dev).

## Install

`yarn add baby-i-am-faded @emotion/core`

## Usage

```tsx
import { Faded } from 'baby-i-am-faded'

export const App = () => (
    <Faded damping={0.8}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
    </Faded>
)
```

## With custom animation

```tsx
import { wobble } from 'baby-i-am-faded/animations' // here are all the animate.css animaitons

export const WithWobble = () => (
    // @ts-ignore
    <Faded animation={wobble}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
    </Faded>
)
```