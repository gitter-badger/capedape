<cpt>
    <h3>{title}</h3>
    <ul>
        <li each={cpt_collection}>{name}</li>
    </ul>
    <script>
    this.title = "Custom Post Type"
    this.cpt_collection = [
        {name: 'Eric'},
        {name: 'John'},
        {name: 'Tom'}
    ]
    </script>

</cpt>



