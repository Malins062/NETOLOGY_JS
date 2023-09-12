import { useState } from 'react';

const FormData = () => {
  
  const [form, setForm] = useState(data);

  // const validate = () => (validateDate() && validateDistance());

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
            <label htmlFor='work-name'>{TITLES.column_1}</label>
            <input 
              type='text' 
              className='form-control'
              id='work-name' 
              name='work-name'
              value={form.name}
              onChange={handleChange}
              placeholder='Наименование работы'
              autoFocus
              required
            />
        </div>
        <div className='form-group col-md-5'>
            <label htmlFor='work-cost'>{TITLES.column_2}</label>
            <input 
              type='text' 
              className='form-control'
              id='work-cost' 
              name='work-cost'
              value={form.cost}
              onChange={handleChange}
              placeholder='Стоимость (руб.)'
              required
            />
        </div>
        <div className='form-group col-md-2 d-flex align-items-end'>
            <button 
              type='submit' 
              className='btn w-100 btn-primary'
              // disabled={!validate()}
            >
              OK
            </button>
        </div>
      </div>
    </form>
  )
}

export default FormData;
