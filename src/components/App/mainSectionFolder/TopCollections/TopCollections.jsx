import React, { Component } from 'react';
//short id imp
import shortid from 'shortid';
// lightbox imp
import * as basicLightbox from 'basiclightbox';
import '../../../../../node_modules/basiclightbox/dist/basicLightbox.min.css';
//components imp
import NftCard from './NftCard';
import TopCollectionCurrentNftCard from './TopCollectionCurrentNftCard';
import TopCollectionsOverUserCard from './TopCollectionsOverUserCard';
import './TopCollections.scss';
// array of users imp
import users from 'users.json';
//api func imp
import { fetchNft } from 'api/fetchNFT';
// data for url req
const URL_KEY = '45197188-964a3d40e0cf282ecb9c097d6';
const BASE_URL = 'https://pixabay.com/api/';

class TopCollections extends Component {
  state = {
    nfts: [],
    currentNft: {},
    per_page: 20,
  };
  // when component mounts creates a observer for pagination, and fetches images of nfts
  componentDidMount() {
    fetchNft(BASE_URL, {
      key: URL_KEY,
      q: 'abstract NFT',
      orientation: 'horizontal',
      order: 'popular',
    })
      .then(resp => {
        this.setState({ nfts: resp.data.hits });
        this.setState({ currentNft: resp.data.hits[0] });
      })
      .catch(err => {
        console.log(err);
      });

    const observer = new IntersectionObserver(this.IntObsCallback, {
      root: null,
      rootMargin: '200px',
      threshold: 1.0,
    });

    if (this.guardRef.current) {
      observer.observe(this.guardRef.current);
    }
  }

  IntObsCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.setState(prevState => ({
          per_page: (prevState.per_page += 10),
        }));
        fetchNft(BASE_URL, {
          key: URL_KEY,
          q: 'abstract NFT',
          orientation: 'horizontal',
          order: 'popular',
          per_page: this.state.per_page,
        })
          .then(resp => {
            this.setState({ nfts: resp.data.hits });
            this.setState({ currentNft: resp.data.hits[0] });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  //creating a ref
  guardRef = React.createRef();

  onCardClick = nft => {
    this.setState({ currentNft: nft });
  };

  onCurrentCardClick = e => {
    const instance = basicLightbox.create(`
        <img src="${this.state.currentNft.largeImageURL}" alt="nft">
    `);
    instance.show();
  };

  render() {
    const { currentNft } = this.state;
    console.log(this.state.nfts);

    return (
      <div className="topCollectionContainer">
        <div onClick={this.onCurrentCardClick}>
          <TopCollectionCurrentNftCard nft={currentNft} />
        </div>
        <div className="listOfNftsToShow">
          {this.state.nfts.map(nft => (
            <div key={shortid.generate()} onClick={() => this.onCardClick(nft)}>
              <NftCard nft={nft} />
            </div>
          ))}
          <div ref={this.guardRef} className="guard"></div>
        </div>
        <div className="topCollectionsOver">
          <p className="topCollectionsOver__title">Top Collections Over</p>
          <p className="topCollectionsOver__lastSevenDays">Last 7 days</p>
          {users.map(({ id, name, profit_percentage, price, image }) => {
            return (
              <TopCollectionsOverUserCard
                key={id}
                id={id}
                userPict={image}
                userName={name}
                price={price}
                income={profit_percentage}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopCollections;
