"use strict";

var ul_lists = document.getElementsByTagName("ul");

function update_list(list) {
  list.style.listStyle = "none";
  list.style.webkitPaddingStart = "10px";
  list.style.MozPaddingStart = "10px";
}

for (var idx = 0; idx < ul_lists.length; idx++) {
  update_list(ul_lists[idx]);
}
