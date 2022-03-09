import React, { useMemo } from 'react'
import { useTable, useFilters, useRowSelect } from 'react-table'
import MOCK_DATA from './orders.json'
import { COLUMNS } from './columns'
import { Checkbox } from './CheckBox';
import './table.css';



export const OrderTable = () => {
    
    const columns = useMemo(()=> COLUMNS, [])
    const data= useMemo(()=> MOCK_DATA, [])
    

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
    } = useTable({
        columns,
        data
    }, useFilters,useRowSelect, 
    (hooks) => {
        hooks.visibleColumns.push((columns)=>{
            return [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps}) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ({ row }) => (
                        <Checkbox {...row.getToggleRowSelectedProps()} />
                    )
                                },
                                ...columns
            ]
        })

    }
    )

    
    
    return (
        <>
       <h1>Orders</h1>
        {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column) =>
          column.Filter ? (
            <div key={column.id}>
                <span className='lable'>
              <label for={column.id} >Filter by {column.render("Header")}: </label>
              {column.render("Filter")}
              </span>
            </div>
          ) : null
        )
      )}

        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=> (
                     <tr {...headerGroup.getHeaderGroupProps()}>
                         {headerGroup.headers.map((column) =>(
                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                         )
                         )}   
                     </tr>
                )
                )}
               
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row => {
                    prepareRow(row)
                    return (
                        
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                    
                        </tr>
                    )
                }))}
                
            </tbody>
            
        </table>
        <pre>
            
            <code>
                {JSON.stringify(
                    {
                        selectedFlatRows: selectedFlatRows.map((row)=> row.original),
                    },
                    null,
                    2
                )}
            </code>
        </pre>
        </>
    )
}