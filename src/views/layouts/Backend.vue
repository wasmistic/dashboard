<template>
    <!-- App.vue -->

    <v-app id="inspire" >

        <v-navigation-drawer  v-model="drawer" :clipped="clipped" app left>
            
            <v-container class="mycontainer">
                 <sidebar-usercard :user="user"/>
                   <v-list dense class="mt-5">
                        <v-subheader class="sub-head" style="font-size: 11px;color: rgba(43, 43, 43, 0.67) !important;">Main</v-subheader>
                    <!-- for testing -->
                       <!-- <v-list dense> -->
                    <nav-list   v-for="(item,i) in home_menu" :key="i"
                        :data=" { icon: item.icon, text: item.text,link:item.link,children:item.children, prepend_icon:item.prepend_icon,heading:item.heading }"
                        
                        :hasChildren=item.hasChildren :show_heading="item.show_heading" ></nav-list>
                </v-list>
                <v-subheader class="sub-head" style="font-size: 11px;color: rgba(43, 43, 43, 0.67) !important;">Employees</v-subheader>
                
                 <v-list dense>
                    <nav-list   v-for="(item,i) in navigation_menu" :key="i"
                        :data=" { icon: item.icon, text: item.text,link:item.link,children:item.children, prepend_icon:item.prepend_icon,heading:item.heading }"
                        
                        :hasChildren=item.hasChildren :show_heading="item.show_heading" ></nav-list>
                </v-list>
          
           
     

                    <div class="pa-2 text-center owner_div mb-10">
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class=" first" color="secondary" style="font-size:10px">Support. Report . Terms of Use</v-list-item-title>
                                    <v-list-item-subtitle class="second"  color="accent">
                                        <span>&copy; Sidtrix ICT Solutions | All Right reserve</span>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </div>

            </v-container>

        </v-navigation-drawer>

      
          <v-app-bar app   elevation="1" color="#fff" flat :clipped-left="$vuetify.breakpoint.mdAndUp">
               <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer" v-show="$vuetify.breakpoint.smAndDown"/>
            <v-container>
                 <app-logo></app-logo>
                
            </v-container>
            
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
                <!-- <v-container> -->
                    <avatar :menu="user_menu" :user="user" />
                <!-- </v-container> -->
            </v-app-bar>




        <!-- Sizes your content based upon application components -->
        <v-content  class="content-holder" style="background-color: #f9f7f7;">
             <!-- <v-progress-linear :active="apiloading" :indeterminate="apiloading" absolute color="primary"> </v-progress-linear> -->
                <v-container>
                    <router-view ></router-view>
                </v-container>
                
               
            
        </v-content>

        <!-- <bottom-nav v-if="showAppBar && showBottomBar"></bottom-nav> -->
<!--        <search-bar></search-bar>-->

    </v-app>
