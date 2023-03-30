import React, { Component } from 'react';

class Upload extends Component {

    uploadWidget = () => {
        window.cloudinary.openUploadWidget(
          { cloud_name: 'austinroy',
            upload_preset: 'unsigned',
            tags: ['flixer'],
            sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
          },
          function(error, result) {
              console.log("This is the result of the last upload", result);
          });
      }

    render() {
        return (
            <div>
                <h3 className="text-center">Upload Your Flick</h3>
                <hr/>

                <div className="col-sm-12">
                    <div>
                        <button className="button is-primary" onClick={this.uploadWidget}>
                        <span className="icon is-medium" style={{paddingRight: 10 }}> <i className="fa fa-upload"></i> </span>
                        Upload Video
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload;