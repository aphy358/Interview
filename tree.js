// 二叉树多次插入新节点导致不平衡。二叉树查找的思想：查找所需的最大次数等同于二叉树的高度


const quickSort2 = function (nums) {
    if(nums.length < 2) return nums

    var midIndex = Math.floor(nums.length / 2)
    var middle = nums.splice(midIndex, 1)[0]
    var leftArr = []
    var rightArr = []

    for (let i = 0; i < nums.length; i++) {
        const o = nums[i];
        o < middle
            ? leftArr.push(o)
            : rightArr.push(o)
    }

    return quickSort2(leftArr)
            .concat(middle)
            .concat(quickSort2(rightArr))
}

const mergeSort = function(nums){
    let merge = function(left, right){
      var result = []
    
      while(left.length > 0 && right.length > 0){
        left[0] > right[0]
          ? result.push(right.shift())
          : result.push(left.shift())
      }
    
      return result.concat(left).concat(right)
    }
  
    if(nums.length < 2){
      return nums
    }
  
    let middle = Math.floor(nums.length / 2)
    let left = nums.slice(0, middle)
    let right = nums.slice(middle)
  
    return merge(mergeSort(left), mergeSort(right))
}


const quickSort = function (nums) {
    var sort = function(low, high){
        var i = low
        var j= high
        var base = nums[low]

        if(i < j){
            for (; i < j; j--) {
                if(nums[j] < base){
                    nums[i++] = nums[j]
                    break;
                }
            }

            for (; i < j; i++) {
                if(nums[i] > base){
                    nums[j] = nums[i]
                    break;
                }
            }

            nums[i] = base
            sort(0, i - 1)
            sort(i + 1, high)
        }
    }

    sort(0, nums.length - 1)

    return nums
}
  


// var nums = [5, 6, 8, 2, -2, 100, 99, 98, 102.1]

// var t1 = +new Date
// for (let i = 0; i < 100000000; i++) {
//     quickSort2(nums)
// }
// var t2 = +new Date - t1
// console.log(t2);


function getLongestArr(nums){
    var finalArr = []

    for (let i = 0; i < nums.length; i++) {
        var tmpArr = [nums[i]]

        for (let j = i + 1; j < nums.length; j++) {
            if(nums[j] > tmpArr[tmpArr.length - 1]){
                tmpArr.push(nums[j])

                if(tmpArr.length > finalArr.length){
                    finalArr = tmpArr
                }
            }else{
                break;
            }
        }
    }

    console.log(finalArr);
}

var nums = [100, 5, 6, 8, 2, -2, 99, 198, 200]
getLongestArr(nums)


var A = function (){
    console.log('hello')
}

var a = new A()