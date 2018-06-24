## Install/Run
1) npm install <br />
then <br />
2) npm start <br />
now open the browser and goto localhost:3000 <br/>

## Description 
This App is build using <b> ReactJS </b> and <b>YouTube Data API V3 </b> <br />
First i have create the Search Component, after that create a function to fetch the data using the API. After fetching data from API I created the videolist Component, to show the videos in list. <br />
After thet I have created VideoDetail Component where the Video is played and Details of video is shown there, and also video is fetch using the videoId which we get by the API response.<br/>
VideoList component have a feature whenever user click on any video in the list that video is played by the VideoDetail Component.<br/>
Also the Search bar is dynamic and search the result after the 500 milisec of change in term.
