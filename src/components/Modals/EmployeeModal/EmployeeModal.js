import React, { useEffect, useState } from 'react'
import './EmployeeModal.css'

export default function EmployeeModal(props){

    let [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        designation: "",
        experience: "",
        photoLink: ""
    })

    useEffect(()=>{
        console.log("Props are===", props)
        if(props && props.data){
            setFormData(props.data)
        }
    },[props])

    let handleInputChange = (type,value) => {
        switch(type){
            case "firstName":
                setFormData({...formData,firstName: value})
                break;
            case "lastName":
                setFormData({...formData,lastName: value})
                break;
            case "dob":
                setFormData({...formData,dob: value})
                break;
            case "designation":
                setFormData({...formData,designation: value})
                break;
            case "experience":
                setFormData({...formData,experience: value})
                break;
            case "photoLink":
                setFormData({...formData,photoLink: value})
                break;
            default:
                setFormData({...formData})
        }
    }

    let validateData = () => {
        // check input field is not empty
        return true;
    }

    let handleSubmit = () => {
        if(validateData()){
            let payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                DOB: formData.dob,
                designation: formData.designation,
                profilePhoto: formData.photoLink,
                experience: formData.experience
            }

            props.handleAddEmployee(payload)
            props.closeModal()
        }
    }

    console.log("Formdata is===", formData)
    
    return(
        <div className='modal-container'>
            <div className='top-container'>
                <h1>{props.data && props.data.action ? props.data.action : "Add"} Modal</h1>
                <span><button onClick={props.closeModal}>Close</button></span>
            </div>
            <form>
                <label>First Name</label>
                <input type='text' value={formData.firstName} placeholder="Enter first name ..." onChange={(e)=> handleInputChange('firstName',e.target.value)}></input>
                
                <label>Last Name</label>
                <input type='text' value={formData.lastName} placeholder="Enter last name ..." onChange={(e)=> handleInputChange('lastName',e.target.value)}></input>
                
                <label>DOB</label>
                <input type='date' value={formData.dob}></input>
                
                <label>Designation</label>
                <input type='text' value={formData.designation} placeholder="Enter Designation..." onChange={(e)=> handleInputChange('designation',e.target.value)}></input>
                
                <label>Profile Photo link</label>
                <input type='text' value={formData.photoLink} placeholder="Enter profile photo link ..." onChange={(e)=> handleInputChange('photoLink',e.target.value)}></input>
                
                <label>Experience</label>
                <input type='text' value={formData.experience} placeholder="Enter Experience ..." onChange={(e)=> handleInputChange('experience',e.target.value)}></input>

                <button className='submit-button' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}