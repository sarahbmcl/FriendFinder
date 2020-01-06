// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================


var friends = [
    {
      name: "Rachel Green",
      photo: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fhellogiggles.com%2Fwp-content%2Fuploads%2F2016%2F01%2F07%2FFriends-Rachel-Green-Kitchen.jpg&w=400&c=sc&poi=face&q=85",
      scores: [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2", 
        "5",
        "4",
        "1"
      ]
    },
    {
      name: "Joey Tribbiani",
      photo: "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE1XFxcLzEwXFxcLzI5MTExMzEyXFxcL0pvZXkuanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_aWQ9MjY0YTJkYmUzNzBmMmM2NzVmY2RcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiMDY2ODU4NGY3MDNjZjg1MWJiOWU1YTgxMDJlNWE4ZTUxMzBlNGI1MiJ9/joey.jpg",
      scores: [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
      ]
    },
    {
      name: "Phoebe Buffay",
      photo: "https://imgix.bustle.com/rehost/2016/9/13/8050f7a3-6653-4162-9a64-189ecabf5215.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
      scores: [
        "5",
        "2",
        "2",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
      ]
    },
    {
      name: "Monica Geller",
      photo: "https://vignette.wikia.nocookie.net/friends/images/c/c4/Monica_overalls.jpg/revision/latest?cb=20190210055646",
      scores: [
        "3",
        "3",
        "4",
        "2",
        "2",
        "1",
        "3",
        "2",
        "2",
        "3"
      ]
    },
    {
      name: "Chandler Bing",
      photo: "https://i.pinimg.com/originals/5b/8e/59/5b8e592514209b33db6259858d8248a0.jpg",
      scores: [
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "4"
      ]
    },
    {
      name: "Ross Geller",
      photo: "https://i.redd.it/6fg26yh8ppt21.png",
      scores: [
        "4",
        "4",
        "2",
        "3",
        "2",
        "2",
        "3",
        "2",
        "4",
        "5"
      ]
    },
    {
        name: "Will Smith",
        photo: "https://cdn.cnn.com/cnnnext/dam/assets/170804134551-fresh-prince-of-bel-air-exlarge-169.jpg",
        scores: [
          "5",
          "5",
          "5",
          "5",
          "5",
          "2",
          "5",
          "3",
          "1",
          "3"
        ]
      },
      {
        name: "Carlton Banks",
        photo: "https://vignette.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg/revision/latest/scale-to-width-down/300?cb=20180626133412",
        scores: [
          "3",
          "3",
          "4",
          "5",
          "5",
          "2",
          "1",
          "1",
          "1",
          "1"
        ]
      },
      {
        name: "Hilary Banks",
        photo: "https://imgix.bustle.com/rehost/2016/9/13/9e2a4982-bb3a-4d1a-abce-7729bd0349bd.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
        scores: [
          "4",
          "4",
          "4",
          "2",
          "5",
          "2",
          "5",
          "1",
          "1",
          "3"
        ]
      },
      {
        name: "Ashley Banks",
        photo: "https://imgix.bustle.com/uploads/image/2017/12/20/c48553a6-c576-4cc7-a3d1-1cc55c182752-4b27dd26684c72265e76502863e2cb46-tatyana-ali-perfect-eyelashes.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
        scores: [
          "3",
          "3",
          "3",
          "3",
          "4",
          "3",
          "4",
          "3",
          "2",
          "4"
        ]
      }
  ];
  
  // Here we export the array. This makes it accessible to other files using require.
  module.exports = friends;