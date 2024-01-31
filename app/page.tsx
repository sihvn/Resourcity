import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ... (head, main content) */}

      {/* Header component with navigation links */}
      <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
        <nav className="flex justify-around">
          <Link href="/game-rules" passHref>
            <div className="hover:text-gray-300 cursor-pointer">Game Rules</div>
          </Link>
          <Link href="/tutorial" passHref>
            <div className="hover:text-gray-300 cursor-pointer">Tutorial</div>
          </Link>
          <Link href="/new-game" passHref>
            <div className="hover:text-gray-300 cursor-pointer">New Game</div>
          </Link>
          <Link href="/faq" passHref>
            <div className="hover:text-gray-300 cursor-pointer">FAQ</div>
          </Link>
        </nav>
      </header>

      {/* Main content of the page */}
      <main className="flex-1 p-4 mt-16 ">
        {/* Image */}
        <img
          src="\Image\Cover.jpg"
          className="mb-4 rounded-md shadow-lg"

        />

        {/* "Click for More" button leading to the same page as Game Rules */}
        <Link href="/game-rules" passHref>
          <div className="text-blue-500 hover:underline">Click for More</div>
        </Link>
      </main>

      {/* Footer component with contact information */}
      <footer className="bg-gray-800 text-white p-4 mt-auto w-full">
        <div className="flex justify-between">
          <div>
            <h4>ADDRESS: 8 SOMAPAH ROAD</h4>
            <p>PHONE NUMBER: 81234567</p>
          </div>
          <div>
            <h4>OUR TEAM:</h4>
            <ul>
              <li>Castone Group S44</li>
            </ul>
          </div>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} THE CIRCLE FOR HUMAN SUSTAINABILITY</p>
        </div>
      </footer>
    </div>
  );
}