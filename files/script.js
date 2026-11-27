/* =====================================================================
   EDIT YOUR CONTENT HERE. Everything in [brackets] is a placeholder.
   ===================================================================== */
const FA = `<span class="fa" lang="fa" dir="rtl">دانشجوجو</span>`;   // her plushie's name
const CONFIG = {
  name: "Aynaz",
  pet: "princess", him: "your chocolate", met: [2024, 8, 9],   // she calls you "my chocolate"
  music: { title: "Atomesh", src: "audio/atomesh.mp3" },       // her song. Fix the title/artist here if it's spelled differently
  finalMessage: "That’s the last page, not the last thing. I’ll keep noticing.",

  pages: [
    { id: "welcome", label: "Welcome" },
    { id: "home", label: "Home" },
    { id: "reasons", label: "Three Reasons", g: "✦", d: "Three, then a twist." },
    { id: "beauty", label: "Her Beauty", g: "☾", d: "The details, all of them." },
    { id: "memories", label: "Memories", g: "◌", d: "Scroll slowly. They’re in order." },
    { id: "letters", label: "Letters", g: "✉", d: "Five notes to open." },
    { id: "appreciation", label: "Appreciation", g: "❖", d: "Tap a card to read it." },
    { id: "universe", label: "Universe", g: "✧", d: "A sky you can touch." },
    { id: "midnight", label: "Midnight", g: "☽", d: "For the quieter hours." },
    { id: "favorites", label: "About You", g: "✺", d: "Favorites and a small quiz." }
  ],

  // "The little things" cards on the Her Beauty page
  littles: [
    { t: "The way you talk", m: "Fast, loud, and always headed somewhere. I follow." },
    { t: "Your energy", m: "A quiet room turns into a plan the second you walk in." },
    { t: "Your expressions", m: "The pout, the squint, and the innocent face right before you bite me." },
    { t: "Your reactions", m: "When you’re jealous, everything shows. When you try to hide it, it shows more." },
    { t: "Small habits", m: "You bite me. All the time. We have never discussed it." },
    { t: "Favorite things", m: `Roses, noodles, chocolate, and a stack of plushies with ${FA} in charge.` },
    { t: "What you don’t realize", m: "Small things work on you. A flower, a snack, a message. It’s the easiest way to make your day, and I plan to keep using it." }
  ],

  // Scrolling story on the Memories page. src: a photo path, or play:true for the song button, or neither for a text-only chapter.
  story: [
    { d: "9 August 2024", t: "The day we met", x: "I won’t retell it. You were there, and you’d correct me. This photo isn’t from that day, it’s just a night that feels like it. It started on 9 August 2024, and I’ve been counting ever since.", src: "images/moon-him.jpg" },
    { d: "Her name", t: "Full moon", x: "Aynaz means full moon. I didn’t understand how well that fit until I started paying attention. A name like that deserves its own sky.", src: "images/moon-her.jpg" },
    { d: "Her favorites", t: "Roses, and small things", x: "Roses, and the small things that make you happy. A flower, a snack, a message. You’re easy to make smile, and I intend to keep doing it.", src: "images/rose.jpg" },
    { d: "Her song", t: "Press play", x: "This one’s yours. Turn it up and let it be the soundtrack for the rest of this page.", play: true },
    { d: "Before me", t: "Little Aynaz", x: "This is you before any of this. I’m glad someone kept the photo, and I’m glad you grew into exactly this.", src: "images/child-dress.jpg" },
    { d: "Today", t: "And all the ordinary days", x: "Not every memory has a date. Some are just the days that went well: noodles, chocolate, a plushie within reach. I’d take a hundred more of those." }
  ],

  // "More moments" gallery
  memories: [
    { src: "images/child-towel.jpg", cap: "Before any of this. The smile was already like this." },
    { src: "images/eye-blur.jpg", cap: "A blurry close-up. Even out of focus, it’s what I look at first." },
    { src: "images/selfie.jpg", cap: "The pout. Evidence submitted, no further questions." },
    { src: "images/kitten-note.jpg", cap: "A kitten said it better than I could, so I’m borrowing it." },
    { src: "images/kittens.jpg", cap: "One black, one white. Guess which one is the chocolate." },
    { src: "images/eye.jpg", cap: "The one from chapter 01. I couldn’t not." }
  ],

  letters: [
    { t: "For when you need a reminder", x: "Some days you’ll decide you’re falling short of something. I don’t know what the standard is, but you’re allowed to be tired and unfinished. And if you ever forget what you are to me: you’re the princess. Not as a joke. As a title you earned." },
    { t: "A little thing I never want you to forget", x: "I’m on your side first. Even when you’re wrong, especially when you’re wrong, and then I’ll tell you gently. In that order." },
    { t: "Something I notice about you", x: "You get jealous easily, and you try to make me jealous, and it fails every time. Not because I don’t care. Because I’ve got nowhere else to look." },
    { t: "For an ordinary day", x: "Nothing happened today, and that’s fine. Noodles, chocolate, a plushie within reach. That’s your good day, and I like being invited to it." },
    { t: "One more thing", x: "There’s always one more thing. I stopped trying to finish the list. And yes, I’m sometimes dumb, but I’m your dumb." }
  ],

  appreciation: [
    { t: "Your character", m: "I could sum it up in one word and get it wrong. So I’ll just say I trust it." },
    { t: "Your kindness", m: "It’s small and quiet, and it lands. I notice every time, even when you don’t mean it to be noticed." },
    { t: "Your personality", m: "Big, loud in the best way, and impossible to mistake for anyone else’s." },
    { t: "Your little habits", m: "Biting me is the main one. I’ve decided it’s affection, and I’m not taking questions." },
    { t: "How you think", m: "Sometimes brilliant, sometimes an airhead. I’ve never been able to decide which I like more." },
    { t: "Your expressions", m: "The pout, the squint, the look when you’re pretending not to be jealous. I’d pick any of them out of a crowd." },
    { t: "How you communicate", m: "You say a lot with very little. I’m still learning to read all of it." },
    { t: "What makes you different", m: "Nobody else has made me this happy to be the dumb one. That’s all you." },
    { t: "Your humor", m: "I’m funnier when you’re around, because you’re the reason I try." },
    { t: "How you treat people", m: "Gently, in a way that doesn’t need an audience." },
    { t: "Your imperfections", m: "You don’t have to be flawless for any of this to hold. The unpolished parts are the ones I’d recognize anywhere." },
    { t: "Your ordinary days", m: "Noodles, chocolate, you. That’s already a good day." },
    { t: "Your energy", m: "You make a quiet room feel like a plan is about to happen." },
    { t: "Small things", m: "Roses, and the little stuff that makes you happy. I’m keeping a list. It’s getting long." },
    { t: "Your plushies", m: `You have lots of them, and one has a name: ${FA}. He’s the one I’d trust with you.` }
  ],

  // Clickable stars in the 3D sky
  stars: [
    "Aynaz means full moon. I noticed.",
    "Bites so far: uncountable. Complaints: zero.",
    "Roses next time. And noodles.",
    "I can be dumb sometimes. But I’m your dumb.",
    "Still not jealous, princess. Nice try."
  ],

  midnight: [
    "Some thoughts only fit at night, when nobody needs anything from anybody.",
    "If you’re awake, you don’t have to answer. This is just a place to sit for a while.",
    "If you can’t sleep, you know where to find your chocolate."
  ],

  favorites: [
    ["Flowers", "Roses"],
    ["Food", "Noodles"],
    ["Sweet", "Chocolate. And, apparently, me."],
    ["Plushies", `Lots. ${FA} has a name, so he’s the boss.`],
    ["What makes her happy", "Small things"],
    ["Song", "Atomesh"],
    ["Color", "Purple suits her"]
  ],

  quiz: [
    { q: "What does Aynaz do every single time, without fail?", o: ["Bites me", "Writes me a formal letter", "Does my taxes"], a: 0, n: "Every time. I’ve stopped dodging." },
    { q: "Her success rate at making me jealous?", o: ["100%", "Somewhere around 0%", "Classified"], a: 1, n: "Nice try, princess." },
    { q: "What does she call me?", o: ["My chocolate", "My noodle", "My plushie"], a: 0, n: "And noodles come a close second." }
  ]
};

/* ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
gsap.registerPlugin(ScrollTrigger);
history.scrollRestoration = "manual";

/* ---------- smooth scroll: one Lenis, driven by GSAP's ticker ---------- */
const lenis = RM ? null : new Lenis({ duration: 1, smoothWheel: true });
if (lenis) {
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const toTop = () => { lenis ? lenis.scrollTo(0, { immediate: true, force: true }) : window.scrollTo(0, 0); };

/* ---------- build content ---------- */
const cardPages = CONFIG.pages.filter(p => p.g);
$("#menu").innerHTML = CONFIG.pages.filter(p => p.id !== "welcome").map(p => `<a href="#${p.id}" data-id="${p.id}">${p.label}</a>`).join("");
$("#homecards").innerHTML = cardPages.map(p => `<a class="card rv" href="#${p.id}"><i>${p.g}</i><b>${p.label}</b><small>${p.d}</small></a>`).join("");
$("#littles").innerHTML = CONFIG.littles.map(l => `<div class="card rv"><b>${l.t}</b><small>${l.m}</small></div>`).join("");
const DAYS = Math.max(0, Math.floor((Date.now() - new Date(...CONFIG.met.map((v, i) => i === 1 ? v - 1 : v))) / 864e5));
$("#story").insertAdjacentHTML("beforeend", CONFIG.story.map(s => {
  const vis = s.src ? `<div class="photo pi mimg"><img src="${s.src}" alt="${s.t}" loading="lazy" decoding="async"></div>` : s.play ? `<div class="photo mimg playbox"><button class="btn" data-play>▶ Play her song</button></div>` : "";
  return `<article class="mem${vis ? "" : " solo"}">${vis}<div><p class="mdate rv">${s.d}</p><h2 class="rv">${s.t}</h2><p class="body rv">${s.x}</p></div></article>`;
}).join(""));
document.addEventListener("click", e => { if (e.target.closest("[data-play]")) $("#pp").click(); });
$("#gallery").innerHTML = CONFIG.memories.map((m, i) => `<button data-i="${i}" class="rv" aria-label="Open memory ${i + 1}"><div class="photo pi"><img src="${m.src}" alt="" loading="lazy" decoding="async"></div><small>${m.cap}</small></button>`).join("");
$("#lettersbox").innerHTML = CONFIG.letters.map(l => `<details class="rv"><summary>${l.t}</summary><p>${l.x}<em class="sig">— ${CONFIG.him}</em></p></details>`).join("");
$("#apbox").innerHTML = CONFIG.appreciation.map(a => `<button class="ap rv" aria-expanded="false"><b>${a.t}</b><span>${a.m}</span></button>`).join("");
$("#mid").innerHTML = CONFIG.midnight.map(t => `<p class="rv">${t}</p>`).join("");
$("#favs").innerHTML = CONFIG.favorites.map(f => `<li class="rv"><span>${f[0]}</span><span>${f[1]}</span></li>`).join("");
$("#final").textContent = `Made for ${CONFIG.name}, by ${CONFIG.him.replace("your", "her")}`;

$("#apbox").addEventListener("click", e => {
  const b = e.target.closest(".ap"); if (!b) return;
  const open = b.classList.toggle("open"); b.setAttribute("aria-expanded", open);
});

/* lightbox */
const lb = $("#lb");
$("#gallery").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const m = CONFIG.memories[b.dataset.i];
  $("#lbimg").className = "photo pi"; $("#lbimg").innerHTML = `<img src="${m.src}" alt="${m.cap}">`;
  $("#lbcap").textContent = m.cap;
  lb.hidden = false; lenis && lenis.stop();
  if (!RM) gsap.fromTo(".lbc", { scale: .94, opacity: 0 }, { scale: 1, opacity: 1, duration: .35, ease: "power2.out" });
  $("#lbx").focus();
});
const closeLb = () => { lb.hidden = true; lenis && lenis.start(); };
$("#lbx").onclick = closeLb;
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeLb(); });

