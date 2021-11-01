export const sheetMixin = {
    inject:["Bus"],
    methods: {
        openSheet() {
            this.Bus.$emit("open-bottom-sheet", true);
        }
    }
    
}