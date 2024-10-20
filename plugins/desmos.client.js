export default defineNuxtPlugin((nuxtApp) => {
      return {
            provide: {
                  desmos: {
                        load: () => {
                              return new Promise((resolve) => {
                                    if (typeof window.Desmos !== 'undefined') {
                                          resolve(window.Desmos);
                                    } else {
                                          const script = document.createElement('script');
                                          script.src = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
                                          script.async = true;
                                          script.onload = () => resolve(window.Desmos);
                                          document.head.appendChild(script);
                                    }
                              });
                        }
                  }
            }
      };
});
