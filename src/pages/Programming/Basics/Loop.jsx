import React, { useEffect, useState } from 'react';
import { getLoopDocumentation } from '../../../utils/Loop'; // Importing the getLoopDocumentation function
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Loop = () => {
    const [loops, setLoops] = useState([]);
    const [showLoops, setShowLoops] = useState(false); // To toggle main dropdown
    const [expandedLoops, setExpandedLoops] = useState([]); // Track expanded individual loop topics
    const [selectedLoops, setSelectedLoops] = useState([]); // Track selected loops

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLoopDocumentation();
            setLoops(data);
        };
        fetchData();
    }, []);

    const handleToggleLoops = () => {
        setShowLoops(prevState => !prevState); // Toggle visibility of all loops
    };

    const handleToggleLoopDetails = (loopTopic) => {
        setExpandedLoops((prevExpanded) => {
            if (prevExpanded.includes(loopTopic)) {
                return prevExpanded.filter((topic) => topic !== loopTopic);
            } else {
                return [...prevExpanded, loopTopic];
            }
        });
    };

    const handleCheckboxChange = (loopTopic) => {
        setSelectedLoops((prevSelected) => {
            if (prevSelected.includes(loopTopic)) {
                return prevSelected.filter((topic) => topic !== loopTopic);
            } else {
                return [...prevSelected, loopTopic];
            }
        });
    };

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            {/* Button to toggle show/hide all loops */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleLoops}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Loop Concepts</span>
                    <span className={`transform transition duration-300 ${showLoops ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showLoops ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Loop Concepts */}
                {showLoops && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Loop Topics */}
                        {loops.map((loop) => (
                            <div key={loop.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                {/* Button to show/hide individual loop details */}
                                <div
                                    className="flex items-center"
                                    onClick={() => handleToggleLoopDetails(loop.topic)}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        onChange={() => handleCheckboxChange(loop.topic)}
                                        checked={selectedLoops.includes(loop.topic)}
                                    />
                                    <span className="text-lg text-gray-700">{loop.topic}</span>
                                    <span
                                        className={`ml-2 transform transition duration-300 ${expandedLoops.includes(loop.topic) ? 'rotate-180' : ''}`}
                                    >
                                        {/* Using Heroicons for the expand/collapse icon */}
                                        {expandedLoops.includes(loop.topic) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                        )}
                                    </span>
                                </div>

                                {/* Show details of the loop when it is expanded */}
                                {expandedLoops.includes(loop.topic) && (
                                    <div className="bg-white rounded-lg shadow-md p-4 mt-4 border-l-4 border-gray-200">
                                        <p className="text-lg text-gray-800"><strong>Explanation (English):</strong> {loop.explanationEnglish}</p>
                                        <p className="text-lg text-gray-800"><strong>Explanation (Bangla):</strong> {loop.explanationBangla}</p>
                                        <p className="text-lg text-gray-800"><strong>Example Code:</strong></p>
                                        <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">{loop.code}</pre>
                                        <p className="text-lg text-gray-800"><strong>Input:</strong> {loop.input}</p>
                                        <p className="text-lg text-gray-800"><strong>Output:</strong> {loop.output}</p>
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

export default Loop;
