import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

// ── Slide data ──────────────────────────────────────────────────────────────
const SLIDES = [
  { id: 0, label: "Введение", tag: "SLIDE_01" },
  { id: 1, label: "История", tag: "SLIDE_02" },
  { id: 2, label: "Производство", tag: "SLIDE_03" },
  { id: 3, label: "Компоненты", tag: "SLIDE_04" },
  { id: 4, label: "Заключение", tag: "SLIDE_05" },
];

// ── Slide 0: Введение ────────────────────────────────────────────────────────
function SlideIntro() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
      <div className="slide-item">
        <span className="pcb-badge">PCB Technology // rev.2024</span>
      </div>

      <div className="slide-item relative w-full flex justify-center">
        <svg width="600" height="80" viewBox="0 0 600 80" fill="none" className="opacity-40">
          <path
            d="M0 40 H100 V10 H200 V40 H400 V70 H500 V40 H600"
            stroke="#00ff88" strokeWidth="1.5" fill="none"
            strokeDasharray="1000" strokeDashoffset="1000"
            style={{ animation: "trace-draw 2s 0.3s ease forwards" }}
          />
          <circle cx="100" cy="10" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
          <circle cx="200" cy="40" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
          <circle cx="400" cy="70" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
          <circle cx="500" cy="40" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
          <rect x="90" y="0" width="20" height="20" rx="2" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.3)" strokeWidth="1" />
          <rect x="490" y="30" width="20" height="20" rx="2" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.3)" strokeWidth="1" />
        </svg>
      </div>

      <h1
        className="slide-item font-orbitron text-5xl md:text-7xl font-black leading-none tracking-tight glow-green animate-flicker"
        style={{ color: "#00ff88" }}
      >
        ПЕЧАТНЫЕ<br />ПЛАТЫ
      </h1>

      <div className="slide-item pcb-divider w-64" />

      <p className="slide-item font-mono-ibm text-base md:text-lg text-green-300 max-w-xl leading-relaxed" style={{ opacity: 0.75 }}>
        Технология, лежащая в основе всей современной электроники —<br />
        от смартфонов до космических аппаратов
      </p>

      <div className="slide-item flex gap-8 mt-4">
        {[
          { val: "1936", label: "Год изобретения" },
          { val: "2.3B", label: "Плат в год" },
          { val: "18+", label: "Слоёв в PCB" },
        ].map((s) => (
          <div key={s.val} className="text-center">
            <div className="font-orbitron text-2xl font-bold" style={{ color: "#00ff88" }}>{s.val}</div>
            <div className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.5)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="slide-item absolute top-0 left-0 w-12 h-12 border-t border-l" style={{ borderColor: "rgba(0,255,136,0.3)" }} />
      <div className="slide-item absolute top-0 right-0 w-12 h-12 border-t border-r" style={{ borderColor: "rgba(0,255,136,0.3)" }} />
      <div className="slide-item absolute bottom-0 left-0 w-12 h-12 border-b border-l" style={{ borderColor: "rgba(0,255,136,0.3)" }} />
      <div className="slide-item absolute bottom-0 right-0 w-12 h-12 border-b border-r" style={{ borderColor: "rgba(0,255,136,0.3)" }} />
    </div>
  );
}

// ── Slide 1: История ─────────────────────────────────────────────────────────
const HISTORY = [
  { year: "1936", event: "Пол Айслер изобретает печатную плату в Великобритании", icon: "Lightbulb" },
  { year: "1943", event: "США применяют PCB в радиовзрывателях — военный прорыв", icon: "Zap" },
  { year: "1956", event: "Патент на аддитивный процесс — начало массового производства", icon: "Award" },
  { year: "1961", event: "Появление многослойных плат — революция в электронике", icon: "Layers" },
  { year: "1980", event: "SMT-технология: компоненты на поверхности платы", icon: "Cpu" },
  { year: "2000+", event: "HDI и flex-PCB — платы для носимых устройств", icon: "Activity" },
];

