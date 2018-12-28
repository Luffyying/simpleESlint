var program = require('commander')

program
    .version('0.0.1')
    .description('a test cli program')
    .option('-n,--name <name>','your name','GK')
program.parse(process.argv)



//http://blog.gejiawen.com/2016/09/21/make-a-node-cli-program-by-commander-js/