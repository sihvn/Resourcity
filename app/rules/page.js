import Link from 'next/link'
import MenuBar from '../../components/menuBar';
import GameSetup from '../../components/gamesetup';
import PlayerAction from '../../components/playeraction';
import FarmActions from '../../components/farmactions';

export default function Rules() {
    return (
        <>
            <MenuBar />
            <GameSetup />
            <PlayerAction />
            <FarmActions />


        </>
    );
}