
import styles from "./style.css"
import { useForm } from "react-hook-form"
import { Div, CardModal, Card, Button } from "./Style"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"    
import axios from "axios"
import Modal from 'react-modal'

Modal.setAppElement("#root")

export const HomePage = () => {

const [item, setItem] = useState([])
const [names, setName] = useState("")
const {register, handleSubmit, setValue, setFocus} = useForm()

const onSubmit = (e) => {
    console.log(e)
}

const [modalIsOpen, setIsOpen] = useState(false)
const [modalEndIsOpen, setEndIsOpen] = useState(false)

const { id } = useParams()

function openModal(ids) {
    setIsOpen(true)
    setName(ids)
}

function openModalEnd () {
    setEndIsOpen(true)
}

function closeModal() {
    setIsOpen(false)
}

function closeModalEnd() {
    setEndIsOpen(false)
}

function handleClick() {
    alert('Quadrinho enviado para o seu endereço com sucesso');
  }

const CheckCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    
    .then(res => res.json()).then(data => {
        console.log(data)
        setValue('address', data.lograduro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('uf', data.uf);
        setFocus("addressNumber");

    })
}


useEffect(() => {
    axios.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e1d23e9e5ba1f53fd3070197bc52a8c&hash=7d21ad7ddd0b6a6a315f0168335c8eb6").then(res => {
        setItem(res.data.data.results)
    })

}, [])

useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=1e1d23e9e5ba1f53fd3070197bc52a8c&hash=7d21ad7ddd0b6a6a315f0168335c8eb6`).then(res =>{
        setItens(res.data.data.results[0])
    })
}, [])

    return (           
        <CardModal>
            {item.map(per => (     
                <Card>
                   <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} />
                     <Div>
                        <div><h3>{per.name}</h3></div><div><Button onClick={() =>openModal(per.description)}>Detalhes</Button></div>
             
                        <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"                        
                        >
                            <h2>{names}</h2>
                            
                            
                            <hr />
                            <div className="btn">
                            <button onClick={closeModal}>Fechar</button>
                            <button onClick={openModalEnd}>Enviar para meu endereço</button>
                            </div>
   
                        </Modal>
                        
                        
                        <Modal
                        isOpen={modalEndIsOpen}
                        onRequestClose={closeModalEnd}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"                        
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                
                                <label>CEP:
                                    <br></br>
                                    <input type="text"{...register("cep")} onBlur={CheckCep} />
                                </label>
                                <label>.
                                    Rua:<br></br>
                                    <input type="text"{...register("address")}  />
                                </label>
                                <label>
                                    Número:
                                    <input type="text" {...register("addressNumber" )}/>
                                </label>
                                <label>
                                    Bairro:
                                    <input type="text" {...register("neighborhood" )}/>
                                </label>
                                <label>
                                    Cidade:
                                    <input type="text" {...register("city" )}/>
                                </label>
                                <label>
                                    Estado:
                                    <input type="text" {...register("uf" )}/>
                                </label>
                                <button onClick={handleClick} type="submit">Enviar</button>
                            </form>
                            
                            
                            <hr />
                            <div className="btn">
                            <button onClick={closeModalEnd}>Fechar</button>
                            </div>
   
                        </Modal>       
                    </Div>
                        
                </Card>
                )) }       
        </CardModal>
        
    )
}