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
    setLoadedSong(state, data){
      state.loadedSong = data;
    },
    moveSongFromQueueToLoaded(state){
      state.loadedSong = state.songQueue.shift();
    },
    moveFromLoadedToPrevious(state){
      state.previousSongs.unshift(state.loadedSong);
    },
    moveFromPreviousToLoaded(state){
      state.songQueue.unshift(state.loadedSong);
      state.loadedSong = state.previousSongs[0];
      state.previousSongs.shift();
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
    },
    nextSong({commit}){
      commit('moveSongFromQueueToLoaded');
    },
    moveFromLoadedToPrevious({commit}){
      commit('moveFromLoadedToPrevious');
    },
    moveFromPreviousToLoaded({commit}){
      commit('moveFromPreviousToLoaded');
    },
    getLoadedSongFromQueue({commit}){
      commit('moveSongFromQueueToLoaded');
    },
  }
})
