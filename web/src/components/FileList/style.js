import styled from 'styled-components'


export const Container = styled.ul `
    margin-top: 20px;
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        & + li {
        margin-top: 15px;
    }
    }

   
`

export const FileInfo = styled.div `
    display: flex;
    align-items: center;
    
    div {
        display: flex;
        flex-direction: row;

        span {
        font-size: 12px;
        color: #999;
        margin-top: 5px;
        
        button {
            border: 0;
            background: transparent;
            color: red;
            margin-left: 5px;
            cursor: pointer;
        }
        }
    }

    
`

export const Preview = styled.div `
    width: 56px;
    height: 56px;
    border-radius: 5px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%; 
    margin-right: 10px;
    border: 1px solid black;
`

export const Icons = styled.div `
    margin-left: 30px;
    display: flex;
    flex-direction: row;
`