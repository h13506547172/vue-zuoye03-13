<template>
  <div>
    <p>{{num}}</p>
    <p>{{num | disNum | disNum}}</p>
    <p>{{num  | disNum }}</p>
    <p>{{data | disData}}</p>
    <p>{{data | disData| disData}}</p>

  </div>
</template>

<script>
import moment from "moment";
export default {
  data () {
    return {
      num: 18222547,
      data: 1636450540055
    }
  },
  filters: {
    disNum(val) {
      if (typeof val == 'string') {
        return val.substr(0, val.length-1)/10 +'万'
      }
      return val/1000 +'千'
    },
    disData(val) {
      if (typeof val == 'string') {
        return val.replace(/-/g ,'/')
      }
    //   const data = new Date(val)
    //  return `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`
    return moment(val).format('YYYY-MM-DD')
    }
  }
}
</script>

<style>

</style>