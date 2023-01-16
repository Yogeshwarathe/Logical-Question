// Solution
var kWeakestRows = function(mat, k) {
    // console.log(mat);
    var num_key = 0
    var object_num = {};
    for(var i of mat){
        var add = 0;
        var big_value = 1000;
        for(var num of i){
            add+=num
        //     console.log(num);
        }
        object_num[num_key]=add
        num_key+=1
        // console.log(object_num);
        
    }
    console.log(object_num);
    var num_list = [];
    var length = Object.keys(object_num).length
    // console.log(length);
    for (var y=0;y<k; y+=1){
        var first_num = 1000
        for (var chek=0;chek<length; chek+=1){
            var value = object_num[chek];
            if(first_num > value){
                first_num = value 
            }
        }
        const key1 = Object.keys(object_num).find(key => object_num[key] === first_num);
        num_list.push(key1)
        delete object_num[key1]
        
    }
    return num_list

}


var ans = kWeakestRows([[1,1,0,0,0],
      [1,1,1,1,0],
      [1,0,0,0,0],
      [1,1,0,0,0],
      [1,1,1,1,1]],5)
console.log(ans);



// Qestion
// 1337. The K Weakest Rows in a Matrix
// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
// A row i is weaker than a row j if one of the following is true:
// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.
// Example 1:
// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 2 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 2 
// - Row 4: 5 
// The rows ordered from weakest to strongest are [2,0,3,1,4].
// Example 2:
// Input: mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// Output: [0,2]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 1 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 1 
// The rows ordered from weakest to strongest are [0,2,3,1]