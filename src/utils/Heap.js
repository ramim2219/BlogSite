export const getHeapDocumentation = async () => {
    const heapConcepts = [
      {
        id: 1,
        topic: "Introduction to Heap",
        explanationEnglish:
          "A heap is a specialized binary tree-based data structure that satisfies the heap property. It is used in implementing priority queues, where the highest (or lowest) priority element is always at the root.",
        explanationBangla:
          "হিপ একটি বিশেষ ধরনের বাইনারি ট্রি ভিত্তিক ডেটা স্ট্রাকচার যা হিপ প্রপার্টি পূরণ করে। এটি প্রায়শই প্রায়োরিটি কিউ বাস্তবায়নে ব্যবহৃত হয়, যেখানে সর্বোচ্চ (অথবা সর্বনিম্ন) প্রাধান্য উপাদানটি সর্বদা রুটে থাকে।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq; // Max-heap
      pq.push(10);
      pq.push(30);
      pq.push(20);
      
      cout << "Top Element: " << pq.top() << endl;
      pq.pop();
      cout << "After Pop: " << pq.top() << endl;
      return 0;
  }`,
        input: "None",
        output: `Top Element: 30
  After Pop: 20`,
      },
      {
        id: 2,
        topic: "Max-Heap and Min-Heap",
        explanationEnglish:
          "In a max-heap, the largest element is at the root. In a min-heap, the smallest element is at the root. C++ Standard Library's `priority_queue` is by default a max-heap, but it can be modified to work as a min-heap.",
        explanationBangla:
          "একটি ম্যাক্স-হিপে, বৃহত্তম উপাদানটি রুটে থাকে। একটি মিন-হিপে, সর্বনিম্ন উপাদানটি রুটে থাকে। C++ স্ট্যান্ডার্ড লাইব্রেরির `priority_queue` ডিফল্টভাবে একটি ম্যাক্স-হিপ, তবে এটিকে মিন-হিপ হিসাবে কাজ করতে পরিবর্তন করা যেতে পারে।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int, vector<int>, greater<int>> pq; // Min-heap
      pq.push(30);
      pq.push(10);
      pq.push(20);
      
      cout << "Top Element: " << pq.top() << endl;
      pq.pop();
      cout << "After Pop: " << pq.top() << endl;
      return 0;
  }`,
        input: "None",
        output: `Top Element: 10
  After Pop: 20`,
      },
      {
        id: 3,
        topic: "Heap Operations: Insert and Remove",
        explanationEnglish:
          "Inserting and removing elements from a heap is done using `push` and `pop` functions. Inserting into a heap maintains the heap property, while removing the top element will restructure the heap.",
        explanationBangla:
          "একটি হিপে উপাদান সন্নিবেশ এবং মুছে ফেলা `push` এবং `pop` ফাংশন ব্যবহার করে করা হয়। একটি হিপে সন্নিবেশ করা হিপ প্রপার্টি বজায় রাখে, এবং টপ উপাদান মুছে ফেললে হিপ পুনঃগঠন হয়।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq;
      pq.push(10);
      pq.push(30);
      pq.push(20);
  
      cout << "Top Element before Pop: " << pq.top() << endl;
      pq.pop(); // Remove the top element
      cout << "Top Element after Pop: " << pq.top() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Top Element before Pop: 30
  Top Element after Pop: 20`,
      },
      {
        id: 4,
        topic: "Heapify an Array",
        explanationEnglish:
          "An array can be converted into a heap using the `make_heap` function. This function rearranges the elements in the array to satisfy the heap property.",
        explanationBangla:
          "একটি অ্যারে হিপে রূপান্তরিত করা যেতে পারে `make_heap` ফাংশন ব্যবহার করে। এই ফাংশনটি অ্যারের উপাদানগুলো পুনর্বিন্যাস করে যাতে হিপ প্রপার্টি পূর্ণ হয়।",
        code: `#include <iostream>
  #include <vector>
  #include <algorithm>
  using namespace std;
  
  int main() {
      vector<int> arr = {10, 20, 30, 5, 15};
      make_heap(arr.begin(), arr.end()); // Make a max-heap
  
      cout << "Top Element: " << arr.front() << endl;
  
      return 0;
  }`,
        input: "None",
        output: "Top Element: 30",
      },
      {
        id: 5,
        topic: "Heap Sort",
        explanationEnglish:
          "Heap Sort is a comparison-based sorting algorithm that uses a binary heap to sort elements in either ascending or descending order. It first converts the array into a heap and then repeatedly removes the top element.",
        explanationBangla:
          "হিপ সোর্ট হল একটি তুলনামূলকভিত্তিক সাজানোর অ্যালগরিদম যা বাইনারি হিপ ব্যবহার করে উপাদানগুলোকে ক্রমাগত বা অবতীর্ণ ক্রমে সাজায়। এটি প্রথমে অ্যারেটি একটি হিপে রূপান্তরিত করে এবং তারপর টপ উপাদানটি বারবার মুছে ফেলে।",
        code: `#include <iostream>
  #include <vector>
  #include <algorithm>
  using namespace std;
  
  int main() {
      vector<int> arr = {10, 20, 30, 5, 15};
  
      // Convert array into a heap
      make_heap(arr.begin(), arr.end());
      
      // Sort the heap
      sort_heap(arr.begin(), arr.end());
  
      cout << "Sorted Array: ";
      for (int x : arr) {
          cout << x << " ";
      }
  
      return 0;
  }`,
        input: "None",
        output: "Sorted Array: 5 10 15 20 30",
      },
      {
        id: 6,
        topic: "Removing All Elements from Heap",
        explanationEnglish:
          "All elements can be removed from the heap using the `pop` function until the heap is empty.",
        explanationBangla:
          "সমস্ত উপাদান হিপ থেকে মুছে ফেলা যেতে পারে `pop` ফাংশন ব্যবহার করে যতক্ষণ না হিপটি খালি হয়।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq;
      pq.push(10);
      pq.push(20);
      pq.push(30);
  
      // Remove all elements
      while (!pq.empty()) {
          cout << pq.top() << " ";
          pq.pop();
      }
  
      return 0;
  }`,
        input: "None",
        output: "30 20 10",
      },
      {
        id: 7,
        topic: "Checking Heap Size and Top Element",
        explanationEnglish:
          "You can check the size of the heap using `size` and view the top element using `top`.",
        explanationBangla:
          "আপনি `size` ব্যবহার করে হিপের আকার পরীক্ষা করতে পারেন এবং `top` ব্যবহার করে শীর্ষ উপাদান দেখতে পারেন।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq;
      pq.push(5);
      pq.push(10);
      pq.push(15);
  
      cout << "Heap Size: " << pq.size() << endl;
      cout << "Top Element: " << pq.top() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Heap Size: 3
  Top Element: 15`,
      },
    ];
  
    return heapConcepts;
  };
  