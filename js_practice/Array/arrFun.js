window.onload = function () {
    var arr2 = ['我是第一个','我是第二个','我是第三个','我是第四个','我是第五个','我是第六个'];
    forEachInsertItem(arr2);

    //添加元素到数组的末尾 push，删除数组末尾的元素pop
    console.log('添加元素到数组的末尾 push，删除数组末尾的元素pop-------------------------');
    pushDataToArr('在末尾加入', arr2);
    console.log(arr2)
    popDataFromArr(arr2);
    
    // 添加元素到数组的头部unshift，删除数头部尾的元素shift 
    console.log('添加元素到数组的头部unshift，删除数头部尾的元素shift------------------')
    unshiftDataFromArr('在头部加入', arr2);
    console.log(arr2)
    shiftDataToArr(arr2);

    // 复制数组
    console.log('复制数组--------------------------------------');
    var arr2Copy = arr2.slice();
    var arr3Copy = arr2.slice(1, 5);
    var arr4Copy = arr2.slice(-5, -2);
    console.log(arr2Copy);         // ["我是第一个", "我是第二个", "我是第三个", "我是第四个", "我是第五个", "我是第六个"]
    console.log(arr3Copy);        // ["我是第二个", "我是第三个", "我是第四个", "我是第五个"]
    console.log(arr4Copy);        //["我是第二个", "我是第三个", "我是第四个"]  
    arr2Copy.shift();
    console.log(arr2Copy, arr2)
    
    //获取索引 ----------------------------
    console.log('获取索引------------------------');
    console.log(arr2.indexOf('我是第一个'));  // 0

    var arr3 = arr2.splice(0, 1);  //删除一个;
    console.log(arr3, arr2);  //["我是第一个"] , ["我是第二个", "我是第三个", "我是第四个", "我是第五个", "我是第六个"]

    var arr4 = arr2.splice(0, 2); //从第一个开始，删除2两个;
    console.log(arr4, arr2);  // ["我是第二个", "我是第三个"], ["我是第四个", "我是第五个", "我是第六个"]

}

function forEachInsertItem (arr) {
    arr.forEach((element, index, array)  => {
        console.log(element, index, array);
    });
}

function pushDataToArr (value, arr) {
    arr.push(value);
    console.log(arr);
}

function popDataFromArr (arr) {
    arr.pop();
    console.log(arr);
}

function unshiftDataFromArr  (value, arr) { //在头部添加
    arr.unshift(value);
    console.log(arr);
}

function shiftDataToArr (arr) { // 在头部删除
    arr.shift();
    console.log(arr);
}