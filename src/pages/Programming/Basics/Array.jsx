import React, { useEffect, useState } from 'react';
import { getArrayConcepts } from '../../../utils/Array'; // Importing the getArrayConcepts function
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Array = () => {
    const [arrayConcepts, setArrayConcepts] = useState([]);
    const [showArray, setShowArray] = useState(false); // To toggle main dropdown
    const [expandedArray, setExpandedArray] = useState([]); // Track expanded individual array topics
    const [selectedArray, setSelectedArray] = useState([]); // Track selected array topics

    useEffect(() => {
        const fetchData = async () => {
            const data = await getArrayConcepts();
            setArrayConcepts(data);
        };
        fetchData();
    }, []);

    const handleToggleArray = () => {
        setShowArray(prevState => !prevState); // Toggle visibility of all array concepts
    };

    const handleToggleArrayDetails = (arrayTopic) => {
        setExpandedArray((prevExpanded) => {
            if (prevExpanded.includes(arrayTopic)) {
                return prevExpanded.filter((topic) => topic !== arrayTopic);
            } else {
                return [...prevExpanded, arrayTopic];
            }
        });
    };

    const handleCheckboxChange = (arrayTopic) => {
        setSelectedArray((prevSelected) => {
            if (prevSelected.includes(arrayTopic)) {
                return prevSelected.filter((topic) => topic !== arrayTopic);
            } else {
                return [...prevSelected, arrayTopic];
            }
        });
    };

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            {/* Button to toggle show/hide all array concepts */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleArray}
                    className="bg-green-500 text-white p-3 rounded-lg mb-6 hover:bg-green-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Array Concepts</span>
                    <span className={`transform transition duration-300 ${showArray ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showArray ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Array Concepts */}
                {showArray && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Array Topics */}
                        {arrayConcepts.map((concept) => (
                            <div key={concept.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                {/* Button to show/hide individual array details */}
                                <div
                                    className="flex items-center"
                                    onClick={() => handleToggleArrayDetails(concept.topic)}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        onChange={() => handleCheckboxChange(concept.topic)}
                                        checked={selectedArray.includes(concept.topic)}
                                    />
                                    <span className="text-lg text-gray-700">{concept.topic}</span>
                                    <span
                                        className={`ml-2 transform transition duration-300 ${expandedArray.includes(concept.topic) ? 'rotate-180' : ''}`}
                                    >
                                        {/* Using Heroicons for the expand/collapse icon */}
                                        {expandedArray.includes(concept.topic) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                        )}
                                    </span>
                                </div>

                                {/* Show details of the concept when it is expanded */}
                                {expandedArray.includes(concept.topic) && (
                                    <div className="bg-white rounded-lg shadow-md p-4 mt-4 border-l-4 border-gray-200">
                                        <p className="text-lg text-gray-800"><strong>Explanation (English):</strong> {concept.explanationEnglish}</p>
                                        <p className="text-lg text-gray-800"><strong>Explanation (Bangla):</strong> {concept.explanationBangla}</p>
                                        <p className="text-lg text-gray-800"><strong>Example Code:</strong></p>
                                        <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">{concept.code}</pre>
                                        <p className="text-lg text-gray-800"><strong>Input:</strong> {concept.input}</p>
                                        <p className="text-lg text-gray-800"><strong>Output:</strong> {concept.output}</p>
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

export default Array;
