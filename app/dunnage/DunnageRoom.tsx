'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// ─── QUIZ QUESTIONS ───────────────────────────────────────────────────────────

const QUIZ_QUESTIONS = [
  { q:'At what E2/AS1 risk score is a drained cavity (min 20mm) required?', opts:['Score 3 or above','Score 5 or above','Score 7 or above','Score 10 or above'], correct:2, ref:'E2 — External Moisture' },
  { q:'What are the three E2/AS1 risk score thresholds for cladding acceptability?', opts:['0–4, 5–8, 9–12','0–6, 7–9, 10–12','0–5, 6–9, 10–12','0–3, 4–8, 9–12'], correct:1, ref:'E2 — External Moisture' },
  { q:'Under H1/VM1, what is the maximum SHGC for commercial glazing?', opts:['0.25','0.40','0.55','0.70'], correct:1, ref:'H1 — Energy Efficiency' },
  { q:'The 2023 H1 update set the minimum roof R-value for Auckland (Zone 1) at:', opts:['R3.6','R4.8','R6.6','R9.0'], correct:2, ref:'H1 — Energy Efficiency' },
  { q:'For a typical commercial building, which B1 compliance document is standard?', opts:['B1/AS1 with NZS 3604','B1/VM1 with NZS 1170 series','B1/AS2 with NZS 4203','B1/VM2 with NZS 3101'], correct:1, ref:'B1 — Structure' },
  { q:'The seismic Importance Level for a typical commercial building is:', opts:['IL1 — 250yr return','IL2 — 500yr return','IL3 — 1000yr return','IL4 — 2500yr return'], correct:1, ref:'B1 — Structure' },
  { q:'Under B2, the 15-year durability requirement applies to which elements?', opts:['Structural primary elements','Moderately accessible / difficult to replace','Easily replaceable components','All external cladding'], correct:1, ref:'B2 — Durability' },
  { q:'The FRR format (e.g. 60/60/60) represents:', opts:['Size / Rating / Result','Structural Adequacy / Integrity / Insulation','Spread / Resistance / Rating','Stability / Resistance / Insulation'], correct:1, ref:'C3 — Spread of Fire' },
  { q:'FRR required between different occupancy groups in a commercial building:', opts:['FRR 30/30/30','FRR 60/60/60','FRR 90/90/90','FRR 120/120/120'], correct:3, ref:'C3 — Spread of Fire' },
  { q:'Under C/AS4, the maximum travel distance to a fire exit in open-plan commercial is:', opts:['20m','25m','30m','40m'], correct:2, ref:'C2 — Means of Escape' },
  { q:'The maximum dead-end corridor length under C/AS4 is:', opts:['5m','10m','15m','20m'], correct:1, ref:'C2 — Means of Escape' },
  { q:'Under D1/AS1 (NZS 4121), the minimum clear doorway width for accessibility is:', opts:['750mm','800mm','900mm','1000mm'], correct:1, ref:'D1 — Access Routes' },
  { q:'The minimum barrier height where a fall of 15m or more is possible:', opts:['900mm','1000mm','1100mm','1200mm'], correct:2, ref:'F4 — Safety from Falling' },
  { q:'The minimum hot water storage temperature to control legionella under G12 is:', opts:['45°C','55°C','60°C','70°C'], correct:2, ref:'G12 — Water Supplies' },
  { q:'Under G12/AS1, TMVs limit hot water delivery at commercial outlets to:', opts:['45°C max','55°C max','60°C max','65°C max'], correct:1, ref:'G12 — Water Supplies' },
];

// ─── NUGGETS ──────────────────────────────────────────────────────────────────

