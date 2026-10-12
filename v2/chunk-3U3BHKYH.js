import"./chunk-ORF4SBOT.js";import"./chunk-JWIKCLPG.js";import"./chunk-VYEF65LA.js";import"./chunk-AHJ772UX.js";import"./chunk-F75OPKHL.js";import"./chunk-YIMFP6IU.js";import"./chunk-RXVBYPJ7.js";import"./chunk-SRSRNONR.js";import{H as c,K as m,Q as a,_ as p}from"./chunk-GUMWXNRW.js";import"./chunk-YKGOUZ5W.js";import"./chunk-LXHUSH6O.js";import"./chunk-C7G6RNUY.js";import"./chunk-J5D6GAIL.js";import"./chunk-ZTT7M74P.js";import"./chunk-E77BULOG.js";var w=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var l=arguments.length,t=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var f=o.length-1;f>=0;f--)(n=o[f])&&(t=(l<3?n(t):l>3?n(e,i,t):n(e,i))||t);return l>3&&t&&Object.defineProperty(e,i,t),t},s=class extends a{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=w;s=u([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};
