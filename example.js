/*
babel如何将箭头函数转换为普通函数
*/

let sum = (a,b) =>a+b

/*
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "sum"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 21,
            "id": null,
            "expression": true,
            "generator": false,
            "params": [
              {
                "type": "Identifier",
                "start": 11,
                "end": 12,
                "name": "a"
              },
              {
                "type": "Identifier",
                "start": 13,
                "end": 14,
                "name": "b"
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 18,
              "end": 21,
              "left": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "name": "a"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "b"
              }
            }
          }
        }
      ],
      "kind": "let"
    }
  ],
  "sourceType": "module"
}

*/
var sum = function sum(a,b){
    return a+b
}

/*
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "sum"
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 45,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "name": "sum"
            },
            "expression": false,
            "generator": false,
            "params": [
              {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "a"
              },
              {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "name": "b"
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 27,
              "end": 45,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 33,
                  "end": 43,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 40,
                    "end": 43,
                    "left": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "name": "a"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "name": "b"
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "module"
}

*/

//二者不同在于init
//所以要将箭头函数的arrowFunctionExpression 转换为FunctionExpression