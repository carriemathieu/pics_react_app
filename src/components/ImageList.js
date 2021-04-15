import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    // maps over images array(props) and returns src link
    
    const images = props.images.map(image => {
        // key comes from results/id
        return <ImageCard image={image} key={image.id} />
    })

    return <div className="image-list">{images}</div>
}

export default ImageList