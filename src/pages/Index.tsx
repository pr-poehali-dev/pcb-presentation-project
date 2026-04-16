import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  { id: 0,  label: "Введение" },
  { id: 1,  label: "Что такое PCB" },
  { id: 2,  label: "История" },
  { id: 3,  label: "Первые платы" },
  { id: 4,  label: "Эволюция" },
  { id: 5,  label: "Производство" },
  { id: 6,  label: "Фотолитография" },
  { id: 7,  label: "Травление" },
  { id: 8,  label: "Компоненты" },
  { id: 9,  label: "Слои PCB" },
  { id: 10, label: "Материалы" },
  { id: 11, label: "Типы плат" },
  { id: 12, label: "Применение" },
  { id: 13, label: "Стандарты" },
  { id: 14, label: "Заключение" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Slide 0: Введение
// ─────────────────────────────────────────────────────────────────────────────
function Slide00() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
      <div className="slide-item"><span className="pcb-badge">PCB Technology // rev.2024</span></div>
      <div className="slide-item relative w-full flex justify-center">
        <svg width="600" height="80" viewBox="0 0 600 80" fill="none" className="opacity-40">
          <path d="M0 40 H100 V10 H200 V40 H400 V70 H500 V40 H600"
            stroke="#00ff88" strokeWidth="1.5" fill="none"
            strokeDasharray="1000" strokeDashoffset="1000"
            style={{ animation: "trace-draw 2s 0.3s ease forwards" }} />
          <circle cx="100" cy="10" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
          <circle cx="200" cy="40" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
          <circle cx="400" cy="70" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
          <circle cx="500" cy="40" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
          <rect x="90" y="0" width="20" height="20" rx="2" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.3)" strokeWidth="1" />
          <rect x="490" y="30" width="20" height="20" rx="2" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.3)" strokeWidth="1" />
        </svg>
      </div>
      <h1 className="slide-item font-orbitron text-5xl md:text-7xl font-black leading-none tracking-tight glow-green animate-flicker" style={{ color: "#00ff88" }}>
        ПЕЧАТНЫЕ<br />ПЛАТЫ
      </h1>
      <div className="slide-item pcb-divider w-64" />
      <p className="slide-item font-mono-ibm text-base md:text-lg max-w-xl leading-relaxed" style={{ color: "rgba(200,240,220,0.75)" }}>
        Технология, лежащая в основе всей современной электроники —<br />от смартфонов до космических аппаратов
      </p>
      <div className="slide-item flex gap-8 mt-4">
        {[{ val: "1936", label: "Год изобретения" }, { val: "2.3B", label: "Плат в год" }, { val: "18+", label: "Слоёв в PCB" }].map((s) => (
          <div key={s.val} className="text-center">
            <div className="font-orbitron text-2xl font-bold" style={{ color: "#00ff88" }}>{s.val}</div>
            <div className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.5)" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <CornerMarkers color="rgba(0,255,136,0.3)" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 1: Что такое PCB
// ─────────────────────────────────────────────────────────────────────────────
function Slide01() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-6">
        <span className="pcb-badge">Определение // DEFINITION</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Что такое печатная плата?</h2>
      </div>
      <div className="slide-item grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="pcb-card p-5">
            <div className="font-orbitron text-sm font-bold mb-2" style={{ color: "#00ff88" }}>PCB (Printed Circuit Board)</div>
            <div className="font-mono-ibm text-sm leading-relaxed" style={{ color: "rgba(200,240,220,0.8)" }}>
              Жёсткая или гибкая пластина из изолирующего материала с нанесёнными проводящими дорожками, соединяющими электронные компоненты.
            </div>
          </div>
          <div className="pcb-card p-5">
            <div className="font-orbitron text-sm font-bold mb-2" style={{ color: "#00e5ff" }}>Основная функция</div>
            <div className="font-mono-ibm text-sm leading-relaxed" style={{ color: "rgba(200,240,220,0.8)" }}>
              Механическое крепление и электрическое соединение компонентов без использования проводов, что обеспечивает компактность и надёжность.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {[
            { icon: "Cpu", label: "Электронная основа", desc: "Базовый элемент любого устройства" },
            { icon: "Shield", label: "Надёжность", desc: "Срок службы 20–30 лет" },
            { icon: "Minimize2", label: "Миниатюризация", desc: "Дорожки от 0.1 мм" },
            { icon: "Zap", label: "Быстродействие", desc: "Сигнал до 10 ГГц и выше" },
          ].map((item) => (
            <div key={item.label} className="pcb-card p-3 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ border: "1px solid rgba(0,255,136,0.3)", background: "rgba(0,255,136,0.05)" }}>
                <Icon name={item.icon} fallback="Cpu" size={14} style={{ color: "#00ff88" }} />
              </div>
              <div>
                <div className="font-orbitron text-xs font-bold" style={{ color: "#00ff88" }}>{item.label}</div>
                <div className="font-mono-ibm text-xs" style={{ color: "rgba(200,240,220,0.55)" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 2: История
// ─────────────────────────────────────────────────────────────────────────────
const HISTORY = [
  { year: "1936", event: "Пол Айслер изобретает печатную плату в Великобритании", icon: "Lightbulb" },
  { year: "1943", event: "США применяют PCB в радиовзрывателях — военный прорыв", icon: "Zap" },
  { year: "1956", event: "Патент на аддитивный процесс — начало массового производства", icon: "Award" },
  { year: "1961", event: "Появление многослойных плат — революция в электронике", icon: "Layers" },
  { year: "1980", event: "SMT-технология: компоненты на поверхности платы", icon: "Cpu" },
  { year: "2000+", event: "HDI и flex-PCB — платы для носимых устройств", icon: "Activity" },
];

function Slide02() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-6">
        <span className="pcb-badge">Хронология // TIMELINE</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>История развития</h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>&gt; Нажмите на событие для подробностей</p>
      </div>
      <div className="slide-item grid grid-cols-2 md:grid-cols-3 gap-3">
        {HISTORY.map((h, i) => (
          <div key={h.year} className={`pcb-card p-4 ${activeIdx === i ? "selected" : ""}`} onClick={() => setActiveIdx(activeIdx === i ? null : i)}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center" style={{ border: "1px solid rgba(0,255,136,0.35)", background: "rgba(0,255,136,0.05)" }}>
                <Icon name={h.icon} fallback="Zap" size={14} className="text-green-400" />
              </div>
              <div>
                <div className="font-orbitron text-lg font-bold" style={{ color: "#00ff88" }}>{h.year}</div>
                <div className="font-mono-ibm text-xs leading-relaxed mt-1" style={{ color: activeIdx === i ? "#c8f0dc" : "rgba(200,240,220,0.55)" }}>
                  {h.event}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slide-item mt-4 overflow-hidden">
        <svg width="100%" height="20" viewBox="0 0 800 20" preserveAspectRatio="none">
          <line x1="0" y1="10" x2="800" y2="10" stroke="rgba(0,255,136,0.2)" strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx={60 + i * 136} cy="10" r="3"
              fill={activeIdx === i ? "#00ff88" : "rgba(0,255,136,0.3)"}
              stroke="#00ff88" strokeWidth="1" style={{ transition: "fill 0.3s" }} />
          ))}
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 3: Первые платы
// ─────────────────────────────────────────────────────────────────────────────
function Slide03() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-6">
        <span className="pcb-badge">Истоки // ORIGINS</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Первые печатные платы</h2>
      </div>
      <div className="slide-item grid grid-cols-3 gap-4">
        {[
          { year: "1936–1943", title: "Прототип Айслера", desc: "Пол Айслер разработал первую PCB для радиоприёмника, используя фольгу на изолирующей основе. Патент был засекречен военными до 1948 г.", color: "#00ff88" },
          { year: "1948–1955", title: "Военное применение", desc: "После рассекречивания технология применялась в военных взрывателях. США активно финансировали разработки для оборонной промышленности.", color: "#ffaa00" },
          { year: "1956–1960", title: "Гражданское внедрение", desc: "Первые коммерческие платы появились в телевизорах и радиоприёмниках. Стоимость производства резко снизилась благодаря субтрактивному методу.", color: "#00e5ff" },
        ].map((c) => (
          <div key={c.year} className="pcb-card p-5 flex flex-col gap-3">
            <div className="font-mono-ibm text-xs" style={{ color: "rgba(200,240,220,0.4)" }}>{c.year}</div>
            <div className="font-orbitron text-base font-bold" style={{ color: c.color }}>{c.title}</div>
            <div className="pcb-divider" />
            <div className="font-mono-ibm text-xs leading-relaxed" style={{ color: "rgba(200,240,220,0.7)" }}>{c.desc}</div>
          </div>
        ))}
      </div>
      <div className="slide-item mt-5 pcb-card p-4 flex items-center gap-4">
        <Icon name="Info" fallback="Info" size={18} style={{ color: "#ffaa00", flexShrink: 0 }} />
        <div className="font-mono-ibm text-xs leading-relaxed" style={{ color: "rgba(200,240,220,0.7)" }}>
          Пол Айслер — австрийский инженер, эмигрировавший в Великобританию. Его изобретение изменило мировую электронику, однако он получил лишь небольшое вознаграждение при жизни.
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 4: Эволюция технологий
// ─────────────────────────────────────────────────────────────────────────────
function Slide04() {
  const [hovered, setHovered] = useState<number | null>(null);
  const eras = [
    { era: "1960–1970", name: "Through-Hole", desc: "Компоненты вставляются в отверстия и паяются снизу. Надёжно, но занимает много места.", color: "#00ff88", pct: 20 },
    { era: "1970–1980", name: "Двуслойные PCB", desc: "Два слоя меди с переходными отверстиями (via). Вдвое больше плотность трассировки.", color: "#00e5ff", pct: 40 },
    { era: "1980–1990", name: "SMT революция", desc: "Surface Mount Technology — компоненты паяются прямо на поверхность. Плотность возросла в 10 раз.", color: "#ffaa00", pct: 65 },
    { era: "1990–2000", name: "Многослойные", desc: "4–8 слоёв стали стандартом для ПК и телекома. Появились скрытые и глухие переходы.", color: "#ff88aa", pct: 80 },
    { era: "2000+", name: "HDI & Micro-via", desc: "High Density Interconnect — отверстия 0.1 мм, 16+ слоёв, применяются в смартфонах.", color: "#aaaaff", pct: 100 },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-6">
        <span className="pcb-badge">Эволюция // EVOLUTION</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Эволюция технологий</h2>
      </div>
      <div className="slide-item flex flex-col gap-3">
        {eras.map((e, i) => (
          <div key={e.era} className="pcb-card p-4 cursor-pointer" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
            <div className="flex items-center gap-4">
              <div className="font-mono-ibm text-xs w-24 flex-shrink-0" style={{ color: "rgba(200,240,220,0.45)" }}>{e.era}</div>
              <div className="font-orbitron text-sm font-bold w-36 flex-shrink-0" style={{ color: e.color }}>{e.name}</div>
              <div className="flex-1">
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,255,136,0.1)" }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: hovered === i ? `${e.pct}%` : "8px", background: e.color, boxShadow: `0 0 8px ${e.color}80` }} />
                </div>
              </div>
              <div className="font-mono-ibm text-xs w-8 text-right flex-shrink-0" style={{ color: e.color }}>{e.pct}%</div>
            </div>
            {hovered === i && (
              <div className="font-mono-ibm text-xs mt-2 ml-28 leading-relaxed" style={{ color: "rgba(200,240,220,0.7)" }}>{e.desc}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 5: Производство — обзор
// ─────────────────────────────────────────────────────────────────────────────
const STEPS = [
  { step: "01", title: "Проектирование", desc: "CAD/EDA разработка схемы и топологии платы в специализированном ПО", color: "#00ff88" },
  { step: "02", title: "Фотолитография", desc: "Нанесение медного рисунка через фоторезист и UV-маску", color: "#00e5ff" },
  { step: "03", title: "Травление", desc: "Химическое удаление лишней меди раствором хлорного железа (FeCl₃)", color: "#ffaa00" },
  { step: "04", title: "Сверление", desc: "Лазерное и механическое сверление переходных и монтажных отверстий", color: "#00ff88" },
  { step: "05", title: "Металлизация", desc: "Гальваническое покрытие медью сквозных отверстий для межслойных соединений", color: "#00e5ff" },
  { step: "06", title: "Пайка & Тест", desc: "SMT-монтаж компонентов, оплавление припоя и AOI-контроль качества", color: "#00ff88" },
];

function Slide05() {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActiveStep((p) => (p + 1) % STEPS.length), 2000);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Производство // MANUFACTURING</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Процесс производства</h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>&gt; Автопрокрутка — нажмите для фиксации</p>
      </div>
      <div className="slide-item grid grid-cols-6 gap-2 mb-5">
        {STEPS.map((s, i) => (
          <button key={s.step} onClick={() => { setActiveStep(i); setPaused(true); }}
            className="pcb-card p-3 text-center transition-all"
            style={activeStep === i ? { borderColor: s.color, background: `${s.color}12` } : {}}>
            <div className="font-orbitron text-lg font-bold" style={{ color: activeStep === i ? s.color : "rgba(0,255,136,0.35)" }}>{s.step}</div>
            <div className="font-mono-ibm mt-1" style={{ color: "rgba(200,240,220,0.5)", fontSize: "0.6rem" }}>{s.title}</div>
          </button>
        ))}
      </div>
      <div className="slide-item pcb-card p-6 flex gap-6 items-center" style={{ borderColor: STEPS[activeStep].color, minHeight: "110px" }}>
        <div className="font-orbitron text-5xl font-black flex-shrink-0" style={{ color: STEPS[activeStep].color, opacity: 0.2 }}>{STEPS[activeStep].step}</div>
        <div>
          <div className="font-orbitron text-xl font-bold mb-2" style={{ color: STEPS[activeStep].color }}>{STEPS[activeStep].title}</div>
          <div className="font-mono-ibm text-sm" style={{ color: "rgba(200,240,220,0.8)" }}>{STEPS[activeStep].desc}</div>
        </div>
        <div className="ml-auto flex flex-col gap-1">
          {STEPS.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i <= activeStep ? STEPS[activeStep].color : "rgba(0,255,136,0.15)", boxShadow: i === activeStep ? `0 0 8px ${STEPS[activeStep].color}` : "none" }} />
          ))}
        </div>
      </div>
      <div className="slide-item mt-3 pcb-progress">
        <div className="pcb-progress-fill" style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 6: Фотолитография (детально)
// ─────────────────────────────────────────────────────────────────────────────
function Slide06() {
  const [step, setStep] = useState(0);
  const steps = [
    { n: "1", title: "Нанесение фоторезиста", desc: "На медную поверхность наносится светочувствительный слой — фоторезист. Толщина: 1–50 мкм." },
    { n: "2", title: "Экспонирование", desc: "UV-свет проходит через фотомаску с рисунком схемы, засвечивая нужные участки фоторезиста." },
    { n: "3", title: "Проявление", desc: "Химический раствор (проявитель) удаляет незасвеченные участки, открывая медь под ними." },
    { n: "4", title: "Дубление (опционально)", desc: "Задубливание фоторезиста термообработкой для защиты от агрессивного травителя." },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-6">
        <span className="pcb-badge">Технология // PHOTOLITHOGRAPHY</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00e5ff" }}>Фотолитография</h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,229,255,0.45)" }}>&gt; Ключевой этап формирования рисунка схемы</p>
      </div>
      <div className="slide-item flex gap-4">
        <div className="flex flex-col gap-2 w-48 flex-shrink-0">
          {steps.map((s, i) => (
            <button key={s.n} onClick={() => setStep(i)}
              className="pcb-card p-3 text-left transition-all"
              style={step === i ? { borderColor: "#00e5ff", background: "rgba(0,229,255,0.08)" } : {}}>
              <div className="font-orbitron text-xs font-bold" style={{ color: step === i ? "#00e5ff" : "rgba(0,229,255,0.4)" }}>Шаг {s.n}</div>
              <div className="font-mono-ibm text-xs mt-0.5" style={{ color: "rgba(200,240,220,0.5)", fontSize: "0.6rem" }}>{s.title}</div>
            </button>
          ))}
        </div>
        <div className="flex-1 pcb-card p-6 flex flex-col justify-center" style={{ borderColor: "#00e5ff" }}>
          {/* Визуализация слоёв */}
          <div className="mb-5 flex flex-col gap-1">
            {[
              { label: "Фоторезист", h: 12, color: step >= 0 ? "#88aaff" : "transparent", opacity: step === 0 || step === 1 ? 1 : step === 2 ? 0.3 : 0.1 },
              { label: "Медь (Cu)", h: 18, color: "#ffaa00", opacity: 1 },
              { label: "FR-4 (подложка)", h: 24, color: "#00ff88", opacity: 0.4 },
            ].map((layer) => (
              <div key={layer.label} className="flex items-center gap-3">
                <div className="font-mono-ibm text-xs w-32 text-right flex-shrink-0" style={{ color: "rgba(200,240,220,0.45)", fontSize: "0.6rem" }}>{layer.label}</div>
                <div className="flex-1 rounded transition-all duration-500"
                  style={{ height: layer.h, background: layer.color, opacity: layer.opacity, boxShadow: `0 0 8px ${layer.color}40` }} />
              </div>
            ))}
          </div>
          <div className="font-orbitron text-base font-bold mb-2" style={{ color: "#00e5ff" }}>Шаг {steps[step].n}: {steps[step].title}</div>
          <div className="font-mono-ibm text-sm leading-relaxed" style={{ color: "rgba(200,240,220,0.8)" }}>{steps[step].desc}</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 7: Травление
// ─────────────────────────────────────────────────────────────────────────────
function Slide07() {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (progress >= 100) { setRunning(false); return; }
    const t = setTimeout(() => setProgress((p) => Math.min(p + 2, 100)), 60);
    return () => clearTimeout(t);
  }, [running, progress]);

  const reset = () => { setProgress(0); setRunning(false); };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Химия // ETCHING</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#ffaa00" }}>Процесс травления</h2>
      </div>
      <div className="slide-item grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="pcb-card p-4" style={{ borderColor: "rgba(255,170,0,0.4)" }}>
            <div className="font-orbitron text-sm font-bold mb-2" style={{ color: "#ffaa00" }}>Реагенты</div>
            {[
              { name: "FeCl₃ (хлорное железо)", use: "Наиболее распространённый" },
              { name: "CuCl₂ (хлорид меди)", use: "Промышленный стандарт" },
              { name: "H₂SO₄ + H₂O₂", desc: "Высокая скорость, сложен в контроле" },
              { name: "Аммоний персульфат", use: "Чистое травление" },
            ].map((r) => (
              <div key={r.name} className="flex items-start gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#ffaa00" }} />
                <div>
                  <div className="font-mono-ibm text-xs font-bold" style={{ color: "#ffaa00" }}>{r.name}</div>
                  <div className="font-mono-ibm text-xs" style={{ color: "rgba(200,240,220,0.5)" }}>{r.use || r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="pcb-card p-5 flex-1">
            <div className="font-orbitron text-sm font-bold mb-3" style={{ color: "#ffaa00" }}>Симуляция травления</div>
            {/* Визуализация */}
            <div className="relative h-16 mb-4 overflow-hidden rounded" style={{ background: "rgba(255,170,0,0.05)", border: "1px solid rgba(255,170,0,0.2)" }}>
              <div className="absolute inset-0 flex items-center px-3 gap-1">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                    style={{
                      height: i % 3 === 0 ? "60%" : "90%",
                      background: progress > i * 5 ? "transparent" : "#ffaa00",
                      opacity: progress > i * 5 ? 0 : 0.7,
                      transform: progress > i * 5 ? "scaleY(0)" : "scaleY(1)",
                      transition: "all 0.3s ease",
                    }} />
                ))}
              </div>
              {progress > 0 && (
                <div className="absolute bottom-0 left-0 h-1 transition-all duration-100"
                  style={{ width: `${progress}%`, background: "rgba(255,170,0,0.6)" }} />
              )}
            </div>
            <div className="font-mono-ibm text-xs mb-3" style={{ color: "rgba(200,240,220,0.5)" }}>
              Удалено меди: <span style={{ color: "#ffaa00" }}>{progress}%</span>
            </div>
            <div className="flex gap-2">
              <button className="pcb-btn flex-1" style={{ borderColor: "rgba(255,170,0,0.4)", color: "#ffaa00" }}
                onClick={() => { reset(); setTimeout(() => setRunning(true), 50); }}>
                ▶ Запустить
              </button>
              <button className="pcb-btn" style={{ borderColor: "rgba(255,170,0,0.3)", color: "rgba(255,170,0,0.6)" }} onClick={reset}>
                ↺
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 8: Компоненты
// ─────────────────────────────────────────────────────────────────────────────
const COMPONENTS = [
  { id: "sub", name: "Подложка", short: "FR-4", desc: "Стеклотекстолит FR-4 — самый распространённый материал. Толщина: 0.8–3.2 мм. Обеспечивает механическую прочность и электрическую изоляцию.", color: "#00ff88", x: 50, y: 50 },
  { id: "copper", name: "Медный слой", short: "Cu", desc: "Медные дорожки толщиной 18–105 мкм формируют электрические цепи. Чистота меди — 99.9%.", color: "#ffaa00", x: 22, y: 28 },
  { id: "mask", name: "Паяльная маска", short: "SM", desc: "Защитный лак (чаще зелёный) предотвращает окисление дорожек и случайные замыкания при пайке.", color: "#00e5ff", x: 75, y: 22 },
  { id: "silk", name: "Шелкография", short: "SS", desc: "Маркировка компонентов, обозначения и полярность на плате. Наносится методом трафаретной печати.", color: "#ff88aa", x: 25, y: 72 },
  { id: "via", name: "Переходные отверстия", short: "VIA", desc: "Металлизированные отверстия соединяют разные слои платы. Диаметр: 0.1–0.3 мм у микропереходов.", color: "#aaaaff", x: 72, y: 72 },
];

function Slide08() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeComp = COMPONENTS.find((c) => c.id === selected);
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Компоненты // MATERIALS</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Компоненты и материалы</h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>&gt; Нажмите на элемент схемы</p>
      </div>
      <div className="slide-item flex gap-6">
        <div className="flex-shrink-0 relative" style={{ width: 300, height: 230, background: "rgba(0,255,136,0.03)", border: "1px solid rgba(0,255,136,0.2)" }}>
          <svg width="300" height="230" className="absolute inset-0">
            {[...Array(9)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * 28} x2="300" y2={i * 28} stroke="rgba(0,255,136,0.07)" strokeWidth="1" />)}
            {[...Array(11)].map((_, i) => <line key={`v${i}`} x1={i * 28} y1="0" x2={i * 28} y2="230" stroke="rgba(0,255,136,0.07)" strokeWidth="1" />)}
            <path d="M66 115 H126 V64 H186" stroke="rgba(255,170,0,0.45)" strokeWidth="1.5" fill="none" />
            <path d="M186 64 H246 V115 H186 V166 H96 V115" stroke="rgba(255,170,0,0.3)" strokeWidth="1.5" fill="none" />
            <path d="M96 166 H66 V115" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" fill="none" />
          </svg>
          {COMPONENTS.map((c) => (
            <button key={c.id} onClick={() => setSelected(selected === c.id ? null : c.id)}
              className="absolute flex items-center justify-center pcb-component"
              style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%,-50%)", width: 36, height: 26,
                border: `1.5px solid ${selected === c.id ? c.color : "rgba(0,255,136,0.3)"}`,
                background: selected === c.id ? `${c.color}22` : "rgba(0,0,0,0.5)",
                boxShadow: selected === c.id ? `0 0 14px ${c.color}60` : "none", borderRadius: 2, transition: "all 0.2s" }}>
              <span className="font-orbitron font-bold" style={{ color: selected === c.id ? c.color : "rgba(0,255,136,0.6)", fontSize: "0.55rem" }}>{c.short}</span>
            </button>
          ))}
          <div className="absolute bottom-2 left-2 font-mono-ibm" style={{ color: "rgba(0,255,136,0.3)", fontSize: "0.55rem" }}>PCB_DIAGRAM_v1.2</div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {activeComp ? (
            <>
              <div className="pcb-card p-5 flex-1" style={{ borderColor: activeComp.color }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: activeComp.color, boxShadow: `0 0 8px ${activeComp.color}` }} />
                  <div className="font-orbitron text-base font-bold" style={{ color: activeComp.color }}>{activeComp.name}</div>
                  <span className="pcb-badge ml-auto" style={{ color: activeComp.color, borderColor: `${activeComp.color}40` }}>{activeComp.short}</span>
                </div>
                <div className="font-mono-ibm text-sm leading-relaxed" style={{ color: "rgba(200,240,220,0.8)" }}>{activeComp.desc}</div>
              </div>
              <button onClick={() => setSelected(null)} className="pcb-btn text-xs">← все компоненты</button>
            </>
          ) : (
            <div className="flex-1 flex flex-col gap-2">
              {COMPONENTS.map((c) => (
                <button key={c.id} onClick={() => setSelected(c.id)} className="pcb-card p-3 flex items-center gap-3 text-left">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }} />
                  <span className="font-mono-ibm text-xs" style={{ color: "rgba(200,240,220,0.7)" }}>{c.name}</span>
                  <span className="ml-auto font-orbitron text-xs" style={{ color: "rgba(0,255,136,0.3)" }}>{c.short}</span>
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

// ─────────────────────────────────────────────────────────────────────────────
// Slide 9: Слои PCB
// ─────────────────────────────────────────────────────────────────────────────
function Slide09() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const layers = [
    { n: 1, name: "Top Copper (Signal)", color: "#ffaa00", h: 14, desc: "Верхний сигнальный слой — основные трассы и контактные площадки для SMD-компонентов." },
    { n: 2, name: "Ground Plane", color: "#00ff88", h: 14, desc: "Сплошная медная заливка GND. Снижает помехи, обеспечивает экранирование и возвратный ток." },
    { n: 3, name: "Power Plane", color: "#00e5ff", h: 14, desc: "Слой питания — распределение напряжений по всей плате с минимальным сопротивлением." },
    { n: 4, name: "Bottom Copper", color: "#ffaa00", h: 14, desc: "Нижний сигнальный слой. Трассы прокладываются перпендикулярно верхнему слою." },
    { n: 5, name: "FR-4 Core", color: "#6b7280", h: 28, desc: "Диэлектрическая основа. FR-4 — стеклоэпоксид с εr≈4.5, толщина 0.2–1.6 мм." },
    { n: 6, name: "Solder Mask", color: "#22c55e", h: 8, desc: "Паяльная маска — защита от окисления и случайных мостиков при пайке." },
    { n: 7, name: "Silk Screen", color: "#f59e0b", h: 6, desc: "Шелкография — обозначения компонентов, полярность, номиналы." },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Структура // LAYERS</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Слои печатной платы</h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>&gt; Нажмите на слой для описания</p>
      </div>
      <div className="slide-item flex gap-8 items-start">
        {/* 3D-like layer visualization */}
        <div className="flex-shrink-0 flex flex-col gap-0.5 w-64">
          {layers.map((l, i) => (
            <div key={l.n} onClick={() => setActiveLayer(activeLayer === i ? null : i)}
              className="cursor-pointer transition-all duration-200 flex items-center gap-2 group"
              style={{ transform: activeLayer === i ? "translateX(6px)" : "translateX(0)" }}>
              <div className="font-mono-ibm text-xs w-4 text-right flex-shrink-0" style={{ color: "rgba(200,240,220,0.3)", fontSize: "0.55rem" }}>{l.n}</div>
              <div className="flex-1 rounded-sm transition-all duration-200"
                style={{
                  height: l.h,
                  background: l.color,
                  opacity: activeLayer === null ? 0.7 : activeLayer === i ? 1 : 0.25,
                  boxShadow: activeLayer === i ? `0 0 12px ${l.color}80` : "none",
                }} />
            </div>
          ))}
        </div>
        {/* Info */}
        <div className="flex-1">
          {activeLayer !== null ? (
            <div className="pcb-card p-5" style={{ borderColor: layers[activeLayer].color }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: layers[activeLayer].color, boxShadow: `0 0 8px ${layers[activeLayer].color}` }} />
                <div className="font-orbitron text-base font-bold" style={{ color: layers[activeLayer].color }}>{layers[activeLayer].name}</div>
              </div>
              <div className="font-mono-ibm text-sm leading-relaxed" style={{ color: "rgba(200,240,220,0.8)" }}>{layers[activeLayer].desc}</div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {layers.map((l, i) => (
                <button key={l.n} onClick={() => setActiveLayer(i)} className="pcb-card p-2.5 flex items-center gap-3 text-left">
                  <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: l.color }} />
                  <span className="font-mono-ibm text-xs" style={{ color: "rgba(200,240,220,0.7)" }}>{l.name}</span>
                </button>
              ))}
            </div>
          )}
          {activeLayer !== null && (
            <button onClick={() => setActiveLayer(null)} className="pcb-btn text-xs mt-3">← все слои</button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 10: Материалы
// ─────────────────────────────────────────────────────────────────────────────
function Slide10() {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      name: "Подложки", items: [
        { name: "FR-4", prop: "εr = 4.5, Tg = 135°C", use: "Универсальный стандарт" },
        { name: "Rogers RO4003", prop: "εr = 3.55, Tg = 280°C", use: "RF и СВЧ-устройства" },
        { name: "Polyimide (Kapton)", prop: "Гибкий, −200°C...+400°C", use: "Flex PCB, аэрокосмос" },
        { name: "Alumina (Al₂O₃)", prop: "εr = 9.8, теплопроводность", use: "Силовая электроника" },
        { name: "PTFE", prop: "εr = 2.2, сверхнизкие потери", use: "Миллиметровые волны" },
      ],
    },
    {
      name: "Проводники", items: [
        { name: "Медь (Cu)", prop: "ρ = 1.68·10⁻⁸ Ом·м", use: "Основной материал" },
        { name: "Золото (Au)", prop: "Нержавеющее, контакты", use: "Разъёмы, бондинг" },
        { name: "Олово (Sn)", prop: "Припой SAC305", use: "Пайка компонентов" },
        { name: "Никель (Ni)", prop: "Барьерный слой", use: "ENIG-покрытие" },
        { name: "Серебро (Ag)", prop: "ρ = 1.59·10⁻⁸ Ом·м", use: "Печатная электроника" },
      ],
    },
    {
      name: "Покрытия", items: [
        { name: "HASL", prop: "Hot Air Solder Leveling", use: "Дёшево, широко" },
        { name: "ENIG", prop: "Electroless Ni/Au", use: "Высокая точность" },
        { name: "OSP", prop: "Organic Solderability", use: "Плоская поверхность" },
        { name: "Hard Gold", prop: "1–50 мкм Au", use: "Краевые разъёмы" },
        { name: "ENEPIG", prop: "Ni/Pd/Au", use: "Бондинг + пайка" },
      ],
    },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Материалы // MATERIALS</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Материалы и покрытия</h2>
      </div>
      <div className="slide-item flex gap-2 mb-4">
        {tabs.map((t, i) => (
          <button key={t.name} onClick={() => setTab(i)} className="pcb-btn"
            style={tab === i ? { background: "rgba(0,255,136,0.12)", borderColor: "#00ff88", color: "#00ff88" } : {}}>
            {t.name}
          </button>
        ))}
      </div>
      <div className="slide-item flex flex-col gap-2">
        {tabs[tab].items.map((item) => (
          <div key={item.name} className="pcb-card p-3 flex items-center gap-4">
            <div className="font-orbitron text-sm font-bold w-36 flex-shrink-0" style={{ color: "#00ff88" }}>{item.name}</div>
            <div className="font-mono-ibm text-xs flex-1" style={{ color: "rgba(200,240,220,0.55)" }}>{item.prop}</div>
            <div className="font-mono-ibm text-xs text-right" style={{ color: "rgba(0,255,136,0.5)" }}>{item.use}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 11: Типы плат
// ─────────────────────────────────────────────────────────────────────────────
function Slide11() {
  const [active, setActive] = useState<number | null>(null);
  const types = [
    { name: "Односторонняя", abbr: "SS-PCB", desc: "Компоненты и дорожки только с одной стороны. Самая простая и дешёвая. Применяется в простой бытовой технике.", color: "#00ff88", icon: "Square" },
    { name: "Двусторонняя", abbr: "DS-PCB", desc: "Дорожки с обеих сторон, соединённые переходными отверстиями (via). Стандарт для большинства устройств.", color: "#00e5ff", icon: "Layers" },
    { name: "Многослойная", abbr: "ML-PCB", desc: "4–24 слоя меди. Используется в ПК, смартфонах, серверах. Позволяет реализовать сложные схемы в компактном корпусе.", color: "#ffaa00", icon: "AlignJustify" },
    { name: "Гибкая", abbr: "Flex-PCB", desc: "Полиимидная основа. Гнётся и скручивается. Применяется в носимых устройствах, медтехнике, разъёмах.", color: "#ff88aa", icon: "Waves" },
    { name: "Жёстко-гибкая", abbr: "Rigid-Flex", desc: "Комбинация жёстких и гибких секций в одной плате. Идеальна для сложной геометрии корпусов.", color: "#aaaaff", icon: "GitBranch" },
    { name: "HDI", abbr: "HDI-PCB", desc: "High Density Interconnect. Микропереходы laser drill, шаг 0.4 мм и менее. Применяется в смартфонах и wearables.", color: "#00ff88", icon: "Microchip" },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Классификация // TYPES</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Типы печатных плат</h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>&gt; Нажмите для подробностей</p>
      </div>
      <div className="slide-item grid grid-cols-3 gap-3">
        {types.map((t, i) => (
          <div key={t.abbr} className={`pcb-card p-4 cursor-pointer ${active === i ? "selected" : ""}`}
            onClick={() => setActive(active === i ? null : i)}
            style={active === i ? { borderColor: t.color } : {}}>
            <div className="flex items-center gap-2 mb-2">
              <Icon name={t.icon} fallback="Layers" size={14} style={{ color: t.color }} />
              <div className="font-orbitron text-xs font-bold" style={{ color: t.color }}>{t.abbr}</div>
            </div>
            <div className="font-mono-ibm text-sm font-bold mb-1" style={{ color: "rgba(200,240,220,0.9)" }}>{t.name}</div>
            {active === i && (
              <div className="font-mono-ibm text-xs leading-relaxed mt-2" style={{ color: "rgba(200,240,220,0.65)" }}>{t.desc}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 12: Применение
// ─────────────────────────────────────────────────────────────────────────────
function Slide12() {
  const [hovered, setHovered] = useState<number | null>(null);
  const sectors = [
    { name: "Потребительская электроника", pct: 32, icon: "Smartphone", color: "#00ff88", examples: "Смартфоны, ноутбуки, телевизоры, умные часы" },
    { name: "Автомобильная промышленность", pct: 22, icon: "Car", color: "#00e5ff", examples: "ECU, ADAS, электромобили, панели приборов" },
    { name: "Промышленная автоматизация", pct: 18, icon: "Factory", color: "#ffaa00", examples: "ПЛК, сенсоры, роботы, частотные приводы" },
    { name: "Медицинские устройства", pct: 12, icon: "Heart", color: "#ff88aa", examples: "Кардиостимуляторы, МРТ, диагностика" },
    { name: "Аэрокосмос и оборона", pct: 10, icon: "Rocket", color: "#aaaaff", examples: "Авионика, спутники, ракетные системы" },
    { name: "Телекоммуникации", pct: 6, icon: "Radio", color: "#00ff88", examples: "Базовые станции 5G, маршрутизаторы, серверы" },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Рынок // APPLICATIONS</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Области применения</h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>Мировой рынок PCB: $89 млрд (2024)</p>
      </div>
      <div className="slide-item flex flex-col gap-2">
        {sectors.map((s, i) => (
          <div key={s.name} className="pcb-card p-3 cursor-pointer" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
            <div className="flex items-center gap-4">
              <Icon name={s.icon} fallback="Cpu" size={16} style={{ color: s.color, flexShrink: 0 }} />
              <div className="font-mono-ibm text-xs w-52 flex-shrink-0" style={{ color: "rgba(200,240,220,0.75)" }}>{s.name}</div>
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(0,255,136,0.08)" }}>
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: hovered === i ? `${s.pct}%` : `${s.pct * 0.6}%`, background: s.color, boxShadow: `0 0 6px ${s.color}60` }} />
              </div>
              <div className="font-orbitron text-sm font-bold w-10 text-right flex-shrink-0" style={{ color: s.color }}>{s.pct}%</div>
            </div>
            {hovered === i && (
              <div className="font-mono-ibm text-xs mt-1.5 ml-8" style={{ color: "rgba(200,240,220,0.5)" }}>{s.examples}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 13: Стандарты
// ─────────────────────────────────────────────────────────────────────────────
function Slide13() {
  const [open, setOpen] = useState<number | null>(null);
  const standards = [
    { code: "IPC-2221", name: "Generic Standard on Printed Board Design", desc: "Основополагающий документ по проектированию печатных плат: зазоры, ширина дорожек, отверстия." },
    { code: "IPC-A-600", name: "Acceptability of Printed Boards", desc: "Критерии приёмки плат: допустимые дефекты, классы качества 1/2/3." },
    { code: "IPC-6012", name: "Qualification and Performance — Rigid Boards", desc: "Требования к жёстким PCB для военной, аэрокосмической и медицинской отраслей." },
    { code: "UL 796", name: "Printed-Wiring Boards", desc: "Сертификация безопасности для печатных плат, применяемых в бытовой технике." },
    { code: "MIL-PRF-31032", name: "Military Standard", desc: "Военные требования к качеству и надёжности PCB в условиях экстремальных нагрузок." },
    { code: "RoHS / REACH", name: "Экологические директивы ЕС", desc: "Ограничение опасных веществ: свинец, ртуть, кадмий, гексавалентный хром запрещены." },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="slide-item mb-5">
        <span className="pcb-badge">Стандарты // STANDARDS</span>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mt-3" style={{ color: "#00ff88" }}>Стандарты и сертификация</h2>
        <p className="font-mono-ibm text-xs mt-1" style={{ color: "rgba(0,255,136,0.45)" }}>&gt; Нажмите для описания</p>
      </div>
      <div className="slide-item flex flex-col gap-2">
        {standards.map((s, i) => (
          <div key={s.code} className={`pcb-card p-3 cursor-pointer ${open === i ? "selected" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
            <div className="flex items-center gap-4">
              <div className="font-orbitron text-sm font-bold w-36 flex-shrink-0" style={{ color: "#00ff88" }}>{s.code}</div>
              <div className="font-mono-ibm text-xs flex-1" style={{ color: "rgba(200,240,220,0.65)" }}>{s.name}</div>
              <Icon name={open === i ? "ChevronUp" : "ChevronDown"} size={14} style={{ color: "rgba(0,255,136,0.4)" }} />
            </div>
            {open === i && (
              <div className="font-mono-ibm text-xs mt-2 ml-40 leading-relaxed" style={{ color: "rgba(200,240,220,0.7)" }}>{s.desc}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 14: Заключение
// ─────────────────────────────────────────────────────────────────────────────
function Slide14() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
      <div className="slide-item"><span className="pcb-badge">Заключение // SUMMARY</span></div>
      <h2 className="slide-item font-orbitron text-4xl md:text-5xl font-black glow-cyan" style={{ color: "#00e5ff" }}>БУДУЩЕЕ PCB</h2>
      <div className="slide-item pcb-divider w-48" />
      <div className="slide-item grid grid-cols-3 gap-4 w-full">
        {[
          { icon: "Layers", title: "3D-печать PCB", desc: "Аддитивное производство без травления — сложные топологии за минуты" },
          { icon: "Cpu", title: "Органические платы", desc: "Биоразлагаемые подложки и гибкие медицинские имплантаты" },
          { icon: "Radio", title: "RF в текстолите", desc: "Антенны и радиочастотные цепи внутри слоёв платы" },
        ].map((c) => (
          <div key={c.title} className="pcb-card p-5 flex flex-col items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center" style={{ border: "1px solid rgba(0,229,255,0.4)", background: "rgba(0,229,255,0.05)" }}>
              <Icon name={c.icon} fallback="Cpu" size={22} style={{ color: "#00e5ff" }} />
            </div>
            <div className="font-orbitron text-sm font-bold" style={{ color: "#00e5ff" }}>{c.title}</div>
            <div className="font-mono-ibm text-xs leading-relaxed" style={{ color: "rgba(200,240,220,0.6)" }}>{c.desc}</div>
          </div>
        ))}
      </div>
      <p className="slide-item font-mono-ibm text-sm max-w-lg leading-relaxed" style={{ color: "rgba(200,240,220,0.6)" }}>
        Печатные платы остаются фундаментом прогресса — от потребительской электроники до квантовых компьютеров и медицинских имплантатов
      </p>
      <div className="slide-item font-mono-ibm text-xs animate-pulse-dot" style={{ color: "rgba(0,255,136,0.5)" }}>
        // END OF PRESENTATION — pcb.presentation@v1.0.0
      </div>
      <CornerMarkers color="rgba(0,229,255,0.3)" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper components
// ─────────────────────────────────────────────────────────────────────────────
function CornerMarkers({ color }: { color: string }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-12 h-12 border-t border-l" style={{ borderColor: color }} />
      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r" style={{ borderColor: color }} />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l" style={{ borderColor: color }} />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r" style={{ borderColor: color }} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main App
// ─────────────────────────────────────────────────────────────────────────────
const SLIDE_COMPONENTS = [
  Slide00, Slide01, Slide02, Slide03, Slide04,
  Slide05, Slide06, Slide07, Slide08, Slide09,
  Slide10, Slide11, Slide12, Slide13, Slide14,
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const goTo = useCallback((idx: number) => {
    if (idx === current) return;
    setPrev(current);
    setCurrent(idx);
    setTimeout(() => setPrev(null), 650);
  }, [current]);

  const goNext = useCallback(() => goTo(Math.min(current + 1, SLIDES.length - 1)), [current, goTo]);
  const goPrev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Group slides for compact nav display
  const navGroups = [
    { label: "Введение", ids: [0, 1] },
    { label: "История", ids: [2, 3, 4] },
    { label: "Производство", ids: [5, 6, 7] },
    { label: "Компоненты", ids: [8, 9, 10, 11] },
    { label: "Рынок", ids: [12, 13] },
    { label: "Итоги", ids: [14] },
  ];

  return (
    <div className="pcb-app">
      <div className="pcb-grid-bg" />
      <div className="pcb-traces" />
      <div className="scanline" />

      {/* Top Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-2.5"
        style={{ borderBottom: "1px solid rgba(0,255,136,0.12)", background: "rgba(4,13,8,0.9)" }}>
        <div className="flex items-center gap-3">
          <div className="animate-pulse-dot w-2 h-2 rounded-full" style={{ background: "#00ff88", boxShadow: "0 0 8px #00ff88" }} />
          <span className="font-mono-ibm text-xs" style={{ color: "rgba(0,255,136,0.6)" }}>PCB_PRESENTATION.exe</span>
        </div>
        <div className="flex gap-1">
          {navGroups.map((g) => {
            const isActive = g.ids.includes(current);
            return (
              <button key={g.label} onClick={() => goTo(g.ids[0])}
                className="font-mono-ibm text-xs px-3 py-1.5 transition-all duration-200"
                style={{
                  color: isActive ? "#00ff88" : "rgba(0,255,136,0.35)",
                  background: isActive ? "rgba(0,255,136,0.1)" : "transparent",
                  border: `1px solid ${isActive ? "rgba(0,255,136,0.4)" : "transparent"}`,
                  borderRadius: 2,
                }}>
                {g.label}
              </button>
            );
          })}
        </div>
        <div className="font-mono-ibm text-xs" style={{ color: "rgba(0,255,136,0.4)" }}>
          {String(current + 1).padStart(2, "0")}/{SLIDES.length}
        </div>
      </nav>

      {/* Slides */}
      <div className="slide-container relative z-10">
        {SLIDE_COMPONENTS.map((SlideComp, idx) => (
          <div key={idx} className={`slide ${idx === current ? "active" : ""} ${idx === prev ? "prev" : ""}`}>
            <SlideComp key={`slide-${idx}-${current === idx}`} />
          </div>
        ))}
      </div>

      {/* Bottom controls */}
      <div className="relative z-10 flex items-center justify-between px-6 py-2.5"
        style={{ borderTop: "1px solid rgba(0,255,136,0.12)", background: "rgba(4,13,8,0.9)" }}>
        <div className="flex-1 mr-6 pcb-progress">
          <div className="pcb-progress-fill" style={{ width: `${((current + 1) / SLIDES.length) * 100}%` }} />
        </div>
        <div className="flex items-center gap-3">
          <button onClick={goPrev} disabled={current === 0} className="pcb-btn flex items-center gap-2">
            <Icon name="ChevronLeft" size={14} /><span>Назад</span>
          </button>
          <div className="flex gap-1">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className="rounded-full transition-all duration-300"
                style={{ width: i === current ? 16 : 5, height: 5, background: i === current ? "#00ff88" : "rgba(0,255,136,0.2)", boxShadow: i === current ? "0 0 8px rgba(0,255,136,0.6)" : "none" }} />
            ))}
          </div>
          <button onClick={goNext} disabled={current === SLIDES.length - 1} className="pcb-btn flex items-center gap-2">
            <span>Вперёд</span><Icon name="ChevronRight" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
