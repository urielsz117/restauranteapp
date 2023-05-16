import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const FooterComponente = () => {
    return (
        <div className='footer'>
            <div className='nosotros'>
                <div className='nosotros2'>
                    <p className='titulo'>Nosotros</p>
                    <p className='dicho'>Reserva con nosotros para una mejor experiencia a la hora de comer pizza...</p>
                    <p className='dicho'>CDMX Morelos CP 5487</p>
                    <p className='dicho'><FontAwesomeIcon icon={faPhone} />   777 548 16 45 </p>
                    <p className='dicho'><FontAwesomeIcon icon={faEnvelope} /> pizzaplus@gmail.com</p>
                </div>
            </div>
            <div className='formulario'>
                <form class="col">
                    <div className='imputsForm'>
                        <input class="form-control" type="text" placeholder="Nombre"/>
                    </div>
                    <div className='imputsForm'>
                        <input class="form-control" type="text" placeholder="Telefono"/>
                    </div>
                    <div className='imputsForm'>
                        <input class="form-control" type="text" placeholder="Comentarios"/>
                    </div>
                    <div className='imputsForm'>
                        <button type="submit" class="btn btn-primary mb-3">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
