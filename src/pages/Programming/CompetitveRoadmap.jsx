import React from 'react';

const CompetitveRoadmap = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Competitive Programming Roadmap</h2>

      <div className="space-y-8">
        {/* Understanding the Basics */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding the Basics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">Data Types: Integer, Float, String, etc.</li>
            <li className="text-gray-700">Loops & Conditionals: 'for', 'while', 'if-else' statements.</li>
            <li className="text-gray-700">Functions & Recursion: Understanding how functions work, including recursive functions.</li>
            <li className="text-gray-700">Basic Input/Output: Handling user input and output effectively.</li>
          </ul>
        </div>

        {/* Mastering Data Structures */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mastering Data Structures</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">Arrays and Strings</li>
            <li className="text-gray-700">Linked Lists (Singly, Doubly)</li>
            <li className="text-gray-700">Stacks and Queues</li>
            <li className="text-gray-700">Hashing (HashMaps, HashSets)</li>
            <li className="text-gray-700">Trees (Binary Trees, Binary Search Trees, AVL Trees)</li>
            <li className="text-gray-700">Graphs (Directed, Undirected, Weighted)</li>
            <li className="text-gray-700">Vectors</li>
            <li className="text-gray-700">Sets</li>
            <li className="text-gray-700">Maps</li>
            <li className="text-gray-700">Tuples</li>
          </ul>
        </div>

        {/* Learning Algorithms */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Learning Algorithms</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">Sorting Algorithms: Merge Sort, Quick Sort, Bubble Sort, etc.</li>
            <li className="text-gray-700">Searching Algorithms: Binary Search, Linear Search.</li>
            <li className="text-gray-700">Graph Algorithms: BFS, DFS, Dijkstra's Algorithm.</li>
            <li className="text-gray-700">Dynamic Programming: Understanding the importance of breaking problems into subproblems.</li>
            <li className="text-gray-700">Greedy Algorithms: Always choosing the best available option at each step.</li>
            <li className="text-gray-700">Divide and Conquer: Breaking a problem down into smaller subproblems.</li>
          </ul>
        </div>

        {/* Problem Solving Practice */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Problem Solving Practice</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">Solve problems daily: Start with easier problems and gradually increase the difficulty.</li>
            <li className="text-gray-700">Participate in contests: Engage in regular coding contests on platforms like Codeforces, LeetCode, and AtCoder.</li>
            <li className="text-gray-700">Review and learn from others' solutions: After solving a problem, analyze other solutions to learn new techniques and optimizations.</li>
            <li className="text-gray-700">Time Management: During contests, practice solving problems under time pressure.</li>
          </ul>
        </div>

        {/* Advanced Topics */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Topics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">Number Theory: Prime numbers, GCD, LCM, and modular arithmetic.</li>
            <li className="text-gray-700">Advanced Dynamic Programming: Learn advanced techniques like DP on Trees, DP with Bitmasking, etc.</li>
            <li className="text-gray-700">Graph Theory: Advanced algorithms such as Floyd-Warshall, Bellman-Ford, and more.</li>
            <li className="text-gray-700">String Matching: Knuth-Morris-Pratt, Z-Algorithm, etc.</li>
            <li className="text-gray-700">Game Theory: Solve problems related to game strategy and combinatorial games.</li>
          </ul>
        </div>

        {/* Resources for Learning */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Resources for Learning</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">Books: "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein.</li>
            <li className="text-gray-700">Online Platforms: Codeforces, LeetCode, AtCoder, HackerRank, Codechef.</li>
            <li className="text-gray-700">Videos: Follow tutorials on YouTube and Coursera for a visual understanding.</li>
            <li className="text-gray-700">Communities: Join coding communities like Stack Overflow, Reddit, and competitive programming forums for discussions and advice.</li>
          </ul>
        </div>

        {/* Mindset for Success */}
        <div className="bg-white mb-2 p-6 rounded-lg shadow-lg border-l-4 border-blue-500 ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mindset for Success</h3>
          <p className="text-gray-700 mb-4">Developing the right mindset is crucial to success in competitive programming. Focus on the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">Perseverance: CP requires consistent practice. Don't give up after facing challenges.</li>
            <li className="text-gray-700">Analytical Thinking: Break problems down into manageable parts before coding.</li>
            <li className="text-gray-700">Learn from Mistakes: Analyze errors in your solutions and improve your approach.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h3>
          <p className="text-gray-700">I have discussed all the topics. Check the Basics of CPP and Topic List. Happy Coding!</p>
        </div>
      </div>
    </div>
  );
};

export default CompetitveRoadmap;
