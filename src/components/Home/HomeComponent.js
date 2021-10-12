import React, { useState } from 'react';
import EmployeeModal from '../Modals/EmployeeModal/EmployeeModal';
import './HomeComponent.css'

export default function HomeComponent(props){

    let dummyData = [
        {
            firstName: "Shubham",
            lastName: "Nikam",
            DOB: "07/12/1997",
            designation: "Software Engineer",
            profilePhoto: "https://media-exp1.licdn.com/dms/image/C5103AQG_ObNoS5bdKQ/profile-displayphoto-shrink_200_200/0/1573714364338?e=1639612800&v=beta&t=kb-umTkj53hALhNV0aHrojBrKq36MxjoxhiYdOEu4no",
            experience: "2 Years"
        },
        {
            firstName: "Shubham",
            lastName: "Nikam",
            DOB: "07/12/1997",
            designation: "Software Engineer",
            profilePhoto: "hi",
            experience: "2 Years"
        },
        {
            firstName: "Shubham",
            lastName: "Nikam",
            DOB: "07/12/1997",
            designation: "Software Engineer",
            profilePhoto: "hi",
            experience: "2 Years"
        }
    ]

    let headers = [
        {
            name: "First Name"
        },
        {
            name: "Last Name"
        },
        {
            name: "DOB"
        },
        {
            name: "Designation"
        },
        {
            name: "Profile Photo"
        },
        {
            name: "Experience"
        }

    ]
    let [employeeData, setEmployeeData] = useState(dummyData);
    let [modalVisible, setModalVisible] = useState(false);
    let [selectedItem, setSelectedItem] = useState({});

    let handleEmployeeActions = (action,data) => {
        if(action === 'edit'){
            setModalVisible(true);
            setSelectedItem({...data,action: 'Edit'})
        }else if(action === 'add'){
            setModalVisible(true)
        }
    }

    let handleAddEmployee = (payload) => {
        setEmployeeData([...employeeData,payload])
    }

    return(
        <div className="home-container">
            <div className='top-container'>
                <h1>Employee Records</h1>
                <span><button className="add-button" onClick={() => handleEmployeeActions('add')}>Add Employee</button></span>
            </div>
            <table>
                {headers && headers.map((header) => (
                    <th>
                        <td>{header.name}</td>
                    </th>
                ))}
                {employeeData && employeeData.map((item,index) => (<tr>
                    <td className='row-data'>{item.firstName}</td>
                    <td className='row-data'>{item.lastName}</td>
                    <td className='row-data'>{item.DOB}</td>
                    <td className='row-data'>{item.designation}</td>
                    <td className='row-data'>
                        <img src={item.profilePhoto}></img>
                    </td>
                    <td className='row-data'>{item.experience}</td>
                    <td className='edit-link' onClick={()=>{handleEmployeeActions('edit',item)}}>Edit</td>
                </tr>))}
            </table>
            {modalVisible && <EmployeeModal
                handleAddEmployee={handleAddEmployee}
                closeModal={()=>setModalVisible(false)}
                data={selectedItem}
            />}
        </div>
    )
}