const GOOGLE_API_KEY = "AIzaSyCMgx8UPI8gSWczN3Ffjyx7GUajTKm0HME"
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const LIVE_CHAT_COUNT = 150
export const SEARCH_RECOMENDATION_1 = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
export const SEARCH_RECOMENDATION_2 = "&key=" + GOOGLE_API_KEY
export const COMMENTS_API_1 = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";
export const COMMENTS_API_2 = "&key=" + GOOGLE_API_KEY;