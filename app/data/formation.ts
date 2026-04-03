export interface Step {
  title: string;
  content: string;
  tip: string;
  action: string;
  template?: string;
}

export interface Module {
  id: number;
  title: string;
  icon: string;
  duration: string;
  intro: string;
  steps: Step[];
  tease: string;
}

export interface Stat {
  value: string;
  label: string;
  sub: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const modules: Module[] = [
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

export const stats: Stat[] = [
  { value: "9", label: "Modules", sub: "De l'idée au lancement" },
  { value: "100%", label: "Gratuit", sub: "Aucun paiement requis" },
  { value: "0", label: "Code requis", sub: "L'IA fait tout" },
  { value: "7j", label: "Pour lancer", sub: "Ton premier SaaS" },
];

export const faqItems: FaqItem[] = [
  { question: "J'ai aucune connaissance en code, c'est possible ?", answer: "Oui. Tu ne codes pas. Tu PARLES à une IA en français. Elle code pour toi. Tu dois juste savoir décrire ce que tu veux." },
  { question: "Ça coûte combien au total ?", answer: "Quasi rien. Cursor : gratuit. v0 : gratuit (limité). Vercel : gratuit. Supabase/Neon : gratuit. Seul coût : nom de domaine (10-15€/an)." },
  { question: "Combien de temps ça prend ?", answer: "1 à 3 semaines en 2-3h/jour pour un SaaS simple. C'est pas magique, c'est du travail. Mais 10x plus rapide qu'avant l'IA." },
  { question: "Et si l'IA comprend pas ?", answer: "Reformule. Sois plus précis. Donne des exemples. C'est une compétence qui se développe." },
  { question: "C'est légal ?", answer: "Oui. Le code généré t'appartient. Pense aux mentions légales et à la RGPD si tu récoltes des données." },
];
