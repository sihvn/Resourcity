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
            <GameSetup id="game-setup" />
            <PlayerAction />
            <FormingLoops />
            <FarmActions id="farm-actions" />
            <FarmExamples />
            <CrisisCards />
            <HuatCards />
            <Superpowers />
            <GameComponent />
            <InstructionCards />
            <Footer1 />
        </>
    );
}