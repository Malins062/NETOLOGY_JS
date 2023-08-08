import Title, { TTitle } from './Title'

interface TTemperature {
  avg: string;
  mrn: string;
  day: string;
}

/**
 * Rendering weather widget
 *
 * @namespace WeatherWidget
 * 
 * @param {TTitle} title - The title of widget
 * @param {TTemperature} temperature - List of temperatures 
 * @param {string} temperature.avg - Average temperature 
 * @param {string} temperature.mrn - Morning temperature 
 * @param {string} temperature.day - Day temperature 
 */
export default function WeatherWidget({ title, temperature }: 
  { title: TTitle; temperature: TTemperature}) {

  return (
    <div className='weather-widget'>
      <Title title={title} />
      <div className='weather-widget-degrees'>
        <span className='weather-widget-degrees__average'>
          {temperature.avg}&deg;
        </span>
        <div className='weather-widget-degrees__in-detail'>
          <span className='weather-widget-degrees__in-detail-morning'>
            Утром {temperature.mrn},
          </span>
          <span className='weather-widget-degrees__in-detail-afternoon'>
            днём {temperature.day}
          </span>
        </div>
      </div>
    </div>
  );
}
