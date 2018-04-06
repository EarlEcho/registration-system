import axios from '../../config/http'

let functions = {

    getAjax(url, callback) {
        axios({
            method: 'get',
            url: url,
        }).then((response) => {
            callback(response.data.Body);
        }).catch((response) => {
        });
    },

    postAjax(url, data, callback) {
        axios({
            method: 'post',
            url: url,
            data: data
        }).then((response) => {
            callback(response.data.Body);
        }).catch((response) => {
        });
    },
    //标准时间格式转年月日
    filterTime(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
    },

    //在url后面增加参数
    appendUrlParams(url, params) {
        if (url.indexOf('?') > 0) {
            return url + '&' + params;
        } else {
            return url + '?' + params;
        }
    },
    //循环
    foreach(arr, func) {
        for (var i in arr) {
            if (func(i, arr[i]) === false) {
                return false;
            }
        }
        return true;
    },
    //克隆
    clone(obj) {
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            var copy = [];
            for (var i = 0; i < obj.length; ++i) {
                copy[i] = dz.utils.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = dz.utils.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    },

};

export default functions
