<template>
  <div v-loading="loading" class="dashboard-container">
    <div class="dashboard-text">
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <tree-tools :treeNode="company" :is-root="true"></tree-tools>
        <el-tree
          ref="tree"
          :data="departs"
          :props="defaultProp"
          :highlight-current="true"
          :default-expand-all="true"
        >
          <tree-tools
            slot-scope="{ data }"
            :tree-node="data"
            @delDepts="getDepartments"
            @addDepts="addDepts"
            @editDepts="editDepts"
          />
        </el-tree>
      </el-card>
      <add-dept
        :showDialog.sync="showDialog"
        @getDepartments="getDepartments"
        :tree-node="node"
        ref="editDept"
      ></add-dept>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import treeTools from "./components/tree-tools.vue";
import { getDepartment } from "@/api/departments";
import { tranListToTreeData } from "@/utils";
import AddDept from "./components/add-dept.vue";
export default {
  components: { treeTools, AddDept },
  name: "Dashboard",
  data() {
    return {
      defaultProp: { label: "name" },
      departs: [],
      loading: false,
      company: { name: "佳乐科技股份有限公司", manager: "负责人", id: "" },
      showDialog: false,
      node: {},
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },

  mounted() {
    this.getDepartments();
  },
  methods: {
    async getDepartments() {
      this.loading = true;
      const result = await getDepartment();
      this.departs = tranListToTreeData(result.depts, "");
      this.company = { name: result.companyName, manager: "负责人", id: "" };
      this.loading = false;
    },
    addDepts(node) {
      this.node = node;
      this.showDialog = true;
    },
    editDepts(node) {
      this.node = node;
      this.showDialog = true;
      this.$refs.editDept.toGetDepartDetail(node.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.tree-card {
  padding: 30px 140px;
  font-size: 12px;
}
</style>
