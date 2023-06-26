import React from 'react'
import '../styles.css'
import user from '../assets/user.png'

const Contact = ({d,onDelete}) => {
    // console.log(data);
    
  return (
    <div >
       <div className='ui celled list' style={{width:400}}>
          <div className="item" style={{display:'flex',justifyContent:'space-between'}}>
            <div>
               <img src={user} alt='user' style={{width:50,height:50,marginTop:5}} />
            </div>
            <div className='content' style={{padding:10}}>
               <div className='header' style={{fontSize:18}}>
                 {d.name}
               </div>
               <div style={{fontSize:15,marginTop:5,marginBottom:5}}>
                {d.email}
               </div>
               <span style={{color:'#b8b4b4'}}>{d.CreatedAt}</span>
            </div>
            <div style={{display:'flex',width:200,flexDirection:'row-reverse'}}>
              <i className='trash alternate outline icon' style={{fontSize:18,marginTop:25,color:'red'}} onClick={()=>onDelete(d.id)}></i>
               <i className='phone icon' style={{fontSize:18,marginTop:25,marginRight:15,color:'green'}}></i>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Contact