---
1.
```js
var foo = 1;
function bar() {
  foo = 10;
  return;
  function foo() {}
}
bar();
console.log(foo);
```

---
2.
```js
function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = 11;
}
console.log(typeof bar())
```

---
3.
```js
var x = 2;
var foo = {
  x: 5,
  baz: {
    x: 3,
    bar: function() {
      return this.x;
    }
  }
}
var bay = foo.baz.bar;
console.log(bay());
console.log(foo.baz.bar());
```

---
4.
```js
var x = 3;
baz = {
  x: 2,
  bar: function() {
    var x = 1;
    setTimeout(function () {
      var x = 5;
      console.log(this.x);
    }, 1000)
  }
};
baz.bar();
```

---
5.
```js
var foo = function bar() {};
console.log(typeof bar);
```

---
6.
```js
function foo() {}
delete foo.length;
console.log(typeof foo.length);
```
