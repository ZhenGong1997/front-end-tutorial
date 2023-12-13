<template>

  <a-steps :current="0">
    <a-step>
      <!-- <span slot="title">Finished</span> -->
      <a-icon slot="icon" type="user"></a-icon>
      <template slot="title">
        Finished
      </template>
      <span slot="description">This is a description.</span>
    </a-step>
    <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
    <a-step title="Finish" description="You are settled"></a-step>
  </a-steps>

  </template>
  
  <script>
  export default {};
  </script>
  