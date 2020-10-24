export const actions = {
    async nuxtServerInit({dispatch,commit,state}) {
        let siteInfo = await require.context('~/content/site/', false, /\.json$/)
        let siteSettings = await dispatch('site/getSettings',siteInfo);
        await commit('site/setSiteSettings', siteSettings[0] )
    }
}
