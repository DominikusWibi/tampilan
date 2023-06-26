<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3">
        <h1 class="h2 m-3">Jadwal Umum</h1>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <router-link :to="{name: 'Register'}" class="btn btn-md btn-success">TAMBAH JADWAL UMUM</router-link>
                        
                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">ID KELAS</th>
                                    <th scope="col">ID JADWAL UMUM</th>
                                    <th scope="col">JAM KELAS</th>
                                    <th scope="col">HARI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(jadwalumum, id) in jadwalumums" :key="id">
                                    <td>{{ jadwalumum.id }}</td>
                                    <td>{{ jadwalumum.id_kelas }}</td>
                                    <td>{{ jadwalumum.id_instruktur }}</td>
                                    <td>{{ jadwalumum.jam_kelas }}</td>
                                    <td>{{ jadwalumum.hari }}</td>
                                    <td>
                                         <router-link 
                                            :to="{ name:'Update', params: { id: jadwalumum.id } }" 
                                            class="btn btn-sm btn-primary m-1"
                                        >
                                            UBAH
                                        </router-link> 
                                        <button class="btn btn-sm btn-danger m-1">HAPUS</button>
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
        //reactive state
        let jadwalumums = ref([])

        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://127.0.0.1:8000/api/jadwalumum/tampil').then(response => {
                //assign state posts with response data
                jadwalumums.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })

        // function ($id){

        // }

        //return
        return {
            jadwalumums
        }
    }
}
</script>
