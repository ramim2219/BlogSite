export const getSetDocumentation = async () => {
    const setConcepts = [
      {
        id: 1,
        topic: "Introduction to Set",
        explanationEnglish:
          "A Set is a data structure that stores unique elements, with no duplicate values allowed. Sets automatically ensure that each element is unique by rejecting duplicate elements. Sets are typically implemented using hash tables or balanced binary search trees.",
        explanationBangla:
          "একটি সেট একটি ডেটা স্ট্রাকচার যা একক উপাদান সংরক্ষণ করে, কোন ডুপ্লিকেট মানের অনুমতি দেয় না। সেটগুলি স্বয়ংক্রিয়ভাবে প্রতিটি উপাদানকে অনন্য করে তোলে এবং ডুপ্লিকেট উপাদানগুলি প্রত্যাখ্যান করে। সাধারণত সেটগুলি হ্যাশ টেবিল বা ব্যালেন্সড বাইনারি সার্চ ট্রি ব্যবহার করে বাস্তবায়িত হয়।",
        code: `#include <iostream>
  #include <set>
  using namespace std;
  
  int main() {
      set<int> s;
  
      // Inserting elements
      s.insert(10);
      s.insert(20);
      s.insert(10);  // Duplicate element, will not be added
  
      // Displaying elements in set
      cout << "Elements in the set: ";
      for (int x : s) {
          cout << x << " ";
      }
      cout << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Elements in the set: 10 20`,
      },
      {
        id: 2,
        topic: "Inserting Elements into Set",
        explanationEnglish:
          "Elements are inserted into a set using the `insert()` method. If an element already exists in the set, it will not be added again.",
        explanationBangla:
          "উপাদানগুলি `insert()` মেথড ব্যবহার করে সেটে সন্নিবেশ করা হয়। যদি একটি উপাদান ইতিমধ্যে সেটে বিদ্যমান থাকে, তবে এটি আবার সন্নিবেশিত হবে না।",
        code: `#include <iostream>
  #include <set>
  using namespace std;
  
  int main() {
      set<int> s;
  
      s.insert(5);
      s.insert(10);
      s.insert(15);
      s.insert(10);  // Duplicate element, will be ignored
  
      cout << "Set size: " << s.size() << endl;  // Will output 3 since duplicate is ignored
  
      return 0;
  }`,
        input: "None",
        output: `Set size: 3`,
      },
      {
        id: 3,
        topic: "Removing Elements from Set",
        explanationEnglish:
          "Elements can be removed from a set using the `erase()` method. You can remove a specific element or all elements using the `clear()` method.",
        explanationBangla:
          "আপনি `erase()` মেথড ব্যবহার করে একটি নির্দিষ্ট উপাদান অথবা `clear()` মেথড ব্যবহার করে সমস্ত উপাদান সেট থেকে সরাতে পারেন।",
        code: `#include <iostream>
  #include <set>
  using namespace std;
  
  int main() {
      set<int> s;
  
      s.insert(10);
      s.insert(20);
      s.insert(30);
  
      // Removing an element
      s.erase(20);  // Removes the element 20
  
      // Displaying the set
      cout << "Elements in the set after erase: ";
      for (int x : s) {
          cout << x << " ";
      }
      cout << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Elements in the set after erase: 10 30`,
      },
      {
        id: 4,
        topic: "Checking if an Element Exists in Set",
        explanationEnglish:
          "You can check if an element exists in a set using the `find()` method. If the element is found, it returns an iterator to the element; otherwise, it returns an iterator to the end of the set.",
        explanationBangla:
          "আপনি `find()` মেথড ব্যবহার করে চেক করতে পারেন একটি উপাদান একটি সেটে রয়েছে কি না। যদি উপাদানটি পাওয়া যায়, তবে এটি সেই উপাদানের দিকে একটি ইটারেটর রিটার্ন করে; অন্যথায়, এটি সেটের শেষের দিকে একটি ইটারেটর রিটার্ন করে।",
        code: `#include <iostream>
  #include <set>
  using namespace std;
  
  int main() {
      set<int> s;
  
      s.insert(10);
      s.insert(20);
      s.insert(30);
  
      // Checking if an element exists
      if (s.find(20) != s.end()) {
          cout << "Element 20 found in the set." << endl;
      } else {
          cout << "Element 20 not found in the set." << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `Element 20 found in the set.`,
      },
      {
        id: 5,
        topic: "Set Size and Empty Check",
        explanationEnglish:
          "You can check the size of a set using the `size()` method. Additionally, you can check if the set is empty using the `empty()` method.",
        explanationBangla:
          "আপনি `size()` মেথড ব্যবহার করে একটি সেটের আকার পরীক্ষা করতে পারেন। অতিরিক্তভাবে, আপনি `empty()` মেথড ব্যবহার করে চেক করতে পারেন, সেটটি খালি কি না।",
        code: `#include <iostream>
  #include <set>
  using namespace std;
  
  int main() {
      set<int> s;
  
      s.insert(5);
      s.insert(10);
      s.insert(15);
  
      cout << "Set size: " << s.size() << endl;  // Returns the number of elements in the set
  
      if (s.empty()) {
          cout << "Set is empty." << endl;
      } else {
          cout << "Set is not empty." << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `Set size: 3
  Set is not empty.`,
      },
      {
        id: 6,
        topic: "Set with Multiple Data Types (Using Structure)",
        explanationEnglish:
          "Just like other data structures, you can use custom structures (or classes) to store complex data types in a set. The key consideration when using custom types in a set is that the type should support comparison operators.",
        explanationBangla:
          "অন্যান্য ডেটা স্ট্রাকচারের মতো, আপনি কাস্টম স্ট্রাকচার (অথবা ক্লাস) ব্যবহার করতে পারেন জটিল ডেটা টাইপগুলি একটি সেটে সংরক্ষণ করতে। একটি সেটে কাস্টম টাইপ ব্যবহার করার সময় মূল বিবেচ্য বিষয় হল যে টাইপটি তুলনা অপারেটরগুলি সমর্থন করতে হবে।",
        code: `#include <iostream>
  #include <set>
  using namespace std;
  
  struct Person {
      string name;
      int age;
  
      // Comparator to compare Person objects
      bool operator<(const Person &p) const {
          return age < p.age;  // Compare by age
      }
  };
  
  int main() {
      set<Person> s;
  
      s.insert({"Alice", 30});
      s.insert({"Bob", 25});
      s.insert({"Charlie", 35});
  
      // Displaying the set of Person objects
      cout << "People in the set: ";
      for (const Person &p : s) {
          cout << p.name << " (" << p.age << ") ";
      }
      cout << endl;
  
      return 0;
  }`,
        input: "None",
        output: `People in the set: Bob (25) Alice (30) Charlie (35)`,
      },
    ];
  
    return setConcepts;
  };
  