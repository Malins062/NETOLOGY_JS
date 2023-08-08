import { useState } from 'react';
import { nanoid } from 'nanoid';

import FormData from './FormData';
import ListWatches from './ListWatches';

import 'bootstrap/dist/css/bootstrap.min.css';

export interface TWatches {
    id: string;
    title: string;
    offset: number;
}

export const initStateWatch = {
    id: '',
    title: '', 
    offset: 0,  
  }

export const Watches = ({ data }: { data: Array<TWatches> }) => {
    const [watches, setWatches] = useState(data);

    // Обработчик на удаление часов
    const handleRemove = (event: React.ChangeEvent<HTMLOrSVGElement>) => {
        const id = event.currentTarget.dataset.id;
        // console.log(event.currentTarget, id);
        if (id) {
            setWatches(data => data.filter((item) => item.id !== id));
        }
    }

    // Обработчик на добавление часов
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const elements = Array.from(event.currentTarget) as HTMLInputElement[];
      const state = elements.reduce((acc: any, el: any) => {
        if (el.name) {
          acc[el.name] = (el.name === 'offset') ? parseInt(el.value) : el.value;
        }
        return acc;
      }, {id: nanoid()});

      setWatches([...watches, state]);
    }


  return (
    <div className='container-fluid p-2'>
      <FormData 
        data={watches}
        state={initStateWatch}
        onSubmit={handleSubmit}
      />
      <ListWatches 
        data={watches}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default Watches;
