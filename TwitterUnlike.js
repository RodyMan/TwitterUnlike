setInterval(() =>{
  for(cost x of document.querySelectorAll('div[data-testid="unlike"]')){
    x.click();
    }
  window.scrollTo(0, document.body.scrollHeight);
}, 1000)
