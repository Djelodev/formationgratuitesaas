"use client";
import { useState } from "react";

const modules = [
  {
    id: 1, title: "Trouve ton idée de SaaS", icon: "💡", duration: "15 min",
    intro: "Avant de coder quoi que ce soit, il te faut une idée qui RÉSOUT un vrai problème. Les meilleurs SaaS sont des solutions simples à des problèmes chiants.",
    steps: [
      { title: "La méthode THE DJELO", content: "Ouvre ton téléphone. Regarde les apps que tu utilises. Pose-toi cette question : qu'est-ce qui m'énerve ? Ce qui t'énerve = ton idée de SaaS.", tip: "Les meilleures idées viennent des FRUSTRATIONS.", action: "Note 5 choses qui t'énervent dans ta vie quotidienne. Chacune est une potentielle idée." },
      { title: "Valide ton idée en 10 min", content: "Va sur Reddit, Twitter, les groupes Facebook de ta niche. Cherche des gens qui se plaignent du même problème. S'ils existent = idée validée.", tip: "Si personne se plaint du problème, c'est peut-être pas un vrai problème.", action: "Tape ton problème dans Google/Reddit. Des posts = feu vert." },
      { title: "Formule en une phrase", content: "Tu dois pouvoir dire : '[Mon app] aide [qui] à [quoi] grâce à [comment].' Si ça tient pas en une phrase, simplifie.", tip: "Pas de phrase claire = pas de produit clair.", action: "Écris ta phrase maintenant. Une ligne max." },
    ],
    tease: "Il y a des techniques avancées pour analyser un marché, identifier les concurrents, et trouver l'angle qui te différencie. Mais une bonne idée + une phrase claire = suffisant pour démarrer.",
  },
  {
    id: 2, title: "Génère le prompt parfait", icon: "🧠", duration: "20 min",
    intro: "L'IA est aussi bonne que le prompt que tu lui donnes. Prompt vague = résultat vague. Prompt structuré = app quasi-prête.",
    steps: [
      { title: "Utilise ChatGPT pour écrire ton prompt", content: "Oui, tu utilises une IA pour écrire le prompt d'une autre IA. C'est la méthode la plus efficace.", tip: "L'IA est meilleure que toi pour structurer un prompt technique.", action: "Copie et envoie ce message à ChatGPT :", template: "Je veux créer une application web [DÉCRIS TON APP EN 2-3 PHRASES].\n\nGénère-moi le prompt le plus détaillé possible que je pourrai donner à une IA de génération de code (v0.dev). Le prompt doit inclure :\n- Description complète de l'application\n- Toutes les pages/écrans nécessaires\n- Les fonctionnalités clés de chaque page\n- Le style de design souhaité\n- Le type d'utilisateur cible\n\nSois le plus précis possible." },
      { title: "Affine le résultat", content: "Relis le prompt que ChatGPT te sort. Si un truc manque, dis-lui de corriger. Itère 2-3 fois.", tip: "N'accepte jamais la première version. L'itération c'est la clé.", action: "Dis : 'Ajoute ceci', 'Change cela', 'Je veux aussi [X]'." },
      { title: "Sauvegarde ton prompt", content: "Copie le prompt final. C'est ta 'recette' pour l'étape suivante.", tip: "Garde TOUJOURS tes prompts. C'est ton capital.", action: "Crée un dossier 'Mes prompts SaaS'." },
    ],
    tease: "Il y a des techniques avancées de prompt engineering qui donnent des résultats 10x meilleurs : le chaining, les design systems, les contraintes techniques... C'est un autre niveau.",
  },
  {
    id: 3, title: "Génère ton app avec v0", icon: "⚡", duration: "15 min",
    intro: "v0.dev transforme un texte en application. Tu colles ton prompt, tu attends, et t'as une app avec un design propre.",
    steps: [
      { title: "Crée ton compte v0.dev", content: "Va sur v0.dev (par Vercel). Crée un compte gratuit. Tu as un nombre limité de générations gratuites.", tip: "La version gratuite suffit pour démarrer.", action: "Va sur v0.dev et crée ton compte maintenant." },
      { title: "Colle et génère", content: "Colle le prompt de ChatGPT dans v0. L'IA crée ton app : pages, design, composants.", tip: "Si le résultat te plaît pas à 100%, itère dans le chat intégré de v0.", action: "Colle ton prompt → Génère → Ajuste si besoin." },
      { title: "Exporte le code", content: "Quand le résultat te convient, exporte. C'est du code Next.js/React — t'as PAS BESOIN de le comprendre.", tip: "Exporte même si c'est pas parfait. L'IA améliorera dans l'éditeur.", action: "Clique 'Download code' ou utilise la commande npx." },
    ],
    tease: "v0 génère du Next.js avec shadcn/ui. Si tu veux personnaliser en profondeur et comprendre cette stack, c'est un niveau au-dessus.",
  },
  {
    id: 4, title: "Configure ton éditeur + IA", icon: "💻", duration: "20 min",
    intro: "Tu as le code. Il faut un endroit pour bosser dessus. Deux options : Cursor (le plus simple) ou VS Code + extension IA.",
    steps: [
      { title: "Option A : Cursor (recommandé)", content: "Va sur cursor.com. Télécharge. C'est un éditeur avec Claude intégré. Tu lui parles en français, il code pour toi.", tip: "Version gratuite = suffisante pour un premier projet.", action: "Télécharge Cursor → installe → ouvre." },
      { title: "Option B : VS Code + IA", content: "Si tu préfères VS Code (gratuit, Microsoft), ajoute une extension IA : Claude Dev, Cline, ou GitHub Copilot.", tip: "VS Code = plus customisable mais plus de config. Cursor = prêt à l'emploi.", action: "VS Code → Extensions → cherche ton IA → installe." },
      { title: "Ouvre ton projet", content: "Ouvre le dossier exporté de v0 dans ton éditeur. Plein de fichiers = PAS DE PANIQUE. L'IA gère.", tip: "Même les seniors ont eu peur la première fois. C'est normal.", action: "File → Open Folder → dossier de ton projet v0." },
    ],
    tease: "Il y a beaucoup de paramètres avancés dans Cursor : règles de projet, fichiers de contexte, choix de modèle... Des optimisations qui font une vraie différence sur les projets complexes.",
  },
  {
    id: 5, title: "L'IA prend le contrôle", icon: "🤖", duration: "25 min",
    intro: "L'étape la plus importante. Tu fais COMPRENDRE ton app à l'IA, puis tu la lances. C'est la méthode THE DJELO.",
    steps: [
      { title: "L'IA comprend ton app", content: "Dans le chat de Cursor, envoie ce message. L'IA va analyser TOUT ton projet.", tip: "CRUCIAL. Si tu sautes cette étape, l'IA fera n'importe quoi.", action: "Copie et envoie :", template: "Prends connaissance de l'intégralité de cette application. Analyse chaque fichier, chaque composant, chaque page.\n\nDonne-moi un résumé détaillé de :\n1. Ce que fait l'application\n2. Les pages/écrans qui existent\n3. Les fonctionnalités actuelles\n4. Ce qui manque ou pourrait être amélioré\n\nSois exhaustif." },
      { title: "Vérifie sa compréhension", content: "L'IA sort un résumé. LIS-LE. Vérifie que ça correspond à ce que tu veux. Si elle a mal compris, corrige.", tip: "C'est comme briefer un employé. Mauvais brief = mauvais travail.", action: "Lis. Si faux → corrige. Si bon → étape suivante." },
      { title: "Lance en local", content: "Dis : 'Lance l'application en local.' L'IA tape les commandes pour toi.", tip: "En local = l'app tourne sur TON ordi. Ton terrain d'expérimentation.", action: "Envoie :", template: "Installe toutes les dépendances et lance l'application en local.\nSi erreur, explique-moi et propose une solution." },
      { title: "La boucle anti-bug", content: "Tu auras des bugs. C'est NORMAL. La méthode :\n\n1. Copie le message d'erreur (les logs)\n2. Donne-le à l'IA : 'j'ai cette erreur, corrige'\n3. L'IA corrige\n4. Tu retestes\n5. Nouveau bug ? Retour à 1.", tip: "Ne panique JAMAIS devant une erreur. Copie → IA → fix.", action: "Le prompt magique :", template: "J'ai cette erreur :\n\n[COLLE LE MESSAGE D'ERREUR ICI]\n\nCorrige ce problème." },
    ],
    tease: "Cette boucle marche pour 80% des cas simples. Sur les projets complexes, il y a des bugs que l'IA résout pas en un prompt. Savoir diagnostiquer et guider l'IA, c'est une compétence qui vient avec l'expérience… ou le bon accompagnement.",
  },
  {
    id: 6, title: "Les vraies fonctionnalités", icon: "🔧", duration: "30 min",
    intro: "Le squelette est là. Maintenant : auth, base de données, API, paiement. Tout en prompts.",
    steps: [
      { title: "Authentification", content: "Les gens peuvent créer un compte et se connecter.", tip: "Clerk ou Supabase Auth = les plus simples.", action: "Prompt :", template: "Ajoute un système d'authentification avec [Clerk / Supabase Auth].\nInscription, connexion, déconnexion.\nProtège les pages qui nécessitent d'être connecté." },
      { title: "Base de données", content: "Pour sauvegarder les données : comptes, contenu, historique.", tip: "Neon ou Supabase. Les deux ont un plan gratuit.", action: "Prompt :", template: "Connecte l'app à une base de données [Neon / Supabase].\nCrée les tables pour stocker [ce que tu veux sauvegarder].\nChaque utilisateur ne voit que SES données." },
      { title: "Intégrations API", content: "IA, emails, paiement = API. Dis à l'IA ce que tu veux, elle intègre.", tip: "Tu n'as PAS BESOIN de comprendre ce qu'est une API.", action: "Exemples :", template: "IA : Intègre l'API [OpenAI / Claude] pour [analyser / générer].\n\nEMAILS : Intègre Resend pour envoyer des emails quand [événement].\n\nPAIEMENT : Intègre Stripe pour [abonnement / achat unique]." },
      { title: "Teste au fur et à mesure", content: "RÈGLE D'OR : après chaque ajout, TESTE. Clique partout. Essaie de casser l'app.", tip: "Une feature → un test. Jamais 10 features sans tester.", action: "Checklist : desktop ✓ mobile ✓ clics rapides ✓ données bizarres ✓" },
    ],
    tease: "Chaque intégration a des subtilités. Les erreurs de config sont fréquentes et l'IA tourne parfois en rond. Savoir QUOI lui dire quand elle bloque, connaître les pièges classiques... ça fait gagner des jours.",
  },
  {
    id: 7, title: "Design & Finitions", icon: "🎨", duration: "20 min",
    intro: "Une app moche = une app que personne utilise. Le design c'est pas optionnel. L'IA le fait bien.",
    steps: [
      { title: "Redesign par l'IA", content: "Sois précis : couleurs, ambiance, style. Donne des références.", tip: "'Je veux un style comme [app connue]' marche très bien.", action: "Prompt :", template: "Redesigne l'interface. Je veux :\n- Style : [moderne / minimaliste / dark mode]\n- Couleurs : [tes couleurs ou 'propose une palette pour [niche]']\n- Ambiance : [pro / fun / premium]\n- Référence : style similaire à [app que tu aimes]\n\nAméliore typographie, espacements, responsive." },
      { title: "Finitions pro", content: "Page 'À propos', mentions légales, favicon, animations, messages d'erreur propres.", tip: "Les détails comptent PLUS que les features.", action: "Demande à l'IA d'ajouter chaque élément un par un." },
      { title: "Teste sur mobile", content: "80% de ton audience TikTok = mobile. L'app DOIT être parfaite sur téléphone.", tip: "Outils dev → mode responsive → teste iPhone + Android.", action: "Si cassé : 'L'affichage est cassé sur mobile : [décris]. Corrige le responsive.'" },
    ],
    tease: "Le design, c'est un métier. Les bons prompts de design, les principes UX qui convertissent, les astuces de rétention... Cette formation te donne les bases. Pour que ça CONVERTISSE, c'est un autre niveau.",
  },
  {
    id: 8, title: "Déploie en ligne", icon: "🚀", duration: "20 min",
    intro: "Ton app marche en local. On la met en ligne pour le monde entier. Vercel + nom de domaine.",
    steps: [
      { title: "Déploie sur Vercel (gratuit)", content: "Vercel héberge ton app gratuitement. L'IA t'aide à déployer.", tip: "Il te faut un compte GitHub (gratuit) + compte Vercel (gratuit).", action: "Prompt :", template: "Aide-moi à déployer sur Vercel.\nGuide-moi étape par étape.\nCommence par push le code sur GitHub, puis connecte à Vercel." },
      { title: "Achète ton domaine", content: "tonapp.com = 10-15€ par AN. C'est rien.", tip: "Court, mémorable, qui décrit ton app.", action: "Namecheap, OVH, ou Google Domains → cherche → achète." },
      { title: "Connecte domaine + Vercel", content: "Dernière étape technique : connecter ton domaine à Vercel.", tip: "C'est la partie la plus technique. L'IA t'explique mais ça demande de la config DNS.", action: "Prompt :", template: "J'ai acheté [tondomaine.com] sur [registrar].\nExplique-moi comment le connecter à Vercel étape par étape." },
      { title: "C'est en ligne 🎉", content: "Tape ton domaine. Si ton app apparaît = t'as un SaaS en ligne. Félicitations.", tip: "Teste sur 5 téléphones différents + envoie à des proches.", action: "Partage sur tes réseaux. Tu l'as fait." },
    ],
    tease: "Ton app est en ligne mais 'nue'. Pas de monitoring, pas d'analytics, pas de SEO, pas de backup. Ce qui transforme un projet perso en vrai business, c'est tout un monde.",
  },
  {
    id: 9, title: "Monétise & Lance", icon: "💰", duration: "15 min",
    intro: "App en ligne. Maintenant : des utilisateurs ET de l'argent.",
    steps: [
      { title: "Choisis ton modèle", content: "3 options :\n• Abonnement mensuel (SaaS classique)\n• Freemium (gratuit + payant avancé)\n• Affiliation (commission sur les produits recommandés)", tip: "Premier SaaS = freemium ou affiliation. Plus simple.", action: "Choisis UN modèle. Pas deux. UN." },
      { title: "Intègre le paiement", content: "Abonnement/freemium = Stripe. Affiliation = inscris-toi aux programmes des marques de ta niche.", tip: "Stripe = le standard mondial.", action: "Crée un compte Stripe → prompt Module 6 pour l'intégrer." },
      { title: "Premiers utilisateurs", content: "Ton audience TikTok/Instagram/YouTube = tes premiers testeurs. Poste le lien. Réponds à CHAQUE message.", tip: "Les 100 premiers = les plus durs. Après, bouche-à-oreille.", action: "'Mon app est en ligne, testez gratuitement, lien dans la bio.' C'est tout." },
    ],
    tease: "100 utilisateurs c'est une chose. 1000 puis 10 000, c'est un autre game. SEO, marketing de contenu, tunnels de vente, optimisation des conversions… Chaque étape de croissance a ses propres défis.",
  },
];

