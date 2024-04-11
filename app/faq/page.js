"use client";

import Link from 'next/link'
import Head from 'next/head'
import BaseTemplate from '../../components/baseTemplate';
import Navbar from '../../components/navbar';
import Footer1 from '../../components/footer';

export default function FAQ() {
    const toggleAnswer = (index) => {
        const answer = document.getElementById(`answer-${index}`);
        answer.classList.toggle('hidden');
    };
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-10 px-4 mb-16">
                <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

                <div className="max-w-3xl mx-auto px-5">
                    <div className="mb-4">
                        <div className="border-b-2 border-gray-200 cursor-pointer" onClick={() => toggleAnswer(1)}>
                            <h3 className="text-lg font-semibold py-4">Where can Water Catchments be placed?</h3>
                            <div id="answer-1" className="p-4 hidden">
                                <p> Water Catchments must be placed on/adjacent to Green Spaces.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="border-b-2 border-gray-200 cursor-pointer" onClick={() => toggleAnswer(2)}>
                            <h3 className="text-lg font-semibold py-4">How many water catchments can I place on 1 Green Spaces?</h3>
                            <div id="answer-2" className="p-4 hidden">
                                <p>Maximum 5.</p>
                            </div>
                        </div>
                    </div>

                    {/* Add more FAQ items as needed */}
                </div>
            </div>
            <Footer1 />
        </>

    );
}