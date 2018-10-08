
const API_BASE: string = 'https://www.googleapis.com/youtube/v3';
const BOILER_ROOM_CHANNEL_ID: string = 'UCGBpxWJr9FNOcFYA5GkKrMg';

const API_KEY: string = 'YOUR_API_KEY';
const ORDER_VALUES: string[] = ['date', 'title','rating','relevance'];
const DEFAULT_ID: string = 'p6ozF0Y-PzU';
const CURRENT_DATE_OFFSET: number = 12; //Months in offset to filter the results on Before/After date

const THRESHOLDS: Thresholds = {
    beforeAfterParam: 0.3, //Threshold to decide whether to put the before or after param
    minFullPerformances: 5 //Minimal full performances ID to switch to a less restrictive filtering
};

const BOILER_ROOM_START_DATE: Date = new Date(2012, 5, 31); //When the Boiler Room Channel started emitting Live on KEXP content

const SEARCH_PARAMS: SearchParams = {
    part: 'snippet',
    channelId: BOILER_ROOM_CHANNEL_ID,
    maxResults: 50,
    key: API_KEY,
};

export {
    API_BASE,
    SEARCH_PARAMS,
    ORDER_VALUES,
    DEFAULT_ID,
    THRESHOLDS,
    BOILER_ROOM_START_DATE,
    CURRENT_DATE_OFFSET
};