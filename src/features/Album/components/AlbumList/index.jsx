import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';
AlbumList.propTypes = {
    albumList: PropTypes.array,
    // album: PropTypes.object.isRequired,

};

AlbumList.defaultProps = {
    albumList: []
}

function AlbumList({albumList}) {
    return (
        <div>
            <ul className="album-list">
                {albumList.map( album => (
                    <li key={album.id}> <Album album = {album} ></Album></li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;