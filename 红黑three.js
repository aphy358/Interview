// 二叉树多次插入新节点导致不平衡。二叉树查找的思想：查找所需的最大次数等同于二叉树的高度

// 红黑树，

// 1.节点是红色和黑色
// 2.根节点是褐黑色
// 3.每个叶子节点都是黑色的空节点(NIL节点)
// 4.每个红色节点的两个子节点都是黑色(从每个叶子到跟的所有路经不能有两个连续的红色节点)
// 5.从任意节点到其每个叶子的所有路经都包含相同数目的黑色节点


// 红黑树从根节点到叶子的最长路经不会超过最短路经的2倍

// 变色 旋转（左旋转和有旋转）

// 

function tranlate(decNumber, base){
    var bitArr = '0123456789ABCDEF'
    var result = []

    while(decNumber > 0){
        var cur = decNumber % base
        result.push(bitArr[cur])
        decNumber = Math.floor(decNumber / base)
    }

    return result.reverse().join('')
}



const quickSort2 = function (nums) {
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

console.log(quickSort2([5, 6, 8, 2, -2, 100]));
