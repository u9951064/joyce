import { useMeta, useRouter } from '@nuxtjs/composition-api'
import urlJoin from '~/utils/urlJoin';

export function useHeader(options) {
  const _options = Object.assign({}, {
    'canonical': '',
    'title': '',
    'description': '',
    'ogImage': '',
    'ogWidth': '',
    'ogHeight': '',
    'redirect': '',
  }, options || {});

  const router = useRouter();
  const metaOject = useMeta();
  const currentPath = urlJoin(process.env.host, router.currentRoute.path);
  const pageTitle = _options.title ? `${_options.title} | Portfolio | Joyce` : 'Portfolio | Joyce';

  if (_options.redirect) {
    if (typeof _options.redirect !== 'string') {
      _options.redirect = router.resolve(_options.redirect).href;
    }
    _options.redirect = _options.redirect ? urlJoin(process.env.host, _options.redirect) : '';
  }

  if (_options.canonical) {
    if (typeof _options.canonical !== 'string') {
      _options.canonical = router.resolve(_options.canonical).href;
    }
    _options.canonical = _options.redirect ? urlJoin(process.env.host, _options.canonical) : '';
  }

  if (!_options.description) {
    _options.description = 'Hi i\'m Joyce! 我是名網頁視覺設計師，擅長UI設計、網頁設計、廣告設計、平面設計，相信設計應兼顧產品一致性與易用性，為用戶帶來更棒的體驗。';
  }

  if (!_options.ogImage) {
    _options.ogImage = require("~/assets/images/og-image.png");
    _options.ogWidth = 2000;
    _options.ogHeight = 630;
  }

  const { meta, link, title } = metaOject;

  // <title>Joyce</title>
  title.value = pageTitle;

  // <meta name="description" content="Joyce 的網站" />
  meta.value.push({
    hid: 'description',
    name: 'description',
    content: _options.description,
  });

  // <meta property="og:type" content="website" />
  meta.value.push({
    hid: 'og:type',
    property: 'og:type',
    content: 'website',
  });

  // <meta property="og:local" content="zh_TW" />
  meta.value.push({
    hid: 'og:local',
    property: 'og:local',
    content: 'zh_TW',
  });

  // <meta property="og:title" content="Joyce" />
  meta.value.push({
    hid: 'og:title',
    property: 'og:title',
    content: pageTitle,
  });

  meta.value.push({
    hid: 'og:description',
    name: 'og:description',
    content: _options.description,
  });

  // <meta property="og:url" content="https://joyce.tinycloud.tw/path" />
  meta.value.push({
    hid: 'og:url',
    property: 'og:url',
    content: currentPath,
  });

  // <meta property="og:image" content="https://joyce.tinycloud.tw/path" />
  meta.value.push({
    hid: 'og:image',
    property: 'og:image',
    content: urlJoin(process.env.host, _options.ogImage),
  });

  if (_options.ogWidth && _options.ogHeight) {
    // <meta property="og:image:width" content="2000" />
    meta.value.push({
      hid: 'og:image:width',
      property: 'og:image:width',
      content: _options.ogWidth,
    });
    // <meta property="og:image:height" content="https://joyce.tinycloud.tw/path" />
    meta.value.push({
      hid: 'og:image:height',
      property: 'og:image:height',
      content: _options.ogHeight,
    });
  }

  if (_options.canonical && _options.canonical !== currentPath) {
    link.value.push({
      hid: 'canonical',
      rel: 'canonical',
      href: _options.canonical,
    });
  }

  if (_options.redirect && _options.redirect !== currentPath) {
    meta.value.push({
      hid: "redirect",
      "http-equiv": "refresh",
      content: "0;url=" + _options.redirect,
    });
  }

  return metaOject;
}
