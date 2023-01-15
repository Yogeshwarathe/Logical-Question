// Solution
var isPalindrome = function(head) {
    var length_num = head.length;
    var right_num = "";
    var number = 0;
    var return_num = "";
    while(length_num > 0){
        length_num = length_num-1
        return_num += head[length_num].toString()
        right_num += head[number].toString()
        number+=1
    }
    if(right_num === return_num){
        return "True it's polindrome"
    }else{
        return "False it's not polindrome"
    }
};

var ans = isPalindrome([1,2,2,1]);
console.log(ans);

// Question
// 234. Palindrome Linked List
// Easy
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false


