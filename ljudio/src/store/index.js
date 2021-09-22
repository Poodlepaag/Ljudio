import { createStore } from 'vuex'

export default createStore({
  state: {
    // Search specific
    songResults: [],
    songResult: [],
    artistResults: [],
    artistResult: [],
    searchString: '',

    // Player specific
    loadedSong: null,
    previousSongs: [],
    queue: [],
  },
  mutations: {
    setArtistResults(state, data){
      state.artistResults = data;
    },
    setArtistResult(state, data){
      state.artistResult = data;
    },
    setSongResults(state, data){
      state.songResults = data;
    },
    setSongResult(state, data){
      state.songResult = data;
    },
    setSearchString(state, data){
      state.searchString = data;
    },
    setLoadedSong(state, data){
      state.loadedSong = data;
    },
    moveFromQueueToLoaded(state){
      state.loadedSong = state.queue.shift();
    },
    moveFromLoadedToPrevious(state){
      state.previousSongs.unshift(state.loadedSong);
    },
    moveFromPreviousToLoaded(state){
      state.loadedSong = state.previousSongs.shift();
    },
    moveFromLoadedToQueue(state){
      state.queue.unshift(state.loadedSong);
    },
    setTheLoadedSong(state, data){
      state.loadedSong = data;
    },
    addToQueue(state, data){
      state.queue.push(data);
    }
    
  },
  actions: {
    async getArtistResults({commit}, searchString){
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/artists/${searchString}`);
      let data = await response.json();
      commit('setArtistResults', data);
      commit('setSearchString', searchString);
    },
    async getSingleArtistResult({commit}, browseId){
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/artist/${browseId}`);
      let data = await response.json();
      console.log(data);
      commit('setArtistResult', data);
    },
    async getSongResults({commit}, searchString){
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchString}`);
      let data = await response.json();
      commit('setSongResults', data);
    },
    async getSingleSongResult({commit}, videoId){
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${videoId}`)
      let data = await response.json();
      commit('setSongResult', data)    
    },
    unloadAndSendToQueue({commit}){
      commit('moveFromLoadedToQueue');
    },
    unloadAndSendToPrevious({commit}){
      commit('moveFromLoadedToPrevious');
    },
    loadByFetchFromPrevious({commit}){
      commit('moveFromPreviousToLoaded');
    },
    loadByFetchFromQueue({commit}){
      commit('moveFromQueueToLoaded');
    },
    setLoadedSong({commit}, data){
      console.log(data);
      commit('setTheLoadedSong', data)
    },
    addToQueue({commit}, data){
      console.log(data);
      commit('addToQueue', data)
    },
  }
})