function SlideHistory() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-6">
        <span className="pcb-badge">Хронология // TIMELINE</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>
          История развития
        </h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>
          &gt; Нажмите на событие для подробностей
        </p>
      </div>

      <div className="slide-item grid grid-cols-2 md:grid-cols-3 gap-3">
        {HISTORY.map((h, i) => (
          <div
            key={h.year}
            className={`pcb-card p-4 ${activeIdx === i ? "selected" : ""}`}
            onClick={() => setActiveIdx(activeIdx === i ? null : i)}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                style={{ border: "1px solid rgba(0,255,136,0.35)", background: "rgba(0,255,136,0.05)" }}
              >
                <Icon name={h.icon} fallback="Zap" size={14} className="text-green-400" />
              </div>
              <div>
                <div className="font-orbitron text-lg font-bold" style={{ color: "#00ff88" }}>{h.year}</div>
                <div
                  className="font-mono-ibm text-xs leading-relaxed mt-1"
                  style={{ color: activeIdx === i ? "#c8f0dc" : "rgba(200,240,220,0.55)" }}
                >
                  {h.event}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slide-item mt-4 flex items-center gap-2 overflow-hidden">
        <svg width="100%" height="20" viewBox="0 0 800 20" preserveAspectRatio="none">
          <line x1="0" y1="10" x2="800" y2="10" stroke="rgba(0,255,136,0.2)" strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle
              key={i}
              cx={60 + i * 136}
              cy="10"
              r="3"
              fill={activeIdx === i ? "#00ff88" : "rgba(0,255,136,0.3)"}
              stroke="#00ff88"
              strokeWidth="1"
              style={{ transition: "fill 0.3s" }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

// ── Slide 2: Производство ─────────────────────────────────────────────────────
const STEPS = [
  { step: "01", title: "Проектирование", desc: "CAD/EDA разработка схемы и топологии платы в специализированном ПО", color: "#00ff88" },
  { step: "02", title: "Фотолитография", desc: "Нанесение медного рисунка через фоторезист и UV-маску", color: "#00e5ff" },
  { step: "03", title: "Травление", desc: "Химическое удаление лишней меди раствором хлорного железа (FeCl₃)", color: "#ffaa00" },
  { step: "04", title: "Сверление", desc: "Лазерное и механическое сверление переходных и монтажных отверстий", color: "#00ff88" },
  { step: "05", title: "Металлизация", desc: "Гальваническое покрытие медью сквозных отверстий для межслойных соединений", color: "#00e5ff" },
  { step: "06", title: "Пайка & Тест", desc: "SMT-монтаж компонентов, оплавление припоя и AOI-контроль качества", color: "#00ff88" },
];

function SlideProduction() {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveStep((p) => (p + 1) % STEPS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Производство // MANUFACTURING</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>
          Процесс производства
        </h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>
          &gt; Шаги автопрокручиваются — нажмите чтобы зафиксировать
        </p>
      </div>

      <div className="slide-item grid grid-cols-3 md:grid-cols-6 gap-2 mb-5">
        {STEPS.map((s, i) => (
          <button
            key={s.step}
            onClick={() => { setActiveStep(i); setPaused(true); }}
            className="pcb-card p-3 text-center transition-all"
            style={activeStep === i ? { borderColor: s.color, background: `${s.color}12` } : {}}
          >
            <div
              className="font-orbitron text-lg font-bold"
              style={{ color: activeStep === i ? s.color : "rgba(0,255,136,0.35)" }}
            >
              {s.step}
            </div>
            <div className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(200,240,220,0.5)", fontSize: "0.6rem" }}>
              {s.title}
            </div>
          </button>
        ))}
      </div>

      <div
        className="slide-item pcb-card p-6 flex gap-6 items-center"
        style={{ borderColor: STEPS[activeStep].color, minHeight: "120px" }}
      >
        <div
          className="font-orbitron text-5xl font-black flex-shrink-0"
          style={{ color: STEPS[activeStep].color, opacity: 0.25 }}
        >
          {STEPS[activeStep].step}
        </div>
        <div>
          <div
            className="font-orbitron text-xl font-bold mb-2"
            style={{ color: STEPS[activeStep].color }}
          >
            {STEPS[activeStep].title}
          </div>
          <div className="font-mono-ibm text-sm leading-relaxed" style={{ color: "rgba(200,240,220,0.8)" }}>
            {STEPS[activeStep].desc}
          </div>
        </div>
        <div className="ml-auto flex flex-col gap-1">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i <= activeStep ? STEPS[activeStep].color : "rgba(0,255,136,0.15)",
                boxShadow: i === activeStep ? `0 0 8px ${STEPS[activeStep].color}` : "none",
              }}
            />
          ))}
        </div>
      </div>

      <div className="slide-item mt-3 pcb-progress">
        <div
          className="pcb-progress-fill"
          style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

// ── Slide 3: Компоненты ───────────────────────────────────────────────────────
const COMPONENTS = [
  {
    id: "sub", name: "Подложка", short: "FR-4",
    desc: "Стеклотекстолит FR-4 — самый распространённый материал. Толщина: 0.8–3.2 мм. Обеспечивает механическую прочность и электрическую изоляцию.",
    color: "#00ff88", x: 50, y: 50,
  },
  {
    id: "copper", name: "Медный слой", short: "Cu",
    desc: "Медные дорожки толщиной 18–105 мкм формируют электрические цепи. Чистота меди — 99.9%.",
    color: "#ffaa00", x: 22, y: 28,
  },
  {
    id: "mask", name: "Паяльная маска", short: "SM",
    desc: "Защитный лак (чаще зелёный) предотвращает окисление дорожек и случайные замыкания при пайке.",
    color: "#00e5ff", x: 75, y: 22,
  },
  {
    id: "silk", name: "Шелкография", short: "SS",
    desc: "Маркировка компонентов, обозначения и полярность на плате. Наносится методом трафаретной печати.",
    color: "#ff88aa", x: 25, y: 72,
  },
  {
    id: "via", name: "Переходные отверстия", short: "VIA",
    desc: "Металлизированные отверстия соединяют разные слои платы. Диаметр: 0.1–0.3 мм у микропереходов.",
    color: "#aaaaff", x: 72, y: 72,
  },
];

function SlideComponents() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeComp = COMPONENTS.find((c) => c.id === selected);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Компоненты // MATERIALS</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>
          Компоненты и материалы
        </h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>
          &gt; Нажмите на элемент схемы для изучения
        </p>
      </div>

      <div className="slide-item flex gap-6">
        {/* Interactive PCB diagram */}
        <div
          className="flex-shrink-0 relative"
          style={{
            width: 320, height: 240,
            background: "rgba(0,255,136,0.03)",
            border: "1px solid rgba(0,255,136,0.2)",
          }}
        >
          <svg width="320" height="240" className="absolute inset-0">
            {[...Array(9)].map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 28} x2="320" y2={i * 28}
                stroke="rgba(0,255,136,0.07)" strokeWidth="1" />
            ))}
            {[...Array(12)].map((_, i) => (
              <line key={`v${i}`} x1={i * 28} y1="0" x2={i * 28} y2="240"
                stroke="rgba(0,255,136,0.07)" strokeWidth="1" />
            ))}
            <path d="M70 120 H140 V67 H200" stroke="rgba(255,170,0,0.45)" strokeWidth="1.5" fill="none" />
            <path d="M200 67 H260 V120 H200 V173 H100 V120" stroke="rgba(255,170,0,0.3)" strokeWidth="1.5" fill="none" />
            <path d="M100 173 H70 V120" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" fill="none" />
            <path d="M230 53 V35 H290 V53" stroke="rgba(0,229,255,0.2)" strokeWidth="1" fill="none" />
          </svg>

          {COMPONENTS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(selected === c.id ? null : c.id)}
              className="absolute flex items-center justify-center pcb-component"
              style={{
                left: `${c.x}%`, top: `${c.y}%`,
                transform: "translate(-50%, -50%)",
                width: 38, height: 28,
                border: `1.5px solid ${selected === c.id ? c.color : "rgba(0,255,136,0.3)"}`,
                background: selected === c.id ? `${c.color}22` : "rgba(0,0,0,0.5)",
                boxShadow: selected === c.id ? `0 0 16px ${c.color}60` : "none",
                borderRadius: 2,
                transition: "all 0.2s",
              }}
            >
              <span
                className="font-orbitron font-bold"
                style={{ color: selected === c.id ? c.color : "rgba(0,255,136,0.6)", fontSize: "0.55rem" }}
              >
                {c.short}
              </span>
            </button>
          ))}

          <div
            className="absolute bottom-2 left-2 font-mono-ibm"
            style={{ color: "rgba(0,255,136,0.3)", fontSize: "0.6rem" }}
          >
            PCB_DIAGRAM_v1.2
          </div>
        </div>

        {/* Info panel */}
        <div className="flex-1 flex flex-col gap-2">
          {activeComp ? (
            <>
              <div className="pcb-card p-5 flex-1" style={{ borderColor: activeComp.color }}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: activeComp.color, boxShadow: `0 0 8px ${activeComp.color}` }}
                  />
                  <div className="font-orbitron text-lg font-bold" style={{ color: activeComp.color }}>
                    {activeComp.name}
                  </div>
                  <span className="pcb-badge ml-auto" style={{ color: activeComp.color, borderColor: `${activeComp.color}40` }}>
                    {activeComp.short}
                  </span>
                </div>
                <div className="font-mono-ibm text-sm leading-relaxed" style={{ color: "rgba(200,240,220,0.8)" }}>
                  {activeComp.desc}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="pcb-btn text-left text-xs"
              >
                ← все компоненты
              </button>
            </>
          ) : (
            <div className="flex-1 flex flex-col gap-2">
              {COMPONENTS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c.id)}
                  className="pcb-card p-3 flex items-center gap-3 text-left"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }}
                  />
                  <span className="font-mono-ibm text-xs" style={{ color: "rgba(200,240,220,0.7)" }}>
                    {c.name}
                  </span>
                  <span
                    className="ml-auto font-orbitron text-xs"
                    style={{ color: "rgba(0,255,136,0.3)" }}
                  >
                    {c.short}
                  </span>
                  <Icon name="ChevronRight" size={12} style={{ color: "rgba(0,255,136,0.3)" }} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Slide 4: Заключение ───────────────────────────────────────────────────────
