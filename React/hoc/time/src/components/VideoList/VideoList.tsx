import { Video } from './Video';

import './VideoList.css';

interface VideoItem {
    url: string;
    date: string;
}

export const VideoList = ({ list }: { list: Array<VideoItem>}) => {
    return (
        <div id='root'>
            {
                list.map((item, idx) => <Video url={item.url} date={item.date} key={idx}/>)
            }
        </div>
    )
}
