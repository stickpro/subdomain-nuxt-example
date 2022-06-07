export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        const subDomain = window.location.host.split('.')[0]
        const domain = 'localhost'
        const pageTolLoad = 'blog'
        if(subDomain !== domain && to.name !== pageTolLoad) {
            next({name: pageTolLoad, params: {}})
        } else {
            next()
        }
    })
 }