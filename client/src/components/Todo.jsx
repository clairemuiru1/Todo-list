import React, { useEffect, useState } from 'react'
import CreateTask from '../Modals/CreateTask'
import Cards from './Cards'

function Todo() {
  const [modal, setModal] = useState(false)
  const [taskList, setTaskList] = useState([])

  useEffect(()=>{
    let arr = localStorage.getItem("taskList")
    let obj = JSON.parse(arr)

    if(obj){
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const toggle = () => { setModal(modal); }

  const saveTask  = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem('taskList', JSON.stringify(tempList))
    setTaskList(tempList)
    setModal(false)
  }

  return (
    <>
      <div className='header text-center'>
        <h1>Today's List</h1>
        <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
      </div>
      <div className='task-container'>
        {taskList && taskList.map((obj, index) =>
        <Cards taskObj= {obj} index={index} />)}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  )
}

export default Todo
