
import React from "react";
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/word_thing_modern/PlasmicGlobalContextsProvider'

function App() {
  return (
    <GlobalContextsProvider><React.Suspense><Homepage /></React.Suspense></GlobalContextsProvider>
  );
}

export default App;
  