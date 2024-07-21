<template>
    <div class="card">
      <div class="img">
        <img src="https://github.com/brenoob.png" alt="my avatar" />
      </div>
      <span>About Me</span>
      <p class="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia provident fuga commodi
        consectetur mollitia quibusdam ad nemo, reiciendis voluptate nostrum vitae porro at veniam in
        vel cumque culpa fugit omnis!
      </p>
      <button>Click</button>
    </div>
  
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped lang="css">
  .card {
    width: 17em;
    height: 22.5em;
    margin-bottom: 100px;
    /* background: #171717; */
    transition: 1s ease-in-out;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    display: flex;
    flex-direction: column;
  }
  
  .card span {
    font-weight: bold;
    color: white;
    text-align: center;
    display: block;
    font-size: 1em;
  }
  
  .card .info {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    font-size: 0.72em;
    margin: 1em;
  }
  
  img {
    width: 6.8em;
    height: 6.8em;
    background: white;
    border-radius: 15px;
    margin: auto;
  }
  
  .card button {
    padding: 0.8em 1.7em;
    display: block;
    margin: auto;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    background: #ffffff;
    color: rgb(5, 2, 2);
    transition: 0.4s ease-in-out;
  }
  
  .card button:hover {
    background: rgb(223, 222, 222);
    color: white;
    cursor: pointer;
  }
  
  </style>
  