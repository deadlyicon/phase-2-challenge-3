const clients =

let searchByName = clients.filter(function(name) {
  if (clients.rep_name[0] === name) {
    return clients.id, clients.rep_name;
  }
});
