// project imports
import MainCard from 'ui-component/cards/MainCard';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, sortable: false },
    { field: 'firstName', headerName: 'First name', width: 130, sortable: false },
    { field: 'lastName', headerName: 'Last name', width: 130, sortable: false },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        sortable: false,
        width: 90
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];
// ==============================|| SAMPLE PAGE ||============================== //

const StudentPage = () => (
    <MainCard title="Danh sách học sinh">
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection />
        </div>
    </MainCard>
);

export default StudentPage;
