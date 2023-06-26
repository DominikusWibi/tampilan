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
                         <router-link :to="{name: 'IndexMemberExp'}" class="btn btn-md btn-success">Index Member Exp</router-link>
                        
                                                 <router-link :to="{name: 'depoexp'}" class="btn btn-md btn-success">Index depo Exp</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAMA</th>
                                    <th scope="col">TANGGAL LAHIR</th>
                                    <th scope="col">TELEPON</th>
                                    <th scope="col">GENDER</th>
                                    <th scope="col">ALAMAT</th>
                                    <th scope="col">TANGGAL BERGABUNG</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(member, id) in members" :key="id">
                                    <td>{{ member.id }}</td>
                                    <td>{{ member.nama }}</td>
                                    <td>{{ member.tanggal_lahir }}</td>
                                    <td>{{ member.telepon }}</td>
                                    <td>{{ member.gender }}</td>
                                     <td>{{ member.alamat }}</td>
                                     <td>{{ member.tanggal_bergabung }}</td>
                                     
                                    <td>
                                         <router-link 
                                            :to="{ name:'Update', params: { id: member.id } }" 
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
        let members = ref([])

        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://127.0.0.1:8000/api/member/index').then(response => {
                //assign state posts with response data
                members.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })

        // function ($id){

        // }

        //return
        return {
            members
        }
    }
}
</script>
