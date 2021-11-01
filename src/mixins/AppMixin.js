import EventBus from '@/Services/Event';
export const AppMixin={

    methods:{
        showDeleteModal(){
            console.log('show delete modal')
            EventBus.$emit('delete-modal',true);
        }
    }
}