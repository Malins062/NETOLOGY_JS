import TimeLineWidget from '../widgets/timeline/timeline';

const timeLineWidget = new TimeLineWidget(
  document.querySelector('#widget-container'),
  'Лента постов',
);
timeLineWidget.run();
