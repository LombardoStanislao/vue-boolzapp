// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato


var app = new Vue({

  el: '#root',

  data: {

    newMessage: '',
    newMessageReply: 'ok',
    writeName: '',
    indexContacts: 0,
    indexMessage: 0,
    contacts: [
       {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [
                     {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showSubMenu: 'disabled',

                     },
                     {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            showSubMenu: 'disabled',
                     },
                     {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            showSubMenu: 'disabled',
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
                            status: 'sent',
                            showSubMenu: 'disabled',
                     },
                     {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showSubMenu: 'disabled',
                     },
                     {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa',
                            status: 'sent',
                            showSubMenu: 'disabled',
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
                       status: 'received',
                       showSubMenu: 'disabled',
                },
                {
                       date: '28/03/2020 10:20:10',
                       message: 'Sicuro di non aver sbagliato chat?',
                       status: 'sent',
                       showSubMenu: 'disabled',
                },
                {
                       date: '28/03/2020 16:15:22',
                       message: 'Ah scusa!',
                       status: 'received',
                       showSubMenu: 'disabled',
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
                       status: 'sent',
                       showSubMenu: 'disabled',
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Si, ma preferirei andare al cinema',
                       status: 'received',
                       showSubMenu: 'disabled',
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
                       status: 'sent',
                       showSubMenu: 'disabled',
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Si, ma devo far solo cardio, niente pesi',
                       status: 'received',
                       showSubMenu: 'disabled',
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Certo tranquillo non vorrei mai diventassi uomo',
                       status: 'sent',
                       showSubMenu: 'disabled',
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Ha ha ha',
                       status: 'received',
                       showSubMenu: 'disabled',
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
                       status: 'sent',
                       showSubMenu: 'disabled',
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Si, anche io un sacco! Ne parlavo anche con Claudia che non avrei mai immaginato di trovar un vero amico che crede all\'amicizia uomo-donna e non vuole andar a letto insieme',
                       status: 'received',
                       showSubMenu: 'disabled',
                },
                {
                       date: '10/01/2020 15:50:00',
                       message: 'Ho capito... ennesima friendzone',
                       status: 'sent',
                       showSubMenu: 'disabled',
                }
         ],
    },
],





  }, // Fine data

  methods: {

    chooseFriend(indexArray) {

        this.indexContacts = indexArray;
        this.scrollToBottom();

    },

    pickHour() {

      this.contacts[this.indexContacts].date.substring(12, 5)
    },

    sendingMessage(newMessage) {

        if (this.newMessage != '' && this.newMessage.trim().length>0) {
            this.contacts[this.indexContacts].messages.push({
              date: dayjs().format('HH:mm'),
              message: newMessage,
              status: 'sent',
              showSubMenu: 'disabled',

            });

            this.scrollToBottom();

            if (newMessage != '') {
              this.newMessage = '';

              setTimeout(() => {

                this.contacts[this.indexContacts].messages.push({
                  date: dayjs().format('HH:mm'),
                  message: this.newMessageReply,
                  status: 'received',
                  showSubMenu: 'disabled',
                });

                this.scrollToBottom();
              }, 1500)

              ;
            }
        }

    },

    searchingUsers() {


      this.contacts.forEach((contact, i) => {

          if (contact.name.toLowerCase().includes(this.writeName.toLowerCase())) {

            contact.visible = true;

          } else {

            contact.visible = false;
          }

      });

      console.log(this.writeName);
    },

    hideSubMenu() {


    },

    showSubMenu(indexMessage) {

        if (this.contacts[this.indexContacts].messages[indexMessage].showSubMenu == 'disabled') {
            this.contacts[this.indexContacts].messages[indexMessage].showSubMenu = 'active'
        } else {
            this.contacts[this.indexContacts].messages[indexMessage].showSubMenu = 'disabled'
        }

    },

    deleteMessage(indexMessage) {

        this.contacts[this.indexContacts].messages.splice(indexMessage, 1)

        console.log(this.contacts[this.indexContacts].messages);
    },

    scrollToBottom() {

      Vue.nextTick(function() {

            let div = document.getElementById('prova');

            div.scrollTop = div.scrollHeight;


      })

    },










  }, // Fine methods


});
