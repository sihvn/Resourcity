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

        {/* Paragraph of text */}
        <p className="mb-4 border-8 text-center">
          <h1>Objective:</h1>
          <li>The objective of the game is to have every player to complete their agenda by collecting action cards and maintain three more rounds with resources above threshold.
            Preparation:
            Place the board on a table and put all cards on their allotted spaces on the board with the choices side facing up. Each player chooses one avatar to represent him/her while traveling around the board.

            The common pool of resources starts with X fuel, Y food and Z water tokens, the remaining resources go to the Bank.</li>
          <h1>Avatar Description:</h1>
          <h2>Student</h2>
          <li>Student avatar has to complete 2 agendas in school, 1 agenda at the mall and 1agenda at home.</li>
          <h2>Parent</h2>
          <li>Parent avatar has to complete 1 agenda at the workplace, 1 agenda at the mall, 1 agenda at the school and 1 agenda at home.</li>
          <h2>Elderly</h2>
          <li>Elderly avatar has to complete 2 agendas at the farm, 1 agenda at the mall and 1 agenda at home.</li>
          <h2>Manager</h2>
          <li>Manager avatar has to complete 2 agendas at the workplace, 1 agenda at the farm and 1 agenda at home.</li>
          <h1>Common Resource Pool</h1>
          <li>Common Resource Pool is the place where all the resources are stored in the country. All players will be sharing the same resources and their have to do their part to maintain or gain resources from the pool. This is the place where all players will take resources from when they are completing their actions.
          </li>
          <h1>Buildings:</h1>
          <li>These buildings are places where players can complete their agendas by choosing the actions they want to make.</li>
          <h2>Mall</h2>
          <h2>School</h2>
          <h2>Work</h2>
          <h2>Farm</h2>
          <li>Farm is a place where players can grow resources by taking care of the raw materials.</li>
          <h2>Home</h2>
          <h2>Bike Lanes</h2>
          <li>Bike lanes gives express access to other places by quicker transportation route.</li>
          <h1>How to Play:</h1>
          <li>Each player in turn throws the dice. The player with the highest total starts the play: Place your token at your individual houses, throw the dice and move your token in the number of spaces indicated by the dice. After you have completed your play, the turn passes to the left. The token remain on the spaces occupied and proceed from that point on the player's next turn. Two or more tokens may rest on the same space at the same time.

            According to the spaces your token reaches, you may be entitled to draw an action card, a situational card, farm for resources or collaborate with each other etc.
          </li>
          <h2>Drawing Action Cards:</h2>
          <li>You will draw an action card when you reaches a building as described above. Take the top card from the deck indicated, choose an action to take from the two choices shown.

            Pay for your action by taking resources from the common resource pool as written on the card. Only flip the card to read the back side once you have chosen the action to take. You have completed one agenda from that building and you may keep the card.

            At every subsequent round, long term resources will have to be taken from the common resource pool.</li>
          <h2>Situation Cards:</h2>
          <li>When you land on situation tile, take the top card from the deck, follow the instructions and return the card facedown to the bottom of the deck.</li>

        </p>

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