/* quiz */
(function quiz() {
  const box = $("#quiz"); let i = 0, score = 0;
  const step = () => {
    if (i >= CONFIG.quiz.length) {
      store.set("aynaz-quiz", score);
      box.innerHTML = `<p class="body">${score} out of ${CONFIG.quiz.length}. Not that it matters.</p><p class="body"><em>${CONFIG.finalMessage}</em></p><em class="sig">— ${CONFIG.him}</em>`; return;
    }
    const q = CONFIG.quiz[i];
    box.innerHTML = `<p class="body">${q.q}</p><div class="opts">${q.o.map((o, k) => `<button data-k="${k}">${o}</button>`).join("")}</div>`;
  };
  box.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.next !== undefined) { i++; step(); return; }
    const q = CONFIG.quiz[i], ok = +b.dataset.k === q.a; if (ok) score++;
    box.innerHTML = `<p class="body"><em>${ok ? "Correct." : "Not quite."}</em> ${q.n}</p><button class="btn" data-next>Next</button>`;
  });
  step();
})();

/* ---------- router ---------- */
let current = null;
const valid = id => CONFIG.pages.some(p => p.id === id);
function show(id) {
  document.querySelectorAll(".pg").forEach(p => p.classList.toggle("on", p.id === id));
  document.body.dataset.p = id;
  document.querySelectorAll("#menu a").forEach(a => a.classList.toggle("on", a.dataset.id === id));
  const n = CONFIG.pages.findIndex(p => p.id === id) + 1;
  $("#count").textContent = `${String(n).padStart(2, "0")} / ${CONFIG.pages.length}`;
  document.title = `${CONFIG.pages[n - 1].label} · ${CONFIG.name}’s Little Universe`;
  closeMenu(); toTop();
  ScrollTrigger.getAll().forEach(t => t.kill());
  setup(id);
  flowers(current !== null);
  id === "universe" ? startUniverse() : stopUniverse();
  current = id;
}
function route() {
  const id = valid(location.hash.slice(1)) ? location.hash.slice(1) : "welcome";
  const el = $(".pg.on");
  if (!el || RM || id === current) return show(id);
  gsap.to(el, { opacity: 0, duration: .2, onComplete() {
    gsap.set(el, { clearProps: "opacity" }); show(id);
    gsap.fromTo("#" + id, { opacity: 0 }, { opacity: 1, duration: .35, clearProps: "opacity" });
  } });
}
addEventListener("hashchange", route);

