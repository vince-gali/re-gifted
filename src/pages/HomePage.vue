<template>

  <!-- {{ gifts }} -->

  <section class="row">

    <div class="col-md-4 my-4 " v-for="g in gifts" :key="g.id">
      <GiftCard :giftProp="g" />
      <!-- <button @click="openedGift(gift.id)">Open Gift</button> -->
    </div>
  </section>

 
</template>

<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js'
import { computed } from '@vue/reactivity';
import {AppState} from '../AppState.js'
import Pop from '../utils/Pop.js';

export default {
  setup() {

    async function getGifts(){
        try {
          // logger.log('getting gifts')
          await giftsService.getGifts()
        } catch (error) {
          logger.error(error)
        }
    }

    onMounted(() =>{
      getGifts()
    })

    return {

    


      gifts: computed(() => AppState.gifts)
    }
  }
}





</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
