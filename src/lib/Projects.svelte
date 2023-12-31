<script>
  // dependencies
  import { register } from "swiper/element/bundle";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  register();

  // data
  import projects from "../data/projects";

  // imgs
  import htmlLogo from "../assets/html.svg";
  import cssLogo from "../assets/css.png";
  import jsLogo from "../assets/javascript.svg";
  import reactLogo from "../assets/react.svg";
  import tailwindLogo from "../assets/tailwindcss.svg";
  import pythonLogo from "../assets/python.svg";
  import javaLogo from "../assets/java.svg";

  // Display logo of the technologies according to 'technologies' key
  const techLogos = {
    HTML: htmlLogo,
    CSS: cssLogo,
    JavaScript: jsLogo,
    React: reactLogo,
    TailwindCSS: tailwindLogo,
    Python: pythonLogo,
    Java: javaLogo,
  };

  // Display projects based on category
  let currentCategory = "All";

  // Counting number of projects in category
  function countProjects(category) {
    if (category === "All") {
      return projects.length;
    } else {
      return projects.filter((project) =>
        project.technologies.includes(category)
      ).length;
    }
  }

  // Project swiper navigation buttons
  function handleNavButtonClick(direction) {
    const swiperEl = document.querySelector("swiper-container");

    if (swiperEl) {
      if (direction === "prev") {
        swiperEl.swiper.slidePrev();
      } else if (direction === "next") {
        swiperEl.swiper.slideNext();
      }
    }
  }

  // Create a store to hold the state of the modal (open/closed)
  let modalOpen = writable(false);

  // Create a store to hold the current image to be displayed in the modal
  let currentImage = writable("");

  // Function to close the modal when ESC key in pressed
  function handleKeydown(event) {
    if (event.key === "Escape") {
      modalOpen.set(false);
    }
  }

  // Add event listener for keydown event when the component mounts
  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<main id="projetos" class="text-white p-6 max-w-4xl mx-auto">
  <div class="flex pb-6">
    <h2 class="text-3xl text-emerald-300 pb-3 pr-3">Projetos</h2>

    <select bind:value={currentCategory} class="text-black pl-3 h-10">
      <option value="All">All ({countProjects("All")})</option>
      <option value="JavaScript"
        >JavaScript ({countProjects("JavaScript")})</option
      >
      <option value="React">React ({countProjects("React")})</option>
      <option value="Java">Java ({countProjects("Java")})</option>
      <option value="Python">Python ({countProjects("Python")})</option>
    </select>
  </div>

  <div class="flex m-4">
    <button
      type="button"
      on:click={() => handleNavButtonClick("prev")}
      aria-label="Previous Slide"
      class="w-2/4 h-12 rounded-md mx-2 hover:bg-emerald-300 hover:font-bold bg-white text-black"
    >
      <i class="fa fa-angle-left text-2xl" aria-hidden="true" />
    </button>

    <button
      type="button"
      on:click={() => handleNavButtonClick("next")}
      aria-label="Next Slide"
      class="w-2/4 h-12 rounded-md mx-2 hover:bg-emerald-300 hover:font-bold bg-white text-black"
    >
      <i class="fa fa-angle-right text-2xl" aria-hidden="true" />
    </button>
  </div>

  <swiper-container loop="true" slides-per-view="1">
    {#each projects.filter((project) => currentCategory === "All" || project.technologies.includes(currentCategory)) as project (project.id)}
      <swiper-slide
        key={project.id}
        class="text-center border-white border p-6"
        lazy="true"
      >
        <div class="project">
          <button
            class="uppercase bg-white text-black rounded p-1 mb-5 hover:bg-emerald-300"
            id="expand-image"
            on:click={() => {
              modalOpen.set(true);
              currentImage.set(project.img);
            }}><i class="fa fa-eye pr-1" />Expandir imagem</button
          >
          <div class="flex">
            {#each project.technologies as tech}
              <img
                src={techLogos[tech]}
                alt={tech}
                class="w-4 pb-4 mx-1 first:ml-auto"
              />
            {/each}
          </div>
          <h3 class="text-xl font-bold pb-1">{project.title}</h3>
          <p>{project.description}</p>
          <div class="max-w-sm mx-auto h-64 relative">
            <img
              src={project.img}
              alt="Showcase"
              loading="lazy"
              class="mx-auto h-full object-cover"
            />
          </div>
          <ul>
            {#if project.demo !== ""}
              <li class="pt-2 pb-2">
                <a
                  href={project.demo}
                  class="underline underline-offset-4 hover:text-emerald-300"
                >
                  <i class="fa fa-external-link" aria-hidden="true" />
                  Demonstração
                </a>
              </li>
            {/if}
            <li class="pt-2 pb-2">
              <a
                href={project.sourceCode}
                class="underline underline-offset-4 hover:text-emerald-300"
              >
                <i class="fa fa-github-alt" aria-hidden="true" />
                Código fonte
              </a>
            </li>
          </ul>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>

  {#if $modalOpen}
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div
        class="bg-black bg-opacity-75 fixed inset-0"
        on:click={() => modalOpen.set(false)}
      />
      <img
        src={$currentImage}
        class="relative z-10 max-w-full max-h-full m-8 rounded p-8"
      />
      <button
        class="absolute top-0 right-0 p-4 text-white text-2xl"
        on:click={() => modalOpen.set(false)}>×</button
      >
    </div>
  {/if}
</main>
