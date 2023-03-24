<template>
  <div class="right">
    <img src="@/assets/kko.png" height="100" />
  </div>
  <div id="content">
    <div id="content_left">
      <ol>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/HelloWorld">Hello World</router-link></li>
        <li><router-link to="/avadv/ttata123">없는 페이지</router-link></li>
      </ol>
    </div>
    <div id="content_right">
      <h1 class="text-3xl bold underline" v-if="isHome">
        {{ homeDescription }}
      </h1>
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.right {
  display: flex;
  justify-content: flex-end;
  padding: 0 !important;
  width: calc(100vw - 200px);
}

#content {
  display: flex;
}

#content_left {
  background: #202020;
  width: 15%;
}
#content_left a {
  color: pink;
}
#content_left a:hover {
  color: yellowgreen;
}
#content_right {
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const homeDescription = 'Hello This is Home!!'

const isHome = ref(true)

const route = useRoute()
watch(
  () => route.path,
  () => {
    if (route.path === '/') {
      isHome.value = true
    } else {
      isHome.value = false
    }
  },
  {
    immediate: true,
  }
)
</script>
