import HelpDeskWidget from '../widgets/helpdesk/helpdesk';

// Адрес сервера
const URL_SERVER = 'http://localhost:7070';

// Ticket {
//   id // идентификатор (уникальный в пределах системы)
//   name // краткое описание
//   status // boolean - сделано или нет
//   created // дата создания (timestamp)
// }

// TicketFull {
//   id // идентификатор (уникальный в пределах системы)
//   name // краткое описание
//   description // полное описание
//   status // boolean - сделано или нет
//   created // дата создания (timestamp)
// }

const helpDeskWidget = new HelpDeskWidget(document.querySelector('#widget-container'), URL_SERVER);
helpDeskWidget.bindToDOM();
