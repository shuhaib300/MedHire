import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleOnRegisterClick=()=>{
    navigate('/register')
  }
    return (
        <div className='container-home'>
            <div className='heading'>
                <h1>DESIGN THE FUTURE</h1>
            </div>
            <div className='heading-content'>
                <span className='heading-span'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, corrupti dicta! Aliquam, qui vel? Ea dicta nulla explicabo, ex magnam, esse cumque quae dolorem eaque velit debitis rerum fuga possimus.
                                       Adipisci velit iusto porro exercitationem vitae, reprehenderit laudantium natus ipsum enim quas, nulla temporibus et. Asperiores, voluptatibus iusto, libero, molestias sapiente temporibus nesciunt officiis nobis maxime commodi repudiandae excepturi magni.
                </span>
            </div>
            <div className='button-home-login'>
                <button className='button1' onClick={handleLoginClick}>
                    Login
                </button>
            </div>
            <div className='button-home-login'>
                <button className='button2' onClick={handleOnRegisterClick}>
                    New Candidate
                </button>
            </div>
            <div className='home-card-list'>
                <div className='home-card'>
                    <span>
                        <h1 className='card-heading'>01</h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto fugiat error quis magni rem, eaque voluptatum?
                    </span>
                </div>
                <div className='home-card'>
                    <span>
                        <h1 className='card-heading'>02</h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto fugiat error quis magni rem, eaque voluptatum?
                    </span>
                </div>
                <div className='home-card'>
                    <span>
                        <h1 className='card-heading'>03</h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto fugiat error quis magni rem, eaque voluptatum?
                    </span>
                </div>
                <div className='home-card'>
                    <span>
                        <h1 className='card-heading'>04</h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto fugiat error quis magni rem, eaque voluptatum?
                    </span>
                </div>
            </div>
            <div className='home-card-list'>
                <div className='home-card'>
                    <span>
                        <h1 className='card-heading'>05</h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto fugiat error quis magni rem, eaque voluptatum?
                    </span>
                </div>
                <div className='home-card'>
                    <span>
                        <h1 className='card-heading'>06</h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto fugiat error quis magni rem, eaque voluptatum?
                    </span>
                </div>
                <div className='home-card'>
                    <span>
                        <h1 className='card-heading'>07</h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto fugiat error quis magni rem, eaque voluptatum?
                    </span>
                </div>
                <div className='home-card'>
                    <span>
                        <h1 className='card-heading'>08</h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto fugiat error quis magni rem, eaque voluptatum?
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Home
