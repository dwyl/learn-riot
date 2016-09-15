<page-posts>

  <single-post
    each={posts}
    post_author={author}
    post_title={title}
    post_author_img={author_img}
    post_categories={categories}
    post_description={description}
    post_images={images}
  ></single-post>

  <script>

    this.posts = opts.posts;

  </script>

</page-posts>
