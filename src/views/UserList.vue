<template>
  <div class="user-page">
    <el-button type="primary" @click="openDialog">新增用户</el-button>
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="ID"/>
      <el-table-column prop="name" label="用户名"/>
      <el-table-column prop="phone" label="手机号"/>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="editUser(scope.row)">编辑</el-button>
          <el-button type="danger" @click="delUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="total"
      v-model:current-page="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next"
    />
    <!-- 新增编辑弹窗 -->
    <el-dialog v-model="dialogVisible" title="用户表单">
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item prop="name" label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
// 模拟后端数据，真实项目替换成axios请求
const tableData = ref([
  {id:1, name:'张三', phone:'13600001111'},
  {id:2, name:'李四', phone:'13600002222'}
])
const total = ref(2)
const currentPage = ref(1)
const pageSize = ref(10)
const dialogVisible = ref(false)
const formRef = ref(null)
const form = reactive({
  name:'',
  phone:''
})
const rules = {
  name: [{required:true, message:'请输入用户名', trigger:'blur'}],
  phone: [{required:true, message:'请输入手机号', trigger:'blur'}]
}
const openDialog = () => {
  dialogVisible.value = true
  form.name=''
  form.phone=''
}
const editUser = (row) => {
  dialogVisible.value = true
  form.name = row.name
  form.phone = row.phone
}
const delUser = (row) => {
  tableData.value = tableData.value.filter(item=>item.id!==row.id)
}
const submitForm = async () => {
  await formRef.value.validate()
  // 这里可以写axios提交，当前使用模拟数据
  tableData.value.push({
    id: Date.now(),
    name:form.name,
    phone:form.phone
  })
  dialogVisible.value = false
}
</script>
<style scoped>
.user-page{padding:20px;}
</style>
