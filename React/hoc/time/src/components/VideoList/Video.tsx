import { DateTimePretty } from './DateTimePretty';

export const Video = ({ url, date }: {url: string; date: string}) => {
  return (
    <div className='video'>
        <iframe src={url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen></iframe>
        <DateTimePretty date={date} />
    </div>
)
}
