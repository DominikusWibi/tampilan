//import vue router
import { createRouter, createWebHistory } from 'vue-router'
//define a routes

const routes = [
    {
        path: '/',
        name: 'beranda',
        component: () => import('@/components/DashboardLayout.vue'),
        children:[
            {
                path: "/",
                name: "halaman depan",
                component: () =>
                import('@/view/instruktur/IndexInstruktur.vue'),
            },
            {
                path: "/register",
                name: "Register",
                component: () =>
                import('@/view/instruktur/CreateInstruktur.vue'),
            },
            {
                path: "/update",
                name: "Update",
                component: () =>
                import('@/view/instruktur/EditInstruktur.vue'),
            },
            {
                path: "/",
                name: "IndexMember",
                component: () =>
                import('@/view/member/IndexMember.vue'),
            },
            {
                path: "/",
                name: "IndexMemberExp",
                component: () =>
                import('@/view/member/indexMemberExp.vue'),
            },
            {
                path: "/",
                name: "bookingGym",
                component: () =>
                import('@/view/member/BookingGym.vue'),
            },
            {
                path: "/",
                name: "laporanGym",
                component: () =>
                import('@/view/member/LaporanGym.vue'),
            },
            {
                path: "/register",
                name: "RegisterMember",
                component: () =>
                import('@/view/member/CreateMember.vue'),
            },
            // {
            //     path: "/member",
            //     name: "member.edit",
            //     component: () =>
            //     import('@/view/member/EditMember.vue'),
            // },
            // {
            //     path: "/jadwalumum",
            //     name: "jadwalumum.index",
            //     component: () =>
            //     import('@/views/JadwalUmum/add'),
            // },
            // {
            //     path: "/jadwalumum",
            //     name: "jadwalumum.create",
            //     component: () =>
            //     import('@/views/JadwalUmum/createPage.vue'),
            // },
            // {
            //     path: "/jadwalumum",
            //     name: "jadwalumum.edit",
            //     component: () =>
            //     import('@/views/JadwalUmum/editPage.vue'),
            // },
            {
                path: "/",
                name: "halaman mburi",
                component: () =>
                import('@/view/JadwalHarian/IndexJadwalHarian.vue'),
            },
            // {
            //     path: "/index",
            //     name: "halaman aktivasi",
            //     component: () =>
            //     import('@/view/AktivasiKorean/IndexAktivasiTransaksi.vue'),
            // },
            {
                path: "/",
                name: "tampilan izin",
                component: () =>
                import('@/view/mo/IndexIzin.vue'),
            },
         {
            path: "/",
            name: "tampilan izin pending",
            component: () =>
            import('@/view/mo/IndexIzinPending.vue'),
        
        },
        {
            path: "/",
            name: "depoexp",
            component: () =>
            import('@/view/member/DepoExp.vue'),
        
        },
        ], 
    },
]
//create router
const router = createRouter({
    history: createWebHistory(),
    routes // config routes
})
export default router;