const NUGGETS = [
  { id:'e2', category:'nzbc', label:'E2', title:'External Moisture', color:'#4a7ec4', size:'lg', content:`**Objective:** Prevent external moisture causing undue dampness or damage to the building envelope.

**Performance requirements:**
- E2.3.1 — Building envelope must prevent moisture damage
- E2.3.2 — Roofs and walls must shed precipitation
- E2.3.3 — Moisture that penetrates must be able to dissipate
- E2.3.4 — Exposed elements must withstand expected moisture

**E2/AS1 Risk Matrix (0–12):**
Score is based on wind zone + design features + cladding type.
- Score 0–6: Most claddings acceptable
- Score 7–9: Restricted claddings, enhanced detailing
- Score 10–12: High-performance claddings only
- Score 7+: Drained cavity required (minimum 20mm)

**Key values:**
- Min drained cavity: 20mm
- Monolithic cladding: highest risk score (+2–3)
- Parapets: +1, Very High Wind Zone: +2
- All penetrations and junctions must be fully flashed — no sealant-only solutions

**Interview tip:** E2 is the single most important clause in NZ practice. Know the risk matrix cold. E2/AS1 only applies to ≤3 storeys — above that requires alternative solution.` },

  { id:'h1', category:'nzbc', label:'H1', title:'Energy Efficiency', color:'#c45a8a', size:'lg', content:`**Objective:** Achieve efficient use of energy in buildings.

**2023 Update — Residential R-values (significantly increased):**
- Roof/ceiling: R6.6 (Zone 1 Auckland) → R9.0 (Zone 3 South Island)
- Walls: R2.0 (Zone 1) → R2.6 (Zone 3)
- Floor: R1.5 (Zone 1) → R2.8 (Zone 3)
- Double glazing now effectively mandatory

**Commercial — H1/VM1 Energy Modelling:**
Referenced to ASHRAE 90.1 or NZS 4243.
- Glazing max U-value: 2.0 W/m²K
- Glazing max SHGC: 0.40
- Roof max U-value: 0.25 W/m²K
- Wall max U-value: 0.45 W/m²K
- Office lighting max: 10 W/m²

**Three compliance pathways:**
1. Schedule Method (prescriptive R-values)
2. Calculation Method (whole building thermal)
3. Modelling Method (energy simulation)

**Interview tip:** The 2023 changes are very likely to come up. Know that commercial buildings use energy modelling (H1/VM1), not the schedule method. SHGC controls solar heat gain — lower is better for cooling load.` },

  { id:'b1', category:'nzbc', label:'B1', title:'Structure', color:'#4a9e7a', size:'md', content:`**Objective:** Safeguard people from injury caused by structural failure.

**Performance requirements:**
- B1.3.1 — Withstand all likely loads (dead, live, wind, snow, earthquake)
- B1.3.2 — Limit deflection under serviceability loads
- B1.3.3 — Avoid disproportionate collapse
- B1.3.4 — Maintain robustness under misuse

**Commercial — B1/VM1 (NZS 1170 series):**
- NZS 1170.1: Permanent and imposed actions
- NZS 1170.5: Earthquake actions
- NZS 3101: Concrete design
- NZS 3404: Steel design

**Importance Levels (seismic):**
- IL2 (typical commercial): 500yr return period
- IL3 (post-disaster): 1000yr return period
- IL4 (critical infrastructure): 2500yr return period

**Seismic hazard factor Z:**
- Wellington: 0.40 (highest)
- Auckland: 0.13
- Christchurch: 0.30

**Max ULS drift:** 2.5% of storey height` },

  { id:'b2', category:'nzbc', label:'B2', title:'Durability', color:'#4a9e7a', size:'sm', content:`**Three durability timeframes:**
- **50 years** — structural and primary building elements
- **15 years** — moderately accessible / difficult to replace
- **5 years** — easily accessible and replaceable components

**B2/AS1 references:**
- NZS 3602 (timber durability)
- NZS 3101 (concrete)
- NZS 3404 (steel)

**Coastal commercial:** Specify corrosion protection grade based on exposure zone. Exposure Zone D may require hot-dip galvanising or stainless steel fixings.` },

  { id:'c2', category:'nzbc', label:'C2', title:'Means of Escape', color:'#c45a4a', size:'lg', content:`**Objective:** Safeguard people by providing adequate means of escape from fire.

**C/AS4 travel distance limits (commercial):**
- Open-plan commercial: 30m max to nearest exit
- Corridor: 25m max
- Dead-end corridor: 10m max
- Min exit width: 850mm clear
- Min stairway width: 1000mm clear

**Key requirements:**
- Escape routes must be protected from fire and smoke
- Accessible to people with disabilities where required
- Emergency lighting: min 10 lux on floor, 90-minute battery backup
- Exit signs at every exit and direction change (ISO 7010 running man)

**Evacuation schemes** required for commercial buildings — must be lodged with Fire and Emergency NZ.

**Interview tip:** Dead-end corridors are heavily restricted at 10m. Sprinklers can sometimes extend travel distances — this is a C/VM2 alternative solution argument.` },

  { id:'c3', category:'nzbc', label:'C3', title:'Spread of Fire', color:'#c45a4a', size:'md', content:`**Fire Resistance Ratings (FRR):**
Format: Structural Adequacy / Integrity / Insulation (minutes)

**Typical commercial FRR requirements:**
- Between tenancies: FRR 60/60/60
- Between different occupancy groups: FRR 120/120/120
- Multi-storey separating floors: FRR 60/60/60 minimum

**Fire walls:** Must be continuous from foundation to roof. Cavity barriers required at fire compartment boundaries.

**Glazed elements** cannot generally achieve the insulation component — fire-rated glazing is expensive and limited.

**Steel fire protection methods:**
- Intumescent paint (thin-film, requires topcoat)
- Board encasement
- Spray-applied protection
Thickness varies by FRR required and section factor (Hp/A).` },

  { id:'d1', category:'nzbc', label:'D1', title:'Access Routes', color:'#c4933a', size:'md', content:`**D1/AS1 → NZS 4121:2001 (Design for Access and Mobility)**

**Key dimensional requirements:**
- Max ramp gradient: 1:12 (1:20 preferred)
- Min ramp width: 1200mm
- Min corridor width: 1200mm (1500mm preferred)
- Min doorway clear width: 800mm
- Lift internal min: 1100 × 1400mm
- Accessible car parks: min 1 per 50 spaces

**Accessible toilets:** Required in all commercial buildings.

**Accessible routes** must connect car parks, entrances, and all facilities without steps.

**Interview tip:** Level thresholds at building entries are a common non-compliance issue. Accessible design is heavily scrutinised at commercial consent.` },

  { id:'f4', category:'nzbc', label:'F4', title:'Safety from Falling', color:'#3a9ea8', size:'sm', content:`**Barrier height requirements:**
- Commercial (fall ≥1m): 1000mm minimum
- High-rise (fall ≥15m): 1100mm minimum
- Residential (fall <1m): 760mm minimum

**Barrier detailing:**
- Max gap between balusters: 100mm
- No horizontal rails in lower 760mm (prevents climbing)
- Horizontal load at top: 0.75 kN/m
- Outward load on infill: 1.0 kN/m²

**Glass balustrades** must be laminated toughened safety glass. Structural glass without handrail requires engineering sign-off.` },

  { id:'g12', category:'nzbc', label:'G12', title:'Water Supplies', color:'#9e7a4a', size:'sm', content:`**Legionella and scalding — critical thresholds:**
- Hot water storage: minimum 60°C (kills legionella)
- Delivery at outlet (commercial): maximum 55°C
- Cold water: must stay below 20°C
- Large systems (>50L): weekly thermal pasteurisation at 70°C

**Thermostatic mixing valves (TMVs):** Mandatory at all accessible commercial outlets.

**Interview tip:** Legionella is a serious liability issue in commercial buildings — particularly cooling towers and large HWS. Know these temperatures.` },

  { id:'nzrab-pathway', category:'nzrab', label:'NZRAB', title:'Registration Pathway', color:'#7a6ac4', size:'lg', content:`**New Zealand Registered Architects Board — Registration Pathway**

**Requirements for registration:**
1. Accredited architecture qualification (e.g. MArch from AUT, VUW, Auckland)
2. Minimum 3 years relevant post-graduation experience
3. Competency-based assessment (Experience Pathway)
4. Written examination
5. Interview with Board

**Experience Pathway — key competency areas:**
- Design ability and process
- Technical knowledge and application (NZBC, NZS standards)
- Project management and contract administration
- Communication and documentation
- Professional ethics and practice

**Documentation required:**
- Experience log (minimum 3 years)
- Project schedule with roles and responsibilities
- Two referee reports from registered architects
- Written submission addressing each competency

**Timeline:** Application → assessment → examination → interview can take 6–12 months. Start documenting experience early — the log is retrospective but needs detail.` },

  { id:'nzrab-competency', category:'nzrab', label:'NZRAB', title:'Competency Framework', color:'#7a6ac4', size:'md', content:`**Core competency areas for NZRAB registration:**

**1. Design**
Ability to initiate, develop and realise architectural designs. Includes conceptual thinking, spatial resolution, and response to context.

**2. Technical knowledge**
NZBC compliance, structural principles, building services, weathertightness, durability. Knowledge of NZS standards and acceptable solutions.

**3. Communication**
Drawing, specification writing, reporting, client communication, presentation. Documentation standards for resource and building consent.

**4. Management**
Project programming, fee management, contractor relationships, contract administration under NZS 3910.

**5. Professional practice**
Ethics, insurance, dispute resolution, knowledge of the Building Act 2004, Resource Management Act, and Health and Safety at Work Act.

**Interview tip:** The Board looks for evidence across all five areas. A technically strong candidate who can't articulate their design thinking will struggle. Document both.` },

  { id:'reading-1', category:'reading', label:'Reading', title:'Essential Texts', color:'#639922', size:'md', content:`**Design thinking & ecological architecture:**
- *The Timeless Way of Building* — Christopher Alexander
- *A Pattern Language* — Alexander, Ishikawa, Silverstein
- *Thinking Architecture* — Peter Zumthor
- *The Eyes of the Skin* — Juhani Pallasmaa
- *Atmospheres* — Peter Zumthor

**Place, ecology, and Indigenous frameworks:**
- *Braiding Sweetgrass* — Robin Wall Kimmerer
- *The Maramataka* — Rangi Mātāmua
- *Decolonising Architecture* — Eyal Weizman et al.

**Technical practice:**
- *Architectural Detailing* — Edward Allen & Patrick Rand
- *Sun, Wind & Light* — Mark DeKay & G.Z. Brown

**NZ-specific:**
- *Architecture of New Zealand* — Julia Gatley (ed.)
- *Leaky Buildings: A Complete Guide* — Don Hunn et al.` },

  { id:'field-1', category:'field', label:'Field Note', title:'On dunnage', color:'#ba7517', size:'sm', content:`On a construction site in New Zealand, dunnage refers to the materials — usually timber, rubber, or composite blocks — placed under, between, or around materials to support, stabilize, and protect them during transport and storage.

It acts as a crucial gap-filler between the ground and heavy items, ensuring safety and preventing damage to materials like precast concrete, steel, pipes, and timber packs.

The gap is not nothing. The gap is the work.` },

  { id:'field-2', category:'field', label:'Field Note', title:'On weathertightness', color:'#ba7517', size:'sm', content:`The leaky building crisis was not primarily a failure of materials. It was a failure of sequencing — of understanding that water follows gravity regardless of what the architect intended.

Every junction is a negotiation between the inside and the outside. The detail is the argument.

E2/AS1 exists because of what we didn't know, and then refused to admit we didn't know, for a decade.` },

  { id:'case-e2', category:'case', label:'Case Study', title:'E2 — Leaky Building Crisis', color:'#4a7ec4', size:'md', content:`**The New Zealand Leaky Building Crisis — 1990s–2000s**

**What happened:**
An estimated 42,000–89,000 homes built between approximately 1987 and 2004 suffered significant weathertightness failures. Repair costs estimated at NZ$11–23 billion.

**Contributing factors:**
- Monolithic cladding systems applied without drained cavities
- Complex building forms with parapets, recessed entries, horizontal junctions
- Removal of mandatory timber treatment requirements (1995)
- Inadequate flashing at penetrations and junctions
- Reliance on sealant alone at critical junctions

**What changed:**
- E2/AS1 introduced in 2004, establishing the risk matrix approach
- Drained cavity requirements for higher-risk cladding systems
- Mandatory flashing details for all penetrations and junctions

**Key lesson:** The cavity is not a luxury. It is the fail-safe. When cladding leaks — and all cladding eventually leaks — the cavity allows moisture to drain and dry before it reaches the structure.` },
];

