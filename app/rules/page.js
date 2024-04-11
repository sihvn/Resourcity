"use client";
import Link from 'next/link'
import GameSetup from '../../components/gamesetup';
import PlayerAction from '../../components/playeraction';
import FarmActions from '../../components/farmactions';
import BaseTemplate from '../../components/baseTemplate';
import FormingLoops from '../../components/formingloops';
import Superpowers from '../../components/superpowers';
import CrisisCards from '../../components/crisiscards';
import GameComponent from '../../components/gamecomponents';
import HuatCards from '../../components/huatcards';
import Navbar from '../../components/navbar';
import FarmExamples from '../../components/farmexamples';
import InstructionCards from '../../components/instructioncard';
import Footer1 from '../../components/footer';

export default function Rules() {
    return (
        <>
            <Navbar />
            <div id="game-setup">
                <GameSetup />
            </div>
            <div id="player-actions">
                <PlayerAction />
            </div>
            <div id="forming-loops">
                <FormingLoops />
            </div>
            <div id="farm-actions">
                <FarmActions />
            </div>
            <div id="farm-examples">
                <FarmExamples />
            </div>
            <div id="crisis-cards">
                <CrisisCards />
            </div>
            <div id="huat-cards">
                <HuatCards />
            </div>
            <div id="super-powers">
                <Superpowers />
            </div>
            <div id="game-components">
                <GameComponent />
            </div>
            <div id="instruction-card">
                <InstructionCards />
            </div>
            <Footer1 />
        </>
    );
}