// Solution
var isValid = function(s) {
    var type_input = typeof(s);
    // console.log(type_input);
    var split_input = s.split('');
    console.log(split_input);
    var return_valve = false;
    var cheker = 0;
    for(var index=0; index<split_input.length;index+=1){
        // console.log(index);
        if("(" == split_input[index] || ")" == split_input[index] &&  split_input.includes("(") || split_input.includes(")")){
            if(split_input[1]== ')'){
                index += 1
                cheker +=2
            }else{
                cheker+=1
            }
           
        }else if("[" == split_input[index] || "]" == split_input[index] &&  split_input.includes("[") || split_input.includes("]")){
            if(split_input[1]== ']'){
                index += 1
                cheker += 2
            }else{
                cheker += 1
            }
           
        }else if("{" == split_input[index] || "}" == split_input[index] &&  split_input.includes("{") || split_input.includes("}")){
            if(split_input[1]== '}'){
                index += 1
                cheker += 2
            }else{
                cheker += 1
            }
           
        }else{
            return_valve = false
        }
    }
    if(cheker%2 == 0){
        return_valve = true
    }else{
        return_valve = false
    }   
    return return_valve
};




var ans = isValid("()[]{}");
console.log(ans);


// Question
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false