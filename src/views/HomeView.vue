

<template>
  <div>
    <!-- 头部 -->
    <div
      style="
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        background-color: aliceblue;
      "
    >
      <div style="display: flex">
        <div
          style="
            width: 300px;
            padding-left: 10px;
            color: cornflowerblue;
            font-size: 20px;
          "
        >
          partner后台管理
        </div>
        <div style="flex: 1; display: flex">
          <div style="flex: 1">中间</div>
          <div style="width: 200px">头像</div>
        </div>
      </div>
    </div>
    <div style="display: flex">
      <!-- 侧边栏 -->
      <div
        style="
          width: 200px;
          min-height: calc(100vh - 60px);
          border-right: 1px solid #ccc;
        "
      >
        <el-menu
          router
          default-active="/"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="/">item one</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 主体 -->
      <div style="flex: 1; padding: 10px">
        <div>
          <el-input
            placeholder="请输入名称"
            v-model="name"
            style="width: 300px"
          />
          <el-input
            placeholder="请输入名称"
            v-model="name"
            style="width: 300px; margin-left: 5px"
          />
          <el-button type="primary" style="margin-left: 5px"
            ><el-icon><Search /></el-icon><span>搜索</span></el-button
          >
          <el-button type="warning" style="margin-left: 5px"
            ><el-icon><Refresh /></el-icon><span>重置</span></el-button
          >
          <el-button type="success" style="margin-left: 5px"
            ><el-icon><Plus /></el-icon><span>新增</span></el-button
          >
        </div>
        <div style="margin: 10px 0">
          <el-table
            :data="state.tableData"
            border
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
            <el-table-column fixed="right" label="操作" width="150">
              <template #default>
                <el-button type="primary" size="small">编辑</el-button>
                <el-button type="danger" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div>
          <el-pagination
            small
            background
            layout="->,total,prev, pager, next"
            v-model:current-page="pageNum"
            v-model:page-size="pageSize"
            :total="50"
            class="mt-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Search,
  Refresh,
  Plus,
} from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
const name = ref();
const state = reactive({
  tableData: [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
  ],
});
const pageNum = ref(1);
const pageSize = ref(10);
// 用于多选
const multipleSelection = ref([])
const handleSelectionChange = (val) => {
  multipleSelection.value = val
  console.log( multipleSelection.value)
}

</script>

