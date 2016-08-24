module.exports = {
  name: "陈凯俊",
  intro: "I'm Kaijun, i gonna use Markdown here, but it's haven't been implemented yet.",
  contact: [
    {
      title: "Mail",
      content: "kaijun.cn@gmail.com"
    },
    {
      title: "Web",
      content: "http://kaijun.rocks",
      url: "http://kaijun.rocks"
    },
  ],
  social: [
    {
      name: "Github",
      username: "Kaijun",
      url: "https://github.com/Kaijun"
    },
    {
      name: "twitter",
      username: "Demonbane_x",
      url: "https://twitter.com/Demonbane_x"
    },
    {
      name: "instagram",
      username: "kaijun.cn",
      url: "https://www.instagram.com/kaijun.cn/"
    },
    {
      name: "weibo",
      username: "Demonbane",
      url: "http://weibo.com/1656320160/profile?topnav=1&wvr=6"
    },
  ],
  experiences: [
    {
      company: "TU Dresden",
      period: "Jan 2015 - Aug 2015",
      title: "Student Assistance",
      desc: "从零搭建一个名为`PUMa(Projekt Usability in Mittelstandsanwendungen)`的项目. 是一个可以通过语义来搜索专家, 搜索可用项目的平台. 使用 Angular.js 搭建了整个项目的第一版, 严格依据 MVVM Pattern 来设计架构, 并较好地分离各个组件的耦合. 严格地将设计图转换成 App 的实现. 使用 Bootstrap Layout 来完成 Responsive 的需求, Google Map 接口实现地图可视化等."
    },
    {
      company: "TU Dresden",
      period: "Aug 2014 - Jan 2015",
      title: "Student Assistance",
      desc: "在早期的 SA 工作中, 我参与了由学校多媒体技术所以及欧盟, 萨克森州等一起推进的项目`Edyra`. 它是一个混搭式 Dashboard, 用户可以自由选择不同功能的组件(比如地理位置, 天气), 然后将组件的输入输出连接起来, 呈现数据自动化处理后的结果. 在这项工作中, 我的任务主要是开发新的组件以及维护旧的组件. 提高整个平台的可用性和稳定性. 主要技术栈: ExtJS(主 UI 框架), jQuery, Underscore, RaphaeJS等."
    }
  ],
  projects: [
    {
      title: "大口袋物流系统(外包项目)",
      desc: "为德国一个物流转运公司设计的一个系统. 由 3 人分工合作完成. 该项目同时包含了用户, 以及管理员后台两个子项目. 参与了需求分析, 梳理业务, 到整个前台项目的构建. 技术栈为 Angular.js + Pure.CSS + Gulp.js, 用户端包含了提交包裹, 查看包裹列表/详情, 联系客服等主要功能. 管理员端包含了整个公司内部业务流程, 处理包裹, 更改包裹状态, 发货, 跟踪订单, 工单处理, 以及简易的 CMS 等功能. ",
      url: "https://github.com/Kaijun/logisitic_front"
    },
    {
      title: "Graphicuss",
      desc: "毕业设计项目. 一个类 StackOverflow, 用于教育用途高度可交互化的系统. 在回答问题功能上, 用户可以使用图形绘画的方式解答问题. 并提供了了 Canvas 内容的序列化以及可持续化的解决方案. 使用户可以引用他人的(图形)解答, 并且直接在此基础上做精细的修改. 同时使用 WebSocket 实现了用户可以实时更新某一资源(问题/答案)的最新状态, 提供了使用 WebSocket 订阅特定资源的解决方案. 整个前台技术栈使用了 React.js + Redux + Webpack, 并使用 ES6 + Babel 使用 JavaScript 最新特性. 并遵循了 React/Redux 的最佳实践. ",
      url: "https://github.com/Kaijun/graphicuss"
    },
    {
      title: "CV-Generator",
      desc: "一个通过改写配置文件内的个人信息就可以自动生成个人简历的工具. 使用 NPM Scripts & Gulp 自动化所有开发, 编译, 部署流程, 使用 Flex 来布局, CSS3 Animation 作简单的效果. (此简历就是由它生成 😄 )",
      url: "https://github.com/kaijun/cv-generator/"
    },
    {
      title: "Zimuzu 自动签到程序",
      desc: "为了偷懒的一个 Hack 工具 😈 .  字幕组自动签到程序, 部署到Heroku后, 默认每2小时尝试签到一次. 可以提供多组账号同时签到. 但是每个帐号成功签到后会记录, 今天便不再尝试签到. 技术栈上主要使用了 Phantom.js 来模拟请求以及用户操作. 使用 Node.js V6 加上 Babel 的 async/await 插件, 更加同步化得处理异步请求.",
      url: "https://github.com/Kaijun/zimuzu-auto-sign-heroku"
    },
  ],
  educations: [
    {
      major: "网络工程",
      degree: "学士",
      college: "西安电子科技大学",
      period: "Sep 2008 - Jul 2012",
    },
    {
      major: "Informatik",
      degree: "硕士",
      college: "TU Dresden (德国)",
      period: "Oct 2013 - Sep 2016",
    }
  ],
  skills:[
    {
      name: "JavaScript",
      score: 9
    },
    {
      name: "HTML",
      score: 6
    },
    {
      name: "NodeJS",
      score: 9
    },
    {
      name: "CSS",
      score: 8
    },    
    {
      name: "Linux",
      score: 7
    },
    {
      name: "Docker",
      score: 8
    },
    {
      name: "Android",
      score: 2
    },
  ]
}