/* ---------- page animations (ScrollTrigger) ---------- */
function setup(id) {
  const pg = document.getElementById(id);
  gsap.set(".rv", { clearProps: "opacity,transform" });
  if (!RM) {
    pg.querySelectorAll(".rv").forEach(el => gsap.from(el, { y: 20, opacity: 0, duration: .65, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } }));
    if (id === "welcome") {
      gsap.timeline({ defaults: { ease: "power2.out" } })
        .from(".moon", { opacity: 0, scale: .85, duration: 1.1 })
        .from(".mean", { opacity: 0, y: 10, duration: .7 }, "-=.5")
        .from(".hero", { opacity: 0, y: 24, duration: .9 }, "-=.3")
        .from("#welcome .lead", { opacity: 0, y: 14, duration: .7 }, "-=.5")
        .from(".line", { scaleY: 0, duration: .6 }, "-=.3")
        .from("#welcome .btn", { opacity: 0, y: 10, duration: .5 }, "-=.2");
    }
  }
  if (id === "reasons") {
    const num = $("#prog b");
    pg.querySelectorAll(".chapter").forEach(ch => ScrollTrigger.create({
      trigger: ch, start: "top 55%", end: "bottom 55%",
      onToggle: s => { if (s.isActive) num.textContent = ch.dataset.n; }
    }));
    if (!RM) gsap.fromTo("#cpath", { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".c3", start: "top 70%", end: "center 45%", scrub: true } });
  }
  if (id === "memories") {
    const d = { v: RM ? DAYS : 0 }, out = $("#days");
    gsap.to(d, { v: DAYS, duration: RM ? 0 : 2.2, ease: "power2.out", onUpdate: () => { out.textContent = Math.round(d.v); } });
    out.textContent = Math.round(d.v);
    if (!RM) {
      gsap.fromTo(".thread", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".story", start: "top 60%", end: "bottom 80%", scrub: true } });
      if (innerWidth >= 800) pg.querySelectorAll(".mem .mimg").forEach(el => gsap.fromTo(el, { y: 50 }, { y: -50, ease: "none", scrollTrigger: { trigger: el.closest(".mem"), start: "top bottom", end: "bottom top", scrub: true } }));
    }
  }
  ScrollTrigger.refresh();
}

