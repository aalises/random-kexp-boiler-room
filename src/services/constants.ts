
const API_BASE: string = 'https://www.googleapis.com/youtube/v3';
const KEXP_CHANNEL_ID: string = 'UC3I2GFN_F8WudD_2jUZbojA';

const API_KEY: string = 'YOUR_API_KEY';
const ORDER_VALUES: string[] = ['date', 'title'];
const DEFAULT_ID: string = 'Q__0zE0URbg';
const CURRENT_DATE_OFFSET: number = 12; //Months in offset to filter the results on Before/After date

const THRESHOLDS: Thresholds = {
    beforeAfterParam: 0.3, //Threshold to decide whether to put the before or after param
    minFullPerformances: 5 //Minimal full performances ID to switch to a less restrictive filtering
};

const KEXP_START_DATE: Date = new Date(2008, 9, 23); //When the KEXP Channel started emitting Live on KEXP content

const SEARCH_PARAMS: SearchParams = {
    part: 'snippet',
    channelId: KEXP_CHANNEL_ID,
    maxResults: 50,
    key: API_KEY,
};

export {
    API_BASE,
    SEARCH_PARAMS,
    ORDER_VALUES,
    DEFAULT_ID,
    THRESHOLDS,
    KEXP_START_DATE,
    CURRENT_DATE_OFFSET
};