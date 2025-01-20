const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-Links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
scrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".header_links", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".steps_card", {
    ...scrollRevealOption,
    interval: 500,
});




 <div className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative p-5">
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div>
        <img src={image4} alt="image 4" className="w-full object-cover" style={{ height: '450px' }} />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-6">
        <h2 className="text-lg font-semibold text-white">Software Development Services</h2>
        <p className="mt-2 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisici <br />elit enim, nostrum quaerat!
        </p>
        <a href="#" className="inline-block mt-4 text-white font-medium">
          Learn More &rarr;
        </a>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div>
        <img src={image5} alt="image 5" className="w-full object-cover" style={{ height: '450px' }} />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-6">
        <h2 className="text-lg font-semibold text-white">UI/UX Design</h2>
        <p className="mt-2 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum quaerat!
        </p>
        <a href="#" className="inline-block mt-4 text-white font-medium">
          Learn More &rarr;
        </a>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div>
        <img src={image6} alt="image 6" className="w-full object-cover" style={{ height: '450px' }} />
      </div>
      <div className="p-6 absolute inset-x-0 bottom-0 bg-black bg-opacity-50">
        <h2 className="text-lg font-semibold text-white">
          DevOps and Infrastructure Management
        </h2>
        <p className="mt-2 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum quaerat!
        </p>
        <a href="#" className="inline-block mt-4 text-white font-medium">
          Learn More &rarr;
        </a>
      </div>
    </div>
  </div>
</div> 