<page-content>
  <div id="layout" class="pure-g">
    <div class="sidebar pure-u-1 pure-u-md-1-4">
      <div class="header">
        <h1 class="brand-title">A Sample Blog</h1>
        <h2 class="brand-tagline">Creating a blog layout using Pure</h2>

        <page-navbar></page-navbar>

      </div>
    </div>

    <div class="content pure-u-1 pure-u-md-3-4">
      <div>
        <!-- A wrapper for all the blog posts -->
        <div class="posts">
          <h1 class="content-subhead">Pinned Post</h1>

          <!-- A single blog post -->
          <single-post
            post_author={pinned_post_author}
            post_title={pinned_post_title}
            post_author_img={pinned_post_author_img}
            post_categories={pinned_post_categories}
            post_description={pinned_post_description}
          ></single-post>

        </div>

        <div class="posts">
          <h1 class="content-subhead">Recent Posts</h1>

          <page-posts
            posts={posts}
          ></page-posts>

        </div>

        <page-footer></page-footer>

      </div>
    </div>
  </div>

  <script>

    this.pinned_post_author = 'Tilo Mitra'; 
    this.pinned_post_title = 'Introducing Pure'; 
    this.pinned_post_author_img = 'http://purecss.io/img/common/tilo-avatar.png'; 
    this.pinned_post_categories = {
      CSS: 'post-category post-category-design',
      Pure: 'post-category post-category-pure'
    };
    this.pinned_post_description = 'Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the slides from the presentation: https://speakerdeck.com/tilomitra/pure-bliss. Although it looks pretty minimalist, we’ve been working on Pure for several months. After many iterations, we have released Pure as a set of small, responsive, CSS modules that you can use in every web project.';

    this.posts = [
    {
      author: 'Eric Ferraiuolo',
      author_img: 'http://purecss.io/img/common/ericf-avatar.png',
      title: 'Everything You Need to Know About Riot.js',
      categories: {
        JavaScript: 'post-category post-category-js'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      author: 'Reid Burke',
      author_img: 'http://purecss.io/img/common/reid-avatar.png',
      title: 'Everything You Need to Know About Riot.js',
      categories: {
        Uncategorized: 'post-category'
      },
      images: {
        'CSSConf Photos': {
          href: 'http://www.flickr.com/photos/uberlife/8915936174/',
          alt: 'Photo of someone working poolside at a resort',
          src: 'http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg'
        },
        'JSConf Photos': {
          href: 'http://www.flickr.com/photos/uberlife/8907351301/',
          alt: 'Photo of the sunset on the beach',
          src: 'http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg'
        }
      }
    },
    {
      author: 'Andrew Wooldridge',
      author_img: 'http://purecss.io/img/common/andrew-avatar.png',
      title: 'YUI 3.10.2 Released',
      categories: {
        YUI: 'post-category post-category-yui'
      },
      description: 'We are happy to announce the release of YUI 3.10.2! You can find it now on the Yahoo! CDN, download it directly, or pull it in via npm. We’ve also updated the YUI Library website with the latest documentation.'
    }
    ];

  </script>
</page-content>
