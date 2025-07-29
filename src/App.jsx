import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Container, TodoList, Input, Button, ListItem,Lixeira, Check,Paragrafo } from "./styles.js"




function App() {
 
  const [imputTask, setImputTask] = useState([])
  const [list, setList] = useState([])



  function imputMudou(event) {
    setImputTask(event.target.value)
    return [...list, { id: uuidv4(), conteudo: event.target.value }]
  }
  function clickButton() {
    if (imputTask.length === 0) {
      alert("Digite uma tarefa")
    }else{

    setList([...list, { id: uuidv4(), conteudo: imputTask, finished: false }])
    }
  }
  function finalizarTarefa(id) {
    const newList = list.map(item => {
      if (item.id === id) {
        return { ...item, finished: !item.finished }
      }
      return item
    })
    setList(newList)
  }
  function deletarTarefa(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (

    <Container>
      <TodoList>
        <div>
          <Input onChange={imputMudou} type="text" placeholder="Digite o que tenho para fazer" />
          <Button onClick={clickButton}>Adicionar</Button>
        </div>  
        <ul>
          
         
          { 
            list.length === 0 ? <Paragrafo>Você não tem tarefas cadastradas</Paragrafo> :
           
            list.map(item => (
              <ListItem $isFinished={item.finished}  key={item.id}>
                <Check onClick={ () => finalizarTarefa(item.id)} />
                <li> {item.conteudo} </li>
                <Lixeira onClick={ () => deletarTarefa(item.id)}  />
              </ListItem>
            ))
          }
        </ul>
      </TodoList>
    </Container>
  )
}

export default App
