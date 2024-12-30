import React, { useEffect, useState } from 'react';
import { getHeapDocumentation } from '../../../utils/Heap'; // Importing the getHeapDocumentation function
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Heap = () => {
    const [heap, setHeap] = useState([]);
    const [showHeap, setShowHeap] = useState(false); // To toggle main dropdown
    const [expandedHeap, setExpandedHeap] = useState([]); // Track expanded individual heap topics
    const [selectedHeap, setSelectedHeap] = useState([]); // Track selected heap topics

    useEffect(() => {
        const fetchData = async () => {
            const data = await getHeapDocumentation();
            setHeap(data);
        };
        fetchData();
    }, []);

    const handleToggleHeap = () => {
        setShowHeap(prevState => !prevState); // Toggle visibility of all heap topics
    };

    const handleToggleHeapDetails = (heapTopic) => {
        setExpandedHeap((prevExpanded) => {
            if (prevExpanded.includes(heapTopic)) {
                return prevExpanded.filter((topic) => topic !== heapTopic);
            } else {
                return [...prevExpanded, heapTopic];
            }
        });
    };

    const handleCheckboxChange = (heapTopic) => {
        setSelectedHeap((prevSelected) => {
            if (prevSelected.includes(heapTopic)) {
                return prevSelected.filter((topic) => topic !== heapTopic);
            } else {
                return [...prevSelected, heapTopic];
            }
        });
    };

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            {/* Button to toggle show/hide all heap topics */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleHeap}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Heap Concepts</span>
                    <span className={`transform transition duration-300 ${showHeap ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showHeap ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Heap Concepts */}
                {showHeap && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Heap Topics */}
                        {heap.map((topic) => (
                            <div key={topic.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                {/* Button to show/hide individual heap details */}
                                <div
                                    className="flex items-center"
                                    onClick={() => handleToggleHeapDetails(topic.topic)}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        onChange={() => handleCheckboxChange(topic.topic)}
                                        checked={selectedHeap.includes(topic.topic)}
                                    />
                                    <span className="text-lg text-gray-700">{topic.topic}</span>
                                    <span
                                        className={`ml-2 transform transition duration-300 ${expandedHeap.includes(topic.topic) ? 'rotate-180' : ''}`}
                                    >
                                        {/* Using Heroicons for the expand/collapse icon */}
                                        {expandedHeap.includes(topic.topic) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                        )}
                                    </span>
                                </div>

                                {/* Show details of the heap topic when it is expanded */}
                                {expandedHeap.includes(topic.topic) && (
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

export default Heap;
