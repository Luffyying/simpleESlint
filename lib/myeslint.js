//esprima 把源码转化为抽象语法树
let esprima = require("esprima")
//estraverse 遍历并更新抽象语法树
let estraverse = require('estraverse');
let Events = require("events")
let rules = require("./rules")
let RuleContext = require('./ruleContext')

class Myeslint extends Events {
    constructor () {
        super()
        this.messages = []
        this.currentText = null
        this.currentConfig = null
    }
    reset () {
        this.messages = []
        this.currentText = null
        this.currentConfig = null
        this.removeAllListeners()
    }
    verify(text,config,filename){
        //text:code
        //config:rules {}
        const self = this
        this.reset()
        this.currentText = text
        this.currentConfig = config
        console.log('verify:------')
        console.log(JSON.stringify(config))
        //config is series of setting{no-with:1,eqeqeq:1}
        Object.keys(config.rules).filter(key =>{
            return config.rules[key] >0
        }).forEach(key =>{
            const rule = rules.getRule(key)
            //rule:counterpart function
            if(rule){
                console.log('what!!!!!!!!')
                // console.log(RuleContext)
                const ruleResolve = rule(new RuleContext(key,this))

                // { BlockStatement: [Function: BlockStatement],
                //     SwitchStatement: [Function: SwitchStatement] }
                //add rules
                console.log(ruleResolve)
                Object.keys(ruleResolve).forEach((nodeType) => {
                    //绑定函数
                    self.on(nodeType, ruleResolve[nodeType]);
                });

            } else {
                throw new Error("Definition for rule '" + key + "' was not found.");
            }
        })


        var ast = esprima.parse(text, { loc: true, range: true })
        estraverse.traverse(ast, {
            enter(node) {
                self.emit(node.type, node);
            }
        });
    }
    report (ruleId, node, message) {
        this.messages.push({
            ruleId: ruleId,
            node: node,
            message: message,
        })
    }
}
module.exports = new Myeslint()