
buf1 = Buffer.from([1,2,3,4,5,6]);
buf2 = Buffer.from(['a','b','c','d']);

console.log("buf1 to string = " + buf1.toString());
console.log("buf1 compare to buf2 = " + buf1.compare(buf2));

console.log("buf1 equals to buf2 = " + buf1.equals(buf2));