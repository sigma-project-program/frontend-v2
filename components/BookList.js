import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'


function BookList({errorData}) {
    const data = errorData.errors
    const columns = React.useMemo(
    () => [
        {
        Header: 'BOOK ID',
        accessor: 'BookId',
        },
        {
        Header: 'BOOK NAME',
        accessor: 'bookname',
        },
        {
        Header: 'AUTHOR',
        accessor: 'author',
        // isNumeric: true,
        },
        {
        Header: 'Description',
        accessor: 'desc',
        // isNumeric: true,
        },
        {
        Header: 'Decision',
        accessor: 'decision',
        // isNumeric: true,
        },
    ],
    [],
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

    return (
    <Table {...getTableProps() } mt={5} px={5}>
        <Thead>
        {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
                <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                {column.render('Header')}
                <chakra.span pl='4'>
                    {column.isSorted ? (
                    column.isSortedDesc ? (
                        <TriangleDownIcon aria-label='sorted descending' />
                    ) : (
                        <TriangleUpIcon aria-label='sorted ascending' />
                    )
                    ) : null}
                </chakra.span>
                </Th>
            ))}
            </Tr>
        ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
            prepareRow(row)
            return (
            <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                    {cell.render('Cell')}
                </Td>
                ))}
            </Tr>
            )
        })}
        </Tbody>
    </Table>
    )
}


export default BookList 