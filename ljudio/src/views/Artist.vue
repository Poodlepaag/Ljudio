<template>
    <body>
        <div class="hero">
            <img :src="getArtist.thumbnails[0].url" alt="artist picture">
            <div class="hero-text-container">
                <h3 class="hero-text">{{getArtist.name}}</h3>
            </div>
        </div>
        <article>
            <p>{{getArtist.description}}</p>
        </article>
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
            return this.$store.state.artistResult;
        }
    },
    methods: {
        fetchArtist(){
            this.$store.dispatch('getSingleArtistResult', this.browseId)
        },
    }
}
</script>
<style scoped>
    body{
        display: flex;
        flex-direction: column;
    }
    .hero{
        height: auto;
        display: flex;
        flex-direction: column;
    }
    .hero>img{
        width: 100%;
        height: 15rem;
        object-fit: cover;
        text-align: center;
    }
    .hero>.hero-text-container{
        background: rgba(0,0,0,0.2)
    }
    .hero>.hero-text-container>.hero-text{
        text-align: center;
        font-size: 2.8rem;
        padding: 0.1rem;
    }
    article{
        padding: 0.5rem;
    }
</style>
