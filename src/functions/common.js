import axios from '../../config/http'

let functions = {

    getAjax(url, callback) {
        axios({
            method: 'get',
            url: url,
        }).then((response) => {
            callback(response.data);
        }).catch((response) => {
        });
    },

    postAjax(url, data, callback) {
        axios({
            method: 'post',
            url: url,
            data: data
        }).then((response) => {
            callback(response.data);
        }).catch((response) => {
        });
    },
    //时间戳转 xxxx-xx-xx
    timestampToshortText(value) {
        if (value == '' || value == undefined) {
            return
        } else {
            var padding0 = function (m) {
                return m < 10 ? '0' + m : m
            };
            var time = new Date(value);
            var y = time.getFullYear();
            var m = time.getMonth() + 1;
            var d = time.getDate();
            return y + '-' + padding0(m) + '-' + padding0(d)
        }
    },
//时间戳转 xxxx-xx-xx xx:xx(分)
    timestampToMText(value) {
        if (value == '' || value == undefined) {
            return
        } else {
            var padding0 = function (m) {
                return m < 10 ? '0' + m : m
            };

            var time = new Date(value * 1000);
            var y = time.getFullYear();
            var m = time.getMonth() + 1;
            var d = time.getDate();
            var h = time.getHours();
            var mm = time.getMinutes();
            return y + '-' + padding0(m) + '-' + padding0(d) + ' ' + padding0(h) + ':' + padding0(mm);
        }
    },

    //时间戳转 xxxx-xx-xx xx:xx(秒)
    timestampToLongText(value) {
        if (value == '' || value == undefined) {
            return
        } else {
            var padding0 = function (m) {
                return m < 10 ? '0' + m : m
            };

            var time = new Date(value * 1000);
            var y = time.getFullYear();
            var m = time.getMonth() + 1;
            var d = time.getDate();
            var h = time.getHours();
            var mm = time.getMinutes();
            var s = time.getSeconds();
            return y + '-' + padding0(m) + '-' + padding0(d) + ' ' + padding0(h) + ':' + padding0(mm) + ':' + padding0(s);
        }
    },

};

export default functions
