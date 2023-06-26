<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3">
        <h1 class="h2 m-3">Dashboard Jadwal Harian</h1>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <button type="button" class="btn btn-sm btn-warning"  @click="generate()">Generate Jadwal</button>
                        <table class="table table-striped table-bordered mt-4">
                            
                            <thead class="thead-dark">
                                <tr>
                                   <th scope="col">ID </th>
                      <th scope="col">NAMA INSTRUKTUR</th>
                      <th scope="col">KELAS</th>
                      <th scope="col">TANGGAL</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">HARI</th>
                      <th scope="col">JAM KELAS</th>
                      <th scope="col">AKSI</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(JadwalHarian, id) in jadwal_harians" :key="id">
                    <td>{{ JadwalHarian.id }}</td>
                      <td>{{ JadwalHarian.nama_instruktur}}</td>
                      <td>{{ JadwalHarian.nama_kelas}}</td>
                      <td>{{ JadwalHarian.tanggal }}</td>
                      <td>{{ JadwalHarian.status }}</td>
                      <td>{{ JadwalHarian.hari }}</td>
                      <td>{{ JadwalHarian.jam_kelas }}</td>
                      <td class="d-flex gap-1 justify-content: center;">
                          <!-- <router-link :to="{ name: 'jadwalharian.edit', params: { id: jadwalharian.id } }" class="btn btn-sm btn-primary">UBAH STATUS JADWAL</router-link>
                          -->
                          <button type="button" class="btn btn-sm btn-danger"  @click="libur(JadwalHarian.id)">Cek</button>
                      </td>
                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
    setup() {
       
        let jadwal_harians = ref([])

       
        onMounted(() => {
            
            axios.get('http://127.0.0.1:8000/api/jadwalHarian/show').then(response => {
               
                jadwal_harians.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })

          function libur(id) {
      axios.put(`http://127.0.0.1:8000/api/jadwalHarian/libur/${id}`, {}).then(() => {
        //redirect ke halaman login

        window.location.reload()
      });
    }
    function generate() {
      axios.get(`http://127.0.0.1:8000/api/jadwalHarian/generate`, {}).then(() => {
        //redirect ke halaman login

        window.location.reload()
      });
    }

        return {
            jadwal_harians,
            libur,
            generate
        }
    }
  

}
</script>
