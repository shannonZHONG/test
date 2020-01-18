###  scope chain的应用<br>
1.0 树型结构<br>
2.0 例题一：<br> 

``` 
            var a = 1;
            function f1() {
            var a = 2;
            f2.call(window);
            console.log("f1 Scope:" + a);

            function f2() {
                var a = 3;
                console.log("f2 Scope: " + a);

            }
        }
        f1.call(window);
        console.log("window Scope:" + a);

```
例题二：<br>

``` 
  var a = 1;

        function f1() {
            a = 3;// ??????? 多注意 没有var 
            f2.call(window);
            console.log("funcion1:" + a);

            function f2() {
                var a = 4;
                console.log("function2:" + a)
            }
        }
        f1.call(window);
        console.log("window:" + a);

``` 

例题三：<br>
```   
        var foo = 1;

        function bar() {
            if (!foo) {
                var foo = 10; // var foo 是会提升的 
            }
            console.log(foo)
        }
        bar();
        
 ``` 
 
例题四：<br>


 ``` 
        var a = 1;

        function b() {
            a = 10; // 所以 这个a 就变成了 a in local scope 
            return;

            function a() {} // 这个会提升 var a = function() {} 

        }
        b();
        console.log(a);  
 ``` 
 

例题五：<br>

```
 var a = 1;

        function f1() {
            f2.call(window);
            console.log(a);
            var a = 2; // 变量只提升 声明 不包含赋值

            function f2() {
                var a = 3;
                console.log(a);
            }
        }
        f1.call(window);
        console.log(a);

``` 

例题六：<br>

```   

        var a = 1;

        function f1() {
            console.log(a);  
            var a = 2;
            f4.call(window);

        }

        function f4() {
            console.log(a); 
        }
        f1.call(window);
        console.log(a);

``` 



 例题七：<br>
 ```
  var a = 1;

        function f1() {
            console.log(a);
            var a = 2;
            f4.call(window);

        }

        function f4() {
            console.log(a);
        }
        
        a = 2;// 这句话所在的位置很重要  
        f1.call(window);
        console.log(a);

``` 
 
 
 
 例题八：<br>
 ```
 var i = 0;
        var f = function() {
            var j = 0;
            console.log(i);

        }
        f();
        console.log(j);
``` 
 
 例题九: <br>
```
     var f = function() {
            i = 0;
            var j = 0;

        }
        f();
        console.log(i);
        console.log(j);

``` 

 
 例题十：<br>
 ```
if(true){
 var i = 0; //还是在global scope 里面声明一个变量
}
console.log(i);

``` 
 
 例题十一：<br>
 ```
for (var i = 0; i<10; i++){}
console.log(i);
``` 

 例题十二：<br>
 ```
function f(){
    return 1
}
a = f 
console.log(a); // 函数 f 
```  

例题十三：<br>
 ```
 没有独立的作用域   
 var liList = ul.getElementsByTagName('li')
for(var i=0; i<6; i++){
  liList[i].onclick = function(){
    alert(i) // 为什么 alert 出来的总是 6，而不是 0、1、2、3、4、5
  }
}
 
 ```
### closure <br>
3.0「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。<br>
或者说 
闭包是一个函数.<br>
一个什么样的函数?<br>
有权访问另一个函数作用域中的变量的函数<br>

这是关于闭包最简单最直接的一个例子：<br>
 ```
var local = "变量";
        function foo() {
            console.log(local);
        }
        foo.call(window);
 ```
 
 
3.1 closure 另外一个例子 :<br> 

  ```
 function createComparisonFunction(propertyName) {
            return function(object1, object2) {
                var value1 = object1[propertyName];
                var value2 = object2[propertyName];

                if (value1 < value2) {
                    return -1;
                } else if (value1 > value2) {
                    return 1;
                } else {
                    return 0;
                }

            };
        }

 ```

 
3.2 闭包的目的：<br>
隐藏变量<br>
如果不把local 放在 function foo 里面  local 就成glocal value<br> 
 
  ``` 
    function foo() {
            var local = 1;

            function bar() {
                local++;
                console.log(local);
                return local;
            }
            return bar;
        }

        var func = foo();
        func();  
  ```


  
### IIFE<br>
4.0 在原来没有let的时光里，是怎么搞出一个块级作用域的?<br>
IIFE<br>
IIFE的使用注意：<br>
函数的值不能直接替代函数名，会导致错误。
因为函数声明不能直接跟圆括号,要将函数声明转换成函数表达式，只需要添加一个圆括号<br>

```
(function(){})();

```
在匿名函数中定义的任何变量,都会在执行结束时被撤销<br>
因此变量i是能在循环中使用，使用后被撤销<br>

```
 function outPutNumbers(count) {
            (function() {
                for (var i = 0; i < count; i++) {
                    alert(i);
                }
            })();
            alert(i);
        }
 var test = outPutNumbers(3);      
```

### 垃圾回收<br>
如果一个对象没有被引用，它就是垃圾<br>
``` 
var a = { name:'a'};
var b = {name:'b'};
a = b;

 ```
2.0.7.2 内存泄漏


 
