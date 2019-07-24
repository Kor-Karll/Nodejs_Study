a = [3,1,2];
console.log(a);
a.sort();

function b(v1, v2)
{
    // return v2-v1;
    // return v1-v2;
    return 0;
}

a.sort(b);
// 익명함수
a.sort(function(v1,v2){return v2-v1;});

console.log(a);

function sort(callback)
{
    callback();
}

sort(function(){console.log('Hello Callback')});