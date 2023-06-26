import React, { useState } from 'react'

const AddContact=({handleSubmit})=>{
      const [name,setName] = useState('')
      const [email,setEmail] = useState('')

      const handleData=(e)=>{
        e.preventDefault()
        const val = {
            id:Math.random(),
            name:name,
            email:email,
            CreatedAt:new Date().toDateString()
        }
        // console.log(val);
        handleSubmit(val)
        setEmail('')
        setName('')
      }
        return(
            <div className='addcontact'>
                <h2>Add contact</h2>
                <form className='ui form' onSubmit={handleData}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                          type='text'
                          name='name'
                          placeholder='enter your name'
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                          />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                          type='text' 
                          name='email' 
                          placeholder='enter your email'
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
}

export default AddContact