const stats = [
  { value: "9", label: "Modules", sub: "De l'idée au lancement" },
  { value: "100%", label: "Gratuit", sub: "Aucun paiement requis" },
  { value: "0", label: "Code requis", sub: "L'IA fait tout" },
  { value: "7j", label: "Pour lancer", sub: "Ton premier SaaS" },
];

const faqItems = [
  { q: "J'ai aucune connaissance en code, c'est possible ?", a: "Oui. Tu ne codes pas. Tu PARLES à une IA en français. Elle code pour toi. Tu dois juste savoir décrire ce que tu veux." },
  { q: "Ça coûte combien au total ?", a: "Quasi rien. Cursor : gratuit. v0 : gratuit (limité). Vercel : gratuit. Supabase/Neon : gratuit. Seul coût : nom de domaine (10-15€/an)." },
  { q: "Combien de temps ça prend ?", a: "1 à 3 semaines en 2-3h/jour pour un SaaS simple. C'est pas magique, c'est du travail. Mais 10x plus rapide qu'avant l'IA." },
  { q: "Et si l'IA comprend pas ?", a: "Reformule. Sois plus précis. Donne des exemples. C'est une compétence qui se développe." },
  { q: "C'est légal ?", a: "Oui. Le code généré t'appartient. Pense aux mentions légales et à la RGPD si tu récoltes des données." },
];

