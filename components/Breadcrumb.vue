<template>
  <nav>
    <ul vocab="http://schema.org/" typeof="BreadcrumbList" class="flex">
      <li property="itemListElement" typeof="ListItem">
        <n-link property="item" typeof="WebPage" to="/">
          <span property="name">Inicio</span>
        </n-link>
        <span>/</span>
        <meta property="position" content="1">
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <n-link property="item" typeof="WebPage" :to="crumb.path">
          <span property="name">{{
            $route.fullPath === crumb.path && title !== null
              ? title
              : crumb.title
          }}</span>
        </n-link>
        <span>/</span>
        <meta property="position" :content="index + 2">
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    crumbs () {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: param.replace(/-/g, ' '),
            ...match
          })
        }
      })
      return crumbs
    }
  }
}
</script>
