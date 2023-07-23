import React, {useState} from 'react';
import './UserProfile.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {addUser,deleteUser} from '../../../store';
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from 'nanoid';
import {validateFormFields} from './formValidation.js';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
    const location = useLocation();
    const userEmail = location.state?.userEmail;
    const user = useSelector((state) =>
    state.users.data.find((user) => user.email === userEmail)
  );
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(user?.firstname || '');
    const [lastName, setLastName] = useState(user?.lastname || '');
    const [address, setAddress] = useState(user?.address || '');
    const [mobileNumber, setMobileNumber] = useState(user?.mobile || '');
    const [email, setEmail] = useState(user?.email || '');
    const [educationalQualification, setEducationalQualification] = useState(user?.Education || '');
    const initialJobsState = user?.work.map(workItem => ({
        jobTitle: workItem.jobtitle,
        previousCompany: workItem.company,
        startDate: workItem.startdate,
        endDate: workItem.enddate
      })) || [];
      const [jobs, setJobs] = useState(initialJobsState);
      const [technicalSkills, setTechnicalSkills] = useState(user?.techinical_skill || ['']);
    const handleInputChange = (index, event) => {
        const {name, value} = event.target;
        const newJobs = [...jobs];
        const updatedJob = {
            ...newJobs[index],
            [name]: value
        };
        newJobs[index] = updatedJob;
        setJobs(newJobs);
    };
    const addJob = () => {
        setJobs([
            ...jobs, {
                jobTitle: '',
                previousCompany: '',
                startDate: '',
                endDate: ''
            }
        ]);
    };
    const deleteJob = (index) => {
        const newJobs = [...jobs];
        newJobs.splice(index, 1);
        setJobs(newJobs);
    };

    const handleTechnicalSkillChange = (index, event) => {
        const {value} = event.target;
        const newSkills = [...technicalSkills];
        newSkills[index] = value;
        setTechnicalSkills(newSkills);
    };
    const addTechnicalSkill = () => {
        setTechnicalSkills([
            ...technicalSkills,
            ''
        ]);
    };
    const deleteTechnicalSkill = (index) => {
        const newTechnicalSkills = [...technicalSkills];
        newTechnicalSkills.splice(index, 1);
        setTechnicalSkills(newTechnicalSkills);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const alerts = validateFormFields(firstName, lastName, address, mobileNumber, email);
  
        // Display alert messages for form field validation
        if (Object.keys(alerts).length > 0) {
            Object.values(alerts).forEach((message) => {
                alert(message);
            });
            return;
        }

        const userData = {
            id: nanoid(),
            firstName,
            lastName,
            address,
            mobileNumber,
            email,
            educationalQualification,
            jobs,
            technicalSkills,
        };
        dispatch(addUser(userData));

    };
    const deletetheuser=(email)=>{
        dispatch(deleteUser(email));
    }   

    return (
        <div className="form-container">
            <form className="form-register"
                onSubmit={handleSubmit}>
                <br/>
                <div className="form-field">
                    <label>First Name</label>
                    <input className="input-register" type="text"
                        value={firstName}
                        onChange={
                            (event) => setFirstName(event.target.value)
                        }
                        required/>
                </div>

                <div className="form-field">
                    <label>Last Name</label>
                    <input className="input-register" type="text"
                        value={lastName}
                        onChange={
                            (event) => setLastName(event.target.value)
                        }
                        required/>
                </div>

                <div className="form-field">
                    <label>Address</label>
                    <input className="input-register" type="address"
                        value={address}
                        onChange={
                            (event) => setAddress(event.target.value)
                        }
                        required/>
                </div>

                <div className="form-field">
                    <label>Mobile Number</label>
                    <input className="input-register" type="number"
                        value={mobileNumber}
                        onChange={
                            (event) => setMobileNumber(event.target.value)
                        }
                        required/>
                </div>

                <div className="form-field">
                    <label>Email</label>
                    <input className="input-register" type="email"
                        value={email}
                        onChange={
                            (event) => setEmail(event.target.value)
                        }
                        required/>
                </div>

                <div className="form-field">
                    <label>Educational Qualification</label>
                    <select className="input-register" id="qualification" name="qualification"
                        value={educationalQualification}
                        onChange={
                            (event) => setEducationalQualification(event.target.value)
                    }>
                        <option value="btech">B.Tech</option>
                        <option value="mtech">M.Tech</option>
                        <option value="ug">UG</option>
                        <option value="pg">PG</option>
                    </select>
                </div>


                {
                jobs.map((job, index) => (
                    <div key={index}>
                        <input className='input-register'
                            style={
                                {marginTop: "2px"}
                            }
                            type="text"
                            name="jobTitle"
                            value={
                                job.jobTitle
                            }
                            onChange={
                                (event) => handleInputChange(index, event)
                            }
                            placeholder="Job Title"/>
                        <input className='input-register' type="text" name="previousCompany"
                            value={
                                job.previousCompany
                            }
                            onChange={
                                (event) => handleInputChange(index, event)
                            }
                            placeholder="Previous Company"/>
                        <input className='input-register' type="date" name="startDate"
                            value={
                                job.startDate
                            }
                            onChange={
                                (event) => handleInputChange(index, event)
                            }/>
                        <input type="date" className='input-register' name="endDate"
                            value={
                                job.endDate
                            }
                            onChange={
                                (event) => handleInputChange(index, event)
                            }/>
                        <button type="button"
                            onClick={
                                () => deleteJob(index)
                        }>
                            <span className="delete-icon-container">
                                <AiOutlineDelete className="delete-icon"/>
                            </span>
                        </button>
                    </div>
                ))
            }
                <button type="button"
                    onClick={addJob}
                    className="add-icon-button">
                    Add work Expernce
                </button>

                {
                technicalSkills.map((skill, index) => (
                    <div key={index}
                        className="technical-skill-section">
                        <input className='input-register' type="text" name="technicalSkill"
                            value={skill}
                            onChange={
                                (event) => handleTechnicalSkillChange(index, event)
                            }
                            placeholder="Technical Skill"/>
                        <button type="button"
                            onClick={
                                () => deleteTechnicalSkill(index)
                        }>
                            <span className="delete-icon-container">
                                <AiOutlineDelete/>
                            </span>
                        </button>
                    </div>
                ))
            }


                <button type="button"
                    onClick={addTechnicalSkill}
                    className="add-icon-button">
                    Add you skill
                </button>
                <div>
                    <br/>
                <button className='button-register' type="submit">Update</button>
                </div>
                <button  onClick={()=>deletetheuser(user.email)} className='button-register' type="button">Delete Profile</button>

            </form>
            
        </div>
    )
}


export default UserProfile;
