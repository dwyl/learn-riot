<single-post>
  <section class="post">
    <header class="post-header">
      <img class="post-avatar" alt="{post_author}&#x27;s avatar" height="48" width="48" src="{post_author_img}">

      <h2 class="post-title">{post_title}</h2>

      <p class="post-meta">
        By <a class="post-author" href="#">{post_author}</a> under <a each={name, class in post_categories} class={class} href="#">{name}</a>
      </p>
    </header>

    <div class="post-description">
      <p>
        {post_description}
      </p>
      <div class="post-images pure-g">
        <div each={name, data in images} class="pure-u-1 pure-u-md-1-2">
          <a href="{data.href}">
            <img alt="{data.alt}" class="pure-img-responsive" src="{data.src}">
          </a>

          <div class="post-image-meta">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script>
    this.post_author = opts.post_author;
    this.post_title = opts.post_title;
    this.post_author_img = opts.post_author_img;
    this.post_categories = opts.post_categories;
    this.post_description = opts.post_description;
    this.images = opts.post_images;

  </script>
</single-post>

