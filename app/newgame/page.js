"use client"; //this is a client-side module https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from 'next/link'
import { db } from '../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

// Add document to collection
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

export default function NewGame() {
    const [teamName, setTeamName] = useState('');
    const [score, setScore] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addData(teamName, score);
        if (added) {
            setTeamName(''); // Clear input field
            setScore(0); // Clear input field
            console.log(' Data added successfully');
        }
    };
    return (
        <main>
            <h1>New Game</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Team Name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Score"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </main>
    );
}