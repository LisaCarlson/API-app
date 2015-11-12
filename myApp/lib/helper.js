module.exports = {
  formatResponse: function(array){
    var output = {data:[]};
      for (var x in array.rows) {
        var obj = {};
        obj.type = "memory";
        obj.attributes = array.rows[x];
        output.data.push(obj);
        obj = {};
      }
    return output;
  }
}