</template>
<script>
    import {
        loadingMixin
    } from '../../mixins/Loading'
    import EventBus from '@/Services/Event'

    export default {
        inject:["Bus"],
        mixins: [loadingMixin],
       
        data() {
            return {
                clipped:false,
                currentAppTitle:"",
                loading: true,
                router_from:'',
                hideBottomNav:true,
                dialog: false,
                bottombar_active_btn: 0,
                drawer: null,
                home_menu:[
                    {
                        icon: 'mdi-gauge',
                        text: 'Dashboard',
                        link: '/',
                        show:false
                    },
                     {
                        icon: 'mdi-cube-outline',
                        text: 'Apps',
                        link: 'home',
                        show:false
                    },
                ],
                Setting_Menu_list:[
                    {
                        icon: 'mdi-account-tie',
                        text: 'Staff',
                        link: '',
                        show:false
                    },
                    {
                        icon: 'mdi-layers-outline',
                        text: 'Roles',
                        link: '',
                        show:false
                    },
                    {
                        icon: 'mdi-cog-outline',
                        text: 'App Setting',
                        link: '',
                        show:false
                    },
                ],
                   
               navigation_menu: [
                   {icon:'mdi-home-city-outline', text:'Account',link:'balance'},
                   {icon:'mdi-account-details-outline', text:'Chat',link:'chat'},
                    {//employee
                        icon:'mdi-account-tie-outline', 
                        icon_alt: 'mdi-chevron-up',
                        text:'Employees',
                        model: false,
                        prepend_icon:'mdi-chevron-down',
                        hasChildren:true,
                        children: [
                            { text:'All Employees',link:'all_employee'},
                                { text:'Holidays',link:'employee_holiday'},
                                { text:'Leaves(Admin)',link:'employee_leave_admin'},
                                { text:'Leaves(Employee)',link:'employee_leave_employee'},
                                { text:'Leaves Settings',link:'leave_setting'},
                                { text:'Attendance (Admin)',link:'attendance_admin'},
                                { text:'Attendance (Employee)',link:'attendance_employee'},
                                { text:'Departments',link:'department'},
                                { text:'Designation',link:'designation'},
                                { text:'Timesheet',link:'time_sheet'},
                                { text:'Shift & Schedule',link:'shift_schedule'},
                                { text:'Overtime',link:'over_time'},
                            
                          
                             
                        ],
                    },
                    {icon:'mdi-account-group', text:'Clients',link:'client',hasChildren:false},
                    {icon:'mdi-account-tie', text:'Leads',link:'lead',hasChildren:false},
                    {icon:'mdi-ticket-outline', text:'Tickets',link:'ticket',hasChildren:false},
                    {//projects
                    icon: 'mdi-rocket-outline',
                    'icon-alt': 'mdi-chevron-up',
                    text: 'Projects',
                    model: false,
                    prepend_icon:'mdi-chevron-down',
                    hasChildren:true,
                    children: [
                                { text:'Projects',link:'projects'},
                                { text:'Tasks',link:''},
                                { text:'Project Management',link:'project_management'},
                                { text:'Hospital Administration',link:'hospital_administration'},
                                { text:'Video Calling App',link:'video_calling_app'},
                                { text:'Office Management',link:'office_management'},
                                { text:'Task Board',link:'task_board'},
                    ],
                    },
                    {//Payroll
                        icon:'mdi-cash-multiple', 
                        icon_alt: 'mdi-chevron-up',
                        text:'Payrolls',
                        model: true,
                        prepend_icon:'mdi-chevron-down',
                        hasChildren:true,
                        children: [
                        // {icon:'mdi-cash-multiple', text:'Sales',link:'sale'},
                        { text:'Employee Salary',link:'employee_salary'},
                            { text:'Payslip',link:'payslip'},
                            { text:'Payroll Items',link:'payroll_items'},
                        {icon:'mdi-file-pdf-box-outline', text:'Policies',link:'policy'},
                        ],
                    },
                    {//Accounting
                    icon: 'mdi-checkbox-multiple-blank-outline',
                    'icon-alt': 'mdi-chevron-up',
                    text: 'Accountings',
                    model: false,
                    prepend_icon:'mdi-chevron-down',
                    hasChildren:true,
                    children: [
                        { text:'Estimates',link:'estimates'},
                            { text:'Invoices',link:'invoice'},
                            { text:'Payments',link:'payments'},
                            { text:'Expenses',link:'expenses'},
                            { text:'Provident Fund',link:'provident_fund'},
                            { text:'Taxes',link:'taxes'},
                            { text:'Categories',link:'categories'},
                            { text:'Budgets',link:'budgets'},
                            { text:'Budget Expenses',link:'budget_expenses'},
                            { text:'Budget Revenues',link:'budget_revenues'},
                    ],
                    },
                    {//Report
                    icon: 'mdi-chart-pie',
                    'icon-alt': 'mdi-chevron-up',
                    text: 'Reports',
                    model: false,
                    prepend_icon:'mdi-chevron-down',
                    hasChildren:true,
                    children: [
                       { text:'Expense Report',link:'expense_report'},
                            { text:'Invoice Report',link:'invoice_report'},
                            { text:'Payments Report',link:'payments_report'},
                            { text:'Project Report',link:'project_report'},
                            { text:'Task Report',link:'task_report'},
                            { text:'User Report',link:'user_report'},
                            { text:'Employee Report',link:'employee_report'},
                            { text:'Payslip Report',link:'payslip_report'},
                            { text:'Attendance Report',link:'attendance_report'},
                            { text:'Leave Report',link:'leave_report'},
                            { text:'Daily Report',link:'daily_report'},
                    ],
                    },
                    {//performance
                        icon: 'mdi-school',
                        'icon-alt': 'mdi-chevron-up',
                        text: 'Performance',
                        model: false,
                        prepend_icon:'mdi-chevron-down',
                        hasChildren:true,
                        children:  [
                            // {icon:'mdi-school', text:'Performance',link:'performance'},
                            { text:'Performance Indicator',link:'performance_indicator'},
                                { text:'Performance Review',link:'performance_review'},
                                { text:'Performance Appraisal',link:'performance_appraisal'},
                            {icon:'mdi-target', text:'Goals',link:'goal'},
                                { text:'Goal List',link:'goal_list'},
                                { text:'Goal Type',link:'goal_type'},
                              
                            {icon:'mdi-bullhorn-outline', text:'Promotion',link:'promotion'},
                                
                        ],
                    },
                    {//Traiing
                    icon: 'mdi-pencil-box-outline',
                    'icon-alt': 'mdi-chevron-up',
                    text: 'Training',
                    model: false,
                    prepend_icon:'mdi-chevron-down',
                    hasChildren:true,
                    children: [
                       { text:'Training List',link:'training_list'},
                                { text:'Trainers',link:'trainers'},
                                { text:'Training Type',link:'training_type'},
                    ],
                    },
                    {icon:'mdi-launch', text:'Resignation',link:'resignation'},
                    {icon:'mdi-tray-remove', text:'Termination',link:'termination'},
                     {icon:'mdi-vector-circle', text:'Assets',link:'asset'},
                    {//adminitrations
                        icon: 'mdi-bag-checked',
                        'icon-alt': 'mdi-chevron-up',
                        text: 'Jobs',
                        model: false,
                        prepend_icon:'mdi-chevron-down',
                        hasChildren:true,
                        children: [
                           
                                { text:'User Dashboard',link:'user_dashboard'},
                                { text:'Jobs Dashboard',link:'jobs_dashboard'},
                                { text:'Manage Jobs',link:'manage_jobs'},
                                { text:'Manage Resumes',link:'manage_resumes'},
                                { text:'Shortlist Candidates',link:'shortlist_candidates'},
                                { text:'Interview Questions',link:'interview_questions'},
                                { text:'Offer Approvals',link:'offer_approvals'},
                                { text:'Experience Level',link:'experience_level'},
                                { text:'Candidates List',link:'candidates_list'},
                                { text:'Schedule Timing',link:'schedule_timing'},
                                { text:'Aptitude Results',link:'aptitude_results'},
                              
                           

                                
                            ],
                    },
                    {//setting
                    icon: 'mdi-cog-outline',
                    'icon-alt': 'mdi-chevron-up',
                    text: 'Settings',
                    model: false,
                    prepend_icon:'mdi-chevron-down',
                    hasChildren:true,
                    children: [
                  {icon:'mdi-account-plus-outline', text:'Users',link:'users'},
                            {icon:'mdi-office-building', text:'Company Settings',link:'company_settings'},
                            {icon:'mdi-clock-outline', text:'Localization',link:'localization'},
                            {icon:'mdi-theme-light-dark', text:'Theme Settings',link:'theme_settings'},
                            {icon:'mdi-key', text:'Roles & Permissions',link:'roles_permission'},
                            {icon:'mdi-at', text:'Email Settings',link:'email_settings'},
                            {icon:'mdi-signal-cellular-outline', text:'Performance Settings',link:'performance_settings'},
                            {icon:'mdi-thumb-up-outline', text:'Approval Settings',link:'approval_settings'},
                            {icon:'mdi-pencil-box-outline', text:'Invoice Settings',link:'invoice_settings'},
                            {icon:'mdi-cash', text:'Salary Settings',link:'salary_settings'},
                                {icon:'mdi-earth', text:'Notifications',link:'notification'},
                            {icon:'mdi-lock-outline', text:'Change Password',link:'change_password'},
                                {icon:'mdi-hexagon-multiple-outline', text:'Leave Type',link:'leave_type'},
                            {icon:'mdi-comment-text-outline', text:'ToxBox Settings',link:'toxbox_settings'},
                                {icon:'mdi-rocket', text:'Cron Settings',link:'cron_settings'},
                    ],
                    },
                    {icon:'mdi-bell-outline', text:'Activities',link:'activities'},
                    {icon:'mdi-head-question-outline', text:'Knowledgebase',link:'knowledgebase'},
                    // {
                    // icon: 'mdi-account-group',
                    // 'icon-alt': 'mdi-chevron-up',
                    // text: 'Students',
                    // model: false,
                    // prepend_icon:'mdi-chevron-down',
                    // hasChildren:true,
                    // children: [
                    //     { icon: 'mdi-file-outline', text: 'All Students',link:'students' },
                    //     { icon: 'mdi-file-outline', text: 'Student Assessment',link:'studentassesment' },
                    //     { icon: 'mdi-people', text: 'StudentCourse',link:'studentcourse' }
                    // ],
                    // },
               ],
                
            }
       
        },
        computed: {

            leftButtonIcon() {
                if (this.$route.meta.backRoute) {
                    this.hideBottomNav=false
                    return 'mdi-chevron-left'
                }
                this.hideBottomNav =true
                return 'mdi-menu'
            },
            user(){
                return this.$store.state.auth_module.user;
            }

        },
        methods: {
               desktophandle(){
          this.miniVariant = !this.miniVariant
          this.submenu=!this.submenu
      },
        mobilehandle(){
          this.drawer= !this.drawer 
      },
            goLink(link) {
                if (link === 'logout') {
                     this.$store.dispatch("logoutAction");
                } else {
                   return this.$router.push({name:link})
                }
            },
            goBack(){
                // let noBackRoute = ['search'];
                // const last_visited_route = localStorage.getItem("last_visited_route")
                // console.log("prev",last_visited_route)
                // if(noBackRoute.includes(last_visited_route)){
                //
                //     this.$router.push('/home')
                // }else{
                //     this.$router.go(-1);
                // }
                this.$router.go(-1);
            },
            toggleDrawer(){
                return this.drawer !== this.drawer;
            },
            showMenu(){
                this.toggleDrawer();
            },

        
    
         
        },
        created() {
            // this.fetchAllFirstApiMode();
        },
    }
