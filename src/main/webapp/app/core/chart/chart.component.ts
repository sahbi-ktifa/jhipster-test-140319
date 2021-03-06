// CommitChart.ts
import Vue from 'vue';
import { Bar } from 'vue-chartjs';
import { Component } from 'vue-property-decorator';

@Component({
  extends: Bar // this is important to add the functionality to your component
})
export default class Chart extends Vue<Bar> {
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    });
  }
}
