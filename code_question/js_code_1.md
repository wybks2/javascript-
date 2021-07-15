1. [1,2,3].map(parseInt) // => [1,NaN,NaN]
> 解析:map函数将数组每个函数分别给函数处理,传入parseInt(ele, index);
> parseInt()  string radix解析基数 0十进制 1超出区间 2 二进制