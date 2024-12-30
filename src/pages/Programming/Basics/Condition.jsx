import React, { useEffect, useState } from 'react';
import { getConditionDocs } from '../../../utils/Condition';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Condition = () => {
    const [conditions, setConditions] = useState([]);
    const [showConditions, setShowConditions] = useState(false); // To toggle main dropdown
    const [expandedConditions, setExpandedConditions] = useState([]); // Track expanded individual conditions
    const [selectedConditions, setSelectedConditions] = useState([]); // Track selected conditions

    useEffect(() => {
        const fetchData = async () => {
            const data = await getConditionDocs();
            setConditions(data);
        };
        fetchData();
    }, []);

    const handleToggleConditions = () => {
        setShowConditions(prevState => !prevState); // Toggle visibility of all conditions
    };

    const handleToggleConditionDetails = (conditionName) => {
        setExpandedConditions((prevExpanded) => {
            if (prevExpanded.includes(conditionName)) {
                return prevExpanded.filter((name) => name !== conditionName);
            } else {
                return [...prevExpanded, conditionName];
            }
        });
    };

    const handleCheckboxChange = (conditionName) => {
        setSelectedConditions((prevSelected) => {
            if (prevSelected.includes(conditionName)) {
                return prevSelected.filter((name) => name !== conditionName);
            } else {
                return [...prevSelected, conditionName];
            }
        });
    };

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            {/* Button to toggle show/hide all conditions */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleConditions}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Condition</span>
                    <span className={`transform transition duration-300 ${showConditions ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showConditions ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Conditions */}
                {showConditions && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Conditions */}
                        {conditions.map((condition) => (
                            <div key={condition.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                {/* Button to show/hide individual condition details */}
                                <div
                                    className="flex items-center"
                                    onClick={() => handleToggleConditionDetails(condition.name)}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        onChange={() => handleCheckboxChange(condition.name)}
                                        checked={selectedConditions.includes(condition.name)}
                                    />
                                    <span className="text-lg text-gray-700">{condition.name}</span>
                                    <span
                                        className={`ml-2 transform transition duration-300 ${expandedConditions.includes(condition.name) ? 'rotate-180' : ''}`}
                                    >
                                        {/* Using Heroicons for the expand/collapse icon */}
                                        {expandedConditions.includes(condition.name) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                        )}
                                    </span>
                                </div>

                                {/* Show details of the condition when it is expanded */}
                                {expandedConditions.includes(condition.name) && (
                                    <div className="bg-white rounded-lg shadow-md p-4 mt-4 border-l-4 border-gray-200">
                                        <p className="text-lg text-gray-800"><strong>Type:</strong> {condition.type}</p>
                                        <p className="text-lg text-gray-800"><strong>Explanation (English):</strong> {condition.explainEnglish}</p>
                                        <p className="text-lg text-gray-800"><strong>Explanation (Bangla):</strong> {condition.explainBangla}</p>
                                        <p className="text-lg text-gray-800"><strong>Example Code:</strong></p>
                                        <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">{condition.code}</pre>
                                        <p className="text-lg text-gray-800"><strong>Input:</strong> {condition.input}</p>
                                        <p className="text-lg text-gray-800"><strong>Output:</strong> {condition.output}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Condition;
