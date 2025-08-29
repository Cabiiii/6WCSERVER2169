<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>PROFILE</template>

  <div>
    <h3>👤 Profile</h3>
    <p>Name: Cabe, Justin D.</p>
    <p>Objective: To apply my skills in IT and marketing to contribute to innovative projects.</p>
    <p>Course: BS Information Technology</p>
    <p>Specialization: Web Development & Digital Marketing</p>
  </div>

    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template> 
    <template #heading>Education</template>

  <div>
    <h3>🎓 Education</h3>
    <ul class="list-group">
      <li class="list-group-item">Elementary: Porac Elementary School (2010–2016)</li>
      <li class="list-group-item">JHS/SHS: Saint Catherine Academy (2017–2022)</li>
      <li class="list-group-item">College: Holy Angel University (2022–Present)</li>
    </ul>
  </div>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Skills</template>

  <div>
    <h3>🛠️ Skills</h3>
    <ul class="list-group">
      <li class="list-group-item">Trainings: Google Digital Garage, Facebook Blueprint</li>
      <li class="list-group-item">Seminars: UX/UI Design, Agile Development</li>
      <li class="list-group-item">Technologies: HTML, CSS, JavaScript, Bootstrap, Vue.js</li>
      <li class="list-group-item">Programming Languages: Python, Java, PHP</li>
    </ul>
  </div>

  </WelcomeItem>

</template>
