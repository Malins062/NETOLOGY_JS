import { ItemData } from '../App';

export const YearTable = ({ list }: { list: Array<ItemData> }) => {
    console.log('YearTable', list);
    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                {list.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
