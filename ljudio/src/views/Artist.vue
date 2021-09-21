<template>
    <body>
        <span>
            <p>{{getArtist.description}}</p>
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
