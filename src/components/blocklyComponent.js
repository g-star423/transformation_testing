import React from 'react';
import Blockly from 'blockly';
class BlocklyComponent extends React.Component {
    componentDidMount() {
        // Initialize Blockly
        const workspace = Blockly.inject('blockly-test-area', {
            toolbox: Blockly.Blocks.defaultToolbox(),
        });

        // Generate JavaScript code
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        console.log(code);
    }

    render() {
        return (
            <div>
                {/* Blockly test area */}
                <div id="blockly-test-area"></div>
            </div>
        );
    }
}

export default BlocklyComponent;
