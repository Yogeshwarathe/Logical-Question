// Question

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.





// Solution

const readline = require("readline-sync");
const user = readline.question("Enter roman numbers  ")

function roman_to_integer(roman_number){
    var list_of_number = roman_number.split('');
    var symblos_and_valve = { 
                                "I":1,
                                "V":5,
                                "X":10,
                                "L":50,
                                "C":100,
                                "D":500,
                                "M":1000
                            };
    
    var length1 = list_of_number.length;
    var Integer_valve = 0;
    for(var num=0; num < list_of_number.length; num++){
        if(num <= list_of_number.length-2){
            var first_num = symblos_and_valve[list_of_number[num]];
            var secound_num = symblos_and_valve[list_of_number[num+1]];
            if ( first_num < secound_num ){
                Integer_valve += secound_num-first_num
                num+=1
            }else{
                Integer_valve += first_num
            }
        }else{
            Integer_valve += symblos_and_valve[list_of_number[num]]
        }
    }


    console.log(Integer_valve);

}

roman_to_integer(user)