const uuid = require('uuid');
const http = require('http');
const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');

function nowDateTime() {
  const now = new Date();
  const result = `${now.toLocaleString([],
    {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })}`;

  return result;
}

const app = new Koa();

let tickets = [
  {
    id: '1',
    name: 'Поменять краску в принтере, каб.404',
    description: 'Закончилась краска в принтере, модель Epson-CJ300',
    status: true,
    created: '10.03.2022 08:40',
  },
  {
    id: '2',
    name: 'Переустановить OC Linux, каб.204',
    description: 'Слетела операционная система, требуется переустановка',
    status: true,
    created: '22.11.2022 13:10',
  },
  {
    id: '3',
    name: 'Установить обновление KB-32565, каб.106',
    description: 'Вышло критическое обновление Windows-10, требуется установка обновления',
    status: false,
    created: '08.12.2022 10:00',
  },
  {
    id: '4',
    name: '123',
    description: 'Описание задачи',
    status: false,
    created: '08.01.2023 10:00',
  },
];

// => Static file handling
const publics = path.join(__dirname, '/public');
app.use(koaStatic(publics));

app.use(koaBody({
  urlencoded: true,
}));

app.use((ctx, next) => {
  if (ctx.request.method !== 'OPTIONS') {
    next();

    return;
  }

  ctx.response.set('Access-Control-Allow-Origin', '*');
  ctx.response.set('Access-Control-Allow-Methods', 'DELETE, PUT, PATCH, GET, POST');

  ctx.response.status = 204;
});

// => DELETE
app.use((ctx, next) => {
  if (ctx.request.method !== 'DELETE') {
    next();

    return;
  }

  const { method } = ctx.query;

  ctx.response.set('Access-Control-Allow-Origin', '*');

  switch (method) {
    case 'deleteTicket': {
      // console.log('deleteTicket ctx.request.query=', ctx.request.query);
      const { id } = ctx.request.query;

      if (tickets.every((item) => item.id !== id)) {
        ctx.response.status = 400;
        ctx.response.body = `Задачи с идентификатором ${id} не существует!`;
        return;
      }

      tickets = tickets.filter((item) => item.id !== id);

      ctx.response.body = {
        msg: 'Ticket was successfully deleted.',
        id,
      };
      ctx.response.status = 202;
      // console.log(newTicket);  // eslint-disable-line no-console
      return;
    }

    default:
      ctx.response.status = 404;
  }
});

// => POST
app.use((ctx, next) => {
  if (ctx.request.method !== 'POST') {
    next();

    return;
  }

  const { method } = ctx.query;
  // console.log(ctx.request, ctx.query, ctx.request.body);

  ctx.response.set('Access-Control-Allow-Origin', '*');

  switch (method) {
    case 'createTicket': {
      // console.log('createTicket ctx.request.body=', ctx.request.body);
      const { name, description } = ctx.request.body;

      if (tickets.some((ticket) => ticket.name === name)) {
        ctx.response.status = 400;
        ctx.response.body = `Задача с именем - "${name}" уже существует!`;
        return;
      }

      const newTicket = {
        id: uuid.v4(),
        name,
        description,
        status: false,
        created: nowDateTime(),
      };

      tickets.push(newTicket);

      ctx.response.body = newTicket;
      ctx.response.status = 202;
      // console.log(newTicket);  // eslint-disable-line no-console
      return;
    }

    default:
      ctx.response.status = 404;
  }
});

// => PATCH
app.use((ctx, next) => {
  if (ctx.request.method !== 'PATCH') {
    next();

    return;
  }

  const { method, id } = ctx.query;
  // console.log(ctx.request, ctx.query, ctx.request.body);

  ctx.response.set('Access-Control-Allow-Origin', '*');

  switch (method) {
    case 'changeStatusTicket': {
      // console.log('changeStatusTicket ctx.request.body=', ctx.request.body);
      const { status } = ctx.request.body;

      const indexTicket = tickets.findIndex((ticket) => ticket.id === id);
      tickets[indexTicket].status = status === 'true';

      ctx.response.body = tickets[indexTicket];
      ctx.response.status = 202;
      return;
    }

    case 'changeTicket': {
      // console.log('changeTicket ctx.request.body=', ctx.request.body);
      const { name, description } = ctx.request.body;

      const indexTicket = tickets.findIndex((ticket) => ticket.id === id);
      tickets[indexTicket].name = name;
      tickets[indexTicket].description = description;

      ctx.response.body = tickets[indexTicket];
      ctx.response.status = 202;
      return;
    }

    default:
      ctx.response.status = 404;
  }
});

// => GET
app.use((ctx) => {
  if (ctx.request.method !== 'GET') {
    return;
  }
  const { method } = ctx.query;
  // console.log(ctx.request, ctx.query, ctx.request.body);

  ctx.response.set('Access-Control-Allow-Origin', '*');

  switch (method) {
    case 'allTickets': {
      ctx.response.status = 202;
      const allTickets = tickets.map((item) => ({
        id: item.id,
        name: item.name,
        status: item.status,
        created: item.created,
      }));

      ctx.response.body = allTickets;
      // console.log(allTickets);  // eslint-disable-line no-console
      return;
    }

    case 'ticketById': {
      const { id } = ctx.query;

      if (tickets.every((item) => item.id !== id)) {
        ctx.response.status = 400;
        ctx.response.body = `Задачи с идентификатором ${id} не существует!`;
        return;
      }

      const ticket = tickets.filter((item) => item.id === id);
      ctx.response.body = ticket;
      ctx.response.status = 202;
      // console.log(ticket);  // eslint-disable-line no-console
      return;
    }

    default:
      ctx.response.status = 404;
  }
});

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());

server.listen(port, (err) => {
  if (err) {
    return console.error('Произошла ошибка:', err); // eslint-disable-line no-console
  }

  return console.log(`Сервер запущен в ${nowDateTime()}. Прослушиваем порт: ${port}.`); // eslint-disable-line no-console
});
