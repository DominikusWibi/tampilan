<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3">
        <h1 class="h2 m-3">Beranda Member</h1>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                       

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">NAMA MEMBER</th>
                                    <th scope="col">TANGGAL BOOKING</th>
                                    <th scope="col">SLOT WAKTU</th>
                                    <th scope="col">WAKTU PRESENSI</th>
                                    
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(member, id) in members" :key="id">
                                  
                                    <td>{{ member.nama_member }}</td>
                                    <td>{{ member.tanggal_booking }}</td>
                                    <td>{{ member.slot_waktu }}</td>
                                    <td>{{ member.waktu_presensi }}</td>
                                    <td> <button type="button" class="btn btn-sm btn-danger"  @click="presensi(member.id)">presensi</button></td>
                               
                                     
                                   
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
            axios.get('http://127.0.0.1:8000/api/bookingGym/tampil').then(response => {
                //assign state posts with response data
                members.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })

        function presensi(id) {
        axios.put(`http://127.0.0.1:8000/api/bookingGym/presensi/${id}`)
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
            presensi
        }
    }
}
</script>
