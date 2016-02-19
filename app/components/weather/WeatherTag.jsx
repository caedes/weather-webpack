import React from 'react';

export default class WeatherTag extends React.Component {
  render() {
    return <dl className='weather-tag'>
      <dt className='tag'>{this.props.tag}</dt>
      <dd className='value'>
        {this.props.value}
        <span className='unity'>{this.props.unity}</span>
      </dd>
    </dl>
  }

  static get defaultProps() {
    return {
      tag: '-',
      value: 'NaN',
      unity: ''
    }
  }
}
