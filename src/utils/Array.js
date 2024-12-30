export const getArrayConcepts = async () => {
    const arrayConcepts = [
      {
        id: 1,
        topic: "Basic Array Concepts",
        explanationEnglish:
          "An array is a collection of elements of the same data type, stored in contiguous memory locations. Arrays are zero-indexed in C++, meaning the first element is at index 0. The size of an array must be declared at initialization, as it cannot be changed dynamically.",
        explanationBangla:
          "একটি অ্যারে একই ডেটা টাইপের উপাদানের একটি সংগ্রহ, যা ধারাবাহিক মেমোরি অবস্থানে সংরক্ষিত। C++ এ অ্যারে শূন্য সূচকে সূচিত হয়, অর্থাৎ প্রথম উপাদানটি সূচক 0-এ থাকে। একটি অ্যারের আকার প্রাথমিক অবস্থায় ঘোষণা করতে হয়, যা গতিশীলভাবে পরিবর্তন করা যায় না।",
        code: `int arr[5]; // Declare an array of size 5
  int arr[5] = {1, 2, 3, 4, 5}; // Initialize an array with values`,
        input: `Not applicable for this section`,
        output: `Not applicable for this section`,
      },
      {
        id: 2,
        topic: "Calculating Array Size",
        explanationEnglish:
          "The size of a static array in C++ can be calculated using the formula sizeof(arr) / sizeof(arr[0]). This gives the number of elements in the array by dividing the total memory occupied by the array by the size of a single element.",
        explanationBangla:
          "C++ এ একটি স্থির অ্যারের আকার নির্ধারণ করা যায় sizeof(arr) / sizeof(arr[0]) সূত্র ব্যবহার করে। এটি অ্যারের মোট মেমোরি বিভক্ত করে একটি একক উপাদানের আকার দ্বারা উপাদানের সংখ্যা প্রদান করে।",
        code: `int arr[5] = {1, 2, 3, 4, 5};
  int size = sizeof(arr) / sizeof(arr[0]);`,
        input: "None",
        output: "size = 5",
      },
      {
        id: 3,
        topic: "Input and Output in Arrays",
        explanationEnglish:
          "Input to an array can be taken using loops. Similarly, loops can be used to display the elements of an array.",
        explanationBangla:
          "লুপ ব্যবহার করে অ্যারেতে ইনপুট নেওয়া যায়। একইভাবে, লুপ ব্যবহার করে অ্যারের উপাদানগুলো প্রদর্শন করা যায়।",
        code: `int arr[5];
  for (int i = 0; i < 5; i++) {
      cin >> arr[i]; // Taking input
  }
  for (int i = 0; i < 5; i++) {
      cout << arr[i] << ' '; // Displaying output
  }`,
        input: "5 10 15 20 25",
        output: "5 10 15 20 25",
      },
      {
        id: 4,
        topic: "Sorting an Array",
        explanationEnglish:
          "Arrays in C++ can be sorted in ascending or descending order using the std::sort function. Ascending order is the default behavior. To sort in descending order, a comparator function is used.",
        explanationBangla:
          "C++ এ std::sort ফাংশন ব্যবহার করে অ্যারে ক্রমবর্ধমান বা ক্রমহ্রাসমানভাবে সাজানো যায়। ডিফল্টভাবে এটি ক্রমবর্ধমানভাবে কাজ করে। ক্রমহ্রাসমানভাবে সাজানোর জন্য একটি তুলনাকারী ফাংশন ব্যবহার করা হয়।",
        code: `#include <algorithm>
  // Ascending Order Sorting
  int arr[5] = {4, 2, 5, 1, 3};
  std::sort(arr, arr + 5); // Sorting in ascending order
  
  // Descending Order Sorting
  std::sort(arr, arr + 5, std::greater<int>()); // Sorting in descending order`,
        input: "4 2 5 1 3",
        output: "Ascending: 1 2 3 4 5\nDescending: 5 4 3 2 1",
      },
      {
        id: 5,
        topic: "Common Operations in Arrays",
        explanationEnglish:
          "There are several operations that can be performed on arrays, including finding the maximum and minimum element, reversing the array, and more.",
        explanationBangla:
          "অ্যারের উপর অনেক অপারেশন করা যায়, যেমন সর্বাধিক এবং সর্বনিম্ন উপাদান খুঁজে বের করা, অ্যারে উল্টানো, ইত্যাদি।",
        code: `#include <algorithm>
  // Finding Maximum and Minimum
  int maxElement = *std::max_element(arr, arr + size);
  int minElement = *std::min_element(arr, arr + size);
  
  // Reversing the Array
  std::reverse(arr, arr + size);`,
        input: "5 10 15 20 25",
        output:
          "Maximum: 25\nMinimum: 5\nReversed Array: 25 20 15 10 5",
      },
      {
        id: 6,
        topic: "Multidimensional Arrays",
        explanationEnglish:
          "Multidimensional arrays can store data in a table format. Each element is accessed using multiple indices.",
        explanationBangla:
          "মাল্টিডাইমেনশনাল অ্যারে ডেটা টেবিল ফরম্যাটে সংরক্ষণ করতে পারে। প্রতিটি উপাদানকে একাধিক সূচক ব্যবহার করে অ্যাক্সেস করা যায়।",
        code: `int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
  cout << matrix[1][2]; // Accessing the element at row 2, column 3`,
        input: `{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}`,
        output: "6",
      },
    ];
  
    return arrayConcepts;
  };
  