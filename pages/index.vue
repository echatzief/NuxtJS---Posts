<template>
  <div class="container">
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-form-item label="Title">
        <a-input
          v-decorator="['title', { rules: [{ required: true, message: 'Please input your title!' }] }]"
        />
      </a-form-item>
        <a-form-item label="Description">
        <a-input
          v-decorator="['description', { rules: [{ required: true, message: 'Please input your description!' }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" v-on:click="sendForm">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      title:'',
      description:'',
      form: this.$form.createForm(this),
    }
  },
  methods:{
    sendForm(e){
      e.preventDefault();
      console.log(this.form)
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          axios.post('http://localhost:8080/api/posts',{
            title:values.title,
            description:values.description
          }).then(res=>{
            console.log(res)
            if(res.status == 200){
              this.$message.success('You successfully created a post');
            } else {
              this.$message.error('Failed to create a post');
            }
            this.form.setFieldsValue({
              'title':'',
              'description':'',
            })
          })
        }
      });
    }
  }
}
</script>

<style>
.container{
  margin-top:5%;
}
</style>