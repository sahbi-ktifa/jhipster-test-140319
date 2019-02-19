import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';
import ConfigurationService from './configuration.service';

@Component
export default class JhiConfiguration extends Vue {
  public orderProp = 'prefix';
  public reverse = false;
  public allConfiguration: any = false;
  public configuration: any = false;
  public configKeys: any[] = [];
  public filtered = '';
  @Inject('configurationService')
  private configurationService: () => ConfigurationService;

  public mounted(): void {
    this.init();
  }

  public init(): void {
    this.configurationService()
      .loadConfiguration()
      .then(res => {
        this.configuration = res;

        for (const config of this.configuration) {
          if (config.properties !== undefined) {
            this.configKeys.push(Object.keys(config.properties));
          }
        }
      });

    this.configurationService()
      .loadEnvConfiguration()
      .then(res => {
        this.allConfiguration = res;
      });
  }

  public changeOrder(prop): void {
    this.orderProp = prop;
    this.reverse = !this.reverse;
  }

  public keys(dict: any): string[] {
    return dict === undefined ? [] : Object.keys(dict);
  }
}