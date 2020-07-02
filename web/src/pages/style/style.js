import styled, { css } from 'styled-components'

const dragActive = css `
    border-color: rgba(255,174,93);
`

const dragReject = css `
    border-color: red;
`

export const DropContainer = styled.div`
    border: 1px dashed black;
    cursor: pointer;
    width: 480px;
    height: 50px;
    border-radius: 10px;

    transition: height 0.2s ease;
    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`


const messageColors = {
    default: 'black',
    error: 'red',
    success: 'rgb(255,174,93)'
}
export const UploadMessage = styled.p `
    display: flex;
    color: ${props => messageColors[props.type || "default"]}; /* se props.type estiver vazio, coloque default */
    justify-content: center;
    align-items: center;
`