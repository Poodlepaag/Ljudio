<template>
    <body>
        <span>
            <p v-for="item in getSong.content" :key="item">
                {{item.name}}
            </p>
        </span>
    </body>
</template>

<script>
export default {
    props: ['videoId'],
    created(){
        this.fetchSong();
        console.log(this.fetchSong);
        console.log(this.getSong);
        console.log(this.getSong[0]);
    },
    computed: {
        getSong(){
            return this.$store.state.songResult;
        }
    },
    methods: {
        fetchSong(){
            this.$store.dispatch('getSingleSongResult', this.videoId)
        }
    }
}
</script>
