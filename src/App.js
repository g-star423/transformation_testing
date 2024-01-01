import React from 'react';
import CodeExecutor from './components/testExecutor';
import MyBlocklyEditor from './components/blocklyComponent';
import TransformationFields from './components/transformationFields';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>JavaScript Code Executor</h1>
      <CodeExecutor />
      <h1>Transformation Fields</h1>
      <TransformationFields />
      <h1>Blockly</h1>
      <MyBlocklyEditor />
    </div>
  );
}

export default App;