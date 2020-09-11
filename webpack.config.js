// {
//     "plugins": [
//       // ...
//       "react-hooks"
//     ],
//     "rules": {
//       // ...
//       "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
//       "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
//     }
//   }
const path = require('path');

module.exports = {
    module: {
    //     rules: [
    //     {
    //         test: /\.(js|jsx)$/,
    //         enforce: "pre",
    //         loader: "eslint-loader",
    //         include: [path.resolve(__dirname, 'src')]// 指定检查的目录
    //     }] 
    // }
    "plugins": [
        // ...
        "react-hooks"
      ],
      "rules": {
        // ...
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
      }
    }
}
    
