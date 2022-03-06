import React, { useState } from 'react'
import "./ProductList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../../data';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter( (item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 250, renderCell: (params) => {
            return (
                <div className="product-list">
                    <img className="product-list-image" src={params.row.avatar} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },{
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="product-list-edit">Edit</button>
                        </Link>
                        <DeleteOutline className="product-list-delete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
        ];

    return (
        <div className="product-list">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    )
}
