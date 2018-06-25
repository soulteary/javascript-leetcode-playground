![JavaScript LeetCode Playground](./logo.png)

# JavaScript LeetCode Playground

> 用简洁、优雅、高效的 JavaScript 来愉快的玩 LeetCode 。

## 起源

感觉许久没好好玩，一些技能都生疏了，这一阵打算整理自己，先从做一些题开始吧。

## 期望

希望这个项目能够在某些程度上给编程新人带来一个相对良好的起步范例，或者给到老伙计们一些对现有项目改进的想法。

再有就是做到在同类提交内，效率相对较高（可参见文档尾部附录执行结果）。

## 改进

网上类似项目应该有不少，那么这个项目的优势在哪里呢？

我个人比较认同下面的观点：

> 代码是人写给人看的，只是机器恰好可以运行。

所以，这个项目中的问题解决方案都使用更适合阅读的 `ECMAScript 6` 来完成。

通过 `eslint` 配合 `Google Code Style` 规则来统一代码风格并避免一些不好的实践混杂在代码中。

在程序能够满足需求的前提下，使用 `Mocha` 来进行合理的测试验证，保障程序的简洁和健壮。

通过覆盖率检测工具 `nyc` 来辅助判断程序是否在设计上有明显缺陷，避免为了答题而写答案。

至于执行效率，应该是编译器去解决，`Google Clouse Compile` 就是一个不错的工具。

另外，重复进行验证的操作，都交由 `CI` 机器人去做，比如这个项目里，我就添加了两种机器人：`Travis` 和 `GitLab` 。

## 使用

1. 项目运行于 `Node v10` 环境下，请先完成本地或者服务器上相关环境的初始化。
2. 虽然Npm v6速度大幅提升，但是在当前还是建议暂时使用yarn，项目初始化可以更加高效：
  - 直接执行 `yarn` 即可完成项目初始化。
3. 执行 `yarn test` 可以进行单元测试，并生成覆盖率测试报告，相关报告保存在 `coverage` 目录中。
4. 如果要进行提交，可以使用 `yarn build` 将源代码进行编译优化，提升云服务器执行效率。

## 最后

如果在使用上遇到问题，欢迎联系沟通。

## 附录（执行效率）

| 序号 | 题目 | 未编译 | 编译后 |
| --- | --- | --- | --- |
| 001 | Two Sum | [60ms](https://leetcode.com/submissions/detail/160963075/) 95% | [56 ms](https://leetcode.com/submissions/detail/160962939/) 98.84% |
| 002 | Add Two Number | [120ms](https://leetcode.com/submissions/detail/160963176/) 96.15% | [116ms](https://leetcode.com/submissions/detail/160963240/) 98.95% |
