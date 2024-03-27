import {defineStore} from 'pinia'
import {getCityAll} from "@/services"

const useCityStore = defineStore("city",{
  state:() => ({
    allCities: {},
    cities:[]
  }),
  actions:{
    async fetchAllCitiesData(){
      const res = await getCityAll()
      this.allCities = res.data
      // console.log(this.allCities.cityGroup.title)
      console.log(this.allCities)
    }
  }
})

export default useCityStore

