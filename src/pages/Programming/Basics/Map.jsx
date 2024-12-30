import React, { useEffect, useState } from 'react';
import { getMapDocumentation } from '../../../utils/Map'; // Assuming the map.js function is located in utils/Map
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Map = () => {
    const [mapConcepts, setMapConcepts] = useState([]);
    const [showMap, setShowMap] = useState(false); // To toggle main dropdown visibility
    const [expandedConcepts, setExpandedConcepts] = useState([]); // Track expanded individual concepts
    const [selectedConcepts, setSelectedConcepts] = useState([]); // Track selected concepts

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMapDocumentation(); // Fetch map documentation data
            setMapConcepts(data);
        };
        fetchData();
    }, []);

    const handleToggleMap = () => {
        setShowMap(prevState => !prevState); // Toggle visibility of all map concepts
    };

    const handleToggleConceptDetails = (topic) => {
        setExpandedConcepts((prevExpanded) => {
            if (prevExpanded.includes(topic)) {
                return prevExpanded.filter((name) => name !== topic);
            } else {
                return [...prevExpanded, topic];
            }
        });
    };

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
            {/* Button to toggle show/hide all map concepts */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleMap}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Map Concepts</span>
                    <span className={`transform transition duration-300 ${showMap ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showMap ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Map Concepts */}
                {showMap && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Map Concepts */}
                        {mapConcepts.map((concept) => (
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
                                        {/* Arrow icon */}
                                        {expandedConcepts.includes(concept.topic) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-700" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                                        )}
                                    </span>
                                </div>
                                {/* Conditionally render concept details */}
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

export default Map;
