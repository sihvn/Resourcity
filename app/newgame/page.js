import Link from 'next/link'

export default function NewGame() {
    return (
        <>
            <h1>New Game</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}