let num=153
let temp=num
let str=num.toString()
let len=str.length
sum=0
for (let i = 0; i < str.length; i++) {
    ld=temp/10
    sum=sum+(str[i]**len)
    temp=temp/10
    
}
console.log(sum);
if (num==sum) {
    console.log("armstrong no");
}else{
    console.log("not an armstrong no");
}
