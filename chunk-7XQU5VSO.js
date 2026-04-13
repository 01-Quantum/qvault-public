import{a as ti}from"./chunk-HQ57EYTZ.js";import{a as u,b as p,c as C,d as fo,e as Wt,f as mo,h as go}from"./chunk-RUBWRHVN.js";import{A as L,B as U,C as X,D as d,F as po,J as ho,l as rt,o as c,p as Se,s as It,t as uo,u as f,w as y}from"./chunk-ZIM33722.js";import"./chunk-VFC7ICIL.js";import{A as F,B as I,C as _,D as Ue,E as ao,F as m,G as Re,H as D,M as co,O as w,U as Y,V as ot,a as De,f as Ze,p as et,q as lo,r as b,u as P,v as se,x as tt,z as Tt}from"./chunk-HYZLZDSY.js";import"./chunk-OLW4PTPB.js";import"./chunk-4S22LEGP.js";import"./chunk-LQD4RXRI.js";import"./chunk-UGZMQAEK.js";import{f as E,i as ei,l as J}from"./chunk-E77BULOG.js";var To=E((Rl,Ao)=>{"use strict";Ao.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var ae=E(we=>{"use strict";var Pt,si=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];we.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};we.getSymbolTotalCodewords=function(e){return si[e]};we.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};we.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Pt=e};we.isKanjiModeEnabled=function(){return typeof Pt<"u"};we.toSJIS=function(e){return Pt(e)}});var at=E(H=>{"use strict";H.L={bit:1};H.M={bit:0};H.Q={bit:3};H.H={bit:2};function li(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return H.L;case"m":case"medium":return H.M;case"q":case"quartile":return H.Q;case"h":case"high":return H.H;default:throw new Error("Unknown EC Level: "+t)}}H.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4};H.from=function(e,o){if(H.isValid(e))return e;try{return li(e)}catch{return o}}});var Lo=E((Al,Wo)=>{"use strict";function Io(){this.buffer=[],this.length=0}Io.prototype={get:function(t){let e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let o=0;o<e;o++)this.putBit((t>>>e-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){let e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};Wo.exports=Io});var Bo=E((Tl,Po)=>{"use strict";function qe(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}qe.prototype.set=function(t,e,o,i){let n=t*this.size+e;this.data[n]=o,i&&(this.reservedBit[n]=!0)};qe.prototype.get=function(t,e){return this.data[t*this.size+e]};qe.prototype.xor=function(t,e,o){this.data[t*this.size+e]^=o};qe.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};Po.exports=qe});var ko=E(ct=>{"use strict";var ai=ae().getSymbolSize;ct.getRowColCoords=function(e){if(e===1)return[];let o=Math.floor(e/7)+2,i=ai(e),n=i===145?26:Math.ceil((i-13)/(2*o-2))*2,r=[i-7];for(let s=1;s<o-1;s++)r[s]=r[s-1]-n;return r.push(6),r.reverse()};ct.getPositions=function(e){let o=[],i=ct.getRowColCoords(e),n=i.length;for(let r=0;r<n;r++)for(let s=0;s<n;s++)r===0&&s===0||r===0&&s===n-1||r===n-1&&s===0||o.push([i[r],i[s]]);return o}});var Mo=E(Oo=>{"use strict";var ci=ae().getSymbolSize,No=7;Oo.getPositions=function(e){let o=ci(e);return[[0,0],[o-No,0],[0,o-No]]}});var Do=E(A=>{"use strict";A.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var be={N1:3,N2:3,N3:40,N4:10};A.isValid=function(e){return e!=null&&e!==""&&!isNaN(e)&&e>=0&&e<=7};A.from=function(e){return A.isValid(e)?parseInt(e,10):void 0};A.getPenaltyN1=function(e){let o=e.size,i=0,n=0,r=0,s=null,l=null;for(let a=0;a<o;a++){n=r=0,s=l=null;for(let h=0;h<o;h++){let g=e.get(a,h);g===s?n++:(n>=5&&(i+=be.N1+(n-5)),s=g,n=1),g=e.get(h,a),g===l?r++:(r>=5&&(i+=be.N1+(r-5)),l=g,r=1)}n>=5&&(i+=be.N1+(n-5)),r>=5&&(i+=be.N1+(r-5))}return i};A.getPenaltyN2=function(e){let o=e.size,i=0;for(let n=0;n<o-1;n++)for(let r=0;r<o-1;r++){let s=e.get(n,r)+e.get(n,r+1)+e.get(n+1,r)+e.get(n+1,r+1);(s===4||s===0)&&i++}return i*be.N2};A.getPenaltyN3=function(e){let o=e.size,i=0,n=0,r=0;for(let s=0;s<o;s++){n=r=0;for(let l=0;l<o;l++)n=n<<1&2047|e.get(s,l),l>=10&&(n===1488||n===93)&&i++,r=r<<1&2047|e.get(l,s),l>=10&&(r===1488||r===93)&&i++}return i*be.N3};A.getPenaltyN4=function(e){let o=0,i=e.data.length;for(let r=0;r<i;r++)o+=e.data[r];return Math.abs(Math.ceil(o*100/i/5)-10)*be.N4};function ui(t,e,o){switch(t){case A.Patterns.PATTERN000:return(e+o)%2===0;case A.Patterns.PATTERN001:return e%2===0;case A.Patterns.PATTERN010:return o%3===0;case A.Patterns.PATTERN011:return(e+o)%3===0;case A.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2===0;case A.Patterns.PATTERN101:return e*o%2+e*o%3===0;case A.Patterns.PATTERN110:return(e*o%2+e*o%3)%2===0;case A.Patterns.PATTERN111:return(e*o%3+(e+o)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}A.applyMask=function(e,o){let i=o.size;for(let n=0;n<i;n++)for(let r=0;r<i;r++)o.isReserved(r,n)||o.xor(r,n,ui(e,r,n))};A.getBestMask=function(e,o){let i=Object.keys(A.Patterns).length,n=0,r=1/0;for(let s=0;s<i;s++){o(s),A.applyMask(s,e);let l=A.getPenaltyN1(e)+A.getPenaltyN2(e)+A.getPenaltyN3(e)+A.getPenaltyN4(e);A.applyMask(s,e),l<r&&(r=l,n=s)}return n}});var kt=E(Bt=>{"use strict";var ce=at(),ut=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],dt=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Bt.getBlocksCount=function(e,o){switch(o){case ce.L:return ut[(e-1)*4+0];case ce.M:return ut[(e-1)*4+1];case ce.Q:return ut[(e-1)*4+2];case ce.H:return ut[(e-1)*4+3];default:return}};Bt.getTotalCodewordsCount=function(e,o){switch(o){case ce.L:return dt[(e-1)*4+0];case ce.M:return dt[(e-1)*4+1];case ce.Q:return dt[(e-1)*4+2];case ce.H:return dt[(e-1)*4+3];default:return}}});var Uo=E(ht=>{"use strict";var Fe=new Uint8Array(512),pt=new Uint8Array(256);(function(){let e=1;for(let o=0;o<255;o++)Fe[o]=e,pt[e]=o,e<<=1,e&256&&(e^=285);for(let o=255;o<512;o++)Fe[o]=Fe[o-255]})();ht.log=function(e){if(e<1)throw new Error("log("+e+")");return pt[e]};ht.exp=function(e){return Fe[e]};ht.mul=function(e,o){return e===0||o===0?0:Fe[pt[e]+pt[o]]}});var jo=E(Ve=>{"use strict";var Nt=Uo();Ve.mul=function(e,o){let i=new Uint8Array(e.length+o.length-1);for(let n=0;n<e.length;n++)for(let r=0;r<o.length;r++)i[n+r]^=Nt.mul(e[n],o[r]);return i};Ve.mod=function(e,o){let i=new Uint8Array(e);for(;i.length-o.length>=0;){let n=i[0];for(let s=0;s<o.length;s++)i[s]^=Nt.mul(o[s],n);let r=0;for(;r<i.length&&i[r]===0;)r++;i=i.slice(r)}return i};Ve.generateECPolynomial=function(e){let o=new Uint8Array([1]);for(let i=0;i<e;i++)o=Ve.mul(o,new Uint8Array([1,Nt.exp(i)]));return o}});var Fo=E((Nl,qo)=>{"use strict";var zo=jo();function Ot(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Ot.prototype.initialize=function(e){this.degree=e,this.genPoly=zo.generateECPolynomial(this.degree)};Ot.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");let o=new Uint8Array(e.length+this.degree);o.set(e);let i=zo.mod(o,this.genPoly),n=this.degree-i.length;if(n>0){let r=new Uint8Array(this.degree);return r.set(i,n),r}return i};qo.exports=Ot});var Mt=E(Vo=>{"use strict";Vo.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}});var Dt=E(re=>{"use strict";var Ho="[0-9]+",di="[A-Z $%*+\\-./:]+",He="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";He=He.replace(/u/g,"\\u");var pi="(?:(?![A-Z0-9 $%*+\\-./:]|"+He+`)(?:.|[\r
]))+`;re.KANJI=new RegExp(He,"g");re.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");re.BYTE=new RegExp(pi,"g");re.NUMERIC=new RegExp(Ho,"g");re.ALPHANUMERIC=new RegExp(di,"g");var hi=new RegExp("^"+He+"$"),fi=new RegExp("^"+Ho+"$"),mi=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");re.testKanji=function(e){return hi.test(e)};re.testNumeric=function(e){return fi.test(e)};re.testAlphanumeric=function(e){return mi.test(e)}});var ue=E(N=>{"use strict";var gi=Mt(),Ut=Dt();N.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};N.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};N.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};N.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};N.MIXED={bit:-1};N.getCharCountIndicator=function(e,o){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!gi.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?e.ccBits[0]:o<27?e.ccBits[1]:e.ccBits[2]};N.getBestModeForData=function(e){return Ut.testNumeric(e)?N.NUMERIC:Ut.testAlphanumeric(e)?N.ALPHANUMERIC:Ut.testKanji(e)?N.KANJI:N.BYTE};N.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")};N.isValid=function(e){return e&&e.bit&&e.ccBits};function wi(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return N.NUMERIC;case"alphanumeric":return N.ALPHANUMERIC;case"kanji":return N.KANJI;case"byte":return N.BYTE;default:throw new Error("Unknown mode: "+t)}}N.from=function(e,o){if(N.isValid(e))return e;try{return wi(e)}catch{return o}}});var Yo=E(ye=>{"use strict";var ft=ae(),bi=kt(),Ko=at(),de=ue(),jt=Mt(),Qo=7973,Go=ft.getBCHDigit(Qo);function yi(t,e,o){for(let i=1;i<=40;i++)if(e<=ye.getCapacity(i,o,t))return i}function Jo(t,e){return de.getCharCountIndicator(t,e)+4}function xi(t,e){let o=0;return t.forEach(function(i){let n=Jo(i.mode,e);o+=n+i.getBitsLength()}),o}function Ci(t,e){for(let o=1;o<=40;o++)if(xi(t,o)<=ye.getCapacity(o,e,de.MIXED))return o}ye.from=function(e,o){return jt.isValid(e)?parseInt(e,10):o};ye.getCapacity=function(e,o,i){if(!jt.isValid(e))throw new Error("Invalid QR Code version");typeof i>"u"&&(i=de.BYTE);let n=ft.getSymbolTotalCodewords(e),r=bi.getTotalCodewordsCount(e,o),s=(n-r)*8;if(i===de.MIXED)return s;let l=s-Jo(i,e);switch(i){case de.NUMERIC:return Math.floor(l/10*3);case de.ALPHANUMERIC:return Math.floor(l/11*2);case de.KANJI:return Math.floor(l/13);case de.BYTE:default:return Math.floor(l/8)}};ye.getBestVersionForData=function(e,o){let i,n=Ko.from(o,Ko.M);if(Array.isArray(e)){if(e.length>1)return Ci(e,n);if(e.length===0)return 1;i=e[0]}else i=e;return yi(i.mode,i.getLength(),n)};ye.getEncodedBits=function(e){if(!jt.isValid(e)||e<7)throw new Error("Invalid QR Code version");let o=e<<12;for(;ft.getBCHDigit(o)-Go>=0;)o^=Qo<<ft.getBCHDigit(o)-Go;return e<<12|o}});var tr=E(er=>{"use strict";var zt=ae(),Zo=1335,$i=21522,Xo=zt.getBCHDigit(Zo);er.getEncodedBits=function(e,o){let i=e.bit<<3|o,n=i<<10;for(;zt.getBCHDigit(n)-Xo>=0;)n^=Zo<<zt.getBCHDigit(n)-Xo;return(i<<10|n)^$i}});var rr=E((zl,or)=>{"use strict";var vi=ue();function We(t){this.mode=vi.NUMERIC,this.data=t.toString()}We.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};We.prototype.getLength=function(){return this.data.length};We.prototype.getBitsLength=function(){return We.getBitsLength(this.data.length)};We.prototype.write=function(e){let o,i,n;for(o=0;o+3<=this.data.length;o+=3)i=this.data.substr(o,3),n=parseInt(i,10),e.put(n,10);let r=this.data.length-o;r>0&&(i=this.data.substr(o),n=parseInt(i,10),e.put(n,r*3+1))};or.exports=We});var nr=E((ql,ir)=>{"use strict";var Ei=ue(),qt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Le(t){this.mode=Ei.ALPHANUMERIC,this.data=t}Le.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Le.prototype.getLength=function(){return this.data.length};Le.prototype.getBitsLength=function(){return Le.getBitsLength(this.data.length)};Le.prototype.write=function(e){let o;for(o=0;o+2<=this.data.length;o+=2){let i=qt.indexOf(this.data[o])*45;i+=qt.indexOf(this.data[o+1]),e.put(i,11)}this.data.length%2&&e.put(qt.indexOf(this.data[o]),6)};ir.exports=Le});var lr=E((Fl,sr)=>{"use strict";sr.exports=function(e){for(var o=[],i=e.length,n=0;n<i;n++){var r=e.charCodeAt(n);if(r>=55296&&r<=56319&&i>n+1){var s=e.charCodeAt(n+1);s>=56320&&s<=57343&&(r=(r-55296)*1024+s-56320+65536,n+=1)}if(r<128){o.push(r);continue}if(r<2048){o.push(r>>6|192),o.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){o.push(r>>12|224),o.push(r>>6&63|128),o.push(r&63|128);continue}if(r>=65536&&r<=1114111){o.push(r>>18|240),o.push(r>>12&63|128),o.push(r>>6&63|128),o.push(r&63|128);continue}o.push(239,191,189)}return new Uint8Array(o).buffer}});var cr=E((Vl,ar)=>{"use strict";var Ri=lr(),Si=ue();function Pe(t){this.mode=Si.BYTE,typeof t=="string"&&(t=Ri(t)),this.data=new Uint8Array(t)}Pe.getBitsLength=function(e){return e*8};Pe.prototype.getLength=function(){return this.data.length};Pe.prototype.getBitsLength=function(){return Pe.getBitsLength(this.data.length)};Pe.prototype.write=function(t){for(let e=0,o=this.data.length;e<o;e++)t.put(this.data[e],8)};ar.exports=Pe});var dr=E((Hl,ur)=>{"use strict";var _i=ue(),Ai=ae();function Be(t){this.mode=_i.KANJI,this.data=t}Be.getBitsLength=function(e){return e*13};Be.prototype.getLength=function(){return this.data.length};Be.prototype.getBitsLength=function(){return Be.getBitsLength(this.data.length)};Be.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let o=Ai.toSJIS(this.data[e]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),t.put(o,13)}};ur.exports=Be});var yr=E(ke=>{"use strict";var $=ue(),fr=rr(),mr=nr(),gr=cr(),wr=dr(),Ke=Dt(),mt=ae(),Ti=ti();function pr(t){return unescape(encodeURIComponent(t)).length}function Ge(t,e,o){let i=[],n;for(;(n=t.exec(o))!==null;)i.push({data:n[0],index:n.index,mode:e,length:n[0].length});return i}function br(t){let e=Ge(Ke.NUMERIC,$.NUMERIC,t),o=Ge(Ke.ALPHANUMERIC,$.ALPHANUMERIC,t),i,n;return mt.isKanjiModeEnabled()?(i=Ge(Ke.BYTE,$.BYTE,t),n=Ge(Ke.KANJI,$.KANJI,t)):(i=Ge(Ke.BYTE_KANJI,$.BYTE,t),n=[]),e.concat(o,i,n).sort(function(s,l){return s.index-l.index}).map(function(s){return{data:s.data,mode:s.mode,length:s.length}})}function Ft(t,e){switch(e){case $.NUMERIC:return fr.getBitsLength(t);case $.ALPHANUMERIC:return mr.getBitsLength(t);case $.KANJI:return wr.getBitsLength(t);case $.BYTE:return gr.getBitsLength(t)}}function Ii(t){return t.reduce(function(e,o){let i=e.length-1>=0?e[e.length-1]:null;return i&&i.mode===o.mode?(e[e.length-1].data+=o.data,e):(e.push(o),e)},[])}function Wi(t){let e=[];for(let o=0;o<t.length;o++){let i=t[o];switch(i.mode){case $.NUMERIC:e.push([i,{data:i.data,mode:$.ALPHANUMERIC,length:i.length},{data:i.data,mode:$.BYTE,length:i.length}]);break;case $.ALPHANUMERIC:e.push([i,{data:i.data,mode:$.BYTE,length:i.length}]);break;case $.KANJI:e.push([i,{data:i.data,mode:$.BYTE,length:pr(i.data)}]);break;case $.BYTE:e.push([{data:i.data,mode:$.BYTE,length:pr(i.data)}])}}return e}function Li(t,e){let o={},i={start:{}},n=["start"];for(let r=0;r<t.length;r++){let s=t[r],l=[];for(let a=0;a<s.length;a++){let h=s[a],g=""+r+a;l.push(g),o[g]={node:h,lastCount:0},i[g]={};for(let B=0;B<n.length;B++){let R=n[B];o[R]&&o[R].node.mode===h.mode?(i[R][g]=Ft(o[R].lastCount+h.length,h.mode)-Ft(o[R].lastCount,h.mode),o[R].lastCount+=h.length):(o[R]&&(o[R].lastCount=h.length),i[R][g]=Ft(h.length,h.mode)+4+$.getCharCountIndicator(h.mode,e))}}n=l}for(let r=0;r<n.length;r++)i[n[r]].end=0;return{map:i,table:o}}function hr(t,e){let o,i=$.getBestModeForData(t);if(o=$.from(e,i),o!==$.BYTE&&o.bit<i.bit)throw new Error('"'+t+'" cannot be encoded with mode '+$.toString(o)+`.
 Suggested mode is: `+$.toString(i));switch(o===$.KANJI&&!mt.isKanjiModeEnabled()&&(o=$.BYTE),o){case $.NUMERIC:return new fr(t);case $.ALPHANUMERIC:return new mr(t);case $.KANJI:return new wr(t);case $.BYTE:return new gr(t)}}ke.fromArray=function(e){return e.reduce(function(o,i){return typeof i=="string"?o.push(hr(i,null)):i.data&&o.push(hr(i.data,i.mode)),o},[])};ke.fromString=function(e,o){let i=br(e,mt.isKanjiModeEnabled()),n=Wi(i),r=Li(n,o),s=Ti.find_path(r.map,"start","end"),l=[];for(let a=1;a<s.length-1;a++)l.push(r.table[s[a]].node);return ke.fromArray(Ii(l))};ke.rawSplit=function(e){return ke.fromArray(br(e,mt.isKanjiModeEnabled()))}});var Cr=E(xr=>{"use strict";var wt=ae(),Vt=at(),Pi=Lo(),Bi=Bo(),ki=ko(),Ni=Mo(),Gt=Do(),Qt=kt(),Oi=Fo(),gt=Yo(),Mi=tr(),Di=ue(),Ht=yr();function Ui(t,e){let o=t.size,i=Ni.getPositions(e);for(let n=0;n<i.length;n++){let r=i[n][0],s=i[n][1];for(let l=-1;l<=7;l++)if(!(r+l<=-1||o<=r+l))for(let a=-1;a<=7;a++)s+a<=-1||o<=s+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?t.set(r+l,s+a,!0,!0):t.set(r+l,s+a,!1,!0))}}function ji(t){let e=t.size;for(let o=8;o<e-8;o++){let i=o%2===0;t.set(o,6,i,!0),t.set(6,o,i,!0)}}function zi(t,e){let o=ki.getPositions(e);for(let i=0;i<o.length;i++){let n=o[i][0],r=o[i][1];for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)s===-2||s===2||l===-2||l===2||s===0&&l===0?t.set(n+s,r+l,!0,!0):t.set(n+s,r+l,!1,!0)}}function qi(t,e){let o=t.size,i=gt.getEncodedBits(e),n,r,s;for(let l=0;l<18;l++)n=Math.floor(l/3),r=l%3+o-8-3,s=(i>>l&1)===1,t.set(n,r,s,!0),t.set(r,n,s,!0)}function Kt(t,e,o){let i=t.size,n=Mi.getEncodedBits(e,o),r,s;for(r=0;r<15;r++)s=(n>>r&1)===1,r<6?t.set(r,8,s,!0):r<8?t.set(r+1,8,s,!0):t.set(i-15+r,8,s,!0),r<8?t.set(8,i-r-1,s,!0):r<9?t.set(8,15-r-1+1,s,!0):t.set(8,15-r-1,s,!0);t.set(i-8,8,1,!0)}function Fi(t,e){let o=t.size,i=-1,n=o-1,r=7,s=0;for(let l=o-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!t.isReserved(n,l-a)){let h=!1;s<e.length&&(h=(e[s]>>>r&1)===1),t.set(n,l-a,h),r--,r===-1&&(s++,r=7)}if(n+=i,n<0||o<=n){n-=i,i=-i;break}}}function Vi(t,e,o){let i=new Pi;o.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),Di.getCharCountIndicator(a.mode,t)),a.write(i)});let n=wt.getSymbolTotalCodewords(t),r=Qt.getTotalCodewordsCount(t,e),s=(n-r)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);let l=(s-i.getLengthInBits())/8;for(let a=0;a<l;a++)i.put(a%2?17:236,8);return Hi(i,t,e)}function Hi(t,e,o){let i=wt.getSymbolTotalCodewords(e),n=Qt.getTotalCodewordsCount(e,o),r=i-n,s=Qt.getBlocksCount(e,o),l=i%s,a=s-l,h=Math.floor(i/s),g=Math.floor(r/s),B=g+1,R=h-g,V=new Oi(R),q=0,S=new Array(s),x=new Array(s),O=0,v=new Uint8Array(t.buffer);for(let Ee=0;Ee<s;Ee++){let At=Ee<a?g:B;S[Ee]=v.slice(q,q+At),x[Ee]=V.encode(S[Ee]),q+=At,O=Math.max(O,At)}let M=new Uint8Array(i),W=0,k,oe;for(k=0;k<O;k++)for(oe=0;oe<s;oe++)k<S[oe].length&&(M[W++]=S[oe][k]);for(k=0;k<R;k++)for(oe=0;oe<s;oe++)M[W++]=x[oe][k];return M}function Ki(t,e,o,i){let n;if(Array.isArray(t))n=Ht.fromArray(t);else if(typeof t=="string"){let h=e;if(!h){let g=Ht.rawSplit(t);h=gt.getBestVersionForData(g,o)}n=Ht.fromString(t,h||40)}else throw new Error("Invalid data");let r=gt.getBestVersionForData(n,o);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=r;else if(e<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);let s=Vi(e,o,n),l=wt.getSymbolSize(e),a=new Bi(l);return Ui(a,e),ji(a),zi(a,e),Kt(a,o,0),e>=7&&qi(a,e),Fi(a,s),isNaN(i)&&(i=Gt.getBestMask(a,Kt.bind(null,a,o))),Gt.applyMask(i,a),Kt(a,o,i),{modules:a,version:e,errorCorrectionLevel:o,maskPattern:i,segments:n}}xr.create=function(e,o){if(typeof e>"u"||e==="")throw new Error("No input text");let i=Vt.M,n,r;return typeof o<"u"&&(i=Vt.from(o.errorCorrectionLevel,Vt.M),n=gt.from(o.version),r=Gt.from(o.maskPattern),o.toSJISFunc&&wt.setToSJISFunction(o.toSJISFunc)),Ki(e,n,i,r)}});var Jt=E(xe=>{"use strict";function $r(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+t);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(i){return[i,i]}))),e.length===6&&e.push("F","F");let o=parseInt(e.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+e.slice(0,6).join("")}}xe.getOptions=function(e){e||(e={}),e.color||(e.color={});let o=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:o,color:{dark:$r(e.color.dark||"#000000ff"),light:$r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}};xe.getScale=function(e,o){return o.width&&o.width>=e+o.margin*2?o.width/(e+o.margin*2):o.scale};xe.getImageWidth=function(e,o){let i=xe.getScale(e,o);return Math.floor((e+o.margin*2)*i)};xe.qrToImageData=function(e,o,i){let n=o.modules.size,r=o.modules.data,s=xe.getScale(n,i),l=Math.floor((n+i.margin*2)*s),a=i.margin*s,h=[i.color.light,i.color.dark];for(let g=0;g<l;g++)for(let B=0;B<l;B++){let R=(g*l+B)*4,V=i.color.light;if(g>=a&&B>=a&&g<l-a&&B<l-a){let q=Math.floor((g-a)/s),S=Math.floor((B-a)/s);V=h[r[q*n+S]?1:0]}e[R++]=V.r,e[R++]=V.g,e[R++]=V.b,e[R]=V.a}}});var vr=E(bt=>{"use strict";var Yt=Jt();function Gi(t,e,o){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=o,e.width=o,e.style.height=o+"px",e.style.width=o+"px"}function Qi(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}bt.render=function(e,o,i){let n=i,r=o;typeof n>"u"&&(!o||!o.getContext)&&(n=o,o=void 0),o||(r=Qi()),n=Yt.getOptions(n);let s=Yt.getImageWidth(e.modules.size,n),l=r.getContext("2d"),a=l.createImageData(s,s);return Yt.qrToImageData(a.data,e,n),Gi(l,r,s),l.putImageData(a,0,0),r};bt.renderToDataURL=function(e,o,i){let n=i;typeof n>"u"&&(!o||!o.getContext)&&(n=o,o=void 0),n||(n={});let r=bt.render(e,o,n),s=n.type||"image/png",l=n.rendererOpts||{};return r.toDataURL(s,l.quality)}});var Sr=E(Rr=>{"use strict";var Ji=Jt();function Er(t,e){let o=t.a/255,i=e+'="'+t.hex+'"';return o<1?i+" "+e+'-opacity="'+o.toFixed(2).slice(1)+'"':i}function Xt(t,e,o){let i=t+e;return typeof o<"u"&&(i+=" "+o),i}function Yi(t,e,o){let i="",n=0,r=!1,s=0;for(let l=0;l<t.length;l++){let a=Math.floor(l%e),h=Math.floor(l/e);!a&&!r&&(r=!0),t[l]?(s++,l>0&&a>0&&t[l-1]||(i+=r?Xt("M",a+o,.5+h+o):Xt("m",n,0),n=0,r=!1),a+1<e&&t[l+1]||(i+=Xt("h",s),s=0)):n++}return i}Rr.render=function(e,o,i){let n=Ji.getOptions(o),r=e.modules.size,s=e.modules.data,l=r+n.margin*2,a=n.color.light.a?"<path "+Er(n.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",h="<path "+Er(n.color.dark,"stroke")+' d="'+Yi(s,r,n.margin)+'"/>',g='viewBox="0 0 '+l+" "+l+'"',R='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+g+' shape-rendering="crispEdges">'+a+h+`</svg>
`;return typeof i=="function"&&i(null,R),R}});var Ar=E(Qe=>{"use strict";var Xi=To(),Zt=Cr(),_r=vr(),Zi=Sr();function eo(t,e,o,i,n){let r=[].slice.call(arguments,1),s=r.length,l=typeof r[s-1]=="function";if(!l&&!Xi())throw new Error("Callback required as last argument");if(l){if(s<2)throw new Error("Too few arguments provided");s===2?(n=o,o=e,e=i=void 0):s===3&&(e.getContext&&typeof n>"u"?(n=i,i=void 0):(n=i,i=o,o=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(o=e,e=i=void 0):s===2&&!e.getContext&&(i=o,o=e,e=void 0),new Promise(function(a,h){try{let g=Zt.create(o,i);a(t(g,e,i))}catch(g){h(g)}})}try{let a=Zt.create(o,i);n(null,t(a,e,i))}catch(a){n(a)}}Qe.create=Zt.create;Qe.toCanvas=eo.bind(null,_r.render);Qe.toDataURL=eo.bind(null,_r.renderToDataURL);Qe.toString=eo.bind(null,function(t,e,o){return Zi.render(t,o)})});var _e=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},he=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=D.state.connectors,this.count=_.state.count,this.filteredCount=_.state.filteredWallets.length,this.isFetchingRecommendedWallets=_.state.isFetchingRecommendedWallets,this.unsubscribe.push(D.subscribeKey("connectors",e=>this.connectors=e),_.subscribeKey("count",e=>this.count=e),_.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),_.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(h=>h.id==="walletConnect"),{allWallets:o}=P.state;if(!e||o==="HIDE"||o==="ONLY_MOBILE"&&!b.isMobile())return null;let i=_.state.featured.length,n=this.count+i,r=n<10?n:Math.floor(n/10)*10,s=this.filteredCount>0?this.filteredCount:r,l=`${s}`;this.filteredCount>0?l=`${this.filteredCount}`:s<n&&(l=`${s}+`);let a=w.hasAnyConnection(De.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${C(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${a}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){I.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),m.push("AllWallets",{redirectView:m.state.data?.redirectView})}};_e([u()],he.prototype,"tabIdx",void 0);_e([p()],he.prototype,"connectors",void 0);_e([p()],he.prototype,"count",void 0);_e([p()],he.prototype,"filteredCount",void 0);_e([p()],he.prototype,"isFetchingRecommendedWallets",void 0);he=_e([d("w3m-all-wallets-widget")],he);var wo=y`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var Ae=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},le=class extends f{constructor(){super(),this.unsubscribe=[],this.explorerWallets=_.state.explorerWallets,this.connections=w.state.connections,this.connectorImages=Tt.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(w.subscribeKey("connections",e=>this.connections=e),Tt.subscribeKey("connectorImages",e=>this.connectorImages=e),_.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:_.state.explorerWallets}),_.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),b.isTelegram()&&b.isIos()&&(this.loadingTelegram=!w.state.wcUri,this.unsubscribe.push(w.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return ao.connectorList().map((e,o)=>e.kind==="connector"?this.renderConnector(e,o):this.renderWallet(e,o))}getConnectorNamespaces(e){return e.subtype==="walletConnect"?[]:e.subtype==="multiChain"?e.connector.connectors?.map(o=>o.chain)||[]:[e.connector.chain]}renderConnector(e,o){let i=e.connector,n=F.getConnectorImage(i)||this.connectorImages[i?.imageId??""],s=(this.connections.get(i.chain)??[]).some(B=>po.isLowerCaseMatch(B.connectorId,i.id)),l,a;e.subtype==="walletConnect"?(l="qr code",a="accent"):e.subtype==="injected"||e.subtype==="announced"?(l=s?"connected":"installed",a=s?"info":"success"):(l=void 0,a=void 0);let h=w.hasAnyConnection(De.CONNECTOR_ID.WALLET_CONNECT),g=e.subtype==="walletConnect"||e.subtype==="external"?h:!1;return c`
      <w3m-list-wallet
        displayIndex=${o}
        imageSrc=${C(n)}
        .installed=${!0}
        name=${i.name??"Unknown"}
        .tagVariant=${a}
        tagLabel=${C(l)}
        data-testid=${`wallet-selector-${i.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${C(this.tabIdx)}
        ?disabled=${g}
        rdnsId=${C(i.explorerWallet?.rdns||void 0)}
        walletRank=${C(i.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let o=m.state.data?.redirectView;if(e.subtype==="walletConnect"){D.setActiveConnector(e.connector),b.isMobile()?m.push("AllWallets"):m.push("ConnectingWalletConnect",{redirectView:o});return}if(e.subtype==="multiChain"){D.setActiveConnector(e.connector),m.push("ConnectingMultiChain",{redirectView:o});return}if(e.subtype==="injected"){D.setActiveConnector(e.connector),m.push("ConnectingExternal",{connector:e.connector,redirectView:o,wallet:e.connector.explorerWallet});return}if(e.subtype==="announced"){if(e.connector.id==="walletConnect"){b.isMobile()?m.push("AllWallets"):m.push("ConnectingWalletConnect",{redirectView:o});return}m.push("ConnectingExternal",{connector:e.connector,redirectView:o,wallet:e.connector.explorerWallet});return}m.push("ConnectingExternal",{connector:e.connector,redirectView:o})}renderWallet(e,o){let i=e.wallet,n=F.getWalletImage(i),s=w.hasAnyConnection(De.CONNECTOR_ID.WALLET_CONNECT),l=this.loadingTelegram,a=e.subtype==="recent"?"recent":void 0,h=e.subtype==="recent"?"info":void 0;return c`
      <w3m-list-wallet
        displayIndex=${o}
        imageSrc=${C(n)}
        name=${i.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${i.id}`}
        tabIdx=${C(this.tabIdx)}
        ?loading=${l}
        ?disabled=${s}
        rdnsId=${C(i.rdns||void 0)}
        walletRank=${C(i.order)}
        tagLabel=${C(a)}
        .tagVariant=${h}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let o=m.state.data?.redirectView,i=Y.state.activeChain;if(e.subtype==="featured"){D.selectWalletConnector(e.wallet);return}if(e.subtype==="recent"){if(this.loadingTelegram)return;D.selectWalletConnector(e.wallet);return}if(e.subtype==="custom"){if(this.loadingTelegram)return;m.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:o});return}if(this.loadingTelegram)return;let n=i?D.getConnector({id:e.wallet.id,namespace:i}):void 0;n?m.push("ConnectingExternal",{connector:n,redirectView:o}):m.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:o})}};le.styles=wo;Ae([u({type:Number})],le.prototype,"tabIdx",void 0);Ae([p()],le.prototype,"explorerWallets",void 0);Ae([p()],le.prototype,"connections",void 0);Ae([p()],le.prototype,"connectorImages",void 0);Ae([p()],le.prototype,"loadingTelegram",void 0);le=Ae([d("w3m-connector-list")],le);var bo=y`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    column-gap: ${({spacing:t})=>t[1]};
    color: ${({tokens:t})=>t.theme.textSecondary};
    border-radius: ${({borderRadius:t})=>t[20]};
    background-color: transparent;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:t})=>t.theme.textPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:t})=>t.theme.textPrimary};
    }
  }
`;var je=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},oi={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ri={lg:"md",md:"sm",sm:"sm"},fe=class extends f{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return c`
      <button data-active=${this.active}>
        ${this.icon?c`<wui-icon size=${ri[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${oi[this.size]}> ${this.label} </wui-text>
      </button>
    `}};fe.styles=[L,U,bo];je([u()],fe.prototype,"icon",void 0);je([u()],fe.prototype,"size",void 0);je([u()],fe.prototype,"label",void 0);je([u({type:Boolean})],fe.prototype,"active",void 0);fe=je([d("wui-tab-item")],fe);var yo=y`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[32]};
    padding: ${({spacing:t})=>t["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var ze=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},me=class extends f{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,o)=>{let i=o===this.activeTab;return c`
        <wui-tab-item
          @click=${()=>this.onTabClick(o)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};me.styles=[L,U,yo];ze([u({type:Array})],me.prototype,"tabs",void 0);ze([u()],me.prototype,"onTabChange",void 0);ze([u()],me.prototype,"size",void 0);ze([p()],me.prototype,"activeTab",void 0);me=ze([d("wui-tabs")],me);var Lt=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},it=class extends f{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return c`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(o=>o==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:o==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:o==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:o==="web"?{label:"Webapp",icon:"browser",platform:"web"}:o==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:o})=>o),e}onTabChange(e){let o=this.platformTabs[e];o&&this.onSelectPlatfrom?.(o)}};Lt([u({type:Array})],it.prototype,"platforms",void 0);Lt([u()],it.prototype,"onSelectPlatfrom",void 0);it=Lt([d("w3m-connecting-header")],it);var xo=y`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${t=>t.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Co=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},nt=class extends f{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,i=36-e,n=116+i,r=245+i,s=360+i*1.75;return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${n} ${r}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};nt.styles=[L,xo];Co([u({type:Number})],nt.prototype,"radius",void 0);nt=Co([d("wui-loading-thumbnail")],nt);var $o=y`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    padding-left: ${({spacing:t})=>t[3]};
    padding-right: ${({spacing:t})=>t[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[6]};
  }

  wui-text {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var st=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},Te=class extends f{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return c`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Te.styles=[L,U,$o];st([u({type:Boolean})],Te.prototype,"disabled",void 0);st([u()],Te.prototype,"label",void 0);st([u()],Te.prototype,"buttonLabel",void 0);Te=st([d("wui-cta-button")],Te);var vo=y`
  :host {
    display: block;
    padding: 0 ${({spacing:t})=>t[5]} ${({spacing:t})=>t[5]};
  }
`;var Eo=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},lt=class extends f{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:o,play_store:i,chrome_store:n,homepage:r}=this.wallet,s=b.isMobile(),l=b.isIos(),a=b.isAndroid(),h=[o,i,r,n].filter(Boolean).length>1,g=X.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return h&&!s?c`
        <wui-cta-button
          label=${`Don't have ${g}?`}
          buttonLabel="Get"
          @click=${()=>m.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&r?c`
        <wui-cta-button
          label=${`Don't have ${g}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:o&&l?c`
        <wui-cta-button
          label=${`Don't have ${g}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&a?c`
        <wui-cta-button
          label=${`Don't have ${g}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&b.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&b.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&b.openHref(this.wallet.homepage,"_blank")}};lt.styles=[vo];Eo([u({type:Object})],lt.prototype,"wallet",void 0);lt=Eo([d("w3m-mobile-download-links")],lt);var Ro=y`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:t})=>t.lg};
    transition-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var Z=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},T=class extends f{constructor(){super(),this.wallet=m.state.data?.wallet,this.connector=m.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=F.getConnectorImage(this.connector)??F.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=w.state.wcUri,this.error=w.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(w.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),w.subscribeKey("wcError",e=>this.error=e)),(b.isTelegram()||b.isSafari())&&b.isIos()&&w.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),w.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,o="";return this.label?o=this.label:(o=`Continue in ${this.name}`,this.error&&(o="Connection declined")),c`
      <wui-flex
        data-error=${C(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${C(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${o}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?c`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?c`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){w.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=Re.state.themeVariables["--w3m-border-radius-master"],o=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${o*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(b.copyToClopboard(this.uri),se.showSuccess("Link copied"))}catch{se.showError("Failed to copy")}}};T.styles=Ro;Z([p()],T.prototype,"isRetrying",void 0);Z([p()],T.prototype,"uri",void 0);Z([p()],T.prototype,"error",void 0);Z([p()],T.prototype,"ready",void 0);Z([p()],T.prototype,"showRetry",void 0);Z([p()],T.prototype,"label",void 0);Z([p()],T.prototype,"secondaryBtnLabel",void 0);Z([p()],T.prototype,"secondaryLabel",void 0);Z([p()],T.prototype,"isLoading",void 0);Z([u({type:Boolean})],T.prototype,"isMobile",void 0);Z([u()],T.prototype,"onRetry",void 0);var ii=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},So=class extends T{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),I.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.state.view}})}onConnectProxy(){return J(this,null,function*(){try{this.error=!1;let{connectors:e}=D.state,o=e.find(i=>i.type==="ANNOUNCED"&&i.info?.rdns===this.wallet?.rdns||i.type==="INJECTED"||i.name===this.wallet?.name);if(o)yield w.connectExternal(o,o.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");ot.close()}catch(e){e instanceof tt&&e.originalName===Ze.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?I.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):I.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}})}};So=ii([d("w3m-connecting-wc-browser")],So);var ni=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},_o=class extends T{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),I.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:o}=this.wallet,{redirect:i,href:n}=b.formatNativeUrl(e,this.uri);w.setWcLinking({name:o,href:n}),w.setRecentWallet(this.wallet),b.openHref(i,"_blank")}catch{this.error=!0}}};_o=ni([d("w3m-connecting-wc-desktop")],_o);var Ie=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},ge=class extends T{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=P.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{co.onConnectMobile(this.wallet)},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=et.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(w.subscribeKey("wcUri",()=>{this.onHandleURI()})),I.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){w.setWcError(!1),this.onConnect?.()}};Ie([p()],ge.prototype,"redirectDeeplink",void 0);Ie([p()],ge.prototype,"redirectUniversalLink",void 0);Ie([p()],ge.prototype,"target",void 0);Ie([p()],ge.prototype,"preferUniversalLinks",void 0);Ie([p()],ge.prototype,"isLoading",void 0);ge=Ie([d("w3m-connecting-wc-mobile")],ge);var Ir=ei(Ar(),1);var en=.1,Tr=2.5,ie=7;function to(t,e,o){return t===e?!1:(t-e<0?e-t:t-e)<=o+en}function tn(t,e){let o=Array.prototype.slice.call(Ir.default.create(t,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(o.length);return o.reduce((n,r,s)=>(s%i===0?n.push([r]):n[n.length-1].push(r))&&n,[])}var Wr={generate({uri:t,size:e,logoSize:o,padding:i=8,dotColor:n="var(--apkt-colors-black)"}){let s=[],l=tn(t,"Q"),a=(e-2*i)/l.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:S,y:x})=>{let O=(l.length-ie)*a*S+i,v=(l.length-ie)*a*x+i,M=.45;for(let W=0;W<h.length;W+=1){let k=a*(ie-W*2);s.push(Se`
            <rect
              fill=${W===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${W===0?k-10:k}
              rx= ${W===0?(k-10)*M:k*M}
              ry= ${W===0?(k-10)*M:k*M}
              stroke=${n}
              stroke-width=${W===0?10:0}
              height=${W===0?k-10:k}
              x= ${W===0?v+a*W+10/2:v+a*W}
              y= ${W===0?O+a*W+10/2:O+a*W}
            />
          `)}});let g=Math.floor((o+25)/a),B=l.length/2-g/2,R=l.length/2+g/2-1,V=[];l.forEach((S,x)=>{S.forEach((O,v)=>{if(l[x][v]&&!(x<ie&&v<ie||x>l.length-(ie+1)&&v<ie||x<ie&&v>l.length-(ie+1))&&!(x>B&&x<R&&v>B&&v<R)){let M=x*a+a/2+i,W=v*a+a/2+i;V.push([M,W])}})});let q={};return V.forEach(([S,x])=>{q[S]?q[S]?.push(x):q[S]=[x]}),Object.entries(q).map(([S,x])=>{let O=x.filter(v=>x.every(M=>!to(v,M,a)));return[Number(S),O]}).forEach(([S,x])=>{x.forEach(O=>{s.push(Se`<circle cx=${S} cy=${O} fill=${n} r=${a/Tr} />`)})}),Object.entries(q).filter(([S,x])=>x.length>1).map(([S,x])=>{let O=x.filter(v=>x.some(M=>to(v,M,a)));return[Number(S),O]}).map(([S,x])=>{x.sort((v,M)=>v<M?-1:1);let O=[];for(let v of x){let M=O.find(W=>W.some(k=>to(v,k,a)));M?M.push(v):O.push([v])}return[S,O.map(v=>[v[0],v[v.length-1]])]}).forEach(([S,x])=>{x.forEach(([O,v])=>{s.push(Se`
              <line
                x1=${S}
                x2=${S}
                y1=${O}
                y2=${v}
                stroke=${n}
                stroke-width=${a/(Tr/2)}
                stroke-linecap="round"
              />
            `)})}),s}};var Lr=y`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:t})=>t.white};
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:t})=>t[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: ${({borderRadius:t})=>t[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var pe=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},ee=class extends f{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),c`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return Se`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Wr.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ee.styles=[L,Lr];pe([u()],ee.prototype,"uri",void 0);pe([u({type:Number})],ee.prototype,"size",void 0);pe([u()],ee.prototype,"theme",void 0);pe([u()],ee.prototype,"imageSrc",void 0);pe([u()],ee.prototype,"alt",void 0);pe([u({type:Boolean})],ee.prototype,"arenaClear",void 0);pe([u({type:Boolean})],ee.prototype,"farcaster",void 0);ee=pe([d("wui-qr-code")],ee);var Pr=y`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Br=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},yt=class extends T{constructor(){super(),this.basic=!1}firstUpdated(){this.basic||I.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.wallet?this.wallet.name:void 0;w.setWcLinking(void 0),w.setRecentWallet(this.wallet);let o=Re.state.themeVariables["--apkt-qr-color"]??Re.state.themeVariables["--w3m-qr-color"];return c` <wui-qr-code
      theme=${Re.state.themeMode}
      uri=${this.uri}
      imageSrc=${C(F.getWalletImage(this.wallet))}
      color=${C(o)}
      alt=${C(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return c`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};yt.styles=Pr;Br([u({type:Boolean})],yt.prototype,"basic",void 0);yt=Br([d("w3m-connecting-wc-qrcode")],yt);var on=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},kr=class extends f{constructor(){if(super(),this.wallet=m.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");I.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.state.view}})}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${C(F.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};kr=on([d("w3m-connecting-wc-unsupported")],kr);var Nr=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},oo=class extends T{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=et.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(w.subscribeKey("wcUri",()=>{this.updateLoadingState()})),I.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:o}=this.wallet,{redirect:i,href:n}=b.formatUniversalUrl(e,this.uri);w.setWcLinking({name:o,href:n}),w.setRecentWallet(this.wallet),b.openHref(i,"_blank")}catch{this.error=!0}}};Nr([p()],oo.prototype,"isLoading",void 0);oo=Nr([d("w3m-connecting-wc-web")],oo);var Or=y`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Ce=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},ne=class extends f{constructor(){super(),this.wallet=m.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!P.state.siwx,this.remoteFeatures=P.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(P.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return P.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),c`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:c`<wui-ux-by-reown></wui-ux-by-reown>`}initializeConnection(e=!1){return J(this,null,function*(){if(!(this.platform==="browser"||P.state.manualWCControl&&!e))try{let{wcPairingExpiry:o,status:i}=w.state,{redirectView:n}=m.state.data??{};if(e||P.state.enableEmbedded||b.isPairingExpired(o)||i==="connecting"){let r=w.getConnections(Y.state.activeChain),s=this.remoteFeatures?.multiWallet,l=r.length>0;yield w.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(l&&s?(m.replace("ProfileWallets"),se.showSuccess("New Wallet Added")):n?m.replace(n):ot.close())}}catch(o){if(o instanceof Error&&o.message.includes("An error occurred when attempting to switch chain")&&!P.state.enableNetworkSwitch&&Y.state.activeChain){Y.setActiveCaipNetwork(ho.getUnsupportedNetwork(`${Y.state.activeChain}:${Y.state.activeCaipNetwork?.id}`)),Y.showUnsupportedChainUI();return}o instanceof tt&&o.originalName===Ze.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?I.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:o.message}}):I.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:o?.message??"Unknown"}}),w.setWcError(!0),se.showError(o.message??"Connection error"),w.resetWcConnection(),m.goBack()}})}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:o,webapp_link:i,injected:n,rdns:r}=this.wallet,s=n?.map(({injected_id:q})=>q).filter(Boolean),l=[...r?[r]:s??[]],a=P.state.isUniversalProvider?!1:l.length,h=e,g=i,B=w.checkInstalled(l),R=a&&B,V=o&&!b.isMobile();R&&!Y.state.noAdapters&&this.platforms.push("browser"),h&&this.platforms.push(b.isMobile()?"mobile":"qrcode"),g&&this.platforms.push("web"),V&&this.platforms.push("desktop"),!R&&a&&!Y.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return c`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return c`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}onSelectPlatform(e){return J(this,null,function*(){let o=this.shadowRoot?.querySelector("div");o&&(yield o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})}};ne.styles=Or;Ce([p()],ne.prototype,"platform",void 0);Ce([p()],ne.prototype,"platforms",void 0);Ce([p()],ne.prototype,"isSiwxEnabled",void 0);Ce([p()],ne.prototype,"remoteFeatures",void 0);Ce([u({type:Boolean})],ne.prototype,"displayBranding",void 0);Ce([u({type:Boolean})],ne.prototype,"basic",void 0);ne=Ce([d("w3m-connecting-wc-view")],ne);var ro=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},xt=class extends f{constructor(){super(),this.unsubscribe=[],this.isMobile=b.isMobile(),this.remoteFeatures=P.state.remoteFeatures,this.unsubscribe.push(P.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:o}=_.state,{customWallets:i}=P.state,n=lo.getRecentWallets(),r=e.length||o.length||i?.length||n.length;return c`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${r?c`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return c`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?c` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};ro([p()],xt.prototype,"isMobile",void 0);ro([p()],xt.prototype,"remoteFeatures",void 0);xt=ro([d("w3m-connecting-wc-basic-view")],xt);var{I:_c}=uo;var Mr=t=>t.strings===void 0;var Je=(t,e)=>{let o=t._$AN;if(o===void 0)return!1;for(let i of o)i._$AO?.(e,!1),Je(i,e);return!0},Ct=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},Dr=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),sn(e)}};function rn(t){this._$AN!==void 0?(Ct(this),this._$AM=t,Dr(this)):this._$AM=t}function nn(t,e=!1,o=0){let i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=o;r<i.length;r++)Je(i[r],!1),Ct(i[r]);else i!=null&&(Je(i,!1),Ct(i));else Je(this,t)}var sn=t=>{t.type==fo.CHILD&&(t._$AP??=nn,t._$AQ??=rn)},$t=class extends mo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,i){super._$AT(e,o,i),Dr(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(Je(this,e),Ct(this))}setValue(e){if(Mr(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}};var Ne=()=>new no,no=class{},io=new WeakMap,Oe=Wt(class extends $t{render(t){return It}update(t,[e]){let o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),It}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,o=io.get(e);o===void 0&&(o=new WeakMap,io.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?io.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ur=y`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:t})=>t.neutrals300};
    border-radius: ${({borderRadius:t})=>t.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:t})=>t.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    background-color: ${({tokens:t})=>t.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:t})=>t.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:t})=>t.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:t})=>t.theme.textTertiary};
  }
