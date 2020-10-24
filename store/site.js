
export const state = () => ({
    siteSettings: {},
})

export const mutations = {
    setSiteSettings(state, settings) {
        state.siteSettings = settings
    },
}

export const getters = {
    getHeroTitle(state) {
       return state.siteSettings.hero_title ? state.siteSettings.hero_title : "Default title"
    },
    getHeroDesc(state) {
        return state.siteSettings.hero_desc ? state.siteSettings.hero_desc : "Default hero description"
    },
    getHeroImg(state) {
        return state.siteSettings.hero_image ? state.siteSettings.hero_image : ""
    },
}

export const actions = {
    getSettings(context, files) {
        return files.keys().map((key) => {
            let res = files(key)
            res.slug = key.slice(2, -5)
            return res
        })
    }
}
