/**
 * Created by dingyuanyuan on 2018/3/13.
 */
import React, { Component } from 'react'
import Moment from 'moment';

export default class Clock extends Component {

    constructor(props) {

        super(props);

        this.state = { date:Moment() };

    }

    componentDidMount(){

        this.timerID = setInterval(

            () => this.tick(),1e3

        );

    }

    tick(){

        this.setState({

            date:Moment()

        });

    }

    render(){

        return (
            <div>
                <div className="text-center">Retr0 And AnRuo</div>

                <div className="text-center">我们已经在一起 { this.state.date.diff(Moment("20180214"),'years') } 年
                    { Moment().diff(Moment("20180214"),'months') } 月
                    { Moment().diff(Moment("20180214"),'weeks') } 周
                    { Moment().diff(Moment("20180214"),'days') } 天
                    { Moment().diff(Moment("20180214"),'hours') } 小时
                    { Moment().diff(Moment("20180214"),'minutes') } 分钟
                    { Moment().diff(Moment("20180214"),'seconds') } 秒
                </div>

            </div>
        );

    }

}