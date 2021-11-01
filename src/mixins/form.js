
export const formMixin ={
   
    methods: {
        resetForm (form) {
            let msg= form+'_errorMessages'
            let err = form+'_hasErrors'
             err = false
             msg =[]
   
           Object.keys(form).forEach(f => {
             this.$refs[f].reset()
           })
         },
         validateForm(form){
          //  console.log(form);
            let err = form+'_hasErrors'
            err = false
            Object.keys(form).forEach(f => {
              if (!form[f]) err = true
              this.$refs[f].validate(true)
            })
            console.log(err)
            if(err){
              return false
            }else{
              return true
            }
          },
        removeCommaFromNumber(v) {
            return parseInt(v.replace(/,/g, ""));
        },
        remove_white_pace(str){
            return str.replace(/\s/g, '');
        },
        currencyFormat(v) {
            return Number(v).toLocaleString("en");
        },
    }
 }