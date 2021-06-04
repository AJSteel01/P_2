const url = 'http://localhost:3000';

const app = new Vue({
  el: '#app',
  data: {
    cards: [{
      title: "something",
      VideoPlaybackQuality: "work_4.mp4"
    },
    {
      title: "Try",
      VideoPlaybackQuality: "work_5.mp4"
    },
    {
      title: "Next",
      img: "work_3.jpeg"
    },
    {
      title: "Work 1",
      img: "finance.jpeg"
    },
    {
      title: "Work 2",
      img: "work_1.jpeg",
    },
    {
      title: "Work 3",
      img: "work_2.jpeg"
    }
  ]},

  methods: {
    videoMethod: (card) => {
      if (card.VideoPlaybackQuality) return true;

      return false;
    }
  }
})


const app2 = new Vue({
  el: '#form-vue',
  data: {
    name: '',
    skills: '',
    email: ''
  },
  methods: {
    onSubmit: async () => {
      const postObj = {
        name: this.name,
        skills: this.skills,
        email: this.email
        
      }

      const response = await fetch(url + '/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObj)
      });

      
    }
  }
})

