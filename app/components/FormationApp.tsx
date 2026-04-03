"use client";
import { useState } from "react";
import { modules, stats, faqItems } from "../data/formation";

type View = "home" | "modules" | "complete";

export default function FormationApp() {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [view, setView] = useState<View>("home");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const goToModule = (index: number) => {
    setView("modules");
    setActiveModule(index);
    setExpandedStep(null);
  };

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", background: "#0c0a2e", color: "#e8e8f0", minHeight: "100vh" }}>

      {/* ═══ HOME VIEW ═══ */}
      {view === "home" && (
        <div>
          {/* Hero */}
          <div style={{ background: "linear-gradient(180deg, #1a1452 0%, #0c0a2e 100%)", padding: "40px 20px 32px", textAlign: "center" }}>
            <div style={{
              display: "inline-block", padding: "4px 16px", borderRadius: "20px",
              background: "linear-gradient(90deg, #FFD60A, #FFB800)", marginBottom: "14px",
            }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#0c0a2e", letterSpacing: "1px" }}>FORMATION GRATUITE</span>
            </div>

            <h1 style={{ fontSize: "28px", fontWeight: 900, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>
              Crée ton SaaS<br />
              <span style={{ color: "#FFD60A" }}>de zéro avec l'IA</span>
            </h1>
            <p style={{ fontSize: "14px", color: "#8888aa", margin: "0 0 20px", lineHeight: 1.5 }}>
              Même si tu n'as jamais écrit une ligne de code
            </p>

            <button onClick={() => goToModule(0)} style={{
              padding: "14px 32px", borderRadius: "14px", border: "none",
              background: "linear-gradient(90deg, #FFD60A, #FFB800)",
              color: "#0c0a2e", fontSize: "15px", fontWeight: 800, cursor: "pointer",
              boxShadow: "0 4px 24px #FFD60A44",
            }}>
              Commencer la formation →
            </button>

            <p style={{ fontSize: "11px", color: "#555577", marginTop: "10px" }}>Par THE DJELO • 9 modules • ~3h au total</p>
          </div>

          {/* Stats */}
          <div style={{ padding: "0 16px" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px",
              marginTop: "-10px",
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: "#151240", borderRadius: "16px", padding: "18px 14px",
                  textAlign: "center", border: "1px solid #1f1a60",
                }}>
                  <div style={{ fontSize: "28px", fontWeight: 900, color: "#FFD60A", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#fff", marginTop: "4px" }}>{s.label}</div>
                  <div style={{ fontSize: "10px", color: "#666688", marginTop: "2px" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Programme */}
          <div style={{ padding: "28px 16px 0" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
              Le programme <span style={{ color: "#FFD60A" }}>complet</span>
            </h2>
            <p style={{ fontSize: "12px", color: "#6666aa", margin: "0 0 16px" }}>9 modules pour passer de l'idée au lancement</p>

            {modules.map((m, i) => (
              <div key={i} onClick={() => goToModule(i)} style={{
                display: "flex", gap: "14px", alignItems: "center",
                background: "#151240", borderRadius: "14px", padding: "14px 16px",
                marginBottom: "8px", cursor: "pointer", border: "1px solid #1f1a60",
                transition: "all 0.2s",
              }} role="button" aria-label={`Ouvrir le module ${m.id} : ${m.title}`}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #1f1a60, #2a2480)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", flexShrink: 0,
                }}>{m.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>Module {m.id} — {m.title}</div>
                  <div style={{ fontSize: "11px", color: "#6666aa", marginTop: "2px" }}>⏱️ {m.duration}</div>
                </div>
                <div style={{ color: "#FFD60A", fontSize: "18px" }}>›</div>
              </div>
            ))}
          </div>

          {/* Méthode */}
          <div style={{ padding: "28px 16px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
              La méthode <span style={{ color: "#FFD60A" }}>THE DJELO</span>
            </h2>
            <p style={{ fontSize: "12px", color: "#6666aa", margin: "0 0 16px" }}>5 étapes. Zéro code. 100% IA.</p>

            {[
              { step: "1", title: "ChatGPT génère ton prompt", desc: "L'IA écrit le brief technique pour toi" },
              { step: "2", title: "v0.dev génère l'app", desc: "Du texte → une application complète" },
              { step: "3", title: "Cursor améliore et lance", desc: "L'IA comprend ton projet et le fait tourner" },
              { step: "4", title: "Boucle bug → fix", desc: "Tu décris le bug, l'IA corrige" },
              { step: "5", title: "Vercel met en ligne", desc: "Gratuit, accessible au monde entier" },
            ].map((s, i) => (
              <div key={i} style={{
                display: "flex", gap: "14px", alignItems: "flex-start",
                marginBottom: "12px",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "linear-gradient(135deg, #FFD60A, #FFB800)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px", fontWeight: 900, color: "#0c0a2e", flexShrink: 0,
                }}>{s.step}</div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{s.title}</div>
                  <div style={{ fontSize: "11px", color: "#6666aa", marginTop: "2px" }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ padding: "0 16px 28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
              Questions <span style={{ color: "#FFD60A" }}>fréquentes</span>
            </h2>
            <p style={{ fontSize: "12px", color: "#6666aa", margin: "0 0 16px" }}>Tout ce que tu te demandes avant de commencer.</p>

            {faqItems.map((item, i) => (
              <div key={i} style={{
                marginBottom: "8px", borderRadius: "14px", overflow: "hidden",
                border: expandedFaq === i ? "1px solid #FFD60A40" : "1px solid #1f1a60",
                background: "#151240", transition: "all 0.2s",
              }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  aria-expanded={expandedFaq === i}
                  style={{
                    width: "100%", padding: "14px 16px", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    background: "none", border: "none", textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff", flex: 1, paddingRight: "12px" }}>{item.question}</span>
                  <span style={{ color: expandedFaq === i ? "#FFD60A" : "#333355", fontSize: "20px", flexShrink: 0, transition: "all 0.2s" }}>
                    {expandedFaq === i ? "−" : "+"}
                  </span>
                </button>

                {expandedFaq === i && (
                  <div style={{ padding: "0 16px 14px" }}>
                    <p style={{ fontSize: "13px", color: "#9999bb", lineHeight: 1.6, margin: 0 }}>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA bottom */}
          <div style={{ padding: "0 16px 40px", textAlign: "center" }}>
            <button onClick={() => goToModule(0)} style={{
              padding: "14px 32px", borderRadius: "14px", border: "none", width: "100%",
              background: "linear-gradient(90deg, #FFD60A, #FFB800)",
              color: "#0c0a2e", fontSize: "15px", fontWeight: 800, cursor: "pointer",
              boxShadow: "0 4px 24px #FFD60A44",
            }}>
              C'est parti, je commence →
            </button>
          </div>
        </div>
      )}

      {/* ═══ MODULES VIEW ═══ */}
      {view === "modules" && activeModule !== null && (() => {
        const mod = modules[activeModule];
        return (
          <div>
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 16px 0" }}>
              <button onClick={() => setView("home")} style={{
                background: "#151240", border: "1px solid #1f1a60", borderRadius: "10px",
                padding: "8px 14px", color: "#8888aa", fontSize: "12px", fontWeight: 600, cursor: "pointer",
              }}>← Accueil</button>
              <span style={{ fontSize: "11px", color: "#444466" }}>Module {mod.id}/9</span>
            </div>

            {/* Progress bar */}
            <div style={{ padding: "12px 16px 0" }}>
              <div style={{ height: "5px", background: "#151240", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(mod.id / 9) * 100}%`, background: "linear-gradient(90deg, #FFD60A, #FFB800)", borderRadius: "3px", transition: "width 0.4s" }} />
              </div>
            </div>

            {/* Module selector dots */}
            <div style={{ display: "flex", gap: "5px", justifyContent: "center", padding: "14px 0 0" }}>
              {modules.map((m, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveModule(i); setExpandedStep(null); }}
                  aria-label={`Aller au module ${m.id} : ${m.title}`}
                  aria-current={activeModule === i ? "true" : undefined}
                  style={{
                    width: activeModule === i ? "28px" : "10px", height: "10px",
                    borderRadius: "5px", border: "none",
                    background: activeModule === i ? "linear-gradient(90deg, #FFD60A, #FFB800)" : "#1f1a60",
                    cursor: "pointer", transition: "all 0.3s",
                  }}
                />
              ))}
            </div>

            {/* Module content */}
            <div style={{ padding: "16px 16px 32px" }}>
              {/* Module header */}
              <div style={{
                background: "linear-gradient(135deg, #1a1452, #2a2080)",
                borderRadius: "20px", padding: "24px 20px", marginBottom: "16px",
                border: "1px solid #2f2890",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontSize: "36px" }}>{mod.icon}</span>
                  <div style={{
                    padding: "4px 12px", borderRadius: "10px",
                    background: "#FFD60A20", border: "1px solid #FFD60A40",
                  }}>
                    <span style={{ fontSize: "11px", color: "#FFD60A", fontWeight: 700 }}>⏱️ {mod.duration}</span>
                  </div>
                </div>
                <div style={{ fontSize: "11px", color: "#FFD60A", fontWeight: 700, letterSpacing: "2px", marginBottom: "4px" }}>MODULE {mod.id}</div>
                <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>{mod.title}</h2>
                <p style={{ fontSize: "13px", color: "#9999bb", lineHeight: 1.6, margin: 0 }}>{mod.intro}</p>
              </div>

              {/* Steps */}
              {mod.steps.map((step, i) => (
                <div key={i} style={{
                  marginBottom: "10px", borderRadius: "16px", overflow: "hidden",
                  border: expandedStep === i ? "1px solid #FFD60A40" : "1px solid #1f1a60",
                  background: "#151240", transition: "all 0.2s",
                }}>
                  <button
                    onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                    aria-expanded={expandedStep === i}
                    style={{
                      width: "100%", padding: "16px", cursor: "pointer",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "none", border: "none", textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <div style={{
                        width: "30px", height: "30px", borderRadius: "10px",
                        background: expandedStep === i ? "linear-gradient(135deg, #FFD60A, #FFB800)" : "#1f1a60",
                        color: expandedStep === i ? "#0c0a2e" : "#FFD60A",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "13px", fontWeight: 800, flexShrink: 0, transition: "all 0.2s",
                      }}>{i + 1}</div>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{step.title}</span>
                    </div>
                    <span style={{ color: expandedStep === i ? "#FFD60A" : "#333355", fontSize: "20px", transition: "all 0.2s" }}>
                      {expandedStep === i ? "−" : "+"}
                    </span>
                  </button>

                  {expandedStep === i && (
                    <div style={{ padding: "0 16px 16px" }}>
                      <p style={{ fontSize: "13px", color: "#bbbbdd", lineHeight: 1.7, margin: "0 0 12px", whiteSpace: "pre-line" }}>{step.content}</p>

                      {step.template && (
                        <div style={{
                          background: "#0c0a2e", borderRadius: "12px", padding: "14px",
                          marginBottom: "12px", border: "1px solid #2a2480",
                          position: "relative",
                        }}>
                          <div style={{
                            position: "absolute", top: "-8px", left: "12px",
                            background: "linear-gradient(90deg, #FFD60A, #FFB800)",
                            padding: "2px 10px", borderRadius: "6px",
                          }}>
                            <span style={{ fontSize: "9px", fontWeight: 800, color: "#0c0a2e", letterSpacing: "1px" }}>PROMPT À COPIER</span>
                          </div>
                          <div style={{ fontSize: "12px", color: "#aaaacc", lineHeight: 1.6, whiteSpace: "pre-line", fontFamily: "'JetBrains Mono', monospace", marginTop: "6px" }}>
                            {step.template}
                          </div>
                        </div>
                      )}

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{
                          background: "#1a1452", borderRadius: "12px", padding: "12px 14px",
                          borderLeft: "3px solid #FFD60A",
                        }}>
                          <div style={{ fontSize: "10px", fontWeight: 700, color: "#FFD60A", letterSpacing: "1px", marginBottom: "3px" }}>💡 ASTUCE</div>
                          <div style={{ fontSize: "12px", color: "#9999bb", lineHeight: 1.5 }}>{step.tip}</div>
                        </div>

                        <div style={{
                          background: "#0f1a2e", borderRadius: "12px", padding: "12px 14px",
                          borderLeft: "3px solid #4ADE80",
                        }}>
                          <div style={{ fontSize: "10px", fontWeight: 700, color: "#4ADE80", letterSpacing: "1px", marginBottom: "3px" }}>✅ ACTION</div>
                          <div style={{ fontSize: "12px", color: "#88bbaa", lineHeight: 1.5 }}>{step.action}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Tease */}
              <div style={{
                marginTop: "16px", borderRadius: "16px", padding: "18px",
                background: "linear-gradient(135deg, #1a1452, #1f1040)",
                border: "1px solid #2f2890",
              }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "16px" }}>🔓</span>
                  <span style={{ fontSize: "12px", fontWeight: 800, color: "#FFD60A", letterSpacing: "1px" }}>POUR ALLER PLUS LOIN</span>
                </div>
                <p style={{ fontSize: "12px", color: "#7777aa", lineHeight: 1.6, margin: 0 }}>{mod.tease}</p>
              </div>

              {/* Navigation */}
              <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                {activeModule > 0 && (
                  <button onClick={() => { setActiveModule(activeModule - 1); setExpandedStep(null); }} style={{
                    flex: 1, padding: "14px", borderRadius: "14px",
                    border: "1px solid #1f1a60", background: "#151240",
                    color: "#8888aa", fontSize: "12px", fontWeight: 700, cursor: "pointer",
                  }}>← Module {activeModule}</button>
                )}
                {activeModule < modules.length - 1 ? (
                  <button onClick={() => { setActiveModule(activeModule + 1); setExpandedStep(null); }} style={{
                    flex: 1, padding: "14px", borderRadius: "14px", border: "none",
                    background: "linear-gradient(90deg, #FFD60A, #FFB800)",
                    color: "#0c0a2e", fontSize: "12px", fontWeight: 800, cursor: "pointer",
                  }}>Module {activeModule + 2} →</button>
                ) : (
                  <button onClick={() => setView("complete")} style={{
                    flex: 1, padding: "14px", borderRadius: "14px", border: "none",
                    background: "linear-gradient(90deg, #4ADE80, #22c55e)",
                    color: "#fff", fontSize: "12px", fontWeight: 800, cursor: "pointer",
                  }}>Terminer la formation 🎉</button>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* ═══ COMPLETE VIEW ═══ */}
      {view === "complete" && (
        <div style={{ padding: "60px 20px 40px", textAlign: "center" }}>
          <div style={{ fontSize: "64px", marginBottom: "12px" }}>🎉</div>
          <h1 style={{ fontSize: "26px", fontWeight: 900, color: "#fff", margin: "0 0 8px" }}>
            Félicitations !
          </h1>
          <div style={{
            display: "inline-block", padding: "4px 16px", borderRadius: "20px",
            background: "linear-gradient(90deg, #FFD60A, #FFB800)", marginBottom: "20px",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#0c0a2e" }}>FORMATION TERMINÉE</span>
          </div>

          <p style={{ fontSize: "14px", color: "#9999bb", lineHeight: 1.7, margin: "0 0 20px" }}>
            Tu as toutes les bases pour créer ton SaaS. Le plus dur maintenant c'est d'AGIR. Lance-toi. Fais des erreurs. Corrige. Avance.
          </p>

          <div style={{
            background: "#151240", borderRadius: "20px", padding: "24px",
            border: "1px solid #2f2890", marginBottom: "20px", textAlign: "left",
          }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#FFD60A", marginBottom: "12px" }}>Ce que tu sais faire maintenant :</div>
            {[
              "Trouver et valider une idée de SaaS",
              "Générer un prompt parfait avec ChatGPT",
              "Créer une app complète avec v0.dev",
              "Utiliser Cursor/VS Code avec l'IA",
              "Debugger avec la méthode bug→logs→fix",
              "Intégrer auth, BDD, API, paiements",
              "Designer une interface pro",
              "Déployer sur Vercel avec ton domaine",
              "Monétiser et trouver tes premiers clients",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                <div style={{
                  width: "22px", height: "22px", borderRadius: "7px",
                  background: "#4ADE8020", color: "#4ADE80",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", flexShrink: 0,
                }}>✓</div>
                <span style={{ fontSize: "12px", color: "#bbbbdd" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{
            background: "linear-gradient(135deg, #1a1452, #1f1040)",
            borderRadius: "20px", padding: "24px",
            border: "1px solid #FFD60A30", textAlign: "center",
          }}>
            <p style={{ fontSize: "13px", color: "#9999bb", lineHeight: 1.7, margin: "0 0 14px" }}>
              Si tu bloques, si t'as besoin d'aide, si tu veux aller plus vite… tu sais où me trouver.
            </p>
            <p style={{ fontSize: "13px", color: "#bbbbdd", lineHeight: 1.7, margin: "0 0 16px", fontWeight: 600 }}>
              Je prépare des choses pour ceux qui veulent passer au niveau supérieur.
            </p>
            <div style={{ fontSize: "18px", fontWeight: 900, color: "#FFD60A", marginBottom: "12px" }}>THE DJELO</div>
            <div style={{ fontSize: "12px", color: "#6666aa" }}>Code. Build. Monetize.</div>
            <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "14px", flexWrap: "wrap" }}>
              {["TikTok", "YouTube", "Instagram"].map((platform) => (
                <span key={platform} style={{
                  fontSize: "11px", padding: "6px 14px", borderRadius: "10px",
                  background: "#1f1a60", color: "#8888bb", fontWeight: 600,
                }}>{platform} @thedjelo</span>
              ))}
            </div>
          </div>

          <button onClick={() => { setView("home"); setActiveModule(null); }} style={{
            marginTop: "20px", padding: "14px 32px", borderRadius: "14px", width: "100%",
            background: "#151240", color: "#8888aa", fontSize: "13px", fontWeight: 700, cursor: "pointer",
            border: "1px solid #1f1a60",
          }}>← Retour à l'accueil</button>
        </div>
      )}
    </div>
  );
}
