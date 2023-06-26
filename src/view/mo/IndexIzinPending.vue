<template>
  
  <div class="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">LIST SEMUA PERIZINAN</h1>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
        
                            <router-link :to="{ name: 'tampilan izin' }" class="nav-link">Cek All</router-link>
                        
            <!-- <router-link :to="{ name: 'addizin' }" class="btn btn-md btn-success shadow">TAMBAH INSTRUKTUR</router-link> -->
            <!-- <router-link :to="{ name: 'perizinanbelum' }" class="btn btn-md btn-success shadow">TAMPIL BELUM KONFIRMASI</router-link> -->

            <table class="table table-striped table-bordered mt-4 table-responsive shadow">
              <thead class="thead-dark">
                <tr class="text-center">
                  <th scope="col">NAMA KELAS</th>
                  <th scope="col">JAM MULAI</th>
                  <th scope="col">INSTRUKTUR PENGGANTI</th>
                  <th scope="col">INSTRUKTUR BERHALANGAN</th>
                  <th scope="col">IZIN</th>
                  <th scope="col">KETERANGAN</th>
                  <th scope="col">KONFIRMASI</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="(izin_instrukturs, id) in izins" :key="id">
                  <td>{{ izin_instrukturs.nama_kelas }}</td>
                  <td>{{ izin_instrukturs.jam_mulai }}</td>
                  <td>{{ izin_instrukturs.instruktur_pengganti }}</td>
                  <td>{{ izin_instrukturs.instruktur_berhalangan }}</td>
                  <td>{{ izin_instrukturs.izin }}</td>
                  <td>{{ izin_instrukturs.keterangan }}</td>
                  <td>{{ izin_instrukturs.konfirmasi }}</td>
                  <td v-if="izin_instrukturs.konfirmasi === 0"><button type="button" class="btn btn-sm btn-danger"  @click="konfirmasi(izin_instrukturs.id)">KONFIRMASI</button></td>
                  <td v-else><button type="button" class="btn btn-sm btn-danger" disabled>KONFIRMASI</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>
//
<script>
import axios from "axios";
import { onMounted, ref, reactive } from "vue";

export default {
  setup() {

    //reactive state
    let izins = ref([]);
    const izin = reactive({
      id: "",
      nama_izin: "",
    });
    //state validation
    const validation = ref([]);
    
    //mounted
    onMounted(() => {
     
      //get API from Laravel Backend
      axios
        .get("http://127.0.0.1:8000/api/IzinInstruktur/indexpending")
        .then((response) => {
          //assign state posts with response data
          izins.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    

    function konfirmasi(id) {
      axios
        .put(`http://127.0.0.1:8000/api/IzinInstruktur/verifikasi/${id}`, {})
        .then(() => {
          //redirect ke halaman login
          window.location.reload()
        })
        .catch((error) => {
          //assign state validation with error
          validation.value = error.response.data;
        });
    }

    //return
    return {
      izins,
      izin,
      konfirmasi,
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
