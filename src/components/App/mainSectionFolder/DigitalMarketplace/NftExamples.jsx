import { ReactComponent as ProfileIcon } from 'icons/profile-icon.svg';
import React, { Component } from 'react';
import { fetchNft } from 'api/fetchNFT';
import moment from 'moment';
import * as basicLightbox from 'basiclightbox';
import '../../../../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import 'moment-duration-format';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'right-top',
  cssAnimationStyle: 'zoom',
});

class NftExamples extends Component {
  state = {
    nftImageUrl: '',
    timeRemaining: '',
  };

  componentDidMount() {
    fetchNft('https://picsum.photos/500/500/?NFT')
      .then(resp => this.setState({ nftImageUrl: resp.request.responseURL }))
      .catch(err => {
        Notiflix.Notify.failure(err);
      });

    this.timer();
  }

  componentWillUnmount() {
    if (this.dateInterval) {
      clearInterval(this.dateInterval);
    }
  }

  onCardClick = e => {
    if (e.target.classList.contains('NftExamples__card')) {
      const instance = basicLightbox.create(`
            <img src="${this.state.nftImageUrl}" alt="">
        `);
      instance.show();
    }
  };
  timer = () => {
    const endTime = moment('2024-12-31T00:00:00');
    this.dateInterval = setInterval(() => {
      const currentTime = moment();
      const duration = moment.duration(endTime.diff(currentTime));

      const days = Math.floor(duration.asDays());
      const hours = String(duration.hours()).padStart(2, '0');
      const minutes = String(duration.minutes()).padStart(2, '0');
      const seconds = String(duration.seconds()).padStart(2, '0');

      const formattedTime = `${days}:${hours}:${minutes}:${seconds}`;

      this.setState({ timeRemaining: formattedTime });
    }, 1000);
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.nftImageUrl})`,
        }}
        className="NftExamples__card"
        onClick={this.onCardClick}
      >
        <div className="authorInfo">
          <p>Abstr NFT</p>
          <div className="author">
            <ProfileIcon width="35px" height="35px" />
            <p className="authorName">Arkhan17</p>
          </div>
        </div>
        <div className="currentBid">
          <div className="currentBid__price">
            <span>Current Bid</span>
            <p>0.25 ETH</p>
          </div>
          <div className="endingTimer">
            <span>Ends In</span>
            <p className="timer">{this.state.timeRemaining}</p>{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default NftExamples;
