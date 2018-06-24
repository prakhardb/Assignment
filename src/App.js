import React from 'react';
import _ from 'lodash';
import Search from './components/Search';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';


//YouTube Data API v3 Key
const  API_KEY = "AIzaSyC3gmlCq9ZM6VGv-_8lUSEjmsBC9r_4Qfs";



class App extends React.Component{
  constructor(props){
      super(props);

      this.state={
          videos:[],
          selectedVideo : null
      };
      this.videoSearch('google');
      }

videoSearch(term){
  YTSearch({key:API_KEY,term: term}, (videos) =>{
      this.setState({
          videos : videos,
          selectedVideo : videos[0]
      });
  });
  }

  render(){
      //give 500milisec delay to searchbar input
      const videoSearch = _.debounce((term) =>{this.videoSearch(term)},500);
      return (
          <div>
              <Search className="search" onSearchTermChange = {videoSearch}/>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
                  onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
          </div>
      );
  }
}

export default App;
