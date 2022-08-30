import React, { useState } from 'react'

export default function NewTodo() {
    const formStyle = {
        margin: "auto",
        display:"flex",
        width: "600px",
        padding: "20px",
        backgroundColor: "#dfe6e9",
        flexDirection: "column"
    }
    const inputStyle = {
        padding: "10px",
        marginBottom: "10px",
        marginTop: "10px"
    }
    const buttonStyle = {
        padding:"10px", 
        background: "#0984e3", 
        outline: "0px", 
        border:"0px", 
        borderRadius: "10px", 
        color:"white", 
        fontWeight: "bold", 
        fontSize:"16px"
    }

    const [data,setData] = useState({task: '',time: '',complete:''});
    let {task,time,complete} = data;
    const setTasks = (e) => {
        setData({task:e.target.value,time,complete});
        console.log(data);
    }
    const setTime = (e) => {
      setData({task,time:e.target.value,complete});
    }
    const setComplete = (e) => {
      setData({task,time,complete:e.target.value});
    }
    console.log(data);
  return (
    <div>
      <form style={formStyle}>
        <label for="addTask">Add Task</label>
        <input onChange={setTasks} style={inputStyle} type="text" id='addTask' name="addTask" value={task} />
        <label for="addTime">Add Time for Task</label>
        <input onChange={setTime} style={inputStyle} type="text" name="addTime" id='addTime' value={time} />
        <label for="completion">Complete: </label>
        <input onChange={setComplete} style={inputStyle} type="checkbox" name="completion" id='completion' value={complete} />
        <button style={buttonStyle}>Submit</button>
      </form>
    </div>
  )
}
