import Link from 'next/link'
import MenuBar from '../../components/menuBar';

export default function Rules() {
    return (
        <>
            <MenuBar />
            <h1>Game Rules</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}