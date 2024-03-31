"use client"; //this is a client-side module https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from 'next/link'
import { db } from '../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import BaseTemplate from '../../components/baseTemplate';
import Navbar from '../../components/navbar';

import { Form, Input, InputNumber, Button } from 'antd';

// Add document to collection
// TODO to be moved to another file for neatness
async function addData(teamName, score, currentDate) {
    try {
        const colRef = collection(db, "Highscore");
        const docRef = await addDoc(colRef, {
            TeamName: teamName,
            Score: Number(score),
            Date: currentDate
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

    const [form] = Form.useForm();

    // for use in the formula description
    const tr = Form.useWatch('totalResources', form);
    const mxr = Form.useWatch('maximumResources', form);
    const mir = Form.useWatch('minimumResources', form);
    const nof = Form.useWatch('numberOfFarms', form);

    const [newScore, setNewScore] = useState(0);

    const calculateSum = () => {
        const newScore = (form.getFieldsValue().totalResources - (form.getFieldsValue().maximumResources - form.getFieldsValue().minimumResources) + form.getFieldsValue().numberOfFarms);
        setNewScore(newScore);
    };

    const onFinish = async (values) => {
        // Add the current date to the form data
        const currentDate = new Date();
        const newScore = (Number(totalResources.value) - (Number(maximumResources.value) - Number(minimumResources.value)) + Number(numberOfFarms.value));
        const added = await addData(values.name, newScore, currentDate);
        console.log('Success:', values, currentDate);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Navbar />
            <h1 className="text-center text-4xl font-bold mb-2 pt-6">Game Score </h1>
            <div className='flex justify-center'>
                <Form form={form} layout="vertical" onFinish={onFinish} onValuesChange={calculateSum}>
                    <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter a name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="totalResources" label="Total Resources" rules={[
                        {
                            pattern: new RegExp(/^[0-9]+$/),
                            required: true,
                            message: 'Please enter a number above 0 for Total Resources'
                        }
                    ]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="maximumResources" label="Number of Fuel Tokens" rules={[
                        {
                            pattern: new RegExp(/^[0-9]+$/),
                            required: true,
                            message: 'Please enter a number above 0 for Maximum Resources'
                        }]
                    }>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="minimumResources" label="Number of Water Tokens " rules={[
                        {
                            pattern: new RegExp(/^[0-9]+$/),
                            required: true,
                            message: 'Please enter a number above 0 for Total Resources'
                        }]
                    }>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="minimumResources" label="Number of Food Tokens" rules={[
                        {
                            pattern: new RegExp(/^[0-9]+$/),
                            required: true,
                            message: 'Please enter a number above 0 for Total Resources'
                        }]
                    }>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="numberOfFarms" label="Urban City Score" rules={[
                        {
                            pattern: new RegExp(/^[0-9]+$/),
                            required: true,
                            message: 'Please enter a number above 0 for Total Resources'
                        }]
                    }>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item>
                        <Button type="default" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>

            <h2 className='flex justify-center px-6'>
                <span className='text-center pr-4 text-gray-700'>Urban City Score: Total number of tiles connected to Farms on the board. Remove all road tiles that are not connected to Farms from the board. The remaining number of tiles will be your Urban City Score.</span>
            </h2>
            <h2 className='flex justify-center px-6'>
                <span className='text-center pr-4 text-gray-700'>Formula: Total Resource <b>[{tr}]</b>  - (Max Resource <b>[{mxr}]</b> - Min Resource <b>[{mir}]</b>) + Urban City Score<b>[{nof}]</b> = <b>{newScore}</b></span>
            </h2>
        </>


    );
}