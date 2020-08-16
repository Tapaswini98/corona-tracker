import React from 'react';

/*import Cards from './Components/Cards'
import Chart from './Components/Chart';
import CountryPicker from './Components/CountryPicker';
*/
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';

import { fetchData } from './api'

class App extends React.Component{
    State ={
        data:{},
    }
    async componentDidMount(){
        const fetchData = await fetchData();
        this.setState({data:fetchData});
    }
    render(){
        const{data} =this.State;

        return (
        <div className={styles.container}>
            <Cards data={data} />
            <CountryPicker />
            <Chart />
        </div>
        );
    }
}

export default App;
 