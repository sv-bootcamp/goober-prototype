import $ from 'jquery';

let serverURL = 'http://localhost:3000';

class HttpUtil {


  getData (url, params, callback) {
    const reqUrl = serverURL + url;
    $.ajax({
      url   : reqUrl,
      type  : 'GET',
      data  : params,
      error:  (jqXHR) => {
        callback(jqXHR.responseText || "Error");
      },
      success: (data) => {
        callback(null, data);
      }
    });
  }

  postData (url, params, callback) {
    const reqUrl = serverURL + url;
    $.ajax({
      url   : reqUrl,
      type: 'POST',
      contentType: 'application/json;charset=UTF-8',
      dataType: 'json',
      data: JSON.stringify(params),
      error:  (jqXHR) => {
        callback(jqXHR.responseText || "Error");
      },
      success: (data) => {
        callback(null, data);
      }
    });
  };

  putData (url, params, callback) {
    const reqUrl = serverURL + url;
    $.ajax({
      url   : reqUrl,
      type: 'PUT',
      contentType: 'application/json;charset=UTF-8',
      dataType: 'json',
      data: JSON.stringify(params),
      error:  (jqXHR) => {
        callback(jqXHR.responseText || "Error");
      },
      success: (data) => {
        callback(null, data);
      }
    });
  };

  deleteData (url, params, callback)  {
    const reqUrl = serverURL + url;
    $.ajax({
      url   : reqUrl,
      type: 'DELETE',
      contentType: 'application/json;charset=UTF-8',
      dataType: 'json',
      data: JSON.stringify(params),
      error:  (jqXHR) => {
        callback(jqXHR.responseText || "Error");
      },
      success: (data) => {
        callback(null, data);
      }
    });
  };
}

export default HttpUtil;