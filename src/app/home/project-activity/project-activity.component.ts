import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectDataModel } from '../../../assets/ProjectDataModel';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
declare var $: any;
@Component({
  selector: 'app-project-activity',
  templateUrl: './project-activity.component.html',
  styleUrls: ['./project-activity.component.css']
})
export class ProjectActivityComponent implements OnInit {
  // data for displaying in chart
  months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  result: any = [];
  last: any = [];
  dataLabelers = [];
  monthSelected = 'february';
  typeOfCall = 'incoming phone calls';
  total = 0;
  show = true;
  currentData;
  lastData;
  janData = 'assets/jan-data.json';
  febData = 'assets/feb-data.json';
  marData = 'assets/mar-data.json';
  aprData = 'assets/apr-data.json';
  mayData = 'assets/may-data.json';
  junData = 'assets/jun-data.json';
  julData = 'assets/jul-data.json';
  augData = 'assets/aug-data.json';
  sepData = 'assets/sep-data.json';
  octData = 'assets/oct-data.json';
  novData = 'assets/nov-data.json';
  decData = 'assets/dec-data.json';

  // Chart Customization
  public lineChartColors = [
    {
      backgroundColor: function(context) {
        let bar_ctx = context.chart.ctx;
        let purple_gradient = bar_ctx.createLinearGradient(0, 0, 0, 200);
        purple_gradient.addColorStop(0, 'rgba(33, 147, 176,0.6)');
        purple_gradient.addColorStop(1, 'rgba(109, 213, 237,1)');
        return purple_gradient;
    }, borderColor: 'white'
    },
    {
      backgroundColor: function(context) {
        let bar_ctx = context.chart.ctx;
        let purple_gradient = bar_ctx.createLinearGradient(0, 0, 0, 200);
        purple_gradient.addColorStop(0, 'rgba(238,136,0,0.6)');
        purple_gradient.addColorStop(1, 'rgba(126,0,126,1)');
        return purple_gradient;
    }, borderColor: 'white'
    }
  ];
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },
    { data: [], label: 'Series B' }
  ];
  str = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
  '25', '26', '27', '28', '29', '30'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 5,
    maintainAspectRatio : true,
    scales: { xAxes: [{gridLines: {display: false}}], yAxes: [{display: false}]},
    layout: {padding : {top: 40, right: 30, bottom: 0, left: 30 }},
    plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            backgroundColor: 'grey',
            borderRadius: 15,
            color: 'white',
            display: function(context) {
              if (context.dataset.label === 'Chart2') {
                return false;
              } else {
                return true;
              }
          },
          }
        },
          hover: {
                  mode: 'dataset',
                  intersect: false
          },
          tooltips : {
            enabled: false
          }
  };
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginDataLabels];
  constructor(private http: HttpClient) {
    if ($(window).width() < 801) {
      this.lineChartOptions.aspectRatio = 2;
    } else {
      this.lineChartOptions.aspectRatio = 5;
    }
   }
   // Capitalize First Letter
  jsUcFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // Method called on Month Change
  async calcMonthData(e) {
    $('.ui.dropdown.rangeSelector').dropdown('clear');
    this.lineChartData = [
      { data: [], label: 'Series A' },
      { data: [], label: 'Series B' }
    ];
    this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
    '25', '26', '27', '28', '29', '30'];
    if (e === 'february') {
      this.result = (await this.http.get<ProjectDataModel[]>(this.febData).toPromise());
      this.last = (await this.http.get<ProjectDataModel[]>(this.janData).toPromise());
      const incoming = this.result.map(res => res.rate);
      const incomingLast = this.last.map(res => res.rate);
      this.currentData = incoming;
      this.lastData = incomingLast;
      this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
    } else {
      this.monthSelected = e.target.value;
      switch (this.monthSelected) {
        case 'january': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.janData).toPromise());
          const incoming = this.result.map(res => res.rate);
          this.lineChartData = [{ data: incoming, label: 'Chart1' }];
          break;
        }
        case 'february': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.febData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.janData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'march': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.marData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.febData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' } , { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'april': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.aprData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.marData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' } , { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'may': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.mayData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.aprData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' } , { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'june': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.junData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.mayData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'july': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.julData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.junData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'august': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.augData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.julData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'september': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.sepData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.augData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'october': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.octData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.sepData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'november': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.novData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.octData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
          break;
        }
        case 'december': {
          this.result = (await this.http.get<ProjectDataModel[]>(this.decData).toPromise());
          this.last = (await this.http.get<ProjectDataModel[]>(this.novData).toPromise());
          const incoming = this.result.map(res => res.rate);
          const incomingLast = this.last.map(res => res.rate);
          this.currentData = incoming;
          this.lastData = incomingLast;
          this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
          break;
        }

      }
    }
  }
  // Method called on Days Selected
  public calcDays(e): void {
    let maxDate = 0;
    this.dataLabelers = [];
    if (e.target.value[2]) {
      if (e.target.value[3]) {
        maxDate = e.target.value[3] * 1  + e.target.value[2] * 10;
      }
        let max = e.target.value[2];
        if (maxDate) {
          max = maxDate;
        }
        let min = e.target.value[0];
        const incoming = this.result.map(res => res.rate).filter(function(element, index) {
          return (index + 1 >= min && index + 1 <= max);
        });
        const incomingLast = this.last.map(res => res.rate).filter(function(element, index) {
          return (index + 1 >= min && index + 1 <= max);
        });
        let i = 0;
        incoming.forEach((element, index) => {
          this.dataLabelers.push([this.str[i], `${min++} ${this.jsUcFirst(this.monthSelected)}`]);
          i = min % 7;
        });
        this.lineChartLabels = this.dataLabelers;
        this.lineChartData = [{ data: incoming, label: 'Chart1' }, { data: incomingLast, label: 'Chart2' }];
    }
  }
  // Method called for displaying Todays Chart Data
  public calcToday(): void {
    this.lineChartLabels = ['29', '30'];
    const incoming = this.result.map(res => res.rate).filter(function(element, index) {
      return (index + 1 >= 29);
    });
    this.lineChartData = [{ data: incoming, label: 'Chart1' }];
  }
  // Toggle for last month chart
  public toggleLast(): void {
    this.lineChartData = [{ data: this.lastData, label: 'Chart1' }, { data: this.currentData, label: 'Chart2' }];
  }
  // Toggle for current month chart
  public toggleCurrent(): void {
    this.lineChartData = [{ data: this.currentData, label: 'Chart1' }, { data: this.lastData, label: 'Chart2' }];
  }
  public removeObject(): void {
    $('.projectMain').css('display', 'none');
  }
  public minObject(): void {
    $('.projectDemo').css('display', 'none');
  }
  ngOnInit() {
    this.calcMonthData(this.monthSelected);
    $('.ui.dropdown').dropdown();
    $('.ui.dropdown.rangeSelector').dropdown({maxSelections: 2, allowAdditions: true});
  }

}
