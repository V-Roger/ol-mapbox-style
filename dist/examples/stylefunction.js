"use strict";(self.webpackChunkol_mapbox_style=self.webpackChunkol_mapbox_style||[]).push([[890],{635:(e,t,a)=>{a(9789);var n=a(5812),s=a(5206),o=a(518),r=a(4486),u=a(4286),c=a(9799),l=new o.Z({declutter:!0,source:new r.Z({format:new n.Z,url:"data/states.geojson"})}),w=new s.Z({target:"map",view:new u.ZP({center:[-13603186.115192635,6785744.563386],zoom:2})});fetch("data/states.json").then((function(e){return e.json()})).then((function(e){(0,c.ZP)(l,e,"states"),-1===w.getLayers().getArray().indexOf(l)&&w.addLayer(l)}))}},e=>{e(e.s=635)}]);
//# sourceMappingURL=stylefunction.js.map