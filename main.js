// Visualizzazione ora e ultimo messaggio inviato/ricevuto​nella lista dei contatti


var app = new Vue({

  el: '#root',

  data: {

    // newMessage: {
    //               date: '',
    //               message:'',
    //               status: 'sent'
    //             },

    newMessage: '',
    newMessageReply: 'ok',
    writeName: '',
    indexContacts: 0,
    contacts: [
       {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [
                     {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                     },
                     {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                     },
                     {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                     }
              ],
       },
       {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [
                     {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                     },
                     {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                     },
                     {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa',
                             status: 'received'
                      }
              ],
       },
    {
         name: 'Luisa',
         avatar: '_3',
         visible: true,
         messages: [
                {
                       date: '28/03/2020 10:10:40',
                       message: 'La Marianna va in campagna',
                       status: 'received'
                },
                {
                       date: '28/03/2020 10:20:10',
                       message: 'Sicuro di non aver sbagliato chat?',
                       status: 'sent'
                },
                {
                       date: '28/03/2020 16:15:22',
                       message: 'Ah scusa!',
                       status: 'received'
                }
         ],
    },
    {
         name: 'Samuele',
         avatar: '_4',
         visible: true,
         messages: [
                {
                       date: '10/01/2020 15:30:55',
                       message: 'Lo sai che ha aperto una nuova pizzeria?',
                       status: 'sent'
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Si, ma preferirei andare al cinema',
                       status: 'received'
                }
         ],
    },
    {
         name: 'Michelangelo',
         avatar: '_5',
         visible: true,
         messages: [
                {
                       date: '10/01/2020 15:30:55',
                       message: 'Ti va di andar in palestra oggi?',
                       status: 'sent'
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Si, ma devo far solo cardio, niente pesi',
                       status: 'received'
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Certo tranquillo non vorrei mai diventassi uomo',
                       status: 'sent'
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Ha ha ha',
                       status: 'received'
                }
         ],
    },
    {
         name: 'Francesca',
         avatar: '_6',
         visible: true,
         messages: [
                {
                       date: '10/01/2020 15:30:55',
                       message: 'Ciao! Sai ti ho pensata molto oggi...',
                       status: 'sent'
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Si, anche io un sacco! Ne parlavo anche con Claudia che non avrei mai immaginato di trovar un vero amico che crede all\'amicizia uomo-donna e non vuole andar a letto insieme',
                       status: 'received'
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Ho capito... ennesima friendzone',
                       status: 'sent'
                }
         ],
    },
]



  }, // Fine data

  methods: {

    chooseFriend(indexArray) {

        this.indexContacts = indexArray;

    },

    pickHour() {

      this.contacts[this.indexContacts].date.substring(12, 5)
    },

    sendingMessage(newMessage) {

      this.contacts[this.indexContacts].messages.push({
        date: '15:30',
        message: newMessage,
        status: 'sent'
      });

      if (newMessage != '') {
        this.newMessage = '';

        setTimeout(() => {

          this.contacts[this.indexContacts].messages.push({
            date: '15:32',
            message: this.newMessageReply,
            status: 'received'
          });

        }, 1500)
      }

    },

    searchingUsers() {

      this.contacts.forEach((contact, i) => {

          if (contact.name.includes(this.writeName)) {

            contact.visible = true;

          } else {

            contact.visible = false;
          }

      });

      console.log(this.writeName);
    }



  }, // Fine methods


});
