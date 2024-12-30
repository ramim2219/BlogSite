export const getPriorityQueueDocumentation = async () => {
    const priorityQueueConcepts = [
      {
        id: 1,
        topic: "Introduction to Priority Queue",
        explanationEnglish:
          "A priority queue is a data structure that stores elements in an order based on priority. Each element in a priority queue is associated with a priority value, and elements with higher priority are dequeued before elements with lower priority. Priority queues can be implemented using heaps (usually a binary heap).",
        explanationBangla:
          "একটি প্রায়োরিটি কিউ একটি ডেটা স্ট্রাকচার যা উপাদানগুলি প্রায়োরিটির ভিত্তিতে একটি অর্ডারে সংরক্ষণ করে। একটি প্রায়োরিটি কিউয়ের প্রতিটি উপাদান একটি প্রায়োরিটি মানের সাথে যুক্ত থাকে, এবং উচ্চ প্রায়োরিটি সহ উপাদানগুলি কম প্রায়োরিটি সহ উপাদানগুলির আগে ডিকিউ করা হয়। প্রায়োরিটি কিউ সাধারণত হিপ (বিশেষত একটি বাইনারি হিপ) ব্যবহার করে বাস্তবায়িত করা হয়।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq;
  
      // Inserting elements
      pq.push(10);
      pq.push(5);
      pq.push(20);
  
      // Displaying elements of priority queue
      while (!pq.empty()) {
          cout << pq.top() << " ";
          pq.pop();
      }
  
      return 0;
  }`,
        input: "None",
        output: `20 10 5`,
      },
      {
        id: 2,
        topic: "Inserting Elements in Priority Queue",
        explanationEnglish:
          "Elements are inserted into a priority queue using the `push()` method. When elements are inserted, the priority queue rearranges them in such a way that the highest priority element is always at the front.",
        explanationBangla:
          "উপাদানগুলি প্রায়োরিটি কিউতে `push()` মেথড ব্যবহার করে সন্নিবেশ করা হয়। যখন উপাদানগুলি সন্নিবেশ করা হয়, প্রায়োরিটি কিউ সেগুলি এমনভাবে পুনঃব্যবস্থা করে যে সর্বোচ্চ প্রায়োরিটি সহ উপাদানটি সব সময় সামনে থাকে।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq;
  
      pq.push(30);
      pq.push(10);
      pq.push(50);
  
      cout << "Priority Queue top element: " << pq.top() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Priority Queue top element: 50`,
      },
      {
        id: 3,
        topic: "Removing Elements from Priority Queue",
        explanationEnglish:
          "Elements can be removed from the priority queue using the `pop()` method. This removes the element with the highest priority (the element at the front of the queue). After the top element is removed, the next highest priority element becomes the new top.",
        explanationBangla:
          "উপাদানগুলি প্রায়োরিটি কিউ থেকে `pop()` মেথড ব্যবহার করে সরানো যেতে পারে। এটি সর্বোচ্চ প্রায়োরিটি সহ উপাদান (যা কিউয়ের সামনে থাকে) সরিয়ে দেয়। একটি উপাদান সরানোর পর, পরবর্তী সর্বোচ্চ প্রায়োরিটি সহ উপাদানটি নতুন শীর্ষ হয়ে ওঠে।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq;
  
      pq.push(40);
      pq.push(60);
      pq.push(20);
  
      cout << "Before popping: " << pq.top() << endl;
      pq.pop();
      cout << "After popping: " << pq.top() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Before popping: 60
  After popping: 40`,
      },
      {
        id: 4,
        topic: "Checking the Size of the Priority Queue",
        explanationEnglish:
          "You can check the number of elements in the priority queue using the `size()` method. It returns the number of elements in the queue.",
        explanationBangla:
          "আপনি `size()` মেথড ব্যবহার করে প্রায়োরিটি কিউতে উপাদানগুলির সংখ্যা পরীক্ষা করতে পারেন। এটি কিউতে উপাদানগুলির সংখ্যা রিটার্ন করে।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq;
  
      pq.push(80);
      pq.push(90);
      pq.push(10);
  
      cout << "Size of Priority Queue: " << pq.size() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Size of Priority Queue: 3`,
      },
      {
        id: 5,
        topic: "Checking if the Priority Queue is Empty",
        explanationEnglish:
          "You can check whether the priority queue is empty or not using the `empty()` method. It returns `true` if the queue is empty, and `false` otherwise.",
        explanationBangla:
          "আপনি `empty()` মেথড ব্যবহার করে পরীক্ষা করতে পারেন প্রায়োরিটি কিউ খালি কি না। এটি `true` রিটার্ন করে যদি কিউটি খালি থাকে এবং অন্যথায় `false` রিটার্ন করে।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      priority_queue<int> pq;
  
      if (pq.empty()) {
          cout << "Priority Queue is empty." << endl;
      } else {
          cout << "Priority Queue is not empty." << endl;
      }
  
      pq.push(100);
  
      if (pq.empty()) {
          cout << "Priority Queue is empty." << endl;
      } else {
          cout << "Priority Queue is not empty." << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `Priority Queue is empty.
  Priority Queue is not empty.`,
      },
      {
        id: 6,
        topic: "Using Custom Comparator in Priority Queue",
        explanationEnglish:
          "You can use a custom comparator to change the order of the elements in a priority queue. This allows you to prioritize lower values over higher ones (min-heap behavior) or use any custom logic for priority.",
        explanationBangla:
          "আপনি একটি কাস্টম কম্প্যারেটর ব্যবহার করে প্রায়োরিটি কিউতে উপাদানগুলির অর্ডার পরিবর্তন করতে পারেন। এটি আপনাকে উচ্চ মানের উপাদানগুলির তুলনায় নিম্ন মানকে প্রাধান্য দেওয়ার অনুমতি দেয় (min-heap আচরণ) অথবা প্রায়োরিটির জন্য যেকোন কাস্টম লজিক ব্যবহার করতে পারে।",
        code: `#include <iostream>
  #include <queue>
  #include <vector>
  using namespace std;
  
  struct Compare {
      bool operator()(int a, int b) {
          return a > b;  // Min-heap behavior
      }
  };
  
  int main() {
      priority_queue<int, vector<int>, Compare> pq;
  
      pq.push(5);
      pq.push(1);
      pq.push(3);
  
      cout << "Priority Queue elements (min-heap): " << pq.top() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Priority Queue elements (min-heap): 1`,
      },
      {
        id: 7,
        topic: "Priority Queue with Pairs",
        explanationEnglish:
          "Priority queues can also store pairs, with the priority based on the first element of the pair. The second element can be any data type.",
        explanationBangla:
          "প্রায়োরিটি কিউগুলি জোড়া (pair) সংরক্ষণ করতে পারে, যেখানে প্রায়োরিটি পেয়ারের প্রথম উপাদানের ভিত্তিতে হয়। দ্বিতীয় উপাদান যেকোন ডেটা টাইপ হতে পারে।",
        code: `#include <iostream>
  #include <queue>
  #include <utility>
  using namespace std;
  
  int main() {
      priority_queue<pair<int, string>> pq;
  
      pq.push(make_pair(10, "Alice"));
      pq.push(make_pair(20, "Bob"));
      pq.push(make_pair(5, "Charlie"));
  
      while (!pq.empty()) {
          cout << pq.top().second << " ";
          pq.pop();
      }
  
      return 0;
  }`,
        input: "None",
        output: `Bob Alice Charlie`,
      },
    ];
  
    return priorityQueueConcepts;
  };
  