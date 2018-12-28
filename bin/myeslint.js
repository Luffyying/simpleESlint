#!/usr/bin/env node


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
