import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { collection, addDoc } from "firebase/firestore";
import { db } from '../application/firebase';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

export const FooterComponente = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    const reservationCollection = collection(db, "reservation")

    const store = async (e) => {
        e.preventDefault()
        await addDoc(reservationCollection, { name: name, phone: phone, comment: comment })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Reservacion realizada correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    }

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
                <form class="col" onSubmit={store}>
                    <div className='imputsForm'>
                        <input class="form-control" type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required/>
                    </div>
                    <div className='imputsForm'>
                        <input class="form-control" type="number" placeholder="Telefono" value={phone} onChange={e => setPhone(e.target.value)} required/>
                    </div>
                    <div className='imputsForm'>
                        <input class="form-control" type="text" placeholder="Comentarios" value={comment} onChange={e => setComment(e.target.value)} required/>
                    </div>
                    <div className='imputsForm'>
                        <button type='submit' class="btn btn-primary mb-3">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
