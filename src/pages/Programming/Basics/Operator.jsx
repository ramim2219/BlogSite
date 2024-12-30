import React, { useEffect, useState } from 'react';
import { getOperatorDocumentation } from '../../../utils/Operator';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Operator = () => {
    const [operatorConcepts, setOperatorConcepts] = useState([]);
    const [showOperators, setShowOperators] = useState(false); // To toggle main dropdown
    const [expandedOperators, setExpandedOperators] = useState([]); // Track expanded individual operators
    const [selectedOperators, setSelectedOperators] = useState([]); // Track selected operators

    useEffect(() => {
        const fetchData = async () => {
            const data = await getOperatorDocumentation();
            setOperatorConcepts(data);
        };
        fetchData();
    }, []);

    const handleToggleOperators = () => {
        setShowOperators(prevState => !prevState); // Toggle visibility of all operators
    };

    const handleToggleOperatorDetails = (operatorName) => {
        setExpandedOperators((prevExpanded) => {
            if (prevExpanded.includes(operatorName)) {
                return prevExpanded.filter((name) => name !== operatorName);
            } else {
                return [...prevExpanded, operatorName];
            }
        });
    };

    const handleCheckboxChange = (operatorName) => {
        setSelectedOperators((prevSelected) => {
            if (prevSelected.includes(operatorName)) {
                return prevSelected.filter((name) => name !== operatorName);
            } else {
                return [...prevSelected, operatorName];
            }
        });
    };

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            {/* Button to toggle show/hide all operators */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleOperators}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Operators</span>
                    <span className={`transform transition duration-300 ${showOperators ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showOperators ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Operators */}
                {showOperators && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Operator Concepts */}
                        {operatorConcepts.map((operator) => (
                            <div key={operator.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                {/* Button to show/hide individual operator details */}
                                <div
                                    className="flex items-center"
                                    onClick={() => handleToggleOperatorDetails(operator.topic)}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        onChange={() => handleCheckboxChange(operator.topic)}
                                        checked={selectedOperators.includes(operator.topic)}
                                    />
                                    <span className="text-lg text-gray-700">{operator.topic}</span>
                                    <span
                                        className={`ml-2 transform transition duration-300 ${expandedOperators.includes(operator.topic) ? 'rotate-180' : ''}`}
                                    >
                                        {/* Using Heroicons for the expand/collapse icon */}
                                        {expandedOperators.includes(operator.topic) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                        )}
                                    </span>
                                </div>

                                {/* Show details of the operator when it is expanded */}
                                {expandedOperators.includes(operator.topic) && (
                                    <div className="bg-white rounded-lg shadow-md p-4 mt-4 border-l-4 border-gray-200">
                                        <p className="text-lg text-gray-800"><strong>Explanation (English):</strong> {operator.explanationEnglish}</p>
                                        <p className="text-lg text-gray-800"><strong>Explanation (Bangla):</strong> {operator.explanationBangla}</p>
                                        <p className="text-lg text-gray-800"><strong>Example Code:</strong></p>
                                        <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">{operator.code}</pre>
                                        <p className="text-lg text-gray-800"><strong>Input:</strong> {operator.input}</p>
                                        <p className="text-lg text-gray-800"><strong>Output:</strong> {operator.output}</p>
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

export default Operator;
