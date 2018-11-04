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
                <div className="text-center text-danger">Retr0 @ 安若呀</div>

                <div className="text-center">我们已经在一起 { Moment().diff(Moment("20180214"),'days') } 天。</div>
                <div className="text-center">最近的你情绪总是莫名其妙的低落。 -- 2018-11-04</div>

            </div>
        );

    }

}