import React, { useEffect, useState } from 'react';
import { getPairDocumentation } from '../../../utils/Pair'; // Assuming the getPairDocumentation function is located in utils/Pair
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Pair = () => {
    const [pairConcepts, setPairConcepts] = useState([]); // State for holding the pair concepts data
    const [showPair, setShowPair] = useState(false); // To toggle the main dropdown visibility
    const [expandedConcepts, setExpandedConcepts] = useState([]); // Track expanded individual pair concepts
    const [selectedConcepts, setSelectedConcepts] = useState([]); // Track selected pair concepts

    // Fetch data from the pair documentation API
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPairDocumentation(); // Fetch the pair documentation data
            setPairConcepts(data);
        };
        fetchData();
    }, []);

    // Toggle the visibility of all pair concepts
    const handleTogglePair = () => {
        setShowPair(prevState => !prevState);
    };

    // Toggle the details of an individual concept
    const handleToggleConceptDetails = (topic) => {
        setExpandedConcepts((prevExpanded) => {
            if (prevExpanded.includes(topic)) {
                return prevExpanded.filter((name) => name !== topic);
            } else {
                return [...prevExpanded, topic];
            }
        });
    };

    // Handle checkbox change to select/deselect concepts
    const handleCheckboxChange = (topic) => {
        setSelectedConcepts((prevSelected) => {
            if (prevSelected.includes(topic)) {
                return prevSelected.filter((name) => name !== topic);
            } else {
                return [...prevSelected, topic];
            }
        });
    };

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            {/* Button to toggle the show/hide all pair concepts */}
            <div className="relative mb-6">
                <button
                    onClick={handleTogglePair}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Pair Concepts</span>
                    <span className={`transform transition duration-300 ${showPair ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showPair ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Pair Concepts */}
                {showPair && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Pair Concepts */}
                        {pairConcepts.map((concept) => (
                            <div key={concept.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                {/* Button to show/hide individual concept details */}
                                <div
                                    className="flex items-center"
                                    onClick={() => handleToggleConceptDetails(concept.topic)}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        onChange={() => handleCheckboxChange(concept.topic)}
                                        checked={selectedConcepts.includes(concept.topic)}
                                    />
                                    <span className="text-lg text-gray-700">{concept.topic}</span>
                                    <span
                                        className={`ml-2 transform transition duration-300 ${expandedConcepts.includes(concept.topic) ? 'rotate-180' : ''}`}
                                    >
                                        {/* Arrow icon for expanding/collapsing */}
                                        {expandedConcepts.includes(concept.topic) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-700" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                                        )}
                                    </span>
                                </div>

                                {/* Conditionally render concept details when expanded */}
                                {expandedConcepts.includes(concept.topic) && (
                                    <div className="mt-4">
                                        <div className="font-semibold text-gray-700">Explanation (English):</div>
                                        <p>{concept.explanationEnglish}</p>
                                        <div className="mt-2 font-semibold text-gray-700">Explanation (Bangla):</div>
                                        <p>{concept.explanationBangla}</p>
                                        <div className="mt-2 font-semibold text-gray-700">Code Example:</div>
                                        <pre className="bg-gray-100 p-4 rounded-lg">{concept.code}</pre>
                                        <div className="mt-2 font-semibold text-gray-700">Input:</div>
                                        <p>{concept.input}</p>
                                        <div className="mt-2 font-semibold text-gray-700">Output:</div>
                                        <pre className="bg-gray-100 p-4 rounded-lg">{concept.output}</pre>
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

export default Pair;
