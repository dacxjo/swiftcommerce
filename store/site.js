export const state = () => ({
  siteSettings: {},
  adminLoggedIn: false,
  isCatalog: false,
  waNumber: null,
  favoritesProducts: [],
  currentDomain: ''
})

export const mutations = {
  setSiteSettings (state, settings) {
    state.siteSettings = settings
  },
  setAdminLoggedIn (state, isLoggedIn) {
    state.adminLoggedIn = isLoggedIn
  },
  setIsCatalog (state, isCatalog) {
    state.isCatalog = isCatalog
  },
  setWaNumber (state, waNumber) {
    state.waNumber = waNumber
  },
  setCurrentDomain (state, domain) {
    state.currentDomain = domain
  },
  addFavorite (state, newFavorite) {
    state.favoritesProducts.push(newFavorite)
  },
  removeFromFavorites (state, item) {
    state.favoritesProducts = state.favoritesProducts.filter(
      i => i.data.id !== item.data.id
    )
  }
}

export const getters = {
  getSiteTitle (state) {
    return state.siteSettings.site_title
      ? state.siteSettings.site_title
      : 'My site'
  },
  getHeroTitle (state) {
    return state.siteSettings.hero_title
      ? state.siteSettings.hero_title
      : 'Default title'
  },
  getHeroDesc (state) {
    return state.siteSettings.hero_desc
      ? state.siteSettings.hero_desc
      : 'Default hero description'
  },
  getHeroImg (state) {
    return state.siteSettings.hero_image ? state.siteSettings.hero_image : ''
  },
  getSiteLogo (state) {
    return state.siteSettings.logo || null
  },
  getLogoIcon (state) {
    return state.siteSettings.logo_icon || null
  },
  adminLoggedIn (state) {
    return state.adminLoggedIn
  },
  isCatalog (state) {
    return state.isCatalog
  },
  waNumber (state) {
    return state.waNumber
  },
  favoritesProducts (state) {
    return state.favoritesProducts
  },
  favoritesCount (state) {
    return state.favoritesProducts.length
  },
  currentDomain (state) {
    return state.currentDomain
  }
}

export const actions = {
  getSettings (context, files) {
    return files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  }
}
