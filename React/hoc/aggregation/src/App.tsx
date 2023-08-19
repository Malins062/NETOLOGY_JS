import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { MonthTable } from './components/MonthTable';
import { YearTable } from './components/YearTable';
import { SortTable } from './components/SortTable';

import './App.css'
import React from 'react';

interface ItemData {
  [key: string]: string | number;
  amount: number;
}

interface Data {
  list?: Array<ItemData>;
}

const initData = {
  list: []
}

function App({ url }: { url: string }) {
  const [data, setData] = useState(initData);

  // Функция запроса на сервер для получения исходных данных
  const fetchData = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Ошибка сервера!');
    }
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();

    return () => {}
  }, []);

  const groupBy = <P extends object>(Component: React.ComponentType<P>, param: string) => {
    return class withYear extends React.Component<P & Data> {
      render() {
        const allData: Data = initData,
          groupData: Data = initData,
          tmp: any = {};
        switch (param) {
          case 'year':
            allData.list = this.props.list?.map(obj => ({amount: obj.amount, year: dayjs(obj.date).year()}));
            break;
          case 'month':
            allData.list = this.props.list?.map(obj => ({amount: obj.amount, month: dayjs(obj.date).format('MMM')}));
            break;
          case 'date':
            allData.list = this.props.list?.map(obj => ({amount: obj.amount, date: obj.date}));
            break
        } 

        groupData.list = allData.list?.filter(function (el) {
          if (el[param]) {
            if (tmp.hasOwnProperty(el[param])) {
                tmp[el[param]].amount += el.amount;
                return false;
            }
            else {
                tmp[el[param]] = el;
                return true;
            }
          }
        });

        return <Component {...this.props} {...groupData}/>;
      }
    }
  }

  const TableWithYear = groupBy(YearTable, 'year');
  const TableWithMonth = groupBy(MonthTable, 'month');
  const TableWithSortData = groupBy(SortTable, 'date');

  return (
    <div id='app'>
        <TableWithMonth {...data} />
        <TableWithYear {...data} />
        <TableWithSortData {...data} />
    </div>
);
}

export default App
export type { ItemData }
