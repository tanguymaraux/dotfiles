"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2342],{38781:(e,a,n)=>{n.d(a,{g:()=>r});var t=n(29482),i=n(60454),s=n(11527);const r=({children:e})=>(0,s.jsx)(t.D,{variant:"mesto",className:i.Z.pretitle,children:e})},34190:(e,a,n)=>{n.d(a,{x:()=>u});var t=n(50959),i=n(2507),s=n(6401),r=n(65646),l=n(90870),o=n(22171),c=n(78056),d=n(11527);const u=({children:e,action:a,uri:n})=>{const u=(0,s.g)(),m=(0,l.j)();let g;const h=()=>{const e={triggerId:c.K,triggerAction:{type:a}};o.y.set((a=>({...a,...e}))),m.storeAction(r.wH,{operation:i.pT.ADD,uris:[n]})};try{g=t.Children.only(e)}catch(a){return(0,d.jsx)(d.Fragment,{children:e})}return u?t.cloneElement(g,{onClick:h}):(0,d.jsx)(d.Fragment,{children:e})}},54390:(e,a,n)=>{n.d(a,{J:()=>K,IB:()=>m});var t=n(40587),i=n(5311),s=n(58665),r=n(98246),l=n(42148);n(95101),n(42826);let o=function(e){return e.LFC="lfc",e.TRACK_INTERNAL_LINK_RECOMMENDER="track-ilr",e}({}),c=function(e){return e.CONTROL="0",e.VARIANT="1",e}({});var d=n(74818),u=n(51145);const m=(e,a)=>{const n=(0,i.TH)(),m=(0,s.W6)(d._ci),g=(0,r.vI)(l.k.LFC,n),h="track"===a?u.aj:u.M4,p=((e,a)=>(({treatment:e,entityId:a,experimentId:n,treatmentVariation:t})=>{if(e&&e[a]){const i=e[a].find((e=>e.experimentId===n));return i?.treatment===t}return!1})({treatment:e,entityId:a,experimentId:o.LFC,treatmentVariation:c.VARIANT}))((0,t.v9)(h)||{},e);return p||m===d.nm0.VARIANT||g};var g=n(50959),h=n(16373),p=n(46034),x=n(39253),k=n(3209);function v(e,a,n){try{(0,p.sQ)({metric_type:h.MetricTypes.COUNTER,what:"request-rate",value:1,tags:{endpoint:e,statusCode:a,isFatal:n}}).catch((()=>({})))}catch(e){}}class j extends k.c{build(){const e=super.build();return e.onAfterSend=a=>{let n="unknown",t=!1;if(null!==e.endpointIdentifier&&(t=!0,n=`${e.method} ${e.hostIdentifier||"unknown-host"}::${e.endpointIdentifier}`),a)throw t&&v(n,JSON.stringify(a.status||0),JSON.stringify(0===(e.endpointIdentifier||"").indexOf("/me"))),x.m.fromResponse(a,e.method);if(t){v(n,"200","false");const a=Date.now()-(e.startTimestamp||0);!function(e,a,n){try{(0,p.sQ)({metric_type:h.MetricTypes.TIMER,what:"request-duration",value:n,tags:{endpoint:e,statusCode:a}}).catch((()=>({})))}catch(e){}}(n,"200",h.Time.fromMillis(a).asNanos())}},e}}var b=n(86496);let f=null;class y{static setSession(e){if(!e)return;const{accessToken:a}=e,n=this.getInstance();n.accessToken=a,a||n.resetPendingRequests()}static setLocale(e){this.getInstance().locale=e}static setMarket(e){this.getInstance().market=e}static resetInstance(){f=null}static getInstance(){return f||(f=this.createNew()),f}static createNew(){return new j(b.e)}}var N=n(57983);const C=e=>(0,g.useCallback)((async()=>N.rd.getGeneratedContent(y.getInstance(),e).then((e=>e.body.content))),[e]);var S=n(29024),I=n(29482),M=n(98900);n(99692);const w="expandable-description-for-seo";var T=n(84875),A=n.n(T);const U="kJFJjpbeZmhT7WG2KjAM",F="gPrYeH86UvcjOx_NQYwp",P="Zf6ONkng2h6eGJg9d4l_",D="G2RRgu_U4ZPugC9x8Vuh",L="BmLmBhY6zS0mTzoMTvQA",R="dvKxmtfViMbQHGD2OUYz",O="LzDWAa70LpBOSMc_ATzA",E="Z5EIr8RoSgmXMt0y9VsS";var V=n(11527);const B=({open:e,content:a})=>{const n=a.slice(0,3),t=a.slice(3);return(0,V.jsxs)(I.D,{as:"ul",className:D,children:[n.map((e=>(0,V.jsxs)(I.D,{as:"li",className:L,variant:"ballad",children:[e,"‎"]},e))),t.map((a=>(0,V.jsxs)(I.D,{as:"li",variant:"ballad",className:A()(L,R,{[O]:e}),"aria-hidden":!e,children:[a,"‎"]},a)))]})},z=({open:e,handleClick:a})=>(0,V.jsx)("button",{className:P,onClick:a,"aria-controls":w,"aria-owns":w,children:(0,V.jsx)(I.D,{variant:"balladBold",className:E,children:e?M.ag.get("show_less"):`…${M.ag.get("show_more")}`})}),_=g.memo((function({content:e}){const[a,n]=(0,g.useState)(!1),t=JSON.parse(e);return t.length<=3?(0,V.jsx)("div",{className:U,children:(0,V.jsx)("ul",{className:F,children:t.map((e=>(0,V.jsx)("li",{children:(0,V.jsx)(I.D,{as:"p",semanticColor:"textSubdued",variant:"ballad",children:e})},e)))})}):(0,V.jsxs)("div",{className:U,"aria-expanded":a,id:w,children:[(0,V.jsx)(B,{open:a,content:t}),(0,V.jsx)(z,{open:a,handleClick:()=>{n(!a)}})]})})),Q="tVC0kqa47RaVQswbGMlb",q="MuJCRvpejZ78QxtxndMr",Z="zFSqh4BTsowiCKPrd1EN",K=({title:e,uri:a})=>{const[n,t]=(0,g.useState)(""),i=C(a);return(0,g.useEffect)((()=>{!async function(){try{const e=await i();t(e)}catch(e){}}()}),[i]),n&&0!==n.length?(0,V.jsxs)("div",{className:Q,children:[(0,V.jsxs)("div",{className:q,children:[(0,V.jsx)(S.W,{size:"small",semanticColor:"textSubdued",className:Z}),(0,V.jsx)(I.D,{variant:"mesto",as:"p",children:M.ag.get("lfc.disclaimer")})]}),(0,V.jsx)(I.D,{variant:"canon",as:"h1",semanticColor:"textBase",children:e}),(0,V.jsx)(_,{content:n})]}):null}},27117:(e,a,n)=>{n.d(a,{k:()=>r});n(99692);var t=n(29482);const i="rTMkDBDp47Eo12ZEQv4U";var s=n(11527);const r=({copyrights:e,courtesyLine:a})=>{const n=(e||[]).map(((e,a)=>{const n=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let i;return i="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,s.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:`${i} ${n}`},a)}));return a&&n.unshift((0,s.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:a},n.length)),(0,s.jsx)("div",{className:i,children:n})}},33614:(e,a,n)=>{n.r(a),n.d(a,{default:()=>ze});n(99692);var t=n(50959),i=n(84875),s=n.n(i),r=n(40587),l=n(5311),o=n(29482),c=n(55246),d=n(93278),u=n(58665),m=n(84534),g=n(98900),h=n(99107),p=n(34257),x=n(27293),k=n(7146),v=n(55085),j=n(31926),b=n(77671),f=n(82565),y=n(45963);const N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumMerch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"merch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumMerchItem"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumMerchItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Merch"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"price"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]};var C=n(64373);const S="iEG0moJ3mt1_j9Lho7MA";var I=n(11527);const M=({albumName:e,albumURI:a})=>{const{data:n}=(t={uri:a},i={cacheTime:5*y.y},(0,y.a)(N,t,i));var t,i;const s=n?.albumUnion&&"merch"in n.albumUnion?n?.albumUnion?.merch?.items:[];return s&&s?.length>0?(0,I.jsx)("div",{className:"contentSpacing",children:(0,I.jsx)("div",{className:S,children:(0,I.jsx)(C.s,{id:e,uri:a,merchItems:s,merchVariant:"Album page merch items"})})}):null};var w=n(68486),T=n(11560),A=n(1526),U=n(70509),F=n(27117),P=n(97657),D=n(46227),L=n(50930),R=n(42189),O=n(46351),E=n(93549),V=n(10862),B=n(36692),z=n(26265),_=n(33299),Q=n(30954),q=n(45151),Z=n(53972),K=n(34190),J=n(14996),$=n(67301),Y=n(15871),H=n(97138),W=n(94546),G=n(5326),X=n(40189);const ee="album-albumPage-sectionWrapper",ae="zddjxV2lX9ukNM5QXloA",ne="lVqlPjQLuQhK2flsxB78",te="O_EguRjsZ4uI1hHamkOA",ie="jcaQQxoVnuuhtVwDJU1R",se="x-album-releasesDropdown",re="in4OjUTflcsoj9RUpf05",le="BqrUxFd9resDqUUdS4zQ",oe="vveb4Rn0dK_r8YUM7L_n",ce=t.memo((function({uri:e,togglePlay:a,isPlaying:n,isActive:i,spec:s,logger:r,backgroundColor:l,name:o,artists:c,isPlayable:d,sharingInfo:u}){const m=(0,$.o)(),h=(0,Y.k)(),x=(0,B.y)(),k=(0,t.useMemo)((()=>s.actionBarFactory()),[s]),[v,j]=(0,B.Z)(e),b=(0,t.useCallback)((()=>{const t=(0,H.aK)({isPlaying:n,isActive:i,spec:k.playButtonFactory(),logger:r,uri:e});a({loggingParams:t})}),[n,i,a,k,r,e]),y=(0,t.useCallback)((async()=>{let a;const n=k.saveButtonFactory();a=v?n.hitDislike({itemToBeDisliked:e}):n.hitLike({itemToBeLiked:e}),r.logInteraction(a),m({targetUri:e,intent:v?"unsave":"save",type:"click"});try{await j(!v)}catch{}}),[m,e,v,j,k,r]),N=(0,X.Q)(),C=(0,J.j)();return(0,I.jsx)(_.o,{backgroundColor:l,children:(0,I.jsxs)(_.F,{children:[(0,I.jsx)(f.$,{onClick:b,disabled:!d,isPlaying:n,size:C,uri:e}),N&&(0,I.jsx)(R.Nh,{spec:k,children:(0,I.jsx)(G.K,{entityName:o,contextUri:e,activationPlacement:"bottomEnd",size:C})}),(0,I.jsx)(K.x,{uri:e,action:W.sr.SAVE_ALBUM,children:(0,I.jsx)(Q.H,{isAdded:!!v,onClick:y,disabled:!h&&!x?.getCapabilities().canModifyOffline,size:C})}),(0,I.jsx)(q.o,{uri:e,isFollowing:!!v,onClick:(a,n)=>(0,H.l7)(n,k.downloadButtonFactory(),r,e),onFollow:y,size:C}),(0,I.jsx)(U.yj,{onShow:()=>(0,H.qq)(k,r),menu:(0,I.jsx)(p.Y,{uri:e,artistUri:c?.[0]?.uri,sharingInfo:u}),children:(0,I.jsx)(Z.z,{label:g.ag.get("more.label.context",o),size:C})}),(0,I.jsx)("div",{className:oe,children:(0,I.jsx)(E.F,{property:z.FM,renderNewExperience:()=>(0,I.jsx)(V.A,{options:[],onSelect:()=>{},selected:null,enableViewModeMenu:!0})})})]})})}));var de=n(56024);const ue=864e5,me=365.25*ue;var ge=n(38781),he=n(48018),pe=n(27931),xe=n(39359),ke=n(74818),ve=n(12864),je=n(45917),be=n(65742),fe=n(96221),ye=n(86612);const Ne="TCmZzqInstJMZjkHgnw3",Ce="PeNI572tTpqsN23o3QhJ",Se="oUsSfFiifMPXqW0kHjR6",Ie="XKvEMQZlPfPncTqiitM5",Me="GdbPVlmUCW0Q6ZZ0z0wh",we="Hu7O5y7x5c7wUYFbnIoS",Te=t.memo((function(e){const{images:a,title:n,isOpen:i,onClose:s}=e,r=(0,t.useMemo)((()=>(0,ye.X)(a,{desiredSize:1e4})),[a]);return r?(0,I.jsx)(be.Z,{className:Ne,isOpen:i,onRequestClose:s,animation:{modal:{base:Ie,afterOpen:Me,beforeClose:we}},animated:!0,children:(0,I.jsxs)("div",{style:{"--image-width":`${r.width}px`,"--image-height":`${r.height}px`},className:Ce,children:[(0,I.jsx)(fe.E,{loading:"eager",alt:n,src:r.url,className:Se}),(0,I.jsx)(je.o,{onClick:s,semanticColor:"textBase",children:g.ag.get("web-player.cover-art-modal.close")})]})}):null}));var Ae=n(54390),Ue=n(38762),Fe=n(74055),Pe=n(71200);const De=({releases:e})=>(0,I.jsx)(Fe.v,{children:e.map((e=>(0,I.jsx)(Pe.s,{role:"menuitem",to:(0,Ue.EC)(e.uri).toURLPath(!0),children:e.name},e.uri)))});var Le=n(11814),Re=n(53840),Oe=n(38563);const Ee=t.lazy((()=>n.e(9906).then(n.bind(n,89906))));function Ve(e){switch(e){case Re.V.Single:return g.ag.get("single");case Re.V.Ep:return g.ag.get("ep");case Re.V.Compilation:return g.ag.get("compilation");case Re.V.Audiobook:return g.ag.get("card.tag.audiobook");case Re.V.Album:default:return g.ag.get("album")}}const Be=({uri:e,album:a})=>{const n=(0,l.TH)(),{spec:i,logger:b,UBIFragment:y}=(0,R.fU)(m.w,{data:{uri:e}}),N=(0,t.useMemo)((()=>i.trackListFactory()),[i]),C=(0,t.useMemo)((()=>i.moreByArtistShelfFactory()),[i]),S=a.moreAlbumsByArtist,P=parseInt(new URLSearchParams((0,l.TH)().search).get("index")||"0",10),E=(0,T.Y)(e),{usePlayContextItem:V,togglePlay:B,isPlaying:z,isActive:_}=(0,D.n)({uri:E},{featureIdentifier:"album"}),Q=(0,t.useCallback)(((e,a)=>{if(i){const e=i.headerFactory().artistNameFactory().hitUiNavigate({destination:a.creator.uri});b.logInteraction(e)}}),[b,i]),{isOpen:q,openModal:Z,closeModal:K}=(()=>{const[e,a]=(0,t.useState)(!1);return{isOpen:e,openModal:(0,t.useCallback)((()=>a(!0)),[]),closeModal:(0,t.useCallback)((()=>a(!1)),[])}})(),J=(0,u.W6)(ke.DUY,{loadingValue:!1})?{onClick:Z,ariaLabel:g.ag.get("web-player.album.open_coverart_modal")}:{},$=(0,t.useCallback)((()=>new URLSearchParams(n.search.slice(1)).get("highlight")||""),[n.search]),Y=a.uri,H=a.name,W=a.albumType,G=a.release?.date,X=a.release?.precision,oe=a.nrTracks,je=a.images,be=a.extractedColors?.colorRaw.hex,fe=a.artists,ye=a.isPlayable,Ne=a.isCatalogueRestricted,Ce=a.copyright.items,Se=a.courtesyLine,Ie=a.duration.durationMs,Me=a.duration.isEstimate,we=$(),Ue=(0,r.v9)(ve.Gg),Fe=Ue.overrides?.locale??g.ag.getLocaleForTranslation(),Pe=(0,xe.k)({uri:e,type:"locale"}),Le=(0,L.OT)({albumName:H,albumType:W,albumArtists:fe.map((e=>e.name)).join(g.ag.getSeparator()),shouldLocalize:Pe,i18n:g.ag});(0,A.Y5)(be||null);const{albumId:Re=""}=(0,l.UO)(),Be=(0,Ae.IB)(Re,"album");(0,pe.W)(e);const ze=function(e){return(0,t.useMemo)((()=>{if(!e?.date)return null;if("day"===e.precision){const a=new Date(e.date),n=(new Date).getTime()-a.getTime(),t=n%me;return t<3.5*ue||t>312552e5?Math.round(n/me):null}return null}),[e])}(a.release),{isCompactMode:_e}=(0,w.mJ)();return(0,I.jsxs)("section",{className:ee,"data-testid":"album-page",children:[(0,I.jsx)(x.$,{children:Le}),null!==ze?(0,I.jsx)(t.Suspense,{fallback:null,children:(0,I.jsx)(Ee,{colorLight:a?.extractedColors?.colorLight.hex,colorDark:a?.extractedColors?.colorDark.hex,name:H,years:ze})}):null,(0,I.jsxs)(k.gF,{backgroundColor:be,children:[(0,I.jsxs)(v.W,{children:[(0,I.jsx)(f.$,{size:"medium",onClick:()=>B(),disabled:!ye,isPlaying:z,uri:e}),(0,I.jsx)(j.i,{text:H,dragUri:e,dragLabel:H})]}),(0,I.jsx)(U._P,{menu:(0,I.jsx)(p.Y,{uri:a.uri,artistUri:fe?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,I.jsx)(k.Oz,{dragUri:Y,images:je,name:H,placeholderType:"album",...J})}),(0,I.jsxs)(k.sP,{children:[(0,I.jsx)(ge.g,{children:Ve(W)}),(0,I.jsx)(U._P,{menu:(0,I.jsx)(p.Y,{uri:a.uri,artistUri:fe?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,I.jsx)(k.xd,{dragUri:a.uri,dragLabel:a.name,scaleAtMinWidth:k.vz,children:H})}),(0,I.jsx)(k.QS,{creators:fe,onCreatorClick:Q,releaseDate:G,releaseDatePrecision:X,totalItems:oe,durationMilliseconds:Ie,isEstimatedDuration:Me,hasTracks:!0})]})]}),(0,I.jsx)(ce,{backgroundColor:be,uri:e,togglePlay:B,isPlaying:z,isActive:_,spec:i,logger:b,sharingInfo:a.sharingInfo,name:a.name,artists:a.artists,isPlayable:a.isPlayable}),Ne?(0,I.jsxs)("div",{className:ae,children:[(0,I.jsx)(o.D,{as:"h2",variant:"cello",className:ne,children:g.ag.get("windowed.product-album-header")}),(0,I.jsx)("div",{className:te,children:g.ag.get("windowed.product-album-description")})]}):null,(0,I.jsxs)("div",{className:"contentSpacing",children:[(0,I.jsx)(y,{spec:N,children:(0,I.jsx)(de.L,{ariaLabel:H,nrTracks:(0,Oe.y)(a.discs)?a.discs.totalCount+oe:oe,discs:a.discs,albumUri:Y,highlightUri:we,scrollToIndex:P,usePlayContextItem:V,initalTracks:a.items,isCompactMode:_e})}),(0,I.jsxs)("div",{className:re,children:[(0,I.jsxs)("div",{children:[G&&(0,I.jsx)(o.D,{as:"p",variant:"mesto",children:(0,O.BI)((0,O.RX)(G),Fe,{year:"numeric",month:"long",day:"numeric"},X)}),(0,I.jsx)(F.k,{copyrights:Ce,courtesyLine:Se})]}),a.releases.items.length>0&&(0,I.jsx)(U.xV,{menu:(0,I.jsx)(De,{releases:a.releases.items}),children:(e,n,t)=>(0,I.jsxs)("button",{ref:t,className:se,type:"button",onClick:n,children:[(0,I.jsx)(o.D,{variant:"mesto",children:g.ag.get("album-page.more-releases",a.releases.items.length)}),e?(0,I.jsx)(c.U,{iconSize:16}):(0,I.jsx)(d.i,{iconSize:16})]})})]})]}),(0,I.jsx)(M,{albumName:H,albumURI:Y}),(0,I.jsx)(I.Fragment,{children:S?.length>0&&(0,I.jsx)("div",{className:"contentSpacing",children:(0,I.jsx)(y,{spec:C,children:(0,I.jsx)(he.q,{index:0,id:"more-albums",className:ie,title:g.ag.get("album-page.more-by-artist",fe?.[0]?.name),total:S.length,seeAllUri:`${fe?.[0]?.uri.replace("artist","app:artist")}:discography`,seeAllLabel:g.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,children:S.map(((e,a)=>(0,I.jsx)(h.i,{index:a,artists:fe,images:e.images||[],name:e.name,uri:e.uri,year:e.year,type:e.albumType,sharingInfo:e.sharingInfo},e.uri)))})})})}),Be&&(0,I.jsx)("div",{className:s()("contentSpacing",le),children:(0,I.jsx)(Ae.J,{title:g.ag.get("lfc.album.title"),uri:e})}),(0,I.jsx)(Te,{title:Le,isOpen:q,onClose:K,images:je})]})},ze=t.memo((function(){const{albumId:e}=(0,l.UO)(),a=`spotify:album:${e}`,{loading:n,error:t,data:i,canLoadOffline:s}=(0,Le.j)(a);return n||!i?(0,I.jsx)(b.h,{hasError:null!==t,loadOffline:s,errorMessage:g.ag.get("error.not_found.title.album")}):(0,I.jsx)(P.fd,{surface:P.Tg.ALBUM,uris:[a],children:(0,I.jsx)(Be,{uri:a,album:i})})}))},27931:(e,a,n)=>{n.d(a,{W:()=>o});var t=n(50959),i=n(40587),s=n(61204),r=n(72319),l=n(51145);const o=e=>{const a=(0,i.I0)(),n=(0,s.E)(),o=(0,i.v9)(l.KQ);(0,t.useEffect)((()=>{n&&e!==o&&a((0,r.jZ)(e))}),[e,o,a,n])}},51145:(e,a,n)=>{n.d(a,{KQ:()=>r,M4:()=>o,aj:()=>l});var t=n(23055),i=n(16917);const s=e=>e.seoExperiment,r=(0,t.P1)(s,(e=>e?.uri)),l=(0,t.P1)(s,(e=>e?.[i.p.TRACK])),o=(0,t.P1)(s,(e=>e?.[i.p.ALBUM]))},98246:(e,a,n)=>{n.d(a,{vI:()=>t});n(99692);const t=(e,a)=>{const n=a?new URLSearchParams(a.search):void 0;return"1"===n?.get(e)}},42148:(e,a,n)=>{n.d(a,{k:()=>t});let t=function(e){return e.I18nSEO="i18nSEO",e.RTPTrackCredits="rtpv2p2",e.I18nAdditionalPages="i18nap",e.RichPlaylistPages="rpp",e.LFC="lfc",e}({})}}]);
//# sourceMappingURL=xpui-routes-album.js.map