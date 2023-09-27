import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { convertTimestamp } from '../../../Functions/util';

function TransactionTable({ transactionRecords }) {
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('src', {
            id: 'src',
            cell: info => <span className='px-2'>{info.getValue()}</span>,
            header: () => <span className='px-2 underline'>Source</span>,
        }),
        // columnHelper.accessor('user_id', {
        //     id: 'user_id',
        //     cell: info => <span className='px-2'>{info.getValue()}</span>,
        //     header: () => <span className='px-2 underline'>User ID</span>,
        // }),
        columnHelper.accessor('timestamp', {
            id: 'timestamp',
            cell: info => <span className='px-2'>{convertTimestamp(info.getValue())}</span>,
            header: () => <span className='px-2 underline'>Date</span>,
        }),
        columnHelper.accessor('txn_id', {
            id: 'txn_id',
            cell: info => <span className='px-2'>{info.getValue()}</span>,
            header: () => <span className='px-2 underline'>Transaction Id</span>,
        }),
        columnHelper.accessor('amount', {
            id: 'amount',
            cell: info => <span className='px-2'>{'₹ ' + info.getValue()}</span>,
            header: () => <span className='px-2 underline'>Amount</span>,
        }),
        columnHelper.accessor('txn_type', {
            id: 'txn_type',
            cell: info => <span className='px-2'>{info.getValue()}</span>,
            header: () => <span className='px-2 underline'>Type</span>,
        }),
    ];

    const table = useReactTable({
        columns,
        data: transactionRecords,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <article className='transactionTable'>
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
                    {transactionRecords.length > 0 ?
                        <tbody>
                            {
                                table.getRowModel().rows.map(row => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            }
                        </tbody>
                        : <div className='mt-5 py-10 w-full'>No Transaction records found !</div>
                    }
                </table>
            </div>
        </article>
    );
};

export default TransactionTable