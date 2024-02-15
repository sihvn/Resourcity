"use client"; //this is a client-side module https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from 'next/link'
import { db } from '../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import MenuBar from '../../components/menuBar';

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
        <>
            <MenuBar />
            <main class="max-w-4xl mx-auto w-screen flex flex-col items-center justify-center">
                <h1 className='text-2xl font-bold underline'>New Game</h1>
                <form action="#" className="w-full grid gap-2 px-4">
                    <div className="flex justify-between items-center">
                        <label className='w-32 text-right pr-4 font-bold text-gray-700'>Team Name</label>
                        <div class="flex-1">
                            <input
                                type="text"
                                placeholder="Team Name"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className='w-32 text-right pr-4 font-bold text-gray-700'>Total Resources</label>
                        <div class="flex-1">
                            <input
                                type="number"
                                placeholder="Total Resources"
                                value={totalResources}
                                onChange={(e) => setTotalResources(e.target.value)}
                                class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className='w-32 text-right pr-4 font-bold text-gray-700'>Max Resource</label>
                        <div class="flex-1">
                            <input
                                type="number"
                                placeholder="Max Resource"
                                value={maxResource}
                                onChange={(e) => setMaxResource(e.target.value)}
                                class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className='w-32 text-right pr-4 font-bold text-gray-700'>Min Resource</label>
                        <div class="flex-1">
                            <input
                                type="number"
                                placeholder="Min Resource"
                                value={minResource}
                                onChange={(e) => setMinResource(e.target.value)}
                                class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className='w-32 text-right pr-4 font-bold text-gray-700'>Number of Farms</label>
                        <div class="flex-1">
                            <input
                                type="number"
                                placeholder="Number of Farms"
                                value={numFarms}
                                onChange={(e) => setNumFarms(e.target.value)}
                                class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <button type="submit" name="calculate" className="bg-white py-2 px-2 border border-gray-300 rounded-md shadow-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" onClick={handleSubmit} >Calculate</button>
                        <button type="submit" name="add" className="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" onClick={handleSubmit} >Submit</button>
                    </div>

                </form>

                <div class="flex justify-center">
                    <span className='w-32 text-center pr-4 font-bold text-gray-700'>Score is :</span>
                    <span className='text-center pr-4 text-gray-700 underline'>{score}</span>
                </div>

                <h2 className='align-text-bottom'>
                    <Link href="/" className="hover:font-bold">Back to home</Link>
                </h2>
            </main>
        </>
    );
}