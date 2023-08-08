import { TITLES, TDataList } from '../JurnalLog';

import './TableList.css';

const TableList = ({ data, onEdit, onRemove }: { data: Array<TDataList>, onEdit: any, onRemove: any }) => {
  const sortedData = data.sort( (a, b) => b.date.localeCompare(a.date) );

  return (
    <>
      <table 
        id='dtJurnal' 
        className='table table-striped table-bordered table-sm p-2 caption-top' 
        cellSpacing='0' 
        width='100%'>
        <caption>{TITLES.caption}</caption>
        <thead className='table-primary text-center'>
          <tr>
            <th className='th-sm'>{TITLES.column_1}</th>
            <th className='th-sm'>{TITLES.column_2}</th>
            <th className='th-sm'>{TITLES.column_3}</th>
          </tr>
        </thead>
        <tbody>
          {
            sortedData.map((item) => 
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{Number(item.distance).toLocaleString(undefined, { minimumFractionDigits: 1 })}</td>
                <td className='text-center text-primary'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='button bi bi-pencil mx-2' viewBox='0 0 16 16'
                    data-id={item.id}
                    data-date={item.date}
                    data-distance={item.distance}
                    onClick={onEdit}
                  >
                    <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z'/>
                  </svg>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='button bi bi-x-square' viewBox='0 0 16 16'
                    data-id={item.id}
                    onClick={onRemove}
                  >
                    <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'/>
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
                  </svg>
                </td>
              </tr>  
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default TableList;
