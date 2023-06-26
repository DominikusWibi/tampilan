<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3">
        <h1 class="h2 m-3">Dashboard Instruktur</h1>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <router-link :to="{name: 'Register'}" class="btn btn-md btn-success">TAMBAH INSTRUKTUR</router-link>
                        
                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAMA</th>
                                    <th scope="col">ALAMAT</th>
                                    <th scope="col">TANGGAL_KELAHIRAN</th>
                                    <th scope="col">TELEPON</th>
                                    <th scope="col">PASSWORD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(instruktur, id) in instrukturs" :key="id">
                                    <td>{{ instruktur.id }}</td>
                                    <td>{{ instruktur.nama }}</td>
                                    <td>{{ instruktur.alamat }}</td>
                                    <td>{{ instruktur.tanggal_kelahiran }}</td>
                                    <td>{{ instruktur.telepon }}</td>
                                     <td>{{ instruktur.password }}</td>
                                    <td>
                                         <router-link 
                                            :to="{ name:'Update', params: { id: instruktur.id } }" 
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
       
        let instrukturs = ref([])

       
        onMounted(() => {
            
            axios.get('http://127.0.0.1:8000/api/instruktur/tampil').then(response => {
               
                instrukturs.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })

       

        return {
            instrukturs
        }
    }
}
</script>
