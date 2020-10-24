
export const state = () => ({
    siteSettings: {},
})

export const mutations = {
    setSiteSettings(state, settings) {
        state.siteSettings = settings
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
