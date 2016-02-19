import React from 'react';

export default class WeatherIcon extends React.Component {
  render() {
    return <div className='weather-icon'>
      <img src='http://openweathermap.org/img/w/01n.png' />
    </div>;
  }
}
