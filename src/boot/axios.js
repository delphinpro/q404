import Axios from 'axios';

export default ({ app, Vue, ssrContext, store }) => {

  let axiosInstance = Axios.create({
    baseURL         : '/api',
    timeout         : 0,
    responseType    : 'json',
    responseEncoding: 'utf8',
    headers         : {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept'          : 'application/json',
    },

    // Reject only if the status code is greater than or equal to specify here
    validateStatus: status => status < 500,
  });

  axiosInstance.interceptors.response.use(response => {
      if (response.status >= 400) {
        if (ssrContext) {
          return Promise.reject({ code: response.status });
        } else {
          store.commit('showErrorPage', response.status);
        }
      }

      return response.data;
    },

    //   /*==
    //    *== Response FAILED
    //    *== ======================================= ==*/
    //   error => {
    //     let httpStatusCode = error.response?.status || '';
    //     let httpStatusText = error.response?.statusText || '';
    //     let title = error.response?.data?.message || '';
    //     let message = '';
    //
    //     if (!httpStatusCode && httpStatusText) {
    //       httpStatusCode = error.code;
    //       title = error.message;
    //     }
    //
    //     if (process.env.DEV) {
    //       console.log(`%c<Interceptor> Response Error ${httpStatusCode} with message: ${title}`, CONSOLE_WARN);
    //       message = `HTTP: ${httpStatusCode} ${httpStatusText}`
    //         + `<br>Request: <code>[${error.config.method.toUpperCase()}] ${error.config.url}</code>`;
    //     }
    //
    //     return Promise.reject(error);
    //   },
  );

  Vue.axios = axiosInstance;
}
