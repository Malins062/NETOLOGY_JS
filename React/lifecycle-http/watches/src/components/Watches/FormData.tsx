import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TWatches } from './Watches';

const FormData = ({ data, state, onSubmit }: { data: Array<TWatches>, state: TWatches, onSubmit: any}) => {
  
  dayjs.extend(customParseFormat);
  const [inputData, setForm] = useState(state);
  
  // Функция валидации наименования часов в строковом формате
  const validateTitle = () => /^[а-яёА-ЯЁ\w]+(?:[\s.-][а-яёА-ЯЁ\w]+)*$/.test(inputData.title) && 
    !(data.find(item => item.title === inputData.title)?.title);

  // Функция валидации дистанции в строковом формате
  const validateOffset = () => /^([0-9]{1,10})?$/.test(inputData.offset.toString());
 
  const validate = () => (validateTitle() && validateOffset());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name,  value } = event.target;
    setForm({ ...inputData, [name]: value });
  }  

  useEffect(() => {
    setForm(state);
  }, [data]);
  
  return (
    <form 
      className='pb-2 mb-2'
      onSubmit={onSubmit}
    >
      <div className='row'>
        <div className='form-group col-md-5'>
            <label htmlFor='title'>Название часов</label>
            <input 
              className={validateTitle() ? 'form-control is-valid': 'form-control is-invalid'}
              type='text' 
              id='title' 
              name='title'
              maxLength={20}
              minLength={3}
              value={inputData.title}
              onChange={handleChange}
              placeholder='Название'
              autoFocus
              required
            />
        </div>
        <div className='form-group col-md-5'>
            <label htmlFor='offset'>Временная зона, UTC (мин.)</label>
            <input 
              className={validateOffset() ? 'form-control is-valid': 'form-control is-invalid'}
              type='number' 
              id='offset' 
              name='offset'
              value={inputData.offset}
              onChange={handleChange}
              placeholder='UTC'
              required
            />
        </div>
        <div className='form-group col-md-2 d-flex align-items-end'>
            <button 
              type='submit' 
              className='btn w-100 btn-primary'
              disabled={!validate()}
              title='Добавить часы'
            >
              Добавить
            </button>
        </div>
      </div>
    </form>
  )
}

export default FormData;
