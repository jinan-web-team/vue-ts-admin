import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'LayoutLogo',
})
class LayoutLogo extends Vue {
  @Prop({ default: '' }) private readonly path!: string;
  @Prop({ default: '' }) private readonly logoAlt!: string;
  protected render() {
    return (
      <div>
        {
          this.path ?
            (<router-link to="/index">
              <img src={ this.path } width="auto" height="auto" alt={ this.logoAlt } />
            </router-link>) :
            (<div class="web-logo">
              <router-link to="/index">
                vue-ts-admin
              </router-link>
            </div>)
        }
      </div>
    );
  }
}

export default LayoutLogo;
