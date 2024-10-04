import{_ as e,o as i,c as t,Q as n}from"./chunks/framework.a2f82312.js";const f=JSON.parse('{"title":"Minify Plugin","description":"The Minify Plugin","frontmatter":{"title":"Minify Plugin","description":"The Minify Plugin","head":[["meta",{"name":"og:description","content":"The Minify Plugin"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Minify Plugin"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"The Minify Plugin"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Minify Plugin"}]]},"headers":[],"relativePath":"../../../docs/plugins/minify.md","filePath":"../../../docs/plugins/minify.md"}'),a={name:"../../../docs/plugins/minify.md"},o=n('<h2 id="inline-plugin" tabindex="-1">Inline Plugin <a class="header-anchor" href="#inline-plugin" aria-label="Permalink to &quot;Inline Plugin&quot;">​</a></h2><p>The <code>@jsx-email/plugin-minify</code> package provides a plugin to <a href="https://en.wikipedia.org/wiki/Minification_(programming)" target="_blank" rel="noreferrer">minify</a> an email&#39;s HTML output. This plugin is a <code>peerDependency</code> of <code>jsx-email</code> and is loaded automatically if the <a href="https://jsx.email/docs/core/render#method-options" target="_blank" rel="noreferrer"><code>minify</code> render option</a> is set.</p><p>Browse this plugin&#39;s <a href="https://github.com/shellscape/jsx-email/blob/main/packages/plugin-minify" target="_blank" rel="noreferrer">soure code</a></p><h3 id="why" tabindex="-1">Why <a class="header-anchor" href="#why" aria-label="Permalink to &quot;Why&quot;">​</a></h3><p>Minifying the HTML for an email is very beneficial when working with emails that have a large amount of content. Email clients (like Gmail) will clip an email if it surpases their size limits, forcing a recipient to click a &quot;Show Full Message&quot; button at the bottom of their email. Be sure to keep an eye on the console output when running <a href="https://jsx.email/docs/core/render" target="_blank" rel="noreferrer"><code>render</code></a> as it will alert you if the size of the HTML is too large.</p>',5),r=[o];function l(s,c,m,h,p,d){return i(),t("div",null,r)}const u=e(a,[["render",l]]);export{f as __pageData,u as default};
