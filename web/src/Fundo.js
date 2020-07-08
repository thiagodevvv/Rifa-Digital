import React,{useState} from 'react'
import styled from 'styled-components'


const Fundo = styled.body `
    width: 200vh;
    height: 100vh;
    background: rgb(11,11,11);
    background: linear-gradient(90deg, rgba(11,11,11,1) 42%, rgba(240,86,8,1) 60%, rgba(232,78,12,1) 100%);
`



function Index () {


  const uploadFiles = 'tester'

  const [teste, setTeste] = useState([])

  const click = () => {
    setTeste([...teste, {
      id: 0,
      value: uploadFiles
    }])

    console.log(teste)
  }

    return (
      <Fundo>
        <button onClick={click}>Clique</button>
        <ul>
          {teste.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
    
      </Fundo>
     
        
    )
}

export default Index