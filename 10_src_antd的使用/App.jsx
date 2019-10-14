import React,{Component} from 'react'
import {Button,DatePicker} from 'antd'
import moment from 'moment';

export default class App extends Component{
  render(){
    const { MonthPicker, RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    return (
      <div>
        <div>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon="search">
            Search
          </Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <br />
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">
            Search
          </Button>
        </div>
        <div>
          <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
          <br />
          <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
          <br />
          <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
          <br />
          <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
          />
        </div>
      </div>
    )
  }
}

