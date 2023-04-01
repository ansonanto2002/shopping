import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React from 'react'
import Add from './Add'

const VIew = () => {
        var[update,setUpdate] =useState(false)
        var[selected,setSelected] =useState([])
        var[products,setproducts] =useState([])
        useEffect(()=>{
            axios.get(" http://localhost:3007/shopping")
            .then(response=>{
            setproducts(products=response.data)
            console.log(products)
        })
            .catch(error=>console.log(error))
        },[])
        const deleteValue=(id)=>{
            console.log(id)
            axios.delete(" http://localhost:3007/shopping"+id)
            .then(response=>{
                alert("Successfully Deleted")
                window.location.reload(false)
            })
            .catch(error=>console.log(error))
        }
        const updateValue=(value)=>{
            setproducts(value)
            setUpdate(true)
        }
        var finalJSX =<TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>brand</TableCell>
                    <TableCell>quantity</TableCell>
                    <TableCell>price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.brand}</TableCell>
                        <TableCell>{value.quantity}</TableCell>
                        <TableCell>{value.price}</TableCell>
                        <TableCell><Button onClick={()=>deleteValue(value.id)}>Delete</Button></TableCell>
                        <TableCell><Button onClick={()=>updateValue(value)}>Update</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
    if(update)
    finalJSX=<Add data={selected} method ="put"/>
    
      return (
        finalJSX
      )
  
}

export default VIew
