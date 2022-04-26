<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Fllor/>
    <Fllor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Fllor from '@/pages/Home/Fllor'
import Brand from '@/pages/Home/Brand'
export default {
  name: '',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Fllor,
    Brand
  },
  computed:{
    
  }
};
</script>



<style>

</style>