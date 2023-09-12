import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../redux/store';
import { ActionTypes } from '../redux/actions';

const FormData = () => {
  const dispatch = useDispatch();

  // Получение списка ремонтных работ
  const form = useSelector((state: IRootState) => state.form);

  // Получение списка ремонтных работ для использования валидации ввода информации
  const data = useSelector((state: IRootState) => state.list.data);

  // Валидация ввода данных
  const validateCost = () => ((form.cost > 0));
  const validateLengthName = () => ((form.name.trim().length > 0));
  const validateExistsName = () => (
    !(data.filter(item => item.name.toLowerCase() === form.name.trim().toLowerCase()).length > 0)
  );
  const validateNewName =() => (validateLengthName() && validateExistsName());
  const validateEditName = () => ((form.name !== form.oldName) && validateExistsName());
  const validateOldValues = () => (
    validateEditName() ||
    (form.name === form.oldName && form.cost !== form.oldCost)
  );
  const validateNewRecord = () => (validateNewName() && validateCost());
  const validateExistsRecord = () => (validateLengthName() && validateCost() && validateOldValues());

  // Обработчик изменения значений поля ввода наименования работы
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.SET_FORM_NAME_RECORD,
      payload: e.target.value,
    });
  }

  // Обработчик изменения значений поля ввода стоимости работы
  const handleChangeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.SET_FORM_COST_RECORD,
      payload: Number(e.target.value),
    });
  }

  // Обработчик для отмены изменений записи
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({type: ActionTypes.SET_FORM_NEW_RECORD});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: form.isNewRecord 
        ? ActionTypes.ADD_DATA_RECORD
        : ActionTypes.SET_DATA_RECORD,
      payload: {
        id: form.id,
        name: form.name,
        cost: form.cost
      },
    });    
    dispatch({type: ActionTypes.SET_FORM_NEW_RECORD});
  }
  
  return (
    <form 
      className='pb-2'
      onSubmit={handleSubmit}
    >
      <div className='row mt-2'>
        <div className='form-group col-md-6'>
            <input 
              type='text' 
              className={
                (form.isNewRecord && validateNewName()) ||
                (!form.isNewRecord && validateOldValues() && validateLengthName())
                ? 'form-control is-valid': 'form-control is-invalid'}
              id='work-name' 
              name='workName'
              value={form.name}
              onChange={handleChangeName}
              placeholder='Наименование работы'
              autoFocus
            />
        </div>
        <div className='form-group col-md-2'>
            <input 
              type='number' 
              className={validateCost() ? 'form-control is-valid': 'form-control is-invalid'}

              id='work-cost' 
              name='workCost'
              value={form.cost}
              onChange={handleChangeCost}
              placeholder='Стоимость (руб.)'
            />
        </div>
        <div className='form-group col-md-4 d-flex align-items-end'>
          {form.isNewRecord 
            ?
              <button type='submit' className='btn w-100 btn-success' disabled={!validateNewRecord()}>Добавить</button>
            :
            <>
              <button type='submit' className='btn w-100 btn-warning mx-2' 
                disabled={!validateExistsRecord()}
                >Изменить</button>
              <button type='button' className='btn w-100 btn-primary' onClick={handleCancel}>Отмена</button>
            </>
          }
        </div>
      </div>
    </form>
  )
}

export default FormData;
