import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

const TransformationFields = ({ fieldValues, setFieldValues }) => {
    const [selectedFields, setSelectedFields] = useState([]);

    const handleFieldSelection = (field) => {
        if (selectedFields.includes(field)) {
            setSelectedFields(selectedFields.filter((selectedField) => selectedField !== field));
        } else {
            setSelectedFields([...selectedFields, field]);
        }
    };

    const handleValueChange = (field, value) => {
        setFieldValues({ ...fieldValues, [field]: { value, type: transformationFields.find(([label]) => label === field)[1] } });
        console.log("These are field values:")
        console.log(fieldValues);
    };

    useEffect(() => {
        // console.log(selectedFields);
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
            <div className="columns">
                <div className="column is-half">
                    <div className="box">
                        {transformationFields.map(([label, type]) => {
                            const selectedField = selectedFields.find((field) => field === label);
                            const value = fieldValues[label] || '';
                            return (
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
                            );
                        })}
                    </div>
                </div>
                <div className="column is-half">
                    <div className="box">
                        {selectedFields.map((field) => {
                            const value = fieldValues[field] || '';
                            return (
                                <div key={field} className="field">
                                    <label className="label">{field}</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type={transformationFields.find(([label]) => label === field)[1].toLowerCase()}
                                            value={value}
                                            onChange={(e) => handleValueChange(field, e.target.value)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransformationFields;