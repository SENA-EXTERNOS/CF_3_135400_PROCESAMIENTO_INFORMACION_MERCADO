export default {
  global: {
    componenteFormativo:
      'Aplicación de instrumentos para recolectar información',
    descripcionCurso:
      'La aplicación de instrumentos para la recolección de información es primordial para cualquier proceso investigativo de mercados, ya que el correcto uso de estos elementos facilita el procesamiento de información para lograr los objetivos planteados. En este componente se plantearán los procesos para la verificación y aplicación de los diferentes instrumentos de recolección de datos desde la fundamentación teórica adquirida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.png'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Verificación de instrumentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Instructivos',
            hash: 't_1_1',
          },

          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos de apoyo',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aplicación de instrumentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aplicación <em>online</em>',
            hash: 't_2_1',
          },

          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aplicación presencial',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Verificación de instrumentos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <i>Técnicas de verificación<i>.',
      tipo: 'Video',
      link: 'https://youtu.be/g2lIg-BIScc',
    },
    {
      tema: 'Instructivos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <i>Organización de los datos recopilados<i>.',
      tipo: 'Video',
      link: 'https://youtu.be/vvjV66aA93Y',
    },

    {
      tema: 'Elementos de apoyo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <i>Recolección de la Información<i>.',
      tipo: 'Video',
      link: 'https://youtu.be/D_ltPN5Akvo',
    },

    {
      tema: 'Aplicación de instrumentos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <i>Lista de chequeo<i>.',
      tipo: 'Video',
      link: 'https://youtu.be/BIruK_ImOK8',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación',
      significado:
        'poner en práctica los diferentes conocimientos adquiridos durante un proceso de investigación.',
    },
    {
      termino: 'Comprensión',
      significado:
        'entender o relacionar ideas y conceptos de temas específicos para obtener resultados favorables.',
    },
    {
      termino: 'Factores',
      significado:
        'elementos o aspectos que se utilizan para influir en el desarrollo de una acción o actividad especifica.',
    },
    {
      termino: 'Gráficos',
      significado:
        'representación visual de datos, en su mayoría números obtenidos en estudios investigativos.',
    },

    {
      termino: 'Incentivos',
      significado:
        'gratificación que obtienen las personas al cumplimiento de objetivos o metas planteadas previamente.',
    },

    {
      termino: 'Proceso',
      significado:
        'pasos, acciones o secuencias que permiten el desarrollo de una actividad especifica.',
    },

    {
      termino: 'Recolección',
      significado:
        'sinónimo de reunir o agrupar, elementos o información específica sobre determinado tema.',
    },

    {
      termino: 'Veracidad',
      significado:
        'cualidad que obtienen hechos o acciones específicas en cuanto a su exactitud o verdad de acuerdo al medio en el que se encuentren.',
    },
  ],
  referencias: [
    {
      referencia:
        'Grasso, L. (2006). <i>Encuestas: elementos para su diseño y Análisis</i>. Encuentro Grupo Editor',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=2718 ',
    },

    {
      referencia:
        'Hoyer, W. D., Pieters, R. & Maclnnis, D. J. (2018). <em>Comportamiento del consumidor. </em> Cengage Learning.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7493',
    },

    {
      referencia:
        'Kerin, R. A. y Hartley, S. W. (2019). <em>Marketing</em>. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9915',
    },

    {
      referencia:
        'Sanabria Araya, F. (2018). <em>Investigación de mercados: un enfoque práctico y descriptivo.</em> Ecoe Ediciones.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7409',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
