import { injectGlobal } from 'styled-components'
injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1534827152303'); /* IE9*/
    src: url('./iconfont.eot?t=1534827152303#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1534827152303') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1534827152303#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

