export const documentacion: any = {
    F1: {
        name: "konfio",
        p1: {
            name: "creditoS pm",
            documentos: [
                'IDENTIFICACIÓN DE UN ACCIONISTA CON UN MÍNIMO DE 25% DE ACCIONES',
                'RFC CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT',
                'ACTA CONSTITUTIVA CON FOLIO DEL RPP',
                'ASAMBLEAS CON FOLIO DEL RPP  (EN CASO DE APLICAR)',
                'COMPROBANTE DE DOMICILIO DEL NEGOCIO',
                'CONSTANCIA DE SITUACIÓN FISCAL DE LA EMPRESA',
                'REP LEGAL INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)',
                'REP LEGAL COMPROBANTE DE DOMICILIO',
                'OBL SOL INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)',
                'OBL SOL COMPROBANTE DE DOMICILIO',
            ]
        },
        p2: {
            name: "tdcEmpresario pm",
            documentos: [
                'IDENTIFICACIÓN DE UN ACCIONISTA CON UN MÍNIMO DE 25% DE ACCIONES',
                'RFC CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT',
                'ACTA CONSTITUTIVA CON FOLIO DEL RPP',
                'ASAMBLEAS CON FOLIO DEL RPP  (EN CASO DE APLICAR)',
                'COMPROBANTE DE DOMICILIO DEL NEGOCIO',
                'CONSTANCIA DE SITUACIÓN FISCAL DE LA EMPRESA',
                'REP LEGAL INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)',
                'REP LEGAL COMPROBANTE DE DOMICILIO',
                'OBL SOL INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)',
                'OBL SOL COMPROBANTE DE DOMICILIO',
            ]
        },
        p3: {
            name: "tdcEmpresario pfae",
            documentos: [
                'INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)',
                'RFC CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT',
                'COMPROBANTE DE DOMICILIO DEL NEGOCIO O CONSTACIA DE SITUACIÓN FISCAL'
            ]
        },
        p4: {
            name: "tdcEmpresario pfae",
            documentos: [
                'INE, PASAPORTE O RESIDENCIA PERMANENTE EN CASO DE EXTRAJERO (VIGENTES Y ESCANEADOS EN PDF)',
                'RFC CON EL QUE FACTURAS Y CONTRASEÑA DEL SAT',
                'COMPROBANTE DE DOMICILIO DEL NEGOCIO O CONSTACIA DE SITUACIÓN FISCAL'
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
            'BURÓ DE CRÉDITO TANTO DEL ACREDITADO COMO DEL AVAL',
            'ESTADOS FINANCIEROS DE LOS ÚLTIMOS DOS CIERRES DE AÑOS Y PARCIALES',
            'CUADRO DE PASIVOS ACTUALIZADO',
            'CURRICULUM VITAE (CV)'
        ],
        p1:{
            name: "CreditoSimpleRevolventeConGarantia Pm",
            documentos: [
                'SOLICITUD DE CRÉDITO COMPLETA Y FIRMADA',
                'ACTA CONSTITUTIVA CON RPP',
                'ASAMBLEAS Y/O PODERES COMPLETAS',
                'AUTORIZACIÓN DE CONSULTA DE BURÓ (ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES)',
                'BURÓ FIRA (EN CASO DE QUE APLIQUE)',
                'KYC (ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES)',
                'KYC AMPLIADO (EN CASO DE SER UN CLIENTE QUE REPRESENTE ALGÚN RIESGO)',
                'CONSTANCIA DE SITUACIÓN FISCAL (NO MAYOR A 3 MESES) (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)',
                'INE / PASAPORTE / EXTRANJERO FM2 (ACREDITADO, ACCIONISTA, REP LEGAL O GARANTE)',
                'ACTA DE MATRIMONIO (CUANDO APLIQUE)',
                'IDENTIFICACIÓN DEL CÓNYUGE (CUANDO APLIQUE)',
                'CURP (ACCIONISTA, REP LEGAL O GARANTE)',
                'COMPROBANTE DE DOMICILIO (NO MAYOR A 3 MESES) (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)',
                'ÚLTIMOS 3 ESTADOS DE CUENTA (EN CASO DE SER CLIENTES SE PODRÁN UTILIZAR HASTA ANTERIORES 2 AÑOS)',
                'ESTADO FINANCIERO COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO, FIRMADOS POR RL CON ANALÍTICAS (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)',
                'VALIDACIÓN SAT https://clientes.credijusto.com/',
                'AVISO DE PRIVACIDAD FIRMADO (ACREDITADO, PF, PM, RL, OS, ACCIONISTAS, GARANTES)',
                'ESCRITURA O TÍTULO DE PROPIEDAD (PRIMER TESTIMONIO CON RPP Y DATOS DE SUPERFICIE, MEDIDAS Y COLINDANCIAS)',
                'CERTIFICACIONES Y CERTIFICADOS LIBRES DE GRAVAMEN',
                'SOLICITUD DE AVALÚO',
                'BACKLOG (CUANDO EL ACREDITADO TIENE FUNCIONES A TRAVÉS DE CONTRATOS)',
                'PROPUESTA INDICATIVA',
                'BOLETA DE AGUA (CON SELLO DE PAGADO O CONSTANCIA DE NO ADEUDO)',
                'BOLETA DE PREDIAL',
                'REPORTE DE VISITA OCULAR',
                'FORMATO DE COTEJO DE DOCUMENTOS',
                'CARTA SALDO DE LOS PASIVOS (SI TIENE AUTORIZADO PAGO DE PASIVOS)',
                'APERTURA DE CUENTA COVALTO',
                'PLAN DE NEGOCIOS',
            ],
        },
        p2:{
            name: "CreditoParametrico Pm",
            documentos: [
                'Solicitud en: https://micredito.covalto.com/login/',
                'ACTA CONSTITUTIVA CON SELLO DE REGISTRO PÚBLICO DE LA PROPIEDAD, PRIMER TESTIMONIO.',
                'IDENTIFICACIÓN OFICIAL VIGENTE (INE DE ACCIONISTA MAYORITARIO)',
                'ESTADOS FINANCIEROS CON ANALÍTICAS DE LOS ÚLTIMOS 2 AÑOS + ÚLTIMO PARCIAL (FIRMADOS POR EL REPRESENTANTE LEGAL).',
                'ACTAS DE MODIFICACIONES ACCIONARIAS',
                'ACTA DE PODERES CON SELLO DE REGISTRO PÚBLICO DE LA PROPIEDAD',
                'CONSTANCIA DE LA SITUACIÓN FISCAL ACTUALIZADA (PM, ACCIONISTA MAYORITARIO, ACCIONISTAS CON + DEL 25%)',
                'COMPROBANTE DE DOMICILIO (NO MAYOR A 3 MESES PM, ACCIONISTA MAYORITARIO, ACCIONISTAS CON + DEL 25%)',
                'CONSTANCIA DE LA FIEL O DOCUMENTO EXPEDIDO POR EL SAT QUE PRESENTE EL NÚMERO DE FIEL ACTIVO PARA SU VALIDACIÓN (PM, ACCIONISTA MAYORITARIO, ACCIONISTAS CON + DEL 25%): HTTPS://PORTALSAT.PLATAFORMA.SAT.GOB.MX/RECUPERACIONDECERTIFICADOS/',
                'KYC',
                'CURP',
                'CIEC (PM, ACCIONISTA MAYORITARIO, ACCIONISTAS CON + DEL 25%)',
                'SOLICITUD DE CRÉDITO',
                'ÚLTIMO ESTADO DE CUENTA PARA PROCESO DE DOMICILIACIÓN; NO ES NECESARIO RECABAR TODAS LAS PÁGINAS QUE MUESTRAN LA TRANSACCIONALIDAD, SÓLO ES NECESARIO LA CARÁTULA Y/O LA HOJA QUE MUESTRE EL RESUMEN DE LA CUENTA: BANCO, NÚMERO DE CUENTA, MES, SALDO INICIAL, DEPÓSITOS, RETIROS, SALDO FINAL, PROMEDIO MENSUAL.',
                'REPORTE DE VISITA OCULAR',
                'APERTURA DE CUENTA COVALTO',
                'ACTIVACIÓN DE BANCA ELECTRÓNICA',
            ]
        },
        p3: {
            name: "ArrendamientoPuroSyLB pm",
            documentos:  [
                'SOLICITUD DE CRÉDITO COMPLETA Y FIRMADA',
                'ACTA CONSTITUTIVA CON RPP',
                'ASAMBLEAS Y/O PODERES COMPLETAS',
                'AUTORIZACIÓN DE CONSULTA DE BURÓ',
                'KYC (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'CONSTANCIA DE SITUACIÓN FISCAL (NO MAYOR A 3 MESES)(ACREDITADO,ACCIONISTA, REP LEGAL O GARANTE)',
                'INE / PASAPORTE / EXTRANJERO FM2 (ACREDITADO,ACCIONISTA, REP LEGAL O GARANTE)',
                'CURP (ACCIONISTA, REP LEGAL O GARANTE)',
                'COMPROBANTE DE DOMICILIO (NO MAYOR A 3 MESES) (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)',
                'AUTORIZACIÓN DE CONSULTA DE BURÓ (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'ÚLTIMOS 3 ESTADOS DE CUENTA (EN CASO DE SER CLIENTES DE HASTA 2 AÑOS)',
                'ESTADO FINANCIERO COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO, FIRMADOS POR RL CON ANALÍTICAS (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)',
                'VALIDACIÓN SAT https://clientes.credijusto.com/',
                'AVISO DE PRIVACIDAD FIRMADO (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'COTIZACIÓN A NOMBRE DEL ACREDITADO (CON DATOS DE CONTACTO DE PROVEEDOR, MARCA Y MODELO)',
                'VALIDACIÓN DEL ACTIVO / VOBO DE ACTIVOS',
                'PEDIMENTO EN CASO DE APLICAR',
                'PROPUESTA INDICATIVA',

            ]
        },
        p4: {
            name: "CreditoSimpleRevolventeConGarantia Pfae",
            documentos: [
                'SOLICITUD DE CRÉDITO COMPLETA Y FIRMADA',
                'INE / PASAPORTE / EXTRANJERO FM2 (ACREDITADO,ACCIONISTA, REP LEGAL O GARANTE)',
                '2DA. IDENTIFICACIÓN',
                'CURP (ACREDITADO,ACCIONISTA, REP LEGAL O GARANTE)',
                'ACTA DE MATRIMONIO / CONFIRMAR SOLTERÍA',
                'IDENTIFICACIÓN DEL CÓNYUGE (CUANDO APLIQUE)',
                'KYC (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'KYC AMPLIADO(EN CASO DE SER UN CLIENTE QUE REPRESENTE ALGÚN RIESGO)',
                'CONSTANCIA DE SITUACIÓN FISCAL (NO MAYOR A 3 MESES)(ACREDITADO,ACCIONISTA, REP LEGAL O GARANTE)',
                'COMPROBANTE DE DOMICILIO (NO MAYOR A 3 MESES) (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)',
                'AUTORIZACIÓN DE CONSULTA DE BURÓ (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'ÚLTIMOS 3 ESTADOS DE CUENTA (EN CASO DE SER CLIENTES DE HASTA 2 AÑOS)',
                'ESTADO FINANCIERO COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO, FIRMADOS POR RL CON ANALÍTICAS (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)',
                'VALIDACIÓN SAT https://clientes.credijusto.com/',
                'AVISO DE PRIVACIDAD FIRMADO (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'ESCRITURA O TÍTULO DE PROPIEDAD (PRIMER TESTIMONIO CON RPP Y DATOS DE SUPERFICIE, MEDIDAS Y COLINDANCIAS)',
                'SOLICITUD DE AVALÚO',
                'PROPUESTA INDICATIVA',
                'BOLETA DE AGUA (CON SELLO DE PAGADO O CONSTANCIA DE NO ADEUDO)',
                'BOLETA DE PREDIAL',
                'REPORTE DE VISITA OCULAR',
                'FORMATO DE COTEJO DE DOCUMENTOS',
                'CARTA SALDO DE LOS PASIVOS (SI TIENE AUTORIZADO PAGO DE PASIVOS)',
                'APERTURA DE CUENTA COVALTO',
                'PLAN DE NEGOCIOS',
            ],
        },
        p5: {
            name: "ArrendamientoPuroSyLB Pfae",
            documentos : [
                'SOLICITUD DE CRÉDITO COMPLETA Y FIRMADA',
                'INE / PASAPORTE / EXTRANJERO FM2 (ACREDITADO,ACCIONISTA, REP LEGAL O GARANTE)',
                '2DA. IDENTIFICACIÓN',
                'CURP (ACREDITADO,ACCIONISTA, REP LEGAL O GARANTE)',
                'ACTA DE MATRIMONIO / CONFIRMAR SOLTERÍA',
                'KYC (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'CONSTANCIA DE SITUACIÓN FISCAL (NO MAYOR A 3 MESES)(ACREDITADO,ACCIONISTA, REP LEGAL O GARANTE)',
                'COMPROBANTE DE DOMICILIO (NO MAYOR A 3 MESES) (DEBE DE COINCIDIR CONTRA SOLICITUD Y KYC)',
                'AUTORIZACIÓN DE CONSULTA DE BURÓ (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'ÚLTIMOS 3 ESTADOS DE CUENTA (EN CASO DE SER CLIENTES DE HASTA 2 AÑOS)',
                'ESTADO FINANCIERO COMPLETO DE LOS ÚLTIMOS DOS AÑOS Y PARCIAL DEL AÑO EN CURSO, FIRMADOS POR RL CON ANALÍTICAS (ACREDITADO Y COACREDITADO SI APLICA) (REVISAR TABLA DE PERIODOS EXIGIBLES)',
                'VALIDACIÓN SAT https://clientes.credijusto.com/',
                'AVISO DE PRIVACIDAD FIRMADO (ACREDITADO,PF,PM,RL,OS,ACCIONISTAS,GARANTES)',
                'COTIZACIÓN A NOMBRE DEL ACREDITADO (CON DATOS DE CONTACTO DE PROVEEDOR, MARCA Y MODELO)',
                'VALIDACIÓN DEL ACTIVO / VOBO DE ACTIVOS',
                'PEDIMENTO EN CASO DE APLICAR',
                'PROPUESTA INDICATIVA',
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
    name: "heyBanco",
    p1: {
        name:"creditoSimple",
        documentos: [
            "Doc test 1",
            "Doc test 2",
            "Doc test 3",
        ],
    },
    p2: {
        name:"creditoRevolvente",
        documentos: [
            "Doc test 1",
            "Doc test 2",
            "Doc test 3",
            "Doc test 4",
        ],
    },
   },
   F8: {
    name: "activeLeasing",
    viabilidad: [
        'ESTADOS FINANCIEROS AL CIERRE 2021, 2022 Y PARCIAL 2023 NO MAYOR A 2 MESES (CON ANALÍTICAS Y FIRMADOS POR EL REPRESENTANTE LEGAL Y CP)',
        'CONSULTA ESPECIAL DE BURÓ DE CRÉDITO RECIENTE',
        'FIRMA EKATENA (CLAVE CIEC)',
        'FICHA TÉCNICA DEL ACTIVO',
    ],
    p1: {
        id:"p1",
        name: "arrendamientoPuro",
        documentos: [
            'ACTA CONSTITUTIVA, PODERES, PROTOCOLIZACIONES ETC (CON SELLO RPP)',
            'CONSTANCIA DE SITUACIÓN FISCAL',
            'COMPROBANTE DE DOMICILIO',
            'ÚLTIMOS 5 ESTADOS DE CUENTA (DE LAS PRINCIPALES CUENTAS)',
            'CÉDULA PROFESIONAL DEL CONTADOR',
            'IDENTIFICACIÓN DEL REPRESENTANTE LEGAL',
            'AVAL - CONSTANCIA DE SITUACIÓN FISCAL',
            'AVAL - IDENTIFICACIÓN OFICIAL VIGENTE',
            'AVAL - COMPROBANTE DE DOMICILIO RECIENTE',
            'AVAL - ESTADO DE CUENTA COMPLETO',
            'AVAL - ACTA DE MATRIMONIO Y ESCRITURA DE LA PROPIEDAD',
            'SOLICITUD DE FINANCIAMIENTO',
            'FORMATO CONSULTA BURO DE CRÉDITO – ACREDITADO',
            'FORMATO CONSULTA BURO DE CRÉDITO – AVAL',
            'AVISO DE PRIVACIDAD – ACREDITADO',
            'AVISO DE PRIVACIDAD – AVAL',
            'RELACIÓN DE PASIVOS – ACREDITADO',
            'RELACIÓN DE PASIVOS – AVAL',
            'RELACIÓN PATRIMONIAL – AVAL',
        ]
    }
   },
   F9: {
    name: "hayCash",
    viabilidad: [
        "Constancia de Situación Fiscal (actualizada menor a tres meses y descargada del portal del SAT)",
        "CIEC",
        "Autorización de Buró",
        "Estados de cuenta (3 últimos)"
    ],
    p1: {
        name: "Financiamiento con Terminal Punto de Venta (TPV) Pm",
        documentos: [
            "Checklist Persona Moral Acta Constitutiva y todas las Asambleas con su respectivo RPPC  ",
            "Constancia de Situación Fiscal (actualizada menor a tres meses y descargada del portal del SAT) ",
            "Contratos de arrendamiento Vigente y/o Escritura de Propiedad (mandar de cada Sucursal) ",
            "Comprobante de domicilio (mandar de cada Sucursal y Fiscal) menor a tres meses.",
            "Estados de cuenta (últimos 12 meses) ",
            "Registro SatWS ",
            "Autorización Buró de Crédito (LIGA)",
            // "Representante Legal",
            "ID, Representante Legal",
            "Constancia de Situación Fiscal, Representante Legal (actualizada) menor a tres meses",
            "Comprobante de Domicilio, Representante Legal",
            "Buró de Crédito Persona Física, Representante Legal",
            // " Firmante Adicional (Aval)",
            "ID, Aval",
            "Constancia de Situación Fiscal, Aval (actualizada) menor a tres meses",
            "Comprobante de Domicilio, Aval",
            "Buró de Crédito Persona Física, Aval",
            "Fotos del comercio (5 del interior y 5 del exterior del negocio)",
            "Cuestionario",
        ]
    },
    p2: {
        name: "Financiamiento con Terminal Punto de Venta (TPV) Pf",
        documentos: [
            "Constancia de Situación Fiscal (actualizada menor a tres meses y descargada del portal del SAT)",
            "Identificación Oficial Vigente (Credencial de Elector INE y/o Pasaporte)",
            "Contratos de arrendamiento Vigente y/o Escritura de Propiedad (mandar de cada Sucursal)",
            "Comprobante de domicilio (mandar de cada Sucursal y Fiscal) menor a tres meses",
            "Estados de cuenta (últimos 12 meses)",
            "Registro SatWS",
            "Autorización Buró de Crédito · Buró de Crédito Persona Física (LIGA)",
            // "Firmante Adicional (Aval)",
            "ID, Aval",
            "Constancia de Situación Fiscal, Aval (actualizada) menor a tres meses",
            "Comprobante de Domicilio, Aval",
            "Buró de Crédito Persona Física, Aval",
            "Fotos del comercio (5 del Interior y 5 del exterior del negocio)",
            "Cuestionario",
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
    name: "xepelin",
    viabilidad: [],
    p1: {
        name:"factoraje Pm",
        documentos: [
            // Representante legal
            "Identificación oficial, Representante legal ",
            "Constancia de situación fiscal actualizada, Representante legal ",
            "Comprobante de domicilio, Representante legal ",
            // Empresa
            "Acta Constitutiva, Empresa (primera) ",
            "Acta de asamblea con Poder del Rep Legal, Empresa ",
            "Constancia de situación Fiscal activa, Empresa ",
            "Comprobante de Domicilio a nombre de la empresa ",
            "Estado de Cuenta Bancario, Empresa",
        ],
    },
    p2: {
        name:"factoraje Pm Corp",
        documentos: [
            // Representante legal: 
            "Identificación oficial",
            "Constancia de situación fiscal actualizada",
            "Comprobante de domicilio",
            // Empresa
            "Acta Constitutiva, Empresa (primera)",
            "Acta de asamblea con Poder del Rep Legal, Empresa",
            "Constancia de situación Fiscal activa, Empresa",
            "Comprobante de Domicilio, a nombre de la empresa ",
            "Estado de Cuenta Bancario, Empresa",
        ],
    },
    p3: {
        name:"factoraje Pfae",
        documentos: [
            "Identificación oficial",
            "Constancia de situación fiscal actualizada (con QR)",
            "Comprobante de domicilio (No mayor a 3 meses)",
            "Edo de cuenta bancario (no mayor a 3 meses)",
        ],
    },
   },
   F13: {
        name:"arrenda+",
        viabilidad: [],
        p1: {
            name: "Arrendamiento Pf",
            documentos: [
                "Copia identificación oficial de titular persona física.",
                "Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular.",
                "Copia comprobante de domicilio del solicitante con antigüedad no mayor a 3 meses.",
                "Documentación de garantías propuestas.",
                "Copia RFC del proveedor de la garantía.",
            ],
        },
        p2: {
            name: "Arrendamiento Pfae",
            documentos: [
                "Clave de Identificación electrónica Confidencial, proporcionada por el SAT.",
                "Copia identificación oficial de titular persona física.",
                "Estados Financieros firmados por titular",
                "Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular.",
                "Copia comprobante de domicilio del solicitante con antigüedad no mayor a 3 meses.",
                "Documentación de garantías propuestas.",
                "Copia RFC del proveedor de la garantía.",
            ],
        },
        p3: {
            name: "Arrendamiento Pm",
            documentos: [
                "Copia de identificación oficial del titular y/o aval persona física, cuando no cuente con firma *CIEC.",
                "Clave de Identificación electrónica Confidencial, proporcionada por el SAT.",
                "Copia identificación oficial de titular de representante legal.",
                "Estados financieros firmados por representante legal.",
                "Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular y aval.",
                "Copia simple de la escritura del acta constitutiva, sus modificaciones y poderes (incluyendo registro público).",
                "Copia comprobante de domicilio fiscal del solicitante con antigüedad no mayor a 3 meses.",
                "Evidencia de consulta de vigencia de fiel (captura).",
                "Documentación de garantías propuestas.",
                "Copia RFC del proveedor de la garantía.",
                "Copia del registro de prestadores de servicios financieros a cargo de CONDUSEF (en caso de ser entidad financiera)",
            ],
        },
        p4: {
            name: "CreditoSimple Pf",
            documentos: [
                "Copia identificación oficial de titular persona física.",
                "Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular.",
                "Copia comprobante de domicilio del solicitante con antigüedad no mayor a 3 meses.",
                "Documentación de garantías propuestas.",
                "Copia RFC del proveedor de la garantía.",  
            ],
        },
        p5: {
            name: "CreditoSimple Pfae",
            documentos: [
                "Clave de Identificación electrónica Confidencial, proporcionada por el SAT.",
                "Copia identificación oficial de titular persona física.",
                "Estados Financieros firmados por titular",
                "Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular.",
                "Copia comprobante de domicilio del solicitante con antigüedad no mayor a 3 meses.",
                "Documentación de garantías propuestas.",
                "Copia RFC del proveedor de la garantía.",
            ],
        },
        p6: {
            name: "CreditoSimple Pm",
            documentos: [
                "Copia de identificación oficial del titular y/o aval persona física, cuando no cuente con firma *CIEC.",
                "Clave de Identificación electrónica Confidencial, proporcionada por el SAT.",
                "Copia identificación oficial de titular de representante legal.",
                "Estados financieros firmados por representante legal.",
                "Últimos 3 estados de cuenta cheques/ ahorro con CLABE de titular y aval.",
                "Copia simple de la escritura del acta constitutiva, sus modificaciones y poderes (incluyendo registro público).",
                "Copia comprobante de domicilio fiscal del solicitante con antigüedad no mayor a 3 meses.",
                "Evidencia de consulta de vigencia de fiel (captura).",
                "Documentación de garantías propuestas.",
                "Copia RFC del proveedor de la garantía.",
                "Copia del registro de prestadores de servicios financieros a cargo de CONDUSEF (en caso de ser entidad financiera)",
            ],
        },
    },
    F14: {
        name: "afirme",
        viabilidad: [
            'CUESTIONARIO DE VIABILIDAD 3 HOJAS',
            'SOLICITUD DE CRÉDITO',
            'INFORMACIÓN BÁSICA - CV',
            'RELACIÓN DE PASIVOS',
            'CONSTANCIA DE SITUACIÓN FISCAL ACTUALIZADA',
            'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL DE LOS 2 EJERCICIOS INMEDIATOS ANTERIORES EN ORIGINAL',
            'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL',
            'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL',
            'DECLARACIÓN FISCAL ANUAL DE LOS ÚLTIMOS 2 EJERCICIOS COMPLETOS',

        ],
        p1: {
            name: "PymeInmuebles15MDP",
            documentos: [
                'SOLICITUD DE CRÉDITO',
                'FORMATO AUTORIZACIÓN DE CONSULTA A BURÓ FIRMADO DEL SOLICITANTE Y AVAL',
                'ACTA DE MATRIMONIO, DIVORCIO O MODIFICACIÓN DEL RÉGIMEN CONYUGAL DEL SOLICITANTE Y AVAL',
                'IDENTIFICACIÓN OFICIAL VIGENTE CON FOTOGRAFÍA Y FIRMA LEGIBLE DEL SOLICITANTE Y AVAL',
                'COMPROBANTE DE DOMICILIO DEL SOLICITANTE Y AVAL CON ANTIGÜEDAD NO MAYOR A 3 MESES COMPLETO CON TODAS SUS HOJAS',
                'ALTA EN SHCP Y CÉDULA DE SITUACIÓN FISCAL (CSF) ACTUALIZADA DEL SOLICITANTE Y AVAL',
                'ÚLTIMOS 6 ESTADOS DE CUENTA MENSUALES COMPLETOS CON TODAS SUS HOJAS DEL SOLICITANTE',
                'ACTA CONSTITUTIVA, PODERES VIGENTES Y ACTAS DE ASAMBLEAS CON DATOS DE REGISTRO DEL SOLICITANTE Y AVAL (EN CASO DE SER PM)',
                'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL DEL EJERCICIO INMEDIATO ANTERIOR EN ORIGINAL',
                'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL',
                'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL',
                'DECLARACIÓN FISCAL ANUAL DEL ÚLTIMO EJERCICIO COMPLETO (ANUAL)',
                'CONTRATO DE COMPRA VENTA Y/O CARTA DEL CLIENTE CON LA DESCRIPCIÓN DEL INMUEBLE A ADQUIRIR',
            ],
        },
      p2: {
        name: "PymeSimpleRevolvente40MDP",
        documentos: [
            'SOLICITUD DE CRÉDITO',
            'FORMATO AUTORIZACIÓN DE CONSULTA A BURÓ FIRMADO DEL SOLICITANTE Y AVAL',
            'ACTA DE MATRIMONIO, DIVORCIO O MODIFICACIÓN DEL RÉGIMEN CONYUGAL DEL SOLICITANTE Y AVAL',
            'IDENTIFICACIÓN OFICIAL VIGENTE CON FOTOGRAFÍA Y FIRMA LEGIBLE DEL SOLICITANTE Y AVAL',
            'COMPROBANTE DE DOMICILIO DEL SOLICITANTE Y AVAL CON ANTIGÜEDAD NO MAYOR A 3 MESES COMPLETO CON TODAS SUS HOJAS',
            'ALTA EN SHCP Y CÉDULA DE SITUACIÓN FISCAL (CSF) ACTUALIZADA DEL SOLICITANTE Y AVAL',
            'ÚLTIMOS 6 ESTADOS DE CUENTA MENSUALES COMPLETOS CON TODAS SUS HOJAS DEL SOLICITANTE',
            'ACTA CONSTITUTIVA, PODERES VIGENTES Y ACTAS DE ASAMBLEAS CON DATOS DE REGISTRO DEL SOLICITANTE Y AVAL (EN CASO DE SER PM)',
            'BALANCE GENERAL Y ESTADO DE RESULTADOS ANUAL DEL EJERCICIO INMEDIATO ANTERIOR EN ORIGINAL',
            'BALANCE GENERAL Y ESTADO DE RESULTADOS PARCIAL CON ANTIGÜEDAD NO MAYOR A 3 MESES EN ORIGINAL',
            'RELACIONES ANALÍTICAS DE LAS PRINCIPALES CUENTAS COLECTIVAS DEL EJERCICIO COMPLETO (ANUAL) Y PARCIAL',
            'DECLARACIÓN FISCAL ANUAL DEL ÚLTIMO EJERCICIO COMPLETO (ANUAL)',
        ]
      }
    }
};