</script>
<style>
#mobile{
    display:none;
}

@media(max-width:500px){
    #mobile{
        display:block;
    }
    #desktop{
        display:none;
    }
}
    .v-navigation-drawer__content::-webkit-scrollbar {
        width: 0px !important;

  
    }
    .v-navigation-drawer__content::-webkit-scrollbar-thumb{
    background: #ced4da;                                 
    border-radius: 20px ;
        width: 2px !important;

  
    }
    .close_drawer_btn{
        /* top:-90px; */
        border-radius:50%;
        /*border:1px solid #000;*/
        left:5px;
        /*margin-top:10px;*/
    }
    .content-holder {
        
        
    }
    .sidebar-avatar-title-div{
        margin:0 15px;
        padding:0;

    }

    .app_button{
        /*width: 37.69px;*/
        /*height: 36.57px;*/
        margin:0 10px;
        background-color: rgba(0, 117, 242, 0.05);
        color:#0077F3;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        border-radius: 100px;
    }
    .v-content__wrap{
        padding-bottom: 40px;
    }

    .user_mail{
        color:#fff !important;
    }

/*    Theme Style*/
    .v-application .elevation-1 {
        -webkit-box-shadow:  0 12px 14px rgba(0, 0, 0, 0.02) !important;
        box-shadow:  0 12px 14px rgba(0, 0, 0, 0.02)!important;
        /*box-shadow:  0 12px 23px rgba(0, 0, 0, 0.05)!important;*/
    }
    .myappbar{
        padding:0 5px;
        /*box-shadow: 0px 22px 23px rgba(0, 0, 0, 0.05);*/
        /*-webkit-box-shadow:  0 12px 14px rgba(0, 0, 0, 0.02) !important;*/
        /*box-shadow:  0 12px 14px rgba(0, 0, 0, 0.02)!important;*/
    }
    .v-list {
        padding:0 0 !important;
    }
    .list_title{
        font-size: 18px !important;
        line-height: 18px !important;
    }
    .list_subtitle{
        font-size: 12px !important;
    }
    .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
        margin-right: 10px !important;
    }
    .v-list-item {
        padding:0 10px !important;
    }
    .theme--light.v-btn {
         color: #0077F3 !important;
    }
    .mytheme_title_color{
        color:#2B2B2B;
    }
    .mytheme_subtitle_color{
        color: rgba(0, 0, 0, 0.47);
    }
    .mytheme_btn_background{
        /*background-color: rgba(0, 117, 242, 0.05);*/
        background-color: rgba(0, 119, 243, 0.05);
    }
    .mytheme_btn_text_color{
        color:#0077F3;
        /*font-style: bold;*/
    }
    .owner_div{
        position: absolute;
        width: 224px;
        height: 33px;
        /*left: 31px;*/
        margin:5px auto;
        bottom: 0;
        /*top: 764px;*/
    }
    .owner_div .first{
        color: #379392;
        font-size: 10px;
        line-height: 13px;
    }
    .owner_div .second{
        font-size: 10px;
        line-height: 13px;
        color:rgba(0, 0, 0, 0.47);
    }

  
.sub-head {
    /* margin: 20px 0 0px 0px;font-size: 11px;color: rgba(43, 43, 43, 0.67); */
}

</style>