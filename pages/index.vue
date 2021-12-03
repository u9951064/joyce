<script>
export default {
  async asyncData({redirect}) {
    return redirect(301, {name: 'works'});
  }
}
</script>
