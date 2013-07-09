/**
 * UndoManager.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(t){var D=t.util.Dispatcher;t.UndoManager=function(a){var s,b=0,d=[],c,o,f,g;function h(){return t.trim(a.getContent({format:'raw',no_events:1}).replace(/<span[^>]+data-mce-bogus[^>]+>[\u200B\uFEFF]+<\/span>/g,''))};function j(){s.typing=false;s.add()};onBeforeAdd=new D(s);o=new D(s);f=new D(s);g=new D(s);o.add(function(u,l){if(u.hasUndo())return a.onChange.dispatch(a,l,u)});f.add(function(u,l){return a.onUndo.dispatch(a,l,u)});g.add(function(u,l){return a.onRedo.dispatch(a,l,u)});a.onInit.add(function(){s.add()});a.onBeforeExecCommand.add(function(e,i,u,v,k){if(i!='Undo'&&i!='Redo'&&i!='mceRepaint'&&(!k||!k.skip_undo)){s.beforeChange()}});a.onExecCommand.add(function(e,i,u,v,k){if(i!='Undo'&&i!='Redo'&&i!='mceRepaint'&&(!k||!k.skip_undo)){s.add()}});a.onSaveContent.add(j);a.dom.bind(a.dom.getRoot(),'dragend',j);a.dom.bind(a.getBody(),'focusout',function(e){if(!a.removed&&s.typing){j()}});a.onKeyUp.add(function(a,e){var k=e.keyCode;if((k>=33&&k<=36)||(k>=37&&k<=40)||k==45||k==13||e.ctrlKey){j()}});a.onKeyDown.add(function(a,e){var k=e.keyCode;if((k>=33&&k<=36)||(k>=37&&k<=40)||k==45){if(s.typing){j()}return}if((k<16||k>20)&&k!=224&&k!=91&&!s.typing){s.beforeChange();s.typing=true;s.add()}});a.onMouseDown.add(function(a,e){if(s.typing){j()}});a.addShortcut('ctrl+z','undo_desc','Undo');a.addShortcut('ctrl+y','redo_desc','Redo');s={data:d,typing:false,onBeforeAdd:onBeforeAdd,onAdd:o,onUndo:f,onRedo:g,beforeChange:function(){c=a.selection.getBookmark(2,true)},add:function(l){var i,e=a.settings,k;l=l||{};l.content=h();s.onBeforeAdd.dispatch(s,l);k=d[b];if(k&&k.content==l.content)return null;if(d[b])d[b].beforeBookmark=c;if(e.custom_undo_redo_levels){if(d.length>e.custom_undo_redo_levels){for(i=0;i<d.length-1;i++)d[i]=d[i+1];d.length--;b=d.length}}l.bookmark=a.selection.getBookmark(2,true);if(b<d.length-1)d.length=b+1;d.push(l);b=d.length-1;s.onAdd.dispatch(s,l);a.isNotDirty=0;return l},undo:function(){var l,i;if(s.typing){s.add();s.typing=false}if(b>0){l=d[--b];a.setContent(l.content,{format:'raw'});a.selection.moveToBookmark(l.beforeBookmark);s.onUndo.dispatch(s,l)}return l},redo:function(){var l;if(b<d.length-1){l=d[++b];a.setContent(l.content,{format:'raw'});a.selection.moveToBookmark(l.bookmark);s.onRedo.dispatch(s,l)}return l},clear:function(){d=[];b=0;s.typing=false},hasUndo:function(){return b>0||this.typing},hasRedo:function(){return b<d.length-1&&!this.typing}};return s}})(tinymce);