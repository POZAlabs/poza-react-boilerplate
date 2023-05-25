import React from 'react';

import PozalabsLogo from '../assets/svgs/pozalabs.svg';
import ReactLogo from '../assets/svgs/react.svg';

import '../styles/index.css';

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-5 text-4xl font-bold">React Boilerplates created by POZAlab</h1>
      <div className="flex items-center">
        <a target="_blank" rel="noopener noreferrer" href="http://pozalabs.com">
          <PozalabsLogo className="w-[300px]" />
        </a>
        <ReactLogo className="w-[300px]" />
      </div>
    </main>
  );
};

export default App;
