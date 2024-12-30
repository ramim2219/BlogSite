export const getDatatype = async () => {
    const basicsDatatype = [
      {
        id: 1,
        name: "int",
        type: "Data Type",
        explainEnglish: "An int is a data type used to represent integers. It typically occupies 4 bytes of memory and can store values in the range of -2,147,483,648 to 2,147,483,647.",
        explainBangla: "int একটি ডেটা টাইপ যা পূর্ণসংখ্যা উপস্থাপনের জন্য ব্যবহৃত হয়। এটি সাধারণত 4 বাইট মেমোরি নেয় এবং -2,147,483,648 থেকে 2,147,483,647 পর্যন্ত মান সংরক্ষণ করতে পারে।",
        code: "int number = 5;",
        input: "number",
        output: "5"
      },
      {
        id: 2,
        name: "long long int",
        type: "Data Type",
        explainEnglish: "A long long int is a data type used to represent larger integers. It typically occupies 8 bytes of memory and can store values in the range of -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.",
        explainBangla: "long long int একটি ডেটা টাইপ যা বড় পূর্ণসংখ্যা উপস্থাপনের জন্য ব্যবহৃত হয়। এটি সাধারণত 8 বাইট মেমোরি নেয় এবং -9,223,372,036,854,775,808 থেকে 9,223,372,036,854,775,807 পর্যন্ত মান সংরক্ষণ করতে পারে।",
        code: "long long int bigNumber = 10000000000;",
        input: "bigNumber",
        output: "10000000000"
      },
      {
        id: 3,
        name: "unsigned long long int",
        type: "Data Type",
        explainEnglish: "An unsigned long long int is a data type used to represent larger non-negative integers. It typically occupies 8 bytes of memory and can store values in the range of 0 to 18,446,744,073,709,551,615.",
        explainBangla: "unsigned long long int একটি ডেটা টাইপ যা বড় ধনাত্মক পূর্ণসংখ্যা উপস্থাপনের জন্য ব্যবহৃত হয়। এটি সাধারণত 8 বাইট মেমোরি নেয় এবং 0 থেকে 18,446,744,073,709,551,615 পর্যন্ত মান সংরক্ষণ করতে পারে।",
        code: "unsigned long long int bigPositiveNumber = 10000000000;",
        input: "bigPositiveNumber",
        output: "10000000000"
      },
      {
        id: 4,
        name: "float",
        type: "Data Type",
        explainEnglish: "A float is a data type used to represent floating-point numbers. It typically occupies 4 bytes of memory and provides precision up to 7 decimal digits.",
        explainBangla: "float একটি ডেটা টাইপ যা দশমিক সংখ্যা উপস্থাপনের জন্য ব্যবহৃত হয়। এটি সাধারণত 4 বাইট মেমোরি নেয় এবং 7 দশমিক স্থান পর্যন্ত নির্ভুলতা প্রদান করে।",
        code: "float decimal = 5.75;",
        input: "decimal",
        output: "5.75"
      },
      {
        id: 5,
        name: "double",
        type: "Data Type",
        explainEnglish: "A double is a data type used to represent double-precision floating-point numbers. It typically occupies 8 bytes of memory and provides precision up to 15 decimal digits.",
        explainBangla: "double একটি ডেটা টাইপ যা দ্বিগুণ নির্ভুলতার দশমিক সংখ্যা উপস্থাপনের জন্য ব্যবহৃত হয়। এটি সাধারণত 8 বাইট মেমোরি নেয় এবং 15 দশমিক স্থান পর্যন্ত নির্ভুলতা প্রদান করে।",
        code: "double preciseDecimal = 5.123456789;",
        input: "preciseDecimal",
        output: "5.123456789"
      },
      {
        id: 6,
        name: "char",
        type: "Data Type",
        explainEnglish: "A char is a data type used to represent single characters. It typically occupies 1 byte of memory and stores values in the range of 0 to 255 (ASCII values).",
        explainBangla: "char একটি ডেটা টাইপ যা একক অক্ষর উপস্থাপনের জন্য ব্যবহৃত হয়। এটি সাধারণত 1 বাইট মেমোরি নেয় এবং 0 থেকে 255 (ASCII মান) পর্যন্ত মান সংরক্ষণ করতে পারে।",
        code: "char letter = 'A';",
        input: "letter",
        output: "A"
      },
      {
        id: 7,
        name: "bool",
        type: "Data Type",
        explainEnglish: "A bool is a data type used to represent true or false values. It typically occupies 1 byte of memory.",
        explainBangla: "bool একটি ডেটা টাইপ যা সত্য বা মিথ্যা মান উপস্থাপনের জন্য ব্যবহৃত হয়। এটি সাধারণত 1 বাইট মেমোরি নেয়।",
        code: "bool isTrue = true;",
        input: "isTrue",
        output: "true"
      },
      {
        id: 8,
        name: "string",
        type: "Data Type",
        explainEnglish: "A string is a data type used to represent sequences of characters. The size depends on the number of characters and additional memory for null termination.",
        explainBangla: "string একটি ডেটা টাইপ যা অক্ষরের ধারাবাহিকতা উপস্থাপনের জন্য ব্যবহৃত হয়। এর আকার অক্ষরের সংখ্যার উপর নির্ভর করে এবং null termination এর জন্য অতিরিক্ত মেমোরি প্রয়োজন।",
        code: "string greeting = \"Hello\";",
        input: "greeting",
        output: "Hello"
      },
      {
        id: 9,
        name: "short int",
        type: "Data Type",
        explainEnglish: "A short int is a data type used to represent smaller integers. It typically occupies 2 bytes of memory and can store values in the range of -32,768 to 32,767.",
        explainBangla: "short int একটি ডেটা টাইপ যা ছোট পূর্ণসংখ্যা উপস্থাপনের জন্য ব্যবহৃত হয়। এটি সাধারণত 2 বাইট মেমোরি নেয় এবং -32,768 থেকে 32,767 পর্যন্ত মান সংরক্ষণ করতে পারে।",
        code: "short int smallNumber = 100;",
        input: "smallNumber",
        output: "100"
      }
    ];
  
    return basicsDatatype;
  };
  