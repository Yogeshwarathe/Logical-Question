// Solution
var addTwoNumbers = function(l1, l2) {
    var l1_add = "";
    var l2_add = "";
    for(var i=l1.length-1; i>=0; i-=1){
            var convert_to_string = l1[i].toString();
            l1_add += convert_to_string      
    }
    for(var secount=l2.length-1; secount>=0; secount-=1){
        var convert_to_string2 = l2[secount].toString();
        l2_add += convert_to_string2     
    }

    var add = Number(l1_add) + Number(l2_add);
    add = add.toString()
    var list1 = [];
    for(var thard=add.length-1; thard>=0; thard-=1){
        var convert_to_number = Number(add[thard]);
        list1.push(convert_to_number)
    }    
    return list1
};


var ans = addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]);
console.log(ans);





// 2. Add Two Numbers
// Medium question
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]