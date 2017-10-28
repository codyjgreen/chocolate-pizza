'use strict';

var ul_lists = document.getElementsByTagName('ul');

function update_list(list) {
  list.style.listStyle = 'none';
  list.style.webkitPaddingStart = '10px';
  list.style.MozPaddingStart = '10px';
}

for (var i = 0; i < ul_lists.length; i++) {
  update_list(ul_lists[i]);
}
