export const getOperatorDocumentation = async () => {
    const operatorConcepts = [
      {
        id: 1,
        topic: "Arithmetic Operators",
        explanationEnglish:
          "Arithmetic operators perform mathematical operations on numeric data. They are used to add, subtract, multiply, divide, and find the remainder of two numbers.",
        explanationBangla:
          "অ্যারিথমেটিক অপারেটরগুলি সংখ্যাসংক্রান্ত ডেটার উপর গাণিতিক ক্রিয়া সম্পাদন করে। এগুলি দুটি সংখ্যার যোগ, বিয়োগ, গুণ, ভাগ এবং ভাগশেষ নির্ধারণ করতে ব্যবহৃত হয়।",
        code: `int a = 10, b = 3;
  int addition = a + b;    // 10 + 3 = 13
  int subtraction = a - b; // 10 - 3 = 7
  int multiplication = a * b; // 10 * 3 = 30
  int division = a / b;    // 10 / 3 = 3 (integer division)
  int modulus = a % b;     // 10 % 3 = 1`,
        input: "a = 10, b = 3",
        output: `addition = 13
  subtraction = 7
  multiplication = 30
  division = 3
  modulus = 1`,
      },
      {
        id: 2,
        topic: "Logical Operators",
        explanationEnglish:
          "Logical operators are used to perform logical operations. They evaluate expressions and return true or false based on the result.",
        explanationBangla:
          "লজিকাল অপারেটরগুলি লজিক্যাল ক্রিয়া সম্পাদন করতে ব্যবহৃত হয়। এগুলি এক্সপ্রেশনের ফলাফল অনুযায়ী true বা false রিটার্ন করে।",
        code: `bool x = true, y = false;
  bool logicalAnd = x && y; // true AND false = false
  bool logicalOr = x || y;  // true OR false = true
  bool logicalNot = !x;     // NOT true = false`,
        input: "x = true, y = false",
        output: `logicalAnd = false
  logicalOr = true
  logicalNot = false`,
      },
      {
        id: 3,
        topic: "Ternary Operator",
        explanationEnglish:
          "The ternary operator is a shorthand for if-else statements. It evaluates a condition and returns one of two values depending on whether the condition is true or false.",
        explanationBangla:
          "টার্নারি অপারেটর if-else স্টেটমেন্টের একটি শর্টকাট। এটি একটি শর্ত মূল্যায়ন করে এবং শর্তটি true বা false এর উপর ভিত্তি করে দুটি মানের মধ্যে একটি রিটার্ন করে।",
        code: `int a = 5, b = 10;
  int max = (a > b) ? a : b; // If a > b, max = a; otherwise, max = b`,
        input: "a = 5, b = 10",
        output: "max = 10",
      },
      {
        id: 4,
        topic: "Relational Operators",
        explanationEnglish:
          "Relational operators compare two values and return a boolean result. These are commonly used in conditions and loops.",
        explanationBangla:
          "রিলেশনাল অপারেটর দুটি মান তুলনা করে এবং একটি বুলিয়ান ফলাফল রিটার্ন করে। এগুলি সাধারণত শর্ত এবং লুপে ব্যবহৃত হয়।",
        code: `int a = 5, b = 10;
  bool isEqual = (a == b);       // false
  bool isNotEqual = (a != b);    // true
  bool isGreater = (a > b);      // false
  bool isLess = (a < b);         // true
  bool isGreaterOrEqual = (a >= b); // false
  bool isLessOrEqual = (a <= b);    // true`,
        input: "a = 5, b = 10",
        output: `isEqual = false
  isNotEqual = true
  isGreater = false
  isLess = true
  isGreaterOrEqual = false
  isLessOrEqual = true`,
      },
      {
        id: 5,
        topic: "Bitwise Operators",
        explanationEnglish:
          "Bitwise operators perform operations on binary representations of numbers. They include AND, OR, XOR, NOT, and shift operations.",
        explanationBangla:
          "বিটওয়াইজ অপারেটরগুলি সংখ্যার বাইনারি উপস্থাপনার উপর ক্রিয়া সম্পাদন করে। এগুলির মধ্যে AND, OR, XOR, NOT এবং শিফট অপারেশন অন্তর্ভুক্ত।",
        code: `int a = 5, b = 3; // Binary: a = 0101, b = 0011
  int bitwiseAnd = a & b; // 0101 & 0011 = 0001 (1)
  int bitwiseOr = a | b;  // 0101 | 0011 = 0111 (7)
  int bitwiseXor = a ^ b; // 0101 ^ 0011 = 0110 (6)
  int bitwiseNot = ~a;    // ~0101 = 1010 (Two's complement representation)
  int leftShift = a << 1; // 0101 << 1 = 1010 (10)
  int rightShift = a >> 1;// 0101 >> 1 = 0010 (2)`,
        input: "a = 5, b = 3",
        output: `bitwiseAnd = 1
  bitwiseOr = 7
  bitwiseXor = 6
  bitwiseNot = -6
  leftShift = 10
  rightShift = 2`,
      },
    ];
  
    return operatorConcepts;
  };
  