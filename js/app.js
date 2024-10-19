// Foreach:
// N1:
let num1ForEach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let results1ForEach = []
num1ForEach.forEach(function(res1ForEach) {
    results1ForEach.push(res1ForEach)
});
console.log(num1ForEach);

// N2:
let num2ForEach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let results2ForEach = [];
num2ForEach.forEach(function(res2ForEach) {
    results2ForEach.push(res2ForEach + 5);
});

console.log(results2ForEach);

// N3:
let num3ForEach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let results3ForEach = [];
num3ForEach.forEach(function(res3ForEach) {
    if (res3ForEach % 2 == 1) {
        results3ForEach.push(res3ForEach)
    }
});
console.log(results3ForEach);

// N4:
let num4ForEach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let results4ForEach = 0
num4ForEach.forEach(function(res4ForEach) {
    res4ForEach = results4ForEach++
});
console.log(results4ForEach);

// N5:
let num5ForEach1 = [1, 2, 3, 4]
let num5ForEach2 = [5, 6, 7, 8, 9, 10]
let results5ForEach = []
num5ForEach1.concat(num5ForEach2).forEach(function(res5ForEach) {
    results5ForEach.push(res5ForEach)
})
console.log(results5ForEach);

//map:
// N1:
let num1Map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1Map = num1Map.map(function(res1Map) {
    return res1Map * 2;
});
console.log(result1Map);

// N2:
let num2Map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result2Map = num2Map.map(function(res2Map) {
    return res2Map * res2Map;
});
console.log(result2Map);

// N3:
let num3Map = ["hello world"];
let result3Map = num3Map.map(function(res3Map) {
    return res3Map.toUpperCase()
});
console.log(result3Map);

// N4:
let num4Map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4Map = num4Map.map(function(res4Map) {
    return -res4Map;
});
console.log(result4Map);
// N5:
let num5Map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result5Map = num5Map.map(function(res5Map) {
    return res5Map + 3
});
console.log(result5Map);

//filter:
// N1:
let num1Filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1Filter = num1Filter.filter(function(res1Filter) {
    return res1Filter % 2 == 0;
});
console.log(result1Filter);

// N2:
let num2Filter = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let result2Filter = num2Filter.filter(function(res2Filter) {
    return res2Filter > 0;
});
console.log(result2Filter);

// N3:
let num3Filter = ["apple", "banana", "kiwi", "grapefruit", "orange", "pear"];
let result3Filter = num3Filter.filter(function(res3Filter) {
    return res3Filter.length > 5;
});
console.log(result3Filter);

// N4:
let num4Filter = [29, 15, 30, 70, 12];
let result4Filter = num4Filter.filter(function(res4Filter) {
    return res4Filter >= 18
});
console.log(result4Filter);

// N5:
let num5Filter = [5, 10, 7, 3, 15, 20, 40, 50];
let result5Filter = num5Filter.filter(function(res5Filter) {
    return res5Filter <= 10
});
console.log(result5Filter);

// find:
// N1:
let num1Find = [5, 12, 7, 18, 3, 20, 8, 15];
let result1Find = num1Filter.filter(function(res1Find) {
    return res1Find > 10;
});
// Bu yerda filterlab bering degani uchun filter bilan ishlatdim
console.log(result1Find);

// N2:
let num2Find = [-5, -12, 7, -18, 3, 20, -8, 15];
let result2Find = [];

for (let i = 0; i < num2Find.length; i++) {
    let res2Find = num2Find.find(function(resNum2Find) {
        return resNum2Find > 0;
    });

    if (res2Find) {
        result2Find.push(res2Find);
        num2Find.splice(num2Find.indexOf(res2Find), 1);
    } else {
        break;
    }
}

console.log(result2Find);

// N3:
let num3Find = ["apple", "banana", "kiwi", "grapefruit", "orange", "pear"];
let result3Find = num3Find.filter(function(res3Find) {
    return res3Find.length > 4;
});
console.log(result3Find);
// Bu yerda filterlab bering degani uchun filter bilan ishlatdim