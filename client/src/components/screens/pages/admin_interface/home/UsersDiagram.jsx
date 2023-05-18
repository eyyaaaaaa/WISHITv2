import React from 'react';
import "./userDiagram.scss"
import teacher from "./userCharts/teacher.png"
import gender from "./userCharts/gender.png"
import { useSelector } from 'react-redux';
const UsersDiagram = () => {
    const users = useSelector((state)=> state.usersReducer);
    let percentageColorFemale = 0;

    users.map((user) => {
        if (user.gender === "Female") {
            percentageColorFemale++;
        }
        return null; // Added return statement to avoid warning
    });

    percentageColorFemale = (percentageColorFemale * 100) / users.length;
    let percentageColorMale = 100-percentageColorFemale;
  return (
    <div className='UsersDiagram-container'> 
        <div className="users-by-gender-container">
            <h4>Users by gender</h4>
            <div className="inner-container" style={{display:'flex'}}>
                <div className="stats" style={{display:'grid'}}>
                <div className="Female">
                        <div className="legend"><h4>Female {percentageColorFemale}%</h4></div>
                        <div className="pourcentage">
                        </div>
                        <div className="Female-img" >
                            <div className="Female-img-pink" style={{backgroundColor:"#F06292", width: `${percentageColorFemale}%`}}></div>
                            <div className="Female-img-grey" style={{backgroundColor:"#5D5D5D", width: ` ${percentageColorMale}%`}}></div>
                        </div>
                    </div>
                    <div className="Male">
                        <div className="legend"><h4>Male {percentageColorMale}%</h4></div>
                        <div className="pourcentage">
                        </div>
                        <div className="Male-img"  style={{ background: `linear-gradient(to right, #6B8AEB ${percentageColorMale}%, #5D5D5D)` }}>
                            <div className="Male-img-pink" style={{backgroundColor:"#6B8AEB", width: `${percentageColorMale}%`}}></div>
                            <div className="Male-img-grey" style={{backgroundColor:"#5D5D5D", width: ` ${percentageColorFemale}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="users-by-age-container">
            <h4>Users by age</h4>
        </div>
        <div className="users-by-other-container">
            <h4>Users by other</h4>
        </div>
    </div>
  );
};

export default UsersDiagram;