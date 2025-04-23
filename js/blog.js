document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const filename = title.toLowerCase().replace(/ /g, '-') + '.html';
    const filepath = 'blogs/' + filename;

    // Create the blog post content
    const blogPostContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title></head><body><h1>${title}</h1><p>${content}</p></body></html>`;

    // Use AJAX to save the file (this will not actually work in this environment)
    // In a real environment, you would send this data to a server-side script
    // that would save the file.
    alert('Blog post created: ' + filepath + '\\n\\n' + blogPostContent);
});

// not necessary
