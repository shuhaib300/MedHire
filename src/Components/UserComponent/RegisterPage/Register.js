import React, {useState} from 'react';
import './Register.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {addUser} from '../../../store';
import {useDispatch} from 'react-redux'
import {nanoid} from 'nanoid';
import validatePDFFile from "./pdfChecker.js";
import {validateFormFields} from './formValidation.js';

const Register = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [educationalQualification, setEducationalQualification] = useState('btech');
    const [jobs, setJobs] = useState([{
            jobTitle: '',
            previousCompany: '',
            startDate: '',
            endDate: ''
        },]);
    const [technicalSkills, setTechnicalSkills] = useState(['']);
    const [pdfFile, setPdfFile] = useState(null);
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
    const handleFileChange = (event) => {
        const pdfFile = event.target.files[0];
              // Validate PDF file
              const validation = validatePDFFile(pdfFile);
              if (! validation.isValid) {
                  alert(validation.message);
                  return;
              }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const alerts = validateFormFields(firstName, lastName, address, mobileNumber, email, password);
  
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
            password,
            educationalQualification,
            jobs,
            technicalSkills,
            pdfFile
        };
        dispatch(addUser(userData));
        setFirstName('');
        setLastName('');
        setAddress('');
        setMobileNumber('');
        setEmail('');
        setPassword('');
        setEducationalQualification('btech');
        setJobs([{
                jobTitle: '',
                previousCompany: '',
                startDate: '',
                endDate: ''
            },]);
        setTechnicalSkills(['']);
        setPdfFile('');

    };

    return (
        <div className="form-container">
            <form className="form-register"

                onSubmit={handleSubmit}>
                <h2 className='register-heading'>Registration Form</h2>
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
                    <label>Password</label>
                    <input className="input-register" type="password"
                        value={password}
                        onChange={
                            (event) => setPassword(event.target.value)
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
                    <div className="form-field">
                        <label>PDF File (Max 2 MB)</label>
                        <input type="file" accept=".pdf"
                            onChange={handleFileChange}/>
                    </div>
                    <button className='button-register' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Register;
