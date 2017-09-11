<template>
  <div>
      <Parent></Parent>
  </div>
</template>
<script>
import Parent from '../components/Parent'
export default {
    name: 'hello',
    data () {
      return {
        msg: 'hello'
      }
    },
    components:{
      Parent
    }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 0.1rem;
}

a {
  color: #666;
}
</style>
