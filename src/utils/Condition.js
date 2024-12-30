export const getConditionDocs = async () => {
    const conditionDocs = [
      {
        id: 1,
        name: "if-else",
        type: "Conditional Statement",
        explainEnglish: "The if-else statement allows you to execute a block of code if a condition is true, and another block of code if it is false.",
        explainBangla: "if-else বিবৃতি আপনাকে একটি শর্ত সত্য হলে একটি কোড ব্লক এক্সিকিউট করতে দেয়, এবং যদি এটি মিথ্যা হয় তবে অন্য একটি কোড ব্লক এক্সিকিউট করতে দেয়।",
        code: `
          if (condition) {
            // Code to execute if condition is true
          } else {
            // Code to execute if condition is false
          }`,
        input: "condition = true",
        output: "Code inside if-block is executed."
      },
      {
        id: 2,
        name: "switch",
        type: "Conditional Statement",
        explainEnglish: "The switch statement is used to perform different actions based on different conditions. It is a cleaner alternative to multiple if-else statements when you have several conditions to evaluate.",
        explainBangla: "switch বিবৃতি বিভিন্ন শর্তের ভিত্তিতে বিভিন্ন অ্যাকশন সম্পাদন করতে ব্যবহৃত হয়। যখন অনেক শর্ত মূল্যায়ন করতে হয়, তখন এটি একাধিক if-else বিবৃতির তুলনায় পরিষ্কার একটি বিকল্প।",
        code: `
          switch (expression) {
            case value1:
              // Code to execute if expression equals value1
              break;
            case value2:
              // Code to execute if expression equals value2
              break;
            default:
              // Code to execute if expression doesn't match any value
          }`,
        input: "expression = 2",
        output: "Code inside case value2 block is executed."
      }
    ];
  
    return conditionDocs;
  };
  