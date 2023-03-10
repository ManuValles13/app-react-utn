import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (<>
        <h1 class="h1"><strong>NUESTRA FILOSOFIA</strong></h1><div class="main">
            <p class="Paragraph">
                Nuestra filosofia para la vida,entrenamiento y lucha interna es lo que nos lleva
                a no solo lograr cambios a nivel corporal,sino tambien a nivel mental con ayuda de la contemplacion de las cosas
                que nos causan dolor y como seguir adelante: los siguientes fragmentos son una muestra de nuestro pensamiento y forma de ver la vida y controlar nuestro destino</p>
                <p class="p1">Los estoicos creían que todo alrededor operaba según una ley de causa y efecto, resultando en una estructura racional del universo. Pensaban que "no podemos controlar lo que pasa a nuestro alrededor, pero sí podemos controlar lo que pensamos sobre estos eventos"
                    Como tal, su objeto era alcanzar la felicidad y la sabiduría prescindiendo de las comodidades, los bienes materiales y la fortuna</p>
                </div>
                <h2 class="h2"><strong>NUESTROS PLANES DE ENTRENAMIENTO</strong></h2>
                <div class="box">
                    <div class="wrapper">
                        <Link to="Productos" class="linkProductos"><img class="producto" src="IMG/guts1.jpeg" alt=""/></Link>
                        <Link to="Productos"class="name"><p class="description">the STRUGGLER</p></Link>
                    </div>
                    <div class="wrapper">
                        <Link to="Productos"  class="linkProductos"><img class="producto" src="IMG/guts2.jpeg" alt=""/></Link>
                        <Link to="Productos" class="name"><p class="description">Metodo BERSERK</p></Link>
                    </div>
                    <div class="wrapper">
                        <Link to="Productos" class="linkProductos" ><img class="producto" src="IMG/skullknight.jpeg" alt=""/></Link>
                        <Link to="Productos" class="name"><p class="description">el ESTOICO</p></Link>
                    </div>
                </div>
                </>)
            }
                export default Home;