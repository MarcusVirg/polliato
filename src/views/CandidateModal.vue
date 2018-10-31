<template>
    <div class="candidate">
        <router-link to="/ballot" class="back">
            <i class="ion-md-arrow-back is-medium"></i>
        </router-link>
        <i class="ion-md-person-add is-medium follow"></i>
        <section class="hero is-bold is-info" ref="title">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{ candidate.name }}
                    </h1>
                    <h2 class="subtitle">
                        {{ candidate.party }}
                    </h2>
                </div>
            </div>
        </section>
        <div class="header">
            Info
        </div>
        <div class="info">
            <div class="info-item">
                <i class="ion-md-globe is-medium"></i>
                <a :href="candidate.candidateUrl">{{ candidate.candidateUrl }}</a>
            </div>
            <div class="info-item">
                <i class="ion-md-mail is-medium"></i>
                <a :href="`mailto:${candidate.email}`">{{ candidate.email }}</a>
            </div>
            <div class="info-item">
                <i class="ion-md-call is-medium"></i>
                <a :href="`tel:+1${candidate.phone}`">{{ candidate.phone }}</a>
            </div>
        </div>
        <div class="header">
            Feed
        </div>
        <div class="twitter">
            <Timeline :id="'amyklobuchar'" :source-type="'profile'" :widget-class="`mt-3 my-custom-class`"/>
        </div>
    </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
    props: ['name'],
    computed: {
        candidate() {
            return this.$store.getters.getCandidate(this.name)
        }
    },
    components: {
        Timeline
    },
    mounted() {
        if(this.candidate.party === 'DEMOCRATIC-FARMER-LABOR')
            this.$refs.title.classList.add('is-info')
        else if(this.candidate.party === 'REPUBLICAN')
            this.$refs.title.classList.add('is-danger')
        else
            this.$refs.title.classList.add('is-success')
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.back {
    position: fixed;
    top: 5px;
    left: 15px;
    i {
        color: white;
        font-size: 2em;
    }
}
.follow {
    position: fixed;
    top: 5px;
    right: 15px;
    color: white;
    font-size: 2em;
}
.title {
    margin-top: 25px;
}
.header {
    background-color: $primary;
    padding: 20px 0;
}
.info {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
	font-size: 16px;
	text-transform: lowercase;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.info-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    i {
        color: $primary;
        font-size: 2em;
        margin-right: 15px;
    }
    a {
        color: #2c3e50;
        text-decoration: underline;
    }
}
</style>

