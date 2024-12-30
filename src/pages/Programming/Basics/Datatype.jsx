import React, { useEffect, useState } from 'react';
import { getDatatype } from '../../../utils/Datatype';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Datatype = () => {
    const [datatypes, setDatatypes] = useState([]);
    const [showDatatypes, setShowDatatypes] = useState(false); // To toggle main dropdown
    const [expandedDatatypes, setExpandedDatatypes] = useState([]); // Track expanded individual datatypes
    const [selectedDatatypes, setSelectedDatatypes] = useState([]); // Track selected datatypes

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatatype();
            setDatatypes(data);
        };
        fetchData();
    }, []);

    const handleToggleDatatypes = () => {
        setShowDatatypes(prevState => !prevState); // Toggle visibility of all datatypes
    };

    const handleToggleDatatypeDetails = (datatypeName) => {
        setExpandedDatatypes((prevExpanded) => {
            if (prevExpanded.includes(datatypeName)) {
                return prevExpanded.filter((name) => name !== datatypeName);
            } else {
                return [...prevExpanded, datatypeName];
            }
        });
    };

    const handleCheckboxChange = (datatypeName) => {
        setSelectedDatatypes((prevSelected) => {
            if (prevSelected.includes(datatypeName)) {
                return prevSelected.filter((name) => name !== datatypeName);
            } else {
                return [...prevSelected, datatypeName];
            }
        });
    };

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            {/* Button to toggle show/hide all datatypes */}
            <div className="relative mb-6">
                <button
                    onClick={handleToggleDatatypes}
                    className="bg-blue-500 text-white p-3 rounded-lg mb-6 hover:bg-blue-600 transition duration-200 w-full text-left flex items-center justify-between"
                >
                    <span className="text-lg font-semibold">Datatype</span>
                    <span className={`transform transition duration-300 ${showDatatypes ? 'rotate-180' : ''}`}>
                        {/* Using Heroicons for dropdown icon */}
                        {showDatatypes ? (
                            <ChevronUpIcon className="w-5 h-5 text-white" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        )}
                    </span>
                </button>

                {/* Main Dropdown for Datatypes */}
                {showDatatypes && (
                    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-96 overflow-y-auto z-10">
                        {/* Individual Datatypes */}
                        {datatypes.map((datatype) => (
                            <div key={datatype.id} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                {/* Button to show/hide individual datatype details */}
                                <div
                                    className="flex items-center"
                                    onClick={() => handleToggleDatatypeDetails(datatype.name)}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        onChange={() => handleCheckboxChange(datatype.name)}
                                        checked={selectedDatatypes.includes(datatype.name)}
                                    />
                                    <span className="text-lg text-gray-700">{datatype.name}</span>
                                    <span
                                        className={`ml-2 transform transition duration-300 ${expandedDatatypes.includes(datatype.name) ? 'rotate-180' : ''}`}
                                    >
                                        {/* Using Heroicons for the expand/collapse icon */}
                                        {expandedDatatypes.includes(datatype.name) ? (
                                            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                        )}
                                    </span>
                                </div>

                                {/* Show details of the datatype when it is expanded */}
                                {expandedDatatypes.includes(datatype.name) && (
                                    <div className="bg-white rounded-lg shadow-md p-4 mt-4 border-l-4 border-gray-200">
                                        <p className="text-lg text-gray-800"><strong>Type:</strong> {datatype.type}</p>
                                        <p className="text-lg text-gray-800"><strong>Explanation (English):</strong> {datatype.explainEnglish}</p>
                                        <p className="text-lg text-gray-800"><strong>Explanation (Bangla):</strong> {datatype.explainBangla}</p>
                                        <p className="text-lg text-gray-800"><strong>Example Code:</strong></p>
                                        <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">{datatype.code}</pre>
                                        <p className="text-lg text-gray-800"><strong>Input:</strong> {datatype.input}</p>
                                        <p className="text-lg text-gray-800"><strong>Output:</strong> {datatype.output}</p>
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

export default Datatype;
