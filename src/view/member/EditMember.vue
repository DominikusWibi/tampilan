<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>EDIT MEMBER</h4>
                        <hr>
                        <form @submit.prevent="update(this.id)">
                            <div class="form-group mb-3">
                                <label class="form-label">Nama Member</label>
                                <input type="text" class="form-control" v-model="member.nama" placeholder="Masukkan nama member">
                                
                                
                                <div v-if="validation.nama" class="mt-2 alert alert-danger">{{ validation.nama[0] }}</div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal Lahir</label>
                                    <input class="form-control" v-model="member.tanggal_lahir" placeholder="Masukkan tanggal lahir">
                            
                                
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Telepon</label>
                                    <input class="form-control" type="date" v-model="member.telepon" placeholder="Masukkan telepon">
                            
                               
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Gender</label>
                                    <input class="form-control" type="text" v-model="member.gender" placeholder="Masukkan gender">
                                                        
                            
                            </div>                    

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Alamat</label>
                                    <input class="form-control" type="text" v-model="member.alamat" placeholder="Masukkan alamat">
                            
                               
                            </div>

                             <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal Bergabung</label>
                                    <input class="form-control" type="text" v-model="member.tanggal_bergabung" placeholder="Masukkan tanggal bergabung">
                            
                            </div>
                            <button type="submit" class="btn btn-primary">UBAH</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref,reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {
    setup() {
        const route = useRoute()

    const instruktur = reactive({
      nama: "",
      tanggal_lahir: "",
      telepon: "",
      gender: "",
      alamat: "",
      tanggal_bergabung: "",
      password: "",
    });        
        
      
        const validation = ref([])

        
        const router = useRouter()  

      

        function update() {
      let nama = member.nama;
      let tanggal_lahir = member.tanggal_lahir;
      let telepon = member.tanggal_kelahiran;
      let gender = member.gender;
      let alamat = member.password;
      let tanggal_bergabung = member.tanggal_bergabung;
      let password = member.nama;

      axios.put("http://127.0.0.1:8000/api/member/update/" + route.params.id, {
          nama: nama,
          tanggal_lahir: tanggal_lahir,
          telepon: telepon,
          gender: gender,
          alamat: alamat,
          tanggal_bergabung: tanggal_bergabung,
          password: password,
        })
        .then(() => {
        
          router
            .push({
              name: "halaman depan",
            })
            
        })
        .catch((error) => {
      
          validation.value = error.response.data;
        });
    }

       
        return {
            member,
            validation,
            router,
            update,
        }
    }
}
</script>
<style>
</style>