import { combineimg, fadeFlower, interior, plant } from "../constant";

export const todoData = {
  todo: [
    {
      head: "Low",
      order: "1",
      id: Math.floor(Math.random() * 500),
      title: "Brainstorming",
      desc: "Brainstorming brings team members' diverse experience into play.",
      comments: "12 comments",
      file: "0 files",
      status: "todo",
    },
    {
      title: "Research",
      head: "High",
      order: "2",
      id: Math.floor(Math.random() * 500),
      desc: "User research helps you to create an optimal product for users.",
      comments: "10 comments",
      file: "3 files",
      status: "todo",
    },
  ],
  onProgress: [
    {
      title: "Onboarding Illustrations ",
      head: "Low",
      order: "1",
      id: Math.floor(Math.random() * 500),
      img: fadeFlower,
      comments: "9 comments",
      file: "10 files",
      status: "doing",

    },
    {
      title: "Moodboard",
      head: "Low",
      order: "2",
      id: Math.floor(Math.random() * 500),
      desc: "User research helps you to create an optimal product for users.",
      comments: "14 comments",
      file: "15 files",
      img1: plant,
      img2: interior,
      status: "doing",
    },
  ],
  done: [
    {
      title: "Mobile App Design",
      head: "completed",
      order: "1",
      id: Math.floor(Math.random() * 500),
      img4: combineimg,
      comments: "12 comments",
      file: "15 files",
      status: "done",
      background: "#E6F3EB",
      color: "#68B266",
      

    },
    {
      
      title: "Design System",
      head: "Completed",
      order: "2",
      id: Math.floor(Math.random() * 500),
      comments: "12 comments",
      file: "15 files",
      desc: "Brainstorming brings team members' diverse experience into play.",
      status: "done",
      background: "#E6F3EB",
      color: "#68B266",

    },
  ],
};