/* ---------- nav ---------- */
const burger = $("#burger");
function closeMenu() { $("#menu").classList.remove("open"); burger.setAttribute("aria-expanded", "false"); lb.hidden && lenis && lenis.start(); }
burger.onclick = () => {
  const o = $("#menu").classList.toggle("open"); burger.setAttribute("aria-expanded", o);
  lenis && (o ? lenis.stop() : lenis.start());
};

/* ---------- star field (single canvas, runs on GSAP ticker) ---------- */
const cv = $("#sky"), cx = cv.getContext("2d");
let W, H, S = [];
function sizeSky() {
  const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight;
  cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0);
  S = Array.from({ length: W < 700 ? 55 : 110 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.1 + .3, p: Math.random() * 6.3, s: .4 + Math.random(), c: Math.random() < .2 ? "120,154,203" : "232,234,245" }));
}
sizeSky(); addEventListener("resize", sizeSky);
gsap.ticker.add(t => {
  if (document.body.dataset.p === "universe") return;
  cx.clearRect(0, 0, W, H);
  for (const s of S) { const a = RM ? .55 : .35 + .35 * Math.sin(t * s.s + s.p); cx.fillStyle = `rgba(${s.c},${a})`; cx.beginPath(); cx.arc(s.x, s.y, s.r, 0, 6.283); cx.fill(); }
});

/* desktop cursor glow */
if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
  const g = $("#glow");
  addEventListener("pointermove", e => { g.style.opacity = 1; g.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; }, { passive: true });
}

