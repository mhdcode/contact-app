import React, { useState } from 'react'
import ContactList from './ContactList'
import inputs from '../constant/input'
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
      {
        inputs.map((input,index)=>(<input className='border' type={input.type} name={input.name} placeholder={input.placeholder} onChange={changehandler} value={contact[input.name]} key={index}/>))
      }
            <button onClick={addhandler} className='bg-amber-200 rounded-sm' type='button'>Add contact</button>
      
        <div>
          {alaert&& <p>{alaert}</p>}
        </div>
        <ContactList contacts={contacts}/>
    </div>
  )
}

export default Contact;