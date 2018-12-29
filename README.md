# first exploration ESlint

## Jest

>Jest是Facebook出品的一个面向前端的测试框架 内置了一些常用的测试工具，比如自带断言、测试覆盖率等


## ESlint的原理概述:

>主要是将 js代码解析成AST后，再在遍历AST的过程中进行各个规则的校验，
>目前所使用的解析器是 eslint 基于 Acorn 开发的一个名为 Espree 的项目

## ESlint执行流程：

* 1.读取配置参数
* 2.实例化CliEngine
* 3.加载规则和插件
* 4.生成AST和根据AST创建作用域
* 5.代码检查 是否需要修复 {yes:修复操作,no:整体抛出检查信息}
* 6.结束

## 启动ESlint

>项目中使用ESlint的时候，一般当执行ESlint命令的时候，ESlint会调用bin下的eslint.js来启动代码检查
>进而调用cli.js实例化CLIEngine......

## commander.js

>应用于编写一个node.js命令行程序
>commander.js是TJ所写的一个工具包，其作用是让node命令行程序的制作更加简单
>详细信息见:./lib/commander.js

## Linter

>用于扫描源代码以捕获这些问题,续类似的工具都叫 Lint 或 Linter



