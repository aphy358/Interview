// 二叉树多次插入新节点导致不平衡。二叉树查找的思想：查找所需的最大次数等同于二叉树的高度


const quickSort2 = function (nums) {
    if (nums.length < 2) return nums

    var midIndex = Math.floor(nums.length / 2)
    var middle = nums.splice(midIndex, 1)[0]
    var leftArr = []
    var rightArr = []

    for (let i = 0; i < nums.length; i++) {
        const o = nums[i];
        o < middle ?
            leftArr.push(o) :
            rightArr.push(o)
    }

    return quickSort2(leftArr)
        .concat(middle)
        .concat(quickSort2(rightArr))
}

const mergeSort = function (nums) {
    let merge = function (left, right) {
        var result = []

        while (left.length > 0 && right.length > 0) {
            left[0] > right[0] ?
                result.push(right.shift()) :
                result.push(left.shift())
        }

        return result.concat(left).concat(right)
    }

    if (nums.length < 2) {
        return nums
    }

    let middle = Math.floor(nums.length / 2)
    let left = nums.slice(0, middle)
    let right = nums.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}




// var t1 = +new Date
// for (let i = 0; i < 100000000; i++) {
//     quickSort2(nums)
// }
// var t2 = +new Date - t1
// console.log(t2);


function getLongestArr(nums) {
    var finalArr = []

    for (let i = 0; i < nums.length; i++) {
        var tmpArr = [nums[i]]

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > tmpArr[tmpArr.length - 1]) {
                tmpArr.push(nums[j])

                if (tmpArr.length > finalArr.length) {
                    finalArr = tmpArr
                }
            } else {
                break;
            }
        }
    }

    console.log(finalArr);
}

var nums = [100, 5, 6, 8, 2, -2, 99, 198, 200]
// getLongestArr(nums)

function process(arr) {
    let count = 0
    for (let i = 0; i < arr.length - count; i++) {
        if (arr[i] === 0) {
            count++
            for (let j = i; j < arr.length; j++) {
                arr[j] = arr[j + 1]
            }
            arr[arr.length - 1] = 0
            if (arr[i] === 0) {
                i--
            }
        }
    }

    console.log(arr);
}

// process([1,0,2,3,0,0,8,9,0,0])


function bigDataAdd(num1, num2) {
    let maxLen = Math.max(num1.length, num2.length)
    num1 = num1.split('').reverse().join('')
    num2 = num2.split('').reverse().join('')
    sum = []
    flag = 0

    for (let i = 0; i < maxLen; i++) {
        let tmpSum = (+num1[i] || 0) + (+num2[i] || 0) + flag
        if (tmpSum > 9) {
            flag = 1
        } else {
            flag = 0
        }
        sum.push(tmpSum % 10)
    }

    if (flag == 1) {
        sum.push(1)
    }

    console.log(sum.reverse().join(''));
}


bigDataAdd('999', '9999')


function quickSort(array) {
    function sort(low, high) {
        var i = low;
        var j = high;
        var flag = array[low];

        if (high > low) {
            while (i < j) {
                for (; i < j; j--) {
                    if (array[j] < flag) {
                        array[i++] = array[j]; //a[i] = a[j]; i += 1;
                        break;
                    };
                }
                for (; i < j; i++) {
                    if (array[i] > flag) {
                        array[j--] = array[i];
                        break;
                    }
                }
            }
            array[i] = flag;
            sort(low, i - 1);
            sort(i + 1, high);
        }
    }
    sort(0, array.length - 1);
    return array;
}

var nums = [5, 6, 8, 2, -2, 100, 99, 98, 102.1]
quickSort(nums)
console.log(nums);


var tt =
{
    "dataList": null,
    "returnCode": 1,
    "returnMsg": "请求成功！",
    "data": {
        "referenceNumber": "A55555666",
        "checkIn": "2018/08/10",
        "checkOut": "2018/08/11",
        "roomDetailList": [{
            "units": 1,
            "roomType": "豪华房",
            "roomTypeEng": "Deluxe",
            "bedType": "大床/双床[两份早餐]",
            "board": "两份早餐",
            "boardEng": "Breakfast FOR 2 Pax",
            "pax": 2,
            "guestsDetailList": ["娃 哈哈 [中国]", "巧克 力 [中国]"]
        }, {
            "units": 2,
            "roomType": "豪华房",
            "roomTypeEng": "Deluxe",
            "bedType": "大床/双床[两份早餐]",
            "board": "两份早餐",
            "boardEng": "Breakfast FOR 2 Pax",
            "pax": 1,
            "guestsDetailList": ["棒棒 糖 [中国]"]
        }],
        "hotelName": "北京丽都皇冠假日酒店  Crowne Plaza Beijing Lido",
        "hotelAddress": "北京 朝阳区 将台路6号",
        "hotelTel": "010-64373388",
        "hotelFax": "010-64379858",
        "cancellationPolicy": "2018年8月10日10:00后不可修改或取消，罚金为首晚房费.noshow罚全段",
        "addBreakfast": "2018/08/10至2018/08/11儿童早1份",
        "addBed": "2018/08/10至2018/08/11儿童床1份",
        "addWBN": "2018/08/10至2018/08/11宽带1份",
        "customerRequests": "取消条款:入住前0天10点不可修改或取消，罚金为首晚",
        "emergencyContactsInner": "0755-33397777"
    }
}