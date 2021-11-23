import React from 'react'

function NewClaimPage() {
    return (
        <div className="request-page-container">
            <div className="request-page-container__card">
                <div className='card__title'>Ingresa un Reclamo!</div>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Descripcion</label>
                        <textarea className="form-control" name="description" required></textarea>
                    </div>
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewClaimPage
