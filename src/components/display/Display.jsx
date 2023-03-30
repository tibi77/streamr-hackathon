import React,{ Component } from 'react';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import { Share } from 'react-twitter-widgets'

class Display extends Component {

    state = { videos : []};

    getVideos () {
        fetch('http://res.cloudinary.com/austinroy/video/list/flixer.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else{
                    Promise.reject.bind(Promise);
                }
            }).then(res => {
                this.setState({ videos: res.resources })
            }).catch(err => {
                console.log(err.message);
            });
    }

    componentDidMount (){
        this.getVideos();
    }

    render(){
        const { videos } = this.state;
        return (
            <div>
                <h3 className="text-center"> Latest on Flixer </h3>
                <hr />

                <div className="col-sm-12">
                    <CloudinaryContext cloudName="austinroy">
                        { videos.map((data, index) => (
                            <div className="col-sm-4" key={index}>
                            <div className="embed-responsive embed-responsive-4by3">
                                <Video publicId={data.public_id} width="300" height="300" controls></Video>
                                <Share url={`http://res.cloudinary.com/austinroy/video/upload/${data.public_id}.mp4`} />
                            </div>
                            <div> Created at {data.created_at} </div>

                            </div>
                        ))
                        }
                    </CloudinaryContext>
                </div>
            
            </div>
        )
    }
}

export default Display;