import Component from 'vue-class-component';
import { Inject, Vue } from 'vue-property-decorator';
import LoginService from '@/account/login.service';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import L from 'leaflet';
import Axios from 'axios';
import Chart from '../chart/chart.component';

@Component({
  components: { LMap, LTileLayer, LMarker, Chart }
})
export default class Home extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;
  public marker: L.LatLng = L.latLng(0, 0);

  created() {
    setInterval(() => {
      Axios.get('http://api.open-notify.org/iss-now.json').then(res => {
        this.marker = L.latLng(parseFloat(res.data.iss_position.latitude), parseFloat(res.data.iss_position.longitude));
      });
    }, 1000);
  }
  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
