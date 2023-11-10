function addReview(event) {
  event.preventDefault();
  let name = document.getElementById("name_text").value;
  let text = document.getElementById('text_area').value;
  if (!text) {
    alert('Fulfill the review first...');
    document.getElementById('text_area').focus();
    return;
  }
  else {
    let newReview = document.createElement('div');
    newReview.className = "recommendation-container";
    newReview.innerHTML = `\<p\>\<em\>${name ? name + ": \&\#34\;" : "\&\#34\;"}${text + "\&\#34\;"}\</em\>\</p\>`;
    document.getElementById('recommendations').appendChild(newReview);
    //window.confirm("Thank you for submitting a recommendation!");
    showPopup(true);
  }
}


function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
