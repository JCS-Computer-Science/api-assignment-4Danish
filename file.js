var vm = new Vue({
    el: '#app',
    data: {
        catfact: '',
        submitted: false
    },
    created: function () {
        this.fetchFacts();
    },
    methods: {
        fetchFacts: function () {
            var api_key = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"
            axios.get(api_key)
                .then(function (res) {
                    console.clear();
                    console.log(res.data.text);
                    var result = res.data.text;
                    vm.catfact = result;
                });
        },
        process: function() {
            this.submitted = true;
        }
    }
});