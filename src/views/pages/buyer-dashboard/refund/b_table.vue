<script>
import axios from "axios";
/**
 * Transactions component
 */
export default {
  data() {
    return {
      transactionData: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 25, 50],
      filter: null,
      filterOn: [],
      sortBy: "ref",
      sortDesc: false,
      fields: [
        { key: "date", sortable: true},
        { key: "ref", sortable: true },
        { key: "amount", sortable: true},
        // { key: "paymentstatus", sortable: true, label: "Payment Status" },
        { key: "action" }
      ]
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.transactionData.length;
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.transactionData.length;
    // this.getAfricanaData()
  },
  methods: {
    getAfricanaData(){
    var self = this
    const url = 'https://ug-africana-api.azurewebsites.net/'
    axios.get(url +"get_service")
    .then(function (response) {
      // console.log(JSON.stringify(response.data))
      self.transactionData = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
  },      
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <b-dropdown right toggle-class="arrow-none card-drop" class="float-right" variant="white">
        <template v-slot:button-content>
          <i class="mdi mdi-dots-vertical"></i>
        </template>
        <!-- item-->
        <b-dropdown-item>Sales Report</b-dropdown-item>
        <!-- item-->
        <b-dropdown-item>Export Report</b-dropdown-item>
        <!-- item-->
        <b-dropdown-item>Profit</b-dropdown-item>
        <!-- item-->
        <b-dropdown-item>Action</b-dropdown-item>
      </b-dropdown>

      <h4 class="card-title mb-4">Latest Transactions</h4>
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <div id="tickets-table_length" class="dataTables_length">
            <label class="d-inline-flex align-items-center">
              Show&nbsp;
              <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
            </label>
          </div>
        </div>
        <!-- Search -->
        <div class="col-sm-12 col-md-6">
          <div id="tickets-table_filter" class="dataTables_filter text-md-right">
            <label class="d-inline-flex align-items-center">
              Search:
              <b-form-input
                v-model="filter"
                type="search"
                class="form-control form-control-sm ml-2"
              ></b-form-input>
            </label>
          </div>
        </div>
        <!-- End search -->
      </div>
      <div class="table-responsive">
        <b-table
          :items="transactionData"
          :fields="fields"
          responsive="sm"
          :per-page="perPage"
          :current-page="currentPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
        >
          <template v-slot:cell(paymentstatus)="row">
            <div
              class="badge font-size-12"
              :class="{'badge-soft-danger': `${row.value}` === 'Chargeback',
              'badge-soft-success': `${row.value}` === 'Paid',
              'badge-soft-warning': `${row.value}` === 'Unpaid'}"
            >{{ row.value}}</div>
          </template>

          <template v-slot:cell(action)>
            <a
              href="javascript:void(0);"
              class="mr-3 text-primary"
              v-b-tooltip.hover
              data-toggle="tooltip"
              title="Edit"
            >
              <i class="mdi mdi-pencil font-size-18"></i>
            </a>
            <a href="javascript:void(0);" class="text-danger" v-b-tooltip.hover title="Delete">
              <i class="mdi mdi-trash-can font-size-18"></i>
            </a>
          </template>
        </b-table>
      </div>
      <div class="row">
        <div class="col">
          <div class="dataTables_paginate paging_simple_numbers float-right">
            <ul class="pagination pagination-rounded mb-0">
              <!-- pagination -->
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>