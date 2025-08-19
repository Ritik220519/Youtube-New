
const GOOGLE_API_KEY = "AIzaSyAn4jvgYyzfU1Z8ljm4xVaqnc3ahKPGPg8"
export const YOUTUBE_API_KEY =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SPECIFIC_VIDEO_iNFORMATION_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY; 
export const YOUTUBE_COMMENT_SECTION_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" + GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_SUGGESTION_VIDEO_API ="https://www.googleapis.com/youtube/v3/search?part=snippet&type=video%20tutorial&key=" + GOOGLE_API_KEY +"&q=";