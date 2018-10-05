interface SearchParams {
  part: string,
  channelId: string,
  maxResults: number,
  key: string,
  order?: string,
  publishedAfter?: string,
  publishedBefore?: string
}

interface Options {
  height: string,
  width: string,
  playerVars?: any
}

interface Thresholds {
  beforeAfterParam: number,
  minFullPerformances: number
}

interface YoutubeAPIResponse {
  kind: string,
  etag: string,
  regionCode: string
  nextPageToken: string,
  prevPageToken: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: [
    ResponseItem
  ]
}

interface ResponseItem {
  etag: string
  id: {
    kind: string,
    videoId: string
  }
  kind: string
  snippet: {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishedAt: string
    thumbnails: { any }
    title: string
  }
}

