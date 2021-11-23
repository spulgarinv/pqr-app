import React from 'react'
import '../styles/request.css'
import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function NewRequestPage() {

    let navigate = useNavigate();

    const [data, setData] = useState({
        type: "",
        firstname: "",
        lastname: "",
        email: "",
        celular: "",
        description: ""
    })

    const [error, setError] = useState("")

    const [loading, setLoading] = useState(false)

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendData = async (event) => {
        event.preventDefault();

        const requestObject = {
            "type": data.type,
            "firstName": data.firstname,
            "lastName": data.lastname,
            "email": data.email,
            "celular": data.celular,
            "description": data.description
        }
        
        try {
            setLoading(true)
            await axios.post('http://localhost:8000/request', requestObject)

            setData({
                type: "",
                firstname: "",
                lastname: "",
                email: "",
                celular: "",
                description: ""
            })

            navigate('/list-requests')

        } catch (error) {
            setError('Ocurrio un error!')
        }

        setLoading(false)
    }

    return (
        <div className="request-page-container">
            {error !== "" &&
                <div class="alert alert-danger" role="alert">
                    {error}
                </div>
            }
            <div className="request-page-container__card">
                <div className='card__title'>Ingresa una Solicitud!</div>
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="tiposolicitud">Tipo de Solicitud</label>
                        <select className="form-control" id="tiposolicitud" name="type" value={data.type} required onChange={handleInputChange}>
                            <option>---------</option>
                            <option value='peticion'>Petición</option>
                            <option value='queja'>Queja</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="firstname" value={data.firstname} placeholder="Nombre" required onChange={handleInputChange}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name="lastname" value={data.lastname} placeholder="Apellido" required onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <input type="email" className="form-control" name="email" value={data.email} placeholder="Correo" required onChange={handleInputChange}/>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control" name="celular"  value={data.celular} placeholder="Celular" required onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Descripcion</label>
                        <textarea className="form-control" name="description" value={data.description} required onChange={handleInputChange}></textarea>
                    </div>
                    <button type="submit" className="form-button">
                        Submit
                        {loading && 
                            <div class="spinner-border spinner-border-sm mx-2" role="status"></div>
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewRequestPage