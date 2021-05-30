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