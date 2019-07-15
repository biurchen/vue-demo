<template>
  <div>
    <h1>{{title}}</h1>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <table>
          <tr v-for="blog in blogs" :key="blog.id">
            <td>{{blog}}</td>
          </tr>
        </table>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '博客列表页',
      blogs: [

      ]
    }
  },
  // 接口地址 http://siwei.me/interface/blogs/all
  mounted () {
    this.$http.get('/api/interface/blogs/all').then(
      response => {
        console.info(response.body)
        this.blogs = response.body.blogs
      },
      response => {
        console.error(response)
      }
    )
  }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

td {
    border-bottom: 1px solid grey
}
</style>
