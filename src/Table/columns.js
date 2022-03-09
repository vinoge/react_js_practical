import { Filters } from "./Filters";

export const COLUMNS = [
   
    {
        Header: 'ORDER ID',
        accessor: 'id'
    },

    {
        Header: 'CUSTOMER',
        accessor : 'customer.name'
        
    },
   
    {
        Header: 'ADDED BY',
        accessor: 'addedby'

    },
    {
        Header: 'REFERENCE',
        accessor: 'reference'
    },
    {
        Header: 'BRANCH',
        accessor: 'branch',
        Filter: Filters,
        filter: 'includes',
    },
    {
        Header: 'SERVICE',
        accessor: 'service',
        Filter: Filters,
        filter: 'includes',
    },
    {
        Header: 'STATUS',
        accessor: 'status'
    }
]