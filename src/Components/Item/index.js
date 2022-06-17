import { Container, Image, Tracker, Button, Text, ImageWrapper } from './styles/item'
import React from 'react'

export default function Item({children}) {
    return <Container>{children}</Container>
}

Item.Text = function ItemText({txt}) {
    return <Text>{txt}</Text>
}

Item.ImageWrapper = function ItemImageWrapper({children}) {
    return <ImageWrapper>{children}</ImageWrapper>
}

Item.Image = function ItemImage({src}) {
    return <Image src={src} />
}

Item.Tracker = function ItemTracker({children}) {
    return <Tracker>{children}</Tracker>
}

Item.Button = function ItemButton() {
    return <Button></Button>
}