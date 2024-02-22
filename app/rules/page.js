"use client";
import Link from 'next/link'
import GameSetup from '../../components/gamesetup';
import PlayerAction from '../../components/playeraction';
import FarmActions from '../../components/farmactions';
import BaseTemplate from '../../components/baseTemplate';

export default function Rules() {
    return (
        <BaseTemplate>
            <>
                <GameSetup />
                <PlayerAction />
                <FarmActions />
            </>
        </BaseTemplate>
    );
}