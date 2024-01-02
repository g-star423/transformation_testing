import React from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import { useState } from 'react';
import { javascriptGenerator } from 'blockly/javascript';

function MyBlocklyEditor({ setGeneratedCode }) {
    const [xml, setXml] = useState();

    var MY_TOOLBOX = {
        "kind": "categoryToolbox",
        "contents": [
            {
                "kind": "category",
                "name": "Logic",
                "contents": [
                    {
                        "kind": "block",
                        "type": "controls_if"
                    },
                    {
                        "kind": "block",
                        "type": "logic_compare"
                    }
                ]
            },
            {
                "kind": "category",
                "name": "Loops",
                "contents": [
                    {
                        "kind": "block",
                        "type": "controls_repeat_ext"
                    }
                ]
            }
        ]
    };

    const generateJavaScript = () => {
        const workspace = Blockly.getMainWorkspace();
        const code = javascriptGenerator.workspaceToCode(workspace);
        setGeneratedCode(code);
    };

    return (
        <div className="blockly-container" style={{ height: '500px' }}>
            <BlocklyWorkspace
                className="blockly-workspace"
                toolboxConfiguration={MY_TOOLBOX}
                initialXml={xml}
                onXmlChange={setXml}
            />
            <button onClick={generateJavaScript}>Generate JavaScript</button>
        </div>
    );
}

export default MyBlocklyEditor;