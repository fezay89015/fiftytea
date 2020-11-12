$("#list").change(function(){
    switch (parseInt($(this).val())){
  
    case 0: 
        $("#list2 option").remove();
        var array = [ "縣市"];
        $.each(array, function(i, val) {
          $("#list2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });     
        break;
    case 1: 
        $("#list2 option").remove();
        var array = [ "基隆", "台北", "新北", "新竹", "桃園" , "宜蘭"];
        $.each(array, function(i, val) {
          $("#list2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });      
        break;
    case 2: 
        $("#list2 option").remove();
        var array = [ "苗栗", "南投", "台中", "彰化", "雲林"];
        $.each(array, function(i, val) {
          $("#list2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });      
        break;
  case 3: 
        $("#list2 option").remove();
        var array = [ "嘉義", "台南", "高雄", "屏東" ];    
        $.each(array, function(i, val) {
          $("#list2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
        });      
        break;
      }
  });

  $(body).ready(function(event) {
    $('select').on('mouseenter', 'option', function(e) {
      this.style.background = "#DCDCDC";
    });
    $('select').on('mouseleave', 'option', function(e) {
      this.style.background = "none";
    });
  });