const CATEGORY_LABELS: Record<string,string> = { nzbc:'NZBC', nzrab:'NZRAB', reading:'Reading', field:'Field Notes', case:'Case Studies' };
const sizeMap = { sm:72, md:90, lg:108 };

// ─── POSITIONS ────────────────────────────────────────────────────────────────

function generatePositions(count: number) {
  const positions: {x:number;y:number;delay:number;duration:number;dx:number;dy:number}[] = [];
  const placed: {x:number;y:number}[] = [];
  for (let i = 0; i < count; i++) {
    let attempts = 0, x = 0, y = 0;
    do {
      x = 8 + Math.random() * 84;
      y = 10 + Math.random() * 78;
      attempts++;
    } while (attempts < 60 && placed.some(p => Math.hypot(p.x-x, p.y-y) < 14));
    placed.push({x,y});
    positions.push({ x, y, delay: Math.random()*4, duration: 6+Math.random()*6, dx:(Math.random()-.5)*1.2, dy:(Math.random()-.5)*1.2 });
  }
  return positions;
}

// ─── QUIZ STATE ───────────────────────────────────────────────────────────────

interface QuizState {
  active: boolean;
  questions: typeof QUIZ_QUESTIONS;
  index: number;
  selected: number | null;
  answered: boolean;
  score: number;
  done: boolean;
  wrong: {q:string;correct:string;ref:string}[];
}

