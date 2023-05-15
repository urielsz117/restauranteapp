import React from 'react'
import pizza from '../img/pizza.jpg';

export const BodyComponente = () => {
    return (
        <div className='BodyComponente'>
            <div class="row">
                <div class="col">
                    <img src={pizza} alt="pizza" className='pizza' />
                </div>
                <div class="col">
                    <h2 className='titulo'>La Especialidad de la home...</h2>
                    <h5 className='dicho'>Pizza Plus se compromete a generar ahorros. Valor . Ofertas de complementos ¡Esas son buenas noticias para usted!</h5>
                    
                </div>
            </div>
        </div>
    )
}
