    var currentMethodList = ['gt', 'noisy', 'sgm', 'bm3d', 'ncsnv2'];
    var currentImageList = ['5', '11', '18'];
    var currentMethod = "gt";

    function ChangeMethod(idx) {
      var li_list = document.getElementById("method-view-ul").children;
      for (i = 0; i < li_list.length; i++) {
        li_list[i].className = "nav-link";
      }
      li_list[idx].className = "nav-link active";
      currentMethod = currentMethodList[idx];

      for (var i = 0; i < currentImageList.length; i++) {
        var image = document.getElementById('image' + (i + 1));
        var error = document.getElementById('error' + (i + 1));
        image.src = "./image_assets/ultrasound/phantom/image/" + currentMethod + "_" + currentImageList[i] + ".png";
        error.src = "./image_assets/ultrasound/phantom/error/" + currentMethod + "_" + currentImageList[i] + "_error.png";
      }
    }
    function ChangePrompt(idx) {
      var li_list = document.getElementById("prompt-view-ul").children;
      for (i = 0; i < li_list.length; i++) {
        li_list[i].className = "nav-link";
      }
      li_list[idx].className = "nav-link active";
      var div_image = document.getElementById('div_image');
      var div_error = document.getElementById('div_error');
      if (idx == 0) {
        div_image.style.display = "";
        div_error.style.display = "none";
      } else {
        div_image.style.display = "none";
        div_error.style.display = "";
      }
    }
