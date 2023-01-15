// Solution
function common(user_input){
    console.log(user_input);
    var split_list =[];
    var common1 = [];
    var common_user = "";
    for(var user of user_input){
        var split_user = user.split('');
        split_list.push(split_user)
    }    
    for(var com of split_list){
        for(var index of com){
            var chek = 0;
            for (var list2 of split_list){
                if(list2.includes(index)){
                    chek+=1   
                }
            }
            if(chek == split_list.length){
                if(common1.includes(index)){
                    // console.log()
                }else{
                    common1.push(index)
                    common_user+=index
                }  
            }  
        }
    }

    return common_user
}

common(["flower","flow","flight"]);


// Question
// 14. Longest Common Prefix
// Easy
// 12.1K
// 3.6K
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 


