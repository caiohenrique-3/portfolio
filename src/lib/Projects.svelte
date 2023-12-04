<script>
  // dependencies
  import { onMount } from "svelte";
  import { register } from "swiper/element/bundle";

  register();

  // data
  import projects from "../data/projects";

  // Show/hide project showcase
  let showImage = {};

  onMount(() => {
    projects.forEach((project) => {
      showImage[project.id] = false;
    });
  });

  function handleClick(id) {
    showImage[id] = !showImage[id];
  }

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

  <swiper-container loop="true" slides-per-view="1">
    {#each projects.filter((project) => currentCategory === "All" || project.technologies.includes(currentCategory)) as project (project.id)}
      <swiper-slide key={project.id}>
        <div class="project">
          <h3>{project.title}</h3>
          <p>{project.description} {project.technologies}</p>
          <div class="img-container">
            {#if showImage[project.id]}
              <img src={project.img} alt="Showcase" loading="lazy" />
            {/if}
          </div>
          <ul>
            <li>
              <button on:click={() => handleClick(project.id)}>
                <i
                  class={`fa ${
                    showImage[project.id] ? "fa-eye-slash" : "fa-eye"
                  }`}
                  aria-hidden="true"
                />
                {showImage[project.id]
                  ? "Clique para ocultar a imagem"
                  : "Clique para exibir a imagem"}
              </button>
            </li>
            {#if project.demo !== ""}
              <li>
                <a href={project.demo}>
                  <i class="fa fa-external-link" aria-hidden="true" />
                  Demonstração
                </a>
              </li>
            {/if}
            <li>
              <a href={project.sourceCode}>
                <i class="fa fa-github-alt" aria-hidden="true" />
                Código fonte
              </a>
            </li>
          </ul>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</main>
