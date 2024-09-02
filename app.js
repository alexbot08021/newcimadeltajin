const { createBot, createProvider, createFlow, addKeyword, EVENTS, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowgracias = addKeyword('gracias')
    .addAnswer('Mucha gracias, estamos para servirte')




const flow1 = addKeyword('1')
    .addAnswer([
                '*Para realizar tu factura por favor enviame:*',
                ' ',
                '- Una foto de tu ticket 📝',
                '- Una foto de tu baucher 📄',
                '- Constancia de situación fiscal actualizada 🧾',
                '- y un correo electronico 📧',
                '- Uno de nuestros asesores te apoyara lo más rápido posible, gracias 🧑🏼‍🔧',
                '- agradecemos su preferencia',
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
    


    .addAnswer('revisaremos su caso detalladamente y trabajaremos para resolverlo', {delay:90000})
    .addAnswer('agradecemos su preferencia') 
    .addAnswer([
        ' ',
        'si desea regresar al menu escriba *MENU*',
            ],
        null,
        null
            )

const flow6 = addKeyword('6')
            .addAnswer('Hola, indicanos que gasolinera estas buscando')
            .addAnswer('Te redirigiremos a google maps')
          
            .addAnswer('*CIMA COATZINTLA*                                                                    Encuentra tu estación en el siguiente enlace https://maps.app.goo.gl/WRLDKgMmARCRaPSB8 ',
                { media: 'https://i.imgur.com/aVIS0Mz.png' }
                         )

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
    .addAnswer('puede enviar mensaje o llamar al numero 7821758152 , correo gdn.administracion@grupogdh.com')
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
.addAnswer('Términos y Condiciones del GIVE AWAY para papá*"')
.addAnswer('*TODOS PUEDEN PARTICIPAR*')   

    .addAnswer([
        '*1. Organizador del Concurso*',
        '*•* El Give Away es organizado por la gasolinera Cima del Tajín.',
             ],{delay:100})
    .addAnswer([
        '*2. Elegibilidad*',
        '*•* El Concurso está abierto al público en general.',
    
            ],{delay:110})
    .addAnswer([
        '*3. Duración del Concurso*',
        '*•* El Concurso comienza el 01 de junio de 2024 y termina el 29 de junio de 2024',
        '*•* Todas las participaciones deben ser recibidas antes de la fecha de finalización para ser consideradas.',
        '*•* Fecha de anuncio del ganador 29 de junio de 2024',
            ],{delay:120})
    .addAnswer([
        '*4. Cómo Participar*',
        '*•* 1.- Sigue Nuestra pagina de facebook y canal de WhatsApp 😜https://whatsapp.com/channel/0029Va9JGO22v1IrQUVgJ40L',
        '*•* 2.- Reacciona y comparte esta publicación🥰',
        '*•* 3.- etiqueta a tres de tus amigos en un solo comentario🤩',
            ],{delay:130})
    .addAnswer([
        '*5. Criterios de Selección*',
        '*•* Los ganadores se daran a conocer en un live realizado el día de la finalización del concurso',
        
            ],{delay:140})
    .addAnswer([
        '*6. Uso del Material Enviado*',
        '*•* Los participantes otorgan al Organizador el derecho no exclusivo, transferible y libre de regalías para usar, reproducir, modificar, publicar, distribuir y mostrar la información en cualquier medio de comunicación.',
        '*•* Los participantes autorizan de manera expresa al organizador a hacer uso del derecho de uso de imagen.',
        '*•* El participante es responsable de contar con la autorización de sus amigos que aparezcan en el post, en caso de controversia con terceros, el participante dejará en paz y salvo al organizador',
        
            ],{delay:150})
    .addAnswer([
        '*7. Premios*',
        '*•* Un Galaxy Wach 4 SM-R860.',
       
            ],{delay:160})
    .addAnswer([
        '*8. Privacidad*',
        '*•* El Organizador recopilará y tratará los datos personales de los participantes de acuerdo con su política de privacidad.'
            ],{delay:170})
    .addAnswer([
        '*9. Aceptación de los Términos y Condiciones*',
        '*•* Al participar en el Concurso, los participantes aceptan estos términos y condiciones.',
        '*•* El Organizador se reserva el derecho de modificar estos términos y condiciones en cualquier momento y a su entera discreción.',
            ],{delay:180})
   
    .addAnswer([
        ' ',
        '_¿Quieres conocer todos nuestros servicios?_, escribe *MENU*',
        ' ',
            ],{delay:190})



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const flowsecundario = addKeyword(['bien dia','Hola','buenos dias','buenas tardes','buenas noches','hola buen','bue','tarde','dias','Vi esto en Facebook...',
    'podrías darme más información de...','me enviarían más','quiero chatear con alguien','quiero empleo',
    'Quiero Saber de todos tus servicios...','terminos','Condiciones'])
        
            .addAnswer(
                [  
                  
                    '*Hola soy "Nimbe"* Tu Asistente virtual.',
                    'Bienvenido a _CimaWhats_',
                    //'Bienvenido a _CimaWhats_, Consulta como puedes participar en nuestro *Give Away Para Papá* en la opción 8 o en https://atom.bio/cima_del_tajin',
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
               //' 8️⃣ *⭐"GIVE AWAY PARA PAPÁ"⭐*', 
               ///' 9️⃣ *Terminos y condiciones Presume tu Nave*', 
              
            ],
            { media: 'https://i.imgur.com/SA2Zv9o.png' },
            null,
            [flow1,flow2,flow3,flow4,flow5,flow6,flow7,flow8]
            ,)
            
/////////////////////////////////////////////////////////////////////SUB MENU ///////////////////////////////////////////////////////////////////////////////////////////////////////

const flowPrincipal = addKeyword('Facturar por WhatsApp')
            .addAnswer( 
            [
                
                '*-¡Hola! Soy Nimbe tu asistente virtual*, para ayudarte a realizar tu factura por favor enviame:',
                ' ',
                '- Una foto de tu ticket 📝',
                '- Una foto de tu baucher 📄',
                '- Constancia fiscal actualizada 🧾',
                '- y un correo electronico 📧',
                '- Uno de nuestros asesores te apoyara lo más rápido posible, gracias 🧑🏼‍🔧',
                '- agradecemos su preferencia',
                '- Tiempo de espera *30 min*',
                ' ',
                ' ',
                '⭐Necesita algo más escriba *MENU*⭐',
            ],
            { media: 'https://i.imgur.com/9INS0L7.png' },
            null,
            )

          

/////////////////////////////////////////////////////////////////////SUB MENU ///////////////////////////////////////////////////////////////////////////////////////////////////////

const flowmenu = addKeyword('menu')
        
            .addAnswer(
                [   
                  
                    '*Hola soy "Nimbe"* Tu Asistente virtual.',
                    'Bienvenido a _CimaWhats_',
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
               //' 8️⃣ *⭐"GIVE AWAY PARA PAPÁ"⭐*', 
               ///' 9️⃣ *Terminos y condiciones Presume tu Nave*', 
              
            ],
            { media: 'https://i.imgur.com/VhTREMv.png' },
            null,
            [flow1,flow2,flow3,flow4,flow5,flow6,flow7,flow8]
            ,)



///////////////////////////////////////////////////////////**FLOW para hacer pruebas **/////////////////////////////////////////////////////////////

const flowpruebas = addKeyword('claveactivador')
            .addAnswer(
                [
                '-¡Hola! Soy Nimbe tu asistente virtual, para ayudarte a realizar tu factura por favor enviame:',
                ' ',
                '* Una foto de tu ticket 📝',
                '* Una foto de tu baucher 📄',
                '* Constancia fiscal actualizada 🧾',
                '* y un correo electronico 📧',
                '* Uno de nuestros asesores te apoyara lo más rápido posible, gracias 🧑🏼‍🔧',
                '* Tiempo de espera 30 min',
                ' ',
                '"Vota" por tu favorito en nuestro concurso de trajes tipicos picale a unos de los siguientes linck ',
                ' ',
                'Canal de WhatsApp https://whatsapp.com/channel/0029Va9JGO22v1IrQUVgJ40L',
                'Comunidad de WhatsApp https://chat.whatsapp.com/JWGm47795PL41pnE7Mil3p',
                'Facebook Cimadeltajín https://www.facebook.com/cimadeltajin/',
                ' ',
                '⭐Necesita algo más escriba MENU⭐'
                ],
                { media: 'https://media.giphy.com/media/WhBeVM648P3DOktint/giphy.mp4' },
                null,
            )

const flowpruebas2 = addKeyword('codigo2')
            .addAnswer(
                [
                '-¡Hola! Soy Nimbe tu asistente virtual, para ayudarte a realizar tu factura por favor enviame:',
                ' ',
                '* Una foto de tu ticket 📝',
                '* Una foto de tu baucher 📄',
                '* Constancia fiscal actualizada 🧾',
                '* y un correo electronico 📧',
                '* Uno de nuestros asesores te apoyara lo más rápido posible, gracias 🧑🏼‍🔧',
                '* Tiempo de espera 30 min',
                ' ',
                '"Vota" por tu favorito en nuestro concurso de trajes tipicos picale a unos de los siguientes linck ',
                ' ',
                'Canal de WhatsApp https://whatsapp.com/channel/0029Va9JGO22v1IrQUVgJ40L',
                'Comunidad de WhatsApp https://chat.whatsapp.com/JWGm47795PL41pnE7Mil3p',
                'Facebook Cimadeltajín https://www.facebook.com/cimadeltajin/',
                ' ',
                '⭐Necesita algo más escriba MENU⭐'
                ],
                { media: 'https://i.imgur.com/bnobM62.png' },
                null,
            )






///////////////////////////////////////////////////////////**FLOW DE RESPUESTA AUTOMATICA**/////////////////////////////////////////////////////////////


const flowTerminos = addKeyword('Terminos','condiciones')
.addAnswer('Términos y Condiciones del GIVE AWAY para papá*"')
.addAnswer('*TODOS PUEDEN PARTICIPAR*')   

    .addAnswer([
        '*1. Organizador del Concurso*',
        '*•* El Give Away es organizado por la gasolinera Cima del Tajín.',
             ],{delay:100})
    .addAnswer([
        '*2. Elegibilidad*',
        '*•* El Concurso está abierto al público en general.',
    
            ],{delay:110})
    .addAnswer([
        '*3. Duración del Concurso*',
        '*•* El Concurso comienza el 01 de junio de 2024 y termina el 26 de juio de 2024',
        '*•* Todas las participaciones deben ser recibidas antes de la fecha de finalización para ser consideradas.',
        '*•* Fecha de anuncio del ganador 26 de mayo de 2024',
            ],{delay:120})
    .addAnswer([
        '*4. Cómo Participar*',
        '*•* 1.- Sigue Nuestra pagina de facebook y canal de WhatsApp 😜https://whatsapp.com/channel/0029Va9JGO22v1IrQUVgJ40L',
        '*•* 2.- Reacciona y comparte esta publicación🥰',
        '*•* 3.- etiqueta a tres de tus amigos en un solo comentario🤩',
            ],{delay:130})
    .addAnswer([
        '*5. Criterios de Selección*',
        '*•* Los ganadores se daran a conocer en un live realizado el día de la finalización del concurso',
        
            ],{delay:140})
    .addAnswer([
        '*6. Uso del Material Enviado*',
        '*•* Los participantes otorgan al Organizador el derecho no exclusivo, transferible y libre de regalías para usar, reproducir, modificar, publicar, distribuir y mostrar la información en cualquier medio de comunicación.',
        '*•* Los participantes autorizan de manera expresa al organizador a hacer uso del derecho de uso de imagen.',
        '*•* El participante es responsable de contar con la autorización de sus amigos que aparezcan en el post, en caso de controversia con terceros, el participante dejará en paz y salvo al organizador',
        
            ],{delay:150})
    .addAnswer([
        '*7. Premios*',
        '*•* Un Galaxy Wach 4 SM-R860.',
       
            ],{delay:160})
    .addAnswer([
        '*8. Privacidad*',
        '*•* El Organizador recopilará y tratará los datos personales de los participantes de acuerdo con su política de privacidad.'
            ],{delay:170})
    .addAnswer([
        '*9. Aceptación de los Términos y Condiciones*',
        '*•* Al participar en el Concurso, los participantes aceptan estos términos y condiciones.',
        '*•* El Organizador se reserva el derecho de modificar estos términos y condiciones en cualquier momento y a su entera discreción.',
            ],{delay:180})
   
    .addAnswer([
        ' ',
        '_¿Quieres conocer todos nuestros servicios?_, escribe *MENU*',
        ' ',
            ],{delay:190})


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
    const adapterFlow = createFlow([flowPrincipal,flowsecundario,flowTerminos,flowmenu,flowpruebas,flowpruebas2])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb({port:8080})
}

main()
 