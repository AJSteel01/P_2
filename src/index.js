const url = 'http://localhost:3000/form';

const app2 = new Vue({
  el: '#form-vue',
  data() {
    return {
      name: '',
      skills: '',
      email: '',
    };
  },
  methods: {
    async onSubmit() {
      const returnObj = {
        name: this.name,
        skills: this.skills,
        email: this.email,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(returnObj),
      }).then(res => res.json());

      console.log(response);

      this.name = '';
      this.skills = '';
      this.email = '';
    },
  },
});
