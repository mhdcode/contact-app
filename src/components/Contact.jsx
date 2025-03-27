import React, { useState } from 'react'

function Contact() {
const [contact,setcontact] = useState({
  name:"",
  lastname:"",
  email:"",
  number:"",

})
function changehandler(event){
const name = event.target.name
const value = event.target.value

setcontact((contact)=>({...contact ,[name]:value }))

}
function loginhandler(){
console.log(contact);

}
  return (
    <div className='flex justify-center'>
        <div className=' bg-amber-500 w-[500px]'>
            <input className='border' type="text" placeholder='Name'  onChange={changehandler} name='name' value={contact.name} />
            <input className='border' type="text" placeholder='Last Name'onChange={changehandler} name='lastname'  value={contact.lastname} />
            <input className='border' type="email" placeholder='Email'  onChange={changehandler} name='email' value={contact.email}/>
            <input className='border' type="number" placeholder='Phone'  onChange={changehandler} name='number' value={contact.pho}/>
            <button onClick={loginhandler} className='bg-amber-200 rounded-sm' type='button'>click</button>
        </div>
    </div>
  )
}

export default Contact;