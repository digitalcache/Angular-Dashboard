import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { PhoneDataModel } from '../../../assets/PhoneDataModel';
declare var $: any;
@Component({
  selector: 'app-manger-activity',
  templateUrl: './manger-activity.component.html',
  styleUrls: ['./manger-activity.component.css']
})
export class MangerActivityComponent implements OnInit {
  // data for displaying in chart
  months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  result: any = [];
  monthSelected = 'february';
  typeOfCall = 'incoming phone calls';
  total = 0;
  janCalls = 'assets/jan-calls.json';
  febCalls = 'assets/feb-calls.json';
  marCalls = 'assets/march-calls.json';
  aprCalls = 'assets/april-calls.json';
  mayCalls = 'assets/may-calls.json';
  junCalls = 'assets/june-calls.json';
  julCalls = 'assets/july-calls.json';
  augCalls = 'assets/aug-calls.json';
  sepCalls = 'assets/sept-calls.json';
  octCalls = 'assets/oct-calls.json';
  novCalls = 'assets/nov-calls.json';
  decCalls = 'assets/dec-calls.json';
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
  '25', '26', '27', '28', '29', '30'];
    // Chart Customization
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 4,
    scales: { xAxes: [{gridLines: {display: false}}], yAxes: [{display: false}] },
    layout: {padding : {top: 50, right: 0, bottom: 0, left: 0 }},
    plugins: {
      datalabels: {
        display: function(context) {
          let max = context.dataset.data[0];
          for (let i = 0, len = context.dataset.data.length; i < len; i++) {
            if (max < context.dataset.data[i]) {
                max = context.dataset.data[i].valueOf();
          }
          }
          let index = context.dataIndex;
          let value = context.dataset.data[index];
          return value < max ? false : true ;
      },
      anchor: 'end',
      align: 'end',
      backgroundColor: 'grey',
      borderRadius: 15,
      color: 'white'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartColors = [{ backgroundColor: function(context) {
    let maxValue = 0;
    context.dataset.data.forEach(element => {
      if (maxValue < element) {
          maxValue = element;
      }
      });
    let index = context.dataIndex;
    let value = context.dataset.data[index];
    return value < maxValue ? '#2185d0' : '#db2828';
} }];
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' }
  ];
  constructor(private http: HttpClient) { 
    if ($(window).width() < 801) {
      this.barChartOptions.aspectRatio = 2;
    } else {
      this.barChartOptions.aspectRatio = 4;
    }
  }
  // Method called on Month Change
  async calcMonthData(e) {
    if (e === 'february') {
      const result = (await this.http.get<PhoneDataModel[]>(this.febCalls).toPromise());
      const incoming = result.map(res => res.incoming);
      this.barChartData = [{ data: incoming, label: 'Day' }];
      this.calcMonthDataWithCallType(this.typeOfCall);
    } else {
      this.monthSelected = e.target.value;
      switch (this.monthSelected) {
        case 'january': {
          const result = (await this.http.get<PhoneDataModel[]>(this.janCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'february': {
          const result = (await this.http.get<PhoneDataModel[]>(this.febCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'march': {
          const result = (await this.http.get<PhoneDataModel[]>(this.marCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'april': {
          const result = (await this.http.get<PhoneDataModel[]>(this.aprCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'may': {
          const result = (await this.http.get<PhoneDataModel[]>(this.mayCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'june': {
          const result = (await this.http.get<PhoneDataModel[]>(this.junCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'july': {
          const result = (await this.http.get<PhoneDataModel[]>(this.julCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'august': {
          const result = (await this.http.get<PhoneDataModel[]>(this.augCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'september': {
          const result = (await this.http.get<PhoneDataModel[]>(this.sepCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'october': {
          const result = (await this.http.get<PhoneDataModel[]>(this.octCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'november': {
          const result = (await this.http.get<PhoneDataModel[]>(this.novCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }
        case 'december': {
          const result = (await this.http.get<PhoneDataModel[]>(this.decCalls).toPromise());
          const incoming = result.map(res => res.incoming);
          this.barChartData = [{ data: incoming, label: 'Day' }];
          this.calcMonthDataWithCallType(this.typeOfCall);
          break;
        }

      }
    }
  }
  // Method called on Type of Call Change
async calcMonthDataWithCallType(e) {
  this.total = 0;
  const janCall = 'assets/jan-calls.json';
  const febCall = 'assets/feb-calls.json';
  const marCall = 'assets/march-calls.json';
  const aprCall = 'assets/april-calls.json';
  const mayCall = 'assets/may-calls.json';
  const junCall = 'assets/june-calls.json';
  const julCall = 'assets/july-calls.json';
  const augCall = 'assets/aug-calls.json';
  const sepCall = 'assets/sept-calls.json';
  const octCall = 'assets/oct-calls.json';
  const novCall = 'assets/nov-calls.json';
  const decCall = 'assets/dec-calls.json';
  const monthPresent = this.monthSelected.slice(0, 3) + 'Call';
    if ( e === 'incoming phone calls') {
        const result = (await this.http.get<PhoneDataModel[]>(eval(monthPresent)).toPromise());
        const incoming = result.map(res => res.incoming);
        result.forEach(element => {
          this.total = this.total + element.incoming;
        });
    } else if ( e === 'all calls' ) {
      const result = (await this.http.get<PhoneDataModel[]>(eval(monthPresent)).toPromise());
      const calls = result.map(res => res.calls);
      result.forEach(element => {
        this.total = this.total + element.calls;
      });
    } else if ( e === 'outgoing phone calls' ) {
      const result = (await this.http.get<PhoneDataModel[]>(eval(monthPresent)).toPromise());
      const outgoing = result.map(res => res.outgoing);
      result.forEach(element => {
        this.total = this.total + element.outgoing;
      });
    } else {
      this.typeOfCall = e.target.value;
      switch (this.typeOfCall) {
        case 'all calls': {
          const result = (await this.http.get<PhoneDataModel[]>(eval(monthPresent)).toPromise());
          const calls = result.map(res => res.calls);
          result.forEach(element => {
            this.total = this.total + element.calls;
          });
          this.barChartData = [{ data: calls, label: 'Day' }];
          break;
        }
        case 'incoming phone calls': {
          const result = (await this.http.get<PhoneDataModel[]>(eval(monthPresent)).toPromise());
          const incoming = result.map(res => res.incoming);
          result.forEach(element => {
            this.total = this.total + element.incoming;
          });
          this.barChartData = [{ data: incoming, label: 'Day' }];
          break;
        }
        case 'outgoing phone calls': {
          const result = (await this.http.get<PhoneDataModel[]>(eval(monthPresent)).toPromise());
          const outgoing = result.map(res => res.outgoing);
          result.forEach(element => {
            this.total = this.total + element.outgoing;
          });
          this.barChartData = [{ data: outgoing, label: 'Day' }];
          break;
        }
      }
    }
}
  // Minimize Chart
public removeObject(): void {
  $('.activityMain').css('display', 'none');
}
  // Close Chart
public minObject(): void {
  $('.mangerDemo').css('display', 'none');
}

  ngOnInit() {
    this.calcMonthData(this.monthSelected);
    this.calcMonthDataWithCallType(this.typeOfCall);
    // $('.ui.dropdown').dropdown();
  }

}
