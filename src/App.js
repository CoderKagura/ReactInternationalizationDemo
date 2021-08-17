import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css"; //导入bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js"; //导入bootstrap中部分组件如dropdown依赖的js文件
import intl from "react-intl-universal"; //导入国际化组件react-intl-universal
import Navbar from "./components/Navbar";
import IntlTestTable from "./components/IntlTestTable";

// locale data
const locales = {
  "en-US": require("./locales/en-US"),
  "zh-CN": require("./locales/zh-CN"),
};

class App extends Component {
  state = {
    currentLocale: intl.options.currentLocale,
    initDone: false,
    list: [
      {
        name: "John Brown",
        age: 18,
        money: 534534545,
        date: "2016-10-3",
      },
      {
        name: "Jim Green",
        age: 24,
        money: 34455000,
        date: "2016-10-1",
      },
      {
        name: "Joe Black",
        age: 30,
        money: 150003443,
        date: "2016-11-2",
      },
      {
        name: "Jon Snow",
        age: 26,
        money: 15000,
        date: "2016-6-4",
      },
    ],
  };

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    // react-intl-universal 是单例模式, 只应该实例化一次
    intl
      .init({
        currentLocale: "zh-CN", // TODO: determine locale here
        locales,
      })
      .then(() => {
        this.setState({ initDone: true });
      });
  }

  changeLang = () => {
    const lang = intl.options.currentLocale;
    console.log(lang);
    intl.options.currentLocale = lang === "zh-CN" ? "en-US" : "zh-CN";
    this.forceUpdate();
  };

  chooseChinese = () => {
    const lang = intl.options.currentLocale;
    console.log(lang);
    if (lang == "en-US") {
      intl.options.currentLocale = "zh-CN";
      this.forceUpdate();
    }
  };

  chooseEnglish = () => {
    const lang = intl.options.currentLocale;
    console.log(lang);
    if (lang == "zh-CN") {
      intl.options.currentLocale = "en-US";
      this.forceUpdate();
    }
  };

  render() {
    const { list } = this.state;
    return (
      this.state.initDone && (
        <div>
          <React.Fragment>
            {/* 顶部导航栏 */}
            <Navbar
              onEnglish={this.chooseEnglish}
              onChinese={this.chooseChinese}
            />
            {/* 表格 */}
            <IntlTestTable list={this.state.list} />
          </React.Fragment>
        </div>
      )
    );
  }
}

export default App;
