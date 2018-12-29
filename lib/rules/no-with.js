//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    return {
        "WithStatement": function(node) {
            context.report(node, "Unexpected use of 'with' statement.");
        }
    };
};


//实现的规则类似这样：这是赋值的过程，变量名长度大于两位
// module.exports = {
//     rules:{
//         "var-length":{
//             create:function(context){
//                 return {
//                     VariableDeclarator:node =>{
//                         if(node.id.name.length <2){
//                             context.report(node,'Variable names should be longer than 1 character')
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
