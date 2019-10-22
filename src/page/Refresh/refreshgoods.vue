<template>

</template>
<script>
export default {
  data () {
    this.$router.push({
      path: '/goods',
      query: {
        cid: this.$route.query.cid,
        bid: this.$route.query.bid
      }
    })
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>
