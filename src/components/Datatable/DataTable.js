import React from 'react'
import {columns,rows} from '../../data'
const DataTable = () => {
  return (
    <div>
        <table borders={1} rules='all' cellPadding={5} cellSpacing={5}>
            <thead>
                <tr>
                    {columns.map((item,index) =>
                    (
                        <th>{item.charAt(0).toUpperCase() + item.slice(1)}</th>
                    ))}
                </tr>
            </thead>
      
            <tbody>
              {rows.map((item,index) => {
                return (
                <tr>
                    {columns.map((col) =>
                    (
                        <td>{item[col]}</td>
                    ))}
                </tr>
                )
            })
            
            }
            </tbody>
        </table>
    </div>
  )
}

export default DataTable