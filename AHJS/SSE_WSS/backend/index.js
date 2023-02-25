const WS = require('ws');
const { v4: uuid } = require('uuid');

const clients = new Set();
let userNames = [];
const messages = [];

const port = process.env.PORT || 7070;
const wsServer = new WS.Server({ port });
console.log(`Starting WebSocket Server on port ${port}, listening connections...`); // eslint-disable-line no-console

function getFormattedDateTime(date) {
  const day = date.getDate() < 10
    ? `0${date.getDate()}`
    : date.getDate();
  const month = date.getMonth() < 10
    ? `0${date.getMonth() + 1}`
    : date.getMonth();
  const year = String(date.getFullYear()).slice(-2);
  const hour = date.getHours() < 10
    ? `0${date.getHours()}`
    : date.getHours();
  const minutes = date.getMinutes() < 10
    ? `0${date.getMinutes()}`
    : date.getMinutes();
  const seconds = date.getSeconds() < 10
    ? `0${date.getSeconds()}`
    : date.getSeconds();
  const formattedDate = `${day}.${month}.${year} ${hour}:${minutes}:${seconds}`;

  return formattedDate;
}

wsServer.on('connection', (ws) => {
  const id = uuid();
  clients[id] = ws;
  console.log(`New client connected - id #${id}`); // eslint-disable-line no-console

  // Отправление всех подключенных пользователей новому клиенту
  clients[id].send(JSON.stringify({ renderUsers: true, names: userNames }));

  // Отправление всех сообщений новому клиенту
  if (messages.length !== 0) {
    ws.send(JSON.stringify({ renderMessages: true, messages }));
  }

  // При получении сообщения от пользователя
  ws.on('message', (rawMessage) => {
    const message = JSON.parse(rawMessage);

    if (message.chooseUserName) {
      if (userNames.every((name) => name !== message.userName)) {
        userNames.push(message.userName);
        clients[id].userName = message.userName;
        const name = clients[id].userName;

        for (const idClient in clients) {
          if (clients[idClient].userName === name) {
            clients[idClient].send(
              JSON.stringify({ nameIsFree: true, name: message.userName }),
            );
          } else {
            clients[idClient].send(
              JSON.stringify({ renderName: true, name: message.userName }),
            );
          }
        }
        return;
      }
      clients[id].send(JSON.stringify({ nameIsFree: false }));
      return;
    }

    if (message.chatMessage) {
      const name = clients[id].userName;
      message.date = getFormattedDateTime(new Date());

      messages.push({
        name,
        message: message.messageText,
        date: message.date,
      });

      // console.log('Messages', messages);

      for (const idClient in clients) {
        if (clients[idClient].userName === name) {
          clients[idClient].send(
            JSON.stringify({
              renderOwnMessage: true,
              name: 'Вы',
              message: message.messageText,
              date: message.date,
            }),
          );
        } else {
          clients[idClient].send(
            JSON.stringify({
              renderMessage: true,
              name,
              message: message.messageText,
              date: message.date,
            }),
          );
        }
      }
    }
  });

  ws.on('close', () => {
    userNames = userNames.filter((name) => name !== clients[id].userName);
    console.log(`User "${clients[id].userName}" logout. List of users: [${userNames}]`); // eslint-disable-line no-console
    for (const idClient in clients) {
      if (Object.prototype.hasOwnProperty.call(clients, idClient)) {
        clients[idClient].send(
          JSON.stringify({ closeUser: true, name: clients[id].userName }),
        );
      }
    }
    delete clients[id];
  });
});
