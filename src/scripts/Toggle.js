import sheet, { mount } from 'corset';

mount(document, class {
  bind() {
    return sheet`
      .toggler {
        store-root: app;
        store-set: app open true;
        --open: store-get(app, open);
      }

      .toggle {
        class-toggle: open var(--open);
      }

      .toggle a {
        event: click bind(
          ${store => store.set('open', !store.get('open'))},
          store(app)
        );
      }

      .toggle:not(.open) a {
        text: "[+] comments collapsed";
      }

      .comment-children {
        attr: style get(var(--open), ${open => `display: ${open ? 'block' : 'none'}`});
      }
    `;
  }
});