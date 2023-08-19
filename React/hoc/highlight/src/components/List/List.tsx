import { Video } from './Video';
import { Article } from './Article';

import './List.css';
import React from 'react';
import { Popular } from './Popular';
import { New } from './New';

enum Items {
    Video = 'video',
    Article = 'article'
} 

type TypeItem = Items | string | undefined;
type UrlItem = string | undefined;
type TitleItem = string | undefined;
type ViewsItem = number;

interface ListItem {
    type: TypeItem;
    url?: UrlItem;
    title?: TitleItem;
    views: ViewsItem;
}

export default function List({ list }: { list: Array<ListItem>}) {

    const withLabels = <P extends object>(Component: React.ComponentType<P>) => {
        return class withLabels extends React.Component<P & ListItem> {
            render() {
                const { views } = this.props as ListItem;
                if (views > 1000) {
                    return (
                        <Popular>
                            <Component {...this.props}/>     
                        </Popular>
                    )
                } else if (views < 100) {
                    return (
                        <New>
                            <Component {...this.props}/>     
                        </New>
                    )
                } else {
                    return <Component {...this.props}/>;
                }
            }
        }
    }

    const VideoWithLabels = withLabels(Video);
    const ArticleWithLabels = withLabels(Article);

    return (
        <div id='root'>
            {
                list.map((item, idx) => {
                    switch (item.type) {
                        case Items.Video:
                            return (
                                <VideoWithLabels {...item} key={idx}/>
                            );

                        case Items.Article:
                            return (
                                <ArticleWithLabels {...item} key={idx}/>
                            );
                    }
                })            
            }
        </div>
    )
}

export type { ListItem, UrlItem, TitleItem, ViewsItem }
