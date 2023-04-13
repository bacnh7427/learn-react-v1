import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1, 
            name: 'V-POP tuowi vui',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/1/b/ae1b926d7ac194daad1a983aadba59cc.jpg'

        },
        {
            id: 2, 
            name: 'Rap Việt nghe là ghiền',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/1/b/ae1b926d7ac194daad1a983aadba59cc.jpg'

        },
        {
            id: 3, 
            name: 'Những bài hay nhất của Hoàng Thùy Linh',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/1/b/ae1b926d7ac194daad1a983aadba59cc.jpg'

        },
        {
            id: 4, 
            name: 'Trữ Tình Quang Dũng',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/1/b/ae1b926d7ac194daad1a983aadba59cc.jpg'
        },
        {
            id: 5, 
            name: 'Nhạc Trịnh Công Sơn',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/1/b/ae1b926d7ac194daad1a983aadba59cc.jpg'
        },
        {
            id: 6, 
            name: 'Nhạc Quốc Tế thịnh hành',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/1/b/ae1b926d7ac194daad1a983aadba59cc.jpg'
        },
        {
            id: 7, 
            name: 'US-UK',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/1/b/ae1b926d7ac194daad1a983aadba59cc.jpg'
        },
        {
            id: 8, 
            name: 'KPOP',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/1/b/ae1b926d7ac194daad1a983aadba59cc.jpg'
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;