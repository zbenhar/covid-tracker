import React from 'react';

//import Cards from './components/Cards/Cards'
//import Chart from './components/Chart/Chart'
//import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covidImage from './images/covid-19_emblem.png'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handle_Country_Change = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={covidImage} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handle_Country_Change={this.handle_Country_Change} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;