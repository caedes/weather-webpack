import React from 'react';
import WeatherIcon from './weather/WeatherIcon.jsx';
import WeatherTag from './weather/WeatherTag.jsx';

export default class App extends React.Component {
  render() {
    return <div className='app'>
      <h1>Weather Webpack</h1>

      <WeatherIcon />
      <WeatherTag tag='Temperature' value='10' unity='°C' />
      <WeatherTag tag='Pression' value='1080' unity='hPa' />
      <WeatherTag tag='Humidity' value='79' unity='%' />
      <WeatherTag tag='Wind Temperature' value='12' unity='°C' />
    </div>;
  }
}
