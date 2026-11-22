const SDK = new URL("../vendor/ui-sdk/web/", import.meta.url);

function whenIdle(fn) {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(fn, { timeout: 1800 });
  } else {
    setTimeout(fn, 200);
  }
}

function near(el, cb, rootMargin = "480px") {
  if (!el) return;
  if (!("IntersectionObserver" in window)) {
    cb();
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      obs.disconnect();
      cb();
    }
  }, { rootMargin });
  io.observe(el);
}

function load(name) {
  return import(new URL(`${name}.js`, SDK).href);
}

const compact = window.matchMedia("(max-width: 63.99rem)");

if (compact.matches) {
  whenIdle(() => load("drawer"));
}

near(document.getElementById("especialidades"), () => load("tabs"));
near(document.getElementById("duvidas"), () => load("accordion"));
near(document.getElementById("depoimentos"), () => {
  if (compact.matches) load("carousel");
});
near(document.getElementById("agendar"), async () => {
  await Promise.all([load("calendar"), load("segmented-control")]);
  initBooking();
});

function isoLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function labelDate(iso) {
  if (!iso || typeof iso !== "string") return null;
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  }).format(new Date(year, month - 1, day));
}

function initBooking() {
  const cal = document.querySelector("#agendar ui-calendar");
  const seg = document.querySelector("#periodo");
  const sel = document.querySelector("#booking-esp");
  const live = document.querySelector("#booking-live");
  const btn = document.querySelector("#booking-wa");
  if (!cal || !btn) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const max = new Date(today);
  max.setDate(max.getDate() + 30);

  cal.setAttribute("min", isoLocal(today));
  cal.setAttribute("max", isoLocal(max));
  cal.min = isoLocal(today);
  cal.max = isoLocal(max);
  cal.unavailable = { weekday: [0] };
  cal.locale = "pt-BR";

  const state = {
    date: typeof cal.value === "string" ? cal.value : null,
    period: seg?.value || "manha",
    esp: sel?.value || "clínica geral",
  };

  function update() {
    const day = labelDate(state.date);
    const periodo = state.period === "tarde" ? "tarde" : "manhã";
    const text = day
      ? `Olá! Gostaria de agendar ${state.esp} no dia ${day} pela ${periodo}. (mensagem de demonstração)`
      : `Olá! Gostaria de agendar ${state.esp}. (mensagem de demonstração)`;
    btn.href = `https://wa.me/5571981587532?text=${encodeURIComponent(text)}`;
    if (live) {
      live.textContent = day
        ? `Mensagem pronta: ${state.esp}, ${day}, período da ${periodo}.`
        : "Escolha um dia no calendário para completar a mensagem.";
    }
  }

  cal.addEventListener("valuechange", (event) => {
    const value = event.detail?.value ?? cal.value;
    state.date = typeof value === "string" ? value : null;
    update();
  });
  seg?.addEventListener("valuechange", (event) => {
    state.period = event.detail?.value ?? seg.value ?? "manha";
    update();
  });
  sel?.addEventListener("change", () => {
    state.esp = sel.value;
    update();
  });

  update();
  document.documentElement.classList.add("js-booking");
}

const floatBtn = document.querySelector(".float-wa");
const heroCta = document.querySelector("#hero-cta");
if (floatBtn && heroCta && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    ([entry]) => {
      const hide = Boolean(entry?.isIntersecting);
      floatBtn.hidden = hide;
    },
    { threshold: 0.4 }
  );
  io.observe(heroCta);
}

document.querySelector("#menu-nav")?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    document.querySelector("ui-drawer-close button")?.click();
  }
});
