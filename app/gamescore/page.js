"use client"; //this is a client-side module https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from 'next/link'
import { db } from '../firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import BaseTemplate from '../../components/baseTemplate';
import Navbar from '../../components/navbar';
import Footer1 from '../../components/footer';
import { Form, Input, InputNumber, Button, Select, Modal } from 'antd';

const { Option } = Select;
// Add document to collection
// TODO to be moved to another file for neatness
async function addData(teamName, score, currentDate, crisis1, crisis2, crisis3, crisis4) {
    try {
        const colRef = collection(db, "Highscore");
        const docRef = await addDoc(colRef, {
            TeamName: teamName,
            Score: Number(score),
            Date: currentDate,
            Crisis1: crisis1,
            Crisis2: crisis2,
            Crisis3: crisis3,
            Crisis4: crisis4
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
    const [newScore, setNewScore] = useState(0);

    // for use in the formula description
    const tr = Form.useWatch('totalResources', form);
    const mxr = Form.useWatch('maximumResources', form);
    const mir = Form.useWatch('minimumResources', form);
    const maximumResources = Math.max(form.getFieldsValue().fuelResources, form.getFieldsValue().waterResources, form.getFieldsValue().foodResources);
    const minimumResources = Math.min(form.getFieldsValue().fuelResources, form.getFieldsValue().waterResources, form.getFieldsValue().foodResources);
    const nof = Form.useWatch('numberOfFarms', form);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const calculateSum = () => {
        const newScore = (form.getFieldsValue().totalResources -
            (Math.max(form.getFieldsValue().fuelResources, form.getFieldsValue().waterResources, form.getFieldsValue().foodResources)
                - Math.min(form.getFieldsValue().fuelResources, form.getFieldsValue().waterResources, form.getFieldsValue().foodResources))
            + form.getFieldsValue().numberOfFarms);
        setNewScore(newScore);
    };

    const onFinish = async (values) => {
        // Add the current date to the form data
        const currentDate = new Date();
        const newScore = (Number(totalResources.value) - (maximumResources - minimumResources) + Number(numberOfFarms.value));
        const added = await addData(values.name, newScore, currentDate, values.crisis1, values.crisis2, values.crisis3, values.crisis4);
        setIsModalVisible(true);
        console.log('Success:', values, currentDate);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const CrisisSelect = ({ name, label }) => {
        return (
            <Form.Item
                name={name}
                label={label}
                rules={[{ required: true, message: 'Please select a crisis' }]}
            >
                <Select
                    placeholder="Select an option"
                    allowClear
                >
                    <Option value="None">None</Option>
                    <Option value="Blight">Blight</Option>
                    <Option value="Drought">Drought</Option>
                    <Option value="Earthquake">Earthquake</Option>
                    <Option value="Fuel Crisis">Fuel Crisis</Option>
                    <Option value="Manpower Shortage">Manpower Shortage</Option>
                    <Option value="Monsoon Rain">Monsoon Rain</Option>
                    <Option value="Pandemic">Pandemic</Option>
                    <Option value="Pests">Pests</Option>
                    <Option value="Sea Level Rise">Sea Level Rise</Option>
                    <Option value="Trade Embargo">Trade Embargo</Option>
                </Select>
            </Form.Item>
        );
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
                    <Form.Item name="fuelResources" label="Number of Fuel Tokens" rules={[
                        {
                            pattern: new RegExp(/^[0-9]+$/),
                            required: true,
                            message: 'Please enter a number above 0 for Maximum Resources'
                        }]
                    }>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="waterResources" label="Number of Water Tokens " rules={[
                        {
                            pattern: new RegExp(/^[0-9]+$/),
                            required: true,
                            message: 'Please enter a number above 0 for Total Resources'
                        }]
                    }>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="foodResources" label="Number of Food Tokens" rules={[
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

                    <CrisisSelect name="crisis1" label="Crisis 1" />
                    <CrisisSelect name="crisis2" label="Crisis 2" />
                    <CrisisSelect name="crisis3" label="Crisis 3" />
                    <CrisisSelect name="crisis4" label="Crisis 4" />

                    <Form.Item>
                        <Button type="default" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
                <Modal
                    title="Submission Successful"
                    open={isModalVisible}
                    onOk={() => setIsModalVisible(false)}
                    onCancel={() => setIsModalVisible(false)}
                >
                    <p>Your form has been submitted successfully!</p>
                    <p><Link href="/leaderboard" className="hover:text-gray-500 cursor-pointer">Go To Leaderboard</Link></p>
                </Modal>
            </div>

            <h2 className='flex justify-center px-6'>
                <span className='text-center pr-4 text-gray-700'>Urban City Score: Total number of tiles connected to Farms on the board. Remove all road tiles that are not connected to Farms from the board. The remaining number of tiles will be your Urban City Score.</span>
            </h2>
            <h2 className='flex justify-center px-6 py-6'>
                <span className='text-center pr-4 text-gray-700'>Formula: Total Resource <b>[{tr}]</b>  - (Max Resource <b>[{maximumResources}]</b> - Min Resource <b>[{minimumResources}]</b>) + Urban City Score<b>[{nof}]</b> = <b>{newScore}</b></span>
            </h2>
            <Footer1 />
        </>


    );
}