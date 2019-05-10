<template>
  <div class="web-login">
    <div class="web-login--layer web-login--layer-area">
      <ul class="web-circles">
        <li v-for="num in 10" :key="num"></li>
      </ul>
    </div>
    <div
      flex="main:center cross:center"
      class="web-login--layer web-login--layer-time">
      {{ time }}
    </div>
    <div class="web-login--layer">
      <div
        class="web-login--content"
        flex="dir:top main:justify cross:center box:justify">
        <div class="web-login--content-header">
          <p class="web-login--content-header-title"> 时间是一切财富中最宝贵的财富。 <span>—— 德奥弗拉斯多</span></p>
        </div>
        <div
          flex="dir:top main:center cross:center"
          class="web-login--content-main">
          <img class="web-login--logo" src="./image/logo@2x.png" alt="">
          <div class="web-login--form">
            <a-card
              :bordered="false"
            >
              <a-form
                id="login"
                class="login-form"
                :form="form"
                @submit="handleSubmit"
              >
                <a-form-item>
                  <a-input
                    v-decorator="[
                      'userName',
                      { rules: [{ required: true, message: '请输入用户名' }] }
                    ]"
                    placeholder="请输入用户名"
                  >
                    <a-icon
                      slot="addonAfter"
                      type="user"
                      style="color: rgba(0,0,0,.25)"
                    />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input
                    v-decorator="[
                      'password',
                      { rules: [{ required: true, message: '密码不能为空' }] }
                    ]"
                    type="password"
                    placeholder="请输入密码"
                  >
                    <a-icon
                      slot="addonAfter"
                      type="lock"
                      style="color: rgba(0,0,0,.25)"
                    />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input addonBefore="验证码"  defaultValue="v9am" >
                    <img class="web-login--code" src="./image/login-code.png" slot="addonAfter"/>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-button
                    block
                    type="primary"
                    html-type="submit"
                    class="login-form-button"
                  >登录</a-button>
                </a-form-item>
              </a-form>
            </a-card>
            <p
              class="web-login--options"
              flex="main:justify cross:center">
              <span><a-icon type="question-circle"/> 忘记密码</span>
              <span>注册用户</span>
            </p>
            <a-button
              size="default"
              type="primary"
              block
            >快速选择用户（测试功能）</a-button>
          </div>
        </div>
        <div class="web-login--footer">
          <p class="web-login--footer-help">
            <a href="#">帮助</a>
            <a href="#">隐私</a>
            <a href="#">条款</a>
          </p>
          <p class="web-login--footer-copyright">
            Copyright <a-icon type="copyright"/> 2019 vue-ts-admin
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import moment from 'moment';

interface ILoginModel {
  userName: string;
  password: string;
  code?: string;
}

@Component({
  name: 'login',
})
class Login extends Vue {
  private form: HTMLFormElement = this.$form.createForm(this);
  private time: string = '';
  private timeInterval: number = -1;

  // private beforeCreate() {
  //   this.form = this.$form.createForm(this);
  // }

  private mounted() {
    this.timeInterval = setInterval(() => {
      this.refreshTime();
    }, 1000);
  }

  private beforeDestroy() {
    clearInterval(this.timeInterval);
  }

  private refreshTime() {
    this.time = moment().format('YYYY-MM-DD HH:mm:ss');
  }
  private handleSubmit(e: MouseEvent) {
    e.preventDefault();
    this.form.validateFields((err: boolean, values: ILoginModel) => {
      console.log(err);
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
}

export default Login;
</script>

<style lang="less" scoped>
  .web-login {
    @backgroundColor: #F0F2F5;
    background-color: @backgroundColor;
    height: 100%;
    position: relative;
    user-select: none;
    &--layer {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      overflow: auto;
    }
    &--layer-area {
      overflow: hidden;
    }
    &--layer-time {
      font-size: 5em;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.03);
      overflow: hidden;
    }
    &--content {
      height: 100%;
      min-height: 500px;
    }
    &--form {
      width: 280px;
    }
    &--logo {
      width: 240px;
      margin-bottom: 2em;
      margin-top: 2em;
    }
    &--code {
      height: 30px;
      display: block;
      margin: 0 -8px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      cursor: pointer;
    }
    &--options {
      margin: 0 0 15px 0;
      padding: 0;
      font-size: 14px;
      font-weight: bold;
      color: #409EFF;
    }
    &--header {
      padding: 1em 0;
      &-title {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        color: #606266;
        span {
          color: #909399;
        }
      }
    }
    &--footer {
      padding: 1em 0;
      &-help {
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
        text-align: center;
        font-size: 14px;
        a {
          color: #606266;
          margin: 0 1em;
        }
      }
      &-copyright {
        margin: 0;
        padding: 0;
        font-size: 12px;
        color: #606266;
        a {
          color: #606266;
        }
      }
    }
  }
  .web-circles {
    &:extend(.full);
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: #FFF;
      animation: animate 25s linear infinite;
      bottom: -200px;
      @keyframes animate {
        0%{
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100%{
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      &:nth-child(1) {
        left: 15%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        left: 5%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      &:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      &:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
      &:nth-child(6) {
        left: 75%;
        width: 150px;
        height: 150px;
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 35%;
        width: 200px;
        height: 200px;
        animation-delay: 7s;
      }
      &:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      &:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      &:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
  .ant-card {
    margin-bottom: 15px;
  }
</style>
