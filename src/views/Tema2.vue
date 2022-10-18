<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aplicación de instrumentos

    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-11
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 La recolección de información es un paso esencial para el desarrollo de cualquier proceso investigativo, es por esto que es necesario que se seleccione y aplique de forma adecuada los instrumentos de recolección de datos, ya que no todos los instrumentos de recolección de datos pueden ser utilizados en los diferentes tipos de investigaciones, todo esto dependerá del objetivo del estudio investigativo y los recursos que disponga la empresa. (Tarquino y Lozano, 1988)    

        separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-2
      h2 2.1  Aplicación online

   
    .row.justify-content-center
      .col-11.col-lg-11     
            .row.display-flex.justify-content-center                
              .col-lg-9
                p.mt-2 El desarrollo de estrategias de mercado permite el adecuado crecimiento, mantenimiento y sostenimiento de las empresas, por lo que es de vital importancia identificar y definir el verdadero objetivo de esta. Las estrategias de mercadeo se acomodan de acuerdo con el objetivo de la empresa y los productos que ofrecen.
              .col-lg-1
                img(src='@/assets/curso/temas/Tema2/img2.svg').imgmedidas


    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/Tema2/Acordeon.svg", alt="alt").img400.m-auto.imagen-deco
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--moradoColor")
            
            .row(titulo="Buscar y seleccionar el tipo de público a encuestar")
              .col-12
                p.mb-0 Este es tal vez uno de los pasos más difíciles, ya que al igual que en la presencialidad, no todas las personas están dispuestas a participar en este tipo de investigaciones, por lo que existen diferentes espacios en la virtualidad, donde grupos de personas participan, en su mayoría motivados por incentivos, en el desarrollo de investigaciones. 

            .row(titulo="Restricciones que posee el internet")
              .col-12
                p.mb-0 Tener en cuenta las restricciones que posee el internet al determinar el grupo de personas a indagar, facilita y contribuye a una mejor comprensión de los procesos investigativos de las diferentes variantes que pueden afectar en la recolección de información; un ejemplo de esto es que la mayoría de personas seleccionadas para las investigaciones, son segmentadas demográficamente, es decir por características como la edad, el sexo, ocupación, entre otras, esto significa que no se tienen muy en cuenta factores más internos dentro de las características de estas personas, como valores, ideales, sueños, entre otros.  

            .row(titulo="Tiempo para la recolección de información")
              .col-12
                p.mb-0 Se debe indicar el tiempo suficiente para la recolección de información, encontrar un punto medio para la implementación de las herramientas de estudio; lo anterior podría indicar un costo superior en el desarrollo del proceso investigativo, ya que muchas plataformas o paneles online cobran de acuerdo con el tiempo en que el instrumento de recolección de datos se encuentre disponible dentro de las mismas para su desarrollo por parte del público objetivo. De igual forma un tiempo muy prolongado pude arrojar respuestas erróneas, ya que día a día se presentan cambios en la sociedad que afectan la formade pensar y actuar de las personas. 
             
            .row(titulo="Adaptabilidad de los instrumentos de investigación")
              .col-12
                p.mb-0 Verificar que el instrumento de investigación se adapte a los medios digitales, un ejemplo de esto es que cada pregunta se encuentre en una página separada, de igual forma que estas se adapten de manera adecuada a cualquier tipo de dispositivo donde se visualicen los interrogantes.
    
            .row(titulo="Privacidad de los datos")
              .col-12
                p.mb-0 La privacidad de los datos es fundamental, y en el mundo online esto también tiene mucha relevancia, por lo que alguna información puede que no esté disponible o no sea suministrada por parte del público objetivo.
    
            .row(titulo="Datos no fiables")
              .col-12
                p.mb-0 No todos los datos son fiables, ya que el público objetivo al no estar dentro de un ambiente controlado puede estar desarrollando el instrumento de recolección de datos en entornos que afecten sus respuestas. 

            .row(titulo="El procesamiento y análisis de datos digital")
              .col-12
                p.mb-0 El procesamiento y análisis de datos se puede desarrollar de manera digital, este es uno de los beneficios que ofrecen las aplicaciones online de procesos de investigación, no obstante, se recomienda una posterior revisión de dicha información ya que esta puede variar y contener errores.  
    
    
        separador

    #t_2_2

    .titulo-segundo.color-acento-contenido
      h2 2.2  Aplicación presencial

    .row.justify-content-around.align-items-center
      .col-lg-7.col-sm-16
        p La aplicación de los instrumentos de recolección de información de manera presencial es uno de los métodos más clásicos que existe en cuanto a lo que se refiere el proceso investigativo, no obstante, esto ha ido cambiando conforme los años.
        p Al igual que en la aplicación de instrumentos de recolección de datos online, las personas que participen en este tipo de procesos buscaran obtener un incentivo a cambio del desarrollo de esta, ya que no es muy fácil que los grupos a encuestar acepten de forma gratuita en la participación de las mismas. No obstante, existen muchas empresas que consiguen el desarrollo de este tipo de investigación con participantes que simplemente deseen contribuir con el mismo proceso investigativo, lo que las empresas pueden agradecer ofreciendo algún tipo de obsequio por su participación.
         
      
      .col-lg-4.col-sm-10
        figure
          img(src='@/assets/curso/temas/Tema2/img3.png').imagen-deco
      
    
      
    .row.justify-content-center.mt-3
      .col-lg-11.sm-2
        .bloque-texto-g.color-secundario.p-4.mb-4
          .row.justify-content-center
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/Tema2/img4.png').img3  
          
            .col-lg-7
              p En relación con la seguridad de la información, se refiere a cualquier información o elemento relacionado con el tratamiento de ésta que tenga valor para la entidad, por ejemplo: archivos, bases de datos, expedientes, entre otros.







    .row.justify-content-center.align-items-start.mt-5      
        .col-lg-3
            img(src='@/assets/curso/temas/Tema2/img5.png' )                   
        .col-lg-7
          p.mt-3 Los datos suministrados por el encuestado pueden tener un porcentaje mayor de fiabilidad, ya que se encuentra en un ambiente controlado, bajo características específicas y en conjunto con un orientador (encuestador) que le podrá brindar asesoría en cualquier momento que se requiera.
          p.mt-3 Al igual que en la aplicación de recolección de datos online, la manera presencial no garantiza que todas las personas suministren en su totalidad información específica, no obstante, se podrá obtener un referente sobre la misma, es decir un aproximado sobre lo que piensa y opina la persona encuestada. Por otro lado, es importante garantizar que el tratamiento de los datos sea desarrollado de la mejor manera, ya que esto valida el derecho de las personas en la privacidad de su información.

    p.mt-4 Por último, el procesamiento y análisis de la información puede ser tardía y un poco tediosa, ya que en su mayoría este tipo de aplicaciones de instrumentos de recolección de información, suelen arrojar preguntas tanto cuantitativas como cualitativas lo que genera que se deben establecer mayores puntos a tener en cuenta sobre la información recolectada.


        separador

    #t_2_3

    .titulo-segundo.color-acento-contenido.mt-2
      h2 2.3 Rutas de recolección
    
    .row.justify-content-center.align-items-start           
        .col-lg-1
            img(src='@/assets/curso/temas/Tema2/img6.png').dimensionimg2                     
        .col-lg-9
          p.mt-3 La forma en cómo se deberá recolectar la información dependerá únicamente de las directrices que tengan las organizaciones. Las rutas de recolección de información se refieren al tipo de orden en el que serán encuestados los grupos a estudiar, es decir, la empresa deberá ordenar la forma en cómo y cuándo serán encuestadas las personas, un ejemplo de esto es encuestar a un grupo de personas que se encuentren en la ciudad de Medellín, luego a las personas de Bogotá y por último a un grupo en Cali; todo lo anterior dependerá de las estrategias planteadas por la organización. De acuerdo con lo anterior, las empresas son las únicas que podrán establecer el tipo de ruta a llevar a cabo para la aplicación de Instrumentos, sin embargo, estas pueden tener en cuenta factores específicos como: 
  
     

    LineaTiempoD.color-primario    
      .row(numero="1" titulo="Distancia")
        .col-lg-1
          img(src='@/assets/curso/temas/Tema2/img7.png').imgtamanio            
        .col-lg-9
          p.text-small Representa la ubicación donde se encuentran los grupos a encuestar, por lo que es importante plantear las rutas más viables para el desarrollo de estos procedimientos de recolección.       

      .row(numero="2" titulo="Tiempo")
        .col-md-1
          img(src='@/assets/curso/temas/Tema2/img8.png' ).imgtamanio
            
        .col-lg-9
          p.text-small Este podrá afectar las decisiones en las rutas que establezcan las organizaciones, un ejemplo de esto será conocer o desarrollar una investigación con base al tiempo transcurrido de un momento especifico a otro.  
      
      .row(numero="3" titulo="Recursos")
        .col-md-1
          img(src='@/assets/curso/temas/Tema2/img9.png' ).imgtamanio
            
        .col-lg-9
          p.text-small A pesar de que los recursos como materiales y herramientas deben fijarse previamente por las empresas, puede que estos se vean afectados en la aplicación de los instrumentos de recolección, encontrándose con recursos limitados que solo les permita desarrollar la investigación en lapsos de tiempo específicos.  
       
   
    separador

    #t_2_4

    .titulo-segundo.color-acento-contenido.mt-2
      h2 2.4 Protocolos de diligenciamiento

    
    p De acuerdo con las directrices desarrolladas desde el inicio y selección del instrumento de recolección de información, ‘el grupo a encuestar también deberá seguir algunas normas’ específicas durante el diligenciamiento de los instrumentos de recopilación de datos, algunos de estos solo se basarán en comportamientos y otros en reglas planteadas dentro del proceso investigativo. 


    .row.justify-content-center.mb-5
      .col-lg-8
        TabsA.color-acento-contenido    
          .tarjeta.colorblue.p-4(titulo="Actitud")
            b.mt-3 Actitud
            p.mt-3 Presentar una buena actitud frente a la participación en la aplicación de los instrumentos de recolección, influirá en gran medida en las respuestas a obtener, en dado caso de realizar estudios donde se presenten varias personas, la actitud puede llegar afectar a todos los miembros participantes a este proceso investigativo. 
            
          .tarjeta.colorblue.p-4(titulo="Veracidad o sinceridad")
            b Veracidad o sinceridad
            p.mt-3 Un proceso investigativo exige el desarrollo de respuestas reales y concretas, es por esto que las personas encuestadas deberán contestar de la manera más sincera posible. 




          .tarjeta.colorblue.p-4(titulo="Seguimiento de las indicaciones")
            b Seguimiento de las indicaciones
            p.mt-3 Las personas encuestadas tienen el deber de llevar a cabo el seguimiento de indicaciones brindadas por los encuestadores.





          .tarjeta.colorblue.p-4(titulo="Indagar sobre interrogantes presentados durante el proceso")
            b Indagar sobre interrogantes presentados durante el proceso
            p.mt-3 Si se presentan dudas por parte de los encuestados es necesario que se resuelvan, esto para lograr de forma adecuada todos los objetivos planteados por la organización.

          .tarjeta.colorblue.p-4(titulo="Compromiso")
            b Compromiso
            p.mt-3 Independientemente de que se otorgue o no un incentivo por parte de las empresas a los grupos a encuestar, los encuestados deberán mostrar su compromiso frente al desarrollo del instrumento de recolección.

          .tarjeta.colorblue.p-4(titulo="Respeto y empatía")
            b Respeto y empatía
            p.mt-3 Estas son necesarias para el desarrollo de la recolección de información, tanto por los encuestados como por parte de los encuestadores. 
     
     
      .col-8.col-lg-4
        figure
          img.l.my-3(src="@/assets/curso/temas/Tema2/img10.png", alt="alt")   


     










</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
