(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(36),c=n.n(a),r=(n(49),n(3)),o=n(15),u=n(4),l=n(5),d=n(12),h=n(8),p=n(9),m=n(7),j=n.n(m),g=(n(51),n(0)),v=function(e){var t=e.children;return t?Object(g.jsx)("div",{className:"page-title",children:Object(g.jsx)("h1",{children:t})}):Object(g.jsx)(g.Fragment,{})},f=(n(53),n(37)),k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).heading=e.heading,s}return Object(l.a)(n,[{key:"getImage",value:function(){if(this.props.image)return Object(g.jsx)("div",{className:"page-img wobble",children:Object(g.jsx)("img",{src:this.props.image,alt:this.props.image_alt})})}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f.a,{children:Object(g.jsx)("title",{children:this.props.title})}),Object(g.jsxs)("div",{className:"content",children:[this.getImage(),Object(g.jsx)(v,{children:this.props.heading}),Object(g.jsx)("div",{className:"main",children:Object(g.jsx)("div",{className:"page-body",children:this.props.children})})]})]})}}]),n}(s.Component),b=n.p+"static/media/PokeDex.008466e1.png",x=(n(56),n(57),n(58),function(){return Object(g.jsx)("div",{className:"skele_loader_parent fadeIn"})}),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).getPokemonInfo(),s}return Object(l.a)(n,[{key:"getPokemonInfo",value:function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.props.pokedex.getPokemonByName(this.props.pokemon.name);case 3:e.t1=e.sent,e.t2={details:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getId",value:function(){var e="";for(e+=this.state.details.id;e.length<3;)e="0"+e;return e}},{key:"getSprite",value:function(){return this.state.details.sprites.front_default}},{key:"getTypes",value:function(){var e=[];return this.state.details.types.forEach((function(t){e.push(t.type.name)})),e}},{key:"render",value:function(){var e;if(null!==this&&void 0!==this&&null!==(e=this.state)&&void 0!==e&&e.details){var t=this.state.details;return Object(g.jsxs)("div",{className:"list-item fadeIn bg_"+this.getTypes()[0],children:[Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("div",{className:"name",children:t.name}),Object(g.jsxs)("div",{className:"id",children:["#",this.getId()]})]}),Object(g.jsxs)("div",{className:"body",children:[Object(g.jsx)("div",{className:"types",children:this.getTypes().map((function(e){return Object(g.jsx)("div",{className:"type",children:e},e)}))}),Object(g.jsx)("div",{className:"sprite",children:Object(g.jsx)("img",{src:this.getSprite(),alt:t.name,title:t.name})})]}),Object(g.jsx)("div",{className:"background-image",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAEedJREFUeJztnXm0X1V1xz/vER8ZGRLSACEDSZ9YCRErhgTCuFDQJeJUEi0Vy2rrCC7LoKCsWmhBjK1oixNil4BQK1SsAyhgCwRlkCYBZEyagUCAJ5CQkITk5f36x/49fYSXvLPvvefsc3+//Vlrr6DrJr/vme49wz57g+M4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4LUiHtYA2YywwtWmTgPHAXsA4YHdgV6CraQBbmvYysA54Dvgd0AM8ASwHVgAvpJHffvgAiUMnMBM4BHhD879nIAMkBs8DDwD3A0uA3zT/d1+k32sbfIBUQycwC3grMBeYDYwxVQQvAncBC4GfI4PGB4yTjFHAPOAaZNrTyNx6gO8BJwMjI9SH4/Aa4L3AD4CN2Hf6ovYS8B/Au5tlcpxSvBZYADyLfeeu2p4GLgG6K6stp204DrgR+06cwvqAnwHHVlJzTsvSCbwfWIx9p7Wy/0XWKr6J4/yeDmR98SD2HTQXWwK8q0ylOq3BXGQb1LpD5mp3A3MK126NafdP6GRk8X1y4t/dBCxFTsLXARuatr7550ZgODC6aWMG/DkZWVDvnlhzA7gW+DSwOvFvm9GuA2QX4JPABch5Rix6gUXAncAjwONNW410uDKMR3bXupt/Hoq85UeU/HeHYgNwHnAZfvDYkhwE3EOcqcgWZDBcBByPvPVT0gUcBpyL7L69qNCutV8Dr09TLCcFHcBZiONflR2lF7gZ+EvST3uGogs4ETnt30D1g2QT8iVu15lIyzARuIVqO8ddwBnAhITlKMMoYD7wI+RLV2Vd3Ajsna4oTpUcQ3Un4FuRt/Ebk5agevYFvgCspbpBsgbZDXRqxNnIFKhs428ALgWmpJUfnTHAp4CVVDNItiBfVSdzdkU8V8s2+EbgQmDPtPKTMww4heoGyndwJ8hsGQvcRvlG/j5y5tBOjADOp5oF/S3kt2nR9kxGzhvKNOx9wBGphWfGROBK5JyjTF0+iKx3nAzoptwUYSPwccRZ0REOpfwLZxlyB98x5EBkF6XMV+N1yVXXg5HIqXmZQfIEctrvGHAA8AzFGm4bcDG+oAzhBOApig+SJ4FpyVW3OdP4g1+T1p4CjkovudaMQw4aiw6S5cB+yVW3KfsgFV6koRbjDVWUDuSQseggeQQZaE5ERiHrhiIN9BPSOxG2IqdS3K9tIXJW5URgF6STF2mYrzb/vlMNR1A85NG/406OUfhnijXImRZi24DpSPjTIm3yd+nltjbzKdYQZ1mIbSOmUuwMqg94e3q5rckMirlAnGshtg3ZH1iFvn2ex7d/SzMCeBj/hOfONORQUNtO9+JnUaX4OvpKv8REqTMdidaoba+LLMS2Aieir+wb8B0SS+YAm9G12TbgSAuxdWZP9D5WD2KfesCRcxLti20p8aOytBRXoKvg55BPvJMHC/CpcTSOQVexvUiwaScfOtEf6m6l/nf+ozMMeAhdxV5gotQZij3Q72wtNFFaI85AV6GL8W3CnHkL+tuJ802U1oBxyOFRaEVuQRJlOnmjvXS1Cl+wD8qX0FXk+TYyHSUjkbjEmrY920RpxuyDLvfffch6xakHc5DzjtD27cGvJryCf0H3hjnMRqZTgsvRtfF5NjLzYwK609cf2sh0SrI3kgcltJ2fwzBtdU7Tk9MJv2XWC3wmopZU/BEwG4n4MR25BjyaP+QseQnpTE8i4XMeRYJm9yRXWh1PA18kfFt+LBI5/7JoimrASORNEfpW+YaNzNLsghxmfh39gnWgPQZ8DclIW8cbkiPRnY0spc3jlX2U8MraQP1C7U9GAh3EyLP+DOIJW7cgFB9EV86TbGTmgSbl8qVGGouwP3A11USYH8q2At+lPhHoO5EvQ2j5fmoj055ZhFfSNurhjDgKuTtfdTarENuMOAmaLWwVnE54uXqp31eyEr5FeCX92EijhuMoHq+rSluKOHzmzCjgBcLL9DkbmXZ0oaugnL11O5FcImUjoldpfci145wvj32R8PI8ZKTRDM1twd8aaQxhNPAz7AfEjuzHxE13XYZJyPoptCwH2ci04SrCK+YTRhqHYhzx0kpXab8m30xZ1xFejguNNCZnGOFJJPsQP63cGItc8bXu/KG2BLmfkRvvI7wMDxppTM5RhFfKnUYad8ZI4FfYd3qt3Q4Mj1AfZRiBLubZpFTCLF1N3qZ49vpoKopzNeKdWgU9iGfyI0iQig3N/380ksLsAOBNwPgKfusI5LxkXgX/VlVsQq7mhmo6AXF6bGk0h4NTbSTukLMo/yZfBnweWXSG7DJ1ADObf2dZBb9/esGyx+I9hGu/zkhjMvYgfDv0PiONO+LN6HZdtrdFSGcos/Xa0fw3FpXQ8TJwcAkNVTOccC/fZ4w0JuNthDdkThH3hqH78g20tYjPWZVOd53Axwjf7Nje7iUvZ0dN9qpuI41J+AfCK+KdRhoH40yKdcR7EL+sWExDOnsRbWdE1KXlHMJ1n2qkMQm3EF4RVSxMq2B3dMEk+u0/SZNNaThyiUyrL6drrYcTrvtrRhqT0ENYJSyzEjgIF6DvfNeSdgqzC5K5Saszl2utXciOVojmO4w0RmcfwhvuaiON2zMSnc9YA7gZm1hdXei+0P1fkVxyBt5BmOYXrATG5njCGy4X95LT0HW4J4C9TJQK49Gnx/6AidJXczHhmqMfGFpcYzxA8WwuDop/rXz+Q0hySyt6mho0/E0EHUV4QPFsS+5kaZJw5pCaayK6N/E1NjIHRbMe2YYEkbDmUMI1nxZbjMUXJHS7sw+Zqlij2WbeRl6Xej6LaAqhE3hHRC2h/J/i2amxRPRjMUCmBD63Bjmxtuatime/j66BY7MM0RTK8bGEKOhBTtRDmBxTCNgMkNDP+MqoKsKZpXj229FUFOcKxbOassYk9CWTyxlZpYTuc19rJXAA+xI+H36SPK+2dgBPEV6OHDrd9YRpvctKYCxGoVvw1sm+W2E9VY3m5mad7LEqK2kwUk+xcrzNVhU5n+zmrK0M0ftT6gGS2022KnnYWsBOyFlbGbpi/0DqAZKLO0MMctq92p6cfNqqpOUGSPQCGbLOWsBOeNFaQCSi+7qlHiA57vJUxWZrATthk7WASETvv6kHSA4Hf7HINTAb5HPfo2pejv0DqQfIlsS/l5Kx1gJ2Qq4B48rScgMkeoEMydmzNGdtZWi5ARLqY1NHco4ZO8NaQCSibz6kDhy3FvEuDb2Gejni1WvJSYRltDoG+HJkLUUJTYOwBvivmEIC6CT8/s1zMYVYEXofvUECb80AvkGY1vVICM3cGI5sQYeU4ZtGGgcyhfD+ET1fjIU3r+amXQ7ZpELdNEYD744ppCAnAbsFPpuD85+mzaNn+7UYIKsVz+Zwo/BWwqd5udyhH8hHFM/eFk1FOJo2XxVNRROLAbJc8WwOX5CnCf+KzCGvLFiHA0cHPns/ebjLaNo8ul6LAbJC8WwOXxDQ3cr7MrZR8/vpRO7/h5JLBH1Nm2tetrVhHuGLsFwCV++GbCmG6v6sjcxX8DHC9faSMOfGEPyGcN05JlUqzYGEV8AW8kln/BV0He5IG5mAnMlsHETXjiyXdAIjkDYP0Rx9gW7FMMSxL7TxjjZR+WqmoMt73oMuBlhVTECfP2S2gc7BOIpwzb9MIchiDdKLLp3v3FhClKwELlM8vxcSfvS1ceQMyjjgJnTz+BvIY3sXZFMhlPujqciAbxH+prjJSONgjEXOcTRv5x50DV+UKcjNQY22LcCfJNAWiiaVdi6hUqNwKuEVsQ6bL92O+AC6TthA3Pw/TbxyvANxu9Dq+nwkPUXoQBcgPAcvi2j8MbqGfLONzB1yA/rO2EB2aKqc709AIuAX0bIEm+jzO+JgwrVHPyDMgacJr5BLjDTuiD0pl0jzRuBYit+wnAh8CV3q5IG2lvxc4C8kXH8uaTGiciXhFZLDCe/2vAF4ieKDpIEcdC0A3sLQt/66gQ8Dv0A8oov+5jbgxHJFj8IjhJfhFCONSXk/uobNbZoFkow0dN9+KOtDvkq3IlElr0KmcndTPEnnYPbRKDVRjpnoBngO0R+jMw7dm3CBjcwhmYdsXVfVgWPaZyLVQVk0SV3vNtJowu2EV8wKG4lBvBPdyXVq24a4nuTKo4SX5VwjjSZ8Al1Da1IRpOZwdBsPqWw98J6I5S7LYejKk4sDaxL2RjfNyunQcDD2JTwJZQp7ABt3Fw3XEV6ee4w0mnIrukY/0EZmMMOQQ8HQNA8xbCvwBfK8AjyQqejWb58yUWnMn6Nr/MttZKrpBn5C+sHx38gWdB3Q5KvcjG3mYDOGo3OT2ES9tvnmIp6nsQfGnch5Sl3YjfBgEg3ySKhkxqXoOsNFNjJLcRASNeR5qhsUa4HvAH+asBxVcTa6soaGLmpJutEt1jeSzw04La8BTgD+FViMrtzbmn/nMuDt1Dda/jh0jomLbGTmFW39BiRETShXA38RSUtKxgCvQxw4JyNTj363kw3IVd9VwFLkvKAVUhl8BThD8fwpwPciaakNc9F9cvuAQ0yUOmXoRuees5I8gmBkgfYM4XYbmU4JfoiujXP2AEjO0egXqvMthDqFOBZd2y6nvuusaGgPDn9Hi4Z/aTHGIP50mrY9zUJo7sxG/xX5qYlSR8MV6Nr0t4RnAWg7rkE/SEJD5jvpORF9e+bsmGrOfuhv660H9rcQ6+yUvdB7Of/IRGnNOB/9W+cexHXFyYNOJIeHpg03kkfQ8uzpQuah2kFyjYVYZ1AuQd9+55gorSlzKBagIIfg0e3OB9G32334wlyNJmh0v/UB77IQ6wDyYtPEX24gcY/r4qafFcMpNtXaALzJQG+7M4ViV4/PtBDbKsxE/0ZqIK7lbzTQ265MRmKYadvpZvJynK0lp6Ov+AZyGetgA73txiSKRZtcg3tCVEaRA8QG4o4y00Bvu7AfxQbHVuAIA70ty0gkL0SRQdKDf0liMAm5q1KkTT5poLflmYZ09iINsh4J8uZUwyzgKYq1xbcN9LYNcygeVmcbfhhVBfMp3gY34ZegovM+5LyjSAM1kGAHftdATwfw9xSv98WI67uTgI9QvKEawEJk394JYw90kRC3t0eRpD9OQs6k3CBZh7hFODvnOOAJitfzCuobiab2fI5yg6QB/ABJ0um8khHAVyk3nV2Je+ia87eUHyRPIgkxHWEW+sy529tjtHjCzTrxYcqlJ+u3m4DXJ9aeExORFHllvhoN5Mxq78TanSF4L9Uks+lFIhiOSyvflFHIDlXZ3IsN4BZg97TynVBmA89SvpEbSIjMc5CIh61KF/BXyBSzijr7N/JKMe0Mwv7InnsVDd5AdrsWIH5HrcJY5HLZGqqpo14kKLVTE0YgMXyrGiQNJGzmldT7cs90ZPpYxVSq355FAsM5NeTjxMn4tAjJJjUlXVEKMwHJCbmQ8ovv7e0O/Iyj9hyE5OyrepA0kA73KyRieU5TsPFIvLBbiZOqeisSfcbvkbcIw5G0X1VsBe/MliEL1Q+RNivrfkhKu28CD5Usw1D2MLIZ0tK06zXHQxF36xmJfm81Mh17HDk4e7xpq5HOpmUikk+ke4AdTJrAef0JQv8RCbTQ0rTrAAHZhjwbOA/Z/7dgE3K3ZT0SZGLgnyBer6O3s/HY6b0Nufr8gNHvOwZMBK6i+oVrK9kK4M8K1q/TIswCfoF9Z8zJnkW8pT2cq/N7jkSmEtad09KeRw4Q+3MlOs6rmANcT/wdr5xsObJVbbXGcWrIdOCfKB4oInfrQxwLT8bPM5wSdAHzgJ8T59Atta0ELsYvMjkRGI/cPfklci5g3dlDbTVyO/Aw2nuL30nIHkiElSuAVdgPgoG2GfgfxF/MI0sWwN8i1TMFOLxphwAHkm7RuwJYAtyFOCXeSxucdsfEB0h8OpB5/ozmn1MRl5BJSP6+ccCugf/WOiTO8DPIYFiORFN/DLne+mJ1sh3wAZILoxG3ki5ksOyKbC+/jNw/2YzcbOy1Eug4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4jh3/D57EO8YfDe9CAAAAAElFTkSuQmCC",alt:""})})]})}return Object(g.jsx)(x,{})}}]),n}(s.Component);O.defaultProps={pokemon:{id:0,name:"Missingno.",types:["NaN"]}};var y=O,A=n(19),S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).pokedex=e.pokedex,s.state={list:e.list},s.getList=s.getList.bind(Object(d.a)(s)),s.getPokedex=s.getPokedex.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){e.list===this.props.list&&null!=e.list||this.setState({list:this.props.list})}},{key:"getList",value:function(){return this.state.list}},{key:"getPokedex",value:function(){return this.pokedex}},{key:"render",value:function(){var e,t=this;return null!==this&&void 0!==this&&null!==(e=this.state)&&void 0!==e&&e.list&&this.state.list.length>0?Object(g.jsx)("div",{className:"list",children:this.getList().map((function(e){return Object(g.jsx)(A.b,{to:{pathname:"/PokemonDetails",state:{pokemon:e,pokedex:JSON.stringify(t.getPokedex())}},pokedex:t.pokedex,children:Object(g.jsx)(y,{pokemon:e,pokedex:t.pokedex})},e.name)}))}):Object(g.jsx)("div",{children:"This list is empty!"})}}]),n}(i.a.Component),C=n(25),M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;Object(u.a)(this,n);return(s=t.call(this,e)).pokedex=new C.Pokedex({protocol:"https",versionPath:"/api/v2/",cache:!0,timeout:5e3,cacheImages:!0,limit:10}),s.startIndex=0,s.limit=10,s.totalCount=0,s.getNext=s.getNext.bind(Object(d.a)(s)),s.getPrev=s.getPrev.bind(Object(d.a)(s)),s.pokemonUpdated=s.pokemonUpdated.bind(Object(d.a)(s)),s.initList(),s}return Object(l.a)(n,[{key:"initList",value:function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pokedex.getPokemonsList({offset:this.startIndex,limit:this.limit});case 2:t=e.sent,this.setState({list:t.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNext",value:function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.startIndex+=this.limit,e.next=3,this.pokedex.getPokemonsList({offset:this.startIndex,limit:this.limit});case 3:t=e.sent,this.setState({list:t.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPrev",value:function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.startIndex>0)){e.next=6;break}return this.startIndex-=this.limit,e.next=4,this.pokedex.getPokemonsList({offset:this.startIndex,limit:this.limit});case 4:t=e.sent,this.setState({list:t.results});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCurrentList",value:function(){return this.state.list}},{key:"pokemonUpdated",value:function(e){this.setState({list:e})}},{key:"render",value:function(){var e;return null!==this&&void 0!==this&&null!==(e=this.state)&&void 0!==e&&e.list&&this.state.list.length>0?Object(g.jsxs)(k,{title:"Pokedex",image:b,image_alt:"PokeDex",children:[Object(g.jsx)(S,{list:this.state.list,pokedex:this.pokedex}),Object(g.jsxs)("div",{className:"list_nav",children:[Object(g.jsx)("button",{onClick:this.getPrev,className:"btn",children:"\u2190"}),Object(g.jsx)("button",{onClick:this.getNext,className:"btn",children:"\u2192"})]})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:this.getNext,children:"Get Next"}),Object(g.jsx)("div",{children:"Empty"})]})}}]),n}(s.Component),N=(n(79),n(80),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={isChecked:e.isChecked},s}return Object(l.a)(n,[{key:"propagateChange",value:function(e){this.props.changeHandler(e),this.setState({isChecked:e})}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("label",{className:"switch",children:[Object(g.jsx)("input",{type:"checkbox",onChange:function(t){e.propagateChange(t.target.checked)},defaultChecked:this.state.isChecked}),Object(g.jsx)("span",{className:"slider round"})]})}}]),n}(s.Component)),w=function(e){var t=e.history;return Object(g.jsxs)("button",{className:"btn return",onClick:function(){return t.goBack()},children:[Object(g.jsx)("div",{className:"arrow",children:"\u27a3"})," Return"]})},E=(n(81),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).pokemon=e.pokemon,s.pokedex=e.pokedex,s.getEvoChain(),s}return Object(l.a)(n,[{key:"getEvoChain",value:function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pokedex.getPokemonSpeciesByName(this.pokemon.species.name);case 2:return this.species=e.sent,e.next=5,this.pokedex.getEvolutionChainById(this.getEvolutionChainId(this.species.evolution_chain.url));case 5:this.evoChain=e.sent,this.initEvolutions();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initEvolutions",value:function(){var e=Object(o.a)(j.a.mark((function e(){var t,n,s,i,a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.evoChain.chain,s=[],(n=[]).push(t.species);do{if(i=t.evolves_to.length,n.push(t.evolves_to[0].species),i>1)for(a=1;a<i;a++)n.push(t.evolves_to[a].speces);t=t.evolves_to[0]}while(t.evolves_to.length>0);c=0;case 6:if(!(c<n.length)){e.next=14;break}return e.next=9,this.pokedex.getPokemonByName(n[c].name);case 9:r=e.sent,s.push(r);case 11:c++,e.next=6;break;case 14:this.setState({evoChain:s});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getEvolutionChainId",value:function(e){return e.substring(e.indexOf("/",e.length-5)+1,e.length-1)}},{key:"render",value:function(){var e;return null!==(e=this.state)&&void 0!==e&&e.evoChain?Object(g.jsx)("div",{className:"evolution_chain_list",children:this.state.evoChain.map((function(e){return Object(g.jsx)("div",{className:"evolution_chain_item",children:Object(g.jsx)("img",{src:e.sprites.front_default})},e.id)}))}):Object(g.jsx)(x,{})}}]),n}(s.Component)),P=n(25),B=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={isSpinning:!0},s.temp=!1,s.changeHandler=s.changeHandler.bind(Object(d.a)(s)),s.spinState=s.getSpinningState(),s.pokedex=new P.Pokedex(JSON.parse(e.pokedex)),s.pokemon=e.pokemon,s.getSpinningState=s.getSpinningState.bind(Object(d.a)(s)),s.setPageColors(s.pokemon),s.getPokemonInfo=s.getPokemonInfo.bind(Object(d.a)(s)),s.getPokemonInfo(),s}return Object(l.a)(n,[{key:"setPageColors",value:function(e){var t,n;null!==e&&void 0!==e&&null!==(t=e.types)&&void 0!==t&&t[0]&&(this.setVariableValue("--page-color-primary",e.types[0]),null!==(n=e.types)&&void 0!==n&&n[1]?this.setVariableValue("--page-color-secondary",e.types[1]):this.setVariableValue("--page-color-secondary",e.types[0]))}},{key:"setVariableValue",value:function(e,t){document.documentElement.style.setProperty(e,function(e){switch(e.toLowerCase()){case"normal":return getComputedStyle(document.documentElement).getPropertyValue("--normal");case"fire":return getComputedStyle(document.documentElement).getPropertyValue("--fire");case"water":return getComputedStyle(document.documentElement).getPropertyValue("--water");case"grass":return getComputedStyle(document.documentElement).getPropertyValue("--grass");case"electric":return getComputedStyle(document.documentElement).getPropertyValue("--electric");case"ice":return getComputedStyle(document.documentElement).getPropertyValue("--ice");case"fighting":return getComputedStyle(document.documentElement).getPropertyValue("--fighting");case"poison":return getComputedStyle(document.documentElement).getPropertyValue("--poison");case"ground":return getComputedStyle(document.documentElement).getPropertyValue("--ground");case"flying":return getComputedStyle(document.documentElement).getPropertyValue("--flying");case"psychic":return getComputedStyle(document.documentElement).getPropertyValue("--psychic");case"bug":return getComputedStyle(document.documentElement).getPropertyValue("--bug");case"rock":return getComputedStyle(document.documentElement).getPropertyValue("--rock");case"ghost":return getComputedStyle(document.documentElement).getPropertyValue("--ghost");case"dark":return getComputedStyle(document.documentElement).getPropertyValue("--dark");case"dragon":return getComputedStyle(document.documentElement).getPropertyValue("--dragon");case"steel":return getComputedStyle(document.documentElement).getPropertyValue("--steel");case"fairy":return getComputedStyle(document.documentElement).getPropertyValue("--fairy")}}(t))}},{key:"changeHandler",value:function(e){this.setState({isSpinning:e})}},{key:"getPokemonInfo",value:function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.pokedex.getPokemonByName(this.pokemon.name);case 3:e.t1=e.sent,e.t2={pokemon:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSprite",value:function(){return this.state.pokemon.sprites.front_default}},{key:"getSpinningState",value:function(){return this.state.isSpinning}},{key:"render",value:function(){var e;return null!==(e=this.state)&&void 0!==e&&e.pokemon?Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("div",{className:"position-absolute absolute-top-right padding-base",children:Object(g.jsx)(N,{id:"switch",isChecked:this.spinState,changeHandler:this.changeHandler})}),Object(g.jsx)(w,{history:this.props.history}),Object(g.jsx)("div",{className:"pokemon__sprite margin-bottom-base",children:Object(g.jsxs)("div",{className:"pokemon-img "+(this.getSpinningState()?"spin-3d":""),children:[Object(g.jsx)("img",{src:this.getSprite(),alt:"Sprite of "+this.state.pokemon.name}),Object(g.jsx)("div",{className:"sprite-shadow"})]})}),Object(g.jsx)("div",{className:"pokemon__name",children:this.state.pokemon.name}),Object(g.jsx)("div",{className:"card",children:Object(g.jsx)(E,{pokemon:this.state.pokemon,pokedex:this.pokedex})})]}):Object(g.jsx)("div",{children:"Loading, please wait..."})}}]),n}(i.a.Component),I=B,V=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)(k,{title:"Pokedex | Details",children:Object(g.jsx)(I,{pokemon:this.props.location.state.pokemon,pokedex:this.props.location.state.pokedex,history:this.props.history})})}}]),n}(s.Component),D=new(n(25).Pokedex)({protocol:"https",versionPath:"/api/v2/",timeout:5e3,limit:10});var T=function(){return Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{path:"/",component:function(){return Object(g.jsx)(M,{pokedex:D})},exact:!0}),Object(g.jsx)(r.a,{path:"/PokemonDetails",component:V})]})};n(82),n(83),n(84),n(85);c.a.render(Object(g.jsx)(A.a,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.22d17c27.chunk.js.map