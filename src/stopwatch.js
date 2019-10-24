import React, {Component} from 'react'
import Time from './stopwatchdisplay'


class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        this.start = this.start.bind(this)
        this.pause = this.pause.bind(this)
    }
    start () {
        if(this.state.interval) {


            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }
    pause () {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    reset=()=>{
        this.setState({
            timeMs: 0
        })
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    render() {
        return <div>
            <Time ms={this.state.timeMs} />
            <br/><br/>
           <div className='threebuttons'>
            <input className='btn'
                type="button"
                value={this.state.interval ?"stop":"Start"}
                onClick={this.state.interval ? this.pause:this.start} />
            <input className='btn'
                type="button"
                value="Pause"
                onClick={this.pause} />
            <input className='btn'
                type="button"
                value="Reset"
                onClick={this.reset} />
        </div></div>
    }
}
export default Timer