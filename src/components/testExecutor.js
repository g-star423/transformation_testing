import React, { useState } from 'react';

const CodeExecutor = ({ generatedCode }) => {
    const [code, setCode] = useState(generatedCode); // Set the initial value of the textarea to generatedCode
    const [output, setOutput] = useState('');

    const executeCode = () => {
        try {
            // eslint-disable-next-line no-eval
            const result = eval(code); // Use the value of code instead of generatedCode
            setOutput(JSON.stringify(result));
        } catch (error) {
            setOutput(`Error: ${error}`);
        }
    };

    return (
        <div>
            <textarea value={code} onChange={(e) => setCode(e.target.value)} /> {/* Update the value of code when the user types */}
            <button onClick={executeCode}>Execute</button>
            <div>{output}</div>
        </div>
    );
};

export default CodeExecutor;