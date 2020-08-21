import styled from 'styled-components'

export const ImageRifa = styled.img`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 5px;
    border: 1px solid black;
    width: 180px;
    height: 180px;
`

export const ContainerImage = styled.div `
    width: 200px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    margin-top: 20px;
`

                     