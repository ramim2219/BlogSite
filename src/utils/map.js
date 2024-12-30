export const getMapDocumentation = async () => {
    const mapConcepts = [
      {
        id: 1,
        topic: "Introduction to Map",
        explanationEnglish:
          "A map in C++ is a container that stores key-value pairs. It allows for fast retrieval of values based on keys. The `map` container stores keys in sorted order by default and does not allow duplicate keys.",
        explanationBangla:
          "C++-এ একটি ম্যাপ একটি কনটেইনার যা কী-মূল্য জোড়া সংরক্ষণ করে। এটি কী এর ভিত্তিতে মান দ্রুত পুনরুদ্ধারের অনুমতি দেয়। ডিফল্টভাবে, `map` কনটেইনার কী গুলোকে সাজানো অবস্থায় সংরক্ষণ করে এবং ডুপ্লিকেট কী অনুমোদন করে না।",
        code: `#include <iostream>
  #include <map>
  using namespace std;
  
  int main() {
      map<int, string> studentMap;
      
      // Inserting elements into the map
      studentMap[1] = "Alice";
      studentMap[2] = "Bob";
      studentMap[3] = "Charlie";
  
      // Accessing elements
      cout << "Student with ID 1: " << studentMap[1] << endl;
      cout << "Student with ID 2: " << studentMap[2] << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Student with ID 1: Alice
  Student with ID 2: Bob`,
      },
      {
        id: 2,
        topic: "Inserting Elements into a Map",
        explanationEnglish:
          "Elements can be inserted into a map either using the index operator (`[]`) or using the `insert` method. The index operator creates a new key-value pair, while the `insert` method only adds the element if the key does not already exist.",
        explanationBangla:
          "একটি ম্যাপে উপাদান সন্নিবেশ করা যেতে পারে ইনডেক্স অপারেটর (`[]`) বা `insert` পদ্ধতি ব্যবহার করে। ইনডেক্স অপারেটর একটি নতুন কী-মূল্য জোড়া তৈরি করে, যখন `insert` পদ্ধতি শুধুমাত্র উপাদানটি যোগ করে যদি কী ইতিমধ্যেই বিদ্যমান না থাকে।",
        code: `#include <iostream>
  #include <map>
  using namespace std;
  
  int main() {
      map<int, string> studentMap;
      
      // Using [] to insert elements
      studentMap[4] = "David";
      studentMap[5] = "Eve";
      
      // Using insert to insert elements
      studentMap.insert({6, "Frank"});
  
      // Display the map
      for (auto& pair : studentMap) {
          cout << pair.first << " -> " << pair.second << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `4 -> David
  5 -> Eve
  6 -> Frank`,
      },
      {
        id: 3,
        topic: "Accessing Elements in a Map",
        explanationEnglish:
          "To access an element in a map, you can use the index operator (`[]`) or the `at` method. The `[]` operator returns a reference to the value, while `at` throws an exception if the key is not found.",
        explanationBangla:
          "একটি ম্যাপে একটি উপাদান অ্যাক্সেস করতে, আপনি ইনডেক্স অপারেটর (`[]`) অথবা `at` পদ্ধতি ব্যবহার করতে পারেন। `[]` অপারেটর মানের একটি রেফারেন্স রিটার্ন করে, যখন `at` কী পাওয়া না গেলে একটি এক্সসেপশন ফেলে।",
        code: `#include <iostream>
  #include <map>
  using namespace std;
  
  int main() {
      map<int, string> studentMap = {{1, "Alice"}, {2, "Bob"}, {3, "Charlie"}};
  
      // Access using []
      cout << "Student with ID 1: " << studentMap[1] << endl;
  
      // Access using at
      cout << "Student with ID 2: " << studentMap.at(2) << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Student with ID 1: Alice
  Student with ID 2: Bob`,
      },
      {
        id: 4,
        topic: "Iterating Over a Map",
        explanationEnglish:
          "You can iterate over a map using an iterator or a range-based for loop. The iterator allows you to access both the key and the value, while the range-based loop simplifies the process.",
        explanationBangla:
          "আপনি একটি ম্যাপ ইটারেটর বা রেঞ্জ-বেসড ফর লুপ ব্যবহার করে অতিক্রম করতে পারেন। ইটারেটর আপনাকে কী এবং মান উভয় অ্যাক্সেস করতে দেয়, যখন রেঞ্জ-বেসড লুপ প্রক্রিয়াটি সরল করে দেয়।",
        code: `#include <iostream>
  #include <map>
  using namespace std;
  
  int main() {
      map<int, string> studentMap = {{1, "Alice"}, {2, "Bob"}, {3, "Charlie"}};
  
      // Using an iterator
      for (auto it = studentMap.begin(); it != studentMap.end(); ++it) {
          cout << it->first << " -> " << it->second << endl;
      }
  
      // Using a range-based for loop
      for (auto& pair : studentMap) {
          cout << pair.first << " -> " << pair.second << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `1 -> Alice
  2 -> Bob
  3 -> Charlie`,
      },
      {
        id: 5,
        topic: "Checking if a Key Exists",
        explanationEnglish:
          "To check if a key exists in a map, you can use the `find` method. If the key is found, it returns an iterator pointing to the element, otherwise, it returns an iterator pointing to `map::end()`.",
        explanationBangla:
          "যদি একটি কী একটি ম্যাপে বিদ্যমান থাকে তা পরীক্ষা করতে, আপনি `find` পদ্ধতি ব্যবহার করতে পারেন। যদি কী পাওয়া যায়, এটি উপাদানের দিকে নির্দেশকারী একটি ইটারেটর রিটার্ন করে, অন্যথায় এটি `map::end()` এর দিকে নির্দেশকারী একটি ইটারেটর রিটার্ন করে।",
        code: `#include <iostream>
  #include <map>
  using namespace std;
  
  int main() {
      map<int, string> studentMap = {{1, "Alice"}, {2, "Bob"}, {3, "Charlie"}};
  
      // Check if a key exists
      if (studentMap.find(2) != studentMap.end()) {
          cout << "Student with ID 2: " << studentMap[2] << endl;
      } else {
          cout << "Student not found" << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: "Student with ID 2: Bob",
      },
      {
        id: 6,
        topic: "Removing Elements from a Map",
        explanationEnglish:
          "You can remove elements from a map using the `erase` method. You can erase elements by key, by iterator, or clear the entire map using `clear`.",
        explanationBangla:
          "আপনি `erase` পদ্ধতি ব্যবহার করে একটি ম্যাপ থেকে উপাদান মুছে ফেলতে পারেন। আপনি কী দ্বারা, ইটারেটর দ্বারা উপাদান মুছে ফেলতে পারেন বা `clear` ব্যবহার করে পুরো ম্যাপ পরিষ্কার করতে পারেন।",
        code: `#include <iostream>
  #include <map>
  using namespace std;
  
  int main() {
      map<int, string> studentMap = {{1, "Alice"}, {2, "Bob"}, {3, "Charlie"}};
  
      // Erase by key
      studentMap.erase(2); // Remove student with ID 2
  
      // Erase by iterator
      auto it = studentMap.find(1);
      if (it != studentMap.end()) {
          studentMap.erase(it); // Remove student with ID 1
      }
  
      // Clear all elements
      studentMap.clear();
  
      cout << "Map size after clearing: " << studentMap.size() << endl;
  
      return 0;
  }`,
        input: "None",
        output: "Map size after clearing: 0",
      },
      {
        id: 7,
        topic: "Map Size and Checking if Empty",
        explanationEnglish:
          "You can check the size of the map using the `size` method and check if the map is empty using the `empty` method.",
        explanationBangla:
          "আপনি `size` পদ্ধতি ব্যবহার করে ম্যাপের আকার পরীক্ষা করতে পারেন এবং `empty` পদ্ধতি ব্যবহার করে দেখতে পারেন যে ম্যাপটি খালি কিনা।",
        code: `#include <iostream>
  #include <map>
  using namespace std;
  
  int main() {
      map<int, string> studentMap = {{1, "Alice"}, {2, "Bob"}};
  
      // Check size
      cout << "Map size: " << studentMap.size() << endl;
  
      // Check if empty
      if (studentMap.empty()) {
          cout << "The map is empty." << endl;
      } else {
          cout << "The map is not empty." << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `Map size: 2
  The map is not empty.`,
      },
    ];
  
    return mapConcepts;
  };
  