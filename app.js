const toDo = [
    "Grocery shopping",
    "Scoop cat litter", 
    "Workout"
]

const app = new Vue({
    el: '#app',
    data: { 
      items: toDo,
      item: ''
    },
    mounted: function () {
        const items = localStorage.getItem('items')
        if (items) {
          this.items = JSON.parse(items)
        }
    },
    methods: {
        // add new to do list by clicking add button or hit enter
        addItem: function (item) {
            // capitalize the first letter input
            this.items.push(this.item.charAt(0).toUpperCase() + this.item.slice(1))
            this.item = ''
        },
        // toggle class 'completed' on and off by clicking li tag and surronding area
        completion: function (e) {
            const comp = e.target.closest('.work')
            if(comp) {
                comp.classList.toggle('completed')
            }
        },
        // delete the clicked item from items
        trash: function (index) {
            this.items.splice(index, 1);
        }
    },
    watch: {
        items: function () {
            localStorage.setItem('items', JSON.stringify(this.items))
        }
    }
})
