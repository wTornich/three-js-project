
import React from 'react'
import { BsSearch, BsBag } from "react-icons/bs"
import { Container, ContainerIcons, Icon, Logo } from './style'
import { SubTitle, Title } from '../Description/style'

export default function Header() {
    return (
        <Container>
            <Logo src="https://www.adobe.com/br/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"/>
            <ContainerIcons>
                <Icon><BsSearch size={25} color='white' /></Icon>
                <Icon><BsBag size={25} color='white' /></Icon>
            </ContainerIcons>
        </Container>

    )
}
