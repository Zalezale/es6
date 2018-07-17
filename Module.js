/**
 * export命令规定的是对外的接口,与值是动态绑定的，只要处于顶层就行
 * 静态加载
 * as建立别名
 * export default为模块制定默认输出
 * 一个模块只能存在一个默认输出
 * 默认输出在输入之后可以取任意的名字
 * export default 后面不能跟变量声明语句
 * export default class{...}
 * import导入的接口与导出的一致
 * as建立别名
 * 导入的变量只读
 * 提升效果
 * 静态解析阶段执行
 * 执行加载的模块
 * 单例模式
 * 整体加载需要使用别名来使用
 * export与import的复合写法 （export *命令会忽略circle模块的default方法）
 * 跨模块常量
 * 提案 import()实现动态加载
 */
