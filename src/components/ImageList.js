import React from 'react'

const ImageList = (props) => {
    // maps over images array(props) and returns src link
    // destructured image (instead of using image.desc, image.id, image.urls... etc)
    const images = props.images.map(({description, id, urls}) => {
        // each image is nested under "urls" / "regular" from API, key comes from results/id
        return <img alt={description} key={id} src={urls.regular} />
    })

    return <div>{images}</div>
}

export default ImageList