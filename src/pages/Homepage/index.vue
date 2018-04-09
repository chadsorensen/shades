<template>
  <div class="hello content-container">
    <md-empty-state
      :md-icon="logo"
      md-label="Get Started"
      md-description="Check out the docs below or just start coding!">
    </md-empty-state>

    <div class="list-container">    
      <md-list>
        <md-list-item v-for="(item, index) in items" :href="item.link" :key="index" target="_blank">
          <md-icon v-if="item.icon">{{ item.icon }}</md-icon>
          <span class="md-list-item-text">{{ item.label }}</span>
        </md-list-item>
      </md-list>
      <md-list>
        <md-list-item v-for="(item, index) in vueItems" :href="item.link" :key="index" target="_blank">
          <md-icon v-if="item.svg" :md-src="item.svg"></md-icon>
          <md-icon v-if="item.icon">{{ item.icon }}</md-icon>
          <span class="md-list-item-text">{{ item.label }}</span>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
const vue = require('../../assets/icons/vue.svg');
const awesome = require('../../assets/icons/awesome.svg');
const logo = require('../../assets/icons/logo.svg');
export default {
  name: 'Homepage',
  data () {
    return {
      logo,
      items: [
        {
          label: "Core Docs",
          link: "https://vuejs.org",
          icon: "move_to_inbox"
        },
        {
          label: "Forum",
          link: "https://forum.vuejs.org",
          icon: "forum"
        },
        {
          label: "Community Chat",
          link: "https://chat.vuejs.org",
          icon: "chat_bubble_outline"
        },
        {
          label: "Twitter",
          link: "https://twitter.com/vuejs",
          icon: "move_to_inbox"
        },
        {
          label: "Docs for This Template",
          link: "http://vuejs-templates.github.io/webpack/",
          icon: "insert_drive_file"
        }
      ],
      vueItems: [
        {
          label: "vuex",
          link: "http://vuex.vuejs.org/",
          svg: vue
        },
        {
          label: "vue-router",
          link: "http://router.vuejs.org/",
          icon: "router"
        },
        {
          label: "vue-loader",
          link: "http://vue-loader.vuejs.org/",
          svg: vue
        },
        {
          label: "awesome-vue",
          link: "https://github.com/vuejs/awesome-vue",
          svg: awesome
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-empty-state {
    max-width: 520px;
  }
  .list-container {
    display: flex;
    justify-content: center;
  }
  .md-list {
    display: inline-block;
    width: 320px;
    max-width: 100%;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    &:first-child {
      margin-right: 30px;
    }
  }
</style>