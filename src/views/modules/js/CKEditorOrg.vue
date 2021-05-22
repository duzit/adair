<template>
  <div>
    <org-ckeditor :value="str"></org-ckeditor>
    <org-ckeditor value="222"></org-ckeditor> 
    <org-ckeditor :data.sync="ckData"></org-ckeditor> 
  </div>
</template>

<script>
  import orgCkeditor from '@/components/ckeditor';
  export default {
    name: 'CKEditorOrg',
    components: {
      orgCkeditor
    },
    watch: {
      ckData(val) {
        console.log(val, 'watch');
      }
    },
    data() {
      return {
        ckData: '',
        str: '<p>111<img alt="" src="http://dpic.tiankong.com/hu/1m/QJ6407174313.jpg" style="height:215px; width:200px" /></p>'
      }
    },
  }
</script>