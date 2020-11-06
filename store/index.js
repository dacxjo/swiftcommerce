export const actions = {
  async nuxtServerInit ({ dispatch, commit, state }) {
    const siteInfo = await require.context('~/content/site/', false, /\.json$/)
    const siteSettings = await dispatch('site/getSettings', siteInfo)
    await commit('site/setSiteSettings', siteSettings[0])
  }
}
