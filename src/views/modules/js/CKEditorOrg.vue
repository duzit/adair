<template>
  <div>
    <org-ckeditor :value="str" />
    <org-ckeditor value="222" />
    <org-ckeditor :data.sync="ckData" />
  </div>
</template>

<script>
  import orgCkeditor from '@/components/ckeditor';

  export default {
    name: 'CKEditorOrg',
    components: {
      orgCkeditor,
    },
    data() {
      return {
        ckData: '',
        str: '<p>111<img alt="" src="http://dpic.tiankong.com/hu/1m/QJ6407174313.jpg" style="height:215px; width:200px" /></p>',
      };
    },
    watch: {
      ckData(val) {
        console.log(val, 'watch');
      },
    },
  };
</script>
