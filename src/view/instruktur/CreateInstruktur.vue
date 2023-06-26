<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH INSTRUKTUR</h4>
                        <hr>
                        <form @submit.prevent="store">
                            <div class="form-group mb-3">
                                <label class="form-label">Nama Instruktur</label>
                                <input type="text" class="form-control" v-model="instruktur.nama" placeholder="Masukkan nama instruktur">
                                
                               
                                <div v-if="validation.nama" class="mt-2 alert alert-danger">{{ validation.nama[0] }}</div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Alamat</label>
                                    <input class="form-control" v-model="instruktur.alamat" placeholder="Masukkan alamat">
                            
                            
                                <div v-if="validation.alamat" class="mt-2 alert alert-danger">{{ validation.alamat[0] }}</div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal Kelahiran</label>
                                    <input class="form-control" type="date" v-model="instruktur.tanggal_kelahiran" placeholder="Masukkan tanggal lahir instruktur">
                            
                            
                                <div v-if="validation.tanggal_kelahiran" class="mt-2 alert alert-danger">{{ validation.tanggal_kelahiran[0] }}</div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">telepon</label>
                                    <input class="form-control" type="text" v-model="instruktur.telepon" placeholder="Masukkan telepon instruktur">
                            
                         
                                <div v-if="validation.telepon" class="mt-2 alert alert-danger">{{ validation.telepon[0] }}</div>
                            </div>                    

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Password </label>
                                    <input class="form-control" type="text" v-model="instruktur.password" placeholder="Masukkan password">
                            
                              
                                <div v-if="validation.password" class="mt-2 alert alert-danger">{{ validation.password[0] }}</div>
                            </div>
                            <button type="submit" class="btn btn-primary">SAVE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
    setup() {
     
        const instruktur = reactive({
            id: '',
            nama: '',
            alamat: '',
            tanggal_kelahiran: '',
            telepon: '',
            password:''
        })
    
      
        const validation = ref([])

       
        const router = useRouter()  

      
        function store() {
            let nama = instruktur.nama
            let alamat = instruktur.alamat
            let tanggal_kelahiran = instruktur.tanggal_kelahiran
            let telepon = instruktur.telepon
            let password = instruktur.password

            axios.post('http://127.0.0.1:8000/api/instruktur/register', {
                nama: nama,
                alamat: alamat,
                tanggal_kelahiran: tanggal_kelahiran,
                telepon: telepon,
                password: password
            }).then(() => {
      
                router.push({
                    name: 'halaman depan'
                })
            }).catch(error => {
        
                validation.value = error.response.data
            })
        }

        return {
            instruktur,
            validation,
            router,
            store
        }
    }
}
</script>

<style>
</style>