function SlideConclusion() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
      <div className="slide-item">
        <span className="pcb-badge">Заключение // SUMMARY</span>
      </div>

      <h2 className="slide-item font-orbitron text-4xl md:text-5xl font-black glow-cyan" style={{ color: "#00e5ff" }}>
        БУДУЩЕЕ PCB
      </h2>

      <div className="slide-item pcb-divider w-48" />

      <div className="slide-item grid grid-cols-3 gap-4 w-full">
        {[
          { icon: "Layers", title: "3D-печать PCB", desc: "Аддитивное производство сложнейших топологий без травления" },
          { icon: "Cpu", title: "Органические платы", desc: "Биоразлагаемые подложки и гибкие медицинские импланты" },
          { icon: "Radio", title: "RF в текстолите", desc: "Антенны и радиочастотные цепи внутри слоёв платы" },
        ].map((c) => (
          <div key={c.title} className="pcb-card p-5 flex flex-col items-center gap-3">
            <div
              className="w-12 h-12 flex items-center justify-center"
              style={{ border: "1px solid rgba(0,229,255,0.4)", background: "rgba(0,229,255,0.05)" }}
            >
              <Icon name={c.icon} fallback="Cpu" size={22} style={{ color: "#00e5ff" }} />
            </div>
            <div className="font-orbitron text-sm font-bold" style={{ color: "#00e5ff" }}>{c.title}</div>
            <div className="font-mono-ibm text-xs leading-relaxed" style={{ color: "rgba(200,240,220,0.6)" }}>
              {c.desc}
            </div>
          </div>
        ))}
      </div>

      <p className="slide-item font-mono-ibm text-sm max-w-lg leading-relaxed" style={{ color: "rgba(200,240,220,0.6)" }}>
        Печатные платы остаются фундаментом прогресса — от потребительской
        электроники до квантовых компьютеров и медицинских имплантатов
      </p>

      <div
        className="slide-item font-mono-ibm text-xs animate-pulse-dot"
        style={{ color: "rgba(0,255,136,0.5)" }}
      >
        // END OF PRESENTATION — pcb.presentation@v1.0.0
      </div>

      <div className="slide-item absolute top-0 left-0 w-12 h-12 border-t border-l" style={{ borderColor: "rgba(0,229,255,0.3)" }} />
      <div className="slide-item absolute top-0 right-0 w-12 h-12 border-t border-r" style={{ borderColor: "rgba(0,229,255,0.3)" }} />
      <div className="slide-item absolute bottom-0 left-0 w-12 h-12 border-b border-l" style={{ borderColor: "rgba(0,229,255,0.3)" }} />
      <div className="slide-item absolute bottom-0 right-0 w-12 h-12 border-b border-r" style={{ borderColor: "rgba(0,229,255,0.3)" }} />
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
const SLIDE_COMPONENTS = [SlideIntro, SlideHistory, SlideProduction, SlideComponents, SlideConclusion];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const goTo = useCallback((idx: number) => {
    if (idx === current) return;
    setPrev(current);
    setCurrent(idx);
    setTimeout(() => setPrev(null), 650);
  }, [current]);

  const goNext = () => goTo(Math.min(current + 1, SLIDES.length - 1));
  const goPrev = () => goTo(Math.max(current - 1, 0));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  return (
    <div className="pcb-app">
      <div className="pcb-grid-bg" />
      <div className="pcb-traces" />
      <div className="scanline" />

      {/* ── Top Nav ── */}
      <nav
        className="relative z-10 flex items-center justify-between px-6 py-3"
        style={{ borderBottom: "1px solid rgba(0,255,136,0.12)", background: "rgba(4,13,8,0.85)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="animate-pulse-dot w-2 h-2 rounded-full"
            style={{ background: "#00ff88", boxShadow: "0 0 8px #00ff88" }}
          />
          <span className="font-mono-ibm text-xs" style={{ color: "rgba(0,255,136,0.6)" }}>
            PCB_PRESENTATION.exe
          </span>
        </div>

        <div className="flex gap-1">
          {SLIDES.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className="font-mono-ibm text-xs px-3 py-1.5 transition-all duration-200"
              style={{
                color: current === s.id ? "#00ff88" : "rgba(0,255,136,0.35)",
                background: current === s.id ? "rgba(0,255,136,0.1)" : "transparent",
                border: `1px solid ${current === s.id ? "rgba(0,255,136,0.4)" : "transparent"}`,
                borderRadius: 2,
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="font-mono-ibm text-xs" style={{ color: "rgba(0,255,136,0.4)" }}>
          {String(current + 1).padStart(2, "0")}/{SLIDES.length}
        </div>
      </nav>

      {/* ── Slides ── */}
      <div className="slide-container relative z-10">
        {SLIDE_COMPONENTS.map((SlideComp, idx) => (
          <div
            key={idx}
            className={`slide ${idx === current ? "active" : ""} ${idx === prev ? "prev" : ""}`}
          >
            <SlideComp key={`slide-${idx}-${current === idx}`} />
          </div>
        ))}
      </div>

      {/* ── Bottom controls ── */}
      <div
        className="relative z-10 flex items-center justify-between px-6 py-3"
        style={{ borderTop: "1px solid rgba(0,255,136,0.12)", background: "rgba(4,13,8,0.85)" }}
      >
        <div className="flex-1 mr-6 pcb-progress">
          <div
            className="pcb-progress-fill"
            style={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
          />
        </div>

        <div className="flex items-center gap-3">
          <button onClick={goPrev} disabled={current === 0} className="pcb-btn flex items-center gap-2">
            <Icon name="ChevronLeft" size={14} />
            <span>Назад</span>
          </button>

          <div className="flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  background: i === current ? "#00ff88" : "rgba(0,255,136,0.25)",
                  boxShadow: i === current ? "0 0 8px rgba(0,255,136,0.6)" : "none",
                }}
              />
            ))}
          </div>

          <button onClick={goNext} disabled={current === SLIDES.length - 1} className="pcb-btn flex items-center gap-2">
            <span>Вперёд</span>
            <Icon name="ChevronRight" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}