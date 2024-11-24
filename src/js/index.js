// Fungsi untuk kembali ke halaman sebelumnya
function goBack() {
  if (window.history.length > 1) {
    window.history.back(); // Kembali ke halaman sebelumnya
  } else {
    alert(""); // Jika tidak ada halaman sebelumnya
  }
}

// skills
fetch("constants/projects.json")
  .then((res) => res.json())
  .then((projects) => {
    document.querySelector("#projects").innerHTML = projects
      .map(
        (project) =>
          `<article class="bg-gray-100 rounded-lg p-3">
            <div class="bg-gray-800 rounded-lg overflow-hidden">
              <img
                alt="${project.imageAlt}"
                class="w-full h-32 md:h-52 lg:h-52 object-cover"
                height="200"
                src="${project.image}"
                width="400"
              />
            </div>
            <div class="mt-4">
              <h4 class="text-sm font-semibold">
                ${project.title}
              </h4>
              <div class="flex justify-between items-baseline text-gray-500 mt-2">
                <p class="text-xs font-normal text-gray-500 flex items-baseline">
                  <svg
                    class="w-[12px] h-[12px] fill-[#ffdd00] mr-1"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                    ></path>
                  </svg>
                  ${project.date}
                </p>
                <a class="ml-auto text-gray-800 text-sm font-normal" href="${project.link}">
                  Detail
                </a>
              </div>
            </div>
          </article>`
      )
      .join("");
  });

fetch("constants/popularRepository.json")
  .then((res) => res.json())
  .then((popularRepository) => {
    document.querySelector("#popularRepository").innerHTML = popularRepository
      .map(
        (popularRepository) =>
          `<article class="bg-gray-100 rounded-lg p-2 mb-4 flex items-center">
          <img
            alt="${popularRepository.imageAlt}"
            class="w-28 h-24 rounded-md mr-4"
            height="100"
            src="${popularRepository.image}"
            width="100"
          />
          <div class="flex-1 space-y-1">
            <h3 class="text-sm font-semibold">
            ${popularRepository.title}
            </h3>
            <p class="text-xs font-normal text-gray-500 flex items-center">
              <svg
                class="w-[12px] h-[12px] fill-[#bfbfbf] mr-1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"
                ></path>
              </svg>
              ${popularRepository.status}
            </p>
            <div class="flex justify-between items-baseline">
              <p
                class="text-xs font-semibold text-gray-800 flex items-baseline"
              >
                <svg
                  class="w-[12px] h-[12px] fill-[#ffdd00] mr-1"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c- 8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                  ></path>
                </svg>
                ${popularRepository.date}
              </p>
              <a
                class="text-sm text-gray-800 font-normal"
                href="${popularRepository.link}"
              >
                Detail
              </a>
            </div>
          </div>
        </article>`
      )
      .join("");
  });