
    
<script>
     //the array starts at 0
    var filters = ['grayscale', 'sepia', 'saturate', 'hue', 'invert', 'no-filter'];
    function changeFilter(){
        var index = 0;
        index=index++ % filters.length;
        var effect=filters[index];
        document.getElementById('filterName').innerHTML=effect;
        }
</script>