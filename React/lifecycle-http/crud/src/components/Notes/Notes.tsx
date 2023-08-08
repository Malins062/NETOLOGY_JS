import { useEffect, useState } from 'react';

import FormAddNote from './footer/FormAddNote';
import ListNotes from './body/ListNotes';
import { RefreshNotes } from './header/RefreshNotes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Notes.css';

export interface TNote {
    id: string;
    content: string;
};

const initListNotes: Array<TNote> = [];

const stateNewNote = () => {
  return {
    id: '0',
    content: '',
  }
}

export const Notes = ({ url }: { url: string }) => {
    const [notes, setNotes] = useState(initListNotes);

    // Обработчик на удаление заметок
    const handleRemove = (event: React.MouseEvent<HTMLOrSVGElement>) => {
        const id = event.currentTarget.dataset.id;
        if (id) {
          fetchRemoveNote(id);
        }
    }

    // Обработчик на добавление заметок
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const elements = Array.from(event.currentTarget) as HTMLTextAreaElement[];
      elements.forEach((el: any) => {
        if ((el.name) && (el.name === 'content')) {
          fetchNewNote(el.value);
        }
      });

    }

    // Функция запроса на сервер для получения всех заметок
    const fetchNotes = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Ошибка сервера!');
      }
      const data = await response.json();
      setNotes(data);
    }

    // Функция запроса на сервер на добавление новой заметки
    const fetchNewNote = async (text: string) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: '0', content: text })
      };

      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Ошибка сервера!');
      }
      fetchNotes();
    }

    // Функция запроса на сервер на добавление новой заметки
    const fetchRemoveNote = async (id: string) => {
      const requestOptions = {
        method: 'DELETE',
      };

      const response = await fetch(`${url}/${id}`, requestOptions);
      if (!response.ok) {
        throw new Error('Ошибка сервера!');
      }
      fetchNotes();
    }

    useEffect(() => {
      fetchNotes();

      return () => {}
    }, []);
    
  return (
    <div className='container-fluid p-2'>
      <RefreshNotes 
        onRefresh={fetchNotes}
      />
      <ListNotes 
        data={notes}
        onRemove={handleRemove}
      />
      <FormAddNote
        data={notes}
        state={stateNewNote()}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Notes;
