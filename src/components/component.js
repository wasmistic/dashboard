import Vue from 'vue';
//layout componenent
import Frontend from '@/views/layouts/Frontend';
import Backend from '@/views/layouts/Backend';
import Offline from '@/views/layouts/Offline';
import AfterLogin from '@/views/layouts/AfterLogin';
import Avatar from '../components/general/Avatar.vue'


// const MySkeleton = () => import(/*webpackChunkName: "general"*/'./general/MySkeleton')
import MySkeleton from "./general/MySkeleton";
const AppLogo = () => import( /*webpackChuckName:"general" */ './general/AppLogo.vue');
const PageTitle = () => import( /*webpackChuckName:"general" */ './general/PageTitle.vue');
const Success = () => import(/*webpackChunkName:"general" */'./general/Success');
const SideBarUserDetailCard = () => import( /*webpackChuckName:"general" */ './general/SideBarUserDetailCard.vue');
const BaseInput = ()=>import (/*webpackChuckName:"form" */'./form/BaseInput.vue');  

const Modal = ()=>import (/*webpackChuckName:"form" */'./general/Modal.vue');

const DeleteModal = ()=>import (/*webpackChuckName:"form" */'./general/DeleteModal.vue');

const NavList = () => import( /*webpackChuckName:"navigation" */ './navigation/NavList.vue');
const Breadcrumb = () => import( /*webpackChuckName:"navigation" */ './navigation/Breadcrumb.vue');






Vue.component('frontend-layout',Frontend);
Vue.component('backend-layout', Backend);
Vue.component('offline-layout', Offline);
Vue.component('AfterLogin-layout', AfterLogin);
 Vue.component('avatar', Avatar);
 //navifgation
Vue.component('nav-list', NavList);
Vue.component('bread-crumb', Breadcrumb);

Vue.component('success', Success);
Vue.component('skeleton-loader', MySkeleton);
Vue.component('app-logo', AppLogo);
Vue.component('page-title', PageTitle);
Vue.component('sidebar-usercard', SideBarUserDetailCard);
Vue.component('delete-modal',DeleteModal)
Vue.component('modal',Modal)

//form
Vue.component('base-input',BaseInput);


