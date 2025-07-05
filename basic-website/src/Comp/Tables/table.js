import React from 'react'
import data from "../../data/data"
import Table from "react-bootstrap/Table"
import "../Tables/table.css"

const Table1 = () => {
    return (
        <div>
            <h1>Products Table</h1>
            <Table striped bordered hover className='table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x => {
                       return( <tr>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price}</td>
                            <td><img src={x.images}  width='150'/></td>
                        </tr>)
                    })}


                </tbody>
            </Table>
        </div>
    )
}

export default Table1
