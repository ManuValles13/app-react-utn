import React from 'react';

function About() {
    return ( 
        <><div class="main1">
            <h1 class="h1">Planes de entrenamiento</h1>
            <p class="Paragraph1">tenemos planes para todos,desde personalizados y con seguimiento diario de nutricion y bloques
                de entrenamiento hasta programas genericos para subir tus kg en los ejercicios basicos a
                un menor precio
            </p>
            <h2 class="h1">Planes de entrenamiento</h2>
        </div><div class="box">
                <div class="wrapper">
                    <a class="linkProductos" href="../formulario"><img class="producto" src="IMG/guts1.jpeg" alt=""/></a>
                    <a class="name" href="../formulario"><p class="description">the STRUGGLER</p></a>
                    <p class="Paragraph1">a diferencia de los demas programas, este esta enfocado en auqellas personas que disponen de
                        poco tiempo para entrenar,contando con minimo 2 maximo 4 dias, podes aumentar significativamente tus niveles de fuerza y musculo </p>
                </div>
                <div class="wrapper">
                    <a class="linkProductos" href="../formulario"><img class="producto" src="IMG/guts2.jpeg" alt=""/></a>
                    <a class="name" href="../formulario"><p class="description">Metodo BERSERK</p></a>
                    <p class="Paragraph1">este programa esta pensado para aquellos que quieren enfocarse subir su masa muscular sin dejar de lado aumentar su fuerza</p>
                </div>
                <div class="wrapper">
                    <a class="linkProductos" href="../formulario"><img class="producto" src="IMG/skullknight.jpeg" alt=""/></a>
                    <a class="name" href="../formulario"><p class="description">el ESTOICO</p></a>
                    <p class="Paragraph1">este programa esta pensado para aquellos que quieren enfocarse subir su masa muscular sin dejar de lado aumentar su fuerza</p>
                </div>
            </div><h3 class="h1">asesoria personalizada</h3></>

     );
}

export default About;