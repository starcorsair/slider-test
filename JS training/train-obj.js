const obj = {};
obj.a = 1;
console.log(obj.a);
obj.b = 2;
console.log(obj.b);
obj.c = function () {
  console.log(3);
};
console.log(obj.c);
delete obj.b;
console.log(obj);
