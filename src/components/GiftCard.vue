<template>


<section class="row col-12 ">

    <div class=" card">
        <!-- <img v-if="!giftProp?.opened" @click="openedGift(giftProp.id)" src="http://defaultimg" alt="">
        <img v-else @click="openedGift(giftProp.id)" :src=giftProp?.url alt=""> -->
        <img  @click="openedGift(giftProp.id)" :src="giftProp?.opened ? giftProp.url : 'http://defaultImage'" alt="">
        <h2>{{ giftProp?.tag }}</h2>
    </div>

</section>


</template>


<script>
import { popScopeId } from 'vue';
import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';




export default {
    props: {
        giftProp: {type: Gift, required: true}
    },
    setup(){
        return {

            async openedGift(id){
        try {
      
          await giftsService.openedGift(id)
        } catch (error) {
          Pop.error(error)
        }
      },


      async createGift(){
        try {
            await giftsService.createGift()
        } catch (error) {
            Pop.error(error)
        }
      },

        }
    }
}
</script>


<style lang="scss" scoped>

</style>