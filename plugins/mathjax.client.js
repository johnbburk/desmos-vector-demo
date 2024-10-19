export default defineNuxtPlugin((nuxtApp) => {
      return new Promise((resolve) => {
            if (process.client) {
                  window.MathJax = {
                        tex: {
                              inlineMath: [['$', '$'], ['\\(', '\\)']]
                        },
                        svg: {
                              fontCache: 'global'
                        },
                        options: {
                              renderActions: {
                                    addMenu: []
                              }
                        },
                        startup: {
                              pageReady: () => {
                                    resolve();
                              }
                        }
                  };

                  const script = document.createElement('script')
                  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js'
                  script.async = true
                  document.head.appendChild(script)
            } else {
                  resolve()
            }
      }).then(() => {
            return {
                  provide: {
                        mathjax: {
                              render: (element) => {
                                    if (process.client && window.MathJax) {
                                          return window.MathJax.typesetPromise([element])
                                    }
                              }
                        }
                  }
            }
      })
})
