export const getLoopDocumentation = async () => {
    const loopConcepts = [
      {
        id: 1,
        topic: "For Loop",
        explanationEnglish:
          "A for loop is used to execute a block of code a specific number of times. It is particularly useful when the number of iterations is known beforehand.",
        explanationBangla:
          "for লুপ একটি নির্দিষ্ট সংখ্যক বার কোড ব্লক কার্যকর করতে ব্যবহৃত হয়। এটি বিশেষভাবে উপযোগী যখন পুনরাবৃত্তির সংখ্যা পূর্বেই জানা থাকে।",
        code: `#include <iostream>
  using namespace std;
  
  int main() {
      for (int i = 1; i <= 5; i++) {
          cout << i << " ";
      }
      return 0;
  }`,
        input: "None",
        output: "1 2 3 4 5",
      },
      {
        id: 2,
        topic: "While Loop",
        explanationEnglish:
          "A while loop executes a block of code as long as the specified condition is true. It is useful when the number of iterations is not known in advance.",
        explanationBangla:
          "while লুপ একটি নির্দিষ্ট শর্ত সত্য থাকাকালীন একটি কোড ব্লক কার্যকর করে। এটি উপযোগী যখন পুনরাবৃত্তির সংখ্যা পূর্বে জানা যায় না।",
        code: `#include <iostream>
  using namespace std;
  
  int main() {
      int i = 1;
      while (i <= 5) {
          cout << i << " ";
          i++;
      }
      return 0;
  }`,
        input: "None",
        output: "1 2 3 4 5",
      },
      {
        id: 3,
        topic: "Do-While Loop",
        explanationEnglish:
          "A do-while loop executes the code block at least once and then continues as long as the specified condition is true.",
        explanationBangla:
          "do-while লুপ অন্তত একবার কোড ব্লক কার্যকর করে এবং তারপর নির্দিষ্ট শর্ত সত্য থাকাকালীন চলতে থাকে।",
        code: `#include <iostream>
  using namespace std;
  
  int main() {
      int i = 1;
      do {
          cout << i << " ";
          i++;
      } while (i <= 5);
      return 0;
  }`,
        input: "None",
        output: "1 2 3 4 5",
      },
      {
        id: 4,
        topic: "Nested Loops",
        explanationEnglish:
          "Nested loops are loops inside another loop. They are commonly used for iterating through multi-dimensional data structures like matrices.",
        explanationBangla:
          "নেস্টেড লুপ হল অন্য একটি লুপের ভিতরে লুপ। এটি সাধারণত মাল্টি-ডাইমেনশনাল ডেটা স্ট্রাকচার যেমন ম্যাট্রিক্সের জন্য ব্যবহৃত হয়।",
        code: `#include <iostream>
  using namespace std;
  
  int main() {
      for (int i = 1; i <= 3; i++) {
          for (int j = 1; j <= 3; j++) {
              cout << "(" << i << "," << j << ") ";
          }
          cout << endl;
      }
      return 0;
  }`,
        input: "None",
        output: `(1,1) (1,2) (1,3) 
  (2,1) (2,2) (2,3) 
  (3,1) (3,2) (3,3)`,
      },
      {
        id: 5,
        topic: "Infinite Loop",
        explanationEnglish:
          "An infinite loop occurs when the termination condition is never met. While generally undesirable, it can be used in certain scenarios like listening for input continuously.",
        explanationBangla:
          "ইনফিনিট লুপ ঘটে যখন শেষ করার শর্ত কখনো পূরণ হয় না। যদিও এটি সাধারণত অযাচিত, কিছু ক্ষেত্রে এটি ক্রমাগত ইনপুট শোনার জন্য ব্যবহৃত হতে পারে।",
        code: `#include <iostream>
  using namespace std;
  
  int main() {
      while (true) {
          cout << "This will run forever!" << endl;
      }
      return 0;
  }`,
        input: "None",
        output: "This will run forever!",
      },
      {
        id: 6,
        topic: "Break and Continue in Loops",
        explanationEnglish:
          "The `break` statement exits the loop immediately, while the `continue` statement skips the current iteration and proceeds to the next.",
        explanationBangla:
          "`break` স্টেটমেন্ট লুপকে সাথে সাথে শেষ করে, যেখানে `continue` স্টেটমেন্ট বর্তমান পুনরাবৃত্তি বাদ দেয় এবং পরবর্তীটিতে যায়।",
        code: `#include <iostream>
  using namespace std;
  
  int main() {
      for (int i = 1; i <= 5; i++) {
          if (i == 3) {
              continue; // Skip the current iteration
          }
          if (i == 5) {
              break; // Exit the loop
          }
          cout << i << " ";
      }
      return 0;
  }`,
        input: "None",
        output: "1 2 4",
      },
    ];
  
    return loopConcepts;
  };
  