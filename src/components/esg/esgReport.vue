<template>
  <div class="esgReport">
    <img class="headimg" src="/assets/img/ESG-img.jpg" alt="" />
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/esg' }">ESG报告分析</el-breadcrumb-item>
      <el-breadcrumb-item>查看ESG报告</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="wrapper">
    <!-- <ion-button @click="takePhoto()" fill="outline"> ESG</ion-button> -->

    <vue-pdf-app
      :config="config"
      theme="dark"
      style="height: 100vh"
      pdf="public/11.pdf"
    ></vue-pdf-app>
  </div>
</template>

<script>
import VuePdfApp from 'vue3-pdf-app'
import { PdfData, VerbosityLevel } from 'pdfdataextract'
export default {
  name: 'App',
  components: { VuePdfApp },
  data() {
    return {
      idConfig: { zoomIn: 'zoomInId', zoomOut: 'zoomOutId' },
      config: {
        toolbar: {
          toolbarViewerLeft: {
            previous: true
          },
          toolbarViewerRight: {
            print: false,
            download: false,
            open: false
          }
        }
      }
    }
  },
  methods: {
    async takePhoto() {
      PdfData.extract('public/11.pdf', {
        // password: '123456', // password of the pdf file
        pages: 1, // how many pages should be read at most
        sort: true, // sort the text by text coordinates
        verbosity: VerbosityLevel.ERRORS // set the verbosity level for parsing
      }).then((data) => {
        data.pages // the number of pages
        data.text // an array of text pages
        data.fingerprint // fingerprint of the pdf document
        data.outline // outline data of the pdf document
        data.info // information of the pdf document, such as Author
        data.metadata // metadata of the pdf document
        data.permissions // permissions for the document
      })
    }
  }

  // data() {
  //   return {
  //     info: [],
  //   };
  // },
  // methods: {
  //   async openHandler(pdfApp) {
  //     this.info = [];
  //     const info = await pdfApp.pdfDocument
  //       .getMetadata()
  //       .catch(console.error.bind(console));

  //     if (!info) return;
  //     const props = Object.keys(info.info);

  //     props.forEach((prop) => {
  //       const obj = {
  //         name: prop,
  //         value: info.info[prop]
  //       };
  //       this.info.push(obj);

  //     });
  //   },

  // }
}
</script>

<style lang="scss" scoped>
.headimg {
  width: 100%;
  height: auto;
}
.wrapper {
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
