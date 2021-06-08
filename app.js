const app = Vue.createApp({
    data(){
        return {
            url:'http://www.thenetninja.co.uk',
            showBooks:false,
            
            books:[
                {title:'name of the wind',author:'patric rothfus',img:"assets/1.jpg",isFav:true},
                {title:'the way of the kings',author:'brandon sanderson',img:"assets/2.jpg",isFav:false},
                {title:'the final empire',author:'okorie leonard',img:"assets/3.jpg",isFav:true}
            ]
           
        }
    },
    methods:{
       
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        },
        toggleFav(book){
            console.log('change class');
            book.isFav=!book.isFav
        }
       
    }
})



app.mount('#app')