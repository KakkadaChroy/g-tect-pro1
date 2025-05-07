import React from 'react';

const Pagination = () => {
    return (
        <div className="flex items-center justify-center space-x-2 font-medium">
            <button
                className="flex items-center justify-center w-10 h-10 rounded-md text-gray-500 hover:text-primary"
                aria-label="Previous page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>

            <button
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:text-primary"
                aria-label="Page 1"
            >
                1
            </button>

            <button
                className="flex items-center justify-center w-10 h-10 rounded-full text-primary bg-primary/10"
                aria-label="Page 2"
                aria-current="page"
            >
                2
            </button>

            <button
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:text-primary"
                aria-label="Page 3"
            >
                3
            </button>

            <button
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:text-primary"
                aria-label="Page 4"
            >
                4
            </button>

            <button
                className="flex items-center justify-center w-10 h-10 rounded-md text-gray-500 hover:text-primary"
                aria-label="Next page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;