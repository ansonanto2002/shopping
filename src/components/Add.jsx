import React from 'react'

const Add = () => {
    const Add = (props) => {
        var[input,setInput] =useState(props.data)
        console.log(props.data)
        const inputHandler =(e)=>{
         const{name,value}=e.target
         setInput({...input,[name]:value})
        }
        const readValues= ()=>{
          console.log("clicked")
          if(props.method==="post"){
          axios.post(" http://localhost:3007/shopping",input)
          .then(response=>{
            alert("Successfully Added")
          })
          .catch(error=>console.log(error))
        }else if(props.method==="put"){
          axios.put(" http://localhost:3007/shopping"+input.id,input)
          .then(response=>{
            alert("Updated Successfully")
            window.location.reload(false)
          })
          .catch(error=>console.log(error))
        }
        }
        return (
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TextField label="Name" name='name' variant="outlined" value={input.name} onChange={inputHandler}/><br></br><br/>
            <Typography>{input.name}</Typography>
            <TextField label="Grade" name='grade' variant="outlined" value={input.grade} onChange={inputHandler}/><br/><br></br>
            <Typography>{input.grade}</Typography>
            <Button variant='contained' onClick={readValues}>Submit</Button>
            </div>
        )
      }
}

export default Add
