import React, { useEffect, useState } from 'react';
import { getTupleDocumentation } from '../../../utils/Touple'; // Adjust the path if necessary
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Touple = () => {
    const [tupleConcepts, setTupleConcepts] = useState([]); // State for holding the tuple concepts data
    const [showTuple, setShowTuple] = useState(false); // To toggle the main dropdown visibility
    const [expandedConcepts, setExpandedConcepts] = useState([]); // Track expanded individual tuple concepts
    const [selectedConcepts, setSelectedConcepts] = useState([]); // Track selected tuple concepts

    // Fetch data from the tuple documentation API
    useEffect(() => {
        const fetchData = async () => {
            const data = await getTupleDocumentation(); // Fetch the tuple documentation data
            setTupleConcepts(data);
        };
        fetchData();
    }, []);

    // Toggle the visibility of all tuple concepts
    const handleToggleTuple = () => {
        setShowTuple(prevState => !prevState);
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
            {/* Button to toggle the show/hide all tuple concepts */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleTuple}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Tuple Concepts</span>
                    <span className={`transform transition duration-300 ${showTuple ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showTuple ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Tuple Concepts */}
                {showTuple && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Tuple Concepts */}
                        {tupleConcepts.map((concept) => (
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
                                    <div className="pt-4 pb-2 pl-8 text-gray-600">
                                        <p className="font-medium">Explanation (English):</p>
                                        <p>{concept.explanationEnglish}</p>
                                        <p className="mt-2 font-medium">Explanation (Bangla):</p>
                                        <p>{concept.explanationBangla}</p>
                                        <p className="mt-2 font-medium">Code:</p>
                                        <pre className="bg-gray-200 p-4 rounded-lg">{concept.code}</pre>
                                        <p className="mt-2 font-medium">Input:</p>
                                        <p>{concept.input}</p>
                                        <p className="mt-2 font-medium">Output:</p>
                                        <pre className="bg-gray-200 p-4 rounded-lg">{concept.output}</pre>
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

export default Touple;
