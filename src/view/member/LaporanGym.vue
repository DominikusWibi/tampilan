<template>
 
  <div class="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Laporan GYM Bulanan</h1>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
          
            
            <table class="table table-striped table-bordered mt-4 table-responsive shadow">
              <thead class="thead-dark">
                <tr class="text-center">
                  <th scope="col">TANGGAL</th>
                  <th scope="col">JUMLAH MEMBER</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="(laporan, id) in laporans" :key="id">
                  <td>{{ laporan.tanggal_booking }}</td>
                  <td>{{ laporan.jumlah_data }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
</template>
//
<script>
import axios from "axios";
import { onMounted, ref, reactive } from "vue";


export default {
  setup() {
    //reactive state
    let laporans = ref([]);
    const laporan = reactive({
      id: "",
      nama_instruktur: "",
    });
    //state validation

  
   
    //mounted
    onMounted(() => {
   
      //get API from Laravel Backend
      
      axios
        .get("http://127.0.0.1:8000/api/laporan/tampil")
        .then((response) => {
          //assign state posts with response data
          laporans.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    
   
    return {
      laporans,
      laporan,
    
      selectedInstrukturId: null,
    };
  },
};
</script>

<style scoped>
.table-responsive {
  overflow-x: auto;
}
@media (max-width: 768px) {
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .table thead {
    display: none;
  }
  .table tbody {
    display: block;
    width: 100%;
  }
  .table tbody tr {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  .table tbody td {
    display: block;
    text-align: right;
    font-size: 13px;
    border-bottom: none;
    position: relative;
    padding-left: 50%;
    text-align: right;
  }
  .table tbody td:before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-weight: bold;
    text-align: left;
  }
}
</style>
