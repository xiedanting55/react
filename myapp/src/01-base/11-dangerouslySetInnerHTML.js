import React, { Component } from 'react'

export default class App extends Component {
  state = {
    str: `<div class="bt">
            <div class="wrap" style="width: 1335px;">
              <div class="fl1" style="text-align: center;margin:0px auto;">2006-2021&nbsp;<a href="/">合优网络</a>&nbsp;版权所有&nbsp;&nbsp;&nbsp;&nbsp;销售热线：4006-883-088 &nbsp;&nbsp;售后热线：4006-338-022 &nbsp;  邮箱：service@heyou51.com<span>&nbsp;&nbsp;&nbsp;&nbsp;  </span><span> <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备09037294号</a> </span></div>
              <div class="clear"></div>
            </div>
        </div>`
  }
  render () {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.str }}></div>
      </div>
    )
  }
}
