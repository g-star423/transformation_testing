import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';

const CodeExecutor = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const executeCode = () => {
        try {
            // eslint-disable-next-line no-eval
            const result = eval(code);
            setOutput(JSON.stringify(result));
        } catch (error) {
            setOutput(`Error: ${error}`);
        }
    };

    return (
        <div>
            <textarea value={code} onChange={(e) => setCode(e.target.value)} />
            <button onClick={executeCode}>Execute</button>
            <div>{output}</div>
        </div>
    );
};

export default CodeExecutor;