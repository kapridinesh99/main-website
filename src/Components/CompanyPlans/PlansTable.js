import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import './companyPlans.css'

function PlansTable() {
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('col0', {
            id: 'col0',
            header: '',
            cell: (props) => <b>{props.getValue()}</b>,
        }),
        columnHelper.accessor('_20MonthsA', {
            id: '_20MonthsA',
            cell: info => info.getValue(),
            header: () => <span>20 Months</span>
        }),
        columnHelper.accessor('_20MonthsB', {
            id: '_20MonthsB',
            cell: info => info.getValue(),
            header: () => <span>20 Months</span>
        }),
        columnHelper.accessor('_25MonthsA', {
            id: '_25MonthsA',
            cell: info => info.getValue(),
            header: () => <span>25 Months</span>
        }),
        columnHelper.accessor('_25MonthsB', {
            id: '_25MonthsB',
            cell: info => info.getValue(),
            header: () => <span>25 Months</span>
        }),
        columnHelper.accessor('_30Months', {
            id: '_30Months',
            cell: info => info.getValue(),
            header: () => <span>30 Months</span>
        }),
    ];

    const plansData = [
        {
            col0: 'Joining Fees',
            _20MonthsA: '₹ 4900',
            _20MonthsB: '₹ 15,900',
            _25MonthsA: '₹ 30,000',
            _25MonthsB: '₹ 55,000',
            _30Months: '₹ 1,15,000',
        },
        {
            col0: 'Cashback',
            _20MonthsA: '₹ 490',
            _20MonthsB: '₹ 1,590',
            _25MonthsA: '₹ 2,700',
            _25MonthsB: '₹ 4,950',
            _30Months: '₹ 9,580',
        },
        {
            col0: 'Less TDS Deduction 5%',
            _20MonthsA: '₹ 24.50',
            _20MonthsB: '₹ 79.50',
            _25MonthsA: '₹ 135',
            _25MonthsB: '₹ 247',
            _30Months: '₹ 479',
        },
        {
            col0: 'Less Admin Charges 5%',
            _20MonthsA: '₹ 24.50',
            _20MonthsB: '₹ 79.50',
            _25MonthsA: '₹ 135',
            _25MonthsB: '₹ 247',
            _30Months: '₹ 479',
        },
        {
            col0: 'Per Month Income',
            _20MonthsA: '₹ 441',
            _20MonthsB: '₹ 1,431',
            _25MonthsA: '₹ 2,430',
            _25MonthsB: '₹ 4,455',
            _30Months: '₹ 8,622',
        },
        {
            col0: `TOTAL INCOME (Per month income *Months + TDS Refunded)`,
            _20MonthsA: '₹ 9,310',
            _20MonthsB: '₹ 30,210',
            _25MonthsA: '₹ 64,125',
            _25MonthsB: '₹ 1,17,562',
            _30Months: '₹ 2,73,030',
        },
        // {
        //     col0: { main: `TOTAL INCOME`, desc: '(Per month income *Months + TDS Refunded)' },
        //     _20MonthsA: { amount: '₹ 9,310', desc: '(₹ 8820 + ₹ 490)' },
        //     _20MonthsB: { amount: '₹ 30,210', desc: '(₹ 28,620 + ₹ 1,590)'},
        //     _25MonthsA: { amount: '₹ 64,125', desc: '(₹ 60,750 + ₹ 3,375)' },
        //     _25MonthsB: { amount: '₹ 1,17,562', desc: '(₹ 1,11,375 + ₹ 6187)' },
        //     _30Months: { amount: '₹ 2,73,030', desc: '(₹ 2,58,660 + ₹ 14,370)'},
        // },
    ];

    const table = useReactTable({
        columns,
        data: plansData,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <article className='plansTable'>
            <div className='table-wrapper'>
                <table>
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default PlansTable;