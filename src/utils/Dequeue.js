export const getDequeDocumentation = async () => {
    const dequeConcepts = [
      {
        id: 1,
        topic: "Introduction to Deque",
        explanationEnglish:
          "A deque (double-ended queue) is a data structure that allows insertion and deletion from both ends. It provides flexibility in data manipulation.",
        explanationBangla:
          "ডেক (ডাবল-এন্ডেড কিউ) একটি ডেটা স্ট্রাকচার যা উভয় প্রান্ত থেকে ডেটা যোগ এবং মুছতে দেয়। এটি ডেটা ম্যানিপুলেশনে নমনীয়তা প্রদান করে।",
        code: `#include <iostream>
  #include <deque>
  using namespace std;
  
  int main() {
      deque<int> dq;
      dq.push_back(10);
      dq.push_front(20);
      cout << "Front: " << dq.front() << ", Back: " << dq.back() << endl;
      return 0;
  }`,
        input: "None",
        output: "Front: 20, Back: 10",
      },
      {
        id: 2,
        topic: "Push Operations",
        explanationEnglish:
          "Elements can be added to both the front and back of the deque using `push_front` and `push_back`.",
        explanationBangla:
          "`push_front` এবং `push_back` ব্যবহার করে ডেকের সামনে এবং পেছনে উপাদান যোগ করা যেতে পারে।",
        code: `#include <iostream>
  #include <deque>
  using namespace std;
  
  int main() {
      deque<int> dq;
      dq.push_front(5);
      dq.push_back(15);
      for (int x : dq) {
          cout << x << " ";
      }
      return 0;
  }`,
        input: "None",
        output: "5 15",
      },
      {
        id: 3,
        topic: "Pop Operations",
        explanationEnglish:
          "Elements can be removed from both the front and back using `pop_front` and `pop_back`.",
        explanationBangla:
          "`pop_front` এবং `pop_back` ব্যবহার করে ডেকের সামনে এবং পেছন থেকে উপাদান মুছে ফেলা যায়।",
        code: `#include <iostream>
  #include <deque>
  using namespace std;
  
  int main() {
      deque<int> dq = {10, 20, 30};
      dq.pop_front();
      dq.pop_back();
      for (int x : dq) {
          cout << x << " ";
      }
      return 0;
  }`,
        input: "None",
        output: "20",
      },
      {
        id: 4,
        topic: "Accessing Elements",
        explanationEnglish:
          "Elements can be accessed using `front`, `back`, or the index operator [].",
        explanationBangla:
          "`front`, `back`, অথবা ইনডেক্স অপারেটর [] ব্যবহার করে উপাদানগুলো অ্যাক্সেস করা যায়।",
        code: `#include <iostream>
  #include <deque>
  using namespace std;
  
  int main() {
      deque<int> dq = {1, 2, 3};
      cout << "First Element: " << dq.front() << endl;
      cout << "Last Element: " << dq.back() << endl;
      cout << "Second Element: " << dq[1] << endl;
      return 0;
  }`,
        input: "None",
        output: `First Element: 1
  Last Element: 3
  Second Element: 2`,
      },
      {
        id: 5,
        topic: "Iterating Over a Deque",
        explanationEnglish:
          "Deque elements can be iterated using loops or iterators.",
        explanationBangla:
          "লুপ বা ইটেরেটর ব্যবহার করে ডেকের উপাদানগুলোতে পুনরাবৃত্তি করা যায়।",
        code: `#include <iostream>
  #include <deque>
  using namespace std;
  
  int main() {
      deque<int> dq = {5, 10, 15};
      for (auto it = dq.begin(); it != dq.end(); ++it) {
          cout << *it << " ";
      }
      return 0;
  }`,
        input: "None",
        output: "5 10 15",
      },
      {
        id: 6,
        topic: "Sorting a Deque",
        explanationEnglish:
          "Deques can be sorted using the `sort` function from the STL.",
        explanationBangla:
          "STL এর `sort` ফাংশন ব্যবহার করে ডেককে সর্ট করা যায়।",
        code: `#include <iostream>
  #include <deque>
  #include <algorithm>
  using namespace std;
  
  int main() {
      deque<int> dq = {30, 10, 20};
      sort(dq.begin(), dq.end());
      for (int x : dq) {
          cout << x << " ";
      }
      return 0;
  }`,
        input: "None",
        output: "10 20 30",
      },
      {
        id: 7,
        topic: "Clearing a Deque",
        explanationEnglish: "All elements can be removed using `clear`.",
        explanationBangla: "`clear` ব্যবহার করে সমস্ত উপাদান মুছে ফেলা যায়।",
        code: `#include <iostream>
  #include <deque>
  using namespace std;
  
  int main() {
      deque<int> dq = {1, 2, 3};
      dq.clear();
      cout << "Size after clear: " << dq.size() << endl;
      return 0;
  }`,
        input: "None",
        output: "Size after clear: 0",
      },
      {
        id: 8,
        topic: "Checking if a Deque is Empty",
        explanationEnglish: "Use `empty` to check if a deque is empty.",
        explanationBangla: "`empty` ব্যবহার করে ডেক খালি কিনা তা পরীক্ষা করা যায়।",
        code: `#include <iostream>
  #include <deque>
  using namespace std;
  
  int main() {
      deque<int> dq;
      if (dq.empty()) {
          cout << "Deque is empty!" << endl;
      } else {
          cout << "Deque is not empty!" << endl;
      }
      return 0;
  }`,
        input: "None",
        output: "Deque is empty!",
      },
    ];
  
    return dequeConcepts;
  };
  