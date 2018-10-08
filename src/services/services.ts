import { API_BASE, SEARCH_PARAMS } from "../services/constants";
import * as qs from 'querystring';
import { generateRandomFilterParams, extractRandomIndex } from '../services/utils';

export default async function getRandomBoilerRoomVideo() : Promise<string> {
    const params = {...SEARCH_PARAMS, ...generateRandomFilterParams()};
    const data = await fetch(`${API_BASE}/search?${qs.stringify(params)}`, {
            method: 'GET',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
        });
    const jsonData = await data.json();
    return extractRandomIndex(jsonData.items ? jsonData.items : []);
}