/* ---------- flowers: a few drift behind every page, plus a burst when you switch ---------- */
const FL = $("#flowers");
const rose = (c, f) => `<svg viewBox="0 0 40 40" fill="${f}" stroke="${c}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20c2 0 3 2 1 3.5s-5 0-5.500-3.500 3-7 8-6.500 9 4.500 8.500 10-6 11-13 10.500-13-5.500-12-13"/><path d="M20 20c-1.500-1-.5-2.500.8-2.200" fill="none"/></svg>`;
function bloom(cols, big) {
  const wrap = document.createElement("div"), c = gsap.utils.random(cols);
  wrap.innerHTML = rose(c, c + "22"); const el = wrap.firstChild; el.style.width = el.style.height = gsap.utils.random(big ? 34 : 26, big ? 70 : 54) + "px";
  FL.appendChild(el); return el;
}
function flowers(burst) {
  FL.querySelectorAll("svg").forEach(e => gsap.killTweensOf(e)); FL.innerHTML = "";
  const ac = getComputedStyle(document.body).getPropertyValue("--ac").trim(), cols = [ac, "#C58FAF", "#9B87C9"], w = innerWidth, h = innerHeight, r = gsap.utils.random;
  for (let i = 0, n = RM ? 4 : w < 700 ? 4 : 7; i < n; i++) {
    const el = bloom(cols, true);
    gsap.set(el, { x: r(0, w), y: r(0, h), rotation: r(-40, 40) });
    gsap.to(el, { opacity: r(.22, .4), duration: 1.4 });
    if (!RM) gsap.to(el, { x: "+=" + r(-140, 140), y: "+=" + r(-180, 180), rotation: "+=" + r(-80, 80), duration: r(8, 14), ease: "sine.inOut", repeat: -1, yoyo: true });
  }
  if (burst && !RM) for (let i = 0, n = w < 700 ? 7 : 12; i < n; i++) {
    const el = bloom(cols, false), x = r(0, w);
    gsap.set(el, { x, y: h + 60, rotation: r(0, 360) });
    gsap.to(el, { y: -140, rotation: "+=" + r(-200, 200), duration: r(2.6, 4.2), delay: i * .07, ease: "power1.out" });
    gsap.to(el, { x: "+=" + r(-90, 90), duration: r(1.2, 1.8), delay: i * .07, ease: "sine.inOut", yoyo: true, repeat: 2 });
    gsap.timeline({ delay: i * .07 }).to(el, { opacity: .65, duration: .5 }).to(el, { opacity: 0, duration: 1.2 }, "+=1.4").call(() => el.remove());
  }
}

