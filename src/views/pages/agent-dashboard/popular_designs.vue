<style>
.sup-docs {
  height: 5em;
}

.btn-upld {
  width: 13em;
}

thead {
  line-height: 0.8em;
}
@media all and (max-width:30em) {
  .main-container {
    max-height: fit-content;
  }

  .col-for-button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3em;
   

  }

  /* .table-responsive {
    z-index: 1;
    margin-top: 1.4em;
  } */
}
</style>
<script>
import PageHeader from "@/components/page-header";
import Layout from "@/views/layouts/main";
import  P_table from "../../../components/tables/projects_table"

export default {
  components: {
    PageHeader,
    Layout,
    P_table
    
  },
  data() {
    return {
      title: 'Popular designs',
      items: [
        {
          text: 'Africana',
        },
        {
          text: 'Designs',
          active: true
        },

      ],
    }
  }
}
</script>
<template>
  <Layout>
    <div class="main-container">
      <PageHeader :title="title" :items="items" />
      <hr class="mt-0">
      <div class="card">
        <div class="card-body">
          <hr class="mt-0">
          <div class="row no-gutters sup-docs d-flex align-items-center" style="background-color: rgb(220, 236, 241); height: 
          5em;">
            <div class="col-lg-8">
              <div class="d-flex justify-content-start">
                <div class="">
                  <h3 class="font-weight-bold d-flex align-items-center ml-2">
                    <span class="font-size-24 d-flex">
                      <i class="ri-file-list-line mr-1"></i>
                    </span>All Designs
                  </h3>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-4 col-for-button">
              <div class="d-flex justify-content-end mr-3">
                  <button @click="$router.push('/Xingzheng/addProject')" class="btn text-uppercase btn-sm btn-primary d-flex btn-upld"><i class="ri-add-circle-fill d-flex align-items-center mr-1 "></i>New Product</button>
              </div>
              
            </div> -->
          </div>
          <div class="row">
            <div class="col">
              <P_table/>
              <!-- <Docs_table></Docs_table> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>