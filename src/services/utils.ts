import { ORDER_VALUES, BOILER_ROOM_START_DATE, CURRENT_DATE_OFFSET } from "./constants"

const randomDate = (start: Date, end: Date) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const randomArrayValue = <T extends {}>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

const filterData = (data: ResponseItem[], includeString: string): ResponseItem[] => data.filter(el => {
  if (!el || typeof el.snippet.title !== "string") return false;
  return el.snippet.title.includes(includeString) ? true : false;
});

/*
  As you cannot get random videos with the YT API, specifying a random filtering based on the date of publishing gives us
  some randomness on the process
*/
const generateRandomFilterParams = (): any => {

  const orderBy = randomArrayValue(ORDER_VALUES);
  const currentDate = new Date();

  //We create two random dates with a year of difference to delimit filter
  const date = randomDate(BOILER_ROOM_START_DATE, new Date());
  const dateOffset = new Date(date);
  dateOffset.setMonth(currentDate.getMonth() + CURRENT_DATE_OFFSET);

  return {
    publishedBefore: dateOffset.toISOString(),
    publishedAfter: date.toISOString(),
    order: orderBy
  }
}

const extractRandomIndex = (data: ResponseItem[]): string => {
  let filteredData = filterData([...data], "Boiler");
  const ids = filteredData.map(el => el.id.videoId);
  return randomArrayValue(ids);
}

//Catch error in async/await
const withErrorCatch = <T extends {}>(promise: Promise<T>): Promise<any[]> => {
  return promise.then(data => {
    return [null, data];
  })
    .catch(err => [err]);
}

export {
  generateRandomFilterParams,
  extractRandomIndex,
  withErrorCatch
}