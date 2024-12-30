export const getPairDocumentation = async () => {
    const pairConcepts = [
      {
        id: 1,
        topic: "Introduction to Pair",
        explanationEnglish:
          "A `pair` in C++ is a simple container that stores two data elements, which can be of different types. A pair is often used to store two related data elements together. It is part of the C++ Standard Library and is defined in the `utility` header.",
        explanationBangla:
          "C++-এ একটি `pair` একটি সাদাসিধে কনটেইনার যা দুটি ডেটা উপাদান সংরক্ষণ করে, যেগুলি বিভিন্ন ধরনের হতে পারে। একটি পেয়ার সাধারণত দুটি সম্পর্কিত ডেটা উপাদান একত্রে সংরক্ষণের জন্য ব্যবহৃত হয়। এটি C++ স্ট্যান্ডার্ড লাইব্রেরির অংশ এবং `utility` হেডারে সংজ্ঞায়িত।",
        code: `#include <iostream>
  #include <utility>
  using namespace std;
  
  int main() {
      // Creating a pair
      pair<int, string> student = {1, "Alice"};
  
      cout << "Student ID: " << student.first << endl;
      cout << "Student Name: " << student.second << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Student ID: 1
  Student Name: Alice`,
      },
      {
        id: 2,
        topic: "Accessing Elements in a Pair",
        explanationEnglish:
          "You can access the two elements in a pair using `first` and `second`. These are public members of the pair. `first` refers to the first element and `second` refers to the second element of the pair.",
        explanationBangla:
          "আপনি `first` এবং `second` ব্যবহার করে একটি পেয়ারের দুটি উপাদান অ্যাক্সেস করতে পারেন। এগুলি পেয়ারের পাবলিক সদস্য। `first` প্রথম উপাদানকে এবং `second` দ্বিতীয় উপাদানকে নির্দেশ করে।",
        code: `#include <iostream>
  #include <utility>
  using namespace std;
  
  int main() {
      pair<int, string> student = {1, "Bob"};
  
      // Access elements using first and second
      cout << "ID: " << student.first << ", Name: " << student.second << endl;
  
      return 0;
  }`,
        input: "None",
        output: `ID: 1, Name: Bob`,
      },
      {
        id: 3,
        topic: "Making Pairs with Different Data Types",
        explanationEnglish:
          "Pairs can store elements of different data types. You can specify the types of the two elements during the declaration of the pair.",
        explanationBangla:
          "পেয়ার বিভিন্ন ধরনের ডেটা উপাদান সংরক্ষণ করতে পারে। আপনি পেয়ারের ঘোষণা করার সময় দুটি উপাদানের ধরন নির্দিষ্ট করতে পারেন।",
        code: `#include <iostream>
  #include <utility>
  using namespace std;
  
  int main() {
      pair<int, float> data = {1, 3.14};
  
      // Accessing different data types
      cout << "Integer: " << data.first << ", Float: " << data.second << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Integer: 1, Float: 3.14`,
      },
      {
        id: 4,
        topic: "Creating Pairs Using the make_pair Function",
        explanationEnglish:
          "You can create a pair using the `make_pair` function, which automatically infers the types of the elements. This is a convenient way to create pairs without explicitly specifying types.",
        explanationBangla:
          "আপনি `make_pair` ফাংশন ব্যবহার করে একটি পেয়ার তৈরি করতে পারেন, যা উপাদানের ধরন স্বয়ংক্রিয়ভাবে ধারণ করে। এটি একটি সুবিধাজনক উপায় পেয়ার তৈরি করার জন্য, যেখানে ধরন সুনির্দিষ্টভাবে নির্দিষ্ট করার প্রয়োজন হয় না।",
        code: `#include <iostream>
  #include <utility>
  using namespace std;
  
  int main() {
      // Creating a pair using make_pair
      pair<int, string> student = make_pair(2, "Charlie");
  
      cout << "ID: " << student.first << ", Name: " << student.second << endl;
  
      return 0;
  }`,
        input: "None",
        output: `ID: 2, Name: Charlie`,
      },
      {
        id: 5,
        topic: "Swapping Elements in a Pair",
        explanationEnglish:
          "You can swap the values of two pairs using the `swap` function. This allows you to exchange the first and second elements of the pair.",
        explanationBangla:
          "আপনি `swap` ফাংশন ব্যবহার করে দুটি পেয়ারের মান বিনিময় করতে পারেন। এটি আপনাকে পেয়ারের প্রথম এবং দ্বিতীয় উপাদানগুলি একে অপরের সাথে বদলানোর অনুমতি দেয়।",
        code: `#include <iostream>
  #include <utility>
  using namespace std;
  
  int main() {
      pair<int, string> pair1 = {1, "Alice"};
      pair<int, string> pair2 = {2, "Bob"};
  
      // Swapping the pairs
      swap(pair1, pair2);
  
      cout << "Pair 1: " << pair1.first << " " << pair1.second << endl;
      cout << "Pair 2: " << pair2.first << " " << pair2.second << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Pair 1: 2 Bob
  Pair 2: 1 Alice`,
      },
      {
        id: 6,
        topic: "Pair Comparison",
        explanationEnglish:
          "Pairs can be compared using comparison operators. The first element of the pair is compared first, and if they are equal, the second element is compared.",
        explanationBangla:
          "পেয়ারগুলি তুলনা অপারেটর ব্যবহার করে তুলনা করা যেতে পারে। প্রথম উপাদান প্রথমে তুলনা করা হয়, এবং যদি তারা সমান হয়, তবে দ্বিতীয় উপাদানটি তুলনা করা হয়।",
        code: `#include <iostream>
  #include <utility>
  using namespace std;
  
  int main() {
      pair<int, string> pair1 = {1, "Alice"};
      pair<int, string> pair2 = {2, "Bob"};
  
      if (pair1 < pair2) {
          cout << "Pair 1 is less than Pair 2" << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `Pair 1 is less than Pair 2`,
      },
      {
        id: 7,
        topic: "Storing Pair in STL Containers",
        explanationEnglish:
          "Pairs can be used as elements in Standard Template Library (STL) containers like `vector`, `map`, and `set`. This is useful when you need to store key-value pairs or pairs of related values.",
        explanationBangla:
          "পেয়ারগুলি স্ট্যান্ডার্ড টেমপ্লেট লাইব্রেরি (STL) কনটেইনারগুলিতে যেমন `vector`, `map`, এবং `set` এর উপাদান হিসেবে ব্যবহার করা যেতে পারে। এটি তখন দরকারি যখন আপনাকে কী-মূল্য জোড়া বা সম্পর্কিত মানের জোড়া সংরক্ষণ করতে হয়।",
        code: `#include <iostream>
  #include <vector>
  #include <utility>
  using namespace std;
  
  int main() {
      vector<pair<int, string>> studentVec;
  
      // Storing pairs in a vector
      studentVec.push_back(make_pair(1, "Alice"));
      studentVec.push_back(make_pair(2, "Bob"));
  
      // Displaying the vector
      for (const auto& student : studentVec) {
          cout << "ID: " << student.first << ", Name: " << student.second << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `ID: 1, Name: Alice
  ID: 2, Name: Bob`,
      },
    ];
  
    return pairConcepts;
  };
  