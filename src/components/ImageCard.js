import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 }
        // allows us to get the height of each element / current property
        this.imageRef = React.createRef()
    }

    // let componenet render, then reach into DOM to get image height
    componentDidMount() {
        // have to add event listener bc otherwise, we'll get 'height' before image is loaded into DOM (0)
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // arrow func so we still have acces to "this"
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10)

        this.setState({ spans })
    }

    render() {
        // destructured image (instead of using image.desc, image.id, image.urls... etc)
        const {description, urls} = this.props.image

        // each image is nested under "urls" / "regular" from API, 
        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard



