import React from 'react';
import AWS from 'aws-sdk';
import BackButton from '../backButton/backButton';

import { FacebookShareButton, FacebookIcon } from 'react-share';


import './share.scss';

const S3_BUCKET = 'imagestoshare';
const REGION = 'us-east-2';
const IdentityPoolId = 'us-east-2:20f3a166-1792-4bce-86df-a3b0892dd39d'

AWS.config.update({
    region: REGION,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
    })
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

class Share extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            selectedFile: props.history.location.state.shareUrl,
            finalUrl: ''
        }
    }

    shareImage = (socialNetwork) => {
        const image = this.props.history.location.state.shareUrl

        const S3ImageUrl = this.addPhoto('images', image);

        /*
        this.props.history.push({
            pathname: `/thankYouForComing`
        })
        */
    }

    addPhoto = (albumName, image) => {
        const albumPhotosKey = encodeURIComponent(albumName) + "/";
        
        // just to have a unique name.. need to think about something else
        //const photoKey = albumPhotosKey + new Date().toDateString().split(" ").join("") + '.png';
        const photoKey = albumPhotosKey + 'myImage' + '.png';

        fetch(image)
            .then(res => res.blob())
            .then(res => {
                const upload = new AWS.S3.ManagedUpload({
                    params: {
                      Bucket: S3_BUCKET,
                      Key: photoKey,
                      Body: res,
                      ContentType: 'image/png'
                    }
                  });
          
                  const promise = upload.promise();
          
                  promise.then(
                    function(data) {
                      alert("Successfully uploaded photo.");
                      console.log(data);
                      
                      return data;
                    },
                    function(err) {
                      return alert("There was an error uploading your photo: ", err.message);
                    }
                  ).then(data => this.setState({finalUrl: data.Location}));
            })
      }


    render() {
        const FB = 'images/icons/FBicon.png';
        const instegram = 'images/icons/InstIcon.png';
        const twitter = 'images/icons/TwitterIcon.png';
        const whatsapp = 'images/icons/whatsappIcon.png';

        return (
            <div className='share-options-container'>
                <BackButton history={this.props.history}/>
                <div className='share-options-title'>עצבו את מסר הגבורה שלכם.ן</div>
                <div className='image-container'>
                    <div className='image-container-border'>
                        <img style={{ width: '300px', height: '300px' }} src={this.props.history.location.state.shareUrl}></img>
                    </div>
                </div>
                <div className='share-options-drawer'>
                    <div className='title'>שתפו ב</div>
                    {/* <a href={`https://www.facebook.com/sharer.php?imageurl='https://team-23.s3.amazonaws.com/test.png'}`}>clicklcicl</a> */}
                    <div className='share-options'>
                        {/* <div onClick={this.uploadFile}>upload to AWS ?</div> */}
                        <div className='share-option-container'>
                            <div className='share-option' style={{ backgroundImage: `url(${FB})` }}
                                onClick={() => this.shareImage('facebook')} />
                        </div>
                        <div className='share-option-container'>
                            <div className='share-option' style={{ backgroundImage: `url(${instegram})` }}
                                onClick={() => this.shareImage('instagrem')} />
                        </div>
                        <div className='share-option-container'>
                            <div className='share-option' style={{ backgroundImage: `url(${whatsapp})` }}
                                onClick={() => this.shareImage('whatsapp')} />
                        </div>
                        <div className='share-option-container'>
                            <div className='share-option' style={{ backgroundImage: `url(${twitter})` }}
                                onClick={() => this.shareImage('twitter')} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Share;