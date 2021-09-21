<template>
    <body>
        <span>
            <p v-for="item in getArtist.content" :key="item">
                {{item.name}}
            </p>
        </span>
    </body>
</template>

<script>
export default {
    props: ['browseId'],
    created(){
        this.fetchArtist();
    },
    computed: {
        getArtist(){
            console.log(this.$store.state.artistResult);
            return this.$store.state.artistResult;
        }
    },
    methods: {
        fetchArtist(){
            this.$store.dispatch('getSingleArtistResult', this.browseId)
        }
    }
}
</script>
