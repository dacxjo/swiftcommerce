export const actions = {
  async nuxtServerInit ({ dispatch, commit, state }) {
    const siteInfo = await require.context('~/content/site/', false, /\.json$/)
    const siteSettings = await dispatch('site/getSettings', siteInfo)
    await commit('site/setSiteSettings', siteSettings[0])
    await commit(
      'site/setIsCatalog',
      process.env.CATALOG_MODE ? process.env.CATALOG_MODE === 'true' : false
    )
    await commit('site/setWaNumber', process.env.WHATSAPP_NUMBER)
    await commit('site/setCurrentDomain', process.env.CURRENT_DOMAIN)
  }
}
