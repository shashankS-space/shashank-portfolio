window.addEventListener("load", ()=>{
  setTimeout(()=>{
    document.body.classList.remove("dormant");
    document.body.classList.add("active");
  }, 800);
});

