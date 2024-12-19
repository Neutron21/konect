export const documentacion: any = {
    F1: {
        name: 'konfio',
        p1: {
            name: 'creditoS pm',
            documentos: [
                {nombre: 'IDENTIFICACIÓN', desc: 'DE UN ACCIONISTA CON UN MÍNIMO DE 25% DE ACCIONES'},
                {nombre: 'RFC', desc: 'CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT'},
                {nombre: 'ACTA CONSTITUTIVA', desc: 'CON FOLIO DEL RPP'},
                {nombre: 'ASAMBLEAS' , desc: 'CON FOLIO DEL RPP (EN CASO DE APLICAR)'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'DEL NEGOCIO'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL DE LA EMPRESA', desc: ''},
                {nombre: 'IDENTIFICACION REP LEGAL', desc: 'INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'REP LEGAL'},
                {nombre: 'OBL SOL INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO', desc: '(VIGENTES Y ESCANEADOS EN PDF)'},
                {nombre: 'OBL SOL COMPROBANTE DE DOMICILIO', desc:'(VIGENTES Y ESCANEADOS EN PDF)'}
            ]
            
        },
        p2: {
            name: 'tdcEmpresario pm',
            documentos: [
                {nombre: 'Identificación de un accionista', desc: 'Con un mínimo de 25% de acciones'},
                {nombre: 'RFC', desc: 'Con el que facturas y contraseña del SAT'},
                {nombre: 'Acta constitutiva', desc: 'Con folio del RPP'},
                {nombre: 'Asambleas con folio del RPP (en caso de aplicar)', desc: ''},
                {nombre: 'Comprobante de domicilio del negocio', desc: ''},
                {nombre: 'Constancia de situación fiscal', desc: 'De la empresa'},
                {nombre: 'Identificación Rep legal' , desc: 'INE, pasaporte o residencia permanente en caso de extranjero (vigentes y escaneados en PDF)'},
                {nombre: 'comprobante de domicilio', desc: 'Rep legal '},
                {nombre: 'Obl sol INE, pasaporte o residencia permanente en caso de extranjero', desc: '(vigentes y escaneados en PDF)'},
                {nombre: 'Obl sol comprobante de domicilio', desc: '(vigentes y escaneados en PDF)'}
            ]
            
        },
        p3: {
            name: 'tdcEmpresario pfae',
            documentos: [
                {nombre: 'IDENTIFICACION', desc: 'INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)'},
                {nombre: 'RFC', desc: 'CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT'},
                {nombre: 'COMPROBANTE DE DOMICILIO DEL NEGOCIO O CONSTANCIA DE SITUACIÓN FISCAL', desc: ''}
            ]
            
        },
        p4: {
            name: 'tdcEmpresario pfae',
            documentos: [
                {nombre: 'IDENTIFICACION', desc: 'INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)'},
                {nombre: 'RFC', desc: 'CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT'},
                {nombre: 'COMPROBANTE DE DOMICILIO ', desc:'DEL NEGOCIO O CONSTANCIA DE SITUACIÓN FISCAL'}
            ]
            
        }
    },
    F2: {
        name:'',
        viabilidad: [],
        p1: {
            name: '',
            documentos: [],
        },
        p2: {
            name: '',
            documentos: [],
        },
    },
    F3: {
        name: 'covalto',
        viabilidad: [
            {nombre: 'BURÓ DE CRÉDITO', desc: 'TANTO DEL ACREDITADO COMO DEL AVAL'},
            {nombre: 'ESTADOS FINANCIEROS' , desc: 'DE LOS ÚLTIMOS DOS CIERRES DE AÑOS Y PARCIALES'},
            {nombre: 'CUADRO DE PASIVOS', desc:'ACTUALIZADO'},
            {nombre: 'CURRICULUM VITAE', desc: ' (CV)'}
        ],
        
        p1:{
            name: 'CreditoSimpleRevolventeConGarantia Pm',
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO', desc: 'COMPLETA Y FIRMADA'},
                {nombre: 'ACTA CONSTITUTIVA CON RPP', desc: ''},
                {nombre: 'ASAMBLEAS Y/O PODERES COMPLETAS', desc: ''},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'BURÓ FIRA', desc: 'En caso de que aplique'},
                {nombre: 'KYC', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'KYC AMPLIADO', desc: 'EN CASO DE SER UN CLIENTE QUE PEPRESENTE ALGUN RIESGO'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'NO MAYOR A 3 MESES (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)'},
                {nombre: 'IDENTIFICACION', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE ,  INE / PASAPORTE / EXTRANJERO FM2'},
                {nombre: 'ACTA DE MATRIMONIO', desc: 'CUANDO APLIQUE'},
                {nombre: 'IDENTIFICACIÓN DEL CÓNYUGE', desc: 'CUANDO APLIQUE'},
                {nombre: 'CURP', desc: 'ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'NO MAYOR A 3 MESES (DEBE DE COINCIDIR CONTRA SOLICITUD y KYC)'},
                {nombre: 'ÚLTIMOS 3 ESTADOS DE CUENTA', desc: 'EN CASO DE SER CLIENTES SE PODRÁN UTILIZAR HASTA ANTERIORES 2 AÑOS'},
                {nombre: 'ESTADO FINANCIERO' , desc: 'COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO, FIRMADOS POR RL CON ANALÍTICAS , ACREDITADO Y COACREDITADO SI APLICA (REVISAR TABLA DE PERIODOS EXIGIBLES)'},
                {nombre: 'VALIDACIÓN SAT', desc: 'https://clientes.credijusto.com/'},
                {nombre: 'AVISO DE PRIVACIDAD FIRMADO', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'ESCRITURA O TÍTULO DE PROPIEDAD', desc: 'PRIMER TESTIMONIO CON RPP Y DATOS DE SUPERFICIE, MEDIDAS Y COLINDANCIAS'},
                {nombre: 'CERTIFICACIONES Y CERTIFICADOS LIBRES DE GRAVAMEN', desc: ''},
                {nombre: 'SOLICITUD DE AVALÚO', desc: ''},
                {nombre: 'BACKLOG', desc: 'CUANDO EL ACREDITADO TIENE FUNCIONES A TRAVÉS DE CONTRATOS'},
                {nombre: 'PROPUESTA INDICATIVA', desc: ''},
                {nombre: 'BOLETA DE AGUA', desc: 'CON SELLO DE PAGADO O CONSTANCIA DE NO ADEUDO'},
                {nombre: 'BOLETA DE PREDIAL', desc: ''},
                {nombre: 'REPORTE DE VISITA OCULAR', desc: ''},
                {nombre: 'FORMATO DE COTEJO DE DOCUMENTOS', desc: ''},
                {nombre: 'CARTA SALDO DE LOS PASIVOS', desc: 'SI TIENE AUTORIZADO PAGO DE PASIVOS'},
                {nombre: 'APERTURA DE CUENTA COVALTO', desc: ''},
                {nombre: 'PLAN DE NEGOCIOS', desc: ''}
            ]  
        },
        p2:{
            name: 'CreditoParametrico Pm',
            documentos: [
                {nombre: 'Solicitud en', desc: 'https://micredito.covalto.com/login/'},
                {nombre: 'ACTA CONSTITUTIVA CON SELLO DE REGISTRO PÚBLICO DE LA PROPIEDAD', desc: 'PRIMER TESTIMONIO'},
                {nombre: 'IDENTIFICACIÓN OFICIAL VIGENTE', desc: 'INE de accionista mayoritario'},
                {nombre: 'ESTADOS FINANCIEROS CON ANALÍTICAS DE LOS ÚLTIMOS 2 AÑOS + ÚLTIMO PARCIAL', desc: 'FIRMADOS POR EL REPRESENTANTE LEGAL'},
                {nombre: 'ACTAS DE MODIFICACIONES ACCIONARIAS', desc: ''},
                {nombre: 'ACTA DE PODERES CON SELLO DE REGISTRO PÚBLICO DE LA PROPIEDAD', desc: ''},
                {nombre: 'CONSTANCIA DE LA SITUACIÓN FISCAL ACTUALIZADA', desc: 'PM, ACCIONISTA MAYORITARIO, ACCIONISTAS CON MÁS DEL 25%'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'NO MAYOR A 3 MESES PM, ACCIONISTA MAYORITARIO, ACCIONISTAS CON MÁS DEL 25%'},
                {nombre: 'CONSTANCIA DE LA FIEL O DOCUMENTO EXPEDIDO POR EL SAT QUE PRESENTE EL NÚMERO DE FIEL ACTIVO PARA SU VALIDACIÓN', desc: 'PM, Accionista mayoritario, Accionistas con más del 25% (https://portalsat.plataforma.sat.gob.mx/recuperaciondecertificados/)'},
                {nombre: 'KYC', desc: ''},
                {nombre: 'CURP', desc: ''},
                {nombre: 'CIEC', desc: 'PM,ACCIONISTA MAYORITARIO, ACCIONISTAS CON MÁS DEL 25%'},
                {nombre: 'SOLICITUD DE CRÉDITO', desc: ''},
                {nombre: 'ÚLTIMO ESTADO DE CUENTA PARA PROCESO DE DOMICILIACIÓN', desc:'NO ES NECESARIO RECOLECTAR TODAS LAS PÁGINAS QUE MUESTRAN LA TRANSACCIONALIDAD, SOLO ES NECESARIO LA CARÁTULA Y/O LA HOJA QUE MUESTRE EL RESUMEN DE LA CUENTA: BANCO, NÚMERO DE CUENTA, MES, SALDO INICIAL, DEPÓSITOS, RETIROS, SALDO FINAL, PROMEDIO MENSUAL'},
                {nombre: 'REPORTE DE VISITA OCULAR', desc: ''},
                {nombre: 'APERTURA DE CUENTA COVALTO', desc: ''},
                {nombre: 'ACTIVACIÓN DE BANCA ELECTRÓNICA', desc: ''}
            ]
            
        },
        p3: {
            name: 'ArrendamientoPuroSyLB pm',
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO', desc: 'COMPLETA Y FIRMADA'},
                {nombre: 'ACTA CONSTITUTIVA CON RPP', desc: ''},
                {nombre: 'ASAMBLEAS Y/O PODERES COMPLETAS', desc: ''},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: ''},
                {nombre: 'KYC', desc:'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'NO MAYOR A 3 MESES (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)'},
                {nombre: 'INE / PASAPORTE / EXTRANJERO FM2', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'CURP', desc: 'ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'NO MAYOR A 3 MESES (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)'},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'ÚLTIMOS 3 ESTADOS DE CUENTA', desc: 'En caso de ser clientes de hasta 2 años'},
                {nombre: 'ESTADO FINANCIERO', desc: 'COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO , FIRMADOS POR RL CON ANALITICAS (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)'},
                'VALIDACIÓN SAT', 'https://clientes.credijusto.com/',
                {nombre: 'AVISO DE PRIVACIDAD', desc: 'FIRMADO POR ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'COTIZACIÓN A NOMBRE DEL ACREDITADO', desc: 'CON DATOS DE CONTACTO DE PROVEEDOR, MARCA Y MODELO'},
                {nombre: 'VALIDACIÓN DEL ACTIVO / VOBO DE ACTIVOS', desc: ''},
                {nombre: 'PEDIMENTO EN CASO DE APLICAR', desc: ''},
                {nombre: 'PROPUESTA INDICATIVA', desc: ''}
            ]
            
        },
        p4: {
            name: 'CreditoSimpleRevolventeConGarantia Pfae',
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO', desc: 'COMPLETA Y FIRMADA'},
                {nombre: 'INE / PASAPORTE / EXTRANJERO FM2', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: '2DA. IDENTIFICACIÓN', desc: ''},
                {nombre: 'CURP', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'ACTA DE MATRIMONIO / CONFIRMAR SOLTERÍA', desc: ''},
                {nombre: 'IDENTIFICACIÓN DEL CÓNYUGE', desc: 'CUANDO APLIQUE'},
                {nombre: 'KYC', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'KYC AMPLIADO', desc: 'EN CASO DE SER UN CLIENTE QUE REPRESENTE ALGÚN RIESGO'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'NO MAYOR A 3 MESES (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'NO MAYOR A 3 MESES (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)'},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'ÚLTIMOS 3 ESTADOS DE CUENTA', desc: 'EN CASO DE SER CLIENTES DE HASTA 2 AÑOS'},
                {nombre: 'ESTADO FINANCIERO', desc: 'COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO,  FIRMADOS POR RL CON ANALITICAS (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)'},
                'VALIDACIÓN SAT', 'https://clientes.credijusto.com/',
                {nombre: 'AVISO DE PRIVACIDAD FIRMADO', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'ESCRITURA O TÍTULO DE PROPIEDAD', desc: 'PRIMER TESTIMONIO CON RPP Y DATOS DE SUPERFICIE, MEDIDAS Y COLINDANCIAS'},
                {nombre: 'SOLICITUD DE AVALÚO', desc: ''},
                {nombre: 'PROPUESTA INDICATIVA', desc: ''},
                {nombre: 'BOLETA DE AGUA', desc: 'CON SELLO DE PAGADO O CONSTANCIA DE NO ADEUDO'},
                {nombre: 'BOLETA DE PREDIAL', desc: ''},
                {nombre: 'REPORTE DE VISITA OCULAR', desc: ''},
                {nombre: 'FORMATO DE COTEJO DE DOCUMENTOS', desc: ''},
                {nombre: 'CARTA SALDO DE LOS PASIVOS', desc: 'SI TIENE AUTORIZADO PAGO DE PASIVOS'},
                {nombre: 'APERTURA DE CUENTA COVALTO', desc: ''},
                {nombre: 'PLAN DE NEGOCIOS', desc: ''}
            ]
            
        },
        p5: {
            name: 'ArrendamientoPuroSyLB Pfae',
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO', desc: ' COMPLETA Y FIRMADA'},
                {nombre: 'INE / PASAPORTE / EXTRANJERO FM2', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: '2DA. IDENTIFICACIÓN', desc: ''},
                {nombre: 'CURP', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'ACTA DE MATRIMONIO / CONFIRMAR SOLTERÍA', desc: ''},
                {nombre: 'KYC', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'NO MAYOR A 3 MESES (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'NO MAYOR A 3 MESES (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)'},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'ÚLTIMOS 3 ESTADOS DE CUENTA', desc: 'EN CASO DE SER CLIENTES DE HASTA 2 AÑOS'},
                {nombre: 'ESTADO FINANCIERO', desc: 'COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO FIRMADOS POR RL CON ANALITICAS (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)'},
                'VALIDACIÓN SAT', 'https://clientes.credijusto.com/',
                {nombre: 'AVISO DE PRIVACIDAD', desc: 'FIRMADO Y ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'COTIZACIÓN A NOMBRE DEL ACREDITADO', desc: 'CON DATOS DE CONTACTO DE PROVEEDOR, MARCA Y MODELO'},
                {nombre: 'VALIDACIÓN DEL ACTIVO / VOBO DE ACTIVOS', desc: ''},
                {nombre: 'PEDIMENTO EN CASO DE APLICAR', desc: ''},
                {nombre: 'PROPUESTA INDICATIVA', desc: ''}
            ]
            
        }
    },
    F4: {
        name:'',
        viabilidad: [],
        p1: {
            name: '',
            documentos: [],
        },
        p2: {
            name: '',
            documentos: [],
        },
    },
    F5: {
        name:'',
        viabilidad: [],
        p1: {
            name: '',
            documentos: [],
        },
        p2: {
            name: '',
            documentos: [],
        },
    },
    F6: {
        name:'',
        viabilidad: [],
        p1: {
            name: '',
            documentos: [],
        },
        p2: {
            name: '',
            documentos: [],
        },
    },
   F7: {
    name: 'heyBanco',
    p1: {
        name:'creditoSimple',
        documentos: [
          {nombre:'IDENTIFICACIÓN',desc:'INE, PASAPORTE, EXTRAGERO FM2 , RECIDENCIA PERMANENTE'},
          {nombre:'SOLICITUD DE NEGOCIOS',desc:'EXCEL DISPONIBLE'},
          {nombre:'FORMATO CONOCE A TU CLIENTE',desc:'EXCEL DISPONIBLE'},
          {nombre:'RELACION DE PROPIEDADES',desc:'EXCEL DISPONIBLE'},
          {nombre:'VISITA OCULAR',desc:'10 FOTOGRAFIAS ,REALIZADA POR EL BROKER POR EL BROKER'},
          {nombre:'CONSTANCIA DE SITUACIÓN FISCAL',desc:'DEL CLIENTE , NO MAYOR A 3 MESES '},
          {nombre:'ACTA CONSTITUTIVA',desc:'CON FOLIO DEL RPP, PODERES Y ACTAS DE ASAMBLEA , TODAS LAS ACTAS'},
          {nombre:'AVISO DE PRIVACIDAD',desc:'PM/PFAE Y AVALES , DOCUMENTO DISPONIBLE'},
          {nombre:'COMPROBANTE DE DOMICILIO',desc:'NO MAYOR A 3 MESES , FISCAL, OPERATIVO Y PARTICULAR DEL AVAL/ SI NO HAY AL SU NOMBRE PONER CONTRATO DE ARRENDAMIENTO'},
          {nombre:'ESTADOS DE CUENTA',desc:'ULTIMOS 12 MESES , MÁXIMO 3 BANCOS DE TODOS LOS PARTICIPANTES'},
          {nombre:'VENTAS +100 MDP, PASIVOS DE + 25 MDP Y OPERACIONES + 10 MDP',desc:'ESTADOS FINANCIEROS PARCIALES DEL AÑO EN CURSO Y 2 AÑOS ANTERIORES , EDO DE RESULTADOS, BALANCE GENERAL Y ANALÍTICAS'},
        ],
    },
    p2: {
        name:'creditoRevolvente',
        documentos: [
            {nombre:'IDENTIFICACIÓN',desc:'INE, PASAPORTE, EXTRAGERO FM2 , RECIDENCIA PERMANENTE'},
            {nombre:'SOLICITUD DE NEGOCIOS',desc:'EXCEL DISPONIBLE'},
            {nombre:'FORMATO CONOCE A TU CLIENTE',desc:'EXCEL DISPONIBLE'},
            {nombre:'RELACION DE PROPIEDADES',desc:'EXCEL DISPONIBLE'},
            {nombre:'VISITA OCULAR',desc:'10 FOTOGRAFIAS ,REALIZADA POR EL BROKER POR EL BROKER'},
            {nombre:'CONSTANCIA DE SITUACIÓN FISCAL',desc:'DEL CLIENTE , NO MAYOR A 3 MESES '},
            {nombre:'ACTA CONSTITUTIVA',desc:'CON FOLIO DEL RPP, PODERES Y ACTAS DE ASAMBLEA , TODAS LAS ACTAS'},
            {nombre:'AVISO DE PRIVACIDAD',desc:'PM/PFAE Y AVALES , DOCUMENTO DISPONIBLE'},
            {nombre:'COMPROBANTE DE DOMICILIO',desc:'NO MAYOR A 3 MESES , FISCAL, OPERATIVO Y PARTICULAR DEL AVAL/ SI NO HAY AL SU NOMBRE PONER CONTRATO DE ARRENDAMIENTO'},
            {nombre:'ESTADOS DE CUENTA',desc:'ULTIMOS 12 MESES , MÁXIMO 3 BANCOS DE TODOS LOS PARTICIPANTES'},
            {nombre:'VENTAS +100 MDP, PASIVOS DE + 25 MDP Y OPERACIONES + 10 MDP',desc:'ESTADOS FINANCIEROS PARCIALES DEL AÑO EN CURSO Y 2 AÑOS ANTERIORES , EDO DE RESULTADOS, BALANCE GENERAL Y ANALÍTICAS'},
            
        ],
    },
   },
   F8: {
    name: 'activeLeasing',
    viabilidad: [
        {nombre: 'ESTADOS FINANCIEROS AL CIERRE', desc: '2021, 2022 Y PARCIAL 2023 NO MAYOR A 2 MESES CON ANALÍTICAS Y FIRMADOS POR EL REPRESENTANTE LEGAL Y CP'},
        {nombre: 'CONSULTA ESPECIAL DE BURÓ DE CRÉDITO RECIENTE', desc: ''},
        {nombre: 'FIRMA EKATENA', desc: 'CLAVE CIEC'},
        {nombre: 'FICHA TÉCNICA DEL ACTIVO', desc: ''}
    ],
    p1: {
        id:'p1',
        name: 'arrendamientoPuro',
        documentos: [
            {nombre: 'ACTA CONSTITUTIVA', desc: 'PODERES, PROTOCOLIZACIONES ETC ,CON SELLO RPP'},
            {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: ''},
            {nombre: 'COMPROBANTE DE DOMICILIO', desc: ''},
            {nombre: 'ÚLTIMOS 5 ESTADOS DE CUENTA', desc: 'DE LAS PRINCIPALES CUENTAS'},
            {nombre: 'CÉDULA PROFESIONAL DEL CONTADOR', desc: ''},
            {nombre: 'IDENTIFICACIÓN', desc: 'DEL REPRESENTANTE LEGAL'},
            {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'AVAL'},
            {nombre: 'IDENTIFICACIÓN OFICIAL VIGENTE', desc: 'AVAL'},
            {nombre: 'COMPROBANTE DE DOMICILIO RECIENTE', desc: 'AVAL'},
            {nombre: 'ESTADO DE CUENTA COMPLETO', desc: 'AVAL'},
            {nombre: 'ACTA DE MATRIMONIO Y ESCRITURA DE LA PROPIEDAD', desc: 'AVAL'},
            {nombre: 'SOLICITUD DE FINANCIAMIENTO', desc: ''},
            {nombre: 'FORMATO CONSULTA BURO DE CRÉDITO', desc: 'ACREDITADO'},
            {nombre: 'FORMATO CONSULTA BURO DE CRÉDITO', desc: 'AVAL'},
            {nombre: 'AVISO DE PRIVACIDAD', desc: 'ACREDITADO'},
            {nombre: 'AVISO DE PRIVACIDAD', desc: ' AVAL'},
            {nombre: 'RELACIÓN DE PASIVOS' , desc: 'ACREDITADO'},
            {nombre: 'RELACIÓN DE PASIVOS', desc: 'AVAL'},
            {nombre: 'RELACIÓN PATRIMONIAL', desc: 'AVAL'}
        ]
        
    }
   },
   F9: {
    name: 'hayCash',
    viabilidad: [
        {nombre: 'Constancia de Situación Fiscal', desc: 'Actualizada menor a tres meses y descargada del portal del SAT'},
        {nombre: 'CIEC', desc: ''},
        {nombre: 'Autorización de Buró', desc: ''},
        {nombre: 'Estados de cuenta', desc: '3 últimos'}
    ],
    p1: {
        name: 'Financiamiento con Terminal Punto de Venta (TPV) Pm',
        documentos: [
            {nombre: 'Checklist Persona Moral' , desc: 'Acta Constitutiva y todas las Asambleas con su respectivo RPPC'},
            {nombre: 'Constancia de Situación Fiscal', desc: 'Actualizada menor a tres meses y descargada del portal del SAT'},
            {nombre: 'Contratos de arrendamiento', desc: ' Vigente y/o Escritura de Propiedad , Mandar de cada Sucursal'},
            {nombre: 'Comprobante de domicilio', desc: 'Mandar de cada Sucursal y Fiscal, menor a tres meses'},
            {nombre: 'Estados de cuenta', desc: 'Últimos 12 meses'},
            {nombre: 'Registro SatWS', desc: ''},
            {nombre: 'Autorización Buró de Crédito', desc: 'LIGA'},
            // 'Representante Legal'
            {nombre: 'Identificacion' , desc: 'Representante Legal'},
            {nombre: 'Constancia de Situación Fiscal', desc: ' Representante Legal , Actualizada, menor a tres meses'},
            {nombre: 'Comprobante de Domicilio', desc: 'Representante Legal'},
            {nombre: 'Buró de Crédito Persona Física, Representante Legal', desc: ''},
            // 'Firmante Adicional (Aval)'
            {nombre: 'Identificacion Aval', desc: ''},
            {nombre: 'Constancia de Situación Fiscal', desc: ' Aval , Actualizada, menor a tres meses'},
            {nombre: 'Comprobante de Domicilio', desc: ' Aval'},
            {nombre: 'Buró de Crédito Persona Física', desc: 'Aval'},
            {nombre: 'Fotos del comercio', desc: '5 del interior y 5 del exterior del negocio'},
            {nombre: 'Cuestionario', desc: ''}
        ]
        
    },
    p2: {
        name: 'Financiamiento con Terminal Punto de Venta (TPV) Pf',
        documentos: [
            {nombre: 'Constancia de Situación Fiscal', desc: 'Actualizada menor a tres meses y descargada del portal del SAT'},
            {nombre: 'Identificación Oficial', desc: 'Credencial de Elector INE y/o Pasaporte vigenmte'},
            {nombre: 'Contratos de arrendamiento ', desc: 'Mandar de cada Sucursal , Vigente y/o Escritura de Propiedad'},
            {nombre: 'Comprobante de domicilio', desc: 'Mandar de cada Sucursal y Fiscal, menor a tres meses'},
            {nombre: 'Estados de cuenta', desc: 'Últimos 12 meses'},
            {nombre: 'Registro SatWS', desc: ''},
            {nombre: 'Autorización Buró de Crédito', desc: 'Buró de Crédito Persona Física, LIGA'},
            // 'Firmante Adicional (Aval)
            {nombre: 'Identificacion,', desc: ' Aval'},
            {nombre: 'Constancia de Situación Fiscal,', desc: 'Aval ,Actualizada, menor a tres meses'},
            {nombre: 'Comprobante de Domicilio', desc: 'Aval'},
            {nombre: 'Buró de Crédito Persona Física', desc: 'Aval'},
            {nombre: 'Fotos del comercio', desc: '5 del Interior y 5 del exterior del negocio'},
            {nombre: 'Cuestionario', desc: ''}
        ]  
    }
   },
   F10: {
        name:'',
        viabilidad: [],
        p1: {
            name: '',
            documentos: [],
        },
        p2: {
            name: '',
            documentos: [],
        },
    },
    F11: {
        name:'',
        viabilidad: [],
        p1: {
            name: '',
            documentos: [],
        },
        p2: {
            name: '',
            documentos: [],
        },
    },
   F12: {
    name: 'xepelin',
    viabilidad: [],
    p1: {
        name:'factoraje Pm',
        documentos: [
            // Representante legal
            {nombre: 'Identificación oficial, Representante legal', desc: ''},
            {nombre: 'Constancia de situación fiscal actualizada, Representante legal', desc: ''},
            {nombre: 'Comprobante de domicilio, Representante legal', desc: ''},
            // Empresa
            {nombre: 'Acta Constitutiva', desc: 'Empresa (primera)'},
            {nombre: 'Acta de Asamblea', desc: 'Empresa ,Con Poder del Rep Legal'},
            {nombre: 'Constancia de situación Fiscal', desc: 'Activa,  Dw la Empresa'},
            {nombre: 'Comprobante de Domicilio', desc: ' A nombre de la empresa'},
            {nombre: 'Estado de Cuenta Bancario', desc: 'Empresa'}
        ]        
    },
    p2: {
        name:'factoraje Pm Corp',
        documentos: [
            // Representante legal: 
            {nombre: 'Identificación oficial', desc: ''},
            {nombre: 'Constancia de situación fiscal actualizada', desc: ''},
            {nombre: 'Comprobante de domicilio', desc: ''},
            // Empresa
            {nombre: 'Acta Constitutiva', desc: ', Empresa , (primera)'},
            {nombre: 'Acta de Asamblea', desc: 'Con Poder del Rep Legal, Empresa'},
            {nombre: 'Constancia de situación Fiscal activa, Empresa', desc: ''},
            {nombre: 'Comprobante de Domicilio, a nombre de la empresa', desc: ''},
            {nombre: 'Estado de Cuenta Bancario, Empresa', desc: ''}
        ]
    },
    p3: {
        name:'factoraje Pfae',
        documentos: [
            {nombre: 'Identificación oficial', desc: ''},
            {nombre: 'Constancia de situación fiscal', desc:'Actualizada Con QR'},
            {nombre: 'Comprobante de domicilio', desc: 'No mayor a 3 meses'},
            {nombre: 'Edo de cuenta bancario', desc: 'No mayor a 3 meses'}
        ]
        
    },
   },
   F13: {
        name:'arrenda+',
        viabilidad: [],
        p1: {
            name: 'Arrendamiento Pf',
            documentos: [
                {nombre: 'Identificación oficial', desc: 'Copia de titular persona física'},
                {nombre: 'Últimos 3 estados de cuenta ', desc: 'cheques/ ahorro con CLABE de titular'},
                {nombre: 'Comprobante de domicilio', desc: 'Copia del solicitante con antigüedad no mayor a 3 meses'},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''}
            ]            
        },
        p2: {
            name: 'Arrendamiento Pfae',
            documentos: [
                {nombre: 'Identificación electrónica Confidencial', desc: 'Clave proporcionada por el SAT'},
                {nombre: 'Identificación oficial', desc: 'Copia , de titular persona física'},
                {nombre: 'Estados Financieros', desc: 'Firmados por titular'},
                {nombre: 'Últimos 3 estados de cuenta', desc: 'cheques/ ahorro con CLABE de titular'},
                {nombre: 'Comprobante de domicilio', desc: 'Copia del solicitante con antigüedad no mayor a 3 meses'},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''}
            ]
            
        },
        p3: {
            name: 'Arrendamiento Pm',
            documentos: [
                {nombre: 'Identificación oficial del titular y/o aval', desc: 'Copia , persona física, cuando no cuente con firma CIEC'},
                {nombre: 'Clave de Identificación electrónica Confidencial', desc: 'Proporcionada por el SAT'},
                {nombre: 'Identificación oficial de titular de representante legal', desc: 'Copia'},
                {nombre: 'Estados financieros firmados por representante legal', desc: ''},
                {nombre: 'Últimos 3 estados de cuenta', desc: 'cheques/ ahorro con CLABE de titular y aval'},
                {nombre: 'Acta constitutiva', desc: 'Copia simple de la escritura sus modificaciones y poderes (incluyendo registro público) '},
                {nombre: 'Comprobante de domicilio fiscal', desc: 'Copia , del solicitante con antigüedad no mayor a 3 meses '},
                {nombre: 'Evidencia de consulta de vigencia de fiel (captura)', desc: ''},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'RFC ', desc: 'Copia , del proveedor de la garantía'},
                {nombre: 'Registro de prestadores de servicios financieros a cargo de CONDUSEF', desc: 'Copia , (en caso de ser entidad financiera)'}
            ]            
        },
        p4: {
            name: 'CreditoSimple Pf',
            documentos: [
                {nombre: 'Identificación oficial', desc:'Copia , de titular persona física'},
                {nombre: 'Últimos 3 estados de cuenta', desc:'cheques/ ahorro con CLABE de titular'},
                {nombre: 'Comprobante de domicilio', desc: 'Copia , del solicitante con antigüedad no mayor a 3 meses'},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''}
            ]
            
        },
        p5: {
            name: 'CreditoSimple Pfae',
            documentos: [
                {nombre: 'Clave de Identificación electrónica Confidencial', desc: 'Proporcionada por el SAT'},
                {nombre: 'Identificación oficial', desc: 'Copia de titular persona física'},
                {nombre: 'Estados Financieros', desc:'firmados por titular'},
                {nombre: 'Últimos 3 estados de cuenta', desc: 'cheques/ ahorro con CLABE de titular'},
                {nombre: 'Comprobante de domicilio', desc: 'Copia , del solicitante con antigüedad no mayor a 3 meses'},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'RFC', desc: 'Copia , del proveedor de la garantía'}
            ]
        },
        p6: {
            name: 'CreditoSimple Pm',
            documentos: [
                {nombre: 'Copia de identificación oficial del titular y/o aval persona física', desc: 'Cuando no cuente con firma *CIEC.'},
                {nombre: 'Clave de Identificación electrónica Confidencial', desc: 'Proporcionada por el SAT'},
                {nombre: 'Copia identificación oficial de titular de representante legal', desc: ''},
                {nombre: 'Estados financieros firmados por representante legal', desc: ''},
                {nombre: 'Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular y aval', desc: ''},
                {nombre: 'Copia simple de la escritura del acta constitutiva', desc: 'Sus modificaciones y poderes (incluyendo registro público)'},
                {nombre: 'Copia comprobante de domicilio fiscal del solicitante', desc: 'Con antigüedad no mayor a 3 meses'},
                {nombre: 'Evidencia de consulta de vigencia de fiel', desc: '(captura)'},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'RFC', desc: 'Copia , del proveedor de la garantía'},
                {nombre: 'Registro de prestadores de servicios financieros a cargo de CONDUSEF', desc: 'Copia  , En caso de ser entidad financiera'}
            ]            
        },
    },
    F14: {
        name: 'afirme',
        viabilidad: [
            {nombre: 'CUESTIONARIO DE VIABILIDAD', desc: ''},
            {nombre: 'SOLICITUD DE CRÉDITO', desc: ''},
            {nombre: 'INFORMACIÓN BÁSICA', desc: ''},
            {nombre: 'RELACIÓN DE PASIVOS', desc: ''},
            {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'ACTUALIZADA'},
            {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL', desc: 'DE LOS 2 EJERCICIOS INMEDIATOS ANTERIORES EN ORIGINAL'},
            {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL', desc: 'CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL'},
            {nombre: 'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS ', desc:'DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL'},
            {nombre: 'DECLARACIÓN FISCAL ANUAL DE LOS ÚLTIMOS 2 EJERCICIOS COMPLETOS', desc: 'DE LOS ÚLTIMOS 2 EJERCICIOS COMPLETOS'}
        ],        
        p1: {
            name: 'PymeInmuebles15MDP',
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO', desc: ''},
                {nombre: 'FORMATO AUTORIZACIÓN DE CONSULTA A BURÓ', desc: 'FIRMADO DEL SOLICITANTE Y AVAL'},
                {nombre: 'ACTA DE MATRIMONIO, DIVORCIO O MODIFICACIÓN', desc: ' DEL RÉGIMEN CONYUGAL DEL SOLICITANTE Y AVAL'},
                {nombre: 'IDENTIFICACIÓN OFICIAL', desc: 'VIGENTE CON FOTOGRAFÍA Y FIRMA LEGIBLE DEL SOLICITANTE Y AVAL'},
                {nombre: 'COMPROBANTE DE DOMICILIO ', desc: 'DEL SOLICITANTE Y AVAL CON ANTIGÜEDAD NO MAYOR A 3 MESES COMPLETO CON TODAS SUS HOJAS'},
                {nombre: 'ALTA EN SHCP Y CÉDULA DE SITUACIÓN FISCAL (CSF)', desc: ' ACTUALIZADA DEL SOLICITANTE Y AVAL'},
                {nombre: 'ÚLTIMOS 6 ESTADOS DE CUENTA', desc: 'MENSUALES COMPLETOS CON TODAS SUS HOJAS DEL SOLICITANTE'},
                {nombre: 'ACTA CONSTITUTIVA, PODERES VIGENTES Y ACTAS DE ASAMBLEAS', desc: 'CON DATOS DE REGISTRO DEL SOLICITANTE Y AVAL (EN CASO DE SER PM)'},
                {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL', desc: 'DEL EJERCICIO INMEDIATO ANTERIOR EN ORIGINAL'},
                {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL', desc: 'CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL'},
                {nombre: 'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS', desc: 'DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL'},
                {nombre: 'DECLARACIÓN FISCAL ANUAL', desc: 'DEL ÚLTIMO EJERCICIO COMPLETO (ANUAL)'},
                {nombre: 'CONTRATO DE COMPRA VENTA Y/O CARTA DEL CLIENTE', desc: 'CON LA DESCRIPCIÓN DEL INMUEBLE A ADQUIRIR'}
            ]            
        },
      p2: {
        name: 'PymeSimpleRevolvente40MDP',
        documentos: [
            {nombre: 'SOLICITUD DE CRÉDITO', desc: ''},
            {nombre: 'FORMATO AUTORIZACIÓN DE CONSULTA A BURÓ', desc: 'FIRMADO DEL SOLICITANTE Y AVAL'},
            {nombre: 'ACTA DE MATRIMONIO, DIVORCIO O MODIFICACIÓN', desc: 'DEL RÉGIMEN CONYUGAL DEL SOLICITANTE Y AVAL'},
            {nombre: 'IDENTIFICACIÓN OFICIAL', desc: 'VIGENTE CON FOTOGRAFÍA Y FIRMA LEGIBLE DEL SOLICITANTE Y AVAL'},
            {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'DEL SOLICITANTE Y AVAL CON ANTIGÜEDAD NO MAYOR A 3 MESES COMPLETO CON TODAS SUS HOJAS'},
            {nombre: 'ALTA EN SHCP Y CÉDULA DE SITUACIÓN FISCAL (CSF)', desc:'ACTUALIZADA DEL SOLICITANTE Y AVAL'},
            {nombre: 'ÚLTIMOS 6 ESTADOS DE CUENTA MENSUALES', desc: 'COMPLETOS CON TODAS SUS HOJAS DEL SOLICITANTE'},
            {nombre: 'ACTA CONSTITUTIVA, PODERES VIGENTES Y ACTAS DE ASAMBLEAS', desc: 'CON DATOS DE REGISTRO DEL SOLICITANTE Y AVAL (EN CASO DE SER PM)'},
            {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL', desc: 'DEL EJERCICIO INMEDIATO ANTERIOR EN ORIGINAL'},
            {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL', desc: 'CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL'},
            {nombre: 'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS', desc: 'DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL'},
            {nombre: 'DECLARACIÓN FISCAL ANUAL', desc: 'DEL ÚLTIMO EJERCICIO COMPLETO (ANUAL)'}
        ]
      }
    }
};