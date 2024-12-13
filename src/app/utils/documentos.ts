export const documentacion: any = {
    F1: {
        name: "konfio",
        p1: {
            name: "creditoS pm",
            documentos: [
                {nombre: 'IDENTIFICACIÓN DE UN ACCIONISTA', desc: 'CON UN MÍNIMO DE 25% DE ACCIONES'},
                {nombre: 'RFC CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT', desc: ''},
                {nombre: 'ACTA CONSTITUTIVA CON FOLIO DEL RPP', desc: ''},
                {nombre: 'ASAMBLEAS CON FOLIO DEL RPP (EN CASO DE APLICAR)', desc: ''},
                {nombre: 'COMPROBANTE DE DOMICILIO DEL NEGOCIO', desc: ''},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL DE LA EMPRESA', desc: ''},
                {nombre: 'REP LEGAL INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)', desc: ''},
                {nombre: 'REP LEGAL COMPROBANTE DE DOMICILIO', desc: ''},
                {nombre: 'OBL SOL INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)', desc: ''},
                {nombre: 'OBL SOL COMPROBANTE DE DOMICILIO', desc: ''}
            ]
            
        },
        p2: {
            name: 'tdcEmpresario pm',
            documentos: [
                {nombre: 'Identificación de un accionista con un mínimo de 25% de acciones', desc: ''},
                {nombre: 'RFC con el que facturas y contraseña del SAT', desc: ''},
                {nombre: 'Acta constitutiva con folio del RPP', desc: ''},
                {nombre: 'Asambleas con folio del RPP (en caso de aplicar)', desc: ''},
                {nombre: 'Comprobante de domicilio del negocio', desc: ''},
                {nombre: 'Constancia de situación fiscal de la empresa', desc: ''},
                {nombre: 'Rep legal INE, pasaporte o residencia permanente en caso de extranjero (vigentes y escaneados en PDF)', desc: ''},
                {nombre: 'Rep legal comprobante de domicilio', desc: ''},
                {nombre: 'Obl sol INE, pasaporte o residencia permanente en caso de extranjero (vigentes y escaneados en PDF)', desc: ''},
                {nombre: 'Obl sol comprobante de domicilio', desc: ''}
            ]
            
        },
        p3: {
            name: 'tdcEmpresario pfae',
            documentos: [
                {nombre: 'INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)', desc: ''},
                {nombre: 'RFC CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT', desc: ''},
                {nombre: 'COMPROBANTE DE DOMICILIO DEL NEGOCIO O CONSTANCIA DE SITUACIÓN FISCAL', desc: ''}
            ]
            
        },
        p4: {
            name: 'tdcEmpresario pfae',
            documentos: [
                {nombre: 'INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)', desc: ''},
                {nombre: 'RFC CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT', desc: ''},
                {nombre: 'COMPROBANTE DE DOMICILIO DEL NEGOCIO O CONSTANCIA DE SITUACIÓN FISCAL', desc: ''}
            ]
            
        }
    },
    F2: {
        name:"",
        viabilidad: [],
        p1: {
            name: "",
            documentos: [],
        },
        p2: {
            name: "",
            documentos: [],
        },
    },
    F3: {
        name: "covalto",
        viabilidad: [
            {nombre: 'BURÓ DE CRÉDITO TANTO DEL ACREDITADO COMO DEL AVAL', desc: ''},
            {nombre: 'ESTADOS FINANCIEROS DE LOS ÚLTIMOS DOS CIERRES DE AÑOS Y PARCIALES', desc: ''},
            {nombre: 'CUADRO DE PASIVOS ACTUALIZADO', desc: ''},
            {nombre: 'CURRICULUM VITAE (CV)', desc: ''}
        ],
        
        p1:{
            name: 'CreditoSimpleRevolventeConGarantia Pm',
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO COMPLETA Y FIRMADA', desc: ''},
                {nombre: 'ACTA CONSTITUTIVA CON RPP', desc: ''},
                {nombre: 'ASAMBLEAS Y/O PODERES COMPLETAS', desc: ''},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: 'Acreditado, PF, PM, RL, OS, Accionistas, Garantes'},
                {nombre: 'BURÓ FIRA', desc: 'En caso de que aplique'},
                {nombre: 'KYC', desc: 'Acreditado, PF, PM, RL, OS, Accionistas, Garantes'},
                {nombre: 'KYC AMPLIADO', desc: 'En caso de ser un cliente que represente algún riesgo'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'No mayor a 3 meses (Acreditado, Accionista, Rep Legal o Garante)'},
                {nombre: 'INE / PASAPORTE / EXTRANJERO FM2', desc: 'Acreditado, Accionista, Rep Legal o Garante'},
                {nombre: 'ACTA DE MATRIMONIO', desc: 'Cuando aplique'},
                {nombre: 'IDENTIFICACIÓN DEL CÓNYUGE', desc: 'Cuando aplique'},
                {nombre: 'CURP', desc: 'Accionista, Rep Legal o Garante'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'No mayor a 3 meses (Debe de coincidir contra solicitud y KYC)'},
                {nombre: 'ÚLTIMOS 3 ESTADOS DE CUENTA', desc: 'En caso de ser clientes se podrán utilizar hasta anteriores 2 años'},
                {nombre: 'ESTADO FINANCIERO COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO, FIRMADOS POR RL CON ANALÍTICAS', desc: 'Acreditado y Coacreditado si aplica (Revisar tabla de periodos exigibles)'},
                {nombre: 'VALIDACIÓN SAT', desc: 'https://clientes.credijusto.com/'},
                {nombre: 'AVISO DE PRIVACIDAD FIRMADO', desc: 'Acreditado, PF, PM, RL, OS, Accionistas, Garantes'},
                {nombre: 'ESCRITURA O TÍTULO DE PROPIEDAD', desc: 'Primer testimonio con RPP y datos de superficie, medidas y colindancias'},
                {nombre: 'CERTIFICACIONES Y CERTIFICADOS LIBRES DE GRAVAMEN', desc: ''},
                {nombre: 'SOLICITUD DE AVALÚO', desc: ''},
                {nombre: 'BACKLOG', desc: 'Cuando el acreditado tiene funciones a través de contratos'},
                {nombre: 'PROPUESTA INDICATIVA', desc: ''},
                {nombre: 'BOLETA DE AGUA', desc: 'Con sello de pagado o constancia de no adeudo'},
                {nombre: 'BOLETA DE PREDIAL', desc: ''},
                {nombre: 'REPORTE DE VISITA OCULAR', desc: ''},
                {nombre: 'FORMATO DE COTEJO DE DOCUMENTOS', desc: ''},
                {nombre: 'CARTA SALDO DE LOS PASIVOS', desc: 'Si tiene autorizado pago de pasivos'},
                {nombre: 'APERTURA DE CUENTA COVALTO', desc: ''},
                {nombre: 'PLAN DE NEGOCIOS', desc: ''}
            ]  
        },
        p2:{
            name: 'CreditoParametrico Pm',
            documentos: [
                {nombre: 'Solicitud en', desc: 'https://micredito.covalto.com/login/'},
                {nombre: 'ACTA CONSTITUTIVA CON SELLO DE REGISTRO PÚBLICO DE LA PROPIEDAD', desc: 'Primer testimonio'},
                {nombre: 'IDENTIFICACIÓN OFICIAL VIGENTE', desc: 'INE de accionista mayoritario'},
                {nombre: 'ESTADOS FINANCIEROS CON ANALÍTICAS DE LOS ÚLTIMOS 2 AÑOS + ÚLTIMO PARCIAL', desc: 'Firmados por el representante legal'},
                {nombre: 'ACTAS DE MODIFICACIONES ACCIONARIAS', desc: ''},
                {nombre: 'ACTA DE PODERES CON SELLO DE REGISTRO PÚBLICO DE LA PROPIEDAD', desc: ''},
                {nombre: 'CONSTANCIA DE LA SITUACIÓN FISCAL ACTUALIZADA', desc: 'PM, Accionista mayoritario, Accionistas con más del 25%'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'No mayor a 3 meses PM, Accionista mayoritario, Accionistas con más del 25%'},
                {nombre: 'CONSTANCIA DE LA FIEL O DOCUMENTO EXPEDIDO POR EL SAT QUE PRESENTE EL NÚMERO DE FIEL ACTIVO PARA SU VALIDACIÓN', desc: 'PM, Accionista mayoritario, Accionistas con más del 25% (https://portalsat.plataforma.sat.gob.mx/recuperaciondecertificados/)'},
                {nombre: 'KYC', desc: ''},
                {nombre: 'CURP', desc: ''},
                {nombre: 'CIEC', desc: 'PM, Accionista mayoritario, Accionistas con más del 25%'},
                {nombre: 'SOLICITUD DE CRÉDITO', desc: ''},
                {nombre: 'ÚLTIMO ESTADO DE CUENTA PARA PROCESO DE DOMICILIACIÓN', desc: 'No es necesario recabar todas las páginas que muestran la transaccionalidad, solo es necesario la carátula y/o la hoja que muestre el resumen de la cuenta: banco, número de cuenta, mes, saldo inicial, depósitos, retiros, saldo final, promedio mensual'},
                {nombre: 'REPORTE DE VISITA OCULAR', desc: ''},
                {nombre: 'APERTURA DE CUENTA COVALTO', desc: ''},
                {nombre: 'ACTIVACIÓN DE BANCA ELECTRÓNICA', desc: ''}
            ]
            
        },
        p3: {
            name: 'ArrendamientoPuroSyLB pm',
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO COMPLETA Y FIRMADA', desc: ''},
                {nombre: 'ACTA CONSTITUTIVA CON RPP', desc: ''},
                {nombre: 'ASAMBLEAS Y/O PODERES COMPLETAS', desc: ''},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: ''},
                {nombre: 'KYC', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'No mayor a 3 meses (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)'},
                {nombre: 'INE / PASAPORTE / EXTRANJERO FM2', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'CURP', desc: 'ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'No mayor a 3 meses (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)'},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'ÚLTIMOS 3 ESTADOS DE CUENTA', desc: 'En caso de ser clientes de hasta 2 años'},
                {nombre: 'ESTADO FINANCIERO COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO', desc: 'Firmados por RL con analíticas (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)'},
                'VALIDACIÓN SAT', 'https://clientes.credijusto.com/',
                {nombre: 'AVISO DE PRIVACIDAD FIRMADO', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'COTIZACIÓN A NOMBRE DEL ACREDITADO', desc: 'Con datos de contacto de proveedor, marca y modelo'},
                {nombre: 'VALIDACIÓN DEL ACTIVO / VOBO DE ACTIVOS', desc: ''},
                {nombre: 'PEDIMENTO EN CASO DE APLICAR', desc: ''},
                {nombre: 'PROPUESTA INDICATIVA', desc: ''}
            ]
            
        },
        p4: {
            name: "CreditoSimpleRevolventeConGarantia Pfae",
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO COMPLETA Y FIRMADA', desc: ''},
                {nombre: 'INE / PASAPORTE / EXTRANJERO FM2', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: '2DA. IDENTIFICACIÓN', desc: ''},
                {nombre: 'CURP', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'ACTA DE MATRIMONIO / CONFIRMAR SOLTERÍA', desc: ''},
                {nombre: 'IDENTIFICACIÓN DEL CÓNYUGE', desc: 'CUANDO APLIQUE'},
                {nombre: 'KYC', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'KYC AMPLIADO', desc: 'EN CASO DE SER UN CLIENTE QUE REPRESENTE ALGÚN RIESGO'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'No mayor a 3 meses (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'No mayor a 3 meses (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)'},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'ÚLTIMOS 3 ESTADOS DE CUENTA', desc: 'En caso de ser clientes de hasta 2 años'},
                {nombre: 'ESTADO FINANCIERO COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO', desc: 'Firmados por RL con analíticas (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)'},
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
                {nombre: 'SOLICITUD DE CRÉDITO COMPLETA Y FIRMADA', desc: ''},
                {nombre: 'INE / PASAPORTE / EXTRANJERO FM2', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: '2DA. IDENTIFICACIÓN', desc: ''},
                {nombre: 'CURP', desc: 'ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE'},
                {nombre: 'ACTA DE MATRIMONIO / CONFIRMAR SOLTERÍA', desc: ''},
                {nombre: 'KYC', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: 'No mayor a 3 meses (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)'},
                {nombre: 'COMPROBANTE DE DOMICILIO', desc: 'No mayor a 3 meses (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)'},
                {nombre: 'AUTORIZACIÓN DE CONSULTA DE BURÓ', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'ÚLTIMOS 3 ESTADOS DE CUENTA', desc: 'En caso de ser clientes de hasta 2 años'},
                {nombre: 'ESTADO FINANCIERO COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO', desc: 'Firmados por RL con analíticas (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)'},
                'VALIDACIÓN SAT', 'https://clientes.credijusto.com/',
                {nombre: 'AVISO DE PRIVACIDAD FIRMADO', desc: 'ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES'},
                {nombre: 'COTIZACIÓN A NOMBRE DEL ACREDITADO', desc: 'CON DATOS DE CONTACTO DE PROVEEDOR, MARCA Y MODELO'},
                {nombre: 'VALIDACIÓN DEL ACTIVO / VOBO DE ACTIVOS', desc: ''},
                {nombre: 'PEDIMENTO EN CASO DE APLICAR', desc: ''},
                {nombre: 'PROPUESTA INDICATIVA', desc: ''}
            ]
            
        }
    },
    F4: {
        name:"",
        viabilidad: [],
        p1: {
            name: "",
            documentos: [],
        },
        p2: {
            name: "",
            documentos: [],
        },
    },
    F5: {
        name:"",
        viabilidad: [],
        p1: {
            name: "",
            documentos: [],
        },
        p2: {
            name: "",
            documentos: [],
        },
    },
    F6: {
        name:"",
        viabilidad: [],
        p1: {
            name: "",
            documentos: [],
        },
        p2: {
            name: "",
            documentos: [],
        },
    },
   F7: {
    name: 'heyBanco',
    p1: {
        name:'creditoSimple',
        documentos: [
            'Doc test 1',
            'Doc test 2',
            'Doc test 3',
        ],
    },
    p2: {
        name:"creditoRevolvente",
        documentos: [
            'Doc test 1',
            'Doc test 2',
            'Doc test 3',
            'Doc test 4',
        ],
    },
   },
   F8: {
    name: 'activeLeasing',
    viabilidad: [
        {nombre: 'ESTADOS FINANCIEROS AL CIERRE 2021, 2022 Y PARCIAL 2023 NO MAYOR A 2 MESES', desc: 'CON ANALÍTICAS Y FIRMADOS POR EL REPRESENTANTE LEGAL Y CP'},
        {nombre: 'CONSULTA ESPECIAL DE BURÓ DE CRÉDITO RECIENTE', desc: ''},
        {nombre: 'FIRMA EKATENA', desc: 'CLAVE CIEC'},
        {nombre: 'FICHA TÉCNICA DEL ACTIVO', desc: ''}
    ],
    p1: {
        id:"p1",
        name: "arrendamientoPuro",
        documentos: [
            {nombre: 'ACTA CONSTITUTIVA, PODERES, PROTOCOLIZACIONES ETC', desc: 'Con sello RPP'},
            {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL', desc: ''},
            {nombre: 'COMPROBANTE DE DOMICILIO', desc: ''},
            {nombre: 'ÚLTIMOS 5 ESTADOS DE CUENTA', desc: 'De las principales cuentas'},
            {nombre: 'CÉDULA PROFESIONAL DEL CONTADOR', desc: ''},
            {nombre: 'IDENTIFICACIÓN DEL REPRESENTANTE LEGAL', desc: ''},
            {nombre: 'AVAL - CONSTANCIA DE SITUACIÓN FISCAL', desc: ''},
            {nombre: 'AVAL - IDENTIFICACIÓN OFICIAL VIGENTE', desc: ''},
            {nombre: 'AVAL - COMPROBANTE DE DOMICILIO RECIENTE', desc: ''},
            {nombre: 'AVAL - ESTADO DE CUENTA COMPLETO', desc: ''},
            {nombre: 'AVAL - ACTA DE MATRIMONIO Y ESCRITURA DE LA PROPIEDAD', desc: ''},
            {nombre: 'SOLICITUD DE FINANCIAMIENTO', desc: ''},
            {nombre: 'FORMATO CONSULTA BURO DE CRÉDITO – ACREDITADO', desc: ''},
            {nombre: 'FORMATO CONSULTA BURO DE CRÉDITO – AVAL', desc: ''},
            {nombre: 'AVISO DE PRIVACIDAD – ACREDITADO', desc: ''},
            {nombre: 'AVISO DE PRIVACIDAD – AVAL', desc: ''},
            {nombre: 'RELACIÓN DE PASIVOS – ACREDITADO', desc: ''},
            {nombre: 'RELACIÓN DE PASIVOS – AVAL', desc: ''},
            {nombre: 'RELACIÓN PATRIMONIAL – AVAL', desc: ''}
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
            {nombre: 'Checklist Persona Moral Acta Constitutiva y todas las Asambleas con su respectivo RPPC', desc: ''},
            {nombre: 'Constancia de Situación Fiscal', desc: 'Actualizada menor a tres meses y descargada del portal del SAT'},
            {nombre: 'Contratos de arrendamiento Vigente y/o Escritura de Propiedad', desc: 'Mandar de cada Sucursal'},
            {nombre: 'Comprobante de domicilio', desc: 'Mandar de cada Sucursal y Fiscal, menor a tres meses'},
            {nombre: 'Estados de cuenta', desc: 'Últimos 12 meses'},
            {nombre: 'Registro SatWS', desc: ''},
            {nombre: 'Autorización Buró de Crédito', desc: 'LIGA'},
            // 'Representante Legal'
            {nombre: 'ID, Representante Legal', desc: ''},
            {nombre: 'Constancia de Situación Fiscal, Representante Legal', desc: 'Actualizada, menor a tres meses'},
            {nombre: 'Comprobante de Domicilio, Representante Legal', desc: ''},
            {nombre: 'Buró de Crédito Persona Física, Representante Legal', desc: ''},
            // 'Firmante Adicional (Aval)'
            {nombre: 'ID, Aval', desc: ''},
            {nombre: 'Constancia de Situación Fiscal, Aval', desc: 'Actualizada, menor a tres meses'},
            {nombre: 'Comprobante de Domicilio, Aval', desc: ''},
            {nombre: 'Buró de Crédito Persona Física, Aval', desc: ''},
            {nombre: 'Fotos del comercio', desc: '5 del interior y 5 del exterior del negocio'},
            {nombre: 'Cuestionario', desc: ''}
        ]
        
    },
    p2: {
        name: 'Financiamiento con Terminal Punto de Venta (TPV) Pf',
        documentos: [
            {nombre: 'Constancia de Situación Fiscal', desc: 'Actualizada menor a tres meses y descargada del portal del SAT'},
            {nombre: 'Identificación Oficial Vigente', desc: 'Credencial de Elector INE y/o Pasaporte'},
            {nombre: 'Contratos de arrendamiento Vigente y/o Escritura de Propiedad', desc: 'Mandar de cada Sucursal'},
            {nombre: 'Comprobante de domicilio', desc: 'Mandar de cada Sucursal y Fiscal, menor a tres meses'},
            {nombre: 'Estados de cuenta', desc: 'Últimos 12 meses'},
            {nombre: 'Registro SatWS', desc: ''},
            {nombre: 'Autorización Buró de Crédito', desc: 'Buró de Crédito Persona Física, LIGA'},
            // 'Firmante Adicional (Aval)
            {nombre: 'ID, Aval', desc: ''},
            {nombre: 'Constancia de Situación Fiscal, Aval', desc: 'Actualizada, menor a tres meses'},
            {nombre: 'Comprobante de Domicilio, Aval', desc: ''},
            {nombre: 'Buró de Crédito Persona Física, Aval', desc: ''},
            {nombre: 'Fotos del comercio', desc: '5 del Interior y 5 del exterior del negocio'},
            {nombre: 'Cuestionario', desc: ''}
        ]  
    }
   },
   F10: {
        name:"",
        viabilidad: [],
        p1: {
            name: "",
            documentos: [],
        },
        p2: {
            name: "",
            documentos: [],
        },
    },
    F11: {
        name:"",
        viabilidad: [],
        p1: {
            name: "",
            documentos: [],
        },
        p2: {
            name: "",
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
            {nombre: 'Acta Constitutiva, Empresa (primera)', desc: ''},
            {nombre: 'Acta de asamblea con Poder del Rep Legal, Empresa', desc: ''},
            {nombre: 'Constancia de situación Fiscal activa, Empresa', desc: ''},
            {nombre: 'Comprobante de Domicilio a nombre de la empresa', desc: ''},
            {nombre: 'Estado de Cuenta Bancario, Empresa', desc: ''}
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
            {nombre: 'Acta Constitutiva, Empresa (primera)', desc: ''},
            {nombre: 'Acta de asamblea con Poder del Rep Legal, Empresa', desc: ''},
            {nombre: 'Constancia de situación Fiscal activa, Empresa', desc: ''},
            {nombre: 'Comprobante de Domicilio, a nombre de la empresa', desc: ''},
            {nombre: 'Estado de Cuenta Bancario, Empresa', desc: ''}
        ]
    },
    p3: {
        name:'factoraje Pfae',
        documentos: [
            {nombre: 'Identificación oficial', desc: ''},
            {nombre: 'Constancia de situación fiscal actualizada Con QR', desc: ''},
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
                {nombre: 'Copia identificación oficial de titular persona física', desc: ''},
                {nombre: 'Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular', desc: ''},
                {nombre: 'Copia comprobante de domicilio del solicitante con antigüedad no mayor a 3 meses', desc: ''},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''}
            ]            
        },
        p2: {
            name: 'Arrendamiento Pfae',
            documentos: [
                {nombre: 'Clave de Identificación electrónica Confidencial, proporcionada por el SAT', desc: ''},
                {nombre: 'Copia identificación oficial de titular persona física', desc: ''},
                {nombre: 'Estados Financieros firmados por titular', desc: ''},
                {nombre: 'Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular', desc: ''},
                {nombre: 'Copia comprobante de domicilio del solicitante con antigüedad no mayor a 3 meses', desc: ''},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''}
            ]
            
        },
        p3: {
            name: 'Arrendamiento Pm',
            documentos: [
                {nombre: 'Copia de identificación oficial del titular y/o aval persona física, cuando no cuente con firma CIEC', desc: ''},
                {nombre: 'Clave de Identificación electrónica Confidencial, proporcionada por el SAT', desc: ''},
                {nombre: 'Copia identificación oficial de titular de representante legal', desc: ''},
                {nombre: 'Estados financieros firmados por representante legal', desc: ''},
                {nombre: 'Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular y aval', desc: ''},
                {nombre: 'Copia simple de la escritura del acta constitutiva, sus modificaciones y poderes (incluyendo registro público)', desc: ''},
                {nombre: 'Copia comprobante de domicilio fiscal del solicitante con antigüedad no mayor a 3 meses', desc: ''},
                {nombre: 'Evidencia de consulta de vigencia de fiel (captura)', desc: ''},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''},
                {nombre: 'Copia del registro de prestadores de servicios financieros a cargo de CONDUSEF (en caso de ser entidad financiera)', desc: ''}
            ]            
        },
        p4: {
            name: 'CreditoSimple Pf',
            documentos: [
                {nombre: 'Copia identificación oficial de titular persona física', desc: ''},
                {nombre: 'Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular', desc: ''},
                {nombre: 'Copia comprobante de domicilio del solicitante con antigüedad no mayor a 3 meses', desc: ''},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''}
            ]
            
        },
        p5: {
            name: 'CreditoSimple Pfae',
            documentos: [
                {nombre: 'Clave de Identificación electrónica Confidencial', desc: 'Proporcionada por el SAT'},
                {nombre: 'Copia identificación oficial de titular persona física', desc: ''},
                {nombre: 'Estados Financieros firmados por titular', desc: ''},
                {nombre: 'Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular', desc: ''},
                {nombre: 'Copia comprobante de domicilio del solicitante con antigüedad no mayor a 3 meses', desc: ''},
                {nombre: 'Documentación de garantías propuestas', desc: ''},
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''}
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
                {nombre: 'Copia RFC del proveedor de la garantía', desc: ''},
                {nombre: 'Copia del registro de prestadores de servicios financieros a cargo de CONDUSEF', desc: 'En caso de ser entidad financiera'}
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
            {nombre: 'CONSTANCIA DE SITUACIÓN FISCAL ACTUALIZADA', desc: ''},
            {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL DE LOS 2 EJERCICIOS INMEDIATOS ANTERIORES EN ORIGINAL', desc: ''},
            {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL', desc: ''},
            {nombre: 'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL', desc: ''},
            {nombre: 'DECLARACIÓN FISCAL ANUAL DE LOS ÚLTIMOS 2 EJERCICIOS COMPLETOS', desc: ''}
        ],        
        p1: {
            name: 'PymeInmuebles15MDP',
            documentos: [
                {nombre: 'SOLICITUD DE CRÉDITO', desc: ''},
                {nombre: 'FORMATO AUTORIZACIÓN DE CONSULTA A BURÓ FIRMADO DEL SOLICITANTE Y AVAL', desc: ''},
                {nombre: 'ACTA DE MATRIMONIO, DIVORCIO O MODIFICACIÓN DEL RÉGIMEN CONYUGAL DEL SOLICITANTE Y AVAL', desc: ''},
                {nombre: 'IDENTIFICACIÓN OFICIAL VIGENTE CON FOTOGRAFÍA Y FIRMA LEGIBLE DEL SOLICITANTE Y AVAL', desc: ''},
                {nombre: 'COMPROBANTE DE DOMICILIO DEL SOLICITANTE Y AVAL CON ANTIGÜEDAD NO MAYOR A 3 MESES COMPLETO CON TODAS SUS HOJAS', desc: ''},
                {nombre: 'ALTA EN SHCP Y CÉDULA DE SITUACIÓN FISCAL (CSF) ACTUALIZADA DEL SOLICITANTE Y AVAL', desc: ''},
                {nombre: 'ÚLTIMOS 6 ESTADOS DE CUENTA MENSUALES COMPLETOS CON TODAS SUS HOJAS DEL SOLICITANTE', desc: ''},
                {nombre: 'ACTA CONSTITUTIVA, PODERES VIGENTES Y ACTAS DE ASAMBLEAS CON DATOS DE REGISTRO DEL SOLICITANTE Y AVAL (EN CASO DE SER PM)', desc: ''},
                {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL DEL EJERCICIO INMEDIATO ANTERIOR EN ORIGINAL', desc: ''},
                {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL', desc: ''},
                {nombre: 'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL', desc: ''},
                {nombre: 'DECLARACIÓN FISCAL ANUAL DEL ÚLTIMO EJERCICIO COMPLETO (ANUAL)', desc: ''},
                {nombre: 'CONTRATO DE COMPRA VENTA Y/O CARTA DEL CLIENTE CON LA DESCRIPCIÓN DEL INMUEBLE A ADQUIRIR', desc: ''}
            ]            
        },
      p2: {
        name: 'PymeSimpleRevolvente40MDP',
        documentos: [
            {nombre: 'SOLICITUD DE CRÉDITO', desc: ''},
            {nombre: 'FORMATO AUTORIZACIÓN DE CONSULTA A BURÓ FIRMADO DEL SOLICITANTE Y AVAL', desc: ''},
            {nombre: 'ACTA DE MATRIMONIO, DIVORCIO O MODIFICACIÓN DEL RÉGIMEN CONYUGAL DEL SOLICITANTE Y AVAL', desc: ''},
            {nombre: 'IDENTIFICACIÓN OFICIAL VIGENTE CON FOTOGRAFÍA Y FIRMA LEGIBLE DEL SOLICITANTE Y AVAL', desc: ''},
            {nombre: 'COMPROBANTE DE DOMICILIO DEL SOLICITANTE Y AVAL CON ANTIGÜEDAD NO MAYOR A 3 MESES COMPLETO CON TODAS SUS HOJAS', desc: ''},
            {nombre: 'ALTA EN SHCP Y CÉDULA DE SITUACIÓN FISCAL (CSF) ACTUALIZADA DEL SOLICITANTE Y AVAL', desc: ''},
            {nombre: 'ÚLTIMOS 6 ESTADOS DE CUENTA MENSUALES COMPLETOS CON TODAS SUS HOJAS DEL SOLICITANTE', desc: ''},
            {nombre: 'ACTA CONSTITUTIVA, PODERES VIGENTES Y ACTAS DE ASAMBLEAS CON DATOS DE REGISTRO DEL SOLICITANTE Y AVAL (EN CASO DE SER PM)', desc: ''},
            {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL DEL EJERCICIO INMEDIATO ANTERIOR EN ORIGINAL', desc: ''},
            {nombre: 'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL', desc: ''},
            {nombre: 'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL', desc: ''},
            {nombre: 'DECLARACIÓN FISCAL ANUAL DEL ÚLTIMO EJERCICIO COMPLETO (ANUAL)', desc: ''}
        ]
        
      }
    }
};