#!/usr/bin/env node

/*
上面的注释,是隐式调用node执行程序（相对应与显示调用而言，node index.js）,因为在执行git,npm 等这类命令行的
时候，，前面不会再带一个执行程序名称，，这行命令就是指定该文件的执行程序 node,package.json中的bin字段：
{
    "bin": {
      "myeslint": "./bin/myeslint.js"
    }
}
这样配置：就是用全局命令myeslint 来代替node 


*/
var cli = require("../lib/index");
//当node运行的时，会有一些存在内存中的变量，如process---进程对象，argv是process的一个属性,打印出来大致是这样的
/*
$ node test1.js --name gk
[
    '/usr/local/Cellar/node/6.6.0/bin/node',
    '/Users/gejiawen/code/20160921/test1.js',
    '--name',
    'gk'
]


*/
//process.argv是一系列lint command
cli.execute(process.argv);

//cli相当于eslint的执行流程，调用API的时候一般只要操作Cli即可，相当于eslint的大脑
