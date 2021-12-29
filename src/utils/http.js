import axios from 'axios';

axios.defaults.timeout = 10000;

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
        params: params
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          if(url.includes('sense/super-table/demo')){
            resolve({
              code: 0,
              msg: "Success",
              data: {
                total: 17,
                list: [
                  {
                    date: "2021-01-01",
                    name: "王小虎王小虎王小虎",
                    address: "1上海市普陀区金沙江路 1518 弄",
                    note: '111'
                  },
                  {
                    date: "2021-01-01",
                    name: "王小虎",
                    address: "2上海市普陀区金沙江路 1518 弄",
                  },
                  {
                    date: "2021-01-03",
                    name: "王小",
                    address: "3上海市普陀区金沙江路 1518 弄",
                  },
                  {
                    date: "2021-01-04",
                    name: "王王王",
                    address: "4上海市普陀区金沙江路 1518 弄",
                  },
                ]
              }
            })
          }
          reject(err);
          
        });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
    });
}
