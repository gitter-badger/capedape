<cpt>
    <h3>{title}</h3>
    <ul>
        <li each={cpt_collection}>{name}</li>
    </ul>

    <p class={ foo: true, bar: 0, baz: new Date(),zorro:"a value"}></p>
    <script>
    this.title = "Custom Post Type"
    this.cpt_collection = [
        {name: 'Eric'},
        {name: 'John'},
        {name: 'Tom'}
    ]
    this.mixin(OptsMixin)
    </script>

</cpt>



