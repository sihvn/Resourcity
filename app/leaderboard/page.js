"use client"; //this is a client-side module https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from 'next/link'
import { db } from '../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

// Get documents from collection
async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "Highscore"));

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}

export default function Leaderboard() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchDataFromFirestore() {
            const data = await fetchData();
            setUserData(data);
        }
        fetchDataFromFirestore();
    }, []);

    return (
        <main>
            <h1>Leaderboard</h1>

            <div>
                {userData.map((data) => (
                    <div key={data.id}>
                        <h3>{data.TeamName}</h3>
                        <p>{data.Score}</p>
                    </div>
                ))}
            </div>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </main>
    );
}