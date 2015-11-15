module.exports = {
  formatResponse: function(array){
    var output = {links: {}, data:[]};
      for (var x in array.rows) {
        var obj = {};
        obj.type = "memory";
        obj.attributes = array.rows[x];
        obj.links = {};
        output.data.push(obj);
        obj = {};
      }
    return output;
  },
  formatYears: function(array) {
    var output = {links: {}, data:[]};
    var yearData = array.map(function (yearObj) {
      return yearObj.year;
    });
    output.data = yearData;
    return output;
  }
}