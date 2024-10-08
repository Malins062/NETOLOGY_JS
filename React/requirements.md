# Frontend

Ко всем решениям домашних заданий, если в условиях задачи не обозначено иное, предъявляются следующие требования:

* весь код — в публичном репозитории GitHub;
* на каждую задачу — отдельный репозиторий, если в задаче указано, что всё можно в одном — делайте в одном, но так, чтобы было понятно, где какая задача.

Дополнительные требования для прошедших курсы AHJ:

* используется AppVeyor в качестве Continuous Deployment,
* собранная версия frontend выкладывается на GitHub Pages через AppVeyor.

## AppVeyor

В файле `.appveyor.yml` нужно строку `- npx push-dir --dir=dist --branch=gh-pages --force --verbose` заменить на `- npx push-dir --dir=build --branch=gh-pages --force --verbose`.

### GitHub Pages

Полная информация описана [здесь](https://create-react-app.dev/docs/deployment/#github-pages).

Вкратце:

1. Нужно добавить в `package.json` свойство `homepage`, указывающее на вашу страничку, например, `"homepage": "https://coursar.github.io/ra/"`.
2. Нужно использовать `HashRouter`, если вы используете React Router.

## Backend

Для backend, если его написание предусмотрено условиями задачи:

* авто-тесты не требуются,
* для развёртывания достаточно простой интеграции между Heroku и GitHub,
* backend должен быть написан на JS с использованием Node.js,
* backend должен быть развёрнут на Heroku,
* исходный код также выложен на GitHub в виде отдельного репо.

## Вопросы

Любые вопросы по решению задач задавайте в чате учебной группы.
