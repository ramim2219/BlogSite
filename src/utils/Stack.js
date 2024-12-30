export const getStackDocumentation = async () => {
    const stackConcepts = [
      {
        id: 1,
        topic: "Introduction to Stack",
        explanationEnglish:
          "A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The element that is inserted last is the one to be removed first. It supports basic operations like push, pop, and peek.",
        explanationBangla:
          "স্ট্যাক একটি লিনিয়ার ডেটা স্ট্রাকচার যা 'লাস্ট ইন, ফার্স্ট আউট' (LIFO) নীতিকে অনুসরণ করে। যে উপাদানটি সর্বশেষে সন্নিবেশিত হয় সেটিই প্রথমে সরানো হয়। এটি মৌলিক অপারেশন যেমন পুশ, পপ এবং পিক সমর্থন করে।",
        code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
  
      // Pushing elements to the stack
      s.push(10);
      s.push(20);
      s.push(30);
  
      // Displaying the top element
      cout << "Top element: " << s.top() << endl;
  
      // Popping an element from the stack
      s.pop();
  
      // Displaying the top element after popping
      cout << "Top element after pop: " << s.top() << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Top element: 30
  Top element after pop: 20`,
      },
      {
        id: 2,
        topic: "Push Operation (Inserting an Element)",
        explanationEnglish:
          "The `push()` method is used to insert an element at the top of the stack. The element is added to the stack in the order it is pushed, and it will be the first one to be removed during the pop operation.",
        explanationBangla:
          "`push()` মেথডটি স্ট্যাকে একটি উপাদান সন্নিবেশ করতে ব্যবহৃত হয়। উপাদানটি স্ট্যাকে সন্নিবেশ করার সময় তা প্রথমে সন্নিবেশিত হবে এবং পপ অপারেশন সময় এটি প্রথমে সরানো হবে।",
        code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
  
      s.push(5);  // Push 5 to the stack
      s.push(10); // Push 10 to the stack
      s.push(15); // Push 15 to the stack
  
      cout << "Top element: " << s.top() << endl;  // 15, as it is the last element pushed
  
      return 0;
  }`,
        input: "None",
        output: `Top element: 15`,
      },
      {
        id: 3,
        topic: "Pop Operation (Removing an Element)",
        explanationEnglish:
          "The `pop()` method is used to remove the top element from the stack. After a pop operation, the next element becomes the new top of the stack.",
        explanationBangla:
          "`pop()` মেথডটি স্ট্যাক থেকে শীর্ষ উপাদানটি সরাতে ব্যবহৃত হয়। একটি পপ অপারেশন পর, পরবর্তী উপাদানটি নতুন শীর্ষ উপাদান হয়ে ওঠে।",
        code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
  
      s.push(5);
      s.push(10);
      s.push(15);
  
      s.pop();  // Removes the top element (15)
  
      cout << "Top element after pop: " << s.top() << endl;  // 10
  
      return 0;
  }`,
        input: "None",
        output: `Top element after pop: 10`,
      },
      {
        id: 4,
        topic: "Top Operation (Accessing the Top Element)",
        explanationEnglish:
          "The `top()` method is used to access the top element of the stack without removing it. This operation does not modify the stack.",
        explanationBangla:
          "`top()` মেথডটি স্ট্যাকের শীর্ষ উপাদানটি অ্যাক্সেস করতে ব্যবহৃত হয়, এটি সরানো ছাড়া। এই অপারেশনটি স্ট্যাকটি পরিবর্তন করে না।",
        code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
  
      s.push(5);
      s.push(10);
      s.push(15);
  
      cout << "Top element: " << s.top() << endl;  // 15
  
      return 0;
  }`,
        input: "None",
        output: `Top element: 15`,
      },
      {
        id: 5,
        topic: "Size of the Stack",
        explanationEnglish:
          "The `size()` method is used to get the number of elements in the stack. It returns the total number of elements present in the stack.",
        explanationBangla:
          "`size()` মেথডটি স্ট্যাকে উপাদানের সংখ্যা পেতে ব্যবহৃত হয়। এটি স্ট্যাকে উপস্থিত মোট উপাদানের সংখ্যা রিটার্ন করে।",
        code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
  
      s.push(5);
      s.push(10);
      s.push(15);
  
      cout << "Size of the stack: " << s.size() << endl;  // 3
  
      return 0;
  }`,
        input: "None",
        output: `Size of the stack: 3`,
      },
      {
        id: 6,
        topic: "Empty Check",
        explanationEnglish:
          "The `empty()` method is used to check whether the stack is empty or not. It returns `true` if the stack is empty, and `false` if it contains elements.",
        explanationBangla:
          "`empty()` মেথডটি চেক করতে ব্যবহৃত হয় যে স্ট্যাকটি খালি কি না। এটি `true` রিটার্ন করে যদি স্ট্যাকটি খালি থাকে, এবং `false` যদি সেটি উপাদান ধারণ করে।",
        code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
  
      s.push(5);
      s.push(10);
  
      // Empty check
      if (s.empty()) {
          cout << "Stack is empty." << endl;
      } else {
          cout << "Stack is not empty." << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `Stack is not empty.`,
      },
      {
        id: 7,
        topic: "Stack Overflow (Manually Checking Overflow)",
        explanationEnglish:
          "In C++, stack size is dynamically managed. However, in some cases, you may need to manually check for stack overflow (e.g., when implementing your own stack). This can be done by checking if the stack has reached its maximum size.",
        explanationBangla:
          "C++ এ, স্ট্যাক আকার গতিশীলভাবে পরিচালিত হয়। তবে, কিছু ক্ষেত্রে, আপনাকে ম্যানুয়ালি স্ট্যাক ওভারফ্লো চেক করতে হতে পারে (যেমন, যখন আপনি নিজস্ব স্ট্যাক বাস্তবায়ন করছেন)। এটি করা যেতে পারে যদি আপনি চেক করেন যে স্ট্যাকটি তার সর্বাধিক আকারে পৌঁছেছে কিনা।",
        code: `#include <iostream>
  #include <stack>
  using namespace std;
  
  int main() {
      stack<int> s;
      int maxSize = 10;
  
      // Manually checking overflow (for educational purpose)
      if (s.size() >= maxSize) {
          cout << "Stack overflow!" << endl;
      } else {
          s.push(15);  // Proceeding with push if not full
      }
  
      return 0;
  }`,
        input: "None",
        output: `None (No overflow in this case)`,
      },
    ];
  
    return stackConcepts;
  };
  