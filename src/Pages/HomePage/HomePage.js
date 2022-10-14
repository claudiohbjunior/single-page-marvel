
import styles from "./style.css"
import { ListContainer, Div, Teste, Card, Button, Container, ModalOverlay } from "./Style"
import CharacterTable from "../../Componets/CharacterTable"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"    
import axios from "axios"
import Modal from 'react-modal'
Modal.setAppElement("#root")






export const HomePage = () => {

// const [characters, setCharacters] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e1d23e9e5ba1f53fd3070197bc52a8c&hash=7d21ad7ddd0b6a6a315f0168335c8eb6")
const [item, setItem] = useState([])
const [isLoading, setLoading] = useState(true)
const [modalIsOpen, setIsOpen] = useState(false)

const { id } = useParams()
const [itens, setItens] = useState()
const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=1e1d23e9e5ba1f53fd3070197bc52a8c&hash=7d21ad7ddd0b6a6a315f0168335c8eb6`)
    setItens(res.data.data.results[0])
}
fetch()

function openModal() {
    setIsOpen(true)
}

function closeModal() {
    setIsOpen(false)
}


useEffect(() => {
    axios.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e1d23e9e5ba1f53fd3070197bc52a8c&hash=7d21ad7ddd0b6a6a315f0168335c8eb6").then(res => {
        setItem(res.data.data.results)
    })

}, [])

console.log(item)
    return (
        
       
            <Teste>
            
            
                {item.map(per => (
                    
                        <Card>
                        <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} />
                        <Div>
                        <div><h3>{per.name}</h3></div><div><Button onClick={openModal}>Detalhes</Button></div>
                        
                        <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"                        
                        >
                            <h2>{per.name}</h2>
                            <hr />
                            <button onClick={closeModal}>Fechar</button>
   
                        </Modal>
                        
                        </Div>
                        
                        </Card>
                        
            
                )) }
        
        </Teste>
        
    )
}