document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 

        }
      });
    });
  
    document.querySelectorAll('.teamimage,.images,.menulist,.count,.person-page,.readnews,.products,.bookcontainer,.second').forEach(element => {
      observer.observe(element);

    });
  });
  
