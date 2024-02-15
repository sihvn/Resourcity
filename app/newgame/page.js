"use client"; //this is a client-side module https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from 'next/link'
import { db } from '../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

// Add document to collection
// TODO to be moved to another file for neatness
async function addData(teamName, score) {
    try {
        const colRef = collection(db, "Highscore");
        const docRef = await addDoc(colRef, {
            TeamName: teamName,
            Score: Number(score)
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (error) {
        console.error("Error adding document: ", error.message);
        return false;
    }
}

// end game calculate
// (sum.resources - (max.resource - min.resource)) + num.farms

export default function NewGame() {
    const [teamName, setTeamName] = useState('');
    const [totalResources, setTotalResources] = useState(0);
    const [maxResource, setMaxResource] = useState(0);
    const [minResource, setMinResource] = useState(0);
    const [numFarms, setNumFarms] = useState(0);
    const [score, setScore] = useState(0);

    // TODO to be moved to another file for neatness
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (e.target.name == 'calculate') {
            const newScore = (Number(totalResources) - (Number(maxResource) - Number(minResource))) + Number(numFarms);
            console.log('New Score: ', newScore);
            setScore(newScore);
        } else {
            const added = await addData(teamName, score);
            if (added) {
                setTeamName(''); // Clear input field
                setTotalResources(0); // Clear input field
                setMaxResource(0); // Clear input field
                setMinResource(0); // Clear input field
                setNumFarms(0); // Clear input field
                setScore(0); // Clear input field
                console.log(' Data added successfully');
            }
        }
    };
    return (
        <main>
            <h1>New Game</h1>

            <form action="#">
                <label>
                    <span>Team Name</span>
                    <input
                        type="text"
                        placeholder="Team Name"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    <span>Total Resources</span>
                    <input
                        type="number"
                        placeholder="Total Resources"
                        value={totalResources}
                        onChange={(e) => setTotalResources(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    <span>Max Resource</span>
                    <input
                        type="number"
                        placeholder="Max Resource"
                        value={maxResource}
                        onChange={(e) => setMaxResource(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    <span>Min Resource</span>
                    <input
                        type="number"
                        placeholder="Min Resource"
                        value={minResource}
                        onChange={(e) => setMinResource(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    <span>Number of Farms</span>
                    <input
                        type="number"
                        placeholder="Number of Farms"
                        value={numFarms}
                        onChange={(e) => setNumFarms(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit" name="calculate" value="zzz" onClick={handleSubmit} >Calculate</button>
                <button type="submit" name="add" onClick={handleSubmit} >Submit</button>
            </form>

            <h2>
                Score is : {score}
            </h2>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </main>
    );
}