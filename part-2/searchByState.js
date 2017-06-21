const requestURL = 'https://gist.githubusercontent.com/lg-bot/b5fd15cbc3c6b454055916815b2fdea6/raw/4b8ef0338a27f5552848a818aac4d67acb83146b/clients.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
const clients =

let searchByState = function(state) {
  for (var i in clients) {
    if (clients[i].state === state) {
      return clients
    }
  }
};