/* ---------- Three.js universe ---------- */
let U = null;
function glowTex(color) {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const x = c.getContext("2d"), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, color); g.addColorStop(.25, color); g.addColorStop(1, "rgba(0,0,0,0)");
  x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c);
}
function startUniverse() {
  if (U) return;
  const c = $("#uc"), box = c.parentElement; box.classList.remove("fallback");
  let r;
  try { r = new THREE.WebGLRenderer({ canvas: c, antialias: false, alpha: true }); } catch (e) { box.classList.add("fallback"); return; }
  if (!r.getContext()) { box.classList.add("fallback"); return; }
  r.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(60, 1, .1, 300), g = new THREE.Group(); scene.add(g);
  const mobile = innerWidth < 700, N = mobile ? 500 : 1100, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const R = 70 + Math.random() * 40, th = Math.random() * 6.283, ph = Math.acos(2 * Math.random() - 1);
    pos.set([R * Math.sin(ph) * Math.cos(th), R * Math.sin(ph) * Math.sin(th), R * Math.cos(ph)], i * 3);
  }
  const pg = new THREE.BufferGeometry(); pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xE8EAF5, size: 1.1, sizeAttenuation: false, transparent: true, opacity: .8 })); g.add(dust);
  const tex = [glowTex("rgba(155,135,201,.5)"), glowTex("rgba(120,154,203,.45)"), glowTex("rgba(232,234,245,1)"), glowTex("rgba(232,234,245,.35)")];
  [[-30, 10, -90, 120, 0], [35, -15, -95, 140, 1], [0, 30, -100, 110, 0]].forEach(([x, y, z, s, k]) => {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex[k], transparent: true, opacity: .3, depthWrite: false, blending: THREE.AdditiveBlending })); sp.position.set(x, y, z); sp.scale.set(s, s, 1); g.add(sp);
  });
  const moon = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32), new THREE.MeshBasicMaterial({ color: 0xE8EAF5 })); moon.position.set(-24, 14, -60); g.add(moon);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex[3], transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); halo.position.copy(moon.position); halo.scale.set(34, 34, 1); g.add(halo);
  const spots = [[-12, -8], [-1, 12], [14, 4], [22, -12], [2, -18]], hit = [], pts = [];
  CONFIG.stars.forEach((msg, i) => {
    const [x, y] = spots[i % spots.length], sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex[2], transparent: true, depthWrite: false })); sp.position.set(x, y, -50); sp.scale.set(5, 5, 1); sp.userData.msg = msg; g.add(sp); hit.push(sp); pts.push(sp.position);
  });
  const lg = new THREE.BufferGeometry().setFromPoints(pts), lines = new THREE.Line(lg, new THREE.LineBasicMaterial({ color: 0x789ACB, transparent: true, opacity: .35 })); g.add(lines);

  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(); let tx = 0, ty = 0, down = null, timer;
  const size = () => { const w = innerWidth, h = innerHeight; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
  const move = e => { tx = (e.clientX / innerWidth - .5) * .5; ty = (e.clientY / innerHeight - .5) * .3; };
  const pd = e => { down = [e.clientX, e.clientY]; };
  const pu = e => {
    if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 8) return;
    mouse.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); ray.setFromCamera(mouse, cam);
    const h = ray.intersectObjects(hit)[0]; if (!h) return;
    const m = $("#starmsg"); m.textContent = h.object.userData.msg; m.classList.add("show");
    clearTimeout(timer); timer = setTimeout(() => m.classList.remove("show"), 5000);
  };
  const tick = t => {
    g.rotation.y += (tx - g.rotation.y) * .04; g.rotation.x += (ty - g.rotation.x) * .04;
    if (!RM) { dust.rotation.y = t * .004; hit.forEach((s, i) => s.material.opacity = .65 + .35 * Math.sin(t * 1.2 + i)); }
    r.render(scene, cam);
  };
  size(); addEventListener("resize", size); c.addEventListener("pointermove", move); c.addEventListener("pointerdown", pd); c.addEventListener("pointerup", pu);
  gsap.ticker.add(tick);
  U = { dispose() {
    gsap.ticker.remove(tick); removeEventListener("resize", size);
    c.removeEventListener("pointermove", move); c.removeEventListener("pointerdown", pd); c.removeEventListener("pointerup", pu);
    scene.traverse(o => { o.geometry && o.geometry.dispose(); if (o.material) { o.material.map && o.material.map.dispose(); o.material.dispose(); } });
    r.dispose(); clearTimeout(timer); $("#starmsg").classList.remove("show");
  } };
}
function stopUniverse() { if (U) { U.dispose(); U = null; } }

/* ---------- music (persists across pages) ---------- */
(function music() {
  const au = $("#au"), pl = $("#player");
  if (!CONFIG.music.src) { pl.classList.add("none"); return; }
  au.src = CONFIG.music.src; au.volume = .6; $("#ptitle").textContent = CONFIG.music.title;
  $("#pp").onclick = () => { au.paused ? au.play().catch(() => {}) : au.pause(); };
  au.onplay = () => { $("#pp").textContent = "❚❚"; $("#pp").setAttribute("aria-label", "Pause music"); };
  au.onpause = () => { $("#pp").textContent = "▶"; $("#pp").setAttribute("aria-label", "Play music"); };
  au.ontimeupdate = () => { $("#pbar").style.width = (au.currentTime / (au.duration || 1) * 100) + "%"; };
  au.onerror = () => { $("#ptitle").textContent = "Add a file to /audio"; };
  $("#vol").oninput = e => { au.volume = e.target.value; };
  $("#mute").onclick = () => { au.muted = !au.muted; $("#mute").textContent = au.muted ? "✕" : "♪"; };
})();

$("#songname").textContent = CONFIG.music.title;
$("#playsong").onclick = () => $("#pp").click();

let rt; document.addEventListener("load", () => { clearTimeout(rt); rt = setTimeout(() => ScrollTrigger.refresh(), 150); }, true);

route();
