<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px">
      <el-menu router>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/user">用户管理</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script setup>
</script>
