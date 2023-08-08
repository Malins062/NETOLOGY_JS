import { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TDataList, TITLES } from '../JurnalLog';

const FormData = ({ data, onSubmit }: { data: TDataList, onSubmit: any}) => {
  
  dayjs.extend(customParseFormat);
  const [form, setForm] = useState(data);

  // Функция валидации даты в строковом формате
  const validateDate = () => dayjs(form.date, 'DD.MM.YYYY', true).isValid();

  // Функция валидации дистанции в строковом формате
  const validateDistance = () => /^([0-9]{1,3}(\.\d)?)$/.test(form.distance);
 
  const validate = () => (validateDate() && validateDistance());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name,  value } = event.target;

    setForm({ ...form, [name]: value });
  }  
  
  return (
    <form 
      className='pb-2'
      onSubmit={onSubmit}
    >
      <div className='row'>
        <div className='form-group col-md-5'>
            <label htmlFor='date'>{TITLES.column_1}</label>
            <input 
              className={validateDate() ? 'form-control is-valid': 'form-control is-invalid'}
              type='text' 
              id='date' 
              name='date'
              maxLength={10}
              minLength={10}
              value={form.date}
              onChange={handleChange}
              placeholder='Дата'
              autoFocus
              required
            />
        </div>
        <div className='form-group col-md-5'>
            <label htmlFor='distance'>{TITLES.column_2}</label>
            <input 
              className={validateDistance() ? 'form-control is-valid': 'form-control is-invalid'}
              type='number' 
              id='distance' 
              name='distance'
              maxLength={5}
              value={form.distance}
              onChange={handleChange}
              placeholder='Расстояние'
              required
            />
        </div>
        <div className='form-group col-md-2 d-flex align-items-end'>
            <button 
              type='submit' 
              className='btn w-100 btn-primary'
              disabled={!validate()}
            >
              OK
            </button>
        </div>
      </div>
    </form>
  )
}

export default FormData;
