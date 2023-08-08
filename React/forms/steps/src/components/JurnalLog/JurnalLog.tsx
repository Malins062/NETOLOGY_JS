import { useState } from 'react';
import FormData from './FormData/FormData';
import TableList from './TableList/TableList';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './JurnalLog.css';

const TITLES = {
    caption: 'Список тренировок',
    column_1: 'Дата (ДД.ММ.ГГ)',
    column_2: 'Пройдено (км)',
    column_3: 'Действия',
  }


// Тип списка данных
export interface TDataList {
  id: string;
  date: string;
  distance: string;
}

const initStateData = {
  id: '',
  date: dayjs().format('DD.MM.YYYY'),
  distance: '3.0',  
}

// Журнал тренировок
const JurnalLog = ({ dataList }: { dataList: Array<TDataList> }) => {
  const [data, setData] = useState(dataList);
  const [initData, setInitData] = useState(initStateData);

  // Обработчик на изменение тренировки
  const handleEdit = (event: React.ChangeEvent<HTMLOrSVGElement>) => {
    console.log(initData);
  }

  // Обработчик на удалении тренировки
  const handleRemove = (event: React.ChangeEvent<HTMLOrSVGElement>) => {
    const id = event.currentTarget.dataset.id;
    if (id) {
      setData(data => data.filter((item) => item.id !== id));
    }
  }

  // Обработчик на добавление/обновление тренировки
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const elements: any = Array.from(event.currentTarget);
    const state: any = elements.reduce((acc: any, el: any) => {
      if (el.name) {
        acc[el.name] = el.value;
      }
      return acc;
    }, { id: nanoid() });

    const id: string | undefined = data.find(item => item.date === state.date)?.id;
    id 
      ? setData(data => data.map((item) => ({
        ...item,
        distance: item.id === id ? (Number(item.distance) + Number(state.distance)).toString() : item.distance
      })))
      : setData([...data, state]);

    setInitData({ ...initData, ...initStateData});
  }

  return (
    <div className='container p-2'>
      <FormData 
        data={initData}
        onSubmit={handleSubmit}
      />
      <TableList 
        onEdit={handleEdit}
        onRemove={handleRemove}
        data={data}
      />
    </div>
  )
}

export default JurnalLog;
export { TITLES };
