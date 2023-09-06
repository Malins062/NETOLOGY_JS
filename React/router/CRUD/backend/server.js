import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import POSTS from './data.json' assert { type: 'json' };
import dayjs from 'dayjs';

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// let posts = [];
let posts = POSTS;
// console.log(posts);
let nextId = posts.length + 1;

app.get('/posts', (req, res) => {
  res.send(JSON.stringify(posts));
});

app.get('/posts/:id', (req, res) => {
  const postId = Number(req.params.id);
  const index = posts.findIndex((o) => o.id === postId);
  res.send(JSON.stringify({ post: posts[index] }));
});

app.post('/posts', (req, res) => {
  const nowDateTime = dayjs().format('DD.MM.YYYY HH:mm:ss');
  posts.push({ ...req.body, id: nextId++, created: nowDateTime });
  res.status(204);
  res.end();
});

app.put('/posts/:id', (req, res) => {
  const postId = Number(req.params.id);
  posts = posts.map((o) => {
    if (o.id === postId) {
      return {
        ...o,
        ...req.body,
        id: o.id,
      };
    }
    return o;
  });
  res.status(204).end();
});

app.delete('/posts/:id', (req, res) => {
  const postId = Number(req.params.id);
  const index = posts.findIndex((o) => o.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
  }
  res.status(204);
  res.end();
});

const port = process.env.PORT || 7070;
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
);
