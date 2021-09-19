import { createStore } from 'vuex'

export default createStore({
  state: {
    songResults: [],
    artistResults: [],
    searchString: '',

    // Player specific
    loadedSong: {},
    previousSongs: [],
    songQueue: [],
  },
  mutations: {
    setArtistResults(state, data){
      state.artistResults = data;
    },
    setSongResults(state, data){
      state.songResults = data;
    },
    setSearchString(state, data){
      state.searchString = data;
    },
  },
  actions: {
    async getArtistResults({commit}, searchString){
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/artists/:${searchString}`);
      let data = await response.json();
      console.log(data);
      commit('setArtistResults', data);
      commit('setSearchString', searchString);
    },
    async getSongResults({commit}, searchString){
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/:${searchString}`);
      let data = await response.json();
      console.log(data);
      commit('setSongResults', data);
    }
  },
})
