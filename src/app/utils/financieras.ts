export const financieras = [
  {
    id: 1,
    nombre: "Konfio",
    proceso: "link",
    url: "https://konfio.mx",
    fase: "1",
    productos: [
      {
        name:"Simple",
        presencia:'Nivel Nacional',
        destinos:'Compra de mercancía, construcción, ampliación del negocio, adquisición de maquinaria, mantenimiento, inmobiliario, apertura de nuevas sucursales, entre otros.',
        edad:'25 a 75 años PM 25  a  75 años en PFAE',
        antigüedad:'PFAE y PM: De 3 a 6 meses facturando continuamente',
        ingresos:'PFAE $ 80,000.00 mensual PM  $100,000 mensual UNICAMENTE FACTURACIÓN DE INGRESOS',
        aval:'Sin Aval',
        buro:'Con poca o gran experiencia crediticia',
        propiedad:'Sin Garantía',
        gravar:'N/A',
        observaciones:'Si ofrecen crédito a escuelas privadas / Sin penalización por pago anticipado a partir del 2do mes de haber fondeado, ahorrándose los intereses del tiempo que no utilizó el crédito. La visita ocular se realiza después de la dispersión y las excepciones en las que lo hace antes de la dispersión.'
      },
      {
        name:"Tarjeta de crédito",
        presencia:'Nivel Nacional',
        destinos:'Compra de mercancía, cubrir deuda del negocio, pagos a proveedores.',
        edad:'PM y PFAE 25 Años a 75 años ',
        antigüedad:'PFAE y PM: De 3 a 6 meses facturando continuamente',
        ingresos:'Ingresos crecientes y constantes en los últimos 3 meses.',
        aval:'Sin Aval',
        buro:'PFAE y PM: Atrasos no mayores a $7,500',
        propiedad:'Sin Garantía',
        gravar:'N/A',
        observaciones:'Si ofrecen crédito a escuelas privadas / Sin penalización por pago anticipado a partir del 2do mes de haber fondeado, ahorrándose los intereses del tiempo que no utilizó el crédito. La visita ocular se realiza después de la dispersión y las excepciones en las que lo hace antes de la dispersión.'
      },
    ],
    descripcion: "Compra de mercancía, cubrir deuda del negocio, pagos a proveedores.",
    img: "assets/konfio.jpeg"
  },
  {
    id: 2,
    nombre: "PDN",
    proceso: "link",
    url: "https://www.portafoliodenegocios.com.mx/",
    fase: "2",
    productos: [
    {
     name: "PDN EXPRESS (CRÉDITO SIMPLE)",
     presencia:'Nivel Nacional (Zonas urbanizadas) ',
     destinos:'Sin destino especifico (Recomendado para capital de trabajo, remodelación del negocio, crecimiento del negocio ,compra de bienes de capital, inventarios etc.) ',
     edad:'18  a  75 años',
     antigüedad:'2 años',
     ingresos:'El financiamiento otorgado será equivalente a 1 mes de ventas (Se solicitará financieros para comprobar las ventas)',
     aval:'Principal accionista o socio con el 1% de C.S. Familiar hasta 2° ',
     buro:'Que refleje buena cultura de pago (no determina la operación) Si se llega a tener algún adeudo hipotecario, probabilidad de rechazo alta.',
     propiedad:'Aforo 2 a 1 (Terrenos sujeto a revisión) ',
     gravar:'Dependiendo de entrevista, puede ser solo con obligación solidaria o con mediación ,fideicomiso o hipoteca',
     observacion:'No se aceptan propiedades en: zonas no urbanizadas | La garantía es un requisito obligatorio | Contar con un segundo obligado solidario para la firma |  Para créditos mayores a 10 MDP se requiere analíticas en los financieros ', 
     },
    ],
    descripcion: "Para adquisición de inmueble productivo con uso de suelo comercial, oficinas o industrial.",
    img: "assets/pdn.png"
  },
  {
    id: 3,
    nombre: "Covalto",
    proceso: "mail",
    fase: "1",
    viabilidad: [
      "BURÓ DE CRÉDITO TANTO DEL ACREDITADO COMO DEL AVAL",
      "ESTADOS FINANCIEROS DE LOS ÚLTIMOS DOS CIERRES DE AÑOS Y PARCIALES",
      "CUADRO DE PASIVOS ACTUALIZADO",
      "CURRICULUM VITAE (CV)"
    ],
    productos: [
     {
      name:"CREDITO SIMPLE REVOLVENTE CON GARANTIA PM",  
      presencia:'Nivel Nacional',
      destino:'Para capital de trabajo, remodelación del negocio, crecimiento del negocio ,compra de bienes de capital, inventarios, sustitución de pasivos (no aplica para el revolvente), etc.',
      edad:'21 a 68 años.',
      antigüedad:'2 años',
      ingresos:'Mínimo 6  MDP anuales' ,
      aval:'Acreditado accionista, familiar del acreditado o del accionista, empresas relacionadas (abuelos, padres, hijos, primos)',
      propiedad:'Casa habitación, departamento, local comercial, oficina, nave industrial, (aforo mínimo 2 a 1)',
      gravar:'SI (fideicomiso)',
      observaciones:'Sin penalización por pago anticipado, sin costo en avaluó.'
    } ,
    { 
      namne:"CREDITO PARAMETRICO",
      presencia:'Nivel Nacional',
      destino:'Capital de trabajo',
      edad:'21 a 68 años.',
      antigüedad:'2 años',
      ingresos:'Mínimo 20 MDP anuales',
      aval:'Accionista mayoritario como Obligado Solidario',
      observaciones:'Sólo Personas Morales'
    },
     {
      name:"ARRENDAMIENTO PURO SYLB PM",
      presencia:'Nivel Nacional',
      destino:'Capital de trabajo',
      edad:'21 a 68 años.',
      antigüedad:'2 años',
      ingresos:'Mínimo 20 MDP anuales',
      aval:'Accionista mayoritario como Obligado Solidario',
      buro:'bueno',
      observaciones:'Hasta el 80% del avaluo Se tiene que presentar factura o cotización del equipo a arrendar        ',
     } ,
    { 
      name: "CREDITO SIMPLE REVOLVENTE CON GARANTIA PFAE" ,
      presencia:'Nivel Nacional',
      destino:'Activo productivo (equipo medico, maquinaria amarilla, etc.) No se arrendan bienes inmuebles.  No se trabaja tecnología y paneles solares',
      edad:'21 a 68 años.',
      antigüedad:'2 años',
      ingresos:'Mínimo 80  MDP anuales',
      aval:'Acreditado accionista, familiar del acreditado o del accionista, empresas relacionadas (abuelos, padres, hijos, primos)',
      buro:'bueno',
      propiedad:'Maquinaria/ Bien Arrendado',
      gravar:'Maquinaria/ Bien Arrendado',
      observaciones:'80% de valor de Factura                                                                ',

    },
    {
      name:"ARRENDAMIENTO PURO SYLB PFAE",
      presencia:'Nivel Nacional',
      destino:'Activo productivo (equipo medico, maquinaria amarilla, etc.) No se arrendan bienes inmuebles.  No se trabaja tecnología y paneles solares',
      edad:'21 a 68 años.',
      antigüedad:'2 años',
      ingresos:'Mínimo 80  MDP anuales',
      aval:'Acreditado accionista, familiar del acreditado o del accionista, empresas relacionadas (abuelos, padres, hijos, primos)',
      buro:'bueno',
      propiedad:'Maquinaria/ Bien Arrendado',
      gravar:'Maquinaria/ Bien Arrendado',
      observaciones:'Hasta el 80% del avaluo Se tiene que presentar factura o cotización del equipo a arrendar        '
    },
    ],
    descripcion: "Para capital de trabajo, remodelación del negocio, crecimiento del negocio, compra de bienes de capital, inventarios, sustitución de pasivos.",
    img: "assets/covalto.png"
  },
  {
    id: 4,
    nombre: "Anticipa",
    proceso: "link",
    fase: "2",
    productos: [
      {
        name: "ARRENDAMIENTO EQUIPO NUEVO",
        presencia:'Nacional',
        destinos:'Sin destino especifico (Recomendado para capital de trabajo, remodelación del negocio, crecimiento del negocio ,compra de bienes de capital, inventarios etc.) ',
        edad:'18 años / Máxima (que la persona se encuentre en pleno uso de sus facultades mentales)',
        antigüedad:'3 años constituido en la actividad economica y operando en el mismo local',
        ingresos:'Ventas mínimas con tarjetas $150,000 pesos mensuales',
        aval:'Sin necesidad de aval',
        buro:'',
        propiedad:'',
        grabar:'',
        observaciones:' 1. Dirigido a negocios que tienen ventas con tarjetas bancarias al consumidor final. | 2. Tener por lo menos 1 año operando con TPV (no importa con que banco o agregador siempre y cuando las ventas caigan a una cuenta bancaria). |3.-Ventas mensuales con tarjeta bancaria de $150,000.00 mensuales  y que representen por lo menos el 50% del total de las ventas. |4. Estas ventas se cobrarán a través de un adquiriente autorizado por Anticipa, mismo que tiene que ser contratado antes de la firma del contrato Cash Advance. |5. El negocio debe llevar 3  años constituido en la actividad economica y operando en el mismo local. |6. Dirigido a Persona Moral incluyendo AC y Persona Física con Actividad Empresarial.',
      },
      {
      name:"ARRENDAMIENTO PURO Y FINANCIERO",
      presencia:'Nacional',
      destinos:'Sin destino especifico (Recomendado para capital de trabajo, remodelación del negocio, crecimiento del negocio ,compra de bienes de capital, inventarios etc.) ',
      edad:'18 años / Máxima (que la persona se encuentre en pleno uso de sus facultades mentales)',
      antigüedad:'3 años constituido en la actividad economica y operando en el mismo local',
      ingresos:'Ventas mínimas con tarjetas $150,000 pesos mensuales',
      aval:'Sin necesidad de aval',
      buro:'',
      propiedad:'',
      grabar:'',
      observaciones:' 1. Dirigido a negocios que tienen ventas con tarjetas bancarias al consumidor final. | 2. Tener por lo menos 1 año operando con TPV (no importa con que banco o agregador siempre y cuando las ventas caigan a una cuenta bancaria). |3.-Ventas mensuales con tarjeta bancaria de $150,000.00 mensuales  y que representen por lo menos el 50% del total de las ventas. |4. Estas ventas se cobrarán a través de un adquiriente autorizado por Anticipa, mismo que tiene que ser contratado antes de la firma del contrato Cash Advance. |5. El negocio debe llevar 3  años constituido en la actividad economica y operando en el mismo local. |6. Dirigido a Persona Moral incluyendo AC y Persona Física con Actividad Empresarial.',
      },
      ],
    descripcion: "Activos productivos / Transporte / Maquinaria / Cómputo / Equipo especializado / Mobiliario",
    img: "assets/anticipa.png"
  },
  {
    id: 5,
    nombre: "BX+",
    proceso: "mail",
    fase: "2",
    productos: [
      {name:"ADQUISICION PYME (CRÉDITO SIMPLE)",
       presencia:'Nacional excepto Chihuahua, Oaxaca y Guerrero',
       destinos:'Activos productivos / Transporte/ Maquinaria/ cómputo/ Equipo especializado / mobiliario',
       edad:'25 a 70 años',
       antigüedad:'Min 2 años de operación',
       ingresos:'Sin restricción en ventas anuales',
       aval:'Obligado Solidario (Principal Accionista)',
       buro:'Puntual sin atrasos, Buen comportamiento. Montos Vigentes similares a lo solicitado',
       propiedad:'Sin Garantía /Relación Patrimonial Informativa',
       gravar:'Solo se llena formato de relación patrimonial',
       observaciones:'Aplican políticas, condiciones y restricciones de acuerdo con el equipo a arrendar. Cliente puede contratar el Seguro por su cuenta (Seguro oblitario).'
      },
      {
        name:"LIQUIDEZ PYME",
        presencia:'Nacional excepto Chihuahua, Oaxaca y Guerrero',
        destinos:'Activos productivos / Transporte/ Maquinaria/ cómputo/ Equipo especializado / mobiliario',
        edad:'25 a 70 años',
        antigüedad:'Min 2 años de operación',
        ingresos:'Sin restricción en ventas anuales',
        aval:'Obligado Solidario (Principal Accionista)',
        buro:'Puntual sin atrasos, Buen comportamiento. Montos Vigentes similares a lo solicitado',
        propiedad:'Sin Garantía /Relación Patrimonial Informativa',
        gravar:'Solo se llena formato de relación patrimonial',
        observaciones:'Aplican políticas, condiciones y restricciones de acuerdo con el equipo a arrendar. Cliente puede contratar el Seguro por su cuenta (Seguro oblitario).' 
      },
    ],
    descripcion: "Activos productivos / Transporte / Maquinaria / Cómputo / Equipo especializado / Mobiliario",
    img: "assets/bx+.png"
  },
  {
    id: 6,
    nombre: "ION",
    proceso: "mail",
    fase: "2",
    productos: ["INMOBILIARIO EMPRESARIAL (CRÉDITO SIMPLE)"],
    descripcion: "Adquisición de inmuebles, Capital de trabajo, Financiamiento para expansión, financiamiento de proyectos de inversión productivos, Destino libre.",
    img: "assets/Ion.png"
  },
  {
    id: 7,
    nombre: "HeyBanco",
    proceso: "mail",
    fase: "1",
    productos: [
      {
       name:"CREDITO REVOLVENTE ", 
       presencia: 'Aguascalientes, Baja California, Baja California Sur, Chihuahua, Ciudad de México, Coahuila, Durango, Estado de México, Guanajuato, Hidalgo, Jalisco, Michoacán, Morelos, Nayarit, Nuevo León, Oaxaca, Puebla, Querétaro, Quintana Roo, San Luis Potosí, Sinaloa, Sonora, Tamaulipas, Veracruz, Yucatán. Nota: Consulta los municipios y/o alcaldías participantes de cada estado en la biblioteca virtual de SISEC.',
       destinios: 'Capital de Trabajo',     
       edad:'Edad entre 18 y 69 años 11 meses (al momento del otorgamiento)', 
       antigüedad:'2 años mínimo',
       ingresos:'hasta 250 MDP anuales',
       aval:'Sí (principal accionista)',
       buro:'Excelente Buró de Crédito. No Negociable.',
       propiedad:'Sin Garantía',
       gravar:'En caso de aplicar (aforo 1:1)',
       observaciones:'Créditos de Hasta 15 MDP: excepto AC y SC |Solo podrán acreditarse clientes locales, la distancia máxima para prospección de cada bróker sera de 150 km a la redonda de su residencia actual. |Deuda total en buró de hasta 50 MDP | Podrán ingresar solicitudes de crédito personas morales que cuenten con intervinientes extranjeros con residencia permanente en México (aplica para representante legal, accionistas y avales). | No se tomarán como flujo los ingresos de entidades gubernamentales, serán sujetos de crédito siempre y cuando no presenten dependencia de ingresor mayor al 50% de la entidad gubernamental. |Se podrán solicitar productos adicionales para el mismo cliente una vez transcurridos 6 meses del crédto inmediato anterior.'
      },
      {name:"CREDITO SIMPLE",
        presencia: 'Aguascalientes, Baja California, Baja California Sur, Chihuahua, Ciudad de México, Coahuila, Durango, Estado de México, Guanajuato, Hidalgo, Jalisco, Michoacán, Morelos, Nayarit, Nuevo León, Oaxaca, Puebla, Querétaro, Quintana Roo, San Luis Potosí, Sinaloa, Sonora, Tamaulipas, Veracruz, Yucatán. Nota: Consulta los municipios y/o alcaldías participantes de cada estado en la biblioteca virtual de SISEC.',
        destinios:'Capital de Trabajo, Adquisición de activos fijos, proyectos de inversión, pago de pasivos.',
        edad:'Edad entre 18 y 69 años 11 meses (al momento del otorgamiento)',
        antigüedad:'2 años mínimo',
        ingresos:'hasta 250 MDP anuales',
        aval:'Sí (principal accionista)',
        buro:'Excelente Buró de Crédito. No Negociable.',
        propiedad:'Sin Garantía',
        gravar:'En caso de aplicar (aforo 1:1)',
        observaciones:'Créditos de Hasta 15 MDP: excepto AC y SC |Solo podrán acreditarse clientes locales, la distancia máxima para prospección de cada bróker sera de 150 km a la redonda de su residencia actual. |Deuda total en buró de hasta 50 MDP | Podrán ingresar solicitudes de crédito personas morales que cuenten con intervinientes extranjeros con residencia permanente en México (aplica para representante legal, accionistas y avales). | No se tomarán como flujo los ingresos de entidades gubernamentales, serán sujetos de crédito siempre y cuando no presenten dependencia de ingresor mayor al 50% de la entidad gubernamental. |Se podrán solicitar productos adicionales para el mismo cliente una vez transcurridos 6 meses del crédto inmediato anterior.' 
      },
      ],
    descripcion: "Capital de Trabajo, Adquisición de activos fijos, proyectos de inversión, pago de pasivos.",
    img: "assets/heybanco.jpg"
  },
  {
    id: 8,
    nombre: "ActiveLeasing",
    proceso: "mail",
    fase: "1",
    viabilidad: [
      "ESTADOS FINANCIEROS AL CIERRE 2021, 2022 Y PARCIAL 2023 NO MAYOR A 2 MESES (CON ANALÍTICAS Y FIRMADOS POR EL REPRESENTANTE LEGAL Y CP)",
      "CONSULTA ESPECIAL DE BURÓ DE CRÉDITO RECIENTE",
      "FIRMA EKATENA (CLAVE CIEC)",
      "FICHA TÉCNICA DEL ACTIVO"
    ],
    productos: [
     {
      name: "ARRENDAMIENTO PURO" ,
      presencia:'Nacional',
      destinos:'Compra de activos productivos  (bodegas industriales, oficinas, edificios, locales comerciales)',
      edad:' 25 años a 65 años',
      antigüedad:'3 años completos operando',
      ingresos:' 60 Millones de pesos en ventas anual',
      aval:'Obligado Solidario (Principales Accionistas)',
      buro:'bueno',
      propiedad:'En la relación patrimonial del obligado solidario nos tienen que enviar las escrituras de las propiedades que están reportando ',
      gravar:'No se grava, solo se verifica',
      observaciones:'Todos los prospectos y/o clientes se tienen que firmar con las CIEC y deben de cumplir las ventas mínimas, su facturación anual no debe de exceder del 10% a gobierno'
     },

    ],
    descripcion: "Compra de activos productivos (bodegas industriales, oficinas, edificios, locales comerciales).",
    img: "assets/activeleasing.jpeg"
  },
  {
    id: 9,
    nombre: "HayCash",
    proceso: "link",
    url: "https://haycash.com.mx/home",
    fase: "1",
    viabilidad: [],
    productos: [
   {
     name: "FINANCIAMIENTO CON TERMINAL PUNTO DE VENTA (TPV)",
     presencia:'Toda la República Mexicana',
     destinos:'Capital de trabajo , • Apertura de nuevas sucursales , • Compra de activo fijo, • Remodelación, • Publicidad & marketing,• Y muchos más…',
     edad:'21-60',
     antigüedad:'12 meses de operación',
     ingresos:' $200,000 MXN en terminal punto de venta (TPV) mensual',
     aval:'En caso de ser PFAE se solicita adicional',
     buro:'Flexibilidad en buró de crédito, no quebrantos (no es factor determinante para la calificación del crédito) ',
     propiedad:'NO',
     gravar:'NO',
     observaciones:'Cualquier negocio que tenga ventas en Terminal Punto de Venta (TPV)'
   },
    ],
    descripcion: "Capital de trabajo, Apertura de nuevas sucursales, Compra de activo fijo, Remodelación, Publicidad & marketing, y muchos más.",
      img: "assets/haycash.png"
  },
  {
    id: 10,
    nombre: "Finsus",
    proceso: "link",
    fase: "2",
    productos: ["FACTORAJE", "AGRO", "CRÉDITO PARAMÉTRICO"],
    descripcion: "Gobierno, giros negros, outsourcing nómina, combustibles y derivados, sindicatos, traslado de valores, sociedades de inversión, etc.",
    img: "assets/finsus.png"
  },
  {
    id: 11,
    nombre: "FinBeABC",
    proceso: "mail",
    fase: "2",
    productos: [
      "ARRENDAMIENTO PURO",
      "CRÉDITO SIMPLE (SIN GARANTÍA)",
      "CRÉDITO REVOLVENTE"
    ],
    descripcion: "Adquisición de activos fijos, Compra y/o remodelación de inmuebles, Construcción de bodegas y naves industriales, pago de pasivos.",
    img: "assets/finbeabc.png"
  },
  {
    id: 12,
    nombre: "Xepelin",
    proceso: "link",
    url: "https://xepelin.com/mx",
    fase: "1",
    productos: [
     {
      name:"FACTORAJE",
      presencia:'TODA LA REPUBLICA',
      destinos:'',
      edad:'25 AÑOS Y 69 AÑOS',
      antigüedad:'PFAE 24 MESES FACTURANDO CONTINUOS Y PM 12 MESES FACTURANDO CONTINUAMENTE',
      ingresos:' $400,000',
      aval:'LA FACTURA ES LA GARANTIA',
      buro:'NO BURO MAYOR A 4 (QUEBRANTOS), SI LA EMPRESA NO TIENE HISTORIAL NECESITAREMOS QUE SUBA AL RL O ACCIONISTA CON MAYOR PORCENTAJE TENGA HISTORIAL CREDITICIO',
      propiedad:'N/A',
      grabar:'N/A',
      observaciones: 'LOS TIEMPOS DE RESPUESTA UNA VEZ QUE TERMINA DE REGISTRARSE CORRECTAMENTE ES DE 24 A 48 HRS'

     },
    ],
      // "FACTORAJE PM CORP", 
      // "FACTORAJE PFAE" 
    descripcion: "Seguridad privada, despachos jurídicos y contables, outsourcing, aseguradoras, gobierno, minería, gasolinerías, sofom, casas de apuestas.",
    img: "assets/xepelin.jpeg"
  },
  {
    id: 13,
    nombre: "Arrenda+",
    proceso: "mail",
    fase: "1",
    // productos: ["ARRENDAMIENTO PF", "ARRENDAMIENTO PFAE", "ARRENDAMIENTO PM", "CRÉDITO SIMPLE PF", "CRÉDITO SIMPLE PFAE", "CRÉDITO SIMPLE PM"],
    productos:[
      {
        name:"ARRENDAMIENTO",
        presencia:'REPÚBLICA MEXICANA',
        destinos:'ADQUISICIÓN DE ACTIVOS NUEVOS',
        edad:'MÍNIMA 26 AÑOS Y MÁXIMA 65 AÑOS',
        antigüedad:'MÍNIMO 3 MESES DE CONSTITUIDO', 
        ingresos:'N/A Nota: Se revisa Edos. financieros parciales',
        aval:'SI ES PERSONA MORAL SIEMPRE SE NECESITARÁ UN AVAL PERSONA FÍSICA. EN EL CASO DE PFAE O PF SOLO SE NECESITARÁ AVAL SI EL PROSPECTO NO CUENTA CON EXPOSICIÓN DE BURÓ DE CRÉDITO.',
        buro:'Experiencia Crediticia similar o mayor al credito que solicita  y capacidad de pago MOP1  y MOP 2',
        propiedad:'EN ARRENDAMIENTO Y S&LB LOS PROPIOS ACTIVOS SON LA GARANTÍA',
        grabar:'EN NINGÚN CASO DE GRAVAN LAS GARANTÍAS. LAS PRENDARIAS SE  REGISTRAN EN EL REGISTRO ÚNICO DE GARANTÍAS (RUG) Y LAS PROPIEDADES SE REGISTRAN MEDIANTE FIDEICOMISO.',
        observaciones:'INDISPENSABLE TENER COMPLETO EL EXPEDIENTE DESDE UN INICIO.'
      },
      {
        name:"S&LB",
        presencia:'REPÚBLICA MEXICANA',
        destinos:'CAPITAL DE TRABAJO, LIQUIDEZ Y ADQUISICIÓN DE ACTIVOS',
        edad:'MÍNIMA 26 AÑOS Y MÁXIMA 65 AÑOS',
        antigüedad:'MÍNIMO 3 MESES DE CONSTITUIDO',
        ingresos:'N/A Nota: Se revisa Edos. financieros parciales',
        aval:'SI ES PERSONA MORAL SIEMPRE SE NECESITARÁ UN AVAL PERSONA FÍSICA. EN EL CASO DE PFAE O PF SOLO SE NECESITARÁ AVAL SI EL PROSPECTO NO CUENTA CON EXPOSICIÓN DE BURÓ DE CRÉDITO.',
        buro:'Experiencia Crediticia similar o mayor al credito que solicita  y capacidad de pago MOP1  y MOP 2',
        propiedad:'EN ARRENDAMIENTO Y S&LB LOS PROPIOS ACTIVOS SON LA GARANTÍA',
        grabar:'EN NINGÚN CASO DE GRAVAN LAS GARANTÍAS. LAS PRENDARIAS SE  REGISTRAN EN EL REGISTRO ÚNICO DE GARANTÍAS (RUG) Y LAS PROPIEDADES SE REGISTRAN MEDIANTE FIDEICOMISO.',
        observaciones:'INDISPENSABLE TENER COMPLETO EL EXPEDIENTE DESDE UN INICIO.'

      },
      {
        name:"Simple con garantia",
        presencia:'REPÚBLICA MEXICANA',
        destinos:'CAPITAL DE TRABAJO, LIQUIDEZ, ADQUISICIÓN DE ACTIVOS Y PAGO DE PASIVOS',
        edad:'MÍNIMA 26 AÑOS Y MÁXIMA 65 AÑOS',
        antigüedad:'MÍNIMO 3 MESES DE CONSTITUIDO',
        ingresos:'N/A Nota: Se revisa Edos. financieros parciales',
        aval:'SI ES PERSONA MORAL SIEMPRE SE NECESITARÁ UN AVAL PERSONA FÍSICA. EN EL CASO DE PFAE O PF SOLO SE NECESITARÁ AVAL SI EL PROSPECTO NO CUENTA CON EXPOSICIÓN DE BURÓ DE CRÉDITO.',
        buro:'Experiencia Crediticia similar o mayor al credito que solicita  y capacidad de pago MOP1  y MOP 2',
        propiedad:'GARANTÍA HIPOTECARIA APLICA PARA CRÉDITO SIMPLE PERO SIEMPRE ACOMPAÑADA DE UNA GARANTÍA PRENDARIA',
        grabar:'EN NINGÚN CASO DE GRAVAN LAS GARANTÍAS. LAS PRENDARIAS SE  REGISTRAN EN EL REGISTRO ÚNICO DE GARANTÍAS (RUG) Y LAS PROPIEDADES SE REGISTRAN MEDIANTE FIDEICOMISO.',
        observaciones:'INDISPENSABLE TENER COMPLETO EL EXPEDIENTE DESDE UN INICIO.'
      },
    ],
    descripcion: "Si es persona moral siempre se necesitará un aval persona física. En el caso de PFAE o PF solo se necesitará aval si el prospecto no cuenta con exposición de buró de crédito.",
    img: "assets/arrenda+.webp"
  },
  {
    id: 14,
    nombre: "Afirme",
    proceso: "mail",
    fase: "1",
    // productos: ["PYME INMUEBLES 15MDP", "PYME SIMPLE REVOLVENTE 40MDP"],
    descripcion: "Capital de trabajo, adquisición de activo fijo y pagos pasivos.",
    valores: [
      'PRESENCIA: Aguascalientes (Aguascalientes) | Guanajuato (León, Salamanca) | Querétaro (Querétaro) | San Luis Potosí (San Luis Potosí) | Ciudad de México (Azcapotzalco, Benito Juárez, Cuajimalpa, Cuauhtémoc, Gustavo A. Madero, Iztapalapa, Miguel Hidalgo, Tlalpan) | Edo. México (Nezahualcóyotl, Atizapán, Cuautitlán, Metepec, Naucalpan, Tlalnepantla, Toluca) | Puebla (Puebla) | Guerrero (Acapulco, Chilpancingo) | Morelos (Cuernavaca) | Nuevo León (Allende, Apodaca, Cadereyta, Guadalupe, Juárez, Montemorelos, Monterrey, San Nicolás, San Pedro, Santa Catarina, Villa de Santiago) | Coahuila (Monclova, Piedras Negras, Saltillo, Torreón) | Durango (Durango) | Tamaulipas (Matamoros, Reynosa, Tampico) | Baja California (Ensenada, Tijuana) | Chihuahua (Cd. Juárez, Chihuahua) | Sinaloa (Culiacán) | Sonora (Hermosillo) | Colima (Colima, Manzanillo, Tecomán) | Jalisco (Guadalajara, Tlajomulco) | Michoacán (Lázaro Cárdenas, Morelia) | Quintana Roo (Cancún) | Yucatán (Mérida)',
      'PRINCIPALES DESTINOS:',
      'EDAD MINIMA/MAXIMA: Edad mínima del solicitante 25 años y máxima 65 años ',
      'ANTIGÜEDAD EMPRESA: ',
      'INGRESOS',
      'AVAL: Principal accionista o familiar consanguíneo de 1° o 2° grado ',
      'BURO: Antecedentes crediticios 12 meses con Crédito Comercial (validar buró) además Calificación de Buró Excelente, Bueno o Regular (validar buró)',
      'PROPIEDAD:',
      'GRAVAR: ',
      'OBSERVACIONES: Que el prospecto no sea cliente de Afirme, solo clientes nuevos. Validar que los prospectos no presenten perdidas de capital significativas, quiebra técnica (capital contable negativo)(validar Información financiera). Sin penalización por pagos anticipados.'
    ],
    
    img: "assets/afirme.png"
  }
];
