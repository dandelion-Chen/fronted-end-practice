window.onload = function () {
    console.log('-------------------创建时间 -------------------');
    console.log(createDate()) // 获取当前的时间
    console.log(createDate('2018-12-31')); // 获取2018-12-31 的标准时间， 注意： 在ios中，需要将 ‘-’ 换成 ‘/’ 不然会报错。
    console.log(createDate('2018/12/31'))
    console.log(createDate(1995, 11, 17))

    console.log(Date.now());
    console.log(Date.parse('2016-01-02'));

    var date = new Date('2018-12-30');
    console.log(date.getDate()) // 本地时间返回指定日期对象的月份中的第几天（1-31）
    console.log(date.getDay()) // 根据本地时间返回指定日期对象的星期中的第几天（0-6） 周日为 0
    console.log(date.getFullYear()) // 返回指定日期对象的年份
    console.log(date.getMinutes()) // 返回指定日期对象的分钟（0-59）
    console.log(date.getMonth()) // 返回指定日期对象的月份（0-11）
    console.log(date.getSeconds()); // 返回指定日期对象的秒数（0-59）。
    console.log(date.getTime()); // 返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数
}

function createDate (value) {
    var date;
    if (value) {
        if(arguments.length > 1) {
            date = new Date (...arguments);
        }else {
            date = new Date (value);
        }
    }else {
        date = new Date();
    }
    return date;
}