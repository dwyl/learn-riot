<list>
  <h1>{name}</h1>
  <p>Items:</p>
  <ul>
    <list-iterator list={list}></list-iterator>
  </ul>
  <script>
    this.name = opts.name;

    this.list = {
      task1: 'Buy Seasonal Fruits + Cruciferous Veg',
      task2: 'Make Green Smoothie',
      task3: 'Drink Smoothie'
    }
  </script>
</list>
