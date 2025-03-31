import React, { useState } from 'react'
import ContactList from './ContactList'

function Contact() {
  const [contacts,setcontacts] = useState([])
  const [alaert , setalert]=useState("")
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
function addhandler(){
  if (
    !contact.email || !contact.lastname|| !contact.email||!contact.number

  
  ) {
    setalert("please enter valid data!")
    return;
  }
  setalert("")
setcontacts((contacts)=>({...contacts,contact}))
setcontact(
{  name:"",
  lastname:"",
  email:"",
  number:"",
}
)



}
  return (
    <div className='flex justify-center'>
        <div className=' bg-amber-500 w-[500px]'>
            <input className='border' type="text" placeholder='Name'  onChange={changehandler} name='name' value={contact.name} />
            <input className='border' type="text" placeholder='Last Name'onChange={changehandler} name='lastname'  value={contact.lastname} />
            <input className='border' type="email" placeholder='Email'  onChange={changehandler} name='email' value={contact.email}/>
            <input className='border' type="number" placeholder='Phone'  onChange={changehandler} name='number' value={contact.number}/>
            <button onClick={addhandler} className='bg-amber-200 rounded-sm' type='button'>Add contact</button>
        </div>
        <div>
          {alaert&& <p>{alaert}</p>}
        </div>
        <ContactList contacts={contacts}/>
    </div>
  )
}

export default Contact;