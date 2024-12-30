export const getQueueDocumentation = async () => {
    const queueConcepts = [
      {
        id: 1,
        topic: "Introduction to Queue",
        explanationEnglish:
          "A queue is a linear data structure that follows the First In First Out (FIFO) principle. The element that is inserted first will be the first one to be removed. Queues are widely used in scenarios such as scheduling processes and handling requests in servers.",
        explanationBangla:
          "একটি কিউ একটি সোজা ডেটা স্ট্রাকচার যা 'প্রথমে প্রবেশ, প্রথমে বের হওয়া' (FIFO) নীতি অনুসরণ করে। যে উপাদানটি প্রথমে সন্নিবেশিত হয়, তা প্রথমে সরানো হবে। কিউগুলি প্রক্রিয়া সিডিউলিং এবং সার্ভারে অনুরোধ পরিচালনার মতো পরিস্থিতিতে ব্যাপকভাবে ব্যবহৃত হয়।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      queue<int> q;
  
      // Inserting elements
      q.push(10);
      q.push(20);
      q.push(30);
  
      // Displaying the front element
      cout << "Front element: " << q.front() << endl;
  
      // Removing elements from the front
      q.pop();
      cout << "Front element after pop: " << q.front() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Front element: 10
  Front element after pop: 20`,
      },
      {
        id: 2,
        topic: "Inserting Elements into Queue",
        explanationEnglish:
          "You can insert elements into the queue using the `push()` method. New elements are added at the back of the queue.",
        explanationBangla:
          "আপনি `push()` মেথড ব্যবহার করে কিউতে উপাদান সন্নিবেশ করতে পারেন। নতুন উপাদানগুলি কিউয়ের পিছনে যুক্ত হয়।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      queue<int> q;
  
      q.push(5);
      q.push(10);
      q.push(15);
  
      cout << "Queue size: " << q.size() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Queue size: 3`,
      },
      {
        id: 3,
        topic: "Removing Elements from Queue",
        explanationEnglish:
          "You can remove elements from the front of the queue using the `pop()` method. This removes the element that was added first (FIFO behavior).",
        explanationBangla:
          "আপনি `pop()` মেথড ব্যবহার করে কিউ থেকে উপাদান সরাতে পারেন। এটি সেই উপাদানটি সরিয়ে দেয় যা প্রথমে সন্নিবেশিত হয়েছিল (FIFO আচরণ)।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      queue<int> q;
  
      q.push(20);
      q.push(30);
      q.push(40);
  
      cout << "Front element before pop: " << q.front() << endl;
  
      q.pop();
  
      cout << "Front element after pop: " << q.front() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Front element before pop: 20
  Front element after pop: 30`,
      },
      {
        id: 4,
        topic: "Accessing Front and Back Elements",
        explanationEnglish:
          "You can access the front element of the queue using the `front()` method and the back element using the `back()` method.",
        explanationBangla:
          "আপনি কিউয়ের সামনে উপাদানটি `front()` মেথড ব্যবহার করে এবং পিছনের উপাদানটি `back()` মেথড ব্যবহার করে অ্যাক্সেস করতে পারেন।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      queue<int> q;
  
      q.push(100);
      q.push(200);
      q.push(300);
  
      cout << "Front element: " << q.front() << endl;
      cout << "Back element: " << q.back() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Front element: 100
  Back element: 300`,
      },
      {
        id: 5,
        topic: "Checking Queue Size",
        explanationEnglish:
          "You can check the size of the queue (the number of elements) using the `size()` method. It returns the total number of elements in the queue.",
        explanationBangla:
          "আপনি `size()` মেথড ব্যবহার করে কিউয়ের আকার (উপাদানের সংখ্যা) পরীক্ষা করতে পারেন। এটি কিউতে মোট উপাদান সংখ্যা রিটার্ন করে।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      queue<int> q;
  
      q.push(15);
      q.push(25);
      q.push(35);
  
      cout << "Size of the queue: " << q.size() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Size of the queue: 3`,
      },
      {
        id: 6,
        topic: "Checking if the Queue is Empty",
        explanationEnglish:
          "You can check whether the queue is empty or not using the `empty()` method. It returns `true` if the queue is empty, and `false` otherwise.",
        explanationBangla:
          "আপনি `empty()` মেথড ব্যবহার করে পরীক্ষা করতে পারেন কিউটি খালি কি না। এটি `true` রিটার্ন করে যদি কিউটি খালি থাকে এবং অন্যথায় `false` রিটার্ন করে।",
        code: `#include <iostream>
  #include <queue>
  using namespace std;
  
  int main() {
      queue<int> q;
  
      if (q.empty()) {
          cout << "Queue is empty." << endl;
      } else {
          cout << "Queue is not empty." << endl;
      }
  
      q.push(10);
      q.push(20);
  
      if (q.empty()) {
          cout << "Queue is empty." << endl;
      } else {
          cout << "Queue is not empty." << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `Queue is empty.
  Queue is not empty.`,
      },
      {
        id: 7,
        topic: "Queue with Multiple Data Types (Using Structure)",
        explanationEnglish:
          "You can use a custom structure (or class) in a queue to store multiple data types. This is useful when you need to queue complex objects.",
        explanationBangla:
          "আপনি কিউতে একাধিক ডেটা টাইপ সংরক্ষণ করতে কাস্টম স্ট্রাকচার (অথবা ক্লাস) ব্যবহার করতে পারেন। এটি তখন দরকারী যখন আপনাকে জটিল অবজেক্ট কিউ করতে হবে।",
        code: `#include <iostream>
  #include <queue>
  #include <string>
  using namespace std;
  
  struct Person {
      string name;
      int age;
  };
  
  int main() {
      queue<Person> q;
  
      Person p1 = {"Alice", 30};
      Person p2 = {"Bob", 25};
      Person p3 = {"Charlie", 35};
  
      q.push(p1);
      q.push(p2);
      q.push(p3);
  
      while (!q.empty()) {
          cout << "Name: " << q.front().name << ", Age: " << q.front().age << endl;
          q.pop();
      }
  
      return 0;
  }`,
        input: "None",
        output: `Name: Alice, Age: 30
  Name: Bob, Age: 25
  Name: Charlie, Age: 35`,
      },
    ];
  
    return queueConcepts;
  };
  