import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {

        async getGifts(){
            const res = await api.get('api/gifts')
            logger.log('[GETTING GIFTS]', res.data)
            AppState.gifts = res.data.map(g => new Gift(g))
        }

        async openedGift(id){
            const gift = AppState.gifts.find(g => g.id == id)
            
            // logger.log('', gift)
            // let gift = {}
            gift.opened = !gift.opened
            logger.log('', gift )
            // const res = await api.put('api/gifts/' +id, gift)
            const res = await api.put('api/gifts/' +id, gift)


            // let index = AppState.gifts.findIndex(g => g.id == id)
            // AppState.gifts.splice(index, 1, new Gift(res.data))

        }

        async createGift(){

        }
}

export const giftsService = new GiftsService()