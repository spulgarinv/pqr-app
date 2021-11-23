import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

import '../styles/request.css'
import { Navigate } from 'react-router'

function RequestListPage() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {

        try {
            axios.get('http://localhost:8000/request')
                .then(res => {
                    console.log(res.data[0])
                    setData(data => [...data, ...res.data])
                })
        } catch (error) {
            console.log('error')
        }
        
    }

    const handleOnSubmit = (id) => {
        Navigate('/new-claim', {id: id})
    }
    
    const oneDay = 24 * 60 * 60 * 1000

    return (
        <div className="list-container">
            {Object.keys(data).map( key => {
                return <div className="request-card">
                    <div className="card-header">
                        <strong>No. Radicado - {data[key]._id}</strong>
                    </div>
                    <div className="card-body">
                        <h5>Tipo de Solicitud: <span className="request-type">{data[key].type}</span></h5>
                        <h6 className="text-muted">Fecha de Creación: {data[key].createdOn}</h6>
                        <hr/>
                        <h5>Datos de Contacto:</h5>
                        <h6>Nombre: {data[key].firstName} {data[key].lastName}</h6>
                        <h6>Email: {data[key].email}</h6>
                        <h6>Celular: {data[key].celular}</h6>
                        <hr/>
                        <h5>Descripción:</h5>
                        <h6 className="description">{data[key].description}</h6>
                        <hr/>
                        {Math.round(Math.abs(Date.parse(new Date) - new Date(data[key].createdOn))/oneDay) >=5 ?
                            <button class="btn btn-primary btn-lg active" onClick={() => handleOnSubmit(data[key]._id)}>Crear Reclamo</button>
                            : <a class="btn btn-primary btn-lg disabled" role="button">Crear Reclamo</a> 
                        }
                    </div>
                </div>
            })}
        </div>
    )
}

export default RequestListPage
