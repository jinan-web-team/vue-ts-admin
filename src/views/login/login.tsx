import { Vue, Component } from 'vue-property-decorator';
import { Form } from 'ant-design-vue';
import moment from 'moment';
import './login.less';

interface IUserForm {
  userName: string;
  password: string;
  code?: string;
}

@Component({
  name: 'Login',
  props: {
    Form,
  },
})
class Login extends Vue {
  private loginModel: IUserForm = {
    userName: '',
    password: '',
    code: '',
  };
  private loading: boolean = false;
  private time: string = '';
  private timeInterval: number = -1;

  protected render() {
    const { getFieldDecorator } = this.Form;
    const arr = new Array(10);
    return (
      <div class="web-login">
        <div class="web-login--layer web-login--layer-area">
          <ul class="web-circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div
          flex="main:center cross:center"
          class="web-login--layer web-login--layer-time">
          {this.time}
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
              <img class="web-login--logo" src="./image/logo@2x.png" alt="" />
              <div class="web-login--form">
                <a-card bordered={false}>
                  <a-form
                    on-submit={ this.handleSubmit }
                    class="login-form"
                    id="login">
                    <a-form-item>
                      {
                        getFieldDecorator('userName', {
                          rules: [
                            { required: true, message: '请输入用户名' },
                          ],
                        })(<a-input
                          id="userName"
                          prefix-icon="iconfont-user"
                          placeholder="请输入用户名"
                        >
                          <a-icon
                            slot="addonAfter"
                            type="user"
                            style="color: rgba(0,0,0,.25)"
                          />
                        </a-input>)
                      }
                    </a-form-item>
                    <a-form-item>
                      {
                        getFieldDecorator('password', {
                          rules: [
                            { required: true, message: '请输入密码' },
                          ],
                        })(<a-input
                          id="password"
                          type="password"
                          placeholder="请输入密码"
                        >
                          <a-icon
                            slot="addonAfter"
                            type="lock"
                            style="color: rgba(0,0,0,.25)"
                          />
                        </a-input>)
                      }
                    </a-form-item>
                    <a-form-item>
                      <a-input addonBefore="验证码" defaultValue="v9am">
                        <img class="web-login--code" src={ require('./image/login-code.png') } slot="addonAfter" />
                      </a-input>
                    </a-form-item>
                    <a-form-item>
                      <a-button
                        loading={ this.loading }
                        block
                        type="primary"
                        html-type="submit"
                        class="login-form-button"
                      >登录
                      </a-button>
                    </a-form-item>
                  </a-form>
                  <p
                    class="web-login--options"
                    flex="main:justify cross:center">
                    <span><a-icon type="question-circle" /> 忘记密码</span>
                    <span>注册用户</span>
                  </p>
                  <a-button
                    size="default"
                    type="primary"
                    block
                  >快速选择用户（测试功能）
                  </a-button>
                </a-card>
              </div>
            </div>
            <div class="web-login--footer">
              <p class="web-login--footer-help">
                <a href="#">帮助</a>
                <a href="#">隐私</a>
                <a href="#">条款</a>
              </p>
              <p class="web-login--footer-copyright">
                Copyright <a-icon type="copyright" /> 2019 vue-ts-admin
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private renderLi() {
    return <li>1</li>;
  }

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
    this.Form.validateFields((err: boolean, values: IUserForm) => {
      if (!err) {
        console.log(values);
        this.loading = true;
      }
    });
  }
}

// @ts-ignore
const LoginWrapper = Form.create()(Login);
export default LoginWrapper;
