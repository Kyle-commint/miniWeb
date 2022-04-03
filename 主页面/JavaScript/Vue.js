var vm = new Vue({
    el:'#box',
    data:{
      mytext:'',
      isShow:true,
      icon_show:false,
    },
    methods:{
      handleClick(){
        console.log(this.mytext)
      },
      handleShow(){
        this.isShow=!this.isShow
        this.icon_show=!this.icon_show
      }
    },

  })