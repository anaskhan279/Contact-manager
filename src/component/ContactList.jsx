import React from 'react'
import Contact from './Contact';

const ContactList = ({data,handleDelete}) => {
    // console.log(desc);
    const DeleteHandler=(id)=>{
        handleDelete(id)
    }
  return (
    <div style={{marginTop:20}}>
        <h2>Contact List</h2>
        {data.map((d)=>(
            <Contact d={d} key={d.id} onDelete={DeleteHandler}/>
        ))}
    </div>
  )
}

export default ContactList