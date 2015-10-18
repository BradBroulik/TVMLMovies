/*
Abstract:
A catalogTemplate showing a listing of movies by actor.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
   <catalogTemplate>
      <banner>
         <title>Movies</title>
      </banner>
      <list>
         <section>
            <listItemLockup>
               <title>Matt Damon</title>
               <decorationLabel>10</decorationLabel>
               <relatedContent>
                  <grid>
                     <section>
                       	<lockup data-video="http://a674.v.phobos.apple.com/us/r1000/085/Video/9f/df/2e/mzm.cgvjuumc..640x272.h264lc.d2.p.m4v">
                       		<img width="267" height="400" src="${this.BASEURL}resources/images/bourne-identity.jpg" />
  							<title>The Bourne Identity</title>
  							<subtitle>Action &amp; Adventure</subtitle>
  						</lockup>
                       	<lockup data-video="http://a911.v.phobos.apple.com/us/r1000/005/Video/54/ea/5e/mzm.wlyhvmns..640x362.h264lc.d2.p.m4v">
                       		<img width="267" height="400" src="${this.BASEURL}resources/images/the-departed.jpg" />
  							<title>The Departed</title>
  							<subtitle>Drama</subtitle>
  						</lockup>
                       	<lockup data-video="http://a675.v.phobos.apple.com/us/r1000/015/Video/6c/a2/6c/mzm.peqykxxv..640x268.h264lc.D2.p.m4v">
                       		<img width="267" height="400" src="${this.BASEURL}resources/images/bourne-ultimatum.jpg" />
  							<title>The Bourne Ultimatum</title>
  							<subtitle>Action &amp; Adventure</subtitle>
  						</lockup>
                       	<lockup data-video="http://a179.v.phobos.apple.com/us/r1000/084/Video/b5/ac/c8/mzm.gdiqqjxx..640x478.h264lc.d2.p.m4v">
                       		<img width="267" height="400" src="${this.BASEURL}resources/images/contagion.jpg" />
  							<title>Contagion</title>
  							<subtitle>Thriller</subtitle>
  						</lockup>
                       	<lockup data-video="http://a45.v.phobos.apple.com/us/r1000/109/Video/v4/2e/93/da/2e93dac6-974f-4288-7902-c87a43458b74/mzvf_5687418571052822338.640x478.h264lc.D2.p.m4v">
                       		<img width="267" height="400" src="${this.BASEURL}resources/images/oceans-eleven.jpg" />
  							<title>Ocean&#39;s Eleven (2001)</title>
  							<subtitle>Action &amp; Adventure</subtitle>
  						</lockup>
                       	<lockup data-video="http://a1753.v.phobos.apple.com/us/r1000/044/Video6/v4/3b/06/ba/3b06ba5a-ae23-b474-6806-31a7ebdd00e9/mzvf_3508674799312396448.640x354.h264lc.D2.p.m4v">
                       		<img width="267" height="400" src="${this.BASEURL}resources/images/monuments-men.jpg" />
  							<title>The Monuments Men</title>
  							<subtitle>Drama</subtitle>
  						</lockup>
                     </section>
                  </grid>
               </relatedContent>
            </listItemLockup>
         </section>
      </list>
   </catalogTemplate>
   </document>`
}