`;var vt=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},Me=class extends f{constructor(){super(...arguments),this.inputElementRef=Ne(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return c`
      <label data-size=${this.size}>
        <input
          ${Oe(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Me.styles=[L,U,Ur];vt([u({type:Boolean})],Me.prototype,"checked",void 0);vt([u({type:Boolean})],Me.prototype,"disabled",void 0);vt([u()],Me.prototype,"size",void 0);Me=vt([d("wui-toggle")],Me);var jr=y`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.theme.foregroundPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var zr=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},Et=class extends f{constructor(){super(...arguments),this.checked=!1}render(){return c`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Et.styles=[L,U,jr];zr([u({type:Boolean})],Et.prototype,"checked",void 0);Et=zr([d("wui-certified-switch")],Et);var qr=y`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:t})=>t[3]};
    color: ${({tokens:t})=>t.theme.textPrimary};
    caret-color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:t})=>t[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
    caret-color: ${({tokens:t})=>t.core.textAccentPrimary};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[3]}
      ${({spacing:t})=>t[3]} ${({spacing:t})=>t[10]};
    font-size: ${({textSize:t})=>t.large};
    line-height: ${({typography:t})=>t["lg-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:t})=>t[4]} ${({spacing:t})=>t[3]}
      ${({spacing:t})=>t[4]} ${({spacing:t})=>t[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:t})=>t[4]};
    color: ${({tokens:t})=>t.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:t})=>t[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:t})=>t[2]};
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:t})=>t[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var K=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},j=class extends f{constructor(){super(...arguments),this.inputElementRef=Ne(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return c` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${Oe(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${C(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?c`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?c`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?c`<wui-icon name="spinner" size="md"></wui-icon>`:c`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?c`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?c`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};j.styles=[L,U,qr];K([u()],j.prototype,"icon",void 0);K([u({type:Boolean})],j.prototype,"disabled",void 0);K([u({type:Boolean})],j.prototype,"loading",void 0);K([u()],j.prototype,"placeholder",void 0);K([u()],j.prototype,"type",void 0);K([u()],j.prototype,"value",void 0);K([u()],j.prototype,"errorText",void 0);K([u()],j.prototype,"warningText",void 0);K([u()],j.prototype,"onSubmit",void 0);K([u()],j.prototype,"size",void 0);K([u({attribute:!1})],j.prototype,"onKeyDown",void 0);j=K([d("wui-input-text")],j);var Fr=y`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:t})=>t[3]};
    color: ${({tokens:t})=>t.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:t})=>t[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }
`;var Vr=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},Rt=class extends f{constructor(){super(...arguments),this.inputComponentRef=Ne(),this.inputValue=""}render(){return c`
      <wui-input-text
        ${Oe(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?c`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){let o=this.inputComponentRef.value?.inputElementRef.value;o&&(o.value="",this.inputValue="",o.focus(),o.dispatchEvent(new Event("input")))}};Rt.styles=[L,Fr];Vr([u()],Rt.prototype,"inputValue",void 0);Rt=Vr([d("wui-search-bar")],Rt);var Hr=y`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:t})=>t.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Kr=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},St=class extends f{constructor(){super(...arguments),this.type="wallet"}render(){return c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?c` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${go}`:c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};St.styles=[L,U,Hr];Kr([u()],St.prototype,"type",void 0);St=Kr([d("wui-card-select-loader")],St);var Gr=rt`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var G=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},z=class extends f{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&X.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&X.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&X.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&X.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&X.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&X.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&X.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&X.getSpacingStyles(this.margin,3)};
    `,c`<slot></slot>`}};z.styles=[L,Gr];G([u()],z.prototype,"gridTemplateRows",void 0);G([u()],z.prototype,"gridTemplateColumns",void 0);G([u()],z.prototype,"justifyItems",void 0);G([u()],z.prototype,"alignItems",void 0);G([u()],z.prototype,"justifyContent",void 0);G([u()],z.prototype,"alignContent",void 0);G([u()],z.prototype,"columnGap",void 0);G([u()],z.prototype,"rowGap",void 0);G([u()],z.prototype,"gap",void 0);G([u()],z.prototype,"padding",void 0);G([u()],z.prototype,"margin",void 0);z=G([d("wui-grid")],z);var Qr=y`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[0]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:t})=>t[4]}, 20px);
    transition:
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-1"]},
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]},
      border-radius ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:t})=>t.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:t})=>t.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:t})=>t.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:t})=>t.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:t})=>t.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var te=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},Q=class extends f{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${C(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():c`
      <wui-wallet-image
        size="lg"
        imageSrc=${C(this.imageSrc)}
        name=${C(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}fetchImageSrc(){return J(this,null,function*(){this.wallet&&(this.imageSrc=F.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=yield F.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))})}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,I.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:m.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Q.styles=Qr;te([p()],Q.prototype,"visible",void 0);te([p()],Q.prototype,"imageSrc",void 0);te([p()],Q.prototype,"imageLoading",void 0);te([p()],Q.prototype,"isImpressed",void 0);te([u()],Q.prototype,"explorerId",void 0);te([u()],Q.prototype,"walletQuery",void 0);te([u()],Q.prototype,"certified",void 0);te([u()],Q.prototype,"displayIndex",void 0);te([u({type:Object})],Q.prototype,"wallet",void 0);Q=te([d("w3m-all-wallets-list-item")],Q);var Jr=y`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:t})=>t[4]};
    padding-bottom: ${({spacing:t})=>t[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Ye=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},Yr="local-paginator",$e=class extends f{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!_.state.wallets.length,this.wallets=_.state.wallets,this.mobileFullScreen=P.state.enableMobileFullScreen,this.unsubscribe.push(_.subscribeKey("wallets",e=>this.wallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}initialFetch(){return J(this,null,function*(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(yield _.fetchWalletsByPage({page:1}),yield e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})}shimmerTemplate(e,o){return[...Array(e)].map(()=>c`
        <wui-card-select-loader type="wallet" id=${C(o)}></wui-card-select-loader>
      `)}walletsTemplate(){return Ue.getWalletConnectWallets(this.wallets).map((e,o)=>c`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${this.badge==="certified"}
          displayIndex=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:o,featured:i,count:n,mobileFilteredOutWalletsLength:r}=_.state,s=window.innerWidth<352?3:4,l=e.length+o.length,h=Math.ceil(l/s)*s-l+s;return h-=e.length?i.length%s:0,n===0&&i.length>0?null:n===0||[...i,...e,...o].length<n-(r??0)?this.shimmerTemplate(h,Yr):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${Yr}`);e&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o?.isIntersecting&&!this.loading){let{page:i,count:n,wallets:r}=_.state;r.length<n&&_.fetchWalletsByPage({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){D.selectWalletConnector(e)}};$e.styles=Jr;Ye([p()],$e.prototype,"loading",void 0);Ye([p()],$e.prototype,"wallets",void 0);Ye([p()],$e.prototype,"badge",void 0);Ye([p()],$e.prototype,"mobileFullScreen",void 0);$e=Ye([d("w3m-all-wallets-list")],$e);var Xr=rt`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Xe=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},ve=class extends f{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=P.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?c`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}onSearch(){return J(this,null,function*(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,yield _.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)})}walletsTemplate(){let{search:e}=_.state,o=Ue.markWalletsAsInstalled(e),i=Ue.filterWalletsByWcSupport(o);return i.length?c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map((n,r)=>c`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(n)}
              .wallet=${n}
              data-testid="wallet-search-item-${n.id}"
              explorerId=${n.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${r}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){D.selectWalletConnector(e)}};ve.styles=Xr;Xe([p()],ve.prototype,"loading",void 0);Xe([p()],ve.prototype,"mobileFullScreen",void 0);Xe([u()],ve.prototype,"query",void 0);Xe([u()],ve.prototype,"badge",void 0);ve=Xe([d("w3m-all-wallets-search")],ve);var so=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},_t=class extends f{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=b.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return c`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?c`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:c`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",se.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return b.isMobile()?c`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){m.push("ConnectingWalletConnect")}};so([p()],_t.prototype,"search",void 0);so([p()],_t.prototype,"badge",void 0);_t=so([d("w3m-all-wallets-view")],_t);var ln=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},Zr=class extends f{constructor(){super(...arguments),this.wallet=m.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return c`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(I.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),b.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Zr=ln([d("w3m-downloads-view")],Zr);export{_t as W3mAllWalletsView,xt as W3mConnectingWcBasicView,Zr as W3mDownloadsView};
