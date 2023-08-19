import { ItemData } from '../App';

export const SortTable = ({ list }: { list: Array<ItemData> }) => {
    console.log('SortTable', list);
    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                {list.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
