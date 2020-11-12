// Milestone 3
// ● Aggiunta di un messaggio:​l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dall’interlocutore: ​ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

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
    indexContacts: 0,
    contacts: [
       {
              name: 'Michele',
              avatar: 'img/avatar_1.png',
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
              avatar: 'img/avatar_2.png',
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
         avatar: 'img/avatar_3.png',
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
         avatar: 'img/avatar_4.png',
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
         name: 'Manuel',
         avatar: 'img/avatar_5.png',
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
         avatar: 'img/avatar_6.png',
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

      this.contacts.date.substring(12, 5)
    },

    sendingMessage(newMessage, indexContacts) {

      this.contacts[indexContacts].messages.push({
        date: '15:30',
        message: newMessage,
        status: 'sent'
      });

      if (newMessage != '') {
        this.newMessage = '';

        setTimeout(() => {

          this.contacts[indexContacts].messages.push({
            date: '15:32',
            message: this.newMessageReply,
            status: 'received'
          });

        }, 2000)
      }

    }



  }, // Fine methods


});
