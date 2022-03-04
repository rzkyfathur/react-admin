import React, { useState } from 'react'
import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../data';
import { Link } from 'react-router-dom';


export default function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter( (item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className="user-list">
                    <img className="user-list-image" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },{
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="user-list-edit">Edit</button>
                        </Link>
                        <DeleteOutline className="user-list-delete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
        ];

    return (
        <div className="user-list">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    )
}
