# LeanCloud 的技术支持（工单）系统

如果还未见识过工单系统，请移步于 

###[ticket.avosapps.com](http://ticket.avosapps.com/)

这是 LeanCloud 的工单系统的开源版本。请见 [myticket.avosapps.com](http://myticket.avosapps.com)

## 当前使用本项目搭建的网站
* https://ticket.avosapps.com
* https://yanest.avosapps.com (http://tickets.lingyun.io/)
* https://myticket.avosapps.com
* https://support.avosapps.com
* https://sustcticket.avosapps.com
* https://keddooticket.avosapps.com
* https://shguo.avosapps.com
* https://ticket001.avosapps.com
* https://yibogongdan.avosapps.com


这是基于 LeanCloud 的 **Javascript SDK** 和 **云代码** 功能做的。

## 云代码可以干什么？

* **实现客户端难以实现的业务逻辑**：比如将两个人配对，将等待用户的信息收集在云代码中，根据他们的地理位置等信息配对。类似短暂的信息就不用存入数据库了。类似的组织调配任务也比较适合在云代码中实现。
* **定时任务**：比如定时请求教务处出成绩的页面，页面有变化、新出成绩的时候推送给相关的用户。
* **给你的应用搭建官方网站**：比如看电影学英语的应用，将一些精选视频片段放在网站上能更好地吸引用户。这时候，在云代码中访问数据就像在移动端一样便捷。
* 当在移动端无从下手的时候，不妨站在服务端、云代码的角度思考问题。

云代码的例子，

* https://drop.avosapps.com
* http://wristband.avosapps.com/
* http://speedrocket.avosapps.com/


## 可以从这个项目学到什么？

* 涵盖了 **JavaScript SDK** 的大部分章节，涵盖了 `对象`、`查询`、`Promise`、`文件`、`用户`、`云代码函数` 这些章节。
* 更多的 Best Practice
* 熟悉 Node.js、Express、HTML、CSS、EJS

也可以从工单系统中借鉴其中的好想法。

## 工单系统的特性

###列举工单
![img](https://raw.githubusercontent.com/leancloud/ticket-app/master/readme/list.png)

###根据工程师负责模块的不同，显示相应类型的工单，分工明确
![img](https://raw.githubusercontent.com/leancloud/ticket-app/master/readme/filter.png)

###一个简洁的时间线回复
![img](https://raw.githubusercontent.com/leancloud/ticket-app/master/readme/reply.png)

### 与内部沟通工具相集成，方便及时回复
![img](https://raw.githubusercontent.com/leancloud/ticket-app/master/readme/integration.png)

### 工程师联系信息列表
![img](https://raw.githubusercontent.com/leancloud/ticket-app/master/readme/contact.png)

### 搜索工单
![img](https://raw.githubusercontent.com/leancloud/ticket-app/master/readme/search.png)

### 工程师回复统计
![img](https://raw.githubusercontent.com/leancloud/ticket-app/master/readme/stat.png)


改一下工单类别，增加几个管理员登录，改一下标题 `LeanCloud 技术支持系统`，就可以为你的公司、团队也搭建一个技术支持系统。

## 本地调试

只需要正常的云代码调试即可，需要 [云代码调试工具](https://leancloud.cn/docs/cloud_code_commandline.html)

* 命令行输入 `avoscloud`
* 浏览器打开 `http://localhost:3000/`

部分目录树
```
└── cloud            推荐指数
    ├── app.js       ***    (工单系统逻辑相关，可跳着读)
    ├── config.js    **     (配置文件，搭建工单系统必看)
    ├── login.js     **     (登录相关)
    ├── madmin.js    ****   (多层的异步处理，推荐)
    ├── main.js      **     (云代码函数，定时器相关)
    ├── mlog.js      
    ├── mticket.js   
    ├── muser.js     *****  (基本的增删改查，入门推荐)    
    ├── mutil.js
    ├── ...
```

更多如何创建应用搭建工单系统、技术分享请见 [Wiki](https://github.com/leancloud/ticket-app/wiki)。

## Wiki 

搭建系统与阅读指南

* [申请应用搭建工单系统指南](https://github.com/leancloud/ticket-app/wiki/%E7%94%B3%E8%AF%B7%E5%BA%94%E7%94%A8%E6%90%AD%E5%BB%BA%E5%B7%A5%E5%8D%95%E7%B3%BB%E7%BB%9F%E6%8C%87%E5%8D%97)
* [阅读代码指南](https://github.com/leancloud/ticket-app/wiki/%E9%98%85%E8%AF%BB%E4%BB%A3%E7%A0%81%E6%8C%87%E5%8D%97)

技术分享

* [从 url 访问到网页展示](https://github.com/leancloud/ticket-app/wiki/%E4%BB%8E-url-%E8%AE%BF%E9%97%AE%E5%88%B0%E7%BD%91%E9%A1%B5%E5%B1%95%E7%A4%BA)
* [并行Promise处理](https://github.com/leancloud/ticket-app/wiki/%E5%B9%B6%E8%A1%8CPromise%E5%A4%84%E7%90%86)
* [用户信息更改页的处理方法](https://github.com/leancloud/ticket-app/wiki/%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E6%9B%B4%E6%94%B9%E9%A1%B5%E7%9A%84%E5%A4%84%E7%90%86%E6%96%B9%E6%B3%95)


## License

MIT

[LeanCloud 站点下载地址](https://download.leancloud.cn/demo/)

