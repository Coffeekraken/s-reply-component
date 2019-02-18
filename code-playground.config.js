module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-reply-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <div class="reply m-b">
          <p class="p">Curabitur in massa in nibh imperdiet venenatis. Nullam rutrum tincidunt nisi id commodo. Integer sit amet porta nibh, vel rhoncus quam. Sed urna urna, vulputate in lorem ut, consectetur pellentesque.</p>
        </div>
        <div class="reply reply--primary m-b">
          <p class="p">Curabitur in massa in nibh imperdiet venenatis. Nullam rutrum tincidunt nisi id commodo. Integer sit amet porta nibh, vel rhoncus quam. Sed urna urna, vulputate in lorem ut, consectetur pellentesque.</p>
        </div>
        <div class="reply reply--secondary m-b">
          <div class="mo">
            <div class="mo__content p-r">
              <s-icon driver="fontawesome" class="s-bigger" icon="far fa-user"></s-icon>
            </div>
            <div class="mo__content">
              <p class="p">Curabitur in massa in nibh imperdiet venenatis. Nullam rutrum tincidunt nisi id commodo. Integer sit amet porta nibh, vel rhoncus quam. Sed urna urna, vulputate in lorem ut, consectetur pellentesque.</p>
            </div>
          </div>
        </div>
        <div class="reply reply--success m-b">
          <div class="mo">
            <div class="mo__content p-r">
              <s-icon driver="fontawesome" class="s-bigger" icon="far fa-user"></s-icon>
            </div>
            <div class="mo__content">
              <p class="p">Curabitur in massa in nibh imperdiet venenatis. Nullam rutrum tincidunt nisi id commodo. Integer sit amet porta nibh, vel rhoncus quam. Sed urna urna, vulputate in lorem ut, consectetur pellentesque.</p>
            </div>
          </div>
        </div>
        <div class="reply reply--error reply--interactive m-b">
          <p class="p">Curabitur in massa in nibh imperdiet venenatis. Nullam rutrum tincidunt nisi id commodo. Integer sit amet porta nibh, vel rhoncus quam. Sed urna urna, vulputate in lorem ut, consectetur pellentesque.</p>
        </div>
        <div class="reply reply--warning reply--interactive m-b">
          <p class="p">Curabitur in massa in nibh imperdiet venenatis. Nullam rutrum tincidunt nisi id commodo. Integer sit amet porta nibh, vel rhoncus quam. Sed urna urna, vulputate in lorem ut, consectetur pellentesque.</p>
        </div>
        <div class="reply reply--info m-b">
          <p class="p">Curabitur in massa in nibh imperdiet venenatis. Nullam rutrum tincidunt nisi id commodo. Integer sit amet porta nibh, vel rhoncus quam. Sed urna urna, vulputate in lorem ut, consectetur pellentesque.</p>
        </div>
      `
    },
    css: {
      language: 'scss',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        @include s-reply-classes(
          $colors: default primary secondary success error warning info
        );
      `
    },
    js: {
      language: 'js',
      data: `
        import 'coffeekraken-s-icon-component'
      `
    }
  }
}
