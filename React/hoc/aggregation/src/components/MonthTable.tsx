import { ItemData } from '../App';

export const MonthTable = ({ list }: { list: Array<ItemData> }) => {
    console.log('MonthTable', list);
    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                {list.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
