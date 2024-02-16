import Link from 'next/link'
import MenuBar from '../../components/menuBar';

export default function Tutorial() {
    return (
        <>
            <MenuBar />
            <h1>Tutorial</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}