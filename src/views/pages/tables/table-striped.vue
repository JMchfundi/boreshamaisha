<script>
import PageHeader from "@/components/page-header";
import Layout from "../../layouts/main";

import LTable from "./table"

// This is a code of table was added by Omari 
const tableColumns = ['Id', 'Country', 'Station', 'House', 'Total', 'Price']
const tableData = [{
  id: 1,
  country: 'Niger',
  station: 'Dakota Rice',
  house: 'Oud-Turnhout',
  total: '20',
  price: '$36.738'

},
{
  id: 2,
  country: 'Curaçao',
  station: 'Minerva Hooper',
  house: 'Sinaai-Waas',
  total: '60',
  price: '$23,789'

},
{
  id: 3,
  country: 'Netherlands',
  station: 'Baileux',
  house: 'Sage Rodriguez',
  total: '4',
  price: '$56,142'

},
{
  id: 4,
  country: 'Korea, South',
  station: 'Overland Park',
  house: 'Philip Chaney',
  total: '15',
  price: '$38,735'

},
{
  id: 5,
  country: 'Malawi',
  station: 'Feldkirchen in Kärnten',
  house: 'Doris Greene',
  total: '9',
  price: '$63,542'

}]

export default {
  components: {
    Layout,
    PageHeader,
    LTable
  },
  data() {
    // Added by Omari
    return {
      title: 'Dashboard',
      items: [
        {
          text: 'Africana',
        },
        {
          text: 'Striped Tables',
          active: true
        },

      ],
      // Table code added by Omari
      table1: {
        columns: [...tableColumns],
        data: [...tableData]
      },
    }
  }
}
</script>
<!-- Simple way to implement a table -->
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="table-responsive ">
      <template slot="header"></template>
      <LTable class="table-hover table-striped" :columns="table1.columns" :data="table1.data"></LTable>
    </div>
  </Layout>
</template>
