这是一个学习React国际化时借助create-react-app、bootstrap和react-intl-universal实现的小demo。

参考资料：
https://blog.csdn.net/maofeideng/article/details/84105007
https://www.jianshu.com/p/8bd5608c6544
https://blog.csdn.net/qq_20574857/article/details/103632923

遇到的问题：
用bootstrap创建下拉菜单（dropdown ）时样式没有生效。
解决方法：
下拉菜单依赖popper，bootstrap.bundle.js和bootstrap.bundle.min.js已包含popper，导入其中一个既可。（详情见bootstrap 官方文档：https://v4.bootcss.com/docs/getting-started/contents/）