function freshQuiz(): QuizState {
  const shuffled = [...QUIZ_QUESTIONS].sort(()=>Math.random()-.5).slice(0,10);
  return { active:true, questions:shuffled, index:0, selected:null, answered:false, score:0, done:false, wrong:[] };
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function DunnageRoom() {
  const [positions, setPositions] = useState<ReturnType<typeof generatePositions>>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [openNugget, setOpenNugget] = useState<string|null>(null);
  const [quiz, setQuiz] = useState<QuizState|null>(null);
  const [, forceUpdate] = useState(0);
  const [activeBubble, setActiveBubble] = useState<string|null>(null);
  const [quizActive, setQuizActive] = useState(false);
  const startTime = useRef(Date.now());

  useEffect(() => { setPositions(generatePositions(NUGGETS.length)); }, []);
  useEffect(() => {
    const id = setInterval(() => forceUpdate(n=>n+1), 50);
    return () => clearInterval(id);
  }, []);

  const elapsed = (Date.now() - startTime.current) / 1000;
  const activeNugget = NUGGETS.find(n=>n.id===openNugget);

  const answerQuiz = (i: number) => {
    if (!quiz || quiz.answered) return;
    const q = quiz.questions[quiz.index];
    const correct = i === q.correct;
    setQuiz(prev => prev ? {
      ...prev,
      selected: i,
      answered: true,
      score: correct ? prev.score+1 : prev.score,
      wrong: correct ? prev.wrong : [...prev.wrong, {q:q.q, correct:q.opts[q.correct], ref:q.ref}],
    } : null);
  };

  const nextQuiz = () => {
    if (!quiz) return;
    if (quiz.index < quiz.questions.length-1) {
      setQuiz(prev => prev ? {...prev, index:prev.index+1, selected:null, answered:false} : null);
    } else {
      setQuiz(prev => prev ? {...prev, done:true} : null);
    }
  };

  const renderContent = (text: string) => text.split('\n').map((line,i) => {
    if (line.startsWith('**') && line.endsWith('**')) return <p key={i} style={{fontWeight:600,color:'#f0ede8',marginTop:'12px',marginBottom:'4px',fontSize:'13px',letterSpacing:'.04em'}}>{line.replace(/\*\*/g,'')}</p>;
    if (line.startsWith('- ')) return <p key={i} style={{color:'#9a9690',fontSize:'13px',lineHeight:1.6,paddingLeft:'12px',borderLeft:'1px solid #252525',marginBottom:'2px'}}>{line.slice(2).replace(/\*\*([^*]+)\*\*/g,'$1')}</p>;
    if (line.match(/^\d\./)) return <p key={i} style={{color:'#9a9690',fontSize:'13px',lineHeight:1.6,paddingLeft:'12px',marginBottom:'2px'}}>{line.replace(/\*\*([^*]+)\*\*/g,'$1')}</p>;
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) return <p key={i} style={{color:'#9a9690',fontSize:'13px',lineHeight:1.6,fontStyle:'italic'}}>{line.replace(/\*/g,'')}</p>;
    if (line==='') return <div key={i} style={{height:'8px'}}/>;
    return <p key={i} style={{color:'#c8b89a',fontSize:'13px',lineHeight:1.65}}>{line.replace(/\*\*([^*]+)\*\*/g,'$1')}</p>;
  });

  const pct = quiz ? Math.round((quiz.score/quiz.questions.length)*100) : 0;
  const scoreColor = pct>=80?'#4a9e7a':pct>=60?'#c4933a':'#c45a4a';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html,body{height:100%;background:#0a0a0a;}
        .room{width:100vw;height:100vh;height:100dvh;background:#0a0a0a;position:relative;overflow:hidden;font-family:'DM Mono',monospace;}
        .grain{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:.04;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:120px;}
        .back-link{position:fixed;top:20px;left:24px;z-index:100;font-family:'DM Mono',monospace;font-size:11px;color:#3a3a3a;text-decoration:none;letter-spacing:.08em;transition:color .2s;}
        .back-link:hover{color:#666;}
        @media(max-width:768px){.back-link-text{display:none;}}
        .filters{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:100;display:flex;gap:6px;background:rgba(15,15,15,.9);border:.5px solid #1a1a1a;border-radius:30px;padding:6px 10px;backdrop-filter:blur(8px);}
        .filter-btn{padding:5px 14px;border-radius:20px;border:none;background:transparent;font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.06em;color:#3a3a3a;cursor:pointer;transition:all .2s;white-space:nowrap;}
        .filter-btn.active{background:#1a1a1a;color:#c8b89a;}
        .filter-btn:hover:not(.active){color:#666;}
        .bubble{position:absolute;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;border:.5px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);transition:background .3s ease,border-color .3s ease,box-shadow .3s ease;user-select:none;}
        .bubble-label{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.1em;font-weight:500;text-align:center;line-height:1;color:rgba(255,255,255,0.25);transition:color .3s ease;}
        .bubble-title{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:.05em;text-align:center;line-height:1.2;padding:0 8px;color:rgba(255,255,255,0.15);transition:color .3s ease;}
        .quiz-bubble{position:fixed;bottom:72px;right:32px;z-index:100;width:80px;height:80px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:3px;border:.5px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);transition:background .3s ease,border-color .3s ease,box-shadow .3s ease;user-select:none;}
        .quiz-label{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.12em;font-weight:500;color:rgba(255,255,255,0.25);transition:color .3s ease;}
        .overlay{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:24px;}
        .overlay-bg{position:absolute;inset:0;background:rgba(5,5,5,.94);backdrop-filter:blur(16px);cursor:pointer;}
        .overlay-card{position:relative;z-index:1;background:#0d0d0d;border:.5px solid #1e1e1e;border-radius:12px;max-width:560px;width:100%;max-height:82vh;overflow-y:auto;padding:32px;scrollbar-width:thin;scrollbar-color:#1a1a1a transparent;}
        .overlay-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;}
        .overlay-badge{font-size:10px;font-weight:500;letter-spacing:.1em;padding:3px 10px;border-radius:20px;font-family:'DM Mono',monospace;}
        .overlay-close{background:none;border:none;color:#333;cursor:pointer;font-size:20px;line-height:1;padding:0 4px;transition:color .15s;}
        .overlay-close:hover{color:#888;}
        .overlay-title{font-family:'DM Serif Display',serif;font-size:22px;color:#f0ede8;margin-bottom:20px;line-height:1.2;}
        .overlay-divider{height:.5px;background:#181818;margin-bottom:20px;}
        .overlay-content{display:flex;flex-direction:column;gap:3px;}
        .quiz-q{font-family:'DM Serif Display',serif;font-size:18px;color:#f0ede8;line-height:1.45;margin-bottom:24px;}
        .quiz-opt{width:100%;padding:12px 16px;border:.5px solid #1e1e1e;border-radius:8px;background:#111;font-family:'DM Mono',monospace;font-size:12px;color:#9a9690;cursor:pointer;text-align:left;line-height:1.4;transition:all .15s;margin-bottom:8px;}
        .quiz-opt:hover:not(:disabled){background:#161616;border-color:#2a2a2a;color:#c8b89a;}
        .quiz-opt.correct{border-color:#4a9e7a;background:#4a9e7a12;color:#c8f0d8;}
        .quiz-opt.wrong{border-color:#c45a4a;background:#c45a4a12;color:#f0c8c8;}
        .quiz-opt.reveal{border-color:#4a9e7a;background:#4a9e7a12;color:#c8f0d8;}
        .quiz-fb{font-size:12px;line-height:1.55;padding:12px 14px;border-radius:8px;margin-bottom:16px;font-family:'DM Mono',monospace;}
        .quiz-fb.ok{background:#4a9e7a10;color:#4a9e7a;border:.5px solid #4a9e7a30;}
        .quiz-fb.bad{background:#c45a4a10;color:#c45a8a;border:.5px solid #c45a4a30;}
        .quiz-next{width:100%;padding:12px;background:#1a1a1a;border:.5px solid #2a2a2a;border-radius:8px;font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.08em;color:#c8b89a;cursor:pointer;transition:all .15s;}
        .quiz-next:hover{background:#222;border-color:#333;}
        .quiz-prog{width:100%;height:2px;background:#1a1a1a;border-radius:1px;overflow:hidden;margin-bottom:24px;}
        .quiz-prog-fill{height:100%;border-radius:1px;transition:width .3s;}
        .score-num{font-family:'DM Serif Display',serif;font-size:64px;line-height:1;margin-bottom:8px;}
        .score-grade{font-family:'DM Mono',monospace;font-size:13px;color:#666;margin-bottom:24px;}
        .wrong-list{display:flex;flex-direction:column;gap:10px;margin-bottom:24px;}
        .wrong-item{padding:12px;background:#111;border:.5px solid #1e1e1e;border-radius:8px;}
        .wrong-item-q{font-size:11px;color:#666;margin-bottom:6px;line-height:1.4;}
        .wrong-item-a{font-size:12px;color:#4a9e7a;font-family:'DM Mono',monospace;}
        .wrong-item-ref{font-size:10px;color:#333;margin-top:4px;letter-spacing:.05em;}
        .retry-btn{width:100%;padding:12px;background:#1a1a1a;border:.5px solid #2a2a2a;border-radius:8px;font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.08em;color:#c8b89a;cursor:pointer;transition:all .15s;}
        .retry-btn:hover{background:#222;}
      `}</style>

      <div className="room">
        <div className="grain"/>
        <Link href="/" className="back-link">←<span className="back-link-text"> yenegh.com</span></Link>

        {/* Floating nugget bubbles */}
        {positions.length === NUGGETS.length && NUGGETS.map((nugget, i) => {
          const pos = positions[i];
          const size = sizeMap[nugget.size as keyof typeof sizeMap];
          const isFiltered = activeFilter !== 'all' && nugget.category !== activeFilter;
          const t = elapsed + pos.delay;
          const floatX = Math.sin(t / pos.duration * Math.PI * 2) * pos.dx * 12;
          const floatY = Math.cos(t / pos.duration * Math.PI * 2) * pos.dy * 12;

          const isActive = activeBubble === nugget.id;
          return (
            <div
              key={nugget.id}
              className="bubble"
              onMouseEnter={() => !isFiltered && setActiveBubble(nugget.id)}
              onMouseLeave={() => setActiveBubble(null)}
              onTouchStart={() => !isFiltered && setActiveBubble(nugget.id)}
              onTouchEnd={() => setActiveBubble(null)}
              onClick={() => !isFiltered && setOpenNugget(nugget.id)}
              style={{
                left:`${pos.x}%`, top:`${pos.y}%`,
                width:size, height:size,
                transform:`translate(-50%,-50%) translate(${floatX}px,${floatY}px)`,
                background: isFiltered ? undefined : isActive ? `radial-gradient(circle at 35% 35%,${nugget.color}18,${nugget.color}06)` : undefined,
                borderColor: isFiltered ? '#111' : isActive ? `${nugget.color}30` : undefined,
                opacity: isFiltered ? 0.04 : 1,
                boxShadow: isActive && !isFiltered ? `0 0 ${size*.4}px ${nugget.color}08` : 'none',
                pointerEvents: isFiltered ? 'none' : 'auto',
              }}
            >
              <span className="bubble-label" style={isActive && !isFiltered ? {color:nugget.color} : undefined}>{nugget.label}</span>
              <span className="bubble-title" style={isActive && !isFiltered ? {color:`${nugget.color}99`} : undefined}>{nugget.title}</span>
            </div>
          );
        })}

        {/* Quiz bubble — fixed, always visible */}
        <div
          className="quiz-bubble"
          onMouseEnter={() => setQuizActive(true)}
          onMouseLeave={() => setQuizActive(false)}
          onTouchStart={() => setQuizActive(true)}
          onTouchEnd={() => setQuizActive(false)}
          onClick={() => setQuiz(freshQuiz())}
          style={quizActive ? {borderColor:'#8b000050',background:'radial-gradient(circle at 35% 35%,#8b000018,#8b000008)',boxShadow:'0 0 32px #8b000020'} : undefined}
        >
          <span className="quiz-label" style={quizActive ? {color:'#8b3a3a'} : undefined}>test</span>
          <span style={{fontSize:'9px',color:quizActive?'#4a1a1a':'rgba(255,255,255,0.2)',letterSpacing:'.06em',fontFamily:'DM Mono,monospace',transition:'color .3s'}}>yourself</span>
        </div>

        {/* Filter bar */}
        <div className="filters">
          {['all','nzbc','nzrab','case','reading','field'].map(cat => (
            <button key={cat} className={`filter-btn ${activeFilter===cat?'active':''}`} onClick={()=>setActiveFilter(cat)}>
              {cat==='all'?'all':CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Nugget overlay */}
        {openNugget && activeNugget && (
          <div className="overlay">
            <div className="overlay-bg" onClick={()=>setOpenNugget(null)}/>
            <div className="overlay-card">
              <div className="overlay-top">
                <span className="overlay-badge" style={{background:`${activeNugget.color}18`,color:activeNugget.color,border:`.5px solid ${activeNugget.color}30`}}>
                  {CATEGORY_LABELS[activeNugget.category]} · {activeNugget.label}
                </span>
                <button className="overlay-close" onClick={()=>setOpenNugget(null)}>×</button>
              </div>
              <div className="overlay-title">{activeNugget.title}</div>
              <div className="overlay-divider"/>
              <div className="overlay-content">{renderContent(activeNugget.content)}</div>
            </div>
          </div>
        )}

        {/* Quiz overlay */}
        {quiz && (
          <div className="overlay">
            <div className="overlay-bg" onClick={()=>setQuiz(null)}/>
            <div className="overlay-card">
              {quiz.done ? (
                <>
                  <div className="overlay-top">
                    <span className="overlay-badge" style={{background:'#8b000018',color:'#8b3a3a',border:'.5px solid #8b000030'}}>
                      test yourself — complete
                    </span>
                    <button className="overlay-close" onClick={()=>setQuiz(null)}>×</button>
                  </div>
                  <div className="score-num" style={{color:scoreColor}}>{pct}%</div>
                  <div className="score-grade">
                    {pct>=80?'Strong recall — you know this material.':pct>=60?'Good foundation — revisit the highlighted bubbles.':'Keep studying — the bubbles are waiting.'}
                  </div>
                  {quiz.wrong.length>0 && (
                    <>
                      <div style={{fontSize:'10px',letterSpacing:'.1em',color:'#3a3a3a',marginBottom:'12px',fontFamily:'DM Mono,monospace'}}>REVISIT</div>
                      <div className="wrong-list">
                        {quiz.wrong.map((w,i)=>(
                          <div key={i} className="wrong-item">
                            <div className="wrong-item-q">{w.q}</div>
                            <div className="wrong-item-a">→ {w.correct}</div>
                            <div className="wrong-item-ref">{w.ref}</div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  <button className="retry-btn" onClick={()=>setQuiz(freshQuiz())}>try again</button>
                </>
              ) : (
                <>
                  <div className="overlay-top">
                    <span className="overlay-badge" style={{background:'#8b000018',color:'#8b3a3a',border:'.5px solid #8b000030'}}>
                      test yourself · {quiz.index+1}/{quiz.questions.length}
                    </span>
                    <button className="overlay-close" onClick={()=>setQuiz(null)}>×</button>
                  </div>
                  <div className="quiz-prog">
                    <div className="quiz-prog-fill" style={{width:`${((quiz.index)/quiz.questions.length)*100}%`,background:'#8b3a3a'}}/>
                  </div>
                  <div className="quiz-q">{quiz.questions[quiz.index].q}</div>
                  <div>
                    {quiz.questions[quiz.index].opts.map((opt,i)=>{
                      let cls = 'quiz-opt';
                      if(quiz.answered){
                        if(i===quiz.questions[quiz.index].correct) cls+=' correct';
                        else if(i===quiz.selected) cls+=' wrong';
                      }
                      return (
                        <button key={i} className={cls} disabled={quiz.answered} onClick={()=>answerQuiz(i)}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {quiz.answered && (
                    <>
                      <div className={`quiz-fb ${quiz.selected===quiz.questions[quiz.index].correct?'ok':'bad'}`}>
                        {quiz.selected===quiz.questions[quiz.index].correct
                          ? `✓ Correct — ${quiz.questions[quiz.index].ref}`
                          : `✗ Incorrect — ${quiz.questions[quiz.index].ref}`}
                      </div>
                      <button className="quiz-next" onClick={nextQuiz}>
                        {quiz.index<quiz.questions.length-1?'next question →':'see results'}
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
