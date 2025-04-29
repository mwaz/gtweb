document.addEventListener("DOMContentLoaded", () => {
  const featuredPostContainer = document.getElementById(
    "featured-post-container"
  );
  const recentPostsContainer = document.getElementById(
    "recent-posts-container"
  );

  // --- Blog Post Data ---
  // In a real application, this data would likely come from a server/CMS
  const allPosts = [
    {
      title: "What is Sustainable Herb Growing?",
      image: "images/herbs-background.jpg",
      alt: "Sustainable Herbs",
      description:
        "Learn about the sustainable practices we use to grow our herbs.",
      link: "#", // Placeholder link
      readTime: "8 MIN READ",
    },
    {
      title: "The Benefits of Fresh Herbs",
      image: "images/basil.jpg",
      alt: "Basil",
      description:
        "Discover the health benefits of using fresh herbs in your cooking.",
      link: "#", // Placeholder link
      readTime: "5 MIN READ",
    },
    {
      title: "Growing Herbs at Home",
      image: "images/mint.jpg",
      alt: "Mint",
      description: "A guide to growing your own herbs at home.",
      link: "#", // Placeholder link
      readTime: "7 MIN READ",
    },
    {
      title: "Cooking with Rosemary",
      image: "images/rosemary.jpg",
      alt: "Rosemary",
      description: "Tips and recipes for using rosemary.",
      link: "#", // Placeholder link
      readTime: "6 MIN READ",
    },
    // Add more posts here if needed
    {
      title: "Exploring Oregano Varieties",
      image: "images/oregano.jpg",
      alt: "Oregano",
      description: "A look into different types of oregano and their uses.",
      link: "exploring-oregano-varieties.html", // Placeholder link
      readTime: "4 MIN READ",
    },
    {
      title: "Thyme in Traditional Medicine",
      image: "images/thyme.jpg",
      alt: "Thyme",
      description: "How thyme has been used historically for health.",
      link: "#", // Placeholder link
      readTime: "5 MIN READ",
    },
  ];

  // --- Fisher-Yates Shuffle Function ---
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // --- Shuffle and Display Posts ---
  if (featuredPostContainer && recentPostsContainer && allPosts.length > 0) {
    const shuffledPosts = shuffleArray([...allPosts]); // Shuffle a copy of the array

    // 1. Display Featured Post (first item after shuffle)
    const featuredPost = shuffledPosts[0];
    featuredPostContainer.innerHTML = `
            <div class="featured-post-item">
                <img src="${featuredPost.image}" alt="${featuredPost.alt}" loading="lazy">
                <h3><a href="${featuredPost.link}">${featuredPost.title}</a></h3>
                <p>${featuredPost.description}</p>
                <span class="read-time">${featuredPost.readTime}</span>
            </div>
        `;

    // 2. Display Recent Posts (the rest of the items)
    const recentPosts = shuffledPosts.slice(1); // Get all posts except the first one
    recentPostsContainer.innerHTML = ""; // Clear any existing content

    recentPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post-item");
      postElement.innerHTML = `
                <img src="${post.image}" alt="${post.alt}" loading="lazy">
                <h3><a href="${post.link}">${post.title}</a></h3>
                <p>${post.description}</p>
                <span class="read-time">${post.readTime}</span>
            `;
      recentPostsContainer.appendChild(postElement);
    });
  } else {
    console.error("Required containers or post data not found.");
    // Optionally display a message to the user in the containers
    if (featuredPostContainer)
      featuredPostContainer.innerHTML = "<p>Could not load featured post.</p>";
    if (recentPostsContainer)
      recentPostsContainer.innerHTML = "<p>Could not load recent posts.</p>";
  }
});
