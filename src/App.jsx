import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import AddContact from './component/AddContact'
import ContactList from './component/ContactList'


const App = () => {
  const LOCAL_STORAGE_KEY = "data";
  const [data,setData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  )
  
  const handleSubmit=(input)=>{
     const current = [...data,input]
     setData(current)
     alert('contact added successfully')
  }
  
  // useEffect(()=>{
  //   const retrieved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   console.log(retrieved);
  //   setData(retrieved);
  // },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data))
  },[data])

  const handleDelete=(id)=>{
     const filtered = data.filter((d)=>d.id !== id)
     setData(filtered);
     alert('contact  deleted successfully')
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact handleSubmit={handleSubmit}/>
      <ContactList data={data} handleDelete={handleDelete}/>
    </div>
  )
}

export default App