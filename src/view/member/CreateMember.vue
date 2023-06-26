<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH MEMBER</h4>
                        <hr>
                        <form @submit.prevent="store">
                            <div class="form-group mb-3">
                                <label class="form-label">Nama Member</label>
                                <input type="text" class="form-control" v-model="member.nama" placeholder="Masukkan nama member">
                                
                                <!-- validation -->
                                <div v-if="validation.nama" class="mt-2 alert alert-danger">{{ validation.nama[0] }}</div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal Lahir</label>
                                    <input class="form-control" type="date" v-model="member.tanggal_lahir" placeholder="Masukkan tanggal lahir">
                            
                                <!-- validation -->
                                <div v-if="validation.tanggal_lahir" class="mt-2 alert alert-danger">{{ validation.tanggal_lahir[0] }}</div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Telepon</label>
                                    <input class="form-control" type="text" v-model="member.telepon" placeholder="Masukkan telepon">
                            
                                <!-- validation -->
                                <div v-if="validation.telepon" class="mt-2 alert alert-danger">{{ validation.telepon[0] }}</div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Gender</label>
                                    <input class="form-control" type="text" v-model="member.gender" placeholder="Masukkan gender">
                            
                                <!-- validation -->
                                <div v-if="validation.gender" class="mt-2 alert alert-danger">{{ validation.gender[0] }}</div>
                            </div>                    

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Alamat </label>
                                    <input class="form-control" type="text" v-model="member.alamat" placeholder="Masukkan alamat">
                            
                                <!-- validation -->
                                <div v-if="validation.alamat" class="mt-2 alert alert-danger">{{ validation.alamat[0] }}</div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal bergabung</label>
                                    <input class="form-control" type="text" v-model="member.tanggal_bergabung" placeholder="Masukkan tanggal_bergabung">
                            
                                <!-- validation -->
                                <div v-if="validation.tanggal_bergabung" class="mt-2 alert alert-danger">{{ validation.tanggal_bergabung[0] }}</div>
                            </div>     
                              <div class="form-group mb-3">
                                <label for="content" class="form-label">Password</label>
                                    <input class="form-control" type="text" v-model="member.password" placeholder="Masukkan password">
                            
                                <!-- validation -->
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
        //state departemen
        const member = reactive({
            id: '',
            nama: '',
            tanggal_lahir: '',
            telepon: '',
            gender: '',
            alamat: '',
            tanggal_bergabung: '',
            password:''
        })
    
        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()  

        //method store
        function store() {
            let nama = member.nama
            let tanggal_lahir = member.tanggal_lahir
            let telepon = member.telepon
            let gender = member.gender
            let alamat = member.alamat
            let tanggal_bergabung = member.tanggal_bergabung
            let password = member.password

            axios.post('http://127.0.0.1:8000/api/member/register', {
                nama: nama,
                tanggal_lahir: tanggal_lahir,
                telepon: telepon,
                gender: gender,
                alamat: alamat,
                tanggal_bergabung: tanggal_bergabung,
                password: password
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'RegisterMember'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }

        //return
        return {
            member,
            validation,
            router,
            store
        }
    }
}
</script>
<style>
</style>