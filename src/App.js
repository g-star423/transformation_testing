import React from 'react';
import CodeExecutor from './components/testExecutor';
import MyBlocklyEditor from './components/blocklyComponent';
import TransformationFields from './components/transformationFields';
import './App.css';
import { useState } from 'react';

function App() {
  const [generatedCode, setGeneratedCode] = useState('');
  const [fieldValues, setFieldValues] = useState({});

  return (
    <div className="App">
      <h1>JavaScript Code Executor</h1>
      <CodeExecutor generatedCode={generatedCode} />
      <h1>Transformation Fields</h1>
      <TransformationFields setFieldValues={setFieldValues} fieldValues={fieldValues} />
      <h1>Blockly</h1>
      <MyBlocklyEditor setGeneratedCode={setGeneratedCode} />
    </div>
  );
}

export default App;