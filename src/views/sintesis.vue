<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

  

    .row.justify-content-center
          .col-lg-8.sm-8
            .titulo-sexto.color-acento-contenido
              b Procesamiento de Información de Mercado
              p.mt-2 Síntesis: Aplicación de instrumentos para recolectar información
              
    

          .col-lg-2
            figure
            img(src="@/assets/curso/temas/g4.svg" width='89,61' height='86,7')
          
    .row.justify-content-center
          .col-lg-10.sm-8.mt-5       
              p A continuación, se presenta la diagramación en la construcción del conocimiento para el componente de formación, en la cual se puede observar el entrelazamiento de las temáticas para generar una aplicación de instrumentos para recolectar información:

      
      
    
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
