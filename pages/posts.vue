<template>
  <div class="container" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
  <a-table :columns="columns" :data-source="posts" :loading="isLoading">
  </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'cAt',
    dataIndex: 'cAt',
    key: 'cAt',
  },
]
import axios from 'axios'
export default {
  data(){
    return{
      posts:[],
      columns:columns,
      isLoading:false,
    }
  },
  fetch(){
    axios.get('http://localhost:8080/api/posts')
    .then(res=>{
      console.log(res.data)
      res.data.forEach((i,index)=>{
       i.key = index
      })
      this.$data.posts = res.data
    })
  },
  created(){
    this.$data.isLoading = true
    axios.get('http://localhost:8080/api/posts')
    .then(res=>{
      res.data.forEach((i,index)=>{
        i.key = index
      })
      this.$data.posts = res.data
      this.$data.isLoading = false 
    })
  },
}
</script>

<style>
.container{
  align-items:center;
}
</style>