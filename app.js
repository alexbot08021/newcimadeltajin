const { createBot, createProvider, createFlow, addKeyword, EVENTS, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowgracias = addKeyword('gracias')
    .addAnswer('Mucha gracias, estamos para servirte')




const flow1 = addKeyword('1')
    .addAnswer('Para realizar tu factura por favor enviame:')
    .addAnswer('Una foto de tu ticket 📝')          
    .addAnswer('Una foto de tu baucher 📄')        
    .addAnswer('Constancia de situación fiscal actualizada 🧾')
    .addAnswer('y un correo electronico 📧')
    .addAnswer('Uno de nuestros asesores te apoyara lo más rápido posible, gracias 🧑🏼‍🔧')
    .addAnswer('agradecemos su preferencia')
    .addAnswer([
        ' ',
        'si desea regresar al menu escriba *MENU*',
               ]
        ,
        null,
        null,
        [flowgracias]
        ,
        )
   
const flow2 = addKeyword('2')
    .addAnswer('entra en el siguiente enlance')
    .addAnswer('https://www.ticket-factura.com/Grupo/cima')
    .addAnswer([
        ' ',
        'si desea regresar al menu escriba *MENU*',
            ],
        null, 
        null,
            )    

const flow3 = addKeyword('3')
    .addAnswer('Si necesitas corregir una factura')
    .addAnswer('envianos')
    
    .addAnswer('foto de tu factura')
    .addAnswer('si es a otro nombre, tu constancia de situación fiscal')
    .addAnswer('si es metodo de pago, foto de tu baucher')
    .addAnswer([
        ' ',
        'si desea regresar al menu escriba *MENU*',
            ],
        null,
        null
            )
const flow4 = addKeyword('4')
    .addAnswer('COMUNICATE CON NOSOTROS PARA RESOLVER CUALQUIER DUDA')
    .addAnswer('TELEFONO: 7828250902')
    .addAnswer('CORREO: clientes@cimadeltajin.com')
    .addAnswer('PAGINA: www.cimadeltajin.com')
    .addAnswer([
        ' ',
        'si desea regresar al menu escriba *MENU*',
            ],
        null,
        null
            )

const flow5 = addKeyword('5')
    .addAnswer('Tienes algúna sugerencia o queja')
    .addAnswer('escribenos en este apartado de manera detallada en que te podemos apoyar',{capture:true},(ctx) =>{
        
        
        console.log('mensaje entrante: ',ctx.body)   
        
    })
    
//
//


    .addAnswer('revisaremos su caso detalladamente y trabajaremos para resolverlo', {delay:90000})
    .addAnswer('agradecemos su preferencia') 
    .addAnswer([
        ' ',
        'si desea regresar al menu escriba *MENU*',
            ],
        null,
        null
            )

const flow8021 = addKeyword('1')
            .addAnswer('Cima del Tajín agradece tu preferencia')
            .addAnswer('Encuentra tu estación en el siguiente enlace')
            .addAnswer('https://maps.app.goo.gl/WRLDKgMmARCRaPSB8')
            .addAnswer([
                ' ',
                'si desea regresar al menu escriba *MENU*',
            ])

const flow11215 = addKeyword('2')
            .addAnswer('Cima del Tajín agradece tu preferencia')
            .addAnswer('Encuentra tu estación en el siguiente enlace')
            .addAnswer('https://maps.app.goo.gl/QSgqR24oaWwRht6n6')
            .addAnswer([
                ' ',
                'si desea regresar al menu escriba *MENU*',
            ])

const flow3620 = addKeyword('3')
            .addAnswer('Cima del Tajín agradece tu preferencia')
            .addAnswer('Encuentra tu estación en el siguiente enlace')
            .addAnswer('https://maps.app.goo.gl/yXpqdxWGntAsfpMF9')
            .addAnswer([
                ' ',
                'si desea regresar al menu escriba *MENU*',
            ])

const flow12712 = addKeyword('4')
            .addAnswer('Cima del Tajín agradece tu preferencia')
            .addAnswer('Encuentra tu estación en el siguiente enlace')
            .addAnswer('https://maps.app.goo.gl/aJWkqJn7oiquaaW58')
            .addAnswer([
                ' ',
                'si desea regresar al menu escriba *MENU*',
            ])

const flow6 = addKeyword('6')
            .addAnswer('Hola, indicanos que gasolinera estas buscando')
            .addAnswer('Te redirigiremos a google maps')
            .addAnswer(
            
            [
                ' 1️⃣ CIMA COATZINTLA', 
                ' 2️⃣ CIMA TIHUATLAN',
                ' 3️⃣ CIMA LOPEZ',
                ' 4️⃣ CIMA DIVISIÓN',
            ]
            ,
            null,
            null,
            [flow8021,flow11215,flow3620,flow12712]
            ,
            )





const flow7 = addKeyword('7')
    .addAnswer( 'Hola para iniciar el proceso de reclutamiento, deberás acudir a nuestro departamento de recursos humanos dirigido a la Lic. Alma Sanchez con la siguiente documentación:')
    .addAnswer(
        [
   
    '- Cv o solicitud',
    '- Acta de nacimiento',
    '- Último grado de estudios',
    '- Copia de INE',
    '- Numero de seguro social',
    '- Constancia de situación fiscal RFC',
    '- Comprobante de domicilio',
        ])

    .addAnswer('le comparto la dirección en la siguiente liga https://goo.gl/maps/n8xDo8H6qBnoRdWz5')
    .addAnswer('Lic. Alma Sánchez 7822238280 , correo gdn.administracion@grupogdh.com')
    .addAnswer('Que tengas un buen día')
    .addAnswer([
        ' ',
        'si desea regresar al menu escriba *MENU*',
    ]
    ,
    null,
    null,
    )





const flow8 = addKeyword('8')
.addAnswer('Términos y Condiciones del Concurso "*Tu anécdota favorita como mamá*"')
    .addAnswer([
        '*1. Organizador del Concurso*',
        '*•* El concurso "Tu anécdota favorita como mamá" es organizado por la gasolinera Cima del Tajín.',
             ],{delay:500})
    .addAnswer([
        '*2. Elegibilidad*',
        '*•* El Concurso está abierto solo a mamás.',
        '*•* Los empleados del Organizador y sus familiares directos son elegibles para participar, excepto personal administrativo.',
            ],{delay:550})
    .addAnswer([
        '*3. Duración del Concurso*',
        '*•* El Concurso comienza el 03 de mayo 2024 y termina el 24 de mayo de 2024',
        '*•* Todas las participaciones deben ser recibidas antes de la fecha de finalización para ser consideradas.',
        '*•* Fecha de anuncio del ganador 25 de mayo de 2024',
            ],{delay:600})
    .addAnswer([
        '*4. Cómo Participar*',
        '*•* Para participar, los concursantes deben enviar su "anécdota favorita como mamá" a través de WhatsApp antes de la fecha de finalización.',
        '*•* Los concursantes deben compartirnos una foto de su familia con la que crean poder ganar.',
        '*•*	Deberán seguir nuestro canal de WhatsApp, Facebook, Instagram y  TikTok incluidos en el siguiente enlace  https://atom.bio/cima_del_tajin',
        '*•*	Los participantes pueden invitar a sus amigos a reaccionar y comentar en la publicación de su vehículo para aumentar sus probabilidades de ganar.',
        '*•* Se prohíbe el uso de bots u otros métodos automatizados para participar. Cualquier uso de estos métodos resultará en la descalificación inmediata del participante.',
            ],{delay:650})
    .addAnswer([
        '*5. Criterios de Selección*',
        '*•* Las anécdotas serán evaluadas por un panel de jueces seleccionados por el Organizador.',
        '*•* Los criterios de evaluación incluyen la originalidad, la creatividad y la calidad de la anécdota.',
            ],{delay:700})
    .addAnswer([
        '*6. Uso del Material Enviado*',
        '*•* Al enviar una anécdota, los participantes otorgan al Organizador el derecho no exclusivo, transferible y libre de regalías para usar, reproducir, modificar, publicar, distribuir y mostrar su anécdota en cualquier medio de comunicación.',
        '*•* Al participar enviando su fotografía, los participantes autorizan de manera expresa al organizador a hacer uso del derecho de uso de imagen.',
        '*•* El participante es responsable de contar con la autorización de sus familiares que aparezcan en la imagen, en caso de controversia con terceros, el participante dejará en paz y salvo al organizador',
        '*•* Los participantes declaran y garantizan que el contenido enviado es original y no infringe los derechos de autor ni los derechos de terceros.',
            ],{delay:750})
    .addAnswer([
        '*7. Premios*',
        '*•* 1er lugar: Una smart tv de 32 pulgadas.',
        '*•* 2do lugar: $1,000.00 pesos en vales de despesa de la canasta basica (No aplica cerveza, cigarros o licores) para canjear en sucursales Hi Bye',
        '*•* 3er lugar: $500.00 pesos en vales de despesa de la canasta basica (No aplica cerveza, cigarros o licores) para canjear en sucursales Hi Bye',
        '*•* Los ganadores serán notificados a través de WhatsApp y deben responder dentro de 1 día para reclamar su premio.',
            ],{delay:800})
    .addAnswer([
        '*8. Privacidad*',
        '*•* El Organizador recopilará y tratará los datos personales de los participantes de acuerdo con su política de privacidad.'
            ],{delay:850})
    .addAnswer([
        '*9. Aceptación de los Términos y Condiciones*',
        '*•* Al participar en el Concurso, los participantes aceptan estos términos y condiciones.',
        '*•* El Organizador se reserva el derecho de modificar estos términos y condiciones en cualquier momento y a su entera discreción.',
            ],{delay:900})
   
    .addAnswer([
        ' ',
        '_¿Quieres conocer todos nuestros servicios?_, escribe *MENU*',
        ' ',
            ],{delay:920})
































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const flowPrincipal = addKeyword(['bien dia','hola buen','bue','tarde','dias','Vi esto en Facebook...',
    'podrías darme más información de...','me enviarían más','quiero chatear con alguien','quiero empleo',
    'Quiero Saber de todos tus servicios...','quiero Facturar por WhatsApp'])
        
        //.addAnswer('¡Hola! Sabes quienes ganaron en nuestra rifa',{delay:500})
        //.addAnswer('Consultalo en nuestro Facebook 👇🏻👇🏻👇🏻',{delay:550})
        //.addAnswer('https://atom.bio/cima_del_tajin',{delay:600})
        //.addAnswer(
            //[
                //'---------- *CIMA DEL TAJÍN* ----------',
                //'*TU GASOLINERA DE CONFIANZA*',
                //'Bienvenido a << _*CIMAWHATS*_ >>',
                //'*Soy tu Asistente Virtual* 🧐',
                //'*¿En que puedo ayudarte?🤔*', 
            //])
  
            .addAnswer(
                [   
                  
                    '*Cima del Tajín* Tu Asistente virtual.',
                    '-¡Hola! Soy Nimbe tu asistente virtual, para ayudarte a realizar tu factura por favor enviame:',
                    ' ',
                    '*¿En que puedo ayudarte? escribe una opción 🤔*',
                    ' ',
                    ' ',
                    
            
               ' 1️⃣ *Facturación por WhastApp*', 
               ' 2️⃣ *Facturación en linea*',
               ' 3️⃣ *Correcciónes de facturas*', 
               ' 4️⃣ *Contacto*',
               ' 5️⃣ *Sugerencias o Queja*',
               ' 6️⃣ *Localiza tu estación*',
               ' 7️⃣ *Informes de vacantes*',
               ///' 8️⃣ *⭐Terminos "Tu anecdota como mamá"⭐*', ///
               ///' 9️⃣ *Terminos y condiciones Presume tu Nave*', 
              
            ],
            { media: 'https://i.imgur.com/vWO6Ffn.png' },
            {delay:2000},
            [flow1,flow2,flow3,flow4,flow5,flow6,flow7,flow8]
            ,)
            
/////////////////////////////////////////////////////////////////////SUB MENU ///////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////SUB MENU ///////////////////////////////////////////////////////////////////////////////////////////////////////


const flowsecundario = addKeyword('menu')
.addAnswer('*¿En que más puedo ayudarte?* 🧐',{delay:400})
.addAnswer('Escribe una opción',{delay:450})
.addAnswer('Estamos para servite',{delay:500})
.addAnswer(                                                              
    
    [
       ' 1️⃣ *Facturación por WhastApp*', 
       ' 2️⃣ *Facturación en linea*',
       ' 3️⃣ *Correcciónes de facturas*',
       ' 4️⃣ *Contacto*',
       ' 5️⃣ *Sugerencias o Queja*',
       ' 6️⃣ *Localiza tu estación*',
       ' 7️⃣ *Informes de vacantes*',
       ///' 8️⃣ *⭐Terminos "Tu anecdota como mamá"⭐*', 
       ///' 9️⃣ *Terminos y condiciones Presume tu Nave*', 

        ],
        null,
        null,
        [flow1,flow2,flow3,flow4,flow5,flow6,flow7,flow8])


    ///////////////////////////////////////////////////////////**FLOW DE RESPUESTA AUTOMATICA**/////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const flowquejas = addKeyword('platicanos tu sugerencia o queja')
    .addAnswer('Tienes algúna sugerencia o queja')
    .addAnswer('escribenos en este apartado de manera detallada en que te podemos apoyar',{capture:true},(ctx) =>{
        
        
        console.log('mensaje entrante: ',ctx.body)   
        
    })
    


    .addAnswer('revisaremos su caso detalladamente y trabajaremos para resolverlo', {delay:90000})
    .addAnswer('agradecemos su preferencia') 
    .addAnswer([
        ' ',
        'si desea regresar al menu escriba *MENU*',
            ],
        null,
        null
            )




    ///////////main////////////main///////////////main//////////////////main///////////main////////////////main/////////////////main///////////////main///////////////main//////////////main



    const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowsecundario,flowquejas])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
























