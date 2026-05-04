//Updating objects and arrays 
import { useState} from "react";

export function UpdatingObjectsArraysState(){
    //User State
    const [user, setUser] = useState({
        name: 'Madhukesh',
        skill: 'React'
    });

    const updateSkill = () => {
        setUser({
            ...user,//copies all existing properties(name,skill)
            skill:'Advanced React'
        });
    };
    return(
        <>
            <h2>Updating Objects state</h2>
            <p>Name: {user.name} - Skill: {user.skill}</p>
            <button onClick={updateSkill}>Update Skill</button>
        </>
    )
}