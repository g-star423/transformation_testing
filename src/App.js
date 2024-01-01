import React from 'react';
import CodeExecutor from './components/testExecutor';
import BlocklyComponent from './components/blocklyComponent';

function App() {
  return (
    <div className="App">
      <h1>JavaScript Code Executor</h1>
      <CodeExecutor />
      <h2>Blockly</h2>
      <BlocklyComponent />
    </div>
  );
}

export default App;