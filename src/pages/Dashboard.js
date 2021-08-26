import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';

const rows = [
    { id: 111, title: 'Doc1', status: 'New', date: new Date(), assignee: 'Jon Snow' },
    { id: 222, title: 'Doc2', status: 'New', date: new Date(), assignee: 'Cersei Lannister' },
    { id: 333, title: 'Doc3', status: 'New', date: new Date(), assignee: 'Jaime Lannister' },
    { id: 444, title: 'Doc4', status: 'New', date: new Date(), assignee: 'Arya Stark' },
    { id: 555, title: 'Doc4', status: 'New', date: new Date(), assignee: 'Daenerys Targaryen' },
    { id: 666, title: 'Doc4', status: 'New', date: new Date(), assignee: 'Melisandre' },
    { id: 777, title: 'Doc4', status: 'New', date: new Date(), assignee: 'Jon Snow' },
];

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
        field: 'status',
        headerName: 'Status',
        width: 250,
        // editable: true,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 250,
        renderCell: (params) => <a href={`edit/${params.getValue(params.id, 'id')}`}>{params.getValue(params.id, 'title')}</a>
    },
    {
        field: 'date',
        headerName: 'Date created',
        width: 250,
        type: 'date',
    },
    {
        field: 'assignee',
        headerName: 'Assignee',
        width: 250,
    },
];

const Dashboard = () => {
    return (
        <div>
            <Box pt={3} pb={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h2" component="h2" gutterBottom>
                    Dashboard
                </Typography>
                <Button variant="contained" color="primary" href="/add">Upload item</Button>
            </Box>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
}

export default Dashboard;
