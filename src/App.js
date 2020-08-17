import React from 'react';

/*import Cards from './Components/Cards'
import Chart from './Components/Chart';
import CountryPicker from './Components/CountryPicker';
*/
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';

import { fetchData } from './api';

import coronaimage from './images/image.png';

class App extends React.Component{
    State ={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data:fetchedData});
    }

    handleCountryChange = async(country) =>{
      const fetchedData = await fetchData(country);
       this.setState({data:fetchedData,country:country});
    }
    render(){
        const{data, country} =this.State;

        return (
        <div className={styles.container}>
            <img className={styles.image}src={coronaimage} alt="COVID-19"/>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.CountryChange} />
            <Chart data={data} country ={country} />
        </div>
        );
    }
}

export default App;
 