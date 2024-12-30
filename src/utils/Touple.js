export const getTupleDocumentation = async () => {
    const tupleConcepts = [
      {
        id: 1,
        topic: "Introduction to Tuple",
        explanationEnglish:
          "A Tuple is a data structure that can hold a fixed number of elements of different types. It is useful when you need to store heterogeneous values together. C++ provides `std::tuple` for this purpose.",
        explanationBangla:
          "Tuple একটি ডেটা স্ট্রাকচার যা বিভিন্ন প্রকারের উপাদান ধারণ করতে পারে। যখন আপনাকে বিভিন্ন প্রকারের মান একসাথে সংরক্ষণ করতে হয় তখন এটি উপকারী। C++ তে এর জন্য `std::tuple` ব্যবহার করা হয়।",
        code: `#include <iostream>
  #include <tuple>
  using namespace std;
  
  int main() {
      // Declaring a tuple with different types of data
      tuple<int, double, string> myTuple(1, 3.14, "Hello");
  
      // Accessing tuple elements
      cout << "Integer: " << get<0>(myTuple) << endl;
      cout << "Double: " << get<1>(myTuple) << endl;
      cout << "String: " << get<2>(myTuple) << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Integer: 1
  Double: 3.14
  String: Hello`,
      },
      {
        id: 2,
        topic: "Creating a Tuple",
        explanationEnglish:
          "In C++, you can create a tuple using `std::tuple`. A tuple can hold elements of different data types, and you can initialize it when declaring it.",
        explanationBangla:
          "C++ এ, আপনি `std::tuple` ব্যবহার করে একটি tuple তৈরি করতে পারেন। একটি tuple বিভিন্ন ডেটা প্রকারের উপাদান ধারণ করতে পারে, এবং আপনি এটি ঘোষণা করার সময় এটি ইনিশিয়ালাইজ করতে পারেন।",
        code: `#include <iostream>
  #include <tuple>
  using namespace std;
  
  int main() {
      // Creating a tuple
      tuple<int, double, string> myTuple(100, 3.14, "C++");
  
      // Accessing elements using get<index>
      cout << "Integer: " << get<0>(myTuple) << endl;
      cout << "Double: " << get<1>(myTuple) << endl;
      cout << "String: " << get<2>(myTuple) << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Integer: 100
  Double: 3.14
  String: C++`,
      },
      {
        id: 3,
        topic: "Accessing Elements in a Tuple",
        explanationEnglish:
          "You can access the elements of a tuple using the `get<index>` function, where `index` is the position of the element in the tuple (starting from 0).",
        explanationBangla:
          "আপনি `get<index>` ফাংশন ব্যবহার করে tuple এর উপাদান অ্যাক্সেস করতে পারেন, যেখানে `index` হল tuple এর উপাদানের অবস্থান (0 থেকে শুরু)।",
        code: `#include <iostream>
  #include <tuple>
  using namespace std;
  
  int main() {
      tuple<int, string, double> myTuple(5, "Tuple Example", 9.81);
  
      // Accessing elements using index
      cout << "First Element: " << get<0>(myTuple) << endl; // Access first element
      cout << "Second Element: " << get<1>(myTuple) << endl; // Access second element
      cout << "Third Element: " << get<2>(myTuple) << endl; // Access third element
  
      return 0;
  }`,
        input: "None",
        output: `First Element: 5
  Second Element: Tuple Example
  Third Element: 9.81`,
      },
      {
        id: 4,
        topic: "Tuple Size",
        explanationEnglish:
          "To get the number of elements in a tuple, you can use the `tuple_size<T>::value` function. It returns the number of elements contained in the tuple.",
        explanationBangla:
          "একটি tuple এ উপাদানের সংখ্যা পাওয়ার জন্য, আপনি `tuple_size<T>::value` ফাংশন ব্যবহার করতে পারেন। এটি tuple এ উপস্থিত উপাদানের সংখ্যা রিটার্ন করে।",
        code: `#include <iostream>
  #include <tuple>
  using namespace std;
  
  int main() {
      tuple<int, string, double> myTuple(1, "C++", 3.14);
  
      // Getting the size of the tuple
      cout << "Size of tuple: " << tuple_size<decltype(myTuple)>::value << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Size of tuple: 3`,
      },
      {
        id: 5,
        topic: "Modifying Tuple Elements",
        explanationEnglish:
          "Tuples in C++ are immutable, which means their elements cannot be changed directly. However, you can create a new tuple with modified values.",
        explanationBangla:
          "C++ তে tuples অপরিবর্তনীয়, যার মানে তাদের উপাদান সরাসরি পরিবর্তন করা যায় না। তবে, আপনি নতুন মান সহ একটি নতুন tuple তৈরি করতে পারেন।",
        code: `#include <iostream>
  #include <tuple>
  using namespace std;
  
  int main() {
      tuple<int, string, double> myTuple(1, "Hello", 3.14);
  
      // Creating a new tuple with modified values
      myTuple = make_tuple(10, "World", 6.28);
  
      // Accessing the modified tuple
      cout << "Modified Tuple: " << get<0>(myTuple) << ", " << get<1>(myTuple) << ", " << get<2>(myTuple) << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Modified Tuple: 10, World, 6.28`,
      },
      {
        id: 6,
        topic: "Tuple Comparison",
        explanationEnglish:
          "Tuples can be compared in C++ using relational operators. The comparison is done element by element, starting from the first element.",
        explanationBangla:
          "C++ এ tuple গুলি তুলনা করা যেতে পারে সম্পর্কিত অপারেটরগুলি ব্যবহার করে। তুলনাটি প্রথম উপাদান থেকে শুরু করে উপাদান অনুসারে করা হয়।",
        code: `#include <iostream>
  #include <tuple>
  using namespace std;
  
  int main() {
      tuple<int, string> tuple1(10, "Hello");
      tuple<int, string> tuple2(10, "Hello");
  
      if (tuple1 == tuple2) {
          cout << "Tuples are equal." << endl;
      } else {
          cout << "Tuples are not equal." << endl;
      }
  
      return 0;
  }`,
        input: "None",
        output: `Tuples are equal.`,
      },
      {
        id: 7,
        topic: "Swapping Elements in a Tuple",
        explanationEnglish:
          "You can swap the elements of two tuples using the `swap()` function. This operation swaps all elements between two tuples.",
        explanationBangla:
          "আপনি দুটি tuple এর উপাদানগুলি `swap()` ফাংশন ব্যবহার করে বিনিময় করতে পারেন। এই অপারেশন দুটি tuple এর সব উপাদান বিনিময় করে।",
        code: `#include <iostream>
  #include <tuple>
  using namespace std;
  
  int main() {
      tuple<int, string> tuple1(1, "A");
      tuple<int, string> tuple2(2, "B");
  
      // Swapping two tuples
      swap(tuple1, tuple2);
  
      // Displaying swapped tuples
      cout << "Tuple1: " << get<0>(tuple1) << ", " << get<1>(tuple1) << endl;
      cout << "Tuple2: " << get<0>(tuple2) << ", " << get<1>(tuple2) << endl;
  
      return 0;
  }`,
        input: "None",
        output: `Tuple1: 2, B
  Tuple2: 1, A`,
      },
    ];
  
    return tupleConcepts;
  };
  