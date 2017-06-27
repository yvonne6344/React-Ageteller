import React, {Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

import AgeStats from './AgeStats';

class App extends Component{
    constructor(){
        super();

        this.state = {
            newDate: '',
            birthday: '1990-10-16',
            showStats: false
        }
    }

    changeBirthday() {
        console.log(this.state);
        this.setState({ 
            birthday: this.state.newDate,
            showStats: true
        });
    }

    render() {
        return(
            // <div>ageteller component</div>
            <div className="App">
                <Form inline>
                    <h2>請輸入您的生日！</h2>
                    <FormControl type="date" onChange={ event => this.setState({ newDate: event.target.value })}></FormControl>
                    {' '}
                    <Button className="btn btn-primary" onClick={() => this.changeBirthday()}>送出</Button>

                    {
                        this.state.showStats ? 
                            <div className="fade age-stats"> 
                                <AgeStats date={this.state.birthday}/>
                            </div>
                             : 
                             <div></div>
                    }
                   
                </Form>
            </div>
        )
    }
}

export default App;