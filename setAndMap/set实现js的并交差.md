1. 并集
```
new Set([...set1, ...set2])
数组也可
合并[...set1,...set2]，然后去重
```
2. 交集
```
set 方法 数组也可
new Set([...set1]).filter(x => set2.has(x))
```
3. 差集
set 方法 数组也可
```
new Set([...set1]).filter(x => !set2.has(x))
```