export default function FormationMaestro() {
  const [activeModule, setActiveModule] = useState(null);
  const [expandedStep, setExpandedStep] = useState(null);
  const [view, setView] = useState("home");
  const [expandedFaq, setExpandedFaq] = useState(null);

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

            <button onClick={() => { setView("modules"); setActiveModule(0); }} style={{
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
              <div key={i} onClick={() => { setView("modules"); setActiveModule(i); setExpandedStep(null); }} style={{
                display: "flex", gap: "14px", alignItems: "center",
                background: "#151240", borderRadius: "14px", padding: "14px 16px",
                marginBottom: "8px", cursor: "pointer", border: "1px solid #1f1a60",
                transition: "all 0.2s",
              }}>
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

          {/* CTA bottom */}
          <div style={{ padding: "0 16px 40px", textAlign: "center" }}>
            <button onClick={() => { setView("modules"); setActiveModule(0); }} style={{
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
              <span style={{ fontSize: "11px", color: "#4444666" }}>Module {mod.id}/9</span>
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
                <button key={i} onClick={() => { setActiveModule(i); setExpandedStep(null); }} style={{
                  width: activeModule === i ? "28px" : "10px", height: "10px",
                  borderRadius: "5px", border: "none",
                  background: activeModule === i ? "linear-gradient(90deg, #FFD60A, #FFB800)" : "#1f1a60",
                  cursor: "pointer", transition: "all 0.3s",
                }} />
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
                  <div onClick={() => setExpandedStep(expandedStep === i ? null : i)} style={{
                    padding: "16px", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
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
                  </div>

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
            {["Trouver et valider une idée de SaaS", "Générer un prompt parfait avec ChatGPT", "Créer une app complète avec v0.dev", "Utiliser Cursor/VS Code avec l'IA", "Debugger avec la méthode bug→logs→fix", "Intégrer auth, BDD, API, paiements", "Designer une interface pro", "Déployer sur Vercel avec ton domaine", "Monétiser et trouver tes premiers clients"].map((item, i) => (
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
              {["TikTok", "YouTube", "Instagram"].map((p) => (
                <span key={p} style={{
                  fontSize: "11px", padding: "6px 14px", borderRadius: "10px",
                  background: "#1f1a60", color: "#8888bb", fontWeight: 600,
                }}>@thedjelo</span>
              ))}
            </div>
          </div>

          <button onClick={() => { setView("home"); setActiveModule(null); }} style={{
            marginTop: "20px", padding: "14px 32px", borderRadius: "14px", border: "none", width: "100%",
            background: "#151240", color: "#8888aa", fontSize: "13px", fontWeight: 700, cursor: "pointer",
            border: "1px solid #1f1a60",
          }}>← Retour à l'accueil</button>
        </div>
      )}
    </div>
  );
}