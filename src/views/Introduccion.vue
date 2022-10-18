<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .row.justify-content-center.align-items-start.mb-2           
        .col-lg-1.my3
            img.img-a.img-t(src='@/assets/curso/temas/Introduccion/img1.svg' width='85' height='94')                        
        .col-lg-11
          p.mb-0 Bienvenido al componente formativo ‘Aplicación de instrumentos para recolectar información’ del programa ‘Procesamiento de información de mercados’, este espacio estará enfocado en el proceso formativo de acuerdo con la competencia de aprendizaje orientada en ‘encuestar personas según la técnica de recolección y manual de encuestador’, donde se podrá conocer las condiciones, términos y pasos, para la verificación y aplicación de instrumentos de recolección de información, enfocado en la metodología de aplicación de instructivos, elementos de apoyo y el plan de recolección de datos. Además, se mostrarán las diferentes aplicaciones de estos procesos de forma online y presencial, las rutas de recolección y los protocolos de diligenciamiento en la recopilación de información. 

    
    .row.justify-content-center.mt-3
      .col-lg-11.sm-2
        .bloque-texto-g.color-secundario.p-4.mb-4
          .row.justify-content-center
            
            .col-lg-7
              p El desarrollo de un proceso investigativo es fundamental para el mantenimiento, sostenimiento y crecimiento de las organizaciones, no obstante, este tiene unos pasos y características específicas, las cuales se deben tener presente para la obtención de buenos resultados. La aplicación de instrumentos para la recolección es vital para el desarrollo investigativo, por lo que requiere que se desarrolle de forma adecuada siguiendo las instrucciones o normas infundadas por la organización y presaberes establecidos.

            .col-lg-2
              figure
                img(src='@/assets/curso/temas/Introduccion/img3.png').imagen-deco  
          











  

    .row.mt-4
      .col-5.col-lg-2        
      .col-lg-9
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            .row.display-flex
              .col-lg-6
                .row.display-flex
                  .col-2
                    img.img-a.img-t(src='@/assets/curso/temas/Introduccion/img2.svg' width='85' height='94')  
                  .col-10         
                    p Este componente formativo, está enfocado en conocer sobre el procesamiento de la información para la producción y comercialización de bienes y servicios, aplicando instrumentos para la recolección de información pertinente y útil para una organización, así como también la verificación de estos instrumentos de recopilación, con el fin de corroborar el funcionamiento de los mismos, de acuerdo al objetivo planteado por la organización investigadora. 

              .col-lg-6
                .row.display-flex
                  .col-2
                    img.img-a.img-t(src='@/assets/curso/temas/Introduccion/img2.svg' width='85' height='94')  
                  .col-10         
                    p La metodología del componente es teórica práctica, ya que se contextualizará al lector con definiciones y explicaciones de casos prácticos a los cuales se les profundizará con videos como material complementario, culminando con actividades prácticas para validar el conocimiento, como lo es un taller de relacionamiento de conceptos y una guía de aprendizaje. 

    p.mt-5 A continuación, encontrará el video introductorio donde podrá visualizar de manera general todos los temas que serán desarrollados en este componente formativo.
    .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption VIDEO



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
