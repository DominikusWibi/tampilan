<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3">
        <h1 class="h2 m-3">Beranda Member</h1>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <router-link :to="{name: 'RegisterMember'}" class="btn btn-md btn-success">TAMBAH MEMBER</router-link>
                        <router-link :to="{name: 'IndexMember'}" class="btn btn-md btn-success">Index Member Alls</router-link>
                        <button type="button" class="btn btn-sm btn-danger"  @click="deaktivasi()">DEAKTIVASI MEMBER</button>
                        
                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAMA</th>
                                    <th scope="col">TANGGAL LAHIR</th>
                                    <th scope="col">TELEPON</th>
                                   
                                    <th scope="col">ALAMAT</th>
                          
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(member, id) in members" :key="id">
                                    <td>{{ member.id }}</td>
                                    <td>{{ member.nama }}</td>
                                    <td>{{ member.tanggal_lahir }}</td>
                                    <td>{{ member.telepon }}</td>
                                    
                                     <td>{{ member.alamat }}</td>
                                 
                                    
                                    
                                    
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
        let members = ref([])

        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://127.0.0.1:8000/api/member/indexExp').then(response => {
                //assign state posts with response data
                members.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })

function deaktivasi() {
        axios.put('http://127.0.0.1:8000/api/member/resetmember')
        .then(() => {
          //redirect ke halaman login
          window.location.reload()
        })
        
    }
       
        // function ($id){

        // }

        //return
        return {
            members,
            deaktivasi
        }
    }
}
</script>
