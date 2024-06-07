<template>
  <div>
    <h1>PC端页面</h1>
    <el-button id="btn" v-on:click='ishow()'>Default</el-button>
    <transition
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__zoomOut"
    >
        <div class="main" v-show="show">
          <div class="common-layout">
            <el-container>
              <el-header>Header</el-header>
              <el-main>Main</el-main>
            </el-container>
          </div>
        </div>
    </transition>
  </div>

</template>

<style scoped>
.main {
  margin: auto;
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../../image/PCBG2.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
<script>
export default {
  data() {
    return {
      name: 'World',
      show:false
    };
  },
  methods:{
    shoudiv(){
      const div =document.getElementById("main");
      console.log(div)
      console.log(div.style)
      if(div.style.display=="none"){
        console.log("***********")
        div.style.display="";
        this.show=true;
      };
    },
    ishow(){
      if (this.show==false){
        this.show=true;
      } 
      return this.show
    }
  }
};
</script>
