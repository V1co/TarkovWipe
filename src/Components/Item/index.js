import { Container, Name, Image, Quantity } from './styles/product'

export default function Item() {
    <Container></Container>
}

Item.Name = function ItemName() {
    return <Name></Name>
}

Item.Nutrient = function ItemImage() {
    return <Image></Image>
}

Item.Nutrient = function ItemQuantity() {
    return <Quantity></Quantity>
}