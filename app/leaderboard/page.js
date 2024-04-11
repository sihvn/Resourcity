"use client"; //this is a client-side module https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from 'next/link'
import { db } from '../firebaseConfig'
import { query, collection, getDocs, orderBy } from 'firebase/firestore';
// import { ref, query } from 'firebase/database';
import React, { useState, useEffect } from 'react';
import MenuBar from '../../components/menuBar';
import BaseTemplate from '../../components/baseTemplate';
import Navbar from '../../components/navbar';

import { Table } from 'antd';
import Footer1 from '../../components/footer';

// Get documents from collection
async function fetchData() {
    const querySnapshot = await getDocs(query(collection(db, "Highscore"), orderBy('Score', "desc")));
    // let articlesSnapshot = await getDocs(query(articlesRef, orderBy('timestamp')));
    // const dbRef = collection(db, "cities");
    // const querySnapshot = query(collection(db, "Highscore"));

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({
            id: doc.id, ...doc.data(),
            Date: new Date(doc.data().Date.seconds * 1000).toLocaleDateString('en-GB') // Format timestamp as DD/MM/YYYY
        });
    });
    return data;
}

export default function Leaderboard() {
    const [userData, setUserData] = useState([]);

    const paginationConfig = {
        position: ["bottomCenter"],
    };

    // Use fetchData to get data from firestore
    useEffect(() => {
        async function fetchDataFromFirestore() {
            const data = await fetchData();
            setUserData(data);
        }
        fetchDataFromFirestore();
    }, []);

    const columns = [
        {
            title: 'Team Name',
            dataIndex: 'TeamName',
            key: 'TeamName',
        },
        {
            title: 'Score',
            dataIndex: 'Score',
            key: 'Score',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
        },
        {
            title: 'Crisis 1',
            dataIndex: 'Crisis1',
            key: 'Crisis1',
        },
        {
            title: 'Crisis 2',
            dataIndex: 'Crisis2',
            key: 'Crisis2',
        },
        {
            title: 'Crisis 3',
            dataIndex: 'Crisis3',
            key: 'Crisis3',
        },
        {
            title: 'Crisis 4',
            dataIndex: 'Crisis4',
            key: 'Crisis4',
        }
        // Add more columns as needed
    ];

    // Display data in a table form
    return (
        <>
            <Navbar />
            <main className="flex flex-col justify-center items-center m-0">
                <h1 className='text-center text-4xl font-bold mb-6 py-6'>Leaderboard</h1>
                <Table dataSource={userData} columns={columns} pagination={paginationConfig} />
            </main>
            <Footer1 />
        </>

    );
}

{/* {userData.map((data) => (
                    <div key={data.id}>
                        <h3>{data.TeamName}</h3>
                        <p>{data.Score}</p>
                    </div>
                ))} */}