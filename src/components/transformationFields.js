import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

const TransformationFields = () => {
    const [selectedFields, setSelectedFields] = useState([]);

    const handleFieldSelection = (field) => {
        if (selectedFields.includes(field)) {
            setSelectedFields(selectedFields.filter((selectedField) => selectedField !== field));
        } else {
            setSelectedFields([...selectedFields, field]);
        }
    };

    useEffect(() => {
        console.log(selectedFields);
    }, [selectedFields]);

    const transformationFields = [
        ["String Test 1", "String"],
        ["String Test 2", "String"],
        ["Number Test 1", "Number"],
        ["Number Test 2", "Number"],
        ["Boolean Test 1", "Boolean"],
        ["Boolean Test 2", "Boolean"],
        ["Date Test 1", "Date"],
        ["Date Test 2", "Date"]
    ];

    return (
        <div className="container has-text-centered">
            <div className="box">
                {transformationFields.map(([label, type]) => (
                    <div key={label} className="box" onClick={() => handleFieldSelection(label)}>
                        <input
                            id={label}
                            type="checkbox"
                            className="is-checkradio is-large"
                            checked={selectedFields.includes(label)}
                            onChange={() => handleFieldSelection(label)}
                        />
                        <label htmlFor={label}>{label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransformationFields;
