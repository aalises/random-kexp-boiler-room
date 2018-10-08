import * as React from 'react';
import VideoPlayer from './VideoPlayer';
import getRandomBoilerRoomVideo from '../services/services';
import { DEFAULT_ID } from '../services/constants';
import { withErrorCatch } from '../services/utils';
import Footer from "./Footer";
import Header from "./Header";

interface mainState {
  videoID: string,
  options: Options
}

export default class Main extends React.Component<any, mainState> {

  state = {
    videoID: '',
    options: {
      width: "100%",
      height: "100%"
    }
  }

  componentDidMount() {
    const opts = {
      ...this.state.options,
      playerVars: {
        autoplay: 1
      }
    }
    this.setState({ options: opts });
    this.getVideo();
  }

  async getVideo(): Promise<void> {
    const [err, id] = await withErrorCatch(getRandomBoilerRoomVideo());
    this.setState({ videoID: (id && !err) ? id : DEFAULT_ID });
  }

  render() {
    return (
      <React.Fragment>
        <Header onClick={() => this.getVideo()} />
        {this.state.videoID.length ?
          <VideoPlayer onEnd={() => this.getVideo()} id={this.state.videoID} options={this.state.options} />
          : null
        }
        <Footer emoji="🤘" author="aalises" />
      </React.Fragment>
    )
  }
}