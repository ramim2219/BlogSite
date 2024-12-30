export const getVectorDocumentation = async () => {
    const vectorConcepts = [
      {
        id: 1,
        topic: "Introduction to Vector",
        explanationEnglish:
          "Vectors in C++ are dynamic arrays that can grow and shrink as needed. They are part of the Standard Template Library (STL) and provide a flexible and efficient way to manage collections of data.",
        explanationBangla:
          "C++-এ ভেক্টর হল ডাইনামিক অ্যারে, যা প্রয়োজন অনুযায়ী বৃদ্ধি বা হ্রাস করতে পারে। এগুলি স্ট্যান্ডার্ড টেমপ্লেট লাইব্রেরির (STL) অংশ এবং ডেটা সংগ্রহ পরিচালনার একটি নমনীয় এবং কার্যকর উপায় সরবরাহ করে।",
        code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> numbers; // Declaring a vector
      return 0;
  }`,
        input: "None",
        output: "A vector named 'numbers' is declared.",
      },
      {
        id: 2,
        topic: "Adding Elements to Vector",
        explanationEnglish:
          "Elements can be added to a vector using the `push_back` function, which appends an element to the end of the vector.",
        explanationBangla:
          "`push_back` ফাংশন ব্যবহার করে ভেক্টরে এলিমেন্ট যোগ করা যায়, যা ভেক্টরের শেষে একটি এলিমেন্ট যোগ করে।",
        code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> numbers;
      numbers.push_back(10);
      numbers.push_back(20);
      numbers.push_back(30);
  
      for (int num : numbers) {
          cout << num << " ";
      }
      return 0;
  }`,
        input: "Push 10, 20, 30 to the vector",
        output: "10 20 30",
      },
      {
        id: 3,
        topic: "Accessing Elements in Vector",
        explanationEnglish:
          "Elements in a vector can be accessed using the `at()` function or the subscript operator `[]`. These methods provide a way to get or modify elements by their index.",
        explanationBangla:
          "ভেক্টরের এলিমেন্টগুলি `at()` ফাংশন বা সাবস্ক্রিপ্ট অপারেটর `[]` ব্যবহার করে অ্যাক্সেস করা যায়। এই পদ্ধতিগুলি ইনডেক্স দ্বারা এলিমেন্ট পেতে বা পরিবর্তন করতে দেয়।",
        code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> numbers = {10, 20, 30};
      cout << numbers.at(1) << endl; // Access using at()
      cout << numbers[2] << endl;    // Access using subscript operator
      return 0;
  }`,
        input: "numbers = {10, 20, 30}",
        output: "20\n30",
      },
      {
        id: 4,
        topic: "Removing Elements from Vector",
        explanationEnglish:
          "Elements can be removed from a vector using the `pop_back` function to remove the last element or `erase` to remove an element at a specific position.",
        explanationBangla:
          "`pop_back` ফাংশন ব্যবহার করে ভেক্টরের শেষ এলিমেন্ট সরানো যায় অথবা নির্দিষ্ট অবস্থানের এলিমেন্ট সরানোর জন্য `erase` ব্যবহার করা যায়।",
        code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> numbers = {10, 20, 30, 40};
      numbers.pop_back();          // Removes last element
      numbers.erase(numbers.begin() + 1); // Removes the element at index 1
  
      for (int num : numbers) {
          cout << num << " ";
      }
      return 0;
  }`,
        input: "numbers = {10, 20, 30, 40}",
        output: "10 30",
      },
      {
        id: 5,
        topic: "Sorting a Vector",
        explanationEnglish:
          "A vector can be sorted in ascending or descending order using the `sort` function from the algorithm header. Use `greater<int>()` for descending order.",
        explanationBangla:
          "ভেক্টরকে `algorithm` হেডার থেকে `sort` ফাংশন ব্যবহার করে ঊর্ধ্বগামী বা অবরোহ ক্রমে সাজানো যায়। অবরোহ ক্রমের জন্য `greater<int>()` ব্যবহার করুন।",
        code: `#include <iostream>
  #include <vector>
  #include <algorithm>
  using namespace std;
  
  int main() {
      vector<int> numbers = {40, 10, 30, 20};
      sort(numbers.begin(), numbers.end()); // Ascending order
  
      for (int num : numbers) {
          cout << num << " ";
      }
  
      sort(numbers.begin(), numbers.end(), greater<int>()); // Descending order
      cout << endl;
      for (int num : numbers) {
          cout << num << " ";
      }
      return 0;
  }`,
        input: "numbers = {40, 10, 30, 20}",
        output: `10 20 30 40
  40 30 20 10`,
      },
      {
        id: 6,
        topic: "Finding Vector Size",
        explanationEnglish:
          "The size of a vector can be determined using the `size` method. It returns the number of elements currently stored in the vector.",
        explanationBangla:
          "ভেক্টরের সাইজ `size` মেথড ব্যবহার করে নির্ধারণ করা যায়। এটি বর্তমানে ভেক্টরে থাকা এলিমেন্টের সংখ্যা রিটার্ন করে।",
        code: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int main() {
      vector<int> numbers = {10, 20, 30};
      cout << "Size of vector: " << numbers.size() << endl;
      return 0;
  }`,
        input: "numbers = {10, 20, 30}",
        output: "Size of vector: 3",
      },
    ];
  
    return vectorConcepts;
  };
  