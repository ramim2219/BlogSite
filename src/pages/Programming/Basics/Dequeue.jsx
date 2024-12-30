import React, { useEffect, useState } from 'react';
import { getDequeDocumentation } from '../../../utils/Dequeue'; // Importing the getDequeDocumentation function
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Dequeue = () => {
    const [deque, setDeque] = useState([]);
    const [showDeque, setShowDeque] = useState(false); // To toggle main dropdown
    const [expandedDeque, setExpandedDeque] = useState([]); // Track expanded individual deque topics
    const [selectedDeque, setSelectedDeque] = useState([]); // Track selected deque topics

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDequeDocumentation();
            setDeque(data);
        };
        fetchData();
    }, []);

    const handleToggleDeque = () => {
        setShowDeque(prevState => !prevState); // Toggle visibility of all deque topics
    };

    const handleToggleDequeDetails = (dequeTopic) => {
        setExpandedDeque((prevExpanded) => {
            if (prevExpanded.includes(dequeTopic)) {
                return prevExpanded.filter((topic) => topic !== dequeTopic);
            } else {
                return [...prevExpanded, dequeTopic];
            }
        });
    };

    const handleCheckboxChange = (dequeTopic) => {
        setSelectedDeque((prevSelected) => {
            if (prevSelected.includes(dequeTopic)) {
                return prevSelected.filter((topic) => topic !== dequeTopic);
            } else {
                return [...prevSelected, dequeTopic];
            }
        });
    };

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            {/* Button to toggle show/hide all deque topics */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleDeque}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Deque Concepts</span>
                    <span className={`transform transition duration-300 ${showDeque ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showDeque ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Deque Concepts */}
                {showDeque && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Deque Topics */}
                        {deque.map((topic) => (
                            <div key={topic.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                {/* Button to show/hide individual deque details */}
                                <div
                                    className="flex items-center"
                                    onClick={() => handleToggleDequeDetails(topic.topic)}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        onChange={() => handleCheckboxChange(topic.topic)}
                                        checked={selectedDeque.includes(topic.topic)}
                                    />
                                    <span className="text-lg text-gray-700">{topic.topic}</span>
                                    <span
                                        className={`ml-2 transform transition duration-300 ${expandedDeque.includes(topic.topic) ? 'rotate-180' : ''}`}
                                    >
                                        {/* Using Heroicons for the expand/collapse icon */}
                                        {expandedDeque.includes(topic.topic) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                        )}
                                    </span>
                                </div>

                                {/* Show details of the deque topic when it is expanded */}
                                {expandedDeque.includes(topic.topic) && (
                                    <div className="bg-white rounded-lg shadow-md p-4 mt-4 border-l-4 border-gray-200">
                                        <p className="text-lg text-gray-800"><strong>Explanation (English):</strong> {topic.explanationEnglish}</p>
                                        <p className="text-lg text-gray-800"><strong>Explanation (Bangla):</strong> {topic.explanationBangla}</p>
                                        <p className="text-lg text-gray-800"><strong>Example Code:</strong></p>
                                        <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">{topic.code}</pre>
                                        <p className="text-lg text-gray-800"><strong>Input:</strong> {topic.input}</p>
                                        <p className="text-lg text-gray-800"><strong>Output:</strong> {topic.output}</p>
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

export default Dequeue;
