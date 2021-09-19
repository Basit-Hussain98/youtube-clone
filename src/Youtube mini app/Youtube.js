import Axios from 'axios';
import React , {Component} from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
class Youtube extends Component {
    state = {videos:[] , selectedVideo:null }
    componentDidMount(){
        this.onSearchSubmit('buldings')
    }
    onSearchSubmit = async (inpVal) => {
        const response = await Axios.get('https://www.googleapis.com/youtube/v3/search' , 
            {
                params:{
                    part:'snippet',
                    maxResults:5,
                    key:'AIzaSyBiTC9Xg2rp52OEbT5Q_8wgxzhdP8TLOKU',
                     q:inpVal   
                }

            },
        )
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }
    
    onSelectedVideo = (video) => {
        this.setState({
            selectedVideo:video
        })
    }

    render() { 
        return (
            <div  className='ui container' >
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className="ui grid" style={{marginTop:'20px'}}>
                    <div className="ui row">
                        <div className=" eleven wide column">

                        <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
               
            </div>
          );
    }
}
 
export default Youtube;