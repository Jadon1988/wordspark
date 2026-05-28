function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// WordSpark — standalone web version
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;

// ── Backend configuration ─────────────────────────────────────────────────────
// Replace these two values with your own after deploying the Supabase function
var BACKEND_URL = "https://YOUR_PROJECT_REF.supabase.co/functions/v1/wordspark-ai";
var BACKEND_KEY = "YOUR_WORDSPARK_SECRET"; // the secret you set in Supabase

// Helper — calls the WordSpark backend
function callAI(_x) {
  return _callAI.apply(this, arguments);
} // ── GAME DATA ──────────────────────────────────────────────────────────────────
function _callAI() {
  _callAI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(action) {
    var params,
      res,
      _args19 = arguments;
    return _regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          params = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : {};
          _context19.n = 1;
          return fetch(BACKEND_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-wordspark-key": BACKEND_KEY
            },
            body: JSON.stringify(_objectSpread({
              action: action
            }, params))
          });
        case 1:
          res = _context19.v;
          if (res.ok) {
            _context19.n = 2;
            break;
          }
          throw new Error("Backend error " + res.status);
        case 2:
          return _context19.a(2, res.json());
      }
    }, _callee19);
  }));
  return _callAI.apply(this, arguments);
}
var WORDS_DATA = {
  Beginner: [{
    word: "JUMP",
    hint: "Push yourself into the air",
    definition: "To push yourself off the ground into the air",
    example: "The children love to jump in puddles after the rain."
  }, {
    word: "HAPPY",
    hint: "Feeling good and cheerful",
    definition: "Feeling pleasure or contentment",
    example: "She was happy to see her old friends again after so long."
  }, {
    word: "BOOK",
    hint: "You read this for stories",
    definition: "A written or printed work on bound pages",
    example: "He reads a book every week to improve his English."
  }, {
    word: "FAST",
    hint: "Moving at great speed",
    definition: "Moving or able to move at great speed",
    example: "She is a fast runner and always wins the race easily."
  }, {
    word: "COLD",
    hint: "Low in temperature",
    definition: "Having a low temperature; not warm",
    example: "It is very cold today so please wear a warm coat."
  }, {
    word: "PLAY",
    hint: "Have fun and enjoy games",
    definition: "To engage in activity for enjoyment",
    example: "The kids love to play in the park after school."
  }, {
    word: "SLEEP",
    hint: "Rest with your eyes closed",
    definition: "A natural state of rest for the body and mind",
    example: "Adults need around eight hours of sleep each night."
  }, {
    word: "SMILE",
    hint: "A happy expression on your face",
    definition: "To form a happy facial expression",
    example: "She always smiles when she sees her best friend arrive."
  }, {
    word: "CLEAN",
    hint: "Free from dirt or mess",
    definition: "Free from dirt, marks, or unwanted matter",
    example: "Please keep your desk clean and tidy at all times."
  }, {
    word: "BRAVE",
    hint: "Not afraid of danger",
    definition: "Ready to face danger or difficulty without showing fear",
    example: "It was brave of her to speak in front of the crowd."
  }, {
    word: "DREAM",
    hint: "Images your mind creates while asleep",
    definition: "A series of thoughts or images experienced during sleep",
    example: "He had a dream about flying over the ocean last night."
  }, {
    word: "DANCE",
    hint: "Move your body to music",
    definition: "To move rhythmically to music",
    example: "They love to dance at parties and family celebrations."
  }, {
    word: "LEARN",
    hint: "Gain new knowledge or a skill",
    definition: "To gain knowledge or skill through study or experience",
    example: "She works hard to learn five new words every single day."
  }, {
    word: "WRITE",
    hint: "Make words with a pen or keyboard",
    definition: "To mark letters, words, or symbols on a surface",
    example: "He writes in his diary every night before going to bed."
  }, {
    word: "MUSIC",
    hint: "Organised, pleasant sounds",
    definition: "Sounds combined in a way that is pleasant to listen to",
    example: "She listens to music every morning before leaving for school."
  }, {
    word: "MONEY",
    hint: "What you use to buy things",
    definition: "A medium of exchange used to buy goods and services",
    example: "You need money to buy food at the local market."
  }, {
    word: "PLANT",
    hint: "A living thing that grows in soil",
    definition: "A living organism that grows in soil and needs sunlight",
    example: "She waters her plant every morning to keep it alive and healthy."
  }, {
    word: "SPORT",
    hint: "A physical game with rules",
    definition: "A physical activity done for exercise or competition",
    example: "Football is the most popular sport in the whole world."
  }, {
    word: "FUNNY",
    hint: "Making you laugh",
    definition: "Causing amusement or laughter",
    example: "He told a very funny joke that made everyone in the room laugh."
  }, {
    word: "QUIET",
    hint: "Making very little noise",
    definition: "Making little or no noise; calm and silent",
    example: "Please be quiet in the library so that others can read."
  }, {
    word: "ANGRY",
    hint: "Feeling strong displeasure",
    definition: "Having a strong feeling of annoyance or displeasure",
    example: "She was angry when someone took her seat on the crowded bus."
  }, {
    word: "TIRED",
    hint: "Needing rest or sleep",
    definition: "Feeling a need for rest or sleep; fatigued",
    example: "He was so tired after work that he fell asleep immediately."
  }, {
    word: "LUCKY",
    hint: "Having good fortune",
    definition: "Having, bringing, or resulting from good luck",
    example: "She felt lucky to find a twenty-dollar note on the pavement."
  }, {
    word: "EARLY",
    hint: "Before the usual time",
    definition: "Happening or done before the usual or expected time",
    example: "He always arrives early to make sure he gets a good seat."
  }],
  Intermediate: [{
    word: "COURAGE",
    hint: "Being brave in difficult situations",
    definition: "The ability to face fear or danger without giving up",
    example: "It takes real courage to speak up when everyone disagrees with you."
  }, {
    word: "PATIENT",
    hint: "Able to wait calmly",
    definition: "Able to accept delay or difficulty without getting upset",
    example: "A good teacher must be patient with all their students every day."
  }, {
    word: "EXPLORE",
    hint: "Travel and discover new places",
    definition: "To travel through an unfamiliar area to learn about it",
    example: "She loves to explore new cities whenever she travels abroad."
  }, {
    word: "ACHIEVE",
    hint: "Successfully complete a goal",
    definition: "To successfully reach a desired objective through effort",
    example: "Hard work and dedication help you achieve your goals in life."
  }, {
    word: "CURIOUS",
    hint: "Eager to learn and discover",
    definition: "Having a strong desire to know or learn something new",
    example: "The curious student always asked the most interesting questions in class."
  }, {
    word: "PROMISE",
    hint: "A commitment to do something",
    definition: "A declaration that you will definitely do something",
    example: "She kept her promise to call her mother every Sunday without fail."
  }, {
    word: "HONEST",
    hint: "Telling the truth always",
    definition: "Free from deceit; truthful and sincere in character",
    example: "It is important to be honest even when the truth is hard to say."
  }, {
    word: "CAREFUL",
    hint: "Giving close attention to avoid mistakes",
    definition: "Taking special care to avoid mistakes or risks",
    example: "Be careful when crossing a busy street without a traffic light."
  }, {
    word: "DECIDE",
    hint: "Make a choice between options",
    definition: "To make a choice after considering different options",
    example: "She had to decide between two very different career paths that year."
  }, {
    word: "IMPROVE",
    hint: "Make something better than before",
    definition: "To make or become better in quality or condition",
    example: "He practises every day to improve his English pronunciation noticeably."
  }, {
    word: "POPULAR",
    hint: "Liked or admired by many people",
    definition: "Liked or admired by a large number of people",
    example: "That new café became very popular after the review went viral online."
  }, {
    word: "HEALTHY",
    hint: "In good physical condition",
    definition: "Having good health; in good physical or mental condition",
    example: "Eating fresh fruit and vegetables every day helps you stay healthy."
  }, {
    word: "SERIOUS",
    hint: "Important and not joking",
    definition: "Demanding careful thought; not joking or casual in nature",
    example: "This is a serious problem that needs an immediate and proper solution."
  }, {
    word: "NERVOUS",
    hint: "Feeling worried or anxious",
    definition: "Feeling anxious or worried about something uncertain or new",
    example: "She felt very nervous before going on stage for the very first time."
  }, {
    word: "COMFORT",
    hint: "A pleasant feeling of ease",
    definition: "A state of physical or emotional ease and well-being",
    example: "A warm cup of tea provides great comfort on a cold winter evening."
  }, {
    word: "FREEDOM",
    hint: "The right to act as you choose",
    definition: "The power or right to act, speak, or think as one chooses",
    example: "Freedom of speech is a fundamental right in many democratic countries."
  }, {
    word: "RESPECT",
    hint: "Admire and treat someone well",
    definition: "To feel or show admiration for someone's qualities or rights",
    example: "We should always respect the opinions and beliefs of older generations."
  }, {
    word: "JOURNEY",
    hint: "Travelling a long distance",
    definition: "A long trip from one place to another",
    example: "The journey from London to Edinburgh takes about four hours by train."
  }, {
    word: "BELIEVE",
    hint: "Think something is true",
    definition: "To accept that something is true without direct proof",
    example: "She believes that hard work always leads to real success in the end."
  }, {
    word: "SUCCESS",
    hint: "Achieving what you were trying to do",
    definition: "The achievement of an aim, goal, or desired outcome",
    example: "His success was the result of years of dedication and personal sacrifice."
  }, {
    word: "OPINION",
    hint: "Your personal view on something",
    definition: "A personal view or judgement not necessarily based on fact",
    example: "In my opinion, learning a language is one of the most valuable skills."
  }, {
    word: "SUPPORT",
    hint: "Help and encourage someone",
    definition: "To give help, encouragement, or assistance to someone",
    example: "True friends always support each other through the most difficult times."
  }],
  Advanced: [{
    word: "ELOQUENT",
    hint: "Expressing ideas clearly and beautifully",
    definition: "Fluent and persuasive in speaking or writing",
    example: "Her eloquent speech moved the entire audience deeply to tears."
  }, {
    word: "AMBIGUOUS",
    hint: "Having more than one possible meaning",
    definition: "Open to more than one interpretation; not clear",
    example: "The ambiguous wording in the contract led directly to a legal dispute."
  }, {
    word: "TENACIOUS",
    hint: "Holding firmly to a goal despite obstacles",
    definition: "Tending to keep a firm hold; very persistent and determined",
    example: "Her tenacious spirit allowed her to overcome every obstacle she faced."
  }, {
    word: "RESILIENT",
    hint: "Recovering quickly from difficulty",
    definition: "Able to recover quickly from difficult or adverse conditions",
    example: "Children are often more resilient than adults give them credit for."
  }, {
    word: "PRAGMATIC",
    hint: "Dealing with things in a practical way",
    definition: "Dealing with problems in a practical and sensible way",
    example: "A pragmatic approach to the company's budget saved thousands of pounds."
  }, {
    word: "PROFOUND",
    hint: "Very deep in meaning or effect",
    definition: "Very great or intense; having deep intellectual or moral impact",
    example: "The documentary had a profound effect on how she viewed global poverty."
  }, {
    word: "ARTICULATE",
    hint: "Expressing ideas clearly and fluently",
    definition: "Having or showing the ability to speak fluently and coherently",
    example: "An articulate speaker can hold an audience's attention with great ease."
  }, {
    word: "DILIGENT",
    hint: "Hard-working and careful",
    definition: "Having or showing care and consistent effort in work",
    example: "The diligent student carefully reviewed her notes every single evening."
  }, {
    word: "SKEPTICAL",
    hint: "Doubtful and questioning",
    definition: "Not easily convinced; having doubts or serious reservations",
    example: "He was skeptical about the new results until he saw them for himself."
  }, {
    word: "COHERENT",
    hint: "Logical and easy to understand",
    definition: "Logical and consistent; easy to understand as a whole",
    example: "Please write a coherent argument before presenting it to the board."
  }, {
    word: "OBSOLETE",
    hint: "No longer used or needed",
    definition: "No longer produced, used, or relevant; out of date",
    example: "Fax machines have become largely obsolete in most modern offices today."
  }, {
    word: "CANDID",
    hint: "Truthful and straightforward",
    definition: "Truthful and straightforward; frank and open in expression",
    example: "She gave a candid assessment of all the risks involved in the plan."
  }, {
    word: "ADVOCATE",
    hint: "Publicly support a cause or idea",
    definition: "To publicly recommend or support a particular cause or policy",
    example: "She has long advocated for better mental health support in schools."
  }, {
    word: "SCRUTINY",
    hint: "Close and critical examination",
    definition: "Critical observation or examination; intense attention",
    example: "The company's accounts came under intense scrutiny after the scandal."
  }, {
    word: "CONCISE",
    hint: "Using few words to express something clearly",
    definition: "Giving a lot of information clearly and briefly",
    example: "A concise email is always more effective than a very long one."
  }, {
    word: "ARBITRARY",
    hint: "Based on random choice rather than reason",
    definition: "Based on random choice rather than any clear reason or logic",
    example: "The decision seemed completely arbitrary with no clear justification given."
  }, {
    word: "AMBIVALENT",
    hint: "Having mixed feelings about something",
    definition: "Having mixed feelings or contradictory ideas about something",
    example: "She felt ambivalent about moving abroad — excited but also very anxious."
  }, {
    word: "LUCID",
    hint: "Clear and easy to understand",
    definition: "Expressed clearly; easy to understand; not confused",
    example: "His lucid explanation of the complex topic impressed the entire audience."
  }],
  Proficiency: [{
    word: "LACONIC",
    hint: "Saying much with very few words",
    definition: "Using very few words; brief and concise in expression",
    example: "His laconic reply — just 'no' — ended the entire discussion immediately."
  }, {
    word: "SANGUINE",
    hint: "Optimistic especially in bad situations",
    definition: "Optimistic or positive, especially in a difficult situation",
    example: "She remained sanguine about the company's future despite the continuing losses."
  }, {
    word: "EPHEMERAL",
    hint: "Lasting for only a very short time",
    definition: "Lasting for a very short time; transitory by nature",
    example: "Social media trends are ephemeral — gone almost as quickly as they appear."
  }, {
    word: "INSIDIOUS",
    hint: "Gradually and harmfully influential",
    definition: "Proceeding in a gradual, subtle way but with very harmful effects",
    example: "The insidious effects of chronic stress can go completely unnoticed for years."
  }, {
    word: "PEDANTIC",
    hint: "Too focused on minor rules or details",
    definition: "Overly concerned with minor details, rules, or formal correctness",
    example: "His pedantic corrections to every small error frustrated his entire team."
  }, {
    word: "TRUCULENT",
    hint: "Eager to argue or fight",
    definition: "Eager or quick to argue or fight; aggressively defiant",
    example: "The truculent student challenged every single point that the teacher made."
  }, {
    word: "OBFUSCATE",
    hint: "Make something deliberately unclear",
    definition: "To make something unclear, confusing, or very hard to understand",
    example: "The politician obfuscated rather than giving a direct and honest answer."
  }, {
    word: "EQUIVOCAL",
    hint: "Ambiguous and open to more than one meaning",
    definition: "Open to more than one interpretation; deliberately vague",
    example: "Her equivocal response to the proposal left absolutely everyone uncertain."
  }, {
    word: "OBSEQUIOUS",
    hint: "Excessively eager to serve or please others",
    definition: "Excessively eager to serve or please; fawning and subservient",
    example: "His obsequious manner in the job interview impressed absolutely no one."
  }, {
    word: "SYCOPHANT",
    hint: "Someone who flatters to gain personal advantage",
    definition: "A person who acts excessively flatteringly for personal gain",
    example: "The sycophant agreed with everything the boss said, whether right or wrong."
  }, {
    word: "CAPITULATE",
    hint: "Give up resistance and surrender",
    definition: "To cease to resist an opponent or an unwanted demand; give up",
    example: "After hours of tense negotiation, they finally capitulated to the demands."
  }, {
    word: "LOQUACIOUS",
    hint: "Tending to talk a great deal",
    definition: "Tending to talk a great deal; excessively and often tediously talkative",
    example: "The loquacious professor turned a ten-minute topic into a two-hour lecture."
  }, {
    word: "MAGNANIMOUS",
    hint: "Generous and forgiving, especially to rivals",
    definition: "Generous or forgiving, especially towards a rival or less powerful person",
    example: "The champion was magnanimous in victory, warmly praising her opponent."
  }, {
    word: "RECALCITRANT",
    hint: "Stubbornly refusing to obey authority",
    definition: "Having an obstinately uncooperative attitude toward authority",
    example: "The recalcitrant teenager refused to follow any of the new household rules."
  }, {
    word: "SUPERCILIOUS",
    hint: "Acting as if you are better than everyone else",
    definition: "Behaving or looking as though one thinks oneself superior to others",
    example: "Her supercilious attitude made her very unpopular with her new colleagues."
  }]
};
var FLASHCARDS_DATA = {
  Beginner: [{
    word: "Big",
    options: ["Very small in size", "Very large in size", "Moving very fast", "Very old and worn"],
    answer: 1
  }, {
    word: "Sad",
    options: ["Feeling very happy", "Full of energy", "Feeling unhappy or upset", "Very angry indeed"],
    answer: 2
  }, {
    word: "Fast",
    options: ["Moving very slowly", "Very heavy weight", "Moving at great speed", "Very quiet always"],
    answer: 2
  }, {
    word: "Cold",
    options: ["Very warm temperature", "Low in temperature", "A very bright color", "A very loud noise"],
    answer: 1
  }, {
    word: "Tired",
    options: ["Full of energy now", "Feeling very hungry", "Needing rest or sleep", "Feeling very strong"],
    answer: 2
  }, {
    word: "Friendly",
    options: ["Mean to others", "Kind and pleasant to know", "Feeling very sick", "Extremely bored always"],
    answer: 1
  }, {
    word: "Dirty",
    options: ["Perfectly clean", "Not clean; covered in dirt", "Extremely bright", "Feeling very cold"],
    answer: 1
  }, {
    word: "Loud",
    options: ["Very quiet and calm", "Making very little sound", "Making a lot of noise", "Moving very slowly"],
    answer: 2
  }, {
    word: "Short",
    options: ["Very tall in height", "Small in length or height", "Moving very quickly", "Very heavy weight"],
    answer: 1
  }, {
    word: "Hungry",
    options: ["Feeling very full", "Needing or wanting food", "Feeling very tired", "Extremely happy today"],
    answer: 1
  }, {
    word: "Soft",
    options: ["Very hard and firm", "Easy to shape; not hard", "Making very loud noise", "Moving at speed"],
    answer: 1
  }, {
    word: "Strong",
    options: ["Very weak and fragile", "Having great power or force", "Moving very slowly", "Very light weight"],
    answer: 1
  }, {
    word: "Beautiful",
    options: ["Very ugly to look at", "Giving great pleasure to see", "Feeling very tired", "Very cold outside"],
    answer: 1
  }, {
    word: "Clever",
    options: ["Not very intelligent", "Quick to understand things", "Very tall and big", "Feeling very hungry"],
    answer: 1
  }, {
    word: "Polite",
    options: ["Very rude to others", "Having good manners", "Very quiet and calm", "Feeling very angry"],
    answer: 1
  }],
  Intermediate: [{
    word: "Optimistic",
    options: ["Feeling very sad", "Afraid of the future", "Hopeful about the future", "Very angry always"],
    answer: 2
  }, {
    word: "Resilient",
    options: ["Easily broken or hurt", "Very expensive to buy", "Recovering quickly from difficulty", "Making loud noise"],
    answer: 2
  }, {
    word: "Empathy",
    options: ["Disliking other people", "Understanding others feelings", "Being extremely strong", "Talking too much"],
    answer: 1
  }, {
    word: "Ambitious",
    options: ["Lazy and unmotivated", "Happy with very little", "Having a strong desire to succeed", "Very shy"],
    answer: 2
  }, {
    word: "Generous",
    options: ["Keeping things for yourself", "Willing to give freely", "Being very careful", "Feeling very tired"],
    answer: 1
  }, {
    word: "Diligent",
    options: ["Lazy and careless", "Hard-working and careful", "Very funny and playful", "Extremely loud"],
    answer: 1
  }, {
    word: "Persistent",
    options: ["Giving up very easily", "Continuing despite obstacles", "Moving very quickly", "Very quiet always"],
    answer: 1
  }, {
    word: "Humble",
    options: ["Very proud and arrogant", "Not boastful about oneself", "Feeling extremely angry", "Moving very fast"],
    answer: 1
  }, {
    word: "Flexible",
    options: ["Very stiff and rigid", "Able to change or adapt easily", "Feeling very tired", "Very expensive"],
    answer: 1
  }, {
    word: "Confident",
    options: ["Very uncertain and doubtful", "Feeling very tired", "Sure of oneself and one's abilities", "Very angry"],
    answer: 2
  }, {
    word: "Efficient",
    options: ["Very slow and wasteful", "Working well without wasting effort", "Feeling very happy", "Very loud noise"],
    answer: 1
  }, {
    word: "Tolerant",
    options: ["Intolerant and judgemental", "Accepting of different views", "Very fast and quick", "Feeling hungry"],
    answer: 1
  }, {
    word: "Motivated",
    options: ["Bored and disinterested", "Inspired to take action", "Very cold outside", "Extremely loud voice"],
    answer: 1
  }, {
    word: "Sensible",
    options: ["Foolish and reckless", "Having good judgement", "Very tired and sleepy", "Feeling very angry"],
    answer: 1
  }, {
    word: "Reliable",
    options: ["Often letting people down", "Always there when needed", "Very expensive to buy", "Moving very fast"],
    answer: 1
  }],
  Advanced: [{
    word: "Laconic",
    options: ["Using very many words", "Extremely emotional", "Using very few words", "Very slow to react"],
    answer: 2
  }, {
    word: "Sycophant",
    options: ["A very brave person", "Someone who flatters to gain favor", "A type of scientist", "A brilliant inventor"],
    answer: 1
  }, {
    word: "Ephemeral",
    options: ["Lasting a very long time", "Very large in size", "Lasting only a short time", "Extremely loud"],
    answer: 2
  }, {
    word: "Obfuscate",
    options: ["To make very clear", "To make confusing or unclear", "To organize very neatly", "To celebrate success"],
    answer: 1
  }, {
    word: "Perfidious",
    options: ["Very loyal and trustworthy", "Guilty of betrayal and treachery", "Extremely talented", "Being very polite"],
    answer: 1
  }, {
    word: "Equivocate",
    options: ["To speak very directly", "To solve problems quickly", "To avoid giving a direct answer", "To make a firm decision"],
    answer: 2
  }, {
    word: "Pragmatic",
    options: ["Idealistic and impractical", "Dealing with things practically", "Very emotional and sensitive", "Extremely talkative"],
    answer: 1
  }, {
    word: "Pedantic",
    options: ["Very relaxed and casual", "Overly focused on minor details", "Extremely generous always", "Moving very quickly"],
    answer: 1
  }, {
    word: "Coherent",
    options: ["Confusing and illogical", "Logical and easy to understand", "Very loud and disruptive", "Extremely tired"],
    answer: 1
  }, {
    word: "Candid",
    options: ["Very secretive and hidden", "Truthful and straightforward", "Moving very slowly", "Feeling extremely happy"],
    answer: 1
  }, {
    word: "Scrutiny",
    options: ["Complete disregard", "Close and critical examination", "Very quick decision", "Extreme happiness"],
    answer: 1
  }, {
    word: "Advocate",
    options: ["To oppose strongly", "To publicly support a cause", "To feel very tired", "To move very quickly"],
    answer: 1
  }, {
    word: "Arbitrary",
    options: ["Based on careful logic", "Random and without clear reason", "Very organized indeed", "Extremely kind"],
    answer: 1
  }, {
    word: "Ambivalent",
    options: ["Feeling very certain", "Completely indifferent", "Having mixed feelings", "Extremely confident"],
    answer: 2
  }, {
    word: "Obsolete",
    options: ["Modern and up to date", "No longer used or useful", "Very popular and current", "Extremely fast"],
    answer: 1
  }],
  Proficiency: [{
    word: "Perspicacious",
    options: ["Easily confused", "Having sharp insight and understanding", "Very slow to understand", "Overly emotional"],
    answer: 1
  }, {
    word: "Loquacious",
    options: ["Very quiet and withdrawn", "Talking a great deal", "Extremely organized", "Deeply creative"],
    answer: 1
  }, {
    word: "Magnanimous",
    options: ["Petty and unforgiving", "Generous and forgiving toward others", "Easily angered", "Overly cautious"],
    answer: 1
  }, {
    word: "Recalcitrant",
    options: ["Eager to please", "Stubbornly uncooperative", "Extremely flexible", "Very creative and innovative"],
    answer: 1
  }, {
    word: "Supercilious",
    options: ["Warm and friendly", "Very humble and modest", "Behaving as if superior to others", "Deeply curious"],
    answer: 2
  }, {
    word: "Obsequious",
    options: ["Independent and assertive", "Openly rude", "Excessively eager to please", "Deeply thoughtful"],
    answer: 2
  }, {
    word: "Sanguine",
    options: ["Very pessimistic", "Optimistic especially in difficulty", "Extremely angry", "Deeply confused"],
    answer: 1
  }, {
    word: "Truculent",
    options: ["Very peaceful and calm", "Quick to argue or fight", "Extremely generous", "Moving very slowly"],
    answer: 1
  }, {
    word: "Insidious",
    options: ["Obviously harmful", "Gradually harmful in a subtle way", "Very helpful indeed", "Extremely loud"],
    answer: 1
  }, {
    word: "Equivocal",
    options: ["Completely clear and direct", "Deliberately ambiguous", "Very decisive", "Extremely confident"],
    answer: 1
  }, {
    word: "Pedantic",
    options: ["Very relaxed about details", "Overly focused on minor rules", "Extremely generous", "Very creative"],
    answer: 1
  }, {
    word: "Laconic",
    options: ["Extremely talkative", "Very emotional", "Using very few words", "Deeply confused"],
    answer: 2
  }]
};
var FILL_DATA = {
  Beginner: [{
    sentence: "I drink ___ every morning to stay healthy.",
    options: ["stone", "water", "music", "cloud"],
    answer: 1,
    explanation: "Water is the liquid we need every day to stay healthy and hydrated."
  }, {
    sentence: "She is ___ because she won the game!",
    options: ["sad", "tired", "happy", "cold"],
    answer: 2,
    explanation: "Happy means feeling very good and cheerful about something nice."
  }, {
    sentence: "The dog likes to ___ in the park every afternoon.",
    options: ["sleep", "play", "read", "cook"],
    answer: 1,
    explanation: "Play means to have fun and enjoy yourself in a free and relaxed way."
  }, {
    sentence: "It is very ___ today — wear a warm jacket!",
    options: ["hot", "sunny", "cold", "quiet"],
    answer: 2,
    explanation: "Cold means low in temperature. When it is cold, we wear warm clothes."
  }, {
    sentence: "I use a ___ to write my notes at school.",
    options: ["spoon", "pencil", "pillow", "window"],
    answer: 1,
    explanation: "A pencil is a writing tool that students use to write in class."
  }, {
    sentence: "He was very ___ after running for one whole hour.",
    options: ["happy", "hungry", "tired", "clever"],
    answer: 2,
    explanation: "Tired means feeling a strong need for rest or sleep after effort."
  }, {
    sentence: "The baby always ___ when she sees her mother.",
    options: ["cries", "smiles", "runs", "sings"],
    answer: 1,
    explanation: "Smile means to form a happy expression on your face to show you are pleased."
  }, {
    sentence: "Please be ___ — the baby is sleeping in the room.",
    options: ["loud", "quiet", "fast", "dirty"],
    answer: 1,
    explanation: "Quiet means making very little noise so as not to disturb others."
  }, {
    sentence: "She ___ a letter to her grandmother every weekend.",
    options: ["writes", "cooks", "sleeps", "dances"],
    answer: 0,
    explanation: "Write means to form words or letters on a page using a pen or pencil."
  }, {
    sentence: "The ___ at the café was very loud but very good.",
    options: ["food", "music", "weather", "color"],
    answer: 1,
    explanation: "Music means organized, pleasant sounds that are enjoyable to listen to."
  }],
  Intermediate: [{
    sentence: "She decided to ___ her fear of heights by going skydiving.",
    options: ["avoid", "overcome", "ignore", "create"],
    answer: 1,
    explanation: "Overcome means to succeed in dealing with a problem or difficulty by facing it."
  }, {
    sentence: "Learning a language requires a lot of ___ and dedication.",
    options: ["luck", "money", "practice", "silence"],
    answer: 2,
    explanation: "Practice means doing something repeatedly to improve your skill over time."
  }, {
    sentence: "The film was so ___ that everyone in the theatre was crying.",
    options: ["boring", "funny", "moving", "silent"],
    answer: 2,
    explanation: "Moving means causing deep emotion in the audience or viewer."
  }, {
    sentence: "It is important to ___ between facts and personal opinions.",
    options: ["combine", "ignore", "distinguish", "repeat"],
    answer: 2,
    explanation: "Distinguish means to recognise and understand the differences between things."
  }, {
    sentence: "The manager ___ the team by recognising their hard work.",
    options: ["ignored", "criticised", "motivated", "replaced"],
    answer: 2,
    explanation: "Motivated means inspired someone to take action or to work much harder."
  }, {
    sentence: "She ___ that all people deserve to be treated with respect.",
    options: ["doubts", "forgets", "believes", "ignores"],
    answer: 2,
    explanation: "Believe means to accept something as true or to have a strong opinion about it."
  }, {
    sentence: "He was very ___ before the important job interview started.",
    options: ["confident", "relaxed", "nervous", "polite"],
    answer: 2,
    explanation: "Nervous means feeling anxious or worried about something that is uncertain."
  }, {
    sentence: "The doctor gave her ___ advice about how to stay healthy.",
    options: ["unhealthy", "useless", "sensible", "confusing"],
    answer: 2,
    explanation: "Sensible means having good judgement and being practical about things."
  }, {
    sentence: "It is important to ___ the environment for future generations.",
    options: ["destroy", "protect", "ignore", "pollute"],
    answer: 1,
    explanation: "Protect means to keep something safe from harm or damage or negative change."
  }, {
    sentence: "She showed great ___ by finishing the race despite being injured.",
    options: ["laziness", "courage", "confusion", "silence"],
    answer: 1,
    explanation: "Courage means the ability to face fear or difficulty without giving up or retreating."
  }],
  Advanced: [{
    sentence: "The senator's ___ remarks left voters unsure of his position.",
    options: ["candid", "equivocal", "decisive", "eloquent"],
    answer: 1,
    explanation: "Equivocal means deliberately unclear or open to more than one interpretation."
  }, {
    sentence: "Her ___ approach — checking every detail twice — led to the breakthrough.",
    options: ["careless", "hasty", "meticulous", "reluctant"],
    answer: 2,
    explanation: "Meticulous means showing extreme care and attention to every single detail."
  }, {
    sentence: "The committee tried to ___ the scandal by releasing misleading statements.",
    options: ["expose", "celebrate", "obfuscate", "resolve"],
    answer: 2,
    explanation: "Obfuscate means to deliberately make something unclear or confusing to others."
  }, {
    sentence: "His ___ wit allowed him to respond brilliantly in just one sentence.",
    options: ["verbose", "laconic", "ambiguous", "erratic"],
    answer: 1,
    explanation: "Laconic means using very few words; being brief and concise in speech or writing."
  }, {
    sentence: "The whistleblower showed tremendous ___ by exposing corruption.",
    options: ["cowardice", "indifference", "equivocation", "fortitude"],
    answer: 3,
    explanation: "Fortitude means courage and strength when facing great difficulty or adversity."
  }, {
    sentence: "Her ___ argument was easy to follow from beginning to end.",
    options: ["incoherent", "rambling", "coherent", "confusing"],
    answer: 2,
    explanation: "Coherent means logical and consistent; easy to understand as a whole argument."
  }, {
    sentence: "The ___ decision to fire the whole team shocked everyone in the company.",
    options: ["logical", "pragmatic", "arbitrary", "considered"],
    answer: 2,
    explanation: "Arbitrary means based on random choice rather than any clear reason or logic."
  }, {
    sentence: "He became a vocal ___ for renewable energy after visiting the Arctic.",
    options: ["opponent", "critic", "advocate", "sceptic"],
    answer: 2,
    explanation: "Advocate means to publicly support or recommend a particular cause or policy."
  }],
  Proficiency: [{
    sentence: "The diplomat was ___ in defeat, warmly congratulating his opponent.",
    options: ["bitter", "petty", "magnanimous", "recalcitrant"],
    answer: 2,
    explanation: "Magnanimous means being generous and forgiving, even in very difficult circumstances."
  }, {
    sentence: "Her ___ grasp of the situation impressed even the most seasoned analysts.",
    options: ["naive", "vague", "superficial", "perspicacious"],
    answer: 3,
    explanation: "Perspicacious means having a sharp and ready understanding of complex situations."
  }, {
    sentence: "The child was so ___ that getting him to sit quietly was nearly impossible.",
    options: ["reserved", "taciturn", "loquacious", "reticent"],
    answer: 2,
    explanation: "Loquacious means extremely talkative — always having a great deal to say."
  }, {
    sentence: "The board found the new regulations ___, refusing to comply with them.",
    options: ["welcome", "inspiring", "recalcitrant", "straightforward"],
    answer: 2,
    explanation: "Recalcitrant describes someone stubbornly resistant to authority or outside control."
  }, {
    sentence: "His ___ manner — always implying he was the smartest — alienated his peers.",
    options: ["humble", "supercilious", "gracious", "empathetic"],
    answer: 1,
    explanation: "Supercilious means behaving as if one is superior to others; condescending in attitude."
  }, {
    sentence: "She remained ___ throughout the crisis, keeping the whole team focused.",
    options: ["panicked", "equanimous", "volatile", "obsequious"],
    answer: 1,
    explanation: "Equanimous means having mental calmness and composure, especially in difficult situations."
  }, {
    sentence: "The lawyer's ___ questions confused the jury and obscured the key facts.",
    options: ["lucid", "transparent", "obfuscatory", "candid"],
    answer: 2,
    explanation: "Obfuscatory means tending to make something unclear or confusing on purpose."
  }, {
    sentence: "His ___ reply of just two words spoke volumes about his displeasure.",
    options: ["verbose", "loquacious", "rambling", "laconic"],
    answer: 3,
    explanation: "Laconic means expressing much in very few words; brief and concise in communication."
  }]
};

// Each level has a pool — getIdiomOfWeek() rotates automatically every 7 days
var IDIOM_DATA = {
  Beginner: [{
    idiom: "Give it a shot",
    level: "A1–A2 · Beginner",
    meaning: "To try something, even if you are not sure you will succeed.",
    examples: ["I've never tried sushi before, but I'll give it a shot!", "You should give it a shot — you might be surprised how much you enjoy it.", "She had never spoken in public before, but she decided to give it a shot."]
  }, {
    idiom: "Under the weather",
    level: "A1–A2 · Beginner",
    meaning: "Feeling slightly ill or unwell.",
    examples: ["I won't be coming into the office today — I'm feeling a bit under the weather.", "She's been under the weather all week and finally decided to see a doctor.", "Are you under the weather? You look a little pale today."]
  }, {
    idiom: "Hang in there",
    level: "A1–A2 · Beginner",
    meaning: "Keep going and do not give up, even when things are difficult.",
    examples: ["Exams are almost over — just hang in there!", "I know the job search is tough, but hang in there. The right opportunity will come.", "She told her friend to hang in there after a difficult week at work."]
  }, {
    idiom: "Break the ice",
    level: "A1–A2 · Beginner",
    meaning: "To say or do something to make people feel more comfortable in a new or awkward social situation.",
    examples: ["He told a funny story to break the ice at the start of the meeting.", "A quick game can really help break the ice with a new team.", "She was nervous at the party, so she asked a question to break the ice."]
  }, {
    idiom: "Call it a day",
    level: "A1–A2 · Beginner",
    meaning: "To stop working on something and finish for the day.",
    examples: ["It's already 7pm — let's call it a day and continue tomorrow.", "After hours of editing, she decided to call it a day and get some rest.", "The team called it a day after finishing the final presentation slide."]
  }, {
    idiom: "In the same boat",
    level: "A1–A2 · Beginner",
    meaning: "In the same difficult or challenging situation as someone else.",
    examples: ["Don't worry — we're all in the same boat trying to meet this deadline.", "I have no idea how to fix this either. We're in the same boat.", "All the new employees were in the same boat, unsure of what to expect."]
  }, {
    idiom: "Piece of cake",
    level: "A1–A2 · Beginner",
    meaning: "Something that is very easy to do.",
    examples: ["The exam was a piece of cake — I finished in half the time.", "Once you know the shortcut, the whole process is a piece of cake.", "Don't worry about the interview — with your experience, it'll be a piece of cake."]
  }, {
    idiom: "On the go",
    level: "A1–A2 · Beginner",
    meaning: "Constantly busy or active; always moving from one thing to the next.",
    examples: ["She's always on the go — between work, the kids, and the gym.", "I've been on the go since 7am and haven't had a break yet.", "He eats lunch on the go because he never has time to sit down."]
  }, {
    idiom: "Sleep on it",
    level: "A1–A2 · Beginner",
    meaning: "To wait until the next day before making a decision, to give yourself more time to think it over.",
    examples: ["That's a big offer — why don't you sleep on it and let me know tomorrow?", "I'm not sure about the new design. Let me sleep on it overnight.", "She didn't want to rush into anything, so she decided to sleep on it."]
  }, {
    idiom: "Hit the sack",
    level: "A1–A2 · Beginner",
    meaning: "Go to bed and sleep",
    examples: ["It is already midnight — I am going to hit the sack.", "She hit the sack early because she had a big day ahead.", "After the long journey, all he wanted to do was hit the sack."]
  }, {
    idiom: "Hit the road",
    level: "A1–A2 · Beginner",
    meaning: "Leave or begin a journey",
    examples: ["We need to hit the road before the traffic gets bad.", "She kissed her family goodbye and hit the road at dawn.", "Come on — let us hit the road or we will miss the train."]
  }, {
    idiom: "Hit the books",
    level: "A1–A2 · Beginner",
    meaning: "Start studying hard",
    examples: ["The exam is tomorrow so I need to hit the books tonight.", "She turned off her phone and hit the books for three hours.", "He knew he had to hit the books if he wanted to pass."]
  }, {
    idiom: "Once in a blue moon",
    level: "A1–A2 · Beginner",
    meaning: "Very rarely; almost never",
    examples: ["She only eats fast food once in a blue moon.", "He calls his old friends once in a blue moon these days.", "Once in a blue moon, everything goes exactly as planned."]
  }, {
    idiom: "Time flies",
    level: "A1–A2 · Beginner",
    meaning: "Time passes very quickly",
    examples: ["Time flies when you are having fun with good friends.", "She could not believe it was Friday already — time really flies.", "Time flies in this job; I never know where the day goes."]
  }, {
    idiom: "Time is money",
    level: "A1–A2 · Beginner",
    meaning: "Time is valuable and should not be wasted",
    examples: ["Stop chatting and get to work — time is money.", "She runs her business efficiently because she knows time is money.", "Time is money, so I always try to prepare before meetings."]
  }, {
    idiom: "Sweet tooth",
    level: "A1–A2 · Beginner",
    meaning: "A liking for sweet-tasting foods",
    examples: ["She has such a sweet tooth — she always orders dessert.", "His sweet tooth is the reason he visits the bakery every morning.", "I have a sweet tooth, so I find it hard to resist chocolate."]
  }, {
    idiom: "Spill the beans",
    level: "A1–A2 · Beginner",
    meaning: "Accidentally or deliberately reveal a secret",
    examples: ["Someone spilled the beans about the surprise party.", "Do not spill the beans — it is supposed to be a secret!", "He could not help himself and spilled the beans to everyone."]
  }, {
    idiom: "Speak of the devil",
    level: "A1–A2 · Beginner",
    meaning: "What you say when the person you were talking about appears",
    examples: ["We were just talking about you — speak of the devil!", "Speak of the devil! I was about to call you.", "Speak of the devil — she walked in just as we mentioned her name."]
  }, {
    idiom: "Feeling blue",
    level: "A1–A2 · Beginner",
    meaning: "Feeling sad or depressed",
    examples: ["She has been feeling blue since her best friend moved away.", "Everyone feels blue sometimes — it is perfectly normal.", "He was feeling blue after hearing the disappointing news."]
  }, {
    idiom: "Green with envy",
    level: "A1–A2 · Beginner",
    meaning: "Extremely jealous of someone or something",
    examples: ["She was green with envy when she saw her colleague's new car.", "I have to admit I was green with envy when they announced the winner.", "He tried not to look green with envy, but everyone could tell."]
  }, {
    idiom: "Full of beans",
    level: "A1–A2 · Beginner",
    meaning: "Full of energy, enthusiasm and liveliness",
    examples: ["The children were full of beans after their afternoon rest.", "She arrived at the office full of beans and ready to get started.", "He is always full of beans on Monday mornings, which is impressive."]
  }, {
    idiom: "Tie the knot",
    level: "A1–A2 · Beginner",
    meaning: "Get married",
    examples: ["They finally tied the knot after eight years together.", "She told her friends she was planning to tie the knot in spring.", "He was nervous but so happy the day he tied the knot."]
  }, {
    idiom: "Tongue-tied",
    level: "A1–A2 · Beginner",
    meaning: "Unable to speak freely due to nervousness or shyness",
    examples: ["She became tongue-tied the moment she saw her favourite author.", "He gets tongue-tied whenever he has to speak in public.", "I was completely tongue-tied when she asked me the question."]
  }, {
    idiom: "Long time no see",
    level: "A1–A2 · Beginner",
    meaning: "A greeting said when you have not seen someone for a long time",
    examples: ["Long time no see! How have you been?", "She walked into the café and spotted her old friend. Long time no see!", "He gave her a hug and said, long time no see, it is so good to see you."]
  }, {
    idiom: "Look on the bright side",
    level: "A1–A2 · Beginner",
    meaning: "Try to find something positive in a difficult situation",
    examples: ["Look on the bright side — at least you learned something from the experience.", "She always tries to look on the bright side, even in difficult times.", "I know it is disappointing, but try to look on the bright side."]
  }, {
    idiom: "Crack of dawn",
    level: "A1–A2 · Beginner",
    meaning: "Very early in the morning, when the sun first rises",
    examples: ["She wakes up at the crack of dawn every day to go running.", "The fishermen set out at the crack of dawn to catch the morning tide.", "He arrived at the crack of dawn so he could get a good seat."]
  }, {
    idiom: "Couch potato",
    level: "A1–A2 · Beginner",
    meaning: "A lazy person who spends too much time watching television",
    examples: ["He became a couch potato during the long holiday and barely moved.", "She does not want to be a couch potato, so she joined a gym.", "Stop being a couch potato and come outside with us!"]
  }, {
    idiom: "Around the clock",
    level: "A1–A2 · Beginner",
    meaning: "All day and night, without stopping",
    examples: ["The nurses worked around the clock to care for the patients.", "The team worked around the clock to finish the project on time.", "The emergency services operate around the clock, every day of the year."]
  }, {
    idiom: "Better late than never",
    level: "A1–A2 · Beginner",
    meaning: "It is better to do something late than not do it at all",
    examples: ["She finally learned to drive at forty — better late than never.", "He sent the apology weeks after the argument, but better late than never.", "Better late than never — she eventually finished the course she had started."]
  }, {
    idiom: "All ears",
    level: "A1–A2 · Beginner",
    meaning: "Listening attentively and ready to hear what someone has to say",
    examples: ["Go ahead — I am all ears.", "She was all ears when her friend started telling the story.", "He leaned forward, all ears, as the details began to unfold."]
  }, {
    idiom: "No pain no gain",
    level: "A1–A2 · Beginner",
    meaning: "You have to work hard and suffer to achieve something worthwhile",
    examples: ["She reminds herself that no pain no gain whenever training gets tough.", "No pain no gain — that is why she studies for hours every evening.", "He kept going through the difficulty, knowing that no pain no gain."]
  }, {
    idiom: "Keep your fingers crossed",
    level: "A1–A2 · Beginner",
    meaning: "Hope for good luck or a positive outcome",
    examples: ["Keep your fingers crossed that the weather stays nice for the wedding.", "She kept her fingers crossed all morning, waiting for the results.", "I will keep my fingers crossed for you during the interview!"]
  }, {
    idiom: "Don't judge a book by its cover",
    level: "A1–A2 · Beginner",
    meaning: "Do not judge something or someone purely by how they look",
    examples: ["She seemed quiet at first, but do not judge a book by its cover.", "He reminded himself not to judge a book by its cover when meeting new people.", "The restaurant looked ordinary, but do not judge a book by its cover — the food was amazing."]
  }, {
    idiom: "Every cloud has a silver lining",
    level: "A1–A2 · Beginner",
    meaning: "Even in a bad situation there is something positive",
    examples: ["Losing that job was hard, but every cloud has a silver lining — she found a better one.", "Every cloud has a silver lining; the delay gave us time to prepare properly.", "He told himself that every cloud has a silver lining as he dealt with the setback."]
  }, {
    idiom: "Kill two birds with one stone",
    level: "A1–A2 · Beginner",
    meaning: "Accomplish two things with a single action",
    examples: ["She killed two birds with one stone by exercising during her lunch break.", "We can kill two birds with one stone by meeting near the supermarket.", "He killed two birds with one stone by calling his mother on the way to work."]
  }, {
    idiom: "Let the cat out of the bag",
    level: "A1–A2 · Beginner",
    meaning: "Accidentally or carelessly reveal a secret",
    examples: ["She let the cat out of the bag about the surprise before the party.", "Do not let the cat out of the bag — nobody knows yet!", "He let the cat out of the bag when he mentioned the new job offer."]
  }, {
    idiom: "On the tip of your tongue",
    level: "A1–A2 · Beginner",
    meaning: "Almost able to remember something but not quite",
    examples: ["Her name is on the tip of my tongue — I just cannot remember it.", "The answer was on the tip of his tongue during the quiz.", "She had the word on the tip of her tongue but could not get it out."]
  }, {
    idiom: "Easy does it",
    level: "A1–A2 · Beginner",
    meaning: "Do something slowly and carefully to avoid making a mistake",
    examples: ["Easy does it — those boxes are very fragile.", "She reminded herself: easy does it, as she applied the final layer of paint.", "Easy does it — we do not want to rush and make an error."]
  }, {
    idiom: "Back to the drawing board",
    level: "A1–A2 · Beginner",
    meaning: "Start completely over with a new plan after one has failed",
    examples: ["The design was rejected, so it was back to the drawing board.", "She was disappointed, but went back to the drawing board with fresh ideas.", "Back to the drawing board — the first approach clearly was not working."]
  }, {
    idiom: "Golden opportunity",
    level: "A1–A2 · Beginner",
    meaning: "A very good chance that may not come again",
    examples: ["She recognised it as a golden opportunity and applied immediately.", "This is a golden opportunity to learn from one of the best in the field.", "He grabbed the golden opportunity with both hands."]
  }, {
    idiom: "Love at first sight",
    level: "A1–A2 · Beginner",
    meaning: "Immediately feel love for someone when you first see them",
    examples: ["She always said she did not believe in love at first sight — until she met him.", "He knew from the moment they met that it was love at first sight.", "Love at first sight might sound like a fairy tale, but it happened to her."]
  }, {
    idiom: "Head over heels",
    level: "A1–A2 · Beginner",
    meaning: "Completely and deeply in love with someone",
    examples: ["She is absolutely head over heels for the man she met last month.", "He fell head over heels the moment he heard her laugh.", "They are head over heels in love — everyone can see it."]
  }, {
    idiom: "Pop the question",
    level: "A1–A2 · Beginner",
    meaning: "Propose marriage to someone",
    examples: ["He took her to the rooftop restaurant and popped the question.", "She had no idea he was planning to pop the question on their holiday.", "After three years together, he finally popped the question."]
  }, {
    idiom: "Rule of thumb",
    level: "A1–A2 · Beginner",
    meaning: "A general principle that works most of the time",
    examples: ["As a rule of thumb, always double-check your work before submitting.", "Her rule of thumb is to drink a glass of water before every meal.", "A good rule of thumb is to save at least ten percent of what you earn."]
  }, {
    idiom: "By degrees",
    level: "A1–A2 · Beginner",
    meaning: "Happening or developing gradually and little by little",
    examples: ["By degrees, she grew more confident in her new role.", "The temperature dropped by degrees as the night went on.", "His English improved by degrees over the months of daily practice."]
  }, {
    idiom: "Now and then",
    level: "A1–A2 · Beginner",
    meaning: "Occasionally; not very often",
    examples: ["She still visits her hometown now and then.", "Now and then he allows himself a small treat after a long week.", "They stay in touch now and then, usually around birthdays."]
  }, {
    idiom: "Sooner or later",
    level: "A1–A2 · Beginner",
    meaning: "At some point in the future; eventually",
    examples: ["Sooner or later, all the hard work will pay off.", "She knew sooner or later she would have to have that difficult conversation.", "Sooner or later, everyone has to face their fears."]
  }, {
    idiom: "A blessing in disguise",
    level: "A1–A2 · Beginner",
    meaning: "Something that seems bad at first but turns out to be good",
    examples: ["Losing that job was a blessing in disguise — it led her to a much better opportunity.", "The rain was a blessing in disguise as it kept the crowds away.", "Missing that flight turned out to be a blessing in disguise."]
  }, {
    idiom: "Actions speak louder than words",
    level: "A1–A2 · Beginner",
    meaning: "What you do matters more than what you say",
    examples: ["Actions speak louder than words — show me you care, do not just say it.", "She believed that actions speak louder than words in any relationship.", "He stopped making promises and started showing effort — actions speak louder than words."]
  }, {
    idiom: "In the blink of an eye",
    level: "A1–A2 · Beginner",
    meaning: "Something that happens extremely quickly",
    examples: ["In the blink of an eye, the whole situation had changed.", "She finished the test in the blink of an eye and handed it in first.", "In the blink of an eye, the years had passed and they were already adults."]
  }],
  Intermediate: [{
    idiom: "Read the room",
    level: "B1–B2 · Intermediate",
    meaning: "To correctly understand the mood or feelings of the people around you in a situation.",
    examples: ["He kept making jokes during the serious meeting — he really couldn't read the room.", "A good manager knows how to read the room and adjust their communication style.", "She read the room perfectly and knew it was not the right moment to bring up the problem."]
  }, {
    idiom: "On the same page",
    level: "B1–B2 · Intermediate",
    meaning: "Having the same understanding or sharing the same view about something.",
    examples: ["Before we start the project, let's make sure everyone is on the same page.", "Are we on the same page about the deadline, or do we need to clarify?", "After a long discussion, the team finally got on the same page."]
  }, {
    idiom: "Get the ball rolling",
    level: "B1–B2 · Intermediate",
    meaning: "To start a process, project, or activity and get things moving.",
    examples: ["Let's get the ball rolling on the new marketing campaign.", "She sent the first email to get the ball rolling on the partnership talks.", "Someone needs to get the ball rolling — we've been planning this for too long."]
  }, {
    idiom: "Hit the ground running",
    level: "B1–B2 · Intermediate",
    meaning: "To start something quickly and with great energy, without needing time to warm up.",
    examples: ["She hit the ground running on her first day — already leading the morning standup.", "We need someone who can hit the ground running without much training.", "The new team hit the ground running and delivered results within the first week."]
  }, {
    idiom: "Back to square one",
    level: "B1–B2 · Intermediate",
    meaning: "To return to the very beginning because a plan or attempt has failed.",
    examples: ["The prototype didn't work, so we're back to square one.", "After the client rejected the proposal, it was back to square one.", "The negotiation fell apart, sending both sides back to square one."]
  }, {
    idiom: "Go the extra mile",
    level: "B1–B2 · Intermediate",
    meaning: "To put in more effort than is expected or required.",
    examples: ["She always goes the extra mile for her students — staying late to answer questions.", "That restaurant goes the extra mile — they remembered my birthday without being asked.", "If you want to stand out at work, you have to be willing to go the extra mile."]
  }, {
    idiom: "Cut to the chase",
    level: "B1–B2 · Intermediate",
    meaning: "To get directly to the point without spending time on unnecessary details.",
    examples: ["We've been talking for twenty minutes — can we cut to the chase?", "She cut to the chase and told him directly that the project was cancelled.", "His emails are always brief — he likes to cut to the chase."]
  }, {
    idiom: "Touch base",
    level: "B1–B2 · Intermediate",
    meaning: "To make brief contact with someone to check in or share a quick update.",
    examples: ["Let's touch base at the end of the week to see how things are progressing.", "I just wanted to touch base before the presentation tomorrow.", "She touched base with the client after the meeting to make sure everything was clear."]
  }, {
    idiom: "Bite off more than you can chew",
    level: "B1–B2 · Intermediate",
    meaning: "To take on a task or responsibility that is too large for you to handle comfortably.",
    examples: ["He agreed to manage three projects at once and clearly bit off more than he could chew.", "Starting a business while studying full-time might be biting off more than you can chew.", "She bit off more than she could chew with the renovation — it took twice as long as planned."]
  }, {
    idiom: "The ball is in your court",
    level: "B1–B2 · Intermediate",
    meaning: "It is now your turn or your responsibility to take the next action or make a decision.",
    examples: ["I've sent the proposal — the ball is in their court now.", "You know my thoughts. The ball is in your court.", "She's done everything she can. Now the ball is in the client's court."]
  }, {
    idiom: "Against the clock",
    level: "B1–B2 · Intermediate",
    meaning: "Working quickly because there is very little time left",
    examples: ["She was working against the clock to finish the report before the meeting.", "The team raced against the clock to complete the repairs before nightfall.", "He was writing against the clock, knowing the deadline was only an hour away."]
  }, {
    idiom: "An arm and a leg",
    level: "B1–B2 · Intermediate",
    meaning: "Something that costs a very large amount of money",
    examples: ["That restaurant is good, but it costs an arm and a leg.", "She did not want to spend an arm and a leg on a hotel, so she chose a hostel.", "The repairs cost an arm and a leg, but there was no choice."]
  }, {
    idiom: "At the drop of a hat",
    level: "B1–B2 · Intermediate",
    meaning: "Without any hesitation; immediately and without needing to be asked",
    examples: ["She would help her friends at the drop of a hat.", "He is always ready to travel at the drop of a hat.", "At the drop of a hat, she packed her bag and headed to the airport."]
  }, {
    idiom: "Back to basics",
    level: "B1–B2 · Intermediate",
    meaning: "Return to the fundamental principles that have worked before",
    examples: ["After trying too many new methods, they went back to basics.", "The coach told the team to go back to basics after a string of losses.", "Sometimes you need to go back to basics to rediscover what works."]
  }, {
    idiom: "Barking up the wrong tree",
    level: "B1–B2 · Intermediate",
    meaning: "Pursuing the wrong course or making a false assumption",
    examples: ["If you think I took it, you are barking up the wrong tree.", "The detective realised he had been barking up the wrong tree all along.", "She was barking up the wrong tree looking for the problem in the software."]
  }, {
    idiom: "Beat around the bush",
    level: "B1–B2 · Intermediate",
    meaning: "Avoid talking about something directly; approach a subject evasively",
    examples: ["Stop beating around the bush and just tell me what happened.", "She could tell he was beating around the bush and asked him to get to the point.", "He spent ten minutes beating around the bush before finally admitting the truth."]
  }, {
    idiom: "Best of both worlds",
    level: "B1–B2 · Intermediate",
    meaning: "Enjoy the advantages of two very different things at the same time",
    examples: ["Working from home gives her the best of both worlds.", "Living near the city but in a quiet neighbourhood is the best of both worlds.", "She found a career that offered the best of both worlds: creativity and stability."]
  }, {
    idiom: "Bite the bullet",
    level: "B1–B2 · Intermediate",
    meaning: "Endure a painful or difficult situation because it is unavoidable",
    examples: ["She bit the bullet and went to the dentist despite her fear.", "He bit the bullet and told her the truth, knowing it would be hard.", "Sometimes you just have to bite the bullet and deal with it."]
  }, {
    idiom: "By the skin of your teeth",
    level: "B1–B2 · Intermediate",
    meaning: "Succeed by a very small margin; barely manage to do something",
    examples: ["She passed the exam by the skin of her teeth.", "They caught the train by the skin of their teeth.", "He finished the report by the skin of his teeth just before the deadline."]
  }, {
    idiom: "Catch someone red-handed",
    level: "B1–B2 · Intermediate",
    meaning: "Catch someone in the act of doing something wrong",
    examples: ["She caught him red-handed taking money from the till.", "The manager caught the employee red-handed and immediately called a meeting.", "He was caught red-handed copying the answers during the exam."]
  }, {
    idiom: "Cross that bridge when you come to it",
    level: "B1–B2 · Intermediate",
    meaning: "Deal with a problem only when it actually happens",
    examples: ["Do not worry about it now — we will cross that bridge when we come to it.", "She told him to cross that bridge when he came to it rather than worrying in advance.", "There is no point stressing now; we will cross that bridge when we come to it."]
  }, {
    idiom: "Cut corners",
    level: "B1–B2 · Intermediate",
    meaning: "Do something the quick and cheap way, usually at the cost of quality",
    examples: ["They cut corners on the construction and ended up with serious problems.", "She refused to cut corners — she wanted the job done properly.", "Cutting corners might save time now but creates bigger problems later."]
  }, {
    idiom: "Cut the mustard",
    level: "B1–B2 · Intermediate",
    meaning: "Meet the required standard; be good enough for the task",
    examples: ["The new employee was eager but could not quite cut the mustard.", "She worked hard to ensure she would cut the mustard in the competitive industry.", "His performance did not cut the mustard and he was asked to improve."]
  }, {
    idiom: "Don't count your chickens before they hatch",
    level: "B1–B2 · Intermediate",
    meaning: "Do not make plans for something that has not happened yet",
    examples: ["She was excited about the offer but reminded herself not to count her chickens.", "Do not count your chickens before they hatch — wait until the contract is signed.", "He stopped himself from celebrating early — you should never count your chickens."]
  }, {
    idiom: "Don't put all your eggs in one basket",
    level: "B1–B2 · Intermediate",
    meaning: "Do not make everything dependent on only one plan",
    examples: ["She applied to six universities — she knew not to put all her eggs in one basket.", "As an investor, he never puts all his eggs in one basket.", "Diversify your income — never put all your eggs in one basket."]
  }, {
    idiom: "Eager beaver",
    level: "B1–B2 · Intermediate",
    meaning: "A person who is very enthusiastic and works very hard",
    examples: ["The new intern was a real eager beaver, arriving early and staying late.", "She was an eager beaver in her first year and impressed everyone.", "He was such an eager beaver that he finished the task before anyone else had started."]
  }, {
    idiom: "Eleventh hour",
    level: "B1–B2 · Intermediate",
    meaning: "At the very last moment; just in time before a deadline",
    examples: ["She submitted the application at the eleventh hour.", "The deal was saved at the eleventh hour after a final round of negotiations.", "He always manages to come up with a solution at the eleventh hour."]
  }, {
    idiom: "Give the benefit of the doubt",
    level: "B1–B2 · Intermediate",
    meaning: "Believe someone's explanation without proof, giving them a chance",
    examples: ["She gave him the benefit of the doubt even though she was suspicious.", "The manager gave her the benefit of the doubt and decided not to investigate further.", "It is fair to give people the benefit of the doubt until you know the full story."]
  }, {
    idiom: "Grass is always greener on the other side",
    level: "B1–B2 · Intermediate",
    meaning: "What others have always seems better than your own situation",
    examples: ["She wanted to quit, but reminded herself that the grass is always greener on the other side.", "He changed jobs three times before realising the grass is always greener on the other side.", "The grass is always greener on the other side — be grateful for what you have."]
  }, {
    idiom: "Hear it on the grapevine",
    level: "B1–B2 · Intermediate",
    meaning: "Learn something through unofficial rumour or gossip",
    examples: ["I heard on the grapevine that they are closing the office.", "She heard it on the grapevine that he was leaving the company.", "He had heard on the grapevine about the merger but was not sure it was true."]
  }, {
    idiom: "In the long run",
    level: "B1–B2 · Intermediate",
    meaning: "Over a long period of time; eventually; in the end",
    examples: ["It may be harder now, but in the long run it will be worth it.", "In the long run, eating well and exercising will make a real difference.", "She knew that in the long run, patience would pay off."]
  }, {
    idiom: "In the nick of time",
    level: "B1–B2 · Intermediate",
    meaning: "Just before it is too late; at the very last possible moment",
    examples: ["She arrived in the nick of time to catch the flight.", "The doctor arrived in the nick of time to help the patient.", "He submitted the form in the nick of time — seconds before it closed."]
  }, {
    idiom: "Jump on the bandwagon",
    level: "B1–B2 · Intermediate",
    meaning: "Join a popular trend or activity because others are doing it",
    examples: ["Every brand seemed to jump on the bandwagon once the trend took off.", "She was sceptical of jumping on the bandwagon without doing her own research.", "He did not want to jump on the bandwagon just because everyone else was doing it."]
  }, {
    idiom: "Keep something at bay",
    level: "B1–B2 · Intermediate",
    meaning: "Prevent something from approaching or getting worse",
    examples: ["She used humour to keep her anxiety at bay.", "The team worked hard to keep the problem at bay while a solution was found.", "Regular exercise helps keep stress at bay."]
  }, {
    idiom: "Kill time",
    level: "B1–B2 · Intermediate",
    meaning: "Do something to pass the time while waiting for something else",
    examples: ["She read a magazine to kill time at the airport.", "They played card games to kill time on the long journey.", "He went for a walk to kill time before the meeting started."]
  }, {
    idiom: "Last straw",
    level: "B1–B2 · Intermediate",
    meaning: "The final problem in a series that makes a situation completely unbearable",
    examples: ["Being spoken to rudely was the last straw — she handed in her resignation.", "That comment was the last straw and she finally ended the relationship.", "The delay was the last straw and he decided to cancel his subscription."]
  }, {
    idiom: "Learn the ropes",
    level: "B1–B2 · Intermediate",
    meaning: "Learn how to do a job or activity properly from the beginning",
    examples: ["It took her a few weeks to learn the ropes at the new company.", "Every new employee needs time to learn the ropes.", "He was a fast learner and learned the ropes quickly."]
  }, {
    idiom: "Like clockwork",
    level: "B1–B2 · Intermediate",
    meaning: "Happening with perfect regularity, precision and without problems",
    examples: ["The event ran like clockwork thanks to careful planning.", "She gets up at six every morning, like clockwork.", "Their team works like clockwork — every task is completed on time."]
  }, {
    idiom: "Miss the boat",
    level: "B1–B2 · Intermediate",
    meaning: "Miss an opportunity; be too late to take advantage of something",
    examples: ["She missed the boat on the early investment and regretted it later.", "If you do not apply today, you will miss the boat.", "He missed the boat by waiting too long to make a decision."]
  }, {
    idiom: "Murphy's law",
    level: "B1–B2 · Intermediate",
    meaning: "If something can go wrong, it will go wrong at the worst time",
    examples: ["Murphy's law — the presentation crashed just as the client arrived.", "It was pure Murphy's law: everything that could go wrong did go wrong.", "She laughed and said it was Murphy's law when the rain started at the picnic."]
  }, {
    idiom: "No time like the present",
    level: "B1–B2 · Intermediate",
    meaning: "The best time to do something is right now, not later",
    examples: ["Stop procrastinating — there is no time like the present.", "She decided there was no time like the present and made the call immediately.", "If you want to start learning English, there is no time like the present."]
  }, {
    idiom: "On the ball",
    level: "B1–B2 · Intermediate",
    meaning: "Alert and fully aware; quick to understand a situation",
    examples: ["The receptionist was really on the ball and anticipated every need.", "She is always on the ball — nothing gets past her.", "You need to be on the ball in this fast-moving industry."]
  }, {
    idiom: "Out of the blue",
    level: "B1–B2 · Intermediate",
    meaning: "Happening suddenly and completely unexpectedly",
    examples: ["He called her out of the blue after ten years of silence.", "The job offer came completely out of the blue.", "Out of the blue, she received a message that changed everything."]
  }, {
    idiom: "Pass with flying colours",
    level: "B1–B2 · Intermediate",
    meaning: "Succeed with very high marks or excellent results",
    examples: ["She passed the exam with flying colours after months of preparation.", "He passed the interview with flying colours and got the job.", "The product passed its safety tests with flying colours."]
  }, {
    idiom: "Pulling out all the stops",
    level: "B1–B2 · Intermediate",
    meaning: "Doing absolutely everything possible to achieve a desired result",
    examples: ["They pulled out all the stops to make the event unforgettable.", "She pulled out all the stops for her daughter's birthday party.", "The company pulled out all the stops to win the contract."]
  }, {
    idiom: "Raring to go",
    level: "B1–B2 · Intermediate",
    meaning: "Very eager and enthusiastic about doing something",
    examples: ["She woke up early on the first day of the new job, raring to go.", "After the holiday, he was raring to go and full of new ideas.", "The whole team was raring to go when the project was finally approved."]
  }, {
    idiom: "Red flag",
    level: "B1–B2 · Intermediate",
    meaning: "A warning sign that something is wrong or needs attention",
    examples: ["His reluctance to show receipts was a red flag.", "She ignored the red flags early in the relationship and regretted it.", "The sudden drop in sales was a red flag that something needed to change."]
  }, {
    idiom: "Red tape",
    level: "B1–B2 · Intermediate",
    meaning: "Excessive bureaucratic rules and regulations that slow progress",
    examples: ["There was so much red tape involved in starting the business.", "She was frustrated by all the red tape required to get the permit.", "Red tape delayed the project by three months."]
  }, {
    idiom: "Sail through something",
    level: "B1–B2 · Intermediate",
    meaning: "Succeed at something easily and without difficulty",
    examples: ["She sailed through the interview and was offered the job on the spot.", "He sailed through the first round of the competition without any trouble.", "She had studied so well that she sailed through the exam."]
  }, {
    idiom: "See eye to eye",
    level: "B1–B2 · Intermediate",
    meaning: "Agree completely with someone on a particular matter",
    examples: ["They do not always see eye to eye, but they respect each other's views.", "She and her manager rarely see eye to eye on deadlines.", "It is hard to work with someone you never see eye to eye with."]
  }, {
    idiom: "Sit on the fence",
    level: "B1–B2 · Intermediate",
    meaning: "Refuse to commit to one side of an argument or make a decision",
    examples: ["Stop sitting on the fence and tell me what you actually think.", "He has a habit of sitting on the fence instead of taking a clear position.", "She could no longer sit on the fence — a decision had to be made."]
  }, {
    idiom: "Snowed under",
    level: "B1–B2 · Intermediate",
    meaning: "Overwhelmed with work or things to do",
    examples: ["She has been absolutely snowed under since the new project began.", "He was so snowed under that he forgot to reply to her message.", "I would love to help but I am completely snowed under right now."]
  }, {
    idiom: "Spanner in the works",
    level: "B1–B2 · Intermediate",
    meaning: "Something that suddenly disrupts or prevents a plan from working",
    examples: ["The bad weather threw a spanner in the works for the outdoor event.", "His sudden resignation was a real spanner in the works.", "A technical failure put a spanner in the works just before the launch."]
  }, {
    idiom: "Take with a grain of salt",
    level: "B1–B2 · Intermediate",
    meaning: "Be sceptical about what someone says; not take it too seriously",
    examples: ["Take what he says with a grain of salt — he tends to exaggerate.", "She learned to take online reviews with a grain of salt.", "I would take that claim with a grain of salt until we see the evidence."]
  }, {
    idiom: "Thinking on your feet",
    level: "B1–B2 · Intermediate",
    meaning: "Making quick decisions and adapting to changes as they happen",
    examples: ["She is brilliant at thinking on her feet during presentations.", "In customer service, you need to be good at thinking on your feet.", "He had to think on his feet when the original plan fell apart."]
  }, {
    idiom: "Under pressure",
    level: "B1–B2 · Intermediate",
    meaning: "Experiencing stress from difficult demands or expectations",
    examples: ["She performs very well under pressure.", "He tends to make poor decisions when he is under pressure.", "Working under pressure is challenging, but it can also bring out the best in people."]
  }, {
    idiom: "Up in the air",
    level: "B1–B2 · Intermediate",
    meaning: "Uncertain and not yet decided or resolved",
    examples: ["The plan is still up in the air — nothing has been finalised.", "Her travel plans are completely up in the air right now.", "Whether the event will go ahead is still up in the air."]
  }, {
    idiom: "Waiting in the wings",
    level: "B1–B2 · Intermediate",
    meaning: "Ready and prepared to take over or act when the moment comes",
    examples: ["Several strong candidates are waiting in the wings.", "She had been waiting in the wings for months, ready to lead.", "There is a younger generation waiting in the wings, full of fresh ideas."]
  }, {
    idiom: "Ahead of time",
    level: "B1–B2 · Intermediate",
    meaning: "Before the expected or scheduled time",
    examples: ["She always submits her work ahead of time.", "He arrived at the interview well ahead of time.", "Getting there ahead of time gave them a chance to prepare properly."]
  }, {
    idiom: "Around the corner",
    level: "B1–B2 · Intermediate",
    meaning: "About to happen very soon",
    examples: ["Summer is just around the corner — I cannot wait.", "Success is just around the corner if you keep going.", "The election is around the corner and tensions are rising."]
  }, {
    idiom: "Best thing since sliced bread",
    level: "B1–B2 · Intermediate",
    meaning: "A very good idea, invention or development",
    examples: ["Everyone in the office thinks the new app is the best thing since sliced bread.", "She raved about the new café as if it were the best thing since sliced bread.", "He called the gadget the best thing since sliced bread and bought one immediately."]
  }, {
    idiom: "Bee in one's bonnet",
    level: "B1–B2 · Intermediate",
    meaning: "Being obsessively preoccupied with a particular idea or worry",
    examples: ["She has had a bee in her bonnet about reorganising the office for weeks.", "Once he gets a bee in his bonnet about something, he cannot let it go.", "She clearly has a bee in her bonnet about punctuality."]
  }, {
    idiom: "Deliver the goods",
    level: "B1–B2 · Intermediate",
    meaning: "Do what is expected or required; meet the expectations set",
    examples: ["After all the promises, they finally delivered the goods.", "She always delivers the goods — her work is consistently excellent.", "The new supplier failed to deliver the goods on time."]
  }, {
    idiom: "Explore all avenues",
    level: "B1–B2 · Intermediate",
    meaning: "Investigate every possible option before making a decision",
    examples: ["We should explore all avenues before making a final decision.", "She was determined to explore all avenues to find a solution.", "He explored all avenues before concluding that there was no easy fix."]
  }, {
    idiom: "Get the show on the road",
    level: "B1–B2 · Intermediate",
    meaning: "Put a plan or idea into action and get started",
    examples: ["Let us get the show on the road — we have a lot to cover today.", "She clapped her hands and said it was time to get the show on the road.", "We have everything we need, so let us get the show on the road."]
  }, {
    idiom: "Give the green light",
    level: "B1–B2 · Intermediate",
    meaning: "Give permission to proceed with something",
    examples: ["The board finally gave the green light to the new project.", "She was thrilled when her manager gave her the green light to proceed.", "They had to wait three weeks before getting the green light."]
  }, {
    idiom: "Going places",
    level: "B1–B2 · Intermediate",
    meaning: "Showing talent and ability that will lead to future success",
    examples: ["That young engineer is really going places.", "Everyone in the department could see she was going places.", "He is going places — ambitious, talented and incredibly dedicated."]
  }, {
    idiom: "Hold the fort",
    level: "B1–B2 · Intermediate",
    meaning: "Be responsible for something while others are away",
    examples: ["Can you hold the fort while I go to the meeting?", "She held the fort brilliantly while the manager was on leave.", "He trusted her to hold the fort and she did not disappoint."]
  }, {
    idiom: "In due course",
    level: "B1–B2 · Intermediate",
    meaning: "At the appropriate time; when the right moment comes",
    examples: ["Your application will be reviewed in due course.", "She told him not to rush — everything would happen in due course.", "In due course, the full results will be announced to everyone."]
  }, {
    idiom: "In the bag",
    level: "B1–B2 · Intermediate",
    meaning: "Certain to be achieved or won; as good as guaranteed",
    examples: ["With that performance, the award is in the bag.", "She felt confident the contract was in the bag after the final meeting.", "Three goals ahead with ten minutes left — the match is in the bag."]
  }, {
    idiom: "In the heat of the moment",
    level: "B1–B2 · Intermediate",
    meaning: "Overwhelmed by strong emotions in a particular situation",
    examples: ["He said some things in the heat of the moment that he later regretted.", "She apologised for the comment, explaining she had spoken in the heat of the moment.", "In the heat of the moment, it is easy to make the wrong decision."]
  }, {
    idiom: "Keep your finger on the pulse",
    level: "B1–B2 · Intermediate",
    meaning: "Stay constantly aware of the latest developments",
    examples: ["She keeps her finger on the pulse by reading industry news every morning.", "A good manager keeps their finger on the pulse of the team's morale.", "He stayed on top of things by keeping his finger on the pulse at all times."]
  }, {
    idiom: "Look before you leap",
    level: "B1–B2 · Intermediate",
    meaning: "Think carefully before taking a risky action",
    examples: ["She learned the hard way that you should always look before you leap.", "Look before you leap — changing careers is a big decision.", "He reminded his son to look before you leap when signing any contract."]
  }, {
    idiom: "Making headway",
    level: "B1–B2 · Intermediate",
    meaning: "Making steady progress towards a goal",
    examples: ["They are finally making headway on the construction project.", "She is making headway with her language learning and is very proud.", "Despite the challenges, the team is making headway."]
  }, {
    idiom: "Off to a flying start",
    level: "B1–B2 · Intermediate",
    meaning: "Beginning something with immediate success or great momentum",
    examples: ["The new campaign is off to a flying start with record engagement.", "She was off to a flying start in her new role, impressing everyone.", "The project got off to a flying start thanks to careful preparation."]
  }, {
    idiom: "On the rocks",
    level: "B1–B2 · Intermediate",
    meaning: "A relationship or situation that is experiencing serious problems",
    examples: ["Their business partnership has been on the rocks for months.", "She could see the relationship was on the rocks before anyone else did.", "The project is on the rocks and needs urgent attention."]
  }, {
    idiom: "Pitch black",
    level: "B1–B2 · Intermediate",
    meaning: "Completely dark; impossible to see anything at all",
    examples: ["The power cut left the entire building pitch black.", "She stepped outside and it was pitch black — no moon, no streetlights.", "The tunnel was pitch black, so they used their phone torches."]
  }, {
    idiom: "Pot calling the kettle black",
    level: "B1–B2 · Intermediate",
    meaning: "Criticising someone for a fault you also have yourself",
    examples: ["He complained about her being late — that is really the pot calling the kettle black.", "She told him he was being hypocritical — the pot calling the kettle black.", "That is a bit pot calling the kettle black, considering how often he is late himself."]
  }, {
    idiom: "Pull the plug",
    level: "B1–B2 · Intermediate",
    meaning: "Stop or terminate something, often abruptly",
    examples: ["The investors decided to pull the plug on the project.", "She finally pulled the plug on the failing app after months of losses.", "Management pulled the plug on the programme due to budget cuts."]
  }, {
    idiom: "Stand the test of time",
    level: "B1–B2 · Intermediate",
    meaning: "Continue to work well and remain relevant over a long period",
    examples: ["Classic literature has stood the test of time for centuries.", "Their friendship has stood the test of time despite years apart.", "Good design always stands the test of time."]
  }, {
    idiom: "Take each day as it comes",
    level: "B1–B2 · Intermediate",
    meaning: "Deal with things as they happen rather than worrying in advance",
    examples: ["She tries to take each day as it comes rather than overthinking the future.", "He could not predict the outcome, so he decided to take each day as it comes.", "Take each day as it comes and do not waste energy worrying about things you cannot control."]
  }, {
    idiom: "The moment of truth",
    level: "B1–B2 · Intermediate",
    meaning: "The critical moment when an important decision must be made",
    examples: ["The moment of truth arrived when they had to present their findings to the board.", "She took a deep breath — it was the moment of truth.", "After months of preparation, the moment of truth had finally arrived."]
  }, {
    idiom: "Tickled pink",
    level: "B1–B2 · Intermediate",
    meaning: "Very pleased, thrilled or delighted about something",
    examples: ["She was tickled pink when she received the unexpected gift.", "He was absolutely tickled pink to be invited to the ceremony.", "The team was tickled pink when they heard the news."]
  }, {
    idiom: "Tricks of the trade",
    level: "B1–B2 · Intermediate",
    meaning: "Clever or expert techniques known by experienced practitioners",
    examples: ["She learned all the tricks of the trade from her experienced colleagues.", "After five years in the industry, he knew every trick of the trade.", "Knowing the tricks of the trade can make a huge difference to your efficiency."]
  }, {
    idiom: "Up for grabs",
    level: "B1–B2 · Intermediate",
    meaning: "Available for anyone to take or win",
    examples: ["Three positions in the team are up for grabs.", "The title is still up for grabs with one match remaining.", "Now that she has left, her role is up for grabs."]
  }, {
    idiom: "Work out the kinks",
    level: "B1–B2 · Intermediate",
    meaning: "Solve the small problems in a plan, system or process",
    examples: ["They spent a week working out the kinks before the official launch.", "Every new system needs time to work out the kinks.", "She worked out the kinks in her presentation before the big day."]
  }, {
    idiom: "You scratch my back and I scratch yours",
    level: "B1–B2 · Intermediate",
    meaning: "If you help me, I will help you in return",
    examples: ["In this industry, it is very much you scratch my back and I scratch yours.", "She knew the arrangement was based on you scratch my back and I scratch yours.", "He helped her out knowing that you scratch my back and I scratch yours."]
  }, {
    idiom: "Ahead of the curve",
    level: "B1–B2 · Intermediate",
    meaning: "More advanced or innovative than others in the same field",
    examples: ["This company is consistently ahead of the curve when it comes to technology.", "She has always been ahead of the curve in her thinking.", "Staying ahead of the curve requires constant learning and adaptation."]
  }, {
    idiom: "On the same wavelength",
    level: "B1–B2 · Intermediate",
    meaning: "Sharing the same ideas, feelings or way of thinking as another",
    examples: ["They work brilliantly together because they are always on the same wavelength.", "She felt immediately on the same wavelength when they first met.", "It is rare to find a colleague who is truly on the same wavelength."]
  }, {
    idiom: "Get the ball rolling",
    level: "B1–B2 · Intermediate",
    meaning: "Start a process or activity and get things moving",
    examples: ["Someone needs to get the ball rolling — let us begin with introductions.", "She got the ball rolling by sending the first draft to everyone.", "He decided to get the ball rolling with a brief team meeting."]
  }, {
    idiom: "Hit the ground running",
    level: "B1–B2 · Intermediate",
    meaning: "Start something quickly and with great energy",
    examples: ["She was hired because the company needed someone who could hit the ground running.", "He hit the ground running on day one and impressed the whole team.", "We need someone who can hit the ground running without much training."]
  }, {
    idiom: "Back to square one",
    level: "B1–B2 · Intermediate",
    meaning: "Return to the very beginning after a plan has failed",
    examples: ["The deal fell apart and it was back to square one.", "After weeks of work, the rejected proposal sent them back to square one.", "She took a deep breath and went back to square one with a clear head."]
  }, {
    idiom: "Go the extra mile",
    level: "B1–B2 · Intermediate",
    meaning: "Put in more effort than is expected or required",
    examples: ["She always goes the extra mile to ensure her students succeed.", "He went the extra mile by staying late to help his colleague finish.", "Going the extra mile is what separates good service from great service."]
  }, {
    idiom: "Cut to the chase",
    level: "B1–B2 · Intermediate",
    meaning: "Get directly to the point without wasting time",
    examples: ["Let us cut to the chase — are you interested in the position or not?", "She always cuts to the chase in meetings, which saves everyone time.", "He asked her to cut to the chase and tell him the result."]
  }, {
    idiom: "Touch base",
    level: "B1–B2 · Intermediate",
    meaning: "Make brief contact with someone to check in or share an update",
    examples: ["Let us touch base next week to see how things are progressing.", "She touched base with all her clients at the end of every month.", "He wanted to touch base before the deadline to make sure everything was on track."]
  }, {
    idiom: "Read the room",
    level: "B1–B2 · Intermediate",
    meaning: "Correctly understand the mood or feelings of the people around you",
    examples: ["A good presenter knows how to read the room and adjust accordingly.", "She read the room immediately and changed her tone.", "He failed to read the room and kept the joke going far too long."]
  }, {
    idiom: "Not letting grass grow under your feet",
    level: "B1–B2 · Intermediate",
    meaning: "Not wasting time; getting things done without delay",
    examples: ["She never lets grass grow under her feet — the report was done by noon.", "He is the kind of person who never lets grass grow under his feet.", "She had already lined up three interviews before her notice period was even over — she never lets grass grow under her feet."]
  }, {
    idiom: "Out of time",
    level: "B1–B2 · Intermediate",
    meaning: "Having no time left; a set deadline has been reached",
    examples: ["I am afraid we are out of time — we will have to continue this tomorrow.", "He ran out of time before he could finish the last section of the exam.", "Out of time and out of options, she submitted what she had."]
  }],
  Advanced: [{
    idiom: "Bite the bullet",
    level: "C1 · Advanced",
    meaning: "To endure a painful or difficult situation because it is unavoidable or necessary.",
    examples: ["I hate going to the dentist, but I just need to bite the bullet and book an appointment.", "After months of delay, the team finally bit the bullet and rewrote the entire codebase.", "She bit the bullet and had the difficult conversation she had been putting off for weeks."]
  }, {
    idiom: "Burn your bridges",
    level: "C1 · Advanced",
    meaning: "To permanently damage or destroy a relationship through your actions, making any return impossible.",
    examples: ["She left the job professionally — no need to burn bridges in a small industry.", "He said some harsh things in his resignation letter and really burned his bridges.", "Think carefully before you respond — you don't want to burn bridges with your biggest client."]
  }, {
    idiom: "Throw someone under the bus",
    level: "C1 · Advanced",
    meaning: "To blame or sacrifice another person in order to protect yourself, often unfairly.",
    examples: ["When the project failed, he threw his colleague under the bus rather than accepting shared responsibility.", "She felt betrayed after her manager threw her under the bus in front of the client.", "Don't throw your teammates under the bus — it destroys trust and reflects badly on everyone."]
  }, {
    idiom: "Walk on eggshells",
    level: "C1 · Advanced",
    meaning: "To be extremely careful about what you say or do to avoid upsetting someone.",
    examples: ["Everyone walks on eggshells around the boss when he's in a bad mood.", "She felt like she was always walking on eggshells in that relationship.", "The team walked on eggshells during the audit, careful not to say anything that could cause a problem."]
  }, {
    idiom: "Move the goalposts",
    level: "C1 · Advanced",
    meaning: "To change the rules or requirements unfairly after something has already started, making it harder to succeed.",
    examples: ["Every time we met a target, they moved the goalposts — it was impossible to win.", "The client kept moving the goalposts on what they wanted from the design.", "Stop moving the goalposts — we agreed on those terms last week."]
  }, {
    idiom: "Pick up the slack",
    level: "C1 · Advanced",
    meaning: "To do the work that others are not doing, often to compensate for someone's absence or lack of effort.",
    examples: ["With two people out sick, the rest of the team had to pick up the slack.", "She always picks up the slack without complaining — a true team player.", "When the lead developer quit, everyone scrambled to pick up the slack."]
  }, {
    idiom: "Back to the drawing board",
    level: "C1 · Advanced",
    meaning: "To completely abandon a failed plan and start again from scratch with a fresh approach.",
    examples: ["The client hated the concept, so it's back to the drawing board.", "After the product launch flopped, the team went back to the drawing board.", "The first design didn't work at all — back to the drawing board we go."]
  }, {
    idiom: "Have skin in the game",
    level: "C1 · Advanced",
    meaning: "To have a personal investment or stake in an outcome — to have something real to lose or gain.",
    examples: ["Investors trust her because she has skin in the game — her own money is on the line.", "The problem is that the consultants don't have skin in the game — they just advise and leave.", "When you have skin in the game, your decisions become a lot more careful."]
  }, {
    idiom: "Pull strings",
    level: "C1 · Advanced",
    meaning: "To use personal influence or connections to get something done, often bypassing the normal process.",
    examples: ["He got the job by pulling strings — his uncle was on the board.", "She doesn't like to pull strings, even when she could easily get things done that way.", "Do you think you can pull some strings to get us a table at that restaurant tonight?"]
  }, {
    idiom: "Turn the tables",
    level: "C1 · Advanced",
    meaning: "To completely reverse a situation so that the person who was losing suddenly gains the advantage.",
    examples: ["The underdog team completely turned the tables in the second half.", "She turned the tables on her critics by outperforming every single target.", "Just when they thought they had won the negotiation, the other side turned the tables."]
  }, {
    idiom: "Add insult to injury",
    level: "C1 · Advanced",
    meaning: "Make an already bad situation even worse with another problem",
    examples: ["They cancelled her booking and then, adding insult to injury, charged a cancellation fee.", "To add insult to injury, the replacement they sent was also faulty.", "He was already exhausted, and then, to add insult to injury, he missed the last bus."]
  }, {
    idiom: "Back to the drawing board",
    level: "C1 · Advanced",
    meaning: "Completely abandon a failed plan and start fresh with new ideas",
    examples: ["The prototype failed every test, so it was back to the drawing board.", "She scrapped the strategy entirely and went back to the drawing board.", "Back to the drawing board — none of their original assumptions had held up."]
  }, {
    idiom: "Throw someone under the bus",
    level: "C1 · Advanced",
    meaning: "Blame or sacrifice another person to protect yourself",
    examples: ["He threw his colleague under the bus to avoid taking responsibility.", "She refused to throw anyone under the bus, even under pressure.", "Throwing a teammate under the bus destroys trust instantly."]
  }, {
    idiom: "Walk on eggshells",
    level: "C1 · Advanced",
    meaning: "Be extremely careful to avoid upsetting someone",
    examples: ["Everyone walks on eggshells around him after his outburst last week.", "She has been walking on eggshells since the difficult conversation with her manager.", "Working in that environment meant constantly walking on eggshells."]
  }, {
    idiom: "Move the goalposts",
    level: "C1 · Advanced",
    meaning: "Change the rules or requirements unfairly after something has started",
    examples: ["Every time they meet the target, the client moves the goalposts.", "She was frustrated that the management kept moving the goalposts.", "Moving the goalposts after the work is done is deeply unfair."]
  }, {
    idiom: "Pick up the slack",
    level: "C1 · Advanced",
    meaning: "Do work that others are failing to do",
    examples: ["When he went on leave, the rest of the team had to pick up the slack.", "She is always willing to pick up the slack without complaining.", "Someone needs to pick up the slack while the team is short-staffed."]
  }, {
    idiom: "Have skin in the game",
    level: "C1 · Advanced",
    meaning: "Have a genuine personal stake in an outcome",
    examples: ["As a shareholder, she has real skin in the game.", "Investors need to have skin in the game if they want others to take them seriously.", "He has skin in the game, which is why he is working so hard on the outcome."]
  }, {
    idiom: "Pull strings",
    level: "C1 · Advanced",
    meaning: "Use personal influence or connections to get something done",
    examples: ["She pulled strings to get her nephew an interview at the company.", "He did not want to pull strings — he wanted to earn the position on merit.", "It is not what you know but who you know — she pulled a few strings and got the meeting."]
  }, {
    idiom: "Turn the tables",
    level: "C1 · Advanced",
    meaning: "Completely reverse a situation so the advantage changes sides",
    examples: ["Against all odds, they managed to turn the tables in the second half.", "She turned the tables on her critics by delivering results beyond all expectations.", "He calmly turned the tables during the debate with one well-timed fact."]
  }, {
    idiom: "Burn your bridges",
    level: "C1 · Advanced",
    meaning: "Permanently destroy a relationship so you can never go back",
    examples: ["She left the company professionally, careful not to burn her bridges.", "He burned his bridges with that angry email and could never return.", "Always leave on good terms — you never know when burning bridges will cost you."]
  }, {
    idiom: "Bring home the bacon",
    level: "C1 · Advanced",
    meaning: "Earn the income that the family depends on",
    examples: ["After he lost his job, she brought home the bacon for the whole family.", "Both partners bring home the bacon in their household.", "Her promotion meant she was now the one bringing home the bacon."]
  }, {
    idiom: "Butter someone up",
    level: "C1 · Advanced",
    meaning: "Excessively flatter someone, usually because you want something",
    examples: ["He spent ten minutes buttering her up before asking for a favour.", "She could tell he was buttering her up before making the request.", "Stop buttering me up and just ask what you want."]
  }, {
    idiom: "Cash cow",
    level: "C1 · Advanced",
    meaning: "A reliable and steady source of income or profit",
    examples: ["Their subscription service became the company's biggest cash cow.", "The original product was a cash cow that funded all their new ventures.", "Losing the cash cow would be a serious blow to the business."]
  }, {
    idiom: "Crying wolf",
    level: "C1 · Advanced",
    meaning: "Raise false alarms so often that real warnings are not believed",
    examples: ["He had cried wolf so many times that nobody took the warning seriously.", "If you keep crying wolf, people will stop listening when it really matters.", "She had a reputation for crying wolf, which made it hard to be believed."]
  }, {
    idiom: "Devil's advocate",
    level: "C1 · Advanced",
    meaning: "Someone who argues against a position to test its strength",
    examples: ["Let me play devil's advocate for a moment — what if the opposite is true?", "She played devil's advocate to ensure the team had considered every angle.", "He was just playing devil's advocate; he did not necessarily disagree."]
  }, {
    idiom: "Don't beat a dead horse",
    level: "C1 · Advanced",
    meaning: "Stop wasting time on something that cannot be changed",
    examples: ["The decision is final — stop beating a dead horse.", "She moved on from the failed project; there was no point beating a dead horse.", "He kept raising the issue, but everyone else felt he was beating a dead horse."]
  }, {
    idiom: "Drop the ball",
    level: "C1 · Advanced",
    meaning: "Fail to do something you are responsible for at a critical moment",
    examples: ["He dropped the ball on the client presentation and damaged the relationship.", "She apologised for dropping the ball on the deadline.", "Someone dropped the ball and the whole project suffered for it."]
  }, {
    idiom: "Face the music",
    level: "C1 · Advanced",
    meaning: "Accept the consequences of your actions, however unpleasant",
    examples: ["After the mistake, he had no choice but to face the music.", "She took responsibility and faced the music at the board meeting.", "Eventually, you have to face the music — avoiding it only makes things worse."]
  }, {
    idiom: "Fly on the wall",
    level: "C1 · Advanced",
    meaning: "An unnoticed observer of a private or secret situation",
    examples: ["She would love to be a fly on the wall during that conversation.", "I wish I could be a fly on the wall in their strategy meetings.", "As a fly on the wall, he learned more in ten minutes than in months of reports."]
  }, {
    idiom: "Get off on the wrong foot",
    level: "C1 · Advanced",
    meaning: "Start something badly or make a poor first impression",
    examples: ["She got off on the wrong foot by arriving late to the first meeting.", "He and his new manager got off on the wrong foot right away.", "Getting off on the wrong foot can be difficult to recover from."]
  }, {
    idiom: "Get out of hand",
    level: "C1 · Advanced",
    meaning: "Lose control; become impossible to manage or contain",
    examples: ["The situation got out of hand before anyone could step in.", "The argument got out of hand and things were said that could not be taken back.", "She realised the problem had gotten out of hand and called for help."]
  }, {
    idiom: "Give someone the cold shoulder",
    level: "C1 · Advanced",
    meaning: "Deliberately ignore or be unfriendly towards someone",
    examples: ["After the disagreement, she gave him the cold shoulder for a week.", "He could not understand why she was giving him the cold shoulder.", "Giving a colleague the cold shoulder creates a toxic work environment."]
  }, {
    idiom: "Go belly up",
    level: "C1 · Advanced",
    meaning: "Fail completely and suddenly, especially a business",
    examples: ["The restaurant went belly up after just six months.", "Three of their competitors went belly up during the economic downturn.", "If sales do not improve, the company could go belly up by next quarter."]
  }, {
    idiom: "Go out on a limb",
    level: "C1 · Advanced",
    meaning: "Take a risk by saying or doing something others might not support",
    examples: ["She went out on a limb and recommended the unconventional approach.", "He went out on a limb to support the controversial proposal.", "Going out on a limb paid off when her prediction turned out to be correct."]
  }, {
    idiom: "Hot potato",
    level: "C1 · Advanced",
    meaning: "A controversial issue that nobody wants to handle or be responsible for",
    examples: ["The disciplinary matter became a real political hot potato.", "Nobody wanted to take on the hot potato of reforming the outdated policy.", "The proposal quickly became a hot potato and was passed around without resolution."]
  }, {
    idiom: "In over your head",
    level: "C1 · Advanced",
    meaning: "Involved in something far beyond your ability or experience",
    examples: ["She realised she was in over her head and asked for support.", "He took on too much and ended up in over his head.", "Taking on three complex projects at once left him completely in over his head."]
  }, {
    idiom: "Jump through hoops",
    level: "C1 · Advanced",
    meaning: "Have to do many difficult or time-consuming things to achieve a goal",
    examples: ["They made her jump through hoops before even considering her application.", "He jumped through countless hoops to get the licence approved.", "She was frustrated at having to jump through hoops for something so straightforward."]
  }, {
    idiom: "Kick the bucket",
    level: "C1 · Advanced",
    meaning: "Die — used informally or with dark humour",
    examples: ["Old traditions do not kick the bucket easily; they linger for decades.", "That ancient machine finally kicked the bucket after thirty years of service.", "He joked that the project would kick the bucket long before anyone noticed."]
  }, {
    idiom: "Let someone off the hook",
    level: "C1 · Advanced",
    meaning: "Allow someone to escape the consequences of their actions",
    examples: ["She let him off the hook this time but made clear there would be no second chance.", "The judge decided to let the first-time offender off the hook.", "Do not let him off the hook just because he apologised."]
  }, {
    idiom: "On thin ice",
    level: "C1 · Advanced",
    meaning: "In a risky situation where a small mistake could cause serious trouble",
    examples: ["He knew he was on thin ice after missing two deadlines.", "She is on thin ice with the management after last week's incident.", "Tread carefully — you are on thin ice and one more error could be costly."]
  }, {
    idiom: "Open a can of worms",
    level: "C1 · Advanced",
    meaning: "Do something that creates far more problems than it solves",
    examples: ["Raising that issue at the meeting opened a real can of worms.", "She decided not to bring it up, knowing it would open a can of worms.", "Changing that one policy opened a can of worms they were not prepared for."]
  }, {
    idiom: "Pass the buck",
    level: "C1 · Advanced",
    meaning: "Transfer responsibility for a problem to someone else",
    examples: ["He passed the buck to his assistant rather than dealing with it himself.", "She refused to pass the buck and took full ownership of the problem.", "In that team, people were constantly passing the buck instead of acting."]
  }, {
    idiom: "Play hardball",
    level: "C1 · Advanced",
    meaning: "Act very aggressively and ruthlessly to achieve what you want",
    examples: ["The union decided to play hardball in the wage negotiations.", "She played hardball and refused to lower her asking price.", "When he realised they were not taking him seriously, he started playing hardball."]
  }, {
    idiom: "Put your foot in your mouth",
    level: "C1 · Advanced",
    meaning: "Say something embarrassing or inappropriate without realising",
    examples: ["He put his foot in his mouth by mentioning the redundancies in front of the affected team.", "She put her foot in her mouth during the dinner and spent the rest of the evening apologising.", "He had a habit of putting his foot in his mouth at the worst possible moments."]
  }, {
    idiom: "Rock the boat",
    level: "C1 · Advanced",
    meaning: "Cause trouble or upset by challenging an existing situation",
    examples: ["Nobody wanted to rock the boat, so the problem went unaddressed for months.", "She was not afraid to rock the boat if she believed something was unjust.", "He told her not to rock the boat, but she felt the issue was too important to ignore."]
  }, {
    idiom: "Run out of steam",
    level: "C1 · Advanced",
    meaning: "Lose the energy, motivation or enthusiasm to continue",
    examples: ["The campaign ran out of steam after the initial buzz faded.", "She ran out of steam in the final chapter and needed a long break.", "He ran out of steam after three consecutive all-nighters."]
  }, {
    idiom: "Shoot the messenger",
    level: "C1 · Advanced",
    meaning: "Blame the person who brings bad news for the bad news itself",
    examples: ["Do not shoot the messenger — she is just reporting what the data shows.", "The team shot the messenger instead of addressing the underlying problem.", "He felt unfairly targeted, as though they were shooting the messenger."]
  }, {
    idiom: "Sit tight",
    level: "C1 · Advanced",
    meaning: "Wait patiently without taking any action",
    examples: ["Sit tight — we will have more information by Friday.", "She told the team to sit tight while she spoke with the director.", "He was anxious, but the lawyer told him to sit tight."]
  }, {
    idiom: "Steal someone's thunder",
    level: "C1 · Advanced",
    meaning: "Take credit or attention that rightfully belongs to someone else",
    examples: ["He announced the news before she could, completely stealing her thunder.", "She felt her manager had stolen her thunder by presenting her idea as his own.", "The unexpected announcement stole the thunder from the planned celebration."]
  }, {
    idiom: "Sweep under the rug",
    level: "C1 · Advanced",
    meaning: "Hide or ignore a problem rather than dealing with it openly",
    examples: ["The issue was quietly swept under the rug instead of being investigated.", "You cannot keep sweeping problems under the rug — they always resurface.", "She refused to sweep the incident under the rug and insisted on an inquiry."]
  }, {
    idiom: "Take the bull by the horns",
    level: "C1 · Advanced",
    meaning: "Deal with a difficult situation directly and with confidence",
    examples: ["She took the bull by the horns and confronted the problem head-on.", "He decided to take the bull by the horns and call the client directly.", "If you want things to change, sometimes you have to take the bull by the horns."]
  }, {
    idiom: "Too many cooks spoil the broth",
    level: "C1 · Advanced",
    meaning: "Having too many people involved in something causes problems",
    examples: ["The project struggled because too many cooks spoil the broth.", "She streamlined the team, knowing that too many cooks spoil the broth.", "With eight people reviewing every paragraph, it was a case of too many cooks spoiling the broth."]
  }, {
    idiom: "Up the ante",
    level: "C1 · Advanced",
    meaning: "Increase the stakes, demands or risks in a situation",
    examples: ["He upped the ante by threatening to take the dispute to court.", "She upped the ante in the negotiation by adding another condition.", "As the competition grew fiercer, both sides continued to up the ante."]
  }, {
    idiom: "Whistle in the dark",
    level: "C1 · Advanced",
    meaning: "Say something brave or confident to hide fear or uncertainty",
    examples: ["His confident tone was just whistling in the dark — he had no real plan.", "She suspected he was whistling in the dark when he said everything was fine.", "Whistling in the dark may comfort you, but it does not solve the problem."]
  }, {
    idiom: "A storm in a teacup",
    level: "C1 · Advanced",
    meaning: "A big fuss or controversy about something that is actually trivial",
    examples: ["The argument turned out to be a complete storm in a teacup.", "In hindsight, the whole debate was a storm in a teacup.", "She kept things in perspective and recognised it was just a storm in a teacup."]
  }, {
    idiom: "All smoke and mirrors",
    level: "C1 · Advanced",
    meaning: "Something designed to deceive or create a false impression",
    examples: ["The impressive launch was all smoke and mirrors — the product was not ready.", "She could see that the presentation was all smoke and mirrors.", "Do not be fooled by the statistics — it is all smoke and mirrors."]
  }, {
    idiom: "At loggerheads",
    level: "C1 · Advanced",
    meaning: "In strong and continuing disagreement; unable to reach agreement",
    examples: ["The two departments have been at loggerheads for months.", "She and her co-founder were at loggerheads over the direction of the company.", "The unions and management remain at loggerheads after three rounds of talks."]
  }, {
    idiom: "Bend over backwards",
    level: "C1 · Advanced",
    meaning: "Do everything possible to help or please someone",
    examples: ["They bent over backwards to accommodate her unusual schedule.", "She bent over backwards to make sure her guests felt comfortable.", "He bent over backwards to meet the unreasonable demands of the client."]
  }, {
    idiom: "Bite the dust",
    level: "C1 · Advanced",
    meaning: "Fail completely; come to an end; die",
    examples: ["Three of their rival businesses have bitten the dust this year.", "The app bit the dust after struggling to retain users.", "The proposal bit the dust after failing to get enough votes."]
  }, {
    idiom: "Blow hot and cold",
    level: "C1 · Advanced",
    meaning: "Keep changing your opinion or feelings about something",
    examples: ["He kept blowing hot and cold about whether to take the job.", "She is blowing hot and cold on the deal, which is making everyone nervous.", "Stop blowing hot and cold — just make a decision and stick to it."]
  }, {
    idiom: "Burn the candle at both ends",
    level: "C1 · Advanced",
    meaning: "Exhaust yourself by working too hard both day and night",
    examples: ["She had been burning the candle at both ends and her health was suffering.", "You cannot keep burning the candle at both ends without consequences.", "He burned the candle at both ends all month to meet the launch deadline."]
  }, {
    idiom: "Change of heart",
    level: "C1 · Advanced",
    meaning: "A change in feelings or attitude towards something",
    examples: ["She had a change of heart and decided to stay at the company.", "After thinking it over, he had a complete change of heart about the move.", "A change of heart at the last minute saved the project from being cancelled."]
  }, {
    idiom: "Close ranks",
    level: "C1 · Advanced",
    meaning: "Stand together in solidarity when faced with a threat or criticism",
    examples: ["The team closed ranks when the company came under public scrutiny.", "Under attack, the board closed ranks and refused to comment.", "She was moved by the way her colleagues closed ranks to support her."]
  }, {
    idiom: "Dig your own grave",
    level: "C1 · Advanced",
    meaning: "Do something that will cause your own failure or downfall",
    examples: ["He dug his own grave by refusing to listen to the feedback.", "She warned him he was digging his own grave with that decision.", "Antagonising your best customers is a surefire way to dig your own grave."]
  }, {
    idiom: "Draw a line in the sand",
    level: "C1 · Advanced",
    meaning: "Set a firm limit beyond which you will not go",
    examples: ["She drew a line in the sand and made clear she would not accept less.", "It was time to draw a line in the sand and refuse to continue without better terms.", "He drew a line in the sand on the issue of working weekends."]
  }, {
    idiom: "Eat humble pie",
    level: "C1 · Advanced",
    meaning: "Accept humiliation and admit that you were completely wrong",
    examples: ["After his overconfident prediction proved wrong, he had to eat humble pie.", "She ate humble pie in front of the entire team and apologised sincerely.", "A great leader knows when to eat humble pie."]
  }, {
    idiom: "Fall on deaf ears",
    level: "C1 · Advanced",
    meaning: "What you say is ignored by the person you are speaking to",
    examples: ["Her warnings fell on deaf ears and the mistake was made anyway.", "His suggestions consistently fell on deaf ears in that organisation.", "The feedback fell on deaf ears — nothing changed."]
  }, {
    idiom: "Get away with murder",
    level: "C1 · Advanced",
    meaning: "Do something very wrong without being punished for it",
    examples: ["He feels he can get away with murder because of his position.", "She was shocked at how much the team got away with under the old manager.", "In that culture, people were getting away with murder and nobody spoke up."]
  }, {
    idiom: "Get to the bottom of something",
    level: "C1 · Advanced",
    meaning: "Find out the true cause or full truth about something",
    examples: ["She was determined to get to the bottom of why sales had dropped.", "He promised to get to the bottom of the complaint as quickly as possible.", "They launched an investigation to get to the bottom of the data breach."]
  }, {
    idiom: "Give an inch, take a mile",
    level: "C1 · Advanced",
    meaning: "If you give someone a little, they will want much more",
    examples: ["She gave him a small extension and then he asked for three more — give an inch, take a mile.", "With some people, if you give an inch they take a mile.", "The negotiation proved that give an inch and they will take a mile."]
  }, {
    idiom: "Have an ace up your sleeve",
    level: "C1 · Advanced",
    meaning: "Have a secret advantage ready to use when needed",
    examples: ["She walked into the negotiation knowing she had an ace up her sleeve.", "He was calm throughout because he had an ace up his sleeve.", "Always have an ace up your sleeve before entering a difficult meeting."]
  }, {
    idiom: "Hit below the belt",
    level: "C1 · Advanced",
    meaning: "Do or say something unfair, unkind or against the rules",
    examples: ["That comment about his family was hitting well below the belt.", "She felt he had hit below the belt by bringing her personal life into the argument.", "Criticising her appearance in a professional setting was hitting below the belt."]
  }, {
    idiom: "Keep something under wraps",
    level: "C1 · Advanced",
    meaning: "Keep something secret and not reveal it to others",
    examples: ["The new product has been kept under wraps for months.", "She kept her plans under wraps until everything was finalised.", "They kept the acquisition under wraps to avoid disrupting the market."]
  }, {
    idiom: "Knock it out of the park",
    level: "C1 · Advanced",
    meaning: "Perform exceptionally well; achieve a great success",
    examples: ["She knocked it out of the park with that presentation.", "The team knocked it out of the park and exceeded every target.", "He knew he had knocked it out of the park when he saw their reactions."]
  }, {
    idiom: "Lay your cards on the table",
    level: "C1 · Advanced",
    meaning: "Be completely open and honest about your intentions",
    examples: ["She laid her cards on the table and told him exactly what she wanted.", "It is time to lay your cards on the table and have an honest conversation.", "He appreciated that she laid her cards on the table from the very beginning."]
  }, {
    idiom: "Let sleeping dogs lie",
    level: "C1 · Advanced",
    meaning: "Leave a situation undisturbed to avoid creating new problems",
    examples: ["She decided to let sleeping dogs lie rather than reopen the old argument.", "Sometimes the best strategy is to let sleeping dogs lie.", "He wanted to raise the issue again, but she advised him to let sleeping dogs lie."]
  }, {
    idiom: "Make a mountain out of a molehill",
    level: "C1 · Advanced",
    meaning: "Exaggerate the importance or difficulty of a small problem",
    examples: ["She is making a mountain out of a molehill — it is a very minor issue.", "He admitted he had been making a mountain out of a molehill.", "Do not make a mountain out of a molehill; it is just a small adjustment."]
  }, {
    idiom: "Nail in the coffin",
    level: "C1 · Advanced",
    meaning: "Something that contributes to the final failure of something",
    examples: ["The poor review was another nail in the coffin for the struggling brand.", "That decision was the final nail in the coffin for the project.", "Losing their biggest client was the nail in the coffin for the start-up."]
  }, {
    idiom: "Open Pandora's box",
    level: "C1 · Advanced",
    meaning: "Do something that causes many unexpected and serious problems",
    examples: ["Raising that question opened Pandora's box and led to weeks of conflict.", "She warned him that publishing the report would open Pandora's box.", "Changing that one policy opened Pandora's box across the whole organisation."]
  }, {
    idiom: "Paint yourself into a corner",
    level: "C1 · Advanced",
    meaning: "Create a situation where all your options are bad",
    examples: ["By making so many promises, he painted himself into a corner.", "She realised she had painted herself into a corner with her early commitments.", "Contradicting yourself in public is a good way to paint yourself into a corner."]
  }, {
    idiom: "Read between the lines",
    level: "C1 · Advanced",
    meaning: "Understand the hidden meaning behind what someone says or writes",
    examples: ["If you read between the lines, it is clear she is unhappy with the decision.", "He read between the lines of the email and realised something was wrong.", "A skilled negotiator knows how to read between the lines."]
  }, {
    idiom: "Smell a rat",
    level: "C1 · Advanced",
    meaning: "Suspect that something dishonest or wrong is happening",
    examples: ["She smelled a rat when the numbers did not add up.", "He smelled a rat as soon as the story kept changing.", "Something about the deal made her smell a rat."]
  }, {
    idiom: "Stab someone in the back",
    level: "C1 · Advanced",
    meaning: "Betray someone who trusted you completely",
    examples: ["He stabbed her in the back by taking credit for her work.", "She felt completely betrayed — he had stabbed her in the back.", "Stabbing a loyal colleague in the back is unforgivable."]
  }, {
    idiom: "Take something with a pinch of salt",
    level: "C1 · Advanced",
    meaning: "Be sceptical and not fully believe what someone says",
    examples: ["Take that estimate with a pinch of salt — it seems too optimistic.", "She learned to take media headlines with a pinch of salt.", "He takes everything that consultant says with a pinch of salt."]
  }, {
    idiom: "The last nail in the coffin",
    level: "C1 · Advanced",
    meaning: "The final action that completely destroys something",
    examples: ["The failed product launch was the last nail in the coffin for the company.", "Her resignation was the last nail in the coffin for the struggling project.", "The bad press was the last nail in the coffin for his political career."]
  }, {
    idiom: "Throw caution to the wind",
    level: "C1 · Advanced",
    meaning: "Do something risky without worrying about consequences",
    examples: ["She threw caution to the wind and quit her job to start her own business.", "He threw caution to the wind and made the investment without further research.", "Sometimes you have to throw caution to the wind and just go for it."]
  }, {
    idiom: "Turn a blind eye",
    level: "C1 · Advanced",
    meaning: "Pretend not to notice something you know is happening",
    examples: ["The manager turned a blind eye to the team's rule-bending for years.", "She could no longer turn a blind eye to the unethical behaviour.", "Turning a blind eye to problems only allows them to grow."]
  }, {
    idiom: "Two sides to every story",
    level: "C1 · Advanced",
    meaning: "Every situation has different perspectives worth considering",
    examples: ["Before you judge, remember there are two sides to every story.", "She listened carefully, knowing there are always two sides to every story.", "Good journalists always remember there are two sides to every story."]
  }, {
    idiom: "Upset the apple cart",
    level: "C1 · Advanced",
    meaning: "Disrupt a smoothly running situation or ruin a plan",
    examples: ["His unexpected announcement upset the apple cart at the annual meeting.", "She was reluctant to upset the apple cart but knew change was necessary.", "One difficult team member can upset the apple cart for everyone."]
  }, {
    idiom: "Warts and all",
    level: "C1 · Advanced",
    meaning: "Including all the bad or unpleasant aspects, not just the good",
    examples: ["She accepted him warts and all, which is why their relationship worked.", "The documentary showed the company warts and all — profits and failures.", "A true friend accepts you warts and all."]
  }, {
    idiom: "Weather the storm",
    level: "C1 · Advanced",
    meaning: "Survive or endure a difficult period or situation",
    examples: ["The company managed to weather the storm and emerged stronger.", "She weathered the storm with quiet determination and came out the other side.", "Not everyone is able to weather the storm, but she did it with grace."]
  }, {
    idiom: "When pigs fly",
    level: "C1 · Advanced",
    meaning: "Something that will never happen",
    examples: ["He will apologise when pigs fly.", "She said she would enjoy that meeting when pigs fly.", "The two rivals will cooperate when pigs fly."]
  }, {
    idiom: "Bury the hatchet",
    level: "C1 · Advanced",
    meaning: "Stop arguing and make peace with someone after a conflict",
    examples: ["They finally buried the hatchet after years of tension.", "She was willing to bury the hatchet if he was prepared to meet her halfway.", "Burying the hatchet was the best thing they could have done for the team."]
  }, {
    idiom: "Caught between a rock and a hard place",
    level: "C1 · Advanced",
    meaning: "Facing a choice where all options are equally unpleasant",
    examples: ["She was caught between a rock and a hard place — neither option was good.", "He was caught between a rock and a hard place with no easy solution.", "Every choice they faced left them caught between a rock and a hard place."]
  }, {
    idiom: "Barring a miracle",
    level: "C1 · Advanced",
    meaning: "Unless something extraordinary and unexpected happens",
    examples: ["Barring a miracle, they will not meet the deadline.", "She admitted that, barring a miracle, the project would have to be scaled back.", "Barring a miracle, the company is unlikely to recover this quarter."]
  }, {
    idiom: "Blue sky thinking",
    level: "C1 · Advanced",
    meaning: "Creative and unrestricted thinking not limited by current realities",
    examples: ["The session was dedicated to blue sky thinking — no idea was too wild.", "She encouraged the team to engage in some blue sky thinking before the strategy meeting.", "Sometimes blue sky thinking leads to the most practical solutions."]
  }, {
    idiom: "Born with a silver spoon",
    level: "C1 · Advanced",
    meaning: "Born into a wealthy and privileged family",
    examples: ["He was born with a silver spoon and never had to worry about money.", "She worked her way up from nothing — she was not born with a silver spoon.", "Being born with a silver spoon does not guarantee success in life."]
  }, {
    idiom: "Cook the books",
    level: "C1 · Advanced",
    meaning: "Falsify financial records to conceal wrongdoing or fraud",
    examples: ["The accountant had been cooking the books for years before anyone noticed.", "She refused to cook the books and resigned rather than participate in the fraud.", "Cooking the books might hide problems temporarily, but the truth always emerges."]
  }, {
    idiom: "Dead duck",
    level: "C1 · Advanced",
    meaning: "A plan or project that has failed and is not worth pursuing",
    examples: ["The proposal was a dead duck before it even reached the committee.", "She realised the initiative was a dead duck and recommended closing it down.", "Throwing more money at a dead duck only delays the inevitable."]
  }, {
    idiom: "Dead in the water",
    level: "C1 · Advanced",
    meaning: "A plan or project that has stopped working and cannot recover",
    examples: ["Without additional funding, the project is dead in the water.", "The merger talks are dead in the water after both sides walked away.", "She could see that the campaign was dead in the water and said so openly."]
  }, {
    idiom: "Dead wood",
    level: "C1 · Advanced",
    meaning: "People or things that are no longer useful or productive",
    examples: ["The restructuring was intended to remove the dead wood from the organisation.", "Not every long-serving employee is dead wood — experience has real value.", "She was tasked with identifying dead wood in the process and eliminating it."]
  }],
  Proficiency: [{
    idiom: "The elephant in the room",
    level: "C2 · Proficiency",
    meaning: "An obvious problem or uncomfortable truth that everyone is aware of but nobody wants to address.",
    examples: ["Nobody mentioned the budget cuts at the meeting — it was the elephant in the room.", "Their disagreement over strategy was the elephant in the room that threatened the entire project.", "The interviewer finally addressed the elephant in the room and asked about the gap on her CV."]
  }, {
    idiom: "Move the needle",
    level: "C2 · Proficiency",
    meaning: "To make a meaningful or noticeable difference in a situation, metric, or outcome.",
    examples: ["We've tried several campaigns, but nothing has really moved the needle on sales.", "That policy change could genuinely move the needle on public health outcomes.", "Small tweaks won't be enough — we need something bold to move the needle."]
  }, {
    idiom: "A double-edged sword",
    level: "C2 · Proficiency",
    meaning: "Something that has both significant advantages and significant disadvantages at the same time.",
    examples: ["Social media is a double-edged sword — great for connection, but damaging to mental health.", "Transparency is a double-edged sword: it builds trust but can also expose vulnerabilities.", "Working from home is a double-edged sword — more flexibility, but also more isolation."]
  }, {
    idiom: "The tip of the iceberg",
    level: "C2 · Proficiency",
    meaning: "A small, visible part of a much larger problem or issue that is mostly hidden from view.",
    examples: ["The reported fraud cases are just the tip of the iceberg — the full scale is far greater.", "The symptoms she showed were just the tip of the iceberg of a much deeper issue.", "The layoffs announced today are likely just the tip of the iceberg."]
  }, {
    idiom: "Kick the can down the road",
    level: "C2 · Proficiency",
    meaning: "To postpone dealing with a problem instead of addressing it, leaving it for later or for someone else.",
    examples: ["Politicians keep kicking the can down the road on pension reform.", "We can't keep kicking the can down the road — this issue needs a real solution now.", "The temporary fix just kicks the can down the road without solving the underlying problem."]
  }, {
    idiom: "Connect the dots",
    level: "C2 · Proficiency",
    meaning: "To understand how different pieces of information or events are related, forming a larger and clearer picture.",
    examples: ["Once you connect the dots, it's clear that all three incidents are related.", "Journalists connect the dots between obscure data points and major scandals.", "The analysis helps investors connect the dots between global events and market movements."]
  }, {
    idiom: "The devil is in the details",
    level: "C2 · Proficiency",
    meaning: "Small details that seem minor often end up causing the biggest problems if they are overlooked.",
    examples: ["The contract looked fine at first glance, but the devil is in the details.", "The project seemed straightforward, but as always, the devil is in the details.", "She reads every clause carefully because she knows the devil is in the details."]
  }, {
    idiom: "Catch-22",
    level: "C2 · Proficiency",
    meaning: "A situation where you cannot escape a problem because the only solution is blocked by the problem itself.",
    examples: ["You need experience to get a job, but need a job to get experience — a real catch-22.", "She needed the manager's signature to approve the leave, but the manager was on leave — a total catch-22.", "The regulation created a catch-22 for small businesses trying to comply."]
  }, {
    idiom: "Play devil's advocate",
    level: "C2 · Proficiency",
    meaning: "To argue for an opposing position not because you believe it, but to encourage critical thinking or debate.",
    examples: ["Let me play devil's advocate — what if the data supports the opposite conclusion?", "She played devil's advocate in the meeting to make sure the team considered every angle.", "I'm not saying I agree, but let me play devil's advocate for a moment."]
  }, {
    idiom: "Come full circle",
    level: "C2 · Proficiency",
    meaning: "To return to the original situation or starting point after a long journey, often with new understanding.",
    examples: ["After years in corporate finance, he came full circle and returned to teaching, where he started.", "The debate has come full circle — we're back to discussing the same solutions from twenty years ago.", "Her research came full circle when she realised the answer was in her very first paper."]
  }, {
    idiom: "A paradigm shift",
    level: "C2 · Proficiency",
    meaning: "A fundamental and far-reaching change in approach or underlying assumptions",
    examples: ["Her research triggered a paradigm shift in how the condition is treated.", "The new technology caused a paradigm shift in the entire publishing industry.", "We are witnessing a paradigm shift in the way we think about work and productivity."]
  }, {
    idiom: "Boil the ocean",
    level: "C2 · Proficiency",
    meaning: "Attempt something unnecessarily complex, ambitious or impossible",
    examples: ["The proposal tried to boil the ocean instead of solving one specific problem.", "She advised him not to try to boil the ocean — focus on one thing first.", "When a project tries to boil the ocean, it usually fails to achieve anything at all."]
  }, {
    idiom: "Bearing fruit",
    level: "C2 · Proficiency",
    meaning: "Beginning to produce positive results after sustained effort",
    examples: ["Years of investment in research are finally bearing fruit.", "The partnership is bearing fruit, with three successful product launches this quarter.", "Her patient and methodical approach is now bearing fruit across the whole team."]
  }, {
    idiom: "Cut from the same cloth",
    level: "C2 · Proficiency",
    meaning: "Having very similar characteristics, values or background",
    examples: ["The two founders are cut from the same cloth — both relentlessly focused on detail.", "She and her mentor are clearly cut from the same cloth.", "They were cut from the same cloth, which is why their collaboration worked so well."]
  }, {
    idiom: "Drop in the ocean",
    level: "C2 · Proficiency",
    meaning: "A very small and insufficient contribution to a much larger need",
    examples: ["The donation, though generous, was a drop in the ocean compared to what was needed.", "Her contribution felt like a drop in the ocean given the scale of the problem.", "Individual recycling is important, but it remains a drop in the ocean without systemic change."]
  }, {
    idiom: "Face the music",
    level: "C2 · Proficiency",
    meaning: "Accept fully the consequences of your actions, however uncomfortable",
    examples: ["He had avoided it long enough — it was time to face the music.", "She walked into the boardroom prepared to face the music.", "Facing the music is never easy, but it is the only way to move forward with integrity."]
  }, {
    idiom: "Fall on your sword",
    level: "C2 · Proficiency",
    meaning: "Resign or take full blame to protect your organisation or colleagues",
    examples: ["The director fell on his sword after the scandal to protect the institution.", "She refused to fall on her sword for a decision she had not made.", "Falling on your sword demonstrates integrity, but only when the fault is truly yours."]
  }, {
    idiom: "Few and far between",
    level: "C2 · Proficiency",
    meaning: "Rare; not happening or existing in sufficient quantities",
    examples: ["Honest advisors are few and far between in that industry.", "Opportunities like this are few and far between — take it seriously.", "True acts of selflessness are few and far between in competitive environments."]
  }, {
    idiom: "Fly by the seat of your pants",
    level: "C2 · Proficiency",
    meaning: "Act without planning; improvise entirely under pressure",
    examples: ["Without a script, she was flying by the seat of her pants the whole time.", "He admitted they were flying by the seat of their pants in the early days of the start-up.", "Flying by the seat of your pants occasionally works, but it is not a sustainable strategy."]
  }, {
    idiom: "Foot the bill",
    level: "C2 · Proficiency",
    meaning: "Pay for something, especially something large and expensive",
    examples: ["The company footed the bill for all the relocation costs.", "She was surprised to find that the client expected her to foot the bill.", "Who exactly is going to foot the bill for these costly reforms?"]
  }, {
    idiom: "Foregone conclusion",
    level: "C2 · Proficiency",
    meaning: "A result that seems completely certain before it is officially announced",
    examples: ["The election was widely seen as a foregone conclusion.", "Her promotion was a foregone conclusion — everyone knew it was coming.", "The verdict felt like a foregone conclusion long before the trial ended."]
  }, {
    idiom: "Get to the bottom of something",
    level: "C2 · Proficiency",
    meaning: "Discover the true cause or full explanation of a complex problem",
    examples: ["She vowed to get to the bottom of the discrepancy in the financial records.", "The committee was formed specifically to get to the bottom of the scandal.", "He methodically worked to get to the bottom of the recurring technical failure."]
  }, {
    idiom: "Glass ceiling",
    level: "C2 · Proficiency",
    meaning: "An invisible barrier that prevents certain people from advancing further",
    examples: ["She fought throughout her career to shatter the glass ceiling in her industry.", "The glass ceiling in that organisation was real, if never openly acknowledged.", "Progress has been made, but the glass ceiling has not been fully broken in many fields."]
  }, {
    idiom: "Go down a rabbit hole",
    level: "C2 · Proficiency",
    meaning: "Become deeply absorbed in something complex and possibly endless",
    examples: ["She went down a rabbit hole of research and emerged hours later.", "He went down a rabbit hole of conspiracy theories and could not find his way out.", "Once she started reading about the topic, she went down a rabbit hole."]
  }, {
    idiom: "Have an axe to grind",
    level: "C2 · Proficiency",
    meaning: "Have a personal and often selfish reason for doing or saying something",
    examples: ["She clearly has an axe to grind with her former employer.", "He was not the right person to lead the review — he had an axe to grind.", "Any critic who has an axe to grind should disclose that interest."]
  }, {
    idiom: "In the grand scheme of things",
    level: "C2 · Proficiency",
    meaning: "Considering the situation in its largest possible context",
    examples: ["In the grand scheme of things, this setback is minor and temporary.", "She reminded herself that, in the grand scheme of things, it would not matter.", "In the grand scheme of things, what matters most is the long-term impact."]
  }, {
    idiom: "Leave no stone unturned",
    level: "C2 · Proficiency",
    meaning: "Try every possible course of action in order to achieve something",
    examples: ["The investigators left no stone unturned in their search for answers.", "She left no stone unturned in her preparation for the championship.", "He promised to leave no stone unturned in his efforts to resolve the dispute."]
  }, {
    idiom: "Let the chips fall where they may",
    level: "C2 · Proficiency",
    meaning: "Accept whatever happens as a result without trying to control it",
    examples: ["She told the truth and let the chips fall where they may.", "He made his decision and let the chips fall where they may.", "Sometimes you must act with integrity and let the chips fall where they may."]
  }, {
    idiom: "Living in an ivory tower",
    level: "C2 · Proficiency",
    meaning: "Isolated from the realities of ordinary life in a privileged way",
    examples: ["Critics accused the policymakers of living in an ivory tower.", "She grew up wealthy and was accused of living in an ivory tower.", "A leader who lives in an ivory tower loses touch with the people they serve."]
  }, {
    idiom: "Long arm of the law",
    level: "C2 · Proficiency",
    meaning: "The extensive and far-reaching power and authority of law enforcement",
    examples: ["Even abroad, he could not escape the long arm of the law.", "She warned him that the long arm of the law would eventually catch up with him.", "The long arm of the law reaches further than many people expect."]
  }, {
    idiom: "Moot point",
    level: "C2 · Proficiency",
    meaning: "A point that is no longer relevant, useful or worth arguing about",
    examples: ["Whether it was the right decision is now a moot point — it has been made.", "His objections became a moot point once the contract was signed.", "The debate about the old policy is a moot point; the new rules are already in effect."]
  }, {
    idiom: "Method to my madness",
    level: "C2 · Proficiency",
    meaning: "There is an underlying logic to an approach that seems random",
    examples: ["Her chaotic desk actually has a method to the madness.", "It looks disorganised, but there is a method to the madness.", "Once he explained his process, the method to his madness became clear."]
  }, {
    idiom: "Nothing short of miraculous",
    level: "C2 · Proficiency",
    meaning: "So extraordinary and impressive it seems almost impossible",
    examples: ["Her recovery in such a short time was nothing short of miraculous.", "The team's turnaround in the second half was nothing short of miraculous.", "The results of the programme were nothing short of miraculous."]
  }, {
    idiom: "On borrowed time",
    level: "C2 · Proficiency",
    meaning: "Continuing to exist knowing that the end is inevitable and near",
    examples: ["The old system was clearly on borrowed time.", "She knew the relationship was on borrowed time well before it ended.", "Once the funding ran out, the project was on borrowed time."]
  }, {
    idiom: "Par for the course",
    level: "C2 · Proficiency",
    meaning: "What is normal, typical or to be expected in a particular situation",
    examples: ["The long wait times are par for the course in this industry.", "A few technical errors on launch day are par for the course.", "She was not surprised by the criticism — it is par for the course in politics."]
  }, {
    idiom: "Pyrrhic victory",
    level: "C2 · Proficiency",
    meaning: "A victory won at such great cost that it is essentially a defeat",
    examples: ["Winning the lawsuit was a Pyrrhic victory — the legal fees exceeded the settlement.", "The election win proved to be a Pyrrhic victory given the economic damage that followed.", "She succeeded, but at such personal cost that it felt like a Pyrrhic victory."]
  }, {
    idiom: "Raise the bar",
    level: "C2 · Proficiency",
    meaning: "Set a higher standard of achievement or quality for others to meet",
    examples: ["Her debut novel raised the bar for the genre significantly.", "The new product raised the bar and forced competitors to rethink their strategies.", "Every time she performs, she raises the bar a little higher."]
  }, {
    idiom: "Reinvent the wheel",
    level: "C2 · Proficiency",
    meaning: "Waste time creating something that already exists perfectly well",
    examples: ["We do not need to reinvent the wheel — the framework already exists.", "She stopped her team from reinventing the wheel and pointed them to existing research.", "There is no need to reinvent the wheel; use what works and improve it."]
  }, {
    idiom: "Ride roughshod",
    level: "C2 · Proficiency",
    meaning: "Act with complete disregard for others' feelings, rights or opinions",
    examples: ["The new management rode roughshod over the existing team's processes.", "She refused to ride roughshod over her colleagues' concerns.", "He rode roughshod over every objection and forced the change through."]
  }, {
    idiom: "Run the gauntlet",
    level: "C2 · Proficiency",
    meaning: "Face a series of severe criticisms or difficulties simultaneously",
    examples: ["The proposal had to run the gauntlet of three hostile committees.", "She ran the gauntlet of public scrutiny and emerged with her reputation intact.", "Every new policy must run the gauntlet before it is adopted."]
  }, {
    idiom: "See the writing on the wall",
    level: "C2 · Proficiency",
    meaning: "Recognise early warning signs that something bad is coming",
    examples: ["She saw the writing on the wall and started looking for a new role early.", "He ignored the writing on the wall until it was too late to act.", "Experienced investors see the writing on the wall long before the market reacts."]
  }, {
    idiom: "Shoot for the moon",
    level: "C2 · Proficiency",
    meaning: "Aim for the highest possible goal, even if it seems out of reach",
    examples: ["She always encouraged her students to shoot for the moon.", "Even if you do not make it, shooting for the moon will take you further than playing it safe.", "He decided to shoot for the moon and applied for the most senior position available."]
  }, {
    idiom: "Spin the narrative",
    level: "C2 · Proficiency",
    meaning: "Control how a story or situation is interpreted and presented to others",
    examples: ["The communications team was brought in to spin the narrative around the crisis.", "She refused to spin the narrative and insisted on full transparency.", "In politics, spinning the narrative is a core part of every campaign strategy."]
  }, {
    idiom: "Stand on the shoulders of giants",
    level: "C2 · Proficiency",
    meaning: "Build on the work and knowledge of those who came before you",
    examples: ["Every great scientist stands on the shoulders of giants.", "She was careful to acknowledge those whose work she had built upon — standing on the shoulders of giants.", "Innovation is rarely entirely new; it usually stands on the shoulders of giants."]
  }, {
    idiom: "Tipping point",
    level: "C2 · Proficiency",
    meaning: "The critical moment when a gradual change becomes irreversible",
    examples: ["The data suggests we are approaching a tipping point on climate change.", "Small frustrations accumulated until they reached a tipping point.", "The viral campaign hit a tipping point and reached millions overnight."]
  }, {
    idiom: "Vicious circle",
    level: "C2 · Proficiency",
    meaning: "A sequence of events where each problem makes the next one worse",
    examples: ["Poverty and poor health create a vicious circle that is hard to escape.", "Debt creates a vicious circle — the more you owe, the more you borrow.", "The lack of investment led to poor results, which led to less investment: a vicious circle."]
  }, {
    idiom: "Win-win situation",
    level: "C2 · Proficiency",
    meaning: "An outcome that is beneficial and satisfying to all parties involved",
    examples: ["The deal was structured as a win-win situation for both companies.", "By collaborating instead of competing, they created a win-win situation.", "Finding a win-win situation is the mark of a skilled negotiator."]
  }, {
    idiom: "Bury one's head in the sand",
    level: "C2 · Proficiency",
    meaning: "Refuse to acknowledge or deal with an obvious and serious problem",
    examples: ["Burying your head in the sand will not make the problem disappear.", "She had been burying her head in the sand for months, hoping things would improve.", "He could no longer bury his head in the sand — action was urgently required."]
  }, {
    idiom: "Cast in stone",
    level: "C2 · Proficiency",
    meaning: "Fixed permanently and impossible to change or adapt",
    examples: ["Nothing is cast in stone at this stage — everything is open to discussion.", "She reminded the team that the plan was not cast in stone.", "The schedule is not cast in stone; we can adjust it if needed."]
  }, {
    idiom: "Cross the Rubicon",
    level: "C2 · Proficiency",
    meaning: "Make an irreversible decision that commits you to a course of action",
    examples: ["By publishing the report, she had crossed the Rubicon and there was no going back.", "He crossed the Rubicon when he resigned publicly on live television.", "Once they crossed the Rubicon, the entire direction of the company changed permanently."]
  }, {
    idiom: "Dark horse",
    level: "C2 · Proficiency",
    meaning: "A person who is unknown but turns out to be surprisingly successful",
    examples: ["She was the dark horse of the competition, emerging from nowhere to win.", "Nobody expected him to win — he was a complete dark horse.", "The dark horse candidate secured more votes than any of the established names."]
  }, {
    idiom: "Die hard",
    level: "C2 · Proficiency",
    meaning: "Continue to exist despite everything; very difficult to change or eliminate",
    examples: ["Old habits die hard, even when we know they are not helpful.", "The tradition has been dying hard for decades but persists nonetheless.", "Deeply held beliefs die hard, even in the face of overwhelming evidence."]
  }, {
    idiom: "Double down",
    level: "C2 · Proficiency",
    meaning: "Strengthen commitment to a course of action despite increasing risk",
    examples: ["Instead of reconsidering, she doubled down on the controversial strategy.", "He doubled down on his position despite all the criticism.", "The company doubled down on its investment in the technology even after early setbacks."]
  }, {
    idiom: "Draw a blank",
    level: "C2 · Proficiency",
    meaning: "Be completely unable to think of or remember something",
    examples: ["When asked for her name, she drew a complete blank.", "He drew a blank during the crucial question in the final round.", "She searched her memory but drew a blank — the word had simply vanished."]
  }, {
    idiom: "Elevate the discourse",
    level: "C2 · Proficiency",
    meaning: "Raise the quality and level of a conversation or debate",
    examples: ["Her contribution elevated the discourse significantly.", "The event was designed to elevate the discourse around mental health in the workplace.", "We need voices in public life who genuinely elevate the discourse rather than lower it."]
  }, {
    idiom: "Eminence grise",
    level: "C2 · Proficiency",
    meaning: "A person who has great influence but no official position or power",
    examples: ["The former president remained an eminence grise behind the scenes.", "She was the eminence grise of the organisation, guiding decisions without a formal title.", "Every institution has its eminence grise — the one who really sets the direction."]
  }, {
    idiom: "Fait accompli",
    level: "C2 · Proficiency",
    meaning: "Something that has already been done and is now impossible to reverse",
    examples: ["By the time the decision was announced, it was already a fait accompli.", "The merger was presented to staff as a fait accompli, with no room for input.", "She presented the plan as a fait accompli to avoid any prolonged debate."]
  }, {
    idiom: "Feed the narrative",
    level: "C2 · Proficiency",
    meaning: "Provide information or actions that support a particular interpretation",
    examples: ["Every statement he made seemed designed to feed the narrative his opponents had built.", "She was careful not to do anything that would feed the narrative of incompetence.", "The leaked documents inadvertently fed the narrative that the government had been dishonest."]
  }, {
    idiom: "Fly in the ointment",
    level: "C2 · Proficiency",
    meaning: "A small flaw or problem that spoils the value of something larger",
    examples: ["The only fly in the ointment was the unreliable delivery schedule.", "Everything was perfect — the budget was the fly in the ointment.", "She loved the proposal but there was one significant fly in the ointment."]
  }, {
    idiom: "Glass-half-full person",
    level: "C2 · Proficiency",
    meaning: "An optimist who focuses on what is positive rather than negative",
    examples: ["She is a genuine glass-half-full person — she always finds the upside.", "Being a glass-half-full person has helped him through some very dark periods.", "The team needed a glass-half-full person to keep morale up during the difficult quarter."]
  }, {
    idiom: "Go to the wire",
    level: "C2 · Proficiency",
    meaning: "Continue until the very last moment before a deadline or conclusion",
    examples: ["The negotiations went to the wire before a deal was finally reached.", "She expected it to go to the wire, so she stayed in the office all evening.", "The match went to the wire, with the result decided in the final seconds."]
  }, {
    idiom: "Herculean task",
    level: "C2 · Proficiency",
    meaning: "A task requiring extraordinary strength, determination and effort",
    examples: ["Completing the project in one week was a Herculean task.", "She took on the Herculean task of reforming the entire department from scratch.", "Rebuilding trust after such a serious breach of confidence is a Herculean task."]
  }, {
    idiom: "In limbo",
    level: "C2 · Proficiency",
    meaning: "In a situation of uncertainty where nothing is decided or progressing",
    examples: ["The project has been in limbo since the funding decision was postponed.", "She felt in limbo, waiting for an answer that never seemed to come.", "Thousands of applicants were left in limbo while the policy was reviewed."]
  }, {
    idiom: "Lay the groundwork",
    level: "C2 · Proficiency",
    meaning: "Do the basic preparatory work that allows something to succeed later",
    examples: ["She spent six months laying the groundwork before the public launch.", "The early research laid the groundwork for discoveries made decades later.", "Laying the groundwork well is what separates successful projects from failed ones."]
  }, {
    idiom: "Level playing field",
    level: "C2 · Proficiency",
    meaning: "A situation in which everyone has a fair and equal chance of success",
    examples: ["Regulation is meant to create a level playing field for all businesses.", "She advocated for a level playing field so that talent could flourish regardless of background.", "Without a level playing field, the competition is meaningless."]
  }, {
    idiom: "Lightning rod",
    level: "C2 · Proficiency",
    meaning: "A person or thing that attracts criticism or controversy away from others",
    examples: ["The controversial policy made the minister a lightning rod for public anger.", "She became a lightning rod for the broader discontent within the organisation.", "He was deliberately positioned as a lightning rod so that others could avoid scrutiny."]
  }, {
    idiom: "Moving the goalposts",
    level: "C2 · Proficiency",
    meaning: "Unfairly changing the criteria or rules after something has started",
    examples: ["They kept moving the goalposts every time she met their requirements.", "Moving the goalposts undermines trust and makes collaboration impossible.", "He was accused of moving the goalposts in the final stages of negotiation."]
  }, {
    idiom: "Nip something in the bud",
    level: "C2 · Proficiency",
    meaning: "Stop something at an early stage before it grows into a bigger problem",
    examples: ["It is important to nip conflict in the bud before it escalates.", "She nipped the misunderstanding in the bud with a calm, clear conversation.", "The manager nipped the behaviour in the bud before it affected the whole team."]
  }, {
    idiom: "On a knife-edge",
    level: "C2 · Proficiency",
    meaning: "In a very tense and uncertain situation where the outcome is unclear",
    examples: ["The vote was on a knife-edge right up until the final count.", "The company's future is on a knife-edge, with the decision expected by Friday.", "She spent the whole week on a knife-edge waiting for the result."]
  }, {
    idiom: "Paradigm shift",
    level: "C2 · Proficiency",
    meaning: "A fundamental transformation in the way something is understood or done",
    examples: ["The internet caused a paradigm shift in how we consume information.", "Her approach to therapy represented a genuine paradigm shift in the field.", "A paradigm shift in leadership thinking is long overdue."]
  }, {
    idiom: "Pay through the nose",
    level: "C2 · Proficiency",
    meaning: "Pay a very high or excessive price for something",
    examples: ["She paid through the nose for a last-minute flight.", "In that city, you pay through the nose for even the smallest apartment.", "The client was made to pay through the nose for features that should have been standard."]
  }, {
    idiom: "Push the envelope",
    level: "C2 · Proficiency",
    meaning: "Go beyond the usual limits and try something new or more extreme",
    examples: ["She consistently pushes the envelope with her experimental approach to design.", "The director pushed the envelope with a production that divided critical opinion.", "Great innovation always involves someone willing to push the envelope."]
  }, {
    idiom: "Raise the spectre",
    level: "C2 · Proficiency",
    meaning: "Make people think about something frightening or threatening",
    examples: ["The report raised the spectre of another economic recession.", "His comments raised the spectre of conflict that nobody wanted to face.", "The new statistics raised the spectre of a public health crisis."]
  }, {
    idiom: "Red herring",
    level: "C2 · Proficiency",
    meaning: "A misleading clue or piece of information that draws attention away",
    examples: ["The early suspect turned out to be a complete red herring.", "She dismissed the objection as a red herring designed to distract from the real issue.", "The leaked memo was a red herring, planted to send investigators in the wrong direction."]
  }, {
    idiom: "Sail close to the wind",
    level: "C2 · Proficiency",
    meaning: "Act in a way that is dangerously close to breaking rules or limits",
    examples: ["His methods were always sailing close to the wind, but never quite crossing the line.", "She warned him that he was sailing close to the wind and should be more cautious.", "The company's accounting practices were found to be sailing close to the wind."]
  }, {
    idiom: "Set the tone",
    level: "C2 · Proficiency",
    meaning: "Establish the character or attitude of something from the beginning",
    examples: ["The opening speech set the tone for the entire conference.", "Her leadership style set the tone for the whole department.", "How you handle the first week in a new role sets the tone for everything that follows."]
  }, {
    idiom: "Slippery slope",
    level: "C2 · Proficiency",
    meaning: "A situation where one small change leads to increasingly serious consequences",
    examples: ["Critics argued that the law was the start of a slippery slope toward censorship.", "She was wary of making any exceptions, worried about the slippery slope.", "Once you start compromising on small things, it is a slippery slope."]
  }, {
    idiom: "Split hairs",
    level: "C2 · Proficiency",
    meaning: "Argue about very small and mostly unimportant details or differences",
    examples: ["They spent an hour splitting hairs about language when the core message was clear.", "She told him to stop splitting hairs and focus on the bigger picture.", "There is no point splitting hairs at this stage — the decision has already been made."]
  }, {
    idiom: "Struck a chord",
    level: "C2 · Proficiency",
    meaning: "Said or done something that resonates strongly with people's feelings",
    examples: ["Her speech struck a chord with everyone in the audience.", "The campaign struck a chord with voters and spread rapidly.", "The poem struck a chord because it captured something everyone had felt but never said."]
  }, {
    idiom: "The die is cast",
    level: "C2 · Proficiency",
    meaning: "A decision has been made and the consequences are now inevitable",
    examples: ["The die is cast — there is no point second-guessing the choice now.", "Once she submitted the resignation, the die was cast.", "He knew the die was cast the moment the press release went live."]
  }, {
    idiom: "The jury is still out",
    level: "C2 · Proficiency",
    meaning: "A final decision or judgement has not yet been reached",
    examples: ["The jury is still out on whether the new approach will work.", "On the long-term health effects, the jury is still out.", "The jury is still out, so we should proceed cautiously."]
  }, {
    idiom: "Throw the gauntlet",
    level: "C2 · Proficiency",
    meaning: "Issue a challenge or call someone out to compete or debate",
    examples: ["She threw down the gauntlet by publishing a direct rebuttal of his argument.", "He threw the gauntlet at the industry leaders and demanded accountability.", "The new entrant threw the gauntlet at the established players and disrupted the market."]
  }, {
    idiom: "To add fuel to the fire",
    level: "C2 · Proficiency",
    meaning: "Make a difficult situation even worse by doing or saying something",
    examples: ["His comment about her performance added fuel to the fire.", "Rather than calming the situation, her response only added fuel to the fire.", "The late payment added fuel to the fire of an already tense negotiation."]
  }, {
    idiom: "Under the microscope",
    level: "C2 · Proficiency",
    meaning: "Being very closely examined and scrutinised by others",
    examples: ["After the scandal, every decision the company made was under the microscope.", "She knew her first few weeks in the role would be under the microscope.", "The new regulations put corporate behaviour firmly under the microscope."]
  }, {
    idiom: "Watershed moment",
    level: "C2 · Proficiency",
    meaning: "A turning point after which everything is fundamentally different",
    examples: ["The discovery was a watershed moment for the entire field of medicine.", "The speech is remembered as a watershed moment in the history of the movement.", "Her promotion was a watershed moment that changed the direction of her career."]
  }]
};

// ── IDIOM POOL (from portallas.com/Idioms.pdf + curated additions) ──────────
// Each entry: [idiom, meaning]. Examples generated by AI on demand for idioms not in IDIOM_DATA.
var IDIOM_POOL = {
  Beginner: [["Give it a shot", "Try something, even if you are not sure you will succeed"], ["Under the weather", "Feeling slightly ill or unwell"], ["Hang in there", "Keep going and do not give up, even when things are difficult"], ["Break the ice", "Do or say something to make people feel comfortable in a new situation"], ["Call it a day", "Stop working on something and finish for the day"], ["In the same boat", "Be in the same difficult situation as someone else"], ["Piece of cake", "Something that is very easy to do"], ["On the go", "Constantly busy or active; always moving"], ["Sleep on it", "Wait until the next day before making a decision"], ["Hit the sack", "Go to bed and sleep"], ["Hit the road", "Leave or begin a journey"], ["Hit the books", "Start studying hard"], ["Once in a blue moon", "Very rarely; almost never"], ["Time flies", "Time passes very quickly"], ["Time is money", "Time is valuable and should not be wasted"], ["Sweet tooth", "A liking for sweet-tasting foods"], ["Spill the beans", "Accidentally or deliberately reveal a secret"], ["Speak of the devil", "What you say when the person you were talking about appears"], ["Feeling blue", "Feeling sad or depressed"], ["Green with envy", "Extremely jealous of someone or something"], ["Full of beans", "Full of energy, enthusiasm and liveliness"], ["Tie the knot", "Get married"], ["Tongue-tied", "Unable to speak freely due to nervousness or shyness"], ["Long time no see", "A greeting said when you have not seen someone for a long time"], ["Look on the bright side", "Try to find something positive in a difficult situation"], ["Crack of dawn", "Very early in the morning, when the sun first rises"], ["Couch potato", "A lazy person who spends too much time watching television"], ["Around the clock", "All day and night, without stopping"], ["Better late than never", "It is better to do something late than not do it at all"], ["All ears", "Listening attentively and ready to hear what someone has to say"], ["No pain no gain", "You have to work hard and suffer to achieve something worthwhile"], ["Keep your fingers crossed", "Hope for good luck or a positive outcome"], ["Don't judge a book by its cover", "Do not judge something or someone purely by how they look"], ["Every cloud has a silver lining", "Even in a bad situation there is something positive"], ["Kill two birds with one stone", "Accomplish two things with a single action"], ["Let the cat out of the bag", "Accidentally or carelessly reveal a secret"], ["On the tip of your tongue", "Almost able to remember something but not quite"], ["Easy does it", "Do something slowly and carefully to avoid making a mistake"], ["Back to the drawing board", "Start completely over with a new plan after one has failed"], ["Golden opportunity", "A very good chance that may not come again"], ["Love at first sight", "Immediately feel love for someone when you first see them"], ["Head over heels", "Completely and deeply in love with someone"], ["Pop the question", "Propose marriage to someone"], ["Rule of thumb", "A general principle that works most of the time"], ["By degrees", "Happening or developing gradually and little by little"], ["Now and then", "Occasionally; not very often"], ["Sooner or later", "At some point in the future; eventually"], ["A blessing in disguise", "Something that seems bad at first but turns out to be good"], ["Actions speak louder than words", "What you do matters more than what you say"], ["In the blink of an eye", "Something that happens extremely quickly"]],
  Intermediate: [["Read the room", "Correctly understand the mood or feelings of the people around you"], ["On the same page", "Having the same understanding or sharing the same view"], ["Get the ball rolling", "Start a process or activity and get things moving"], ["Hit the ground running", "Start something quickly and with great energy"], ["Back to square one", "Return to the very beginning after a plan has failed"], ["Go the extra mile", "Put in more effort than is expected or required"], ["Cut to the chase", "Get directly to the point without wasting time"], ["Touch base", "Make brief contact with someone to check in or share an update"], ["Bite off more than you can chew", "Take on a task too big to handle comfortably"], ["The ball is in your court", "It is now your turn or your responsibility to take the next step"], ["Against the clock", "Working quickly because there is very little time left"], ["An arm and a leg", "Something that costs a very large amount of money"], ["At the drop of a hat", "Without any hesitation; immediately and without needing to be asked"], ["Back to basics", "Return to the fundamental principles that have worked before"], ["Barking up the wrong tree", "Pursuing the wrong course or making a false assumption"], ["Beat around the bush", "Avoid talking about something directly; approach a subject evasively"], ["Best of both worlds", "Enjoy the advantages of two very different things at the same time"], ["Bite the bullet", "Endure a painful or difficult situation because it is unavoidable"], ["By the skin of your teeth", "Succeed by a very small margin; barely manage to do something"], ["Catch someone red-handed", "Catch someone in the act of doing something wrong"], ["Cross that bridge when you come to it", "Deal with a problem only when it actually happens"], ["Cut corners", "Do something the quick and cheap way, usually at the cost of quality"], ["Cut the mustard", "Meet the required standard; be good enough for the task"], ["Don't count your chickens before they hatch", "Don't make plans for something that hasn't happened yet"], ["Don't put all your eggs in one basket", "Don't make everything dependent on only one plan"], ["Eager beaver", "A person who is very enthusiastic and works very hard"], ["Eleventh hour", "At the very last moment; just in time before a deadline"], ["Give the benefit of the doubt", "Believe someone's explanation without proof, giving them a chance"], ["Grass is always greener on the other side", "What others have always seems better than your own situation"], ["Hear it on the grapevine", "Learn something through unofficial rumour or gossip"], ["In the long run", "Over a long period of time; eventually; in the end"], ["In the nick of time", "Just before it is too late; at the very last possible moment"], ["Jump on the bandwagon", "Join a popular trend or activity because others are doing it"], ["Keep something at bay", "Prevent something from approaching or getting worse"], ["Kill time", "Do something to pass the time while waiting for something else"], ["Last straw", "The final problem in a series that makes a situation completely unbearable"], ["Learn the ropes", "Learn how to do a job or activity properly from the beginning"], ["Like clockwork", "Happening with perfect regularity, precision and without problems"], ["Miss the boat", "Miss an opportunity; be too late to take advantage of something"], ["Murphy's law", "If something can go wrong, it will go wrong at the worst time"], ["No time like the present", "The best time to do something is right now, not later"], ["On the ball", "Alert and fully aware; quick to understand a situation"], ["Out of the blue", "Happening suddenly and completely unexpectedly"], ["Pass with flying colours", "Succeed with very high marks or excellent results"], ["Pulling out all the stops", "Doing absolutely everything possible to achieve a desired result"], ["Raring to go", "Very eager and enthusiastic about doing something"], ["Red flag", "A warning sign that something is wrong or needs attention"], ["Red tape", "Excessive bureaucratic rules and regulations that slow progress"], ["Sail through something", "Succeed at something easily and without difficulty"], ["See eye to eye", "Agree completely with someone on a particular matter"], ["Sit on the fence", "Refuse to commit to one side of an argument or make a decision"], ["Snowed under", "Overwhelmed with work or things to do"], ["Spanner in the works", "Something that suddenly disrupts or prevents a plan from working"], ["Take with a grain of salt", "Be sceptical about what someone says; not take it too seriously"], ["Thinking on your feet", "Making quick decisions and adapting to changes as they happen"], ["Under pressure", "Experiencing stress from difficult demands or expectations"], ["Up in the air", "Uncertain and not yet decided or resolved"], ["Waiting in the wings", "Ready and prepared to take over or act when the moment comes"], ["Ahead of time", "Before the expected or scheduled time"], ["Around the corner", "About to happen very soon"], ["Best thing since sliced bread", "A very good idea, invention or development"], ["Bee in one's bonnet", "Being obsessively preoccupied with a particular idea or worry"], ["Deliver the goods", "Do what is expected or required; meet the expectations set"], ["Explore all avenues", "Investigate every possible option before making a decision"], ["Get the show on the road", "Put a plan or idea into action and get started"], ["Give the green light", "Give permission to proceed with something"], ["Going places", "Showing talent and ability that will lead to future success"], ["Hold the fort", "Be responsible for something while others are away"], ["In due course", "At the appropriate time; when the right moment comes"], ["In the bag", "Certain to be achieved or won; as good as guaranteed"], ["In the heat of the moment", "Overwhelmed by strong emotions in a particular situation"], ["Jump on the bandwagon", "Join a popular trend because everyone else is doing it"], ["Keep your finger on the pulse", "Stay constantly aware of the latest developments"], ["Look before you leap", "Think carefully before taking a risky action"], ["Making headway", "Making steady progress towards a goal"], ["Not letting grass grow under your feet", "Not wasting time; getting things done without delay"], ["Off to a flying start", "Beginning something with immediate success or great momentum"], ["On the rocks", "A relationship or situation that is experiencing serious problems"], ["Out of time", "Having no time left; a set deadline has been reached"], ["Pitch black", "Completely dark; impossible to see anything at all"], ["Pot calling the kettle black", "Criticising someone for a fault you also have yourself"], ["Pull the plug", "Stop or terminate something, often abruptly"], ["Stand the test of time", "Continue to work well and remain relevant over a long period"], ["Take each day as it comes", "Deal with things as they happen rather than worrying in advance"], ["The moment of truth", "The critical moment when an important decision must be made"], ["Tickled pink", "Very pleased, thrilled or delighted about something"], ["Tricks of the trade", "Clever or expert techniques known by experienced practitioners"], ["Up for grabs", "Available for anyone to take or win"], ["Work out the kinks", "Solve the small problems in a plan, system or process"], ["You scratch my back and I scratch yours", "If you help me, I will help you in return"], ["Ahead of the curve", "More advanced or innovative than others in the same field"], ["On the same wavelength", "Sharing the same ideas, feelings or way of thinking as another"], ["At the drop of a hat", "Without any hesitation; ready to do something immediately"]],
  Advanced: [["Bite the bullet", "Endure a painful situation because it is unavoidable"], ["Burn your bridges", "Permanently destroy a relationship so you can never go back"], ["Throw someone under the bus", "Blame or sacrifice another person to protect yourself"], ["Walk on eggshells", "Be extremely careful to avoid upsetting someone"], ["Move the goalposts", "Change the rules or requirements unfairly after something has started"], ["Pick up the slack", "Do work that others are failing to do"], ["Back to the drawing board", "Completely abandon a failed plan and start fresh with new ideas"], ["Have skin in the game", "Have a genuine personal stake in an outcome"], ["Pull strings", "Use personal influence or connections to get something done"], ["Turn the tables", "Completely reverse a situation so the advantage changes sides"], ["Add insult to injury", "Make an already bad situation even worse with another problem"], ["Barring a miracle", "Unless something extraordinary and unexpected happens"], ["Blue sky thinking", "Creative and unrestricted thinking not limited by current realities"], ["Born with a silver spoon", "Born into a wealthy and privileged family"], ["Bring home the bacon", "Earn the income that the family depends on"], ["Butter someone up", "Excessively flatter someone, usually because you want something"], ["Cash cow", "A reliable and steady source of income or profit"], ["Cook the books", "Falsify financial records to conceal wrongdoing or fraud"], ["Crying wolf", "Raise false alarms so often that real warnings are not believed"], ["Dead duck", "A plan or project that has failed and is not worth pursuing"], ["Dead in the water", "A plan or project that has stopped working and cannot recover"], ["Dead wood", "People or things that are no longer useful or productive"], ["Devil's advocate", "Someone who argues against a position to test its strength"], ["Don't beat a dead horse", "Stop wasting time on something that cannot be changed"], ["Drop the ball", "Fail to do something you are responsible for at a critical moment"], ["Face the music", "Accept the consequences of your actions, however unpleasant"], ["Fly on the wall", "An unnoticed observer of a private or secret situation"], ["Get off on the wrong foot", "Start something badly or make a poor first impression"], ["Get out of hand", "Lose control; become impossible to manage or contain"], ["Give someone the cold shoulder", "Deliberately ignore or be unfriendly towards someone"], ["Go belly up", "Fail completely and suddenly, especially a business"], ["Go out on a limb", "Take a risk by saying or doing something others might not support"], ["Hot potato", "A controversial issue that nobody wants to handle or be responsible for"], ["In over your head", "Involved in something far beyond your ability or experience"], ["Jump through hoops", "Have to do many difficult or time-consuming things to achieve a goal"], ["Kick the bucket", "Die (used informally or with dark humour)"], ["Let someone off the hook", "Allow someone to escape the consequences of their actions"], ["On thin ice", "In a risky situation where a small mistake could cause serious trouble"], ["Open a can of worms", "Do something that creates far more problems than it solves"], ["Pass the buck", "Transfer responsibility for a problem to someone else"], ["Play hardball", "Act very aggressively and ruthlessly to achieve what you want"], ["Put your foot in your mouth", "Say something embarrassing or inappropriate without realising"], ["Rock the boat", "Cause trouble or upset by challenging an existing situation"], ["Run out of steam", "Lose the energy, motivation or enthusiasm to continue"], ["Shoot the messenger", "Blame the person who brings bad news for the bad news itself"], ["Sit tight", "Wait patiently without taking any action"], ["Steal someone's thunder", "Take credit or attention that rightfully belongs to someone else"], ["Sweep under the rug", "Hide or ignore a problem rather than dealing with it openly"], ["Take the bull by the horns", "Deal with a difficult situation directly and with confidence"], ["Too many cooks spoil the broth", "Having too many people involved in something causes problems"], ["Up the ante", "Increase the stakes, demands or risks in a situation"], ["Whistle in the dark", "Say something brave or confident to hide fear or uncertainty"], ["A storm in a teacup", "A big fuss or controversy about something that is actually trivial"], ["All smoke and mirrors", "Something designed to deceive or create a false impression"], ["At loggerheads", "In strong and continuing disagreement; unable to reach agreement"], ["Bend over backwards", "Do everything possible to help or please someone"], ["Bite the dust", "Fail completely; come to an end; die"], ["Blow hot and cold", "Keep changing your opinion or feelings about something"], ["Burn the candle at both ends", "Exhaust yourself by working too hard both day and night"], ["Change of heart", "A change in feelings or attitude towards something"], ["Close ranks", "Stand together in solidarity when faced with a threat or criticism"], ["Dig your own grave", "Do something that will cause your own failure or downfall"], ["Draw a line in the sand", "Set a firm limit beyond which you will not go"], ["Eat humble pie", "Accept humiliation and admit that you were completely wrong"], ["Fall on deaf ears", "What you say is ignored by the person you are speaking to"], ["Get away with murder", "Do something very wrong without being punished for it"], ["Get to the bottom of something", "Find out the true cause or full truth about something"], ["Give an inch, take a mile", "If you give someone a little, they will want much more"], ["Have an ace up your sleeve", "Have a secret advantage ready to use when needed"], ["Hit below the belt", "Do or say something unfair, unkind or against the rules"], ["Keep something under wraps", "Keep something secret and not reveal it to others"], ["Knock it out of the park", "Perform exceptionally well; achieve a great success"], ["Lay your cards on the table", "Be completely open and honest about your intentions"], ["Let sleeping dogs lie", "Leave a situation undisturbed to avoid creating new problems"], ["Make a mountain out of a molehill", "Exaggerate the importance or difficulty of a small problem"], ["Nail in the coffin", "Something that contributes to the final failure of something"], ["Open Pandora's box", "Do something that causes many unexpected and serious problems"], ["Paint yourself into a corner", "Create a situation where all your options are bad"], ["Read between the lines", "Understand the hidden meaning behind what someone says or writes"], ["Smell a rat", "Suspect that something dishonest or wrong is happening"], ["Stab someone in the back", "Betray someone who trusted you completely"], ["Take something with a pinch of salt", "Be sceptical and not fully believe what someone says"], ["The last nail in the coffin", "The final action that completely destroys something"], ["Throw caution to the wind", "Do something risky without worrying about consequences"], ["Turn a blind eye", "Pretend not to notice something you know is happening"], ["Two sides to every story", "Every situation has different perspectives worth considering"], ["Upset the apple cart", "Disrupt a smoothly running situation or ruin a plan"], ["Warts and all", "Including all the bad or unpleasant aspects, not just the good"], ["Weather the storm", "Survive or endure a difficult period or situation"], ["When pigs fly", "Something that will never happen"], ["Bury the hatchet", "Stop arguing and make peace with someone after a conflict"], ["Caught between a rock and a hard place", "Facing a choice where all options are equally unpleasant"]],
  Proficiency: [["The elephant in the room", "An obvious problem everyone knows about but nobody will discuss"], ["Move the needle", "Make a meaningful and measurable difference in a situation"], ["A double-edged sword", "Something that has both significant advantages and disadvantages"], ["The tip of the iceberg", "A small visible part of a much larger and hidden problem"], ["Kick the can down the road", "Postpone dealing with a problem rather than solving it now"], ["Connect the dots", "Understand how different facts or events relate to form a bigger picture"], ["The devil is in the details", "Small details that seem minor are often the most critical"], ["Catch-22", "An impossible situation where every solution is blocked by a contradiction"], ["Play devil's advocate", "Argue against a position you may agree with to test its strength"], ["Come full circle", "Return to the original starting point after a long and complex journey"], ["A paradigm shift", "A fundamental and far-reaching change in approach or underlying assumptions"], ["Boil the ocean", "Attempt something unnecessarily complex, ambitious or impossible"], ["Bearing fruit", "Beginning to produce positive results after sustained effort"], ["Cut from the same cloth", "Having very similar characteristics, values or background"], ["Drop in the ocean", "A very small and insufficient contribution to a much larger need"], ["Face the music", "Accept fully the consequences of your actions, however uncomfortable"], ["Fall on your sword", "Resign or take full blame to protect your organisation or colleagues"], ["Few and far between", "Rare; not happening or existing in sufficient quantities"], ["Fly by the seat of your pants", "Act without planning; improvise entirely under pressure"], ["Foot the bill", "Pay for something, especially something large and expensive"], ["Foregone conclusion", "A result that seems completely certain before it is officially announced"], ["Get to the bottom of something", "Discover the true cause or full explanation of a complex problem"], ["Glass ceiling", "An invisible barrier that prevents certain people from advancing further"], ["Go down a rabbit hole", "Become deeply absorbed in something complex and possibly endless"], ["Have an axe to grind", "Have a personal and often selfish reason for doing or saying something"], ["In the grand scheme of things", "Considering the situation in its largest possible context"], ["Leave no stone unturned", "Try every possible course of action in order to achieve something"], ["Let the chips fall where they may", "Accept whatever happens as a result without trying to control it"], ["Living in an ivory tower", "Isolated from the realities of ordinary life in a privileged way"], ["Long arm of the law", "The extensive and far-reaching power and authority of law enforcement"], ["Moot point", "A point that is no longer relevant, useful or worth arguing about"], ["Method to my madness", "There is an underlying logic to an approach that seems random"], ["Nothing short of miraculous", "So extraordinary and impressive it seems almost impossible"], ["On borrowed time", "Continuing to exist knowing that the end is inevitable and near"], ["Par for the course", "What is normal, typical or to be expected in a particular situation"], ["Pyrrhic victory", "A victory won at such great cost that it is essentially a defeat"], ["Raise the bar", "Set a higher standard of achievement or quality for others to meet"], ["Reinvent the wheel", "Waste time creating something that already exists perfectly well"], ["Ride roughshod", "Act with complete disregard for others' feelings, rights or opinions"], ["Run the gauntlet", "Face a series of severe criticisms or difficulties simultaneously"], ["See the writing on the wall", "Recognise early warning signs that something bad is coming"], ["Shoot for the moon", "Aim for the highest possible goal, even if it seems out of reach"], ["Spin the narrative", "Control how a story or situation is interpreted and presented to others"], ["Stand on the shoulders of giants", "Build on the work and knowledge of those who came before you"], ["Tipping point", "The critical moment when a gradual change becomes irreversible"], ["Vicious circle", "A sequence of events where each problem makes the next one worse"], ["Win-win situation", "An outcome that is beneficial and satisfying to all parties involved"], ["Bury one's head in the sand", "Refuse to acknowledge or deal with an obvious and serious problem"], ["Cast in stone", "Fixed permanently and impossible to change or adapt"], ["Cross the Rubicon", "Make an irreversible decision that commits you to a course of action"], ["Dark horse", "A person who is unknown but turns out to be surprisingly successful"], ["Die hard", "Continue to exist despite everything; very difficult to change or eliminate"], ["Double down", "Strengthen commitment to a course of action despite increasing risk"], ["Draw a blank", "Be completely unable to think of or remember something"], ["Elevate the discourse", "Raise the quality and level of a conversation or debate"], ["Eminence grise", "A person who has great influence but no official position or power"], ["Fait accompli", "Something that has already been done and is now impossible to reverse"], ["Feed the narrative", "Provide information or actions that support a particular interpretation"], ["Fly in the ointment", "A small flaw or problem that spoils the value of something larger"], ["Glass-half-full person", "An optimist who focuses on what is positive rather than negative"], ["Go to the wire", "Continue until the very last moment before a deadline or conclusion"], ["Herculean task", "A task requiring extraordinary strength, determination and effort"], ["In limbo", "In a situation of uncertainty where nothing is decided or progressing"], ["Lay the groundwork", "Do the basic preparatory work that allows something to succeed later"], ["Level playing field", "A situation in which everyone has a fair and equal chance of success"], ["Lightning rod", "A person or thing that attracts criticism or controversy away from others"], ["Moving the goalposts", "Unfairly changing the criteria or rules after something has started"], ["Nip something in the bud", "Stop something at an early stage before it grows into a bigger problem"], ["On a knife-edge", "In a very tense and uncertain situation where the outcome is unclear"], ["Paradigm shift", "A fundamental transformation in the way something is understood or done"], ["Pay through the nose", "Pay a very high or excessive price for something"], ["Push the envelope", "Go beyond the usual limits and try something new or more extreme"], ["Pyrrhic victory", "A triumph achieved at such enormous cost that it is ultimately a defeat"], ["Raise the spectre", "Make people think about something frightening or threatening"], ["Red herring", "A misleading clue or piece of information that draws attention away"], ["Sail close to the wind", "Act in a way that is dangerously close to breaking rules or limits"], ["Set the tone", "Establish the character or attitude of something from the beginning"], ["Slippery slope", "A situation where one small change leads to increasingly serious consequences"], ["Split hairs", "Argue about very small and mostly unimportant details or differences"], ["Struck a chord", "Said or done something that resonates strongly with people's feelings"], ["The die is cast", "A decision has been made and the consequences are now inevitable"], ["The jury is still out", "A final decision or judgement has not yet been reached"], ["Throw the gauntlet", "Issue a challenge or call someone out to compete or debate"], ["To add fuel to the fire", "Make a difficult situation even worse by doing or saying something"], ["Under the microscope", "Being very closely examined and scrutinised by others"], ["Watershed moment", "A turning point after which everything is fundamentally different"]]
};

// Fetch a Wikipedia thumbnail for a concrete noun — free, no key, CORS-safe
function fetchWordImage(_x2) {
  return _fetchWordImage.apply(this, arguments);
} // Rotates daily — new word every day, cycles after 200 days
// wotdData is populated on app init from cache or remote fetch
function _fetchWordImage() {
  _fetchWordImage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(word) {
    var _data$query, _page$thumbnail, url, res, data, pages, page, _t26;
    return _regenerator().w(function (_context20) {
      while (1) switch (_context20.p = _context20.n) {
        case 0:
          _context20.p = 0;
          url = "https://en.wikipedia.org/w/api.php?action=query&titles=".concat(encodeURIComponent(word), "&prop=pageimages&format=json&pithumbsize=300&origin=*");
          _context20.n = 1;
          return fetch(url);
        case 1:
          res = _context20.v;
          _context20.n = 2;
          return res.json();
        case 2:
          data = _context20.v;
          pages = data === null || data === void 0 || (_data$query = data.query) === null || _data$query === void 0 ? void 0 : _data$query.pages;
          if (pages) {
            _context20.n = 3;
            break;
          }
          return _context20.a(2, null);
        case 3:
          page = Object.values(pages)[0];
          return _context20.a(2, (page === null || page === void 0 || (_page$thumbnail = page.thumbnail) === null || _page$thumbnail === void 0 ? void 0 : _page$thumbnail.source) || null);
        case 4:
          _context20.p = 4;
          _t26 = _context20.v;
          return _context20.a(2, null);
      }
    }, _callee20, null, [[0, 4]]);
  }));
  return _fetchWordImage.apply(this, arguments);
}
function getWotd(level) {
  var dayNum = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  var pool = wotdData[level] || WOTD_FALLBACK[level];
  return pool[dayNum % pool.length];
}

// Rotates weekly through the full IDIOM_POOL — no storage needed
function getIdiomOfWeek(level) {
  var weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  var pool = IDIOM_POOL[level];
  var _pool = _slicedToArray(pool[weekNum % pool.length], 2),
    idiom = _pool[0],
    meaning = _pool[1];
  // Check if we have pre-written rich content for this idiom
  var rich = IDIOM_DATA[level].find(function (d) {
    return d.idiom === idiom;
  });
  return rich || {
    idiom: idiom,
    meaning: meaning,
    level: LEVEL_META[level].label
  };
}

// ── WORD OF THE DAY DATA — fetched from remote, cached in storage ─────────────
// To update words: edit your GitHub Gist, the app picks up changes within 7 days.
// Replace this URL with your own Gist raw URL after uploading wordspark-words.json
var WOTD_URL = "https://gist.githubusercontent.com/Jadon1988/3496997f852e4dd65987b61d6f989de5/raw/wordspark-words.json";
var WOTD_CACHE_KEY = "ws_wotd_words";
var WOTD_CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

// Fallback — 50 words per level, used offline or before remote data loads
var WOTD_FALLBACK = {
  "Beginner": [{
    "word": "Happy",
    "type": "adjective",
    "definition": "Feeling pleased and content.",
    "examples": ["She is very happy with her new job.", "He looked happy when he saw his friends."]
  }, {
    "word": "Book",
    "type": "noun",
    "definition": "A set of printed pages that you read.",
    "examples": ["I am reading a very interesting book.", "She borrowed a book from the library."]
  }, {
    "word": "Friend",
    "type": "noun",
    "definition": "A person you like and enjoy spending time with.",
    "examples": ["My best friend lives in the same street as me.", "She made many new friends at university."]
  }, {
    "word": "Travel",
    "type": "verb",
    "definition": "To go from one place to another.",
    "examples": ["She loves to travel and has visited many countries.", "He travels by train whenever possible."]
  }, {
    "word": "School",
    "type": "noun",
    "definition": "A place where children go to learn.",
    "examples": ["She walks to school with her friends every day.", "He studied hard and did very well at school."]
  }, {
    "word": "Family",
    "type": "noun",
    "definition": "A group of people related to each other.",
    "examples": ["My family is very important to me.", "She calls her family every Sunday morning."]
  }, {
    "word": "Work",
    "type": "verb",
    "definition": "To do a job or activity that requires effort.",
    "examples": ["She works at a hospital as a nurse.", "He works very hard to support his family."]
  }, {
    "word": "Food",
    "type": "noun",
    "definition": "Things you eat to give your body energy.",
    "examples": ["Italian food is my absolute favourite.", "She always brings healthy food to work."]
  }, {
    "word": "Water",
    "type": "noun",
    "definition": "A clear liquid essential for life.",
    "examples": ["Please drink more water — it is very hot today.", "She always carries a bottle of water with her."]
  }, {
    "word": "Music",
    "type": "noun",
    "definition": "Sounds arranged in a pleasing pattern.",
    "examples": ["She listens to music while she studies.", "Music makes me feel happy and relaxed."]
  }, {
    "word": "Help",
    "type": "verb",
    "definition": "To make it easier for someone to do something.",
    "examples": ["Can you help me carry these heavy bags?", "She helped her younger sister with her homework."]
  }, {
    "word": "Walk",
    "type": "verb",
    "definition": "To move on foot at a normal pace.",
    "examples": ["She walks to school because it takes only ten minutes.", "He goes for a long walk in the park every Sunday."]
  }, {
    "word": "Time",
    "type": "noun",
    "definition": "The progress of events measured in hours and days.",
    "examples": ["There is no time to waste — let us start now.", "What time does the bus leave?"]
  }, {
    "word": "House",
    "type": "noun",
    "definition": "A building where people live.",
    "examples": ["They bought a small house near the school.", "She painted the house bright yellow."]
  }, {
    "word": "Important",
    "type": "adjective",
    "definition": "Of great value or significance.",
    "examples": ["It is important to practise English every day.", "Sleep is important for good health."]
  }, {
    "word": "Morning",
    "type": "noun",
    "definition": "The part of the day before noon.",
    "examples": ["She wakes up early every morning.", "Good morning! Did you sleep well?"]
  }, {
    "word": "Money",
    "type": "noun",
    "definition": "Coins or notes used to buy things.",
    "examples": ["She saves money every month to travel.", "He did not have enough money to buy the book."]
  }, {
    "word": "Learn",
    "type": "verb",
    "definition": "To gain knowledge or skill through study or experience.",
    "examples": ["She works hard to learn new words every day.", "He learned to cook from watching his mother."]
  }, {
    "word": "City",
    "type": "noun",
    "definition": "A large town where many people live and work.",
    "examples": ["She moved to the city to find a better job.", "The city is very busy in the morning."]
  }, {
    "word": "Healthy",
    "type": "adjective",
    "definition": "Good for your body; not sick.",
    "examples": ["She eats healthy food and exercises every day.", "A healthy lifestyle helps you feel better."]
  }, {
    "word": "Job",
    "type": "noun",
    "definition": "The work you do regularly to earn money.",
    "examples": ["She got a new job at a big company.", "He loves his job because he helps people."]
  }, {
    "word": "Dream",
    "type": "noun",
    "definition": "A wish or hope for the future.",
    "examples": ["Her dream is to travel around the world.", "He is working hard to achieve his dream."]
  }, {
    "word": "Quiet",
    "type": "adjective",
    "definition": "Making little or no noise.",
    "examples": ["She prefers quiet places where she can study.", "The library is always quiet and peaceful."]
  }, {
    "word": "Busy",
    "type": "adjective",
    "definition": "Actively doing many things; not free.",
    "examples": ["She is always busy but finds time to exercise.", "He was too busy to come to the party."]
  }, {
    "word": "Season",
    "type": "noun",
    "definition": "One of the four parts of the year.",
    "examples": ["Summer is my favourite season because of the warm weather.", "Which season do you prefer — spring or autumn?"]
  }, {
    "word": "Market",
    "type": "noun",
    "definition": "A place where people buy and sell things.",
    "examples": ["She buys fresh vegetables at the market every Saturday.", "The market opens early in the morning."]
  }, {
    "word": "Garden",
    "type": "noun",
    "definition": "An area of land where plants and flowers grow.",
    "examples": ["She spends every weekend working in her garden.", "The children played in the garden all afternoon."]
  }, {
    "word": "Safe",
    "type": "adjective",
    "definition": "Not in danger; protected from harm.",
    "examples": ["She felt safe walking home because it was still light.", "Is it safe to drink the water here?"]
  }, {
    "word": "Easy",
    "type": "adjective",
    "definition": "Not difficult; requiring little effort.",
    "examples": ["The first lesson was easy but interesting.", "She made the recipe look easy."]
  }, {
    "word": "Early",
    "type": "adjective",
    "definition": "Before the expected or usual time.",
    "examples": ["She wakes up early every morning to exercise.", "The train arrived five minutes early."]
  }, {
    "word": "Kind",
    "type": "adjective",
    "definition": "Friendly and generous to others.",
    "examples": ["She is a very kind person who always helps others.", "It was kind of him to carry her bag."]
  }, {
    "word": "Interesting",
    "type": "adjective",
    "definition": "Attracting attention and making you want to know more.",
    "examples": ["She found the history lesson very interesting.", "He reads interesting books about science and nature."]
  }, {
    "word": "Popular",
    "type": "adjective",
    "definition": "Liked by many people.",
    "examples": ["Football is the most popular sport in this country.", "That song was very popular in the summer."]
  }, {
    "word": "together",
    "type": "adverb",
    "definition": "With each other; at the same time.",
    "examples": ["They cooked dinner together every evening.", "We work better when we do things together."]
  }, {
    "word": "Arrive",
    "type": "verb",
    "definition": "To reach a place at the end of a journey.",
    "examples": ["She arrived at the airport two hours before her flight.", "The train arrived ten minutes late."]
  }, {
    "word": "Forget",
    "type": "verb",
    "definition": "To fail to remember something.",
    "examples": ["She forgot to bring her umbrella and got wet.", "Do not forget to call me when you arrive."]
  }, {
    "word": "Change",
    "type": "verb",
    "definition": "To make or become different.",
    "examples": ["She decided to change her hairstyle for the new year.", "The weather can change very quickly in this region."]
  }, {
    "word": "Enjoy",
    "type": "verb",
    "definition": "To get pleasure from something.",
    "examples": ["She enjoys reading novels in English.", "They enjoyed a delicious meal by the river."]
  }, {
    "word": "Decide",
    "type": "verb",
    "definition": "To make a choice after thinking about something.",
    "examples": ["She decided to take an English class every week.", "He could not decide which shirt to wear."]
  }, {
    "word": "Save",
    "type": "verb",
    "definition": "To keep money for future use; to stop something from being lost.",
    "examples": ["She saves a little money every month for her holiday.", "He saved the document before closing the computer."]
  }, {
    "word": "Useful",
    "type": "adjective",
    "definition": "Helpful or practical.",
    "examples": ["A dictionary is a very useful tool for learning languages.", "She gave him some useful advice about the job."]
  }, {
    "word": "Tired",
    "type": "adjective",
    "definition": "Needing rest or sleep; having little energy.",
    "examples": ["She was tired after a long day at work.", "He felt tired so he went to bed early."]
  }, {
    "word": "Warm",
    "type": "adjective",
    "definition": "Having a comfortable level of heat.",
    "examples": ["Put on a warm coat before you go outside.", "The soup was warm and comforting on a cold day."]
  }, {
    "word": "Angry",
    "type": "adjective",
    "definition": "Feeling strong displeasure about something.",
    "examples": ["He was angry when he missed the last bus home.", "She tried not to sound angry when she explained the problem."]
  }, {
    "word": "Ask",
    "type": "verb",
    "definition": "To request information or help from someone.",
    "examples": ["She asked the teacher to explain the word again.", "Can I ask you a question about the homework?"]
  }, {
    "word": "Send",
    "type": "verb",
    "definition": "To cause something to go to another person or place.",
    "examples": ["She sent him a message to confirm the time.", "He sent the report to his manager before the deadline."]
  }, {
    "word": "Plan",
    "type": "noun",
    "definition": "An idea or arrangement for doing something.",
    "examples": ["We made a plan to meet at the café at noon.", "She has a plan to improve her English in six months."]
  }, {
    "word": "Word",
    "type": "noun",
    "definition": "A unit of language with meaning.",
    "examples": ["She tries to learn one new word every day.", "What does that word mean? I have never seen it before."]
  }, {
    "word": "Worry",
    "type": "verb",
    "definition": "To feel anxious or concerned about something.",
    "examples": ["She worries about her exam results.", "Do not worry — everything will work out fine."]
  }, {
    "word": "Holiday",
    "type": "noun",
    "definition": "A period when you do not go to work or school.",
    "examples": ["We spent our holiday at the beach last summer.", "She is planning a holiday to Japan next year."]
  }],
  "Intermediate": [{
    "word": "Achieve",
    "type": "verb",
    "definition": "To successfully reach a goal through effort.",
    "examples": ["She worked hard to achieve her dream of becoming a doctor.", "He achieved excellent results in his final exams."]
  }, {
    "word": "Confident",
    "type": "adjective",
    "definition": "Feeling sure of yourself and your abilities.",
    "examples": ["She was confident during the interview and answered clearly.", "He became more confident after practising his presentation."]
  }, {
    "word": "Challenge",
    "type": "noun",
    "definition": "Something difficult that requires effort.",
    "examples": ["Learning a new language is a challenge worth taking on.", "She welcomed the challenge and worked hard to succeed."]
  }, {
    "word": "Opportunity",
    "type": "noun",
    "definition": "A chance to do something useful or enjoyable.",
    "examples": ["She took the opportunity to practise English with native speakers.", "This job is a wonderful opportunity for career growth."]
  }, {
    "word": "Improve",
    "type": "verb",
    "definition": "To become or make something better.",
    "examples": ["She improved her English by practising every single day.", "He worked hard to improve his presentation skills."]
  }, {
    "word": "Responsible",
    "type": "adjective",
    "definition": "Having a duty to deal with something.",
    "examples": ["She is responsible for training new members of the team.", "He felt responsible for the mistake and apologised."]
  }, {
    "word": "Communicate",
    "type": "verb",
    "definition": "To share information or express yourself clearly.",
    "examples": ["It is important to communicate clearly at work.", "She communicates with her team through daily meetings."]
  }, {
    "word": "Progress",
    "type": "noun",
    "definition": "Forward movement towards a goal.",
    "examples": ["She is making excellent progress in her English course.", "He was proud of the progress his team had made."]
  }, {
    "word": "Skill",
    "type": "noun",
    "definition": "The ability to do something well through practice.",
    "examples": ["She has excellent communication and writing skills.", "Speaking in public is a valuable skill in any career."]
  }, {
    "word": "Relationship",
    "type": "noun",
    "definition": "The way two people or things are connected.",
    "examples": ["She has a very good relationship with her colleagues.", "Building strong relationships takes time and trust."]
  }, {
    "word": "Solution",
    "type": "noun",
    "definition": "An answer to a problem or difficulty.",
    "examples": ["She found a creative solution to the budget problem.", "There is always a solution if you look hard enough."]
  }, {
    "word": "Encourage",
    "type": "verb",
    "definition": "To give someone confidence or hope.",
    "examples": ["Her teacher encouraged her to enter the writing competition.", "He always encourages his team to try new approaches."]
  }, {
    "word": "Attitude",
    "type": "noun",
    "definition": "Your feelings or opinions about something.",
    "examples": ["She has a positive attitude that motivates everyone around her.", "His attitude towards learning has changed completely."]
  }, {
    "word": "Environment",
    "type": "noun",
    "definition": "The natural world of land, air, and water.",
    "examples": ["We must protect the environment for future generations.", "The company is working to reduce its impact on the environment."]
  }, {
    "word": "Habit",
    "type": "noun",
    "definition": "Something you do regularly and often without thinking.",
    "examples": ["She has a habit of checking her phone first thing in the morning.", "He developed the habit of reading before bed."]
  }, {
    "word": "Opinion",
    "type": "noun",
    "definition": "A personal view or belief about something.",
    "examples": ["In my opinion, practising every day is the key to success.", "She shared her opinion clearly and confidently."]
  }, {
    "word": "Manage",
    "type": "verb",
    "definition": "To succeed in doing something difficult.",
    "examples": ["She managed to finish the report before the deadline.", "He manages a team of twelve people."]
  }, {
    "word": "Grateful",
    "type": "adjective",
    "definition": "Feeling thankful for something.",
    "examples": ["She was grateful for all the help her colleagues gave her.", "He wrote a card to show how grateful he was."]
  }, {
    "word": "Curious",
    "type": "adjective",
    "definition": "Wanting to know or learn about something.",
    "examples": ["She was curious about how the machine worked.", "Children are naturally curious about the world around them."]
  }, {
    "word": "Avoid",
    "type": "verb",
    "definition": "To keep away from something or someone.",
    "examples": ["She tried to avoid eating too much sugar.", "He avoided the busy road and took a quieter route."]
  }, {
    "word": "Benefit",
    "type": "noun",
    "definition": "An advantage or positive result.",
    "examples": ["The main benefit of exercise is improved health.", "She received many benefits from working for the company."]
  }, {
    "word": "Focus",
    "type": "verb",
    "definition": "To give your full attention to something.",
    "examples": ["She tried to focus on her work despite the noise.", "You need to focus on your goals every single day."]
  }, {
    "word": "Honest",
    "type": "adjective",
    "definition": "Telling the truth and not deceiving people.",
    "examples": ["She is always honest, even when it is difficult.", "He gave an honest opinion about the work."]
  }, {
    "word": "Career",
    "type": "noun",
    "definition": "The series of jobs someone does over their life.",
    "examples": ["She has had a very successful career in medicine.", "He decided to change his career and become a teacher."]
  }, {
    "word": "Patience",
    "type": "noun",
    "definition": "The ability to wait calmly without getting annoyed.",
    "examples": ["Learning a language requires patience and persistence.", "She showed great patience with the difficult student."]
  }, {
    "word": "Struggle",
    "type": "verb",
    "definition": "To try hard to do something difficult.",
    "examples": ["She struggled at first but improved with practice.", "He struggled to find the right words to express himself."]
  }, {
    "word": "Inspire",
    "type": "verb",
    "definition": "To make someone feel enthusiastic and motivated.",
    "examples": ["Her story inspired many young people to follow their dreams.", "He was inspired by his grandmother's strength."]
  }, {
    "word": "Depend",
    "type": "verb",
    "definition": "To rely on something or someone.",
    "examples": ["The result will depend on how well you prepare.", "She depends on public transport to get to work."]
  }, {
    "word": "Effort",
    "type": "noun",
    "definition": "The energy you put into doing something.",
    "examples": ["She put a great effort into learning English this year.", "His effort was recognised with an award."]
  }, {
    "word": "Realise",
    "type": "verb",
    "definition": "To become aware of or understand something.",
    "examples": ["She realised she had made a mistake and corrected it.", "He did not realise how much time had passed."]
  }, {
    "word": "Flexible",
    "type": "adjective",
    "definition": "Able to change easily to suit new conditions.",
    "examples": ["She is very flexible and adapts well to new situations.", "The job offers flexible working hours which suits her perfectly."]
  }, {
    "word": "Establish",
    "type": "verb",
    "definition": "To set up or create something that will last.",
    "examples": ["She established a successful business in just two years.", "He established a clear routine for studying English every morning."]
  }, {
    "word": "Succeed",
    "type": "verb",
    "definition": "To achieve what you were trying to do.",
    "examples": ["She succeeded in passing the advanced English exam.", "He succeeded because he worked hard and never gave up."]
  }, {
    "word": "Recommend",
    "type": "verb",
    "definition": "To suggest something as being good or useful.",
    "examples": ["She recommended the book to everyone in her class.", "The doctor recommended resting for at least a week."]
  }, {
    "word": "Various",
    "type": "adjective",
    "definition": "Different from each other; of many kinds.",
    "examples": ["She used various techniques to improve her vocabulary.", "The company offers various training programmes."]
  }, {
    "word": "Serious",
    "type": "adjective",
    "definition": "Important and requiring careful thought.",
    "examples": ["This is a serious issue that needs immediate attention.", "She took a serious approach to everything she did."]
  }, {
    "word": "Discover",
    "type": "verb",
    "definition": "To find or learn something for the first time.",
    "examples": ["She discovered a love of reading when she was seven.", "Scientists discovered a new species of fish last year."]
  }, {
    "word": "Prevent",
    "type": "verb",
    "definition": "To stop something from happening.",
    "examples": ["Regular exercise can prevent many health problems.", "She took steps to prevent the mistake from happening again."]
  }, {
    "word": "Knowledge",
    "type": "noun",
    "definition": "Information and understanding gained through experience.",
    "examples": ["She has a wide knowledge of English grammar.", "Knowledge is one of the most valuable things you can have."]
  }, {
    "word": "Support",
    "type": "verb",
    "definition": "To help or encourage someone.",
    "examples": ["She supported her colleague through a difficult period.", "His family supported his decision to change careers."]
  }, {
    "word": "Consider",
    "type": "verb",
    "definition": "To think carefully about something.",
    "examples": ["She considered her options before making the final decision.", "You should consider all the risks before you sign the contract."]
  }, {
    "word": "Vital",
    "type": "adjective",
    "definition": "Absolutely necessary; essential.",
    "examples": ["It is vital to review your work before submitting it.", "She plays a vital role in the success of the project."]
  }, {
    "word": "Cope",
    "type": "verb",
    "definition": "To manage a difficult situation successfully.",
    "examples": ["She coped very well with the pressure of the new job.", "He struggled to cope with the changes at first."]
  }, {
    "word": "Purpose",
    "type": "noun",
    "definition": "The reason why something exists or is done.",
    "examples": ["The purpose of the meeting was to discuss the project plan.", "She felt a clear sense of purpose in her new role."]
  }, {
    "word": "Overcome",
    "type": "verb",
    "definition": "To succeed despite a difficulty.",
    "examples": ["She overcame her fear of speaking in public with practice.", "He overcame many obstacles to reach his current position."]
  }, {
    "word": "Expand",
    "type": "verb",
    "definition": "To become or make something larger.",
    "examples": ["She expanded her vocabulary by reading widely in English.", "The company expanded into three new markets this year."]
  }, {
    "word": "Willing",
    "type": "adjective",
    "definition": "Ready and happy to do something.",
    "examples": ["She is always willing to help her colleagues.", "He was willing to work extra hours to finish the project."]
  }, {
    "word": "Adapt",
    "type": "verb",
    "definition": "To change to suit a new situation.",
    "examples": ["She adapted quickly to the new working environment.", "The company had to adapt its strategy to changing conditions."]
  }, {
    "word": "Aware",
    "type": "adjective",
    "definition": "Knowing that something exists or is happening.",
    "examples": ["She was aware of the risks but decided to continue.", "He was not aware of the change until it was too late."]
  }, {
    "word": "Wonder",
    "type": "verb",
    "definition": "To think about something with curiosity.",
    "examples": ["She often wonders what life would be like in another country.", "He wondered if he had made the right decision."]
  }],
  "Advanced": [{
    "word": "Eloquent",
    "type": "adjective",
    "definition": "Expressing ideas in a fluent and persuasive way.",
    "examples": ["She gave an eloquent speech that moved the entire audience.", "His eloquent writing made even complex ideas easy to understand."]
  }, {
    "word": "Resilient",
    "type": "adjective",
    "definition": "Able to recover quickly from difficulties.",
    "examples": ["She proved herself resilient by rebuilding her career after redundancy.", "A resilient mindset is one of the most important qualities in business."]
  }, {
    "word": "Pragmatic",
    "type": "adjective",
    "definition": "Dealing with things in a practical and realistic way.",
    "examples": ["She took a pragmatic approach and focused on what was achievable.", "His pragmatic decisions kept the business running during difficult times."]
  }, {
    "word": "Integrity",
    "type": "noun",
    "definition": "The quality of being honest and having strong moral principles.",
    "examples": ["She is respected for her integrity and commitment to fairness.", "He acted with complete integrity throughout the difficult negotiations."]
  }, {
    "word": "Scrutinise",
    "type": "verb",
    "definition": "To examine something very carefully.",
    "examples": ["She scrutinised every line of the contract before signing.", "The committee scrutinised the proposal and requested more information."]
  }, {
    "word": "Nuance",
    "type": "noun",
    "definition": "A subtle difference in meaning or expression.",
    "examples": ["She understood the nuances of the language after years of study.", "The nuance of the word was lost in translation."]
  }, {
    "word": "Coherent",
    "type": "adjective",
    "definition": "Logical and consistent; easy to understand.",
    "examples": ["Her argument was coherent and supported by strong evidence.", "Please make sure your report is coherent before submitting it."]
  }, {
    "word": "Collaborate",
    "type": "verb",
    "definition": "To work jointly with others on a task.",
    "examples": ["She collaborated with researchers from three different universities.", "The two teams collaborated closely to deliver the project on time."]
  }, {
    "word": "Meticulous",
    "type": "adjective",
    "definition": "Showing great attention to detail.",
    "examples": ["She is meticulous in her work — every detail is perfect.", "A meticulous approach to research always produces better results."]
  }, {
    "word": "Innovative",
    "type": "adjective",
    "definition": "Introducing new and original ideas.",
    "examples": ["She took an innovative approach to solving the old problem.", "The company is known for its innovative products and design."]
  }, {
    "word": "Substantial",
    "type": "adjective",
    "definition": "Large in size, amount, or importance.",
    "examples": ["She received a substantial pay rise after her promotion.", "The project required a substantial investment of time and money."]
  }, {
    "word": "Inevitable",
    "type": "adjective",
    "definition": "Certain to happen; unable to be avoided.",
    "examples": ["Change is inevitable — the key is how you respond to it.", "It was inevitable that the project would take longer than planned."]
  }, {
    "word": "Bias",
    "type": "noun",
    "definition": "An unfair tendency to favour one thing over another.",
    "examples": ["She was aware of her own bias and tried to consider all views.", "The report was criticised for its obvious political bias."]
  }, {
    "word": "Facilitate",
    "type": "verb",
    "definition": "To make something easier or help it happen.",
    "examples": ["She facilitated the discussion by keeping everyone on track.", "Good communication facilitates collaboration between teams."]
  }, {
    "word": "Ambiguous",
    "type": "adjective",
    "definition": "Having more than one possible meaning; unclear.",
    "examples": ["The instructions were ambiguous, leading to several different interpretations.", "She gave an ambiguous answer that left everyone confused."]
  }, {
    "word": "Profound",
    "type": "adjective",
    "definition": "Very deep or serious; having great importance.",
    "examples": ["She had a profound understanding of human behaviour.", "The experience had a profound effect on how she viewed the world."]
  }, {
    "word": "Sustainable",
    "type": "adjective",
    "definition": "Able to be maintained over a long period without causing harm.",
    "examples": ["She is committed to building a sustainable and ethical business.", "Sustainable development means meeting today's needs without harming the future."]
  }, {
    "word": "Consequence",
    "type": "noun",
    "definition": "A result or effect of something that happened earlier.",
    "examples": ["She understood the consequences of her decision before she made it.", "The consequence of poor planning was a significant delay."]
  }, {
    "word": "Emphasise",
    "type": "verb",
    "definition": "To give special importance to something.",
    "examples": ["She emphasised the need for clear communication in the team.", "The report emphasises the importance of early action."]
  }, {
    "word": "Credibility",
    "type": "noun",
    "definition": "The quality of being trusted and believed.",
    "examples": ["Her credibility in the field was built over many years of research.", "He damaged his credibility by making false claims."]
  }, {
    "word": "Rigorous",
    "type": "adjective",
    "definition": "Extremely thorough and careful.",
    "examples": ["She carried out a rigorous analysis of all the available data.", "The selection process was rigorous but fair."]
  }, {
    "word": "Dilemma",
    "type": "noun",
    "definition": "A situation where you must choose between two difficult options.",
    "examples": ["She faced the dilemma of career advancement or work-life balance.", "He was caught in a difficult dilemma with no easy solution."]
  }, {
    "word": "Persist",
    "type": "verb",
    "definition": "To continue doing something despite difficulty.",
    "examples": ["She persisted with her studies even when it was very hard.", "If you persist with daily practice, the results will come."]
  }, {
    "word": "Deduce",
    "type": "verb",
    "definition": "To reach a conclusion through reasoning.",
    "examples": ["She deduced the meaning of the word from the context.", "From the evidence, the detective deduced exactly what had happened."]
  }, {
    "word": "Competence",
    "type": "noun",
    "definition": "The ability to do something successfully and efficiently.",
    "examples": ["Her linguistic competence in four languages is remarkable.", "The manager assessed the competence of each team member."]
  }, {
    "word": "Tangible",
    "type": "adjective",
    "definition": "Clear enough to be touched, felt, or seen.",
    "examples": ["The training programme produced tangible results within three months.", "She wanted tangible evidence before making a final decision."]
  }, {
    "word": "Prevalent",
    "type": "adjective",
    "definition": "Widespread and commonly found.",
    "examples": ["Stress is prevalent among workers in competitive industries.", "The problem is more prevalent than most people realise."]
  }, {
    "word": "Objective",
    "type": "adjective",
    "definition": "Not influenced by personal feelings; based on facts.",
    "examples": ["She tried to remain objective when evaluating the applications.", "An objective analysis of the data is essential for good decisions."]
  }, {
    "word": "Convey",
    "type": "verb",
    "definition": "To communicate or express something to others.",
    "examples": ["She conveyed her disappointment without raising her voice.", "The report conveys a clear message about the need for change."]
  }, {
    "word": "Undermine",
    "type": "verb",
    "definition": "To weaken or damage something gradually.",
    "examples": ["Constant criticism can undermine a person's confidence.", "She was careful not to undermine her colleague's authority."]
  }, {
    "word": "Cultivate",
    "type": "verb",
    "definition": "To develop something gradually and carefully.",
    "examples": ["She cultivated strong relationships with clients over the years.", "He cultivated a reputation for being reliable and thorough."]
  }, {
    "word": "Rhetoric",
    "type": "noun",
    "definition": "Language designed to persuade; the art of effective speaking.",
    "examples": ["She used powerful rhetoric to build support for her proposal.", "He saw through the empty rhetoric and demanded concrete evidence."]
  }, {
    "word": "Diligent",
    "type": "adjective",
    "definition": "Careful and hard-working.",
    "examples": ["She is one of the most diligent students I have ever taught.", "His diligent approach to research produced excellent results."]
  }, {
    "word": "Vulnerable",
    "type": "adjective",
    "definition": "Easily harmed or exposed to danger.",
    "examples": ["She acknowledged that she felt vulnerable in the new environment.", "Children are particularly vulnerable to misinformation online."]
  }, {
    "word": "Paradox",
    "type": "noun",
    "definition": "A situation that seems contradictory but may be true.",
    "examples": ["It is a paradox that the harder she worked, the less she achieved.", "The paradox of choice means more options can lead to less satisfaction."]
  }, {
    "word": "Reinforce",
    "type": "verb",
    "definition": "To strengthen something by adding support.",
    "examples": ["Regular practice reinforces what you learn in the classroom.", "The new evidence reinforced her original hypothesis."]
  }, {
    "word": "Legitimate",
    "type": "adjective",
    "definition": "Allowed by law or rules; reasonable and acceptable.",
    "examples": ["She raised a legitimate concern about the safety of the procedure.", "He had a legitimate reason for missing the deadline."]
  }, {
    "word": "Implement",
    "type": "verb",
    "definition": "To put a plan or decision into action.",
    "examples": ["She was asked to implement the new communication strategy.", "The changes will be implemented gradually over the next six months."]
  }, {
    "word": "Surpass",
    "type": "verb",
    "definition": "To do or be better than expected.",
    "examples": ["She surpassed all expectations with her final exam result.", "His performance this year has surpassed everything he did before."]
  }, {
    "word": "Versatile",
    "type": "adjective",
    "definition": "Able to adapt to many different situations or uses.",
    "examples": ["She is a versatile professional who works well in many roles.", "This tool is highly versatile and useful in many different situations."]
  }, {
    "word": "Autonomous",
    "type": "adjective",
    "definition": "Acting independently without external control.",
    "examples": ["She prefers autonomous work where she can make her own decisions.", "The team operates as an autonomous unit within the company."]
  }, {
    "word": "Controversial",
    "type": "adjective",
    "definition": "Causing strong disagreement among different groups.",
    "examples": ["The new policy was highly controversial and divided public opinion.", "She avoided making controversial statements in professional settings."]
  }, {
    "word": "Scrutiny",
    "type": "noun",
    "definition": "Close and critical examination.",
    "examples": ["Her work came under intense scrutiny after the error was discovered.", "The proposal did not survive scrutiny and was withdrawn."]
  }, {
    "word": "Endorse",
    "type": "verb",
    "definition": "To publicly declare support or approval for something.",
    "examples": ["She endorsed the new strategy after reviewing the evidence.", "He refused to endorse a plan he did not fully believe in."]
  }, {
    "word": "Unprecedented",
    "type": "adjective",
    "definition": "Never done or known before.",
    "examples": ["She achieved unprecedented results for the company in just one year.", "The pandemic caused unprecedented disruption to daily life."]
  }, {
    "word": "Mitigate",
    "type": "verb",
    "definition": "To reduce the severity of something harmful.",
    "examples": ["She took steps to mitigate the risks of the project.", "The plan includes measures to mitigate the environmental impact."]
  }, {
    "word": "Subtle",
    "type": "adjective",
    "definition": "Small and not easy to notice; requiring careful attention.",
    "examples": ["There was a subtle difference in meaning between the two phrases.", "She made a subtle change to the design that improved it greatly."]
  }, {
    "word": "Viable",
    "type": "adjective",
    "definition": "Practical and capable of working successfully.",
    "examples": ["She presented a viable solution that satisfied all the requirements.", "The plan is not viable without additional funding."]
  }, {
    "word": "Infer",
    "type": "verb",
    "definition": "To conclude something from evidence rather than direct statement.",
    "examples": ["She inferred from his tone that he was not satisfied with the result.", "You can infer the meaning of unknown words from context."]
  }, {
    "word": "Concise",
    "type": "adjective",
    "definition": "Giving a lot of information clearly using few words.",
    "examples": ["Her report was concise and covered all the key points.", "Please keep your answer concise — no more than fifty words."]
  }],
  "Proficiency": [{
    "word": "Equanimity",
    "type": "noun",
    "definition": "Calmness and composure, especially in difficult situations.",
    "examples": ["She handled the crisis with remarkable equanimity.", "His equanimity under pressure was one of his greatest strengths."]
  }, {
    "word": "Perspicacious",
    "type": "adjective",
    "definition": "Having a ready insight; shrewd and perceptive.",
    "examples": ["She was perspicacious enough to see through the misleading figures.", "His perspicacious observations enriched the entire team's understanding."]
  }, {
    "word": "Magnanimous",
    "type": "adjective",
    "definition": "Very generous and forgiving.",
    "examples": ["She was magnanimous in her response to the public criticism.", "A magnanimous leader celebrates others' success as much as their own."]
  }, {
    "word": "Eloquence",
    "type": "noun",
    "definition": "The quality of fluent, persuasive, and expressive speech or writing.",
    "examples": ["Her eloquence in three languages made her a formidable diplomat.", "He was moved by the eloquence of her closing argument."]
  }, {
    "word": "Hubris",
    "type": "noun",
    "definition": "Excessive pride leading to downfall.",
    "examples": ["His hubris led him to dismiss risks that later proved devastating.", "The company's collapse was a classic case of corporate hubris."]
  }, {
    "word": "Sagacious",
    "type": "adjective",
    "definition": "Having or showing keen judgement.",
    "examples": ["She was sagacious enough to see the long-term consequences clearly.", "His sagacious advice proved invaluable during the most difficult period."]
  }, {
    "word": "Recalcitrant",
    "type": "adjective",
    "definition": "Stubbornly uncooperative; resistant to authority.",
    "examples": ["The recalcitrant employee refused to follow the new procedure.", "She managed the recalcitrant client with patience and professionalism."]
  }, {
    "word": "Incisive",
    "type": "adjective",
    "definition": "Intelligently analytical and clear-thinking.",
    "examples": ["Her incisive analysis identified the core problem immediately.", "He delivered an incisive critique that cut through all the noise."]
  }, {
    "word": "Laconic",
    "type": "adjective",
    "definition": "Using few words; brief and to the point.",
    "examples": ["His laconic reply told her everything she needed to know.", "She is known for her laconic style — concise and always effective."]
  }, {
    "word": "Sanguine",
    "type": "adjective",
    "definition": "Optimistic, especially in a difficult situation.",
    "examples": ["She remained sanguine about the project's chances despite the setbacks.", "He was sanguine about the outcome and refused to show concern."]
  }, {
    "word": "Ephemeral",
    "type": "adjective",
    "definition": "Lasting for a very short time.",
    "examples": ["Fame in the digital age can be ephemeral — here today, forgotten tomorrow.", "The beauty of the sunset was ephemeral but deeply moving."]
  }, {
    "word": "Obfuscate",
    "type": "verb",
    "definition": "To make something unclear or difficult to understand.",
    "examples": ["The report seemed designed to obfuscate rather than illuminate.", "He obfuscated the truth with complex jargon and evasive language."]
  }, {
    "word": "Probity",
    "type": "noun",
    "definition": "The quality of having strong moral principles.",
    "examples": ["She is known throughout the industry for her probity and integrity.", "A leader's probity sets the ethical tone for the whole organisation."]
  }, {
    "word": "Taciturn",
    "type": "adjective",
    "definition": "Saying little; reserved in speech.",
    "examples": ["His taciturn manner gave little away about his true intentions.", "She was naturally taciturn but expressed herself brilliantly in writing."]
  }, {
    "word": "Caveat",
    "type": "noun",
    "definition": "A warning or condition attached to something.",
    "examples": ["She agreed to the proposal but added an important caveat.", "He accepted the offer with the caveat that the terms could be renegotiated."]
  }, {
    "word": "Erudite",
    "type": "adjective",
    "definition": "Having or showing great knowledge and learning.",
    "examples": ["She is one of the most erudite scholars I have ever encountered.", "His erudite commentary on the text was both insightful and accessible."]
  }, {
    "word": "Mendacious",
    "type": "adjective",
    "definition": "Not telling the truth; lying.",
    "examples": ["The mendacious report was exposed by investigative journalists.", "She was disturbed by his mendacious account of the events."]
  }, {
    "word": "Cogent",
    "type": "adjective",
    "definition": "Clear, logical, and convincing.",
    "examples": ["She presented a cogent argument that was hard to refute.", "His cogent analysis of the data impressed the entire committee."]
  }, {
    "word": "Tenuous",
    "type": "adjective",
    "definition": "Very weak or slight; not strong or firm.",
    "examples": ["The connection between the two events was tenuous at best.", "She held on to hope, though it was increasingly tenuous."]
  }, {
    "word": "Vindicate",
    "type": "verb",
    "definition": "To clear someone of blame or suspicion.",
    "examples": ["She was fully vindicated when the true facts came to light.", "His decision was vindicated by the outstanding results."]
  }, {
    "word": "Insidious",
    "type": "adjective",
    "definition": "Proceeding gradually and harmfully in a subtle way.",
    "examples": ["The insidious spread of misinformation is a serious modern problem.", "Burnout can be insidious — it creeps up on you without warning."]
  }, {
    "word": "Fastidious",
    "type": "adjective",
    "definition": "Very careful about accuracy and detail; hard to please.",
    "examples": ["She is fastidious about the quality of her written work.", "His fastidious attention to presentation impressed the clients."]
  }, {
    "word": "Exacerbate",
    "type": "verb",
    "definition": "To make something worse.",
    "examples": ["The misunderstanding only exacerbated the already tense situation.", "Cutting the budget will exacerbate the existing problems."]
  }, {
    "word": "Prescient",
    "type": "adjective",
    "definition": "Having knowledge of events before they take place.",
    "examples": ["Her prescient warnings about the market were largely ignored.", "He proved prescient in his prediction of the industry's rapid decline."]
  }, {
    "word": "Malleable",
    "type": "adjective",
    "definition": "Easily influenced or changed; adaptable.",
    "examples": ["She remained malleable in her approach, adjusting to new information.", "Young minds are malleable — what they learn early stays with them."]
  }, {
    "word": "Ubiquitous",
    "type": "adjective",
    "definition": "Present, appearing, or found everywhere.",
    "examples": ["Smartphones have become ubiquitous in every part of the world.", "She navigated the ubiquitous bureaucracy with patience and humour."]
  }, {
    "word": "Platitude",
    "type": "noun",
    "definition": "A remark that is overused and lacks original meaning.",
    "examples": ["Her speech was full of platitudes that impressed no one.", "He challenged the platitude with a specific, well-researched counterargument."]
  }, {
    "word": "Audacious",
    "type": "adjective",
    "definition": "Showing a willingness to take bold risks.",
    "examples": ["She made an audacious bid to acquire the larger company.", "His audacious proposal shocked the board but eventually won their support."]
  }, {
    "word": "Indomitable",
    "type": "adjective",
    "definition": "Impossible to defeat or discourage.",
    "examples": ["She displayed an indomitable spirit throughout the most difficult year of her life.", "His indomitable will to succeed inspired everyone around him."]
  }, {
    "word": "Specious",
    "type": "adjective",
    "definition": "Superficially plausible but actually wrong.",
    "examples": ["She exposed the specious reasoning in the report point by point.", "His argument sounded convincing but was ultimately specious."]
  }, {
    "word": "Vicarious",
    "type": "adjective",
    "definition": "Experienced through the feelings of another person.",
    "examples": ["She felt a vicarious thrill watching her student succeed.", "He lived vicariously through the achievements of his children."]
  }, {
    "word": "Pernicious",
    "type": "adjective",
    "definition": "Having a harmful effect, especially in a subtle way.",
    "examples": ["The pernicious influence of misinformation is difficult to counter.", "She identified the pernicious cycle of poor investment leading to worse outcomes."]
  }, {
    "word": "Pragmatism",
    "type": "noun",
    "definition": "A practical approach to problems and affairs.",
    "examples": ["Her pragmatism allowed her to find solutions where others saw only obstacles.", "The team valued pragmatism over idealism in their day-to-day decisions."]
  }, {
    "word": "Intransigent",
    "type": "adjective",
    "definition": "Refusing to change or compromise.",
    "examples": ["His intransigent position made a negotiated settlement impossible.", "She was intransigent on the key issue, which frustrated everyone."]
  }, {
    "word": "Loquacious",
    "type": "adjective",
    "definition": "Tending to talk a great deal; talkative.",
    "examples": ["Her loquacious host talked continuously throughout the meal.", "He became less loquacious as the seriousness of the meeting became clear."]
  }, {
    "word": "Verisimilitude",
    "type": "noun",
    "definition": "The appearance of being true or real.",
    "examples": ["The novel's verisimilitude made it feel more like a memoir.", "She added specific details to give the account greater verisimilitude."]
  }, {
    "word": "Anomaly",
    "type": "noun",
    "definition": "Something that deviates from what is standard or expected.",
    "examples": ["The result was an anomaly that could not be easily explained.", "She identified the anomaly in the data during her analysis."]
  }, {
    "word": "Prolific",
    "type": "adjective",
    "definition": "Producing many works, results, or offspring.",
    "examples": ["She is one of the most prolific writers in the field.", "The team was prolific in its output during the intensive month."]
  }, {
    "word": "Inexorable",
    "type": "adjective",
    "definition": "Impossible to stop or prevent.",
    "examples": ["The inexorable rise of technology is changing every industry.", "She accepted the inexorable passage of time with grace."]
  }, {
    "word": "Axiom",
    "type": "noun",
    "definition": "A statement accepted as obviously true.",
    "examples": ["It is an axiom in economics that people respond to incentives.", "She based her argument on the axiom that transparency builds trust."]
  }, {
    "word": "Capricious",
    "type": "adjective",
    "definition": "Changing suddenly and unexpectedly.",
    "examples": ["The capricious weather made planning the outdoor event impossible.", "His capricious management style frustrated the entire team."]
  }, {
    "word": "Circumspect",
    "type": "adjective",
    "definition": "Careful to consider all circumstances and consequences.",
    "examples": ["She was circumspect in her response, choosing each word carefully.", "A circumspect approach is wise when the stakes are high."]
  }, {
    "word": "Visceral",
    "type": "adjective",
    "definition": "Based on deep inward feelings rather than logic.",
    "examples": ["Her visceral reaction to the news surprised even her.", "The speech provoked a visceral response from the audience."]
  }, {
    "word": "Juxtapose",
    "type": "verb",
    "definition": "To place two things side by side to highlight contrasts.",
    "examples": ["The exhibition juxtaposes traditional painting with digital art.", "She juxtaposed the company's stated values with its actual behaviour."]
  }, {
    "word": "Burgeon",
    "type": "verb",
    "definition": "To begin to grow or increase rapidly.",
    "examples": ["New technology firms began to burgeon after the funding announcement.", "Her interest in linguistics burgeoned during her first year abroad."]
  }, {
    "word": "Esoteric",
    "type": "adjective",
    "definition": "Intended for or understood by only a small number of people.",
    "examples": ["The lecture became increasingly esoteric and lost much of the audience.", "She avoided esoteric references in her public presentations."]
  }, {
    "word": "Capitulate",
    "type": "verb",
    "definition": "To give in or surrender after resistance.",
    "examples": ["She refused to capitulate to the pressure and held her position.", "After hours of debate, he finally capitulated to the majority view."]
  }, {
    "word": "Terse",
    "type": "adjective",
    "definition": "Brief and direct, sometimes to the point of rudeness.",
    "examples": ["His terse reply made it clear that the conversation was over.", "She wrote a terse but effective summary of the key issues."]
  }, {
    "word": "Replete",
    "type": "adjective",
    "definition": "Filled or well-supplied with something.",
    "examples": ["The report was replete with evidence and well-argued conclusions.", "She arrived at the meeting replete with ideas and fully prepared."]
  }, {
    "word": "Salient",
    "type": "adjective",
    "definition": "Most noticeable or important.",
    "examples": ["She identified the most salient points and focused the discussion on those.", "The salient feature of the proposal was its focus on long-term sustainability."]
  }]
};
var wotdData = WOTD_FALLBACK; // overwritten on init from cache or remote

// ── SCRAMBLE WORD POOLS (A1/A2, B1/B2, C1, C2) ──────────────────────────────
// Plain word arrays — used only for the scramble game.
// Hint is auto-generated from word length + first letter.
var SCRAMBLE_WORDS = {
  Beginner: "AFRAID AFTER AGAIN AIRPORT AMAZING ANGRY ANIMAL ANSWER APPLE AREA ARRIVE ARTIST AUTUMN BABY BACK BALL BANANA BAND BANK BATH BEACH BEAUTIFUL BECAUSE BECOME BEFORE BEGIN BEHIND BELIEVE BICYCLE BIRTHDAY BLACK BLONDE BLUE BOAT BODY BOOK BOOT BORED BORING BOTTLE BOTTOM BREAD BREAK BREAKFAST BRING BROTHER BROWN BUILD BUILDING BUSY BUTTER CAFE CAKE CAMERA CARROT CARRY CHAIR CHANGE CHART CHEAP CHECK CHEESE CHICKEN CHILD CHOCOLATE CHOOSE CINEMA CITY CLASS CLASSROOM CLEAN CLIMB CLOCK CLOSE CLOTHES CLUB COAT COFFEE COLD COLOUR COME CONCERT COOK CORRECT COUNTRY CREAM DANCE DANGER DANGEROUS DARK DATE DAUGHTER DECIDE DELICIOUS DESK DICTIONARY DIFFERENT DIFFICULT DINNER DIRTY DISH DOOR DOWNSTAIRS DRAW DRESS DRINK DRIVE DRIVER EARLY EAST EASY EMAIL ENJOY EVENING EXAM EXAMPLE EXCITED EXERCISE EXPENSIVE EXPLAIN EXTRA FACE FALL FALSE FAMILY FAMOUS FANTASTIC FARMER FAST FAVOURITE FEEL FESTIVAL FILM FINAL FIND FINISH FIRE FISH FLAT FLIGHT FLOOR FLOWER FOLLOW FOOD FOOTBALL FORGET FORM FREE FRIEND FRIENDLY FRONT FRUIT FULL FUNNY GAME GARDEN GIRL GLASS GOOD GRANDFATHER GRANDMOTHER GREAT GREEN GREY GROUP GROW GUESS GUITAR HAIR HALF HAND HAPPEN HAPPY HARD HATE HEAD HEALTH HEALTHY HEAR HELLO HELP HIGH HISTORY HOBBY HOLIDAY HOME HOMEWORK HOPE HORSE HOSPITAL HOTEL HOUR HOUSE HUNGRY HUSBAND IDEA IMPORTANT INCLUDE INFORMATION INTERNET INTERVIEW ISLAND JACKET JEANS JOIN JOURNEY JUICE KEEP KITCHEN KNOW LAND LANGUAGE LARGE LATE LATER LAUGH LEARN LEAVE LESSON LETTER LIBRARY LIFE LIGHT LIKE LINE LION LIST LISTEN LITTLE LIVE LONG LOOK LOSE LOVE LUNCH MACHINE MAGAZINE MAIN MAKE MANY MARKET MARRIED MATCH MEAL MEAN MEAT MEET MEETING MEMBER MENU MESSAGE MIDDLE MIDNIGHT MILK MINUTE MISS MISTAKE MODEL MODERN MOMENT MONEY MONTH MORNING MOUNTAIN MOUTH MOVE MOVIE MUSEUM MUSIC NAME NEAR NEWS NEWSPAPER NEXT NICE NIGHT NOON NORTH NOSE NOTE NURSE NUMBER ORANGE ORDER OUTSIDE PAINT PAINTING PAIR PAPER PARENT PARK PARTY PASSPORT PASTA PHONE PHOTO PICTURE PINK PIZZA PLACE PLAN PLANE PLANT PLAY PLAYER POINT POLICE POOL POOR POPULAR POSSIBLE POTATO PRESENT PRETTY PRICE PROBLEM PURPLE RABBIT RADIO RAIN READ READY REAL REASON RELAX REMEMBER REPEAT REPORT RESTAURANT RETURN RICE RICH RIDE RIGHT RIVER ROAD ROCK ROOM RULE SALAD SALT SAME SCHOOL SCIENCE SCIENTIST SECOND SEND SHIRT SHOE SHOP SHOPPING SHORT SHOW SHOWER SING SISTER SKIRT SLEEP SLOW SMALL SNAKE SONG SORRY SOUTH SPEAK SPECIAL SPELL SPEND SPORT SPRING STAND START STATION STOP STORY STREET STRONG STUDY STYLE SUBJECT SUGAR SUMMER SWIMMING TABLE TAKE TALK TALL TAXI TEACH TEACHER TEAM TELEPHONE TENNIS TERRIBLE TEST THINK TICKET TIME TIRED TODAY TOGETHER TOMATO TRAIN TRAVEL TREE TRIP TRUE UMBRELLA UNCLE UNDERSTAND USUALLY VACATION VEGETABLE VIDEO VILLAGE VISIT VISITOR WAIT WAITER WALK WALL WARM WASH WATCH WATER WEATHER WEBSITE WEEK WEEKEND WELCOME WHITE WINDOW WINE WINTER WOMAN WONDERFUL WORD WORK WORLD WRITE WRITER WRONG YEAR YELLOW YOUNG".split(" "),
  Intermediate: "ABILITY ABROAD ACCEPT ACCIDENT ACHIEVE ACTIVE ADVANTAGE ADVENTURE ADVERTISE ADVICE AFFECT AIRLINE ALIVE ALLOW ALMOST ALONE ALONG ALREADY AMONG AMOUNT ANCIENT ANKLE APPEAR APPLY ARCHITECT ARGUE ARRANGEMENT ASSISTANT ATHLETE ATTACK ATTEND ATTENTION ATTRACTIVE AUTHOR AVAILABLE AVERAGE AVOID AWARD AWFUL BASEBALL BASKETBALL BATTERY BATTLE BEAUTY BELONG BELT BENEFIT BIOLOGY BLOOD BOARD BOIL BONE BORROW BOSS BOWL BRAIN BRIDGE BRIGHT BRILLIANT BROKEN BUILDING BURNING BUTTERFLY BUTTON CAMPAIGN CAREFUL CARPET CARTOON CASTLE CATCH CAUSE CELEBRATE CELEBRITY CERTAIN CHANCE CHARACTER CHARITY CHEMISTRY CHOICE CHURCH CIRCLE CLASSICAL CLEVER CLIMATE CLOTHING COACH COLLECT COMEDY COMFORTABLE COMMON COMMUNICATE COMMUNITY COMPARE COMPETE COMPETITION COMPLAIN COMPLETELY CONDITION CONFERENCE CONNECT CONSIDER CONTAIN CONTINENT CONTROL CORRECTLY COUPLE CRAZY CREATIVE CRIME CRIMINAL CROSS CROWD CROWDED DANGEROUS DEAD DEATH DECISION DEEP DEFINITELY DEGREE DENTIST DEPARTMENT DEPEND DESCRIBE DESERT DESIGN DESTROY DETECTIVE DEVELOP DEVICE DIARY DIRECTION DIRECTOR DISAGREE DISAPPEAR DISASTER DISCOVER DISCUSS DISEASE DISTANCE DOCUMENT DOUBLE DOWNLOAD DRAMA DRIVING EARTHQUAKE ECONOMY EDUCATE EDUCATION ELECTION ELECTRICITY EMOTION EMPLOYMENT ENCOURAGE ENEMY ENGINEERING ENTERTAIN ENVIRONMENT EPISODE ESCAPE ESSENTIAL EVENTUALLY EXAMINE EXCHANGE EXHIBITION EXPAND EXPEDITION EXPERIENCE FACTORY FAILURE FAMILIAR FASCINATING FASHIONABLE FASTEN FAVOURITE FICTION FIELD FIGHTING FINALLY FOLLOWING FOREIGN FOREST FORMAL FORTUNATELY FORWARD FRESH FURNITURE GALLERY GENERAL GENERATION GLOBALLY GOVERNMENT GREATLY HANDSOME HAPPINESS HEADACHE HEALTHY HEAVY HELPFUL HERO HONESTLY HOSPITAL HOWEVER HUGELY ILLNESS IMAGINE IMMEDIATELY IMPOSSIBLE INCREDIBLY INDEPENDENT INFORMATION INTELLIGENCE INVENTION JUNGLE KINDNESS LANGUAGE LEADERSHIP LIBRARY LIFESTYLE LOGICAL LOVELY MANAGER MARRIAGE MAXIMUM MEDICINE MEMORY MINIMUM MISSION MIXTURE MODERN NATURALLY NECESSARY NETWORK OBVIOUSLY OPPORTUNITY PARAGRAPH PASSION PATIENT PAYMENT PEACEFUL PHYSICAL PLANET PLANNER PLAYING PLEASURE POLITICS POVERTY POWERFUL PRACTISE PREVENT PRINCESS PROBABLY PRODUCE PROFILE PROGRAMME PROTECT PROVIDE PUBLISH QUALIFY QUARTER QUIETLY REASON RECOGNIZE REDUCE REGARDING RELATION RELIGIOUS RESEARCH RESPOND RESULT RETURN REVIEW REWARD ROMANTIC SAFETY SATISFY SEASON SELFISH SENSIBLE SERVICE SHOPPING SILENCE SIMILAR SIMPLE SITUATION SKYSCRAPER SOMEHOW SOMEWHERE SPECIAL STATEMENT STRENGTH STRUGGLE STUDENT SUBJECT SUCCEED SUCCESS SUGGESTION SUPPORT SUPPOSE SURPRISE THANKFUL THEREFORE THOUGHT THOUSAND TRADITION TRANSPORT TREATMENT TROUBLE TYPICAL USUALLY VALUABLE VARIETY VEGETABLE VISITORS WEBSITE WELCOME WONDER".split(" "),
  Advanced: "ABOLISH ABSENCE ABSURD ACADEMY ACCELERATE ACCEPTANCE ACCESSIBLE ACCOMPLISHMENT ACCOUNTABILITY ACCUMULATE ACCUSATION ACTIVIST ADAPTATION ADHERE ADJACENT ADMINISTRATIVE ADMINISTRATOR ADMISSION ADOLESCENT ADOPTION ADVERSE ADVOCATE AESTHETIC AFFECTION AFTERMATH AGGRESSION AGRICULTURAL ALERT ALIGNMENT ALLEGATION ALLIANCE ALLOCATE ALLOWANCE AMBASSADOR AMENDMENT ANALOGY ANONYMOUS APPEALING APPETITE APPLICABLE APPRECIATE ARBITRARY ARCHITECTURAL ARCHIVE ARTICULATE ASPIRATION AUTHENTIC AUTONOMY BENEFICIAL BREAKTHROUGH BUREAUCRACY CATASTROPHIC CAPTIVATE CHALLENGING CIRCULATION CIVILISATION COHERENTLY COLLECTIVELY COMMENTARY COMMITMENT COMPELLING COMPREHENSIVE CONCEIVABLE CONFRONTATION CONSEQUENTLY CONSERVATIVE CONSIDERABLE CONSTITUTIONAL CONTRADICTION CONTROVERSIAL CONVENTIONAL CONVICTION COOPERATION CORRUPTION CREDIBILITY CULTIVATION DECLARATION DELIBERATELY DEMONSTRATE DEPENDENCE DEPRIVATION DETERMINATION DEVASTATING DIPLOMATIC DISCRIMINATION DIVERSIFIED DOMINATION DRAMATICALLY EFFECTIVELY ELIMINATE ELOQUENTLY EMERGENCE ENVIRONMENTAL EQUIVALENT ESTIMATION EVALUATE EXAGGERATE EXCLUSIVELY EXHAUSTION FUNDAMENTAL FURTHERMORE GOVERNANCE HUMANITARIAN HYPOTHESIS IDEOLOGICAL IMPLEMENTATION IMPLICATION INSTITUTION INTEGRATE INTEGRITY INTELLECTUAL INVESTIGATION LEGISLATION LIBERALISE MANIPULATION MECHANISM METHODICAL MODIFICATION MOTIVATION NECESSARILY NEGOTIATION NEVERTHELESS NONETHELESS OBSERVATION OCCUPATION OPERATIONAL OPPOSITION OPTIMISTIC ORGANISATIONAL ORIENTATION OVERWHELM PARTICIPATION PERSPECTIVE PHENOMENON PHILOSOPHICAL PRAGMATIC PREVENTION PROCESSION PRODUCTIVITY PROFOUNDLY PROGRESSION PROHIBITION PROPORTIONAL PSYCHOLOGICAL PUBLICATION REALISTIC RECOGNITION RECOMMENDATION REGULATION REHABILITATION REINFORCE RELUCTANTLY REPRESENTATION RESTRUCTURE RETENTION REVELATION REVOLUTIONARY SIGNIFICANTLY SOPHISTICATED SUBSTANTIAL SUSTAINABILITY SYSTEMATIC TEMPORARILY TESTIMONIAL THEORETICAL TRANSITION TREMENDOUS ULTIMATELY UNCERTAINTY UNDERSTANDING UNPRECEDENTED VOLUNTARILY VULNERABILITY WIDESPREAD WILLINGNESS".split(" "),
  Proficiency: "ABROGATION ACRIMONIOUS ADJUDICATION AMBIVALENCE AMELIORATE ANACHRONISM ANTAGONISTIC ANTHROPOLOGICAL APPREHENSION ARBITRATION ARTICULATION ASSIDUOUS ATTENUATION AUTHORITARIAN AXIOMATIC BENEVOLENT BUREAUCRATIC CAPRICIOUS CAPITULATE CATEGORICAL COERCION COMPLACENCY COMPREHENSIVE CONCILIATORY CONNOTATION CONSCIENTIOUS CONTROVERSIAL CONVOLUTION CUMBERSOME DEFERENCE DELIBERATION DELETERIOUS DEMARCATION DEPRECATING DESTABILISE DETERIORATION DIMINUTIVE DIPLOMATIC DISCERNMENT DISCRETIONARY DISILLUSIONMENT DISSEMINATION DYSFUNCTIONAL ECCLESIASTICAL EGREGIOUS ELUCIDATION EMBROILED EMINENCE EMPIRICAL ENCAPSULATE EPHEMERAL EQUANIMITY ERADICATION EQUIVOCATE EXACERBATE EXPEDITIOUS EXPLICIT EXTRAPOLATE FACILITATION FALLACIOUS FORMIDABLE FRAGMENTATION FRAUDULENT FUNDAMENTALLY GOVERNANCE GROUNDBREAKING HIERARCHY HYPOTHETICAL IDEOLOGICAL ILLUMINATE IMPECCABLE IMPERCEPTIBLE IMPUNITY INADVERTENT INCAPACITATE INCLINATION INCONCEIVABLE INDISPENSABLE INFLAMMATORY INHERENT INSIDIOUS INTRANSIGENT IRREFUTABLE JURISDICTION JUSTIFICATION LEGITIMACY LOQUACIOUS MAGNANIMOUS MANIPULATION METICULOUS MITIGATE MULTIFACETED NEGLIGENT NONCHALANT OBFUSCATE OBSOLESCENCE OBSEQUIOUS PARADOXICAL PEDANTIC PERFIDIOUS PERIPHERAL PERPETUATE PHENOMENON POLARISATION PRAGMATIC PREROGATIVE PROCRASTINATE PRODIGIOUS PROLIFERATION PROPAGANDA PROPORTIONATE PROVOCATIVE PRUDENT QUINTESSENTIAL RAMIFICATION RECALCITRANT RECIPROCAL RELINQUISH REMONSTRATE RESILIENCE RETROSPECTIVE REVELATORY SANGUINE SCRUTINISE SCEPTICISM SOLIPSISTIC SOPHISTICATED SPECULATIVE STIPULATION SUBVERSION SUPERFICIAL SUPERCILIOUS SUSCEPTIBILITY SYCOPHANTIC TENACIOUS THEORETICAL TRUCULENT UBIQUITOUS UNPRECEDENTED UNEQUIVOCAL UNILATERAL VACILLATE VEHEMENTLY VULNERABLE WILLINGNESS".split(" ")
};
// ── DICTIONARY ─────────────────────────────────────────────────────────────────
var DICT = new Set("ace act add age ago aid aim air ale all and ant any ape apt arc are ark arm art ash ask ate awe axe aye bad bag ban bar bat bay bed beg bet bid big bit bob bog bow box boy bud bug bun bus but buy cab can cap car cat cop cow cry cup cut dab dam day did dig dim dip dog dot dry due dug dye ear eat egg ego elf elk elm end era eve ewe eye fad fan far fat fax fee few fib fig fin fit fix fly foe fog for fox fry fun fur gag gap gas gel gem get gig gin gnu god got gum gun gut guy gym had ham has hat hay hen her hew hex hid him hip his hit hoe hog hop hot how hub hug hum hut ice ill imp ink inn ion ire ivy jab jag jam jar jaw jay jet job jog jot joy jug keg key kid kin kit lab lag lap law lax lay led leg let lid lip lit log lot low mad man map mat may men met mix mob mop mud mug nab nag nap nod nor not now nun odd off oil old opt orb ore our out owe own pad pal pan par pat paw pay peg pen per pet pie pig pin pit pod pop pot pro pub pun put rag ram ran rap rat raw ray red ref rep rid rig rim rip rob rod rot row rub rug rum run rut sad sag sat saw say set sew shy sin sip sir sit six ski sky sob son sow spy sub sue sum sun tab tan tap tar tax tea ten tie tin tip toe ton too top toy try tub tug two urn use van vat vet vow wad wag was wax web wed wet who why wig win wit woe won woo yak yam yap yet yew you zoo able ache acid acre aged aide also alto amok anew ante apex arch area army arts atom aunt auto avid away awed axes axis baby back bail bake bald bale ball balm band bane bang bank bare bark barn base bass bath bead beak beam bean beat beer beet belt best bile bill bind bird bite blow blue blur boar boat bold bolt bore born boss bout brew brow bulk bull bump bunk burn bush bust busy cage cake calf call calm came camp card care carp cart case cave cent char chef chew chin chip chop clam clay club clue coal coat coil cold colt comb come cone cook cool cope cord core cork corn cost coup cozy crab cram crew crop crow cube cuff cult cure curb curl dare dark dart dash data date dawn daze dead deaf deal dean deer demo deny desk dire dirt disk dive dock does dolt dome done doom door dose dove down drag draw drip drop drum dual dull dumb dune dunk dust each earl earn ease east edge emit envy epic exam exit face fade fail fake fall fame fang fare farm fast fate fawn fear feat feed feel feet felt fend fern file fill film find fine fire firm fish fist five flag flaw flea flew flex flip flit flow foam foil fond fool foot ford fore fork form fort four fowl free frog from fuel full fume fuse gale gall game gape gash gate gave gaze gear gild give glad glee glow glue goad goes gold golf gone good gown grab gram grin grip grit grow gulf gull gust hack hail hair half halt hand hang hard hare harm harp hash have hawk haze head heal heap heat heed heel help herb hide high hike hill hint hive hold hole holy home hood hook hope horn hose host hour howl hulk hull hunt hurl idea idle inch into isle itch jerk jest join joke jolt junk just keen keep kill kind king kiss knob knot know lack laid lake lamb lamp land lane lard lash last late lead lean leap left lend levy lime limp line link lion list live load loaf loan loft lone long look loom loon loot lord lose lost loud love luck lull lump lung lure lurk made mail main make male mall malt mane mark mast math maze meal mean meat meet melt mere mesh mild mill mind mine mint miss mist moan mole monk moon more most move muck mute myth nail name neat neck need nest next nice nine none noon nose note noun nude null ogle omen once only open oven over pact page pain pair pale palm pane park part past path pave peak pear peel peer pelt perk pine pink pipe pity plan plod plop plot plow plum poem pole pond pool pore pose pour pray prep prey prim prod prop pull pump pure push rack rain rake ramp rank rant rare rash rate rave read real reap reel rein rely rest rice ride rife rift ring riot rise risk roam roar robe rock role roll room root rope rose rude ruin rule ruse rush rust ruby saga sage sail sake sale same sand sane sang sank save scan scar seal seam seek seem seep self sell send shed shin ship shoe shop shot show sick side sigh sign silk sing sink site skin skip slab slap slim slip slit slow slum snap snow soak soar sock soil sole some soot sort soul soup sour span spin spit spot spur star stay stem step stir stop stub stud stun such suit sung sunk sure surf tail tale tall tame task team tear tell tend term test text than that them then they thin this thus tide till tilt time tint toad told toll tomb tone took tore torn tour town trek trim trio trip true tube tuck tune tusk type upon urge used vale vast veil vein vent verb very vest veto view vine vise volt wade wail wait wake walk wall wane ward warm warp wash wave wean weed week well went were west when whim whip wick wide wife wild will wilt wind wine wing wink wire wise wish wolf wood wool word wore work worm worn wrap yawn year yell your zeal zero zone zoom about above abuse acute admit adult after again agent agree ahead alarm album aloof aloud alpha altar alter ample angel anger angle angry annex anvil apart apple apply ardor argue array arrow arson aside asset atlas attic avail avoid awake award aware awful beach beard beast began being below bench berry black blade bland blast blaze bleed blend bless blind blink bliss block blood bloom blown board boost booth bound brain braid brand brave bread break breed brick bride brief brine bring broad brook broom broth brown brush buddy build built bully burst cabin candy canoe cargo carry catch cause chain chair chaos charm chase cheap cheat cheek cheer chess chest chief child choir chord civic civil claim class clean clear clerk click cliff climb cling clock close cloud clown cobra color comic comma count cover craft crane crash crawl creak creek crime cross crowd crown crush cycle daily dance dealt death debut decay decoy delay delta dense depot depth derby devil digit dirty disco dizzy dodge doubt dough draft drain drama drape drawn dream dress drift drink drive drool drove drunk dryer dwarf dying eagle early earth eight elite empty enjoy enter entry equal error essay every exact exist extra fable facet fairy faith fancy fatal feast fence ferry fetch fever fewer fiber field fifth fifty fight final first fixed flame flask flesh flick float flock flood floor flour fluid flush flute force forge forth found frame frank fraud front froth fruit fully ghost giant given glare glass globe gloom gloss glove grace grade grain grand grant grape grasp grass grave graze great greed green greet grief grind groan gross group grove grown gruff guard guise gusto happy harsh haven heart heavy hedge hippo hoist holly horse hotel house human humid humor hunch hurry ideal image imply infer inner input joust judge juice juicy jumbo juror knack kneel knife knock labor large laser later latch laugh layer learn lease least leave legal level light linen liver lodge looks lover lower loyal lucky lunch lyric magic major maker manor march marry match maybe mayor mercy merit metal might minor minus model moist money moose moral mount mouse mouth mulch movie music naval never night noble noise north noted novel nurse occur ocean olive other otter outer owner oxide ozone pagan paint panic paper party pasta paste patch peace peach pearl phone photo piano piece pilot pitch pizza place plain plane plant plate plaza pluck plumb point poker polar pound power price pride prime print prize probe prone proof proud prove prowl prune punch pupil queen quest quick quiet quota quote radar radio raise ranch range rapid ratio reach ready realm rebel refer reign relax reply rider ridge right risky rival river robot rouge rough round route royal ruler scary scene score scout screw sedan serve seven shade shall shame shape share shark sharp shelf shell shift shine shirt shore short shout shove sight since sixth sixty skill skull slack slash slate slave sleep slice slide slope small smart smell smile smoke snail snake sneak snore solar solve sorry south space spare spark speak speed spell spend spice spill spine spite split spook spray stack staff stage stain stale stall stamp stand stark start state steal steam steep steer stern stiff still sting stock stoke stone storm story stout stove strap straw stray strip stump style sugar suite sunny super surge swamp swear sweep sweet swept swift sword table taste teeth thank their there these thick thing think third thorn those three threw throw thumb tiger timer tired title today token topic total touch tough towel tower toxic track trail train trait trash tread treat trick tried troop troll trout truce truly trust truth tulip tumor twice twist tying ultra uncle under unify union unite until upper upset urban usage vague valid valor valve value vapor vault video vigor viola viral virus visit visor vital vivid voice voter vowel waist watch water weary wedge weird while white whole wider witty woman women wrath wreck wrist write wrote wrong yacht yield young youth absent accept across action actual affect afford afraid agenda almost always answer anyone anyway appear around assert assist attack autumn battle beauty before behind belief better beyond bridge broken budget cancel castle chance change charge choice church circle client closed coffee column common course cousin create crisis custom dancer danger debate define delete demand design detail differ direct divide doctor dollar dragon driven during effect either empire enable engine enough ensure escape except expect expert export extend fabric factor family famous father figure filter finger finish follow format fought frozen garden gather gentle golden ground happen health height hidden honest impact import indeed inside intent island knight leader length little latter launch lesson listen living losing longer making manage marble market master member mirror missed mobile modern module monkey mortal mother motion muscle nature nearby normal notice obtain online orange origin parent person phrase pirate please pledge plenty police potato prefer pretty priest profit proven public purple puzzle racial random reason recipe reduce refine regard remote rescue resort result return reveal review ribbon riding rising rocket rotate rubber safety salary sample silver simple single sister smooth social spoken spring starve string strong summer supply travel target rather really remove repair repeat report signal silent sketch sleepy slowly strive studio switch system theory though threat throne ticket timber timing tongue toward turban unique unless update useful vendor verify warden weekly winter within wonder yellow ability absence account achieve address advance against already ancient another anxiety applied approve attempt attract balance believe between cabinet captain capture careful certain chamber chapter chicken climate comfort command complex concern connect content control convert correct culture current decided declare defense deliver despite develop digital discuss disease display distant divided drawing element example explain factory failure fashion feeling finally finding forever forward freedom general getting gravity greater growing healthy history however hundred improve include instead justice kitchen largest learned library limited logical looking machine meaning measure medical message million minimum mistake morning mystery natural network nothing observe obvious officer opinion outcome outside overall package payment perfect picture popular portion positive primary private product protect provide purpose quality quarter quickly rapidly realize receive reflect require resolve respect respond reverse routine roughly section serious service several similar society solving special station storage student subject success suggest support survive teacher telling therapy through tonight traffic turning typical unified unusual usually version village visible writing working".split(" "));

// ── BOOKWORM ENGINE ────────────────────────────────────────────────────────────
var POOL = "EEEEEEEEEEEETTTTTTTTTAAAAAAAAAOOOOOOOOIIIIIIINNNNNNSSSSSSHHHHHHRRRRRDDDDDLLLLLUUUCCCMMMWWWFFGGYYPPBBVVKJXQZ";
var COLS = 6,
  ROWS = 6,
  TOTAL = COLS * ROWS;
var MIN_WORD = {
  Beginner: 3,
  Intermediate: 4,
  Advanced: 5,
  Proficiency: 5
};
var SHORT_SEEDS = {
  Beginner: "cat dog run hot big eat sea sun sky car hat cup fan fly cry sit say set cut hit air ant ace ban bar bat bay bug bun cap ear end eye far few get gin ham hay hen hop joy key kid lab lag law lay led leg lid lip log lot mad men mud nap nod old pad pan pay pen pet pie pin pod pop pot pub rag ram rap rat ray red rob rod row rub rug rum rut sad saw sin sip sob tab tan tap tea tin tip toe ton top toy tub van wet win yam zoo".split(" "),
  Intermediate: "able aged area army back bake ball band bank bare barn base bath beat beer belt bill bind bird bite blue boat bold bore burn bush cage cake call calm camp card care cart cave cent chef chip coal coat cold come cone cook cool cord core corn cost crab crew crop cube cure dare dark dash date dawn deal deer deny desk dive dock done door dose dove down drag draw drop drum dust earl earn ease edge face fade fall fame fare farm fast fear feed feet felt file fill film find fine fire firm fish fist five flag flaw flea flew flow foam foil fond foot ford form fort four free frog fuel full game gate gear give glad glow glue gold good gown gram grin grip grow gulf hair halt hand hang hard harm have head heal heap heat heel help hide high hill hold hole home hook hope horn host hour hunt idea inch isle jerk jest join joke just keen keep kill kind king kiss knot lack lake lamb lamp land lane lash last late lead lean left lend lime line link lion list live load loan long look loom loot lord lose loud love luck lump lung made mail main make mark mast maze meal mean meat meet mild mill mind mine mint miss mist mole moon more most move nail name neat neck need nest next nice none noon note once open over pain pair pale palm pane park part past path peak pear peel pine pipe plan plot pole pond pool pose pour prey pull pump pure push rack rain rake rank rare rash rate read real reel rest rice ride ring riot rise risk roam rock role roll room root rope rose ruin rule rush sage sail sale same sand save seal seam seek seem self sell send ship shoe shop shot show sick side silk sing sink star stay stem step stir stop suit tail tale tall task team tell tend term test than them thin tide time toad told tone took tour town trim true tube tune type urge vale veil verb vest view vine wake walk wall ward warm wash wave weed well went wide wife wild will wind wine wing wire wise wolf wood wool word wore work wrap year yell zero zone".split(" "),
  Advanced: "about above abuse acute admit adult after again agent agree ahead alarm album alter ample angel anger angle apart apple apply argue array arrow aside asset avail avoid awake award aware beach beard beast began being below bench black blade bland blast blaze bleed blend bless blind block blood bloom board boost bound brain brand brave bread break breed brick bride bring broad brook brown brush build built burst carry catch cause chain chair chaos charm chase cheap cheat chest chief child civic claim class clean clear click cliff climb clock close cloud color count cover craft crane crash crawl creek crime cross crowd crown crush cycle dance dealt death delay dense depth devil dodge doubt draft drain drama drawn dream dress drift drink drive drunk eagle early earth eight elite empty enjoy enter equal error every exact exist extra fairy faith fancy fatal feast fence fever fewer field fight final first fixed flame flesh float flock flood floor force forge forth found frame frank fraud front fruit ghost giant given glare glass globe gloom grace grade grain grand grant grape grasp grass grave graze great greed green greet grief grind groan group grove grown guard happy harsh haven heart heavy horse hotel house human humor hurry image imply infer inner judge juice knack kneel knife knock labor large laser later laugh layer learn lease leave legal level light looks lover lower loyal lucky lunch magic major march marry match maybe mercy merit metal might minor model money moral mount mouse mouth movie music never night noble noise north novel nurse occur ocean other outer owner paint panic paper party pasta patch peace pearl phone piece pilot place plain plane plant plate pluck point pound power price pride prime print prize proof proud prove punch queen quest quick quiet quote radar radio raise range rapid reach ready realm rebel refer reign relax reply rider ridge right rival river robot rough round route royal scene score scout serve seven shade shall shame shape share shark sharp shelf shell shift shine shirt shore short shout sight skill skull slash slate slave sleep slice slide slope small smart smell smile smoke snail snake sneak solar solve sorry south space spare spark speak speed spell spend spice spine spite split spray stack staff stage stain stale stamp stand stark start state steal steam steep steer stern stiff still sting stock stone storm story stout strap straw stray strip stump style sugar sunny super surge swamp swear sweep sweet swift sword table taste teeth thank their there these thick thing think third thorn those three threw throw tiger tired title today token topic total touch tough tower toxic track trail train trait trash tread treat trick tried trout truce truly trust truth twice twist uncle under union unite until upper upset urban usage vague valid valor value vapor vault video vigor virus visit vital vivid voice voter waist watch water weary wedge weird while white whole woman women wrath wreck wrist write wrote wrong yield young youth".split(" "),
  Proficiency: "abroad absorb accrue accuse achieve acquire advocate ancient aspect assert assess assume attach attain balance battle behalf blanket border bridge burden cabinet certain chapter charity climate coastal collect combine commit complex confirm connect contact context convert counter culture customs damage debate defend define deliver demand depict display dispute distant diverse domain double effect effort enable endure engage ensure entire entity equity escape evolve exceed exclude expand export factor filter format foster gather gender global govern hazard impact impose income inform invest isolate justify launch legacy liberal locate margin mental method motion native normal obtain offset oppose option pattern perform permit policy prefer primary promote protect pursue reform region relate report resolve retain review reward robust secure select series signal stable stream submit succeed target threat treaty trigger unique update values vision welfare wisdom".split(" ")
};
var LONG_SEEDS = {
  Beginner: ["happy", "sunny", "water", "earth", "stone", "light", "heart", "sleep", "dream", "early", "night", "young", "small", "black", "white", "great", "green", "short", "place", "found"],
  Intermediate: ["bright", "travel", "simple", "master", "beauty", "wonder", "castle", "gentle", "garden", "silver", "winter", "nature", "honest", "create", "battle", "change", "bridge", "strong", "driven", "report"],
  Advanced: ["ancient", "captain", "careful", "certain", "freedom", "history", "mystery", "perfect", "special", "natural", "morning", "general", "believe", "develop", "discuss", "digital", "climate", "chapter", "century", "company", "control", "comfort", "correct", "culture", "balance"],
  Proficiency: ["abstract", "accurate", "achieved", "attached", "balanced", "becoming", "breaking", "captured", "climbing", "combined", "complete", "continue", "contract", "creating", "critical", "cultural", "describe", "directly", "discover", "distance", "educated", "emerging", "enormous", "entirely", "evidence", "exchange", "exercise", "extended", "familiar", "finished", "followed", "function", "gathered", "greatest", "heritage", "industry", "informed", "integral", "interest", "involved", "launched", "learning", "majority", "material", "movement", "national", "observed", "overcome", "practice", "prepared", "presence", "produced", "progress", "provided", "required", "research", "resolved", "resource", "response", "returned", "revealed", "selected", "strength", "together", "traveled", "ultimate", "universe", "valuable"]
};
var randL = function randL() {
  return POOL[Math.floor(Math.random() * POOL.length)];
};
function getNeighbors(idx) {
  var r = Math.floor(idx / COLS),
    c = idx % COLS,
    res = [];
  for (var dr = -1; dr <= 1; dr++) for (var dc = -1; dc <= 1; dc++) {
    if (dr === 0 && dc === 0) continue;
    var nr = r + dr,
      nc = c + dc;
    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) res.push(nr * COLS + nc);
  }
  return res;
}
function placeWord(grid, word, used) {
  var letters = word.toUpperCase().split("");
  var _loop = function _loop() {
      var start = Math.floor(Math.random() * TOTAL);
      if (used.has(start)) return 0; // continue
      var path = [start],
        ps = new Set([start]);
      var ok = true;
      for (var i = 1; i < letters.length; i++) {
        var nbrs = getNeighbors(path[path.length - 1]).filter(function (n) {
          return !ps.has(n) && !used.has(n);
        });
        if (!nbrs.length) {
          ok = false;
          break;
        }
        var next = nbrs[Math.floor(Math.random() * nbrs.length)];
        path.push(next);
        ps.add(next);
      }
      if (ok) {
        letters.forEach(function (l, i) {
          grid[path[i]] = _objectSpread(_objectSpread({}, grid[path[i]]), {}, {
            letter: l
          });
        });
        path.forEach(function (i) {
          return used.add(i);
        });
        return {
          v: true
        };
      }
    },
    _ret;
  for (var a = 0; a < 200; a++) {
    _ret = _loop();
    if (_ret === 0) continue;
    if (_ret) return _ret.v;
  }
  return false;
}
function seedGrid(grid, level) {
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  var longChance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
  var used = new Set();
  grid.forEach(function (c, i) {
    if (c.special === "burn") used.add(i);
  });
  var placed = 0;
  if (Math.random() < longChance) {
    var lw = LONG_SEEDS[level];
    if (placeWord(grid, lw[Math.floor(Math.random() * lw.length)], used)) placed++;
  }
  var shuffled = _toConsumableArray(SHORT_SEEDS[level]).sort(function () {
    return Math.random() - .5;
  });
  var _iterator = _createForOfIteratorHelper(shuffled),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var w = _step.value;
      if (placed >= count) break;
      if (placeWord(grid, w, used)) placed++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function makeGrid(level) {
  var prev = Array(TOTAL).fill(null).map(function (_, i) {
    return {
      id: i,
      letter: randL(),
      special: null,
      heat: 0
    };
  });
  var next = prev.map(function (c, i) {
    if (c.special === "burn") {
      var h = c.heat - 1;
      return h <= 0 ? {
        id: i,
        letter: randL(),
        special: null,
        heat: 0
      } : _objectSpread(_objectSpread({}, c), {}, {
        heat: h
      });
    } else {
      var rnd = Math.random();
      return {
        id: i,
        letter: randL(),
        special: rnd < 0.03 ? "gold" : rnd < 0.13 ? "green" : null,
        heat: 0
      };
    }
  });
  seedGrid(next, level, 3, 0.3);
  return next;
}
function addBurn(grid) {
  var top = [];
  for (var i = 0; i < COLS * 2; i++) if (grid[i].special !== "burn") top.push(i);
  if (!top.length) return grid;
  var idx = top[Math.floor(Math.random() * top.length)];
  return grid.map(function (c, i) {
    return i === idx ? _objectSpread(_objectSpread({}, c), {}, {
      special: "burn",
      heat: 4
    }) : c;
  });
}
function isAdj(a, b) {
  return Math.abs(Math.floor(a / COLS) - Math.floor(b / COLS)) <= 1 && Math.abs(a % COLS - b % COLS) <= 1 && a !== b;
}
function calcScore(sel, grid) {
  var base = sel.length <= 3 ? 1 : sel.length === 4 ? 2 : sel.length === 5 ? 4 : sel.length === 6 ? 6 : 10;
  return base + sel.reduce(function (s, i) {
    return s + (grid[i].special === "green" ? 2 : grid[i].special === "gold" ? 5 : 0);
  }, 0);
}

// ── STYLES ─────────────────────────────────────────────────────────────────────
var S = {
  wrap: function wrap(bg) {
    return {
      fontFamily: "'Segoe UI',system-ui,sans-serif",
      background: bg || "linear-gradient(160deg,#1e1b4b,#3730a3,#312e81)",
      minHeight: "100vh",
      color: "#fff"
    };
  },
  back: {
    background: "rgba(255,255,255,.12)",
    border: "none",
    color: "#fff",
    borderRadius: 12,
    padding: "7px 14px",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "inherit"
  },
  hdr: {
    padding: "18px 20px 10px",
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  card: function card(g) {
    return {
      background: g,
      borderRadius: 22,
      padding: "20px 18px",
      cursor: "pointer",
      userSelect: "none"
    };
  },
  opt: function opt(st) {
    return {
      background: st === "correct" ? "rgba(74,222,128,.22)" : st === "wrong" ? "rgba(248,113,113,.22)" : "rgba(255,255,255,.08)",
      border: "1.5px solid " + (st === "correct" ? "#4ade80" : st === "wrong" ? "#f87171" : "rgba(255,255,255,.15)"),
      borderRadius: 14,
      padding: "13px 16px",
      marginBottom: 10,
      cursor: st ? "default" : "pointer",
      fontSize: 15,
      color: "#fff",
      width: "100%",
      fontFamily: "inherit",
      textAlign: "left"
    };
  },
  inp: {
    width: "100%",
    padding: 14,
    borderRadius: 14,
    border: "2px solid rgba(255,255,255,.25)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: 700,
    outline: "none",
    letterSpacing: 4,
    marginBottom: 14,
    boxSizing: "border-box",
    fontFamily: "inherit"
  },
  btn: function btn(g) {
    return {
      width: "100%",
      padding: 14,
      background: g,
      border: "none",
      borderRadius: 14,
      color: "#fff",
      fontWeight: 700,
      fontSize: 16,
      cursor: "pointer",
      fontFamily: "inherit"
    };
  },
  bubble: function bubble(u) {
    return {
      maxWidth: "80%",
      background: u ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "rgba(255,255,255,.1)",
      borderRadius: u ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
      padding: "11px 15px",
      fontSize: 14,
      lineHeight: 1.6
    };
  }
};
var TOPICS = ["Daily Life 🏠", "Travel ✈️", "Food & Cooking 🍜", "Work & Career 💼", "Hobbies & Fun 🎨", "Technology 💻", "Health & Fitness 💪", "Nature & Environment 🌿", "Movies & TV 🎬", "Music 🎵", "Sports ⚽", "Shopping 🛍️", "Family & Friends ❤️", "Science & Space 🔭", "Art & Culture 🎭", "News & Society 📰", "General Topic 🌐"];

// ── MONSTER DATA ───────────────────────────────────────────────────────────────
var SYNONYM_DATA = {
  Beginner: [{
    word: "Happy",
    correct: "Joyful",
    options: ["Joyful", "Angry", "Tired", "Hungry"]
  }, {
    word: "Big",
    correct: "Large",
    options: ["Large", "Tiny", "Empty", "Quiet"]
  }, {
    word: "Fast",
    correct: "Quick",
    options: ["Quick", "Slow", "Heavy", "Dark"]
  }, {
    word: "Cold",
    correct: "Chilly",
    options: ["Chilly", "Warm", "Loud", "Bright"]
  }, {
    word: "Good",
    correct: "Nice",
    options: ["Nice", "Bad", "Rough", "Lazy"]
  }, {
    word: "Easy",
    correct: "Simple",
    options: ["Simple", "Hard", "Strange", "Lost"]
  }],
  Intermediate: [{
    word: "Brave",
    correct: "Courageous",
    options: ["Courageous", "Cowardly", "Lazy", "Reckless"]
  }, {
    word: "Curious",
    correct: "Inquisitive",
    options: ["Inquisitive", "Bored", "Distant", "Careless"]
  }, {
    word: "Achieve",
    correct: "Accomplish",
    options: ["Accomplish", "Fail", "Abandon", "Ignore"]
  }, {
    word: "Patient",
    correct: "Calm",
    options: ["Calm", "Hasty", "Rude", "Nervous"]
  }, {
    word: "Honest",
    correct: "Truthful",
    options: ["Truthful", "Deceitful", "Vague", "Reckless"]
  }, {
    word: "Generous",
    correct: "Giving",
    options: ["Giving", "Selfish", "Timid", "Strict"]
  }],
  Advanced: [{
    word: "Eloquent",
    correct: "Articulate",
    options: ["Articulate", "Mute", "Clumsy", "Confused"]
  }, {
    word: "Tenacious",
    correct: "Persistent",
    options: ["Persistent", "Wavering", "Passive", "Careless"]
  }, {
    word: "Meticulous",
    correct: "Thorough",
    options: ["Thorough", "Careless", "Hasty", "Vague"]
  }, {
    word: "Ambiguous",
    correct: "Vague",
    options: ["Vague", "Precise", "Clear", "Direct"]
  }, {
    word: "Ephemeral",
    correct: "Fleeting",
    options: ["Fleeting", "Permanent", "Lasting", "Stable"]
  }, {
    word: "Diligent",
    correct: "Industrious",
    options: ["Industrious", "Lazy", "Reckless", "Passive"]
  }],
  Proficiency: [{
    word: "Magnanimous",
    correct: "Benevolent",
    options: ["Benevolent", "Petty", "Vindictive", "Callous"]
  }, {
    word: "Loquacious",
    correct: "Garrulous",
    options: ["Garrulous", "Taciturn", "Reserved", "Reticent"]
  }, {
    word: "Perspicacious",
    correct: "Shrewd",
    options: ["Shrewd", "Obtuse", "Naive", "Gullible"]
  }, {
    word: "Recalcitrant",
    correct: "Obstinate",
    options: ["Obstinate", "Compliant", "Docile", "Amenable"]
  }, {
    word: "Supercilious",
    correct: "Arrogant",
    options: ["Arrogant", "Humble", "Modest", "Deferential"]
  }, {
    word: "Ephemeral",
    correct: "Transient",
    options: ["Transient", "Perpetual", "Enduring", "Perennial"]
  }]
};
var ANTONYM_DATA = {
  Beginner: [{
    word: "Happy",
    correct: "Sad",
    options: ["Sad", "Excited", "Tired", "Hungry"]
  }, {
    word: "Big",
    correct: "Small",
    options: ["Small", "Tall", "Heavy", "Loud"]
  }, {
    word: "Fast",
    correct: "Slow",
    options: ["Slow", "Strong", "Tall", "Bright"]
  }, {
    word: "Cold",
    correct: "Hot",
    options: ["Hot", "Wet", "Dark", "Quiet"]
  }, {
    word: "Good",
    correct: "Bad",
    options: ["Bad", "Loud", "Heavy", "Strange"]
  }, {
    word: "Easy",
    correct: "Hard",
    options: ["Hard", "Slow", "Empty", "Dark"]
  }],
  Intermediate: [{
    word: "Brave",
    correct: "Cowardly",
    options: ["Cowardly", "Angry", "Tired", "Reckless"]
  }, {
    word: "Generous",
    correct: "Selfish",
    options: ["Selfish", "Honest", "Careless", "Loud"]
  }, {
    word: "Patient",
    correct: "Impatient",
    options: ["Impatient", "Honest", "Curious", "Quiet"]
  }, {
    word: "Honest",
    correct: "Deceitful",
    options: ["Deceitful", "Brave", "Calm", "Quick"]
  }, {
    word: "Curious",
    correct: "Indifferent",
    options: ["Indifferent", "Joyful", "Strong", "Polite"]
  }, {
    word: "Diligent",
    correct: "Lazy",
    options: ["Lazy", "Focused", "Active", "Busy"]
  }],
  Advanced: [{
    word: "Eloquent",
    correct: "Inarticulate",
    options: ["Inarticulate", "Persuasive", "Fluent", "Vivid"]
  }, {
    word: "Tenacious",
    correct: "Irresolute",
    options: ["Irresolute", "Stubborn", "Focused", "Bold"]
  }, {
    word: "Meticulous",
    correct: "Careless",
    options: ["Careless", "Precise", "Careful", "Thorough"]
  }, {
    word: "Ambiguous",
    correct: "Clear",
    options: ["Clear", "Vague", "Obscure", "Hidden"]
  }, {
    word: "Ephemeral",
    correct: "Permanent",
    options: ["Permanent", "Brief", "Fleeting", "Short"]
  }, {
    word: "Diligent",
    correct: "Lazy",
    options: ["Lazy", "Focused", "Active", "Energetic"]
  }],
  Proficiency: [{
    word: "Magnanimous",
    correct: "Petty",
    options: ["Petty", "Noble", "Generous", "Gallant"]
  }, {
    word: "Loquacious",
    correct: "Taciturn",
    options: ["Taciturn", "Verbose", "Talkative", "Chatty"]
  }, {
    word: "Perspicacious",
    correct: "Obtuse",
    options: ["Obtuse", "Astute", "Clever", "Shrewd"]
  }, {
    word: "Recalcitrant",
    correct: "Compliant",
    options: ["Compliant", "Stubborn", "Defiant", "Willful"]
  }, {
    word: "Supercilious",
    correct: "Humble",
    options: ["Humble", "Proud", "Haughty", "Disdainful"]
  }, {
    word: "Equivocate",
    correct: "Assert",
    options: ["Assert", "Hedge", "Waver", "Mislead"]
  }]
};
var MONSTERS = {
  goblin: {
    name: "Grimlin the Goblin",
    color: "#22c55e",
    bg: "rgba(34,197,94,.12)",
    prompt: "What does this word mean?",
    win: "Gah! You got me this time...",
    lose: "Hehehe! You don't know your words!"
  },
  zombie: {
    name: "Zomb-o",
    color: "#94a3b8",
    bg: "rgba(148,163,184,.12)",
    prompt: "Complete the sentence!",
    win: "Braiiins... I have failed...",
    lose: "BRAAAAINS! Wrong answer, human!"
  },
  dracula: {
    name: "Count Lexula",
    color: "#818cf8",
    bg: "rgba(129,140,248,.12)",
    prompt: "Unscramble before time runs out!",
    win: "Bleh! You bested me this time...",
    lose: "Time is up, mortal! Bleh bleh bleh!"
  },
  dragon: {
    name: "Wordfire Dragon",
    color: "#f87171",
    bg: "rgba(248,113,113,.12)",
    prompt: "Type the word from its definition!",
    win: "Impossible... my riddle is solved...",
    lose: "ROAAR! Incorrect! Feel my flames!"
  },
  ghost: {
    name: "Tricksy the Ghost",
    color: "#a5b4fc",
    bg: "rgba(165,180,252,.12)",
    prompt: "Find the OPPOSITE — I am tricky!",
    win: "Wooooo... you saw through my tricks...",
    lose: "BOO! Haha! You fell right into my trap!"
  }
};

// ── SVG COMPONENTS ─────────────────────────────────────────────────────────────
var MonsterSVG = function MonsterSVG(_ref) {
  var type = _ref.type,
    shake = _ref.shake,
    boss = _ref.boss,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 140 : _ref$size;
  var st = {
    width: size,
    height: size,
    display: "block",
    margin: "0 auto",
    animation: shake ? "mgshake .5s ease" : ""
  };
  var crown = boss ? /*#__PURE__*/React.createElement("polygon", {
    points: "50,2 58,18 76,18 62,28 68,44 50,36 32,44 38,28 24,18 42,18",
    fill: "#fbbf24",
    stroke: "#f59e0b",
    strokeWidth: "1.5"
  }) : null;
  if (type === "goblin") return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 105",
    style: st
  }, crown, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "98",
    rx: "24",
    ry: "9",
    fill: "#16a34a",
    opacity: ".3"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "88",
    rx: "21",
    ry: "14",
    fill: "#22c55e"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "20,60 8,38 30,54",
    fill: "#22c55e"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "80,60 92,38 70,54",
    fill: "#22c55e"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "56",
    r: "27",
    fill: "#22c55e"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "51",
    r: "8",
    fill: "#fef08a"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "51",
    r: "8",
    fill: "#fef08a"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "39",
    cy: "51",
    r: "4",
    fill: "#14532d"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "63",
    cy: "51",
    r: "4",
    fill: "#14532d"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "41",
    cy: "49",
    r: "1.5",
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "65",
    cy: "49",
    r: "1.5",
    fill: "white"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "60",
    rx: "4",
    ry: "3",
    fill: "#15803d"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37 68 Q50 78 63 68",
    stroke: "#14532d",
    strokeWidth: "2.5",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "43",
    y: "68",
    width: "4",
    height: "6",
    rx: "1",
    fill: "white"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "53",
    y: "68",
    width: "4",
    height: "6",
    rx: "1",
    fill: "white"
  }));
  if (type === "zombie") return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 105",
    style: st
  }, crown, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "97",
    rx: "22",
    ry: "8",
    fill: "#374151",
    opacity: ".3"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "87",
    rx: "20",
    ry: "13",
    fill: "#6b7280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 78 Q5 68 18 56",
    stroke: "#9ca3af",
    strokeWidth: "10",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M85 78 Q95 68 82 56",
    stroke: "#9ca3af",
    strokeWidth: "10",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "56",
    r: "27",
    fill: "#9ca3af"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "34",
    y1: "44",
    x2: "42",
    y2: "52",
    stroke: "#374151",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "42",
    y1: "44",
    x2: "34",
    y2: "52",
    stroke: "#374151",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "58",
    y1: "44",
    x2: "66",
    y2: "52",
    stroke: "#374151",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "66",
    y1: "44",
    x2: "58",
    y2: "52",
    stroke: "#374151",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "36",
    y1: "70",
    x2: "64",
    y2: "70",
    stroke: "#374151",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "42",
    y1: "70",
    x2: "42",
    y2: "78",
    stroke: "#374151",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "70",
    x2: "50",
    y2: "78",
    stroke: "#374151",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "58",
    y1: "70",
    x2: "58",
    y2: "78",
    stroke: "#374151",
    strokeWidth: "2.5"
  }));
  if (type === "dracula") return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 105",
    style: st
  }, crown, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "98",
    rx: "27",
    ry: "8",
    fill: "#1e1b4b",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 104 Q22 78 30 74 L30 58 Q50 50 70 58 L70 74 Q78 78 82 104",
    fill: "#1e1b4b"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 74 Q50 70 70 74 L70 58 Q50 50 30 58Z",
    fill: "#312e81"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "54",
    r: "26",
    fill: "#ede9fe"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 40 L20 24 L36 38",
    fill: "#1e1b4b"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M72 40 L80 24 L64 38",
    fill: "#1e1b4b"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "39",
    cy: "51",
    rx: "7",
    ry: "8",
    fill: "#1e1b4b"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "61",
    cy: "51",
    rx: "7",
    ry: "8",
    fill: "#1e1b4b"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "39",
    cy: "51",
    r: "3",
    fill: "#ef4444"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "61",
    cy: "51",
    r: "3",
    fill: "#ef4444"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37 66 Q50 74 63 66",
    stroke: "#1e1b4b",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "45,66 43,74 47,71 50,76 53,71 57,74 55,66",
    fill: "#ede9fe",
    stroke: "#1e1b4b",
    strokeWidth: ".8"
  }));
  if (type === "dragon") return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 105",
    style: st
  }, crown, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "97",
    rx: "23",
    ry: "8",
    fill: "#b91c1c",
    opacity: ".3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 70 Q18 50 32 62",
    fill: "#dc2626"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M95 70 Q82 50 68 62",
    fill: "#dc2626"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "86",
    rx: "21",
    ry: "14",
    fill: "#ef4444"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "56",
    r: "27",
    fill: "#ef4444"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "38,32 43,17 48,32",
    fill: "#dc2626"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "52,32 57,17 62,32",
    fill: "#dc2626"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "40",
    cy: "53",
    rx: "8",
    ry: "9",
    fill: "#fef08a"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "60",
    cy: "53",
    rx: "8",
    ry: "9",
    fill: "#fef08a"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "40",
    cy: "53",
    rx: "3",
    ry: "5",
    fill: "#1e293b"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "60",
    cy: "53",
    rx: "3",
    ry: "5",
    fill: "#1e293b"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "46",
    cy: "64",
    rx: "4",
    ry: "2.5",
    fill: "#fca5a5"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "54",
    cy: "64",
    rx: "4",
    ry: "2.5",
    fill: "#fca5a5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 72 Q50 80 62 72",
    stroke: "#1e293b",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M64 78 Q80 66 88 72 Q82 60 73 65",
    fill: "#fbbf24",
    opacity: ".85"
  }));
  if (type === "ghost") return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 105",
    style: st
  }, crown, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "100",
    rx: "25",
    ry: "8",
    fill: "#6366f1",
    opacity: ".2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 104 Q22 56 50 40 Q78 56 78 104 Q68 95 60 102 Q50 93 40 102 Q32 95 22 104",
    fill: "#e0e7ff",
    opacity: ".92"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "38",
    cy: "73",
    rx: "8",
    ry: "10",
    fill: "#6366f1"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "62",
    cy: "73",
    rx: "8",
    ry: "10",
    fill: "#6366f1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "73",
    r: "4",
    fill: "#312e81"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "73",
    r: "4",
    fill: "#312e81"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "71",
    r: "1.5",
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "64",
    cy: "71",
    r: "1.5",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 89 Q50 97 60 89",
    stroke: "#6366f1",
    strokeWidth: "2.5",
    fill: "none",
    strokeLinecap: "round"
  }));
  return null;
};
var EmilyFace = function EmilyFace(_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 40 : _ref2$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "16",
    r: "15",
    fill: "#6d28d9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "23",
    r: "13",
    fill: "#fde8c8"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "20",
    cy: "9",
    rx: "9",
    ry: "6",
    fill: "#7c3aed"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "7",
    r: "3",
    fill: "#a78bfa"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "22",
    r: "2.3",
    fill: "#1e1b4b"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "25",
    cy: "22",
    r: "2.3",
    fill: "#1e1b4b"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.9",
    cy: "21",
    r: "0.85",
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "25.9",
    cy: "21",
    r: "0.85",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 28 Q20 32.5 25 28",
    stroke: "#d97706",
    strokeWidth: "1.9",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "26",
    r: "3",
    fill: "#f87171",
    opacity: "0.35"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "26",
    r: "3",
    fill: "#f87171",
    opacity: "0.35"
  }));
};

// ── PLACEMENT QUIZ ─────────────────────────────────────────────────────────────
var LEVEL_ORDER = ["Beginner", "Intermediate", "Advanced", "Proficiency"];
var LEVEL_META = {
  Beginner: {
    color: "#a78bfa",
    emoji: "🌱",
    label: "A1–A2 · Beginner",
    desc: "We'll build your English foundation with everyday words and clear explanations."
  },
  Intermediate: {
    color: "#f59e0b",
    emoji: "📈",
    label: "B1–B2 · Intermediate",
    desc: "You're ready for richer vocabulary, nuanced meanings, and real-world sentences."
  },
  Advanced: {
    color: "#10b981",
    emoji: "🚀",
    label: "C1 · Advanced",
    desc: "Time to master sophisticated vocabulary, idioms, and complex expressions."
  },
  Proficiency: {
    color: "#f472b6",
    emoji: "🏆",
    label: "C2 · Proficiency",
    desc: "You're at the top level — we'll keep you sharp with the most challenging content."
  }
};
var TYPE_META = {
  definition: {
    label: "Definition",
    emoji: "📖",
    color: "#a78bfa"
  },
  synonym: {
    label: "Synonym",
    emoji: "🔄",
    color: "#60a5fa"
  },
  antonym: {
    label: "Antonym",
    emoji: "⚡",
    color: "#fb923c"
  },
  fillblank: {
    label: "Fill the Blank",
    emoji: "✏️",
    color: "#4ade80"
  },
  reverse: {
    label: "Which Word?",
    emoji: "🎯",
    color: "#f9a8d4"
  }
};
var PLACEMENT_POOL = {
  Beginner: [{
    type: "definition",
    word: "HAPPY",
    options: ["Feeling pleased and content", "Moving very fast", "Very cold outside", "Feeling angry"],
    answer: 0
  }, {
    type: "synonym",
    word: "BIG",
    options: ["Tiny", "Large", "Slow", "Dark"],
    answer: 1
  }, {
    type: "antonym",
    word: "HOT",
    options: ["Bright", "Loud", "Cold", "Tall"],
    answer: 2
  }, {
    type: "fillblank",
    sentence: "She drinks ___ every morning.",
    options: ["stone", "water", "music", "cloud"],
    answer: 1
  }, {
    type: "reverse",
    definition: "Moving at great speed",
    options: ["Slow", "Dark", "Fast", "Cold"],
    answer: 2
  }, {
    type: "definition",
    word: "TIRED",
    options: ["Feeling very happy", "Needing rest or sleep", "Very hungry now", "Feeling strong"],
    answer: 1
  }],
  Intermediate: [{
    type: "definition",
    word: "OPTIMISTIC",
    options: ["Feeling very sad", "Hopeful about the future", "Afraid of change", "Very tired"],
    answer: 1
  }, {
    type: "synonym",
    word: "BRAVE",
    options: ["Timid", "Reckless", "Courageous", "Careless"],
    answer: 2
  }, {
    type: "antonym",
    word: "GENEROUS",
    options: ["Kind", "Selfish", "Honest", "Gentle"],
    answer: 1
  }, {
    type: "fillblank",
    sentence: "She showed great ___ by finishing despite the pain.",
    options: ["laziness", "courage", "confusion", "silence"],
    answer: 1
  }, {
    type: "reverse",
    definition: "Able to wait calmly without getting upset",
    options: ["Impatient", "Nervous", "Patient", "Reckless"],
    answer: 2
  }, {
    type: "definition",
    word: "RESILIENT",
    options: ["Easily broken", "Very expensive", "Recovering quickly from difficulty", "Making loud noise"],
    answer: 2
  }],
  Advanced: [{
    type: "definition",
    word: "ELOQUENT",
    options: ["Speaking quietly", "Fluent and persuasive in speech", "Very confused", "Acting randomly"],
    answer: 1
  }, {
    type: "synonym",
    word: "TENACIOUS",
    options: ["Wavering", "Passive", "Persistent", "Careless"],
    answer: 2
  }, {
    type: "antonym",
    word: "COHERENT",
    options: ["Logical", "Confused and illogical", "Eloquent", "Concise"],
    answer: 1
  }, {
    type: "fillblank",
    sentence: "The senator's ___ remarks left voters unsure of his position.",
    options: ["candid", "equivocal", "decisive", "eloquent"],
    answer: 1
  }, {
    type: "reverse",
    definition: "Dealing with problems in a practical and sensible way",
    options: ["Idealistic", "Pragmatic", "Emotional", "Arbitrary"],
    answer: 1
  }, {
    type: "definition",
    word: "SCRUTINY",
    options: ["Complete disregard", "Close critical examination", "A quick decision", "Extreme happiness"],
    answer: 1
  }],
  Proficiency: [{
    type: "definition",
    word: "PERSPICACIOUS",
    options: ["Easily confused", "Having sharp insight", "Very slow to understand", "Overly emotional"],
    answer: 1
  }, {
    type: "synonym",
    word: "LOQUACIOUS",
    options: ["Quiet", "Taciturn", "Garrulous", "Reserved"],
    answer: 2
  }, {
    type: "antonym",
    word: "MAGNANIMOUS",
    options: ["Noble", "Generous", "Petty", "Gallant"],
    answer: 2
  }, {
    type: "fillblank",
    sentence: "The diplomat was ___ in defeat, warmly praising the winner.",
    options: ["bitter", "petty", "magnanimous", "recalcitrant"],
    answer: 2
  }, {
    type: "reverse",
    definition: "Stubbornly refusing to obey authority or follow rules",
    options: ["Compliant", "Docile", "Amenable", "Recalcitrant"],
    answer: 3
  }, {
    type: "definition",
    word: "EQUANIMITY",
    options: ["Extreme anger", "Mental calmness in difficulty", "Complete confusion", "Stubborn defiance"],
    answer: 1
  }]
};
function generateQuiz() {
  var quiz = [];
  var _iterator2 = _createForOfIteratorHelper(LEVEL_ORDER),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var level = _step2.value;
      var pool = _toConsumableArray(PLACEMENT_POOL[level]).sort(function () {
        return Math.random() - .5;
      }).slice(0, 2);
      quiz.push.apply(quiz, _toConsumableArray(pool));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return quiz;
}
function scorePlacement(answers) {
  var correct = answers.filter(Boolean).length;
  if (correct <= 2) return "Beginner";
  if (correct <= 4) return "Intermediate";
  if (correct <= 6) return "Advanced";
  return "Proficiency";
}

// Streak milestone rewards — each earned once only
var STREAK_MILESTONES = [{
  days: 10,
  xp: 25,
  emoji: "🔥",
  badge: "10-Day",
  msg: "Ten days straight — you're building a real habit!"
}, {
  days: 30,
  xp: 50,
  emoji: "🥈",
  badge: "30-Day",
  msg: "A whole month of daily English. That's impressive."
}, {
  days: 60,
  xp: 100,
  emoji: "🥇",
  badge: "60-Day",
  msg: "Two months in — your vocabulary is growing fast!"
}, {
  days: 90,
  xp: 150,
  emoji: "💎",
  badge: "90-Day",
  msg: "Ninety days. You've turned learning into a lifestyle."
}, {
  days: 180,
  xp: 320,
  emoji: "👑",
  badge: "180-Day",
  msg: "Half a year of dedication. Truly remarkable."
}, {
  days: 365,
  xp: 700,
  emoji: "🏆",
  badge: "365-Day",
  msg: "A full year. You're in a league of your own."
}];

// Free tier daily limits
var FREE_EMILY_LIMIT = 10;
var FREE_PRACTICE_LIMIT = 3;

// Wraps the matching term in <em> within a sentence
function highlightTerm(sentence, term) {
  if (!term) return sentence;
  var re = new RegExp("(".concat(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ")"), "gi");
  var parts = sentence.split(re);
  return parts.map(function (p, i) {
    return re.test(p) ? /*#__PURE__*/React.createElement("em", {
      key: i,
      style: {
        color: "#fbbf24",
        fontStyle: "normal",
        fontWeight: 700
      }
    }, p) : p;
  });
}

// City validation via backend
function validateCity(_x3) {
  return _validateCity.apply(this, arguments);
}
function _validateCity() {
  _validateCity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(location) {
    var _t27;
    return _regenerator().w(function (_context21) {
      while (1) switch (_context21.p = _context21.n) {
        case 0:
          _context21.p = 0;
          _context21.n = 1;
          return callAI("validate_city", {
            location: location
          });
        case 1:
          return _context21.a(2, _context21.v);
        case 2:
          _context21.p = 2;
          _t27 = _context21.v;
          return _context21.a(2, {
            valid: false
          });
      }
    }, _callee21, null, [[0, 2]]);
  }));
  return _validateCity.apply(this, arguments);
}
function timeGreeting(name) {
  var h = new Date().getHours();
  var g = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  return "".concat(g, ", ").concat(name, "! \uD83D\uDC4B");
}

// Fetches real current weather via Claude web search
function fetchWeatherGreeting(_x4, _x5) {
  return _fetchWeatherGreeting.apply(this, arguments);
} // ── MAIN APP ───────────────────────────────────────────────────────────────────
function _fetchWeatherGreeting() {
  _fetchWeatherGreeting = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(city, name) {
    var data, _t28;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.p = _context22.n) {
        case 0:
          _context22.p = 0;
          _context22.n = 1;
          return callAI("weather", {
            city: city,
            name: name
          });
        case 1:
          data = _context22.v;
          return _context22.a(2, data.greeting || timeGreeting(name));
        case 2:
          _context22.p = 2;
          _t28 = _context22.v;
          return _context22.a(2, timeGreeting(name));
      }
    }, _callee22, null, [[0, 2]]);
  }));
  return _fetchWeatherGreeting.apply(this, arguments);
}
export default function App() {
  // ── Core state ────────────────────────────────────────────────────────────────
  var _useState = useState("home"),
    _useState2 = _slicedToArray(_useState, 2),
    screen = _useState2[0],
    setScreen = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    game = _useState4[0],
    setGame = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    xp = _useState6[0],
    setXp = _useState6[1];
  var _useState7 = useState(1),
    _useState8 = _slicedToArray(_useState7, 2),
    streak = _useState8[0],
    setStreak = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    xpPop = _useState0[0],
    setXpPop = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    bonusPop = _useState10[0],
    setBonusPop = _useState10[1];
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    cStreak = _useState12[0],
    setCStreak = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    reviewMode = _useState14[0],
    setReviewMode = _useState14[1];
  var _useState15 = useState(new Set()),
    _useState16 = _slicedToArray(_useState15, 2),
    earnedBadges = _useState16[0],
    setEarnedBadges = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    streakMilestone = _useState18[0],
    setStreakMilestone = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    hasStudied = _useState20[0],
    setHasStudied = _useState20[1];

  // ── Pro / monetisation state ─────────────────────────────────────────────────
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isPro = _useState22[0],
    setIsPro = _useState22[1];
  var _useState23 = useState("none"),
    _useState24 = _slicedToArray(_useState23, 2),
    proTier = _useState24[0],
    setProTier = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    paywallSource = _useState26[0],
    setPaywallSource = _useState26[1];
  var _useState27 = useState(0),
    _useState28 = _slicedToArray(_useState27, 2),
    emilyDailyCount = _useState28[0],
    setEmilyDailyCount = _useState28[1];
  var _useState29 = useState(0),
    _useState30 = _slicedToArray(_useState29, 2),
    practiceDailyCount = _useState30[0],
    setPracticeDailyCount = _useState30[1];
  var _useState31 = useState({
      used: 0,
      week: 0
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    freezeInfo = _useState32[0],
    setFreezeInfo = _useState32[1];
  var qTime = useRef(0);
  var prevLevel = useRef(null);

  // ── Placement state ──────────────────────────────────────────────────────────
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    appReady = _useState34[0],
    setAppReady = _useState34[1];
  var _useState35 = useState("Beginner"),
    _useState36 = _slicedToArray(_useState35, 2),
    placementLevel = _useState36[0],
    setPlacementLevel = _useState36[1];
  var _useState37 = useState("welcome"),
    _useState38 = _slicedToArray(_useState37, 2),
    quizPhase = _useState38[0],
    setQuizPhase = _useState38[1];
  var _useState39 = useState(0),
    _useState40 = _slicedToArray(_useState39, 2),
    quizStep = _useState40[0],
    setQuizStep = _useState40[1];
  var _useState41 = useState([]),
    _useState42 = _slicedToArray(_useState41, 2),
    quizAnswers = _useState42[0],
    setQuizAnswers = _useState42[1];
  var _useState43 = useState(null),
    _useState44 = _slicedToArray(_useState43, 2),
    quizSel = _useState44[0],
    setQuizSel = _useState44[1];
  var _useState45 = useState(null),
    _useState46 = _slicedToArray(_useState45, 2),
    quizResultLevel = _useState46[0],
    setQuizResultLevel = _useState46[1];
  var _useState47 = useState(function () {
      return generateQuiz();
    }),
    _useState48 = _slicedToArray(_useState47, 2),
    currentQuiz = _useState48[0],
    setCurrentQuiz = _useState48[1];

  // ── Profile & weather state ──────────────────────────────────────────────────
  var _useState49 = useState(""),
    _useState50 = _slicedToArray(_useState49, 2),
    profileName = _useState50[0],
    setProfileName = _useState50[1];
  var _useState51 = useState(""),
    _useState52 = _slicedToArray(_useState51, 2),
    profileLocation = _useState52[0],
    setProfileLocation = _useState52[1];
  var _useState53 = useState(null),
    _useState54 = _slicedToArray(_useState53, 2),
    profileCoords = _useState54[0],
    setProfileCoords = _useState54[1];
  var _useState55 = useState("name"),
    _useState56 = _slicedToArray(_useState55, 2),
    profileStep = _useState56[0],
    setProfileStep = _useState56[1];
  var _useState57 = useState(""),
    _useState58 = _slicedToArray(_useState57, 2),
    profileNameInp = _useState58[0],
    setProfileNameInp = _useState58[1];
  var _useState59 = useState(""),
    _useState60 = _slicedToArray(_useState59, 2),
    profileLocInp = _useState60[0],
    setProfileLocInp = _useState60[1];
  var _useState61 = useState(null),
    _useState62 = _slicedToArray(_useState61, 2),
    profileLocError = _useState62[0],
    setProfileLocError = _useState62[1];
  var _useState63 = useState(null),
    _useState64 = _slicedToArray(_useState63, 2),
    profileLocConfirm = _useState64[0],
    setProfileLocConfirm = _useState64[1];
  var _useState65 = useState(false),
    _useState66 = _slicedToArray(_useState65, 2),
    profileLocChecking = _useState66[0],
    setProfileLocChecking = _useState66[1];
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    weatherGreeting = _useState68[0],
    setWeatherGreeting = _useState68[1];
  var placementDoneRef = useRef(false);

  // ── UX / engagement state ─────────────────────────────────────────────────
  var _useState69 = useState(false),
    _useState70 = _slicedToArray(_useState69, 2),
    resetConfirm = _useState70[0],
    setResetConfirm = _useState70[1]; // 2-step reset
  var _useState71 = useState(false),
    _useState72 = _slicedToArray(_useState71, 2),
    nudgeDismissed = _useState72[0],
    setNudgeDismissed = _useState72[1]; // new-user nudge
  var _useState73 = useState(0),
    _useState74 = _slicedToArray(_useState73, 2),
    dailyXp = _useState74[0],
    setDailyXp = _useState74[1]; // today's XP earned
  var _useState75 = useState(false),
    _useState76 = _slicedToArray(_useState75, 2),
    firstXpPop = _useState76[0],
    setFirstXpPop = _useState76[1]; // first-ever XP cele

  // ── Derived values ───────────────────────────────────────────────────────────
  var xpLevelIdx = xp >= 2000 ? 3 : xp >= 1000 ? 2 : xp >= 600 ? 1 : 0;
  var placementIdx = LEVEL_ORDER.indexOf(placementLevel);
  var level = LEVEL_ORDER[Math.max(xpLevelIdx, placementIdx)];
  var xpNext = xp >= 2000 ? null : xp >= 1000 ? 2000 : xp >= 600 ? 1000 : 600;
  var lvlColor = LEVEL_META[level].color;
  var isSaturday = new Date().getDay() === 6;
  var earnXp = function earnXp(n) {
    var pts = reviewMode && !isPro ? Math.max(1, Math.floor(n / 2)) : n;
    setXp(function (p) {
      var next = p + pts;
      window.storage.set("ws_xp", String(next)).catch(function () {});
      if (p === 0) {
        setFirstXpPop(true);
        setTimeout(function () {
          return setFirstXpPop(false);
        }, 3000);
        setNudgeDismissed(true);
        window.storage.set("ws_nudge_dismissed", "1").catch(function () {});
      }
      return next;
    });
    setDailyXp(function (p) {
      var next = p + pts;
      var today = new Date().toDateString();
      window.storage.set("ws_daily_xp_" + today, String(next)).catch(function () {});
      return next;
    });
    setXpPop(true);
    setTimeout(function () {
      return setXpPop(false);
    }, 1400);
  };
  var showBonus = function showBonus(msg) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#6366f1";
    setBonusPop({
      msg: msg,
      color: color
    });
    setTimeout(function () {
      return setBonusPop(null);
    }, 2200);
  };
  var go = function go(s) {
    setScreen(s);
    setGame(null);
    setCStreak(0);
    setReviewMode(false);
  };

  // ── Scramble state ───────────────────────────────────────────────────────────
  var _useState77 = useState(0),
    _useState78 = _slicedToArray(_useState77, 2),
    scIdx = _useState78[0],
    setScIdx = _useState78[1];
  var _useState79 = useState(""),
    _useState80 = _slicedToArray(_useState79, 2),
    scInput = _useState80[0],
    setScInput = _useState80[1];
  var _useState81 = useState(null),
    _useState82 = _slicedToArray(_useState81, 2),
    scResult = _useState82[0],
    setScResult = _useState82[1];
  var _useState83 = useState(""),
    _useState84 = _slicedToArray(_useState83, 2),
    scWord = _useState84[0],
    setScWord = _useState84[1];
  var scDeck = useRef([]);

  // ── Flashcard state ──────────────────────────────────────────────────────────
  var _useState85 = useState(0),
    _useState86 = _slicedToArray(_useState85, 2),
    flIdx = _useState86[0],
    setFlIdx = _useState86[1];
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    flSel = _useState88[0],
    setFlSel = _useState88[1];
  var flDeck = useRef([]);

  // ── Fill blank state ─────────────────────────────────────────────────────────
  var _useState89 = useState(0),
    _useState90 = _slicedToArray(_useState89, 2),
    fbIdx = _useState90[0],
    setFbIdx = _useState90[1];
  var _useState91 = useState(null),
    _useState92 = _slicedToArray(_useState91, 2),
    fbSel = _useState92[0],
    setFbSel = _useState92[1];
  var fbDeck = useRef([]);

  // ── Translation state ────────────────────────────────────────────────────────
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    wotdTranslation = _useState94[0],
    setWotdTranslation = _useState94[1];
  var _useState95 = useState(false),
    _useState96 = _slicedToArray(_useState95, 2),
    wotdTranslating = _useState96[0],
    setWotdTranslating = _useState96[1];
  var _useState97 = useState(null),
    _useState98 = _slicedToArray(_useState97, 2),
    wotdImage = _useState98[0],
    setWotdImage = _useState98[1]; // Wikipedia noun image
  var _useState99 = useState(null),
    _useState100 = _slicedToArray(_useState99, 2),
    flImage = _useState100[0],
    setFlImage = _useState100[1]; // Flashcard noun image
  var _useState101 = useState(null),
    _useState102 = _slicedToArray(_useState101, 2),
    flTranslation = _useState102[0],
    setFlTranslation = _useState102[1];
  var _useState103 = useState(false),
    _useState104 = _slicedToArray(_useState103, 2),
    flTranslating = _useState104[0],
    setFlTranslating = _useState104[1];

  // ── Sentence practice state ──────────────────────────────────────────────────
  var _useState105 = useState(["", "", "", ""]),
    _useState106 = _slicedToArray(_useState105, 2),
    wotdInputs = _useState106[0],
    setWotdInputs = _useState106[1];
  var _useState107 = useState([null, null, null, null]),
    _useState108 = _slicedToArray(_useState107, 2),
    wotdResults = _useState108[0],
    setWotdResults = _useState108[1];
  var _useState109 = useState([false, false, false, false]),
    _useState110 = _slicedToArray(_useState109, 2),
    wotdLoading = _useState110[0],
    setWotdLoading = _useState110[1];
  var _useState111 = useState([false, false, false, false]),
    _useState112 = _slicedToArray(_useState111, 2),
    wotdAccepted = _useState112[0],
    setWotdAccepted = _useState112[1];
  var _useState113 = useState(""),
    _useState114 = _slicedToArray(_useState113, 2),
    idiomInput = _useState114[0],
    setIdiomInput = _useState114[1];
  var _useState115 = useState(null),
    _useState116 = _slicedToArray(_useState115, 2),
    idiomResult = _useState116[0],
    setIdiomResult = _useState116[1];
  var _useState117 = useState(false),
    _useState118 = _slicedToArray(_useState117, 2),
    idiomLoading = _useState118[0],
    setIdiomLoading = _useState118[1];
  var _useState119 = useState(false),
    _useState120 = _slicedToArray(_useState119, 2),
    idiomAccepted = _useState120[0],
    setIdiomAccepted = _useState120[1];
  var _useState121 = useState(null),
    _useState122 = _slicedToArray(_useState121, 2),
    idiomContent = _useState122[0],
    setIdiomContent = _useState122[1];
  var _useState123 = useState(false),
    _useState124 = _slicedToArray(_useState123, 2),
    idiomContentLoading = _useState124[0],
    setIdiomContentLoading = _useState124[1];
  var _useState125 = useState(null),
    _useState126 = _slicedToArray(_useState125, 2),
    wotdChunks = _useState126[0],
    setWotdChunks = _useState126[1]; // AI-generated chunks for Pro
  var _useState127 = useState(false),
    _useState128 = _slicedToArray(_useState127, 2),
    wotdChunksLoading = _useState128[0],
    setWotdChunksLoading = _useState128[1];

  // ── Dictionary state ─────────────────────────────────────────────────────────
  var _useState129 = useState(""),
    _useState130 = _slicedToArray(_useState129, 2),
    dictQuery = _useState130[0],
    setDictQuery = _useState130[1];
  var _useState131 = useState(null),
    _useState132 = _slicedToArray(_useState131, 2),
    dictResult = _useState132[0],
    setDictResult = _useState132[1];
  var _useState133 = useState(false),
    _useState134 = _slicedToArray(_useState133, 2),
    dictLoading = _useState134[0],
    setDictLoading = _useState134[1];
  var _useState135 = useState(null),
    _useState136 = _slicedToArray(_useState135, 2),
    dictError = _useState136[0],
    setDictError = _useState136[1];
  var _useState137 = useState([]),
    _useState138 = _slicedToArray(_useState137, 2),
    dictSaved = _useState138[0],
    setDictSaved = _useState138[1];
  var dictInputRef = useRef(null);

  // ── Bookworm state ───────────────────────────────────────────────────────────
  var _useState139 = useState(function () {
      return makeGrid("Beginner");
    }),
    _useState140 = _slicedToArray(_useState139, 2),
    bwGrid = _useState140[0],
    setBwGrid = _useState140[1];
  var _useState141 = useState([]),
    _useState142 = _slicedToArray(_useState141, 2),
    bwSel = _useState142[0],
    setBwSel = _useState142[1];
  var _useState143 = useState(0),
    _useState144 = _slicedToArray(_useState143, 2),
    bwScore = _useState144[0],
    setBwScore = _useState144[1];
  var _useState145 = useState(null),
    _useState146 = _slicedToArray(_useState145, 2),
    bwMsg = _useState146[0],
    setBwMsg = _useState146[1];
  var _useState147 = useState([]),
    _useState148 = _slicedToArray(_useState147, 2),
    bwWords = _useState148[0],
    setBwWords = _useState148[1];
  var _useState149 = useState(null),
    _useState150 = _slicedToArray(_useState149, 2),
    bwDef = _useState150[0],
    setBwDef = _useState150[1];
  var _useState151 = useState(false),
    _useState152 = _slicedToArray(_useState151, 2),
    bwDefLoad = _useState152[0],
    setBwDefLoad = _useState152[1];

  // ── Emily (speak) state ──────────────────────────────────────────────────────
  var _useState153 = useState(null),
    _useState154 = _slicedToArray(_useState153, 2),
    topic = _useState154[0],
    setTopic = _useState154[1];
  var _useState155 = useState([]),
    _useState156 = _slicedToArray(_useState155, 2),
    msgs = _useState156[0],
    setMsgs = _useState156[1];
  var _useState157 = useState(""),
    _useState158 = _slicedToArray(_useState157, 2),
    chatIn = _useState158[0],
    setChatIn = _useState158[1];
  var _useState159 = useState(false),
    _useState160 = _slicedToArray(_useState159, 2),
    chatLoad = _useState160[0],
    setChatLoad = _useState160[1];
  var _useState161 = useState(false),
    _useState162 = _slicedToArray(_useState161, 2),
    ttsOn = _useState162[0],
    setTtsOn = _useState162[1];

  // ── Monster Gauntlet state ───────────────────────────────────────────────────
  var _useState163 = useState(1),
    _useState164 = _slicedToArray(_useState163, 2),
    mgFloor = _useState164[0],
    setMgFloor = _useState164[1];
  var _useState165 = useState(3),
    _useState166 = _slicedToArray(_useState165, 2),
    mgHearts = _useState166[0],
    setMgHearts = _useState166[1];
  var _useState167 = useState(0),
    _useState168 = _slicedToArray(_useState167, 2),
    mgScore = _useState168[0],
    setMgScore = _useState168[1];
  var _useState169 = useState(null),
    _useState170 = _slicedToArray(_useState169, 2),
    mgMonster = _useState170[0],
    setMgMonster = _useState170[1];
  var _useState171 = useState(""),
    _useState172 = _slicedToArray(_useState171, 2),
    mgInput = _useState172[0],
    setMgInput = _useState172[1];
  var _useState173 = useState(null),
    _useState174 = _slicedToArray(_useState173, 2),
    mgSel = _useState174[0],
    setMgSel = _useState174[1];
  var _useState175 = useState(null),
    _useState176 = _slicedToArray(_useState175, 2),
    mgTimer = _useState176[0],
    setMgTimer = _useState176[1];
  var _useState177 = useState(null),
    _useState178 = _slicedToArray(_useState177, 2),
    mgResult = _useState178[0],
    setMgResult = _useState178[1];
  var _useState179 = useState(null),
    _useState180 = _slicedToArray(_useState179, 2),
    mgAnim = _useState180[0],
    setMgAnim = _useState180[1];
  var mgTimerRef = useRef(null);

  // ── Deck helpers ─────────────────────────────────────────────────────────────
  function shuffleIndices(len) {
    var a = Array.from({
      length: len
    }, function (_, i) {
      return i;
    });
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref3 = [a[j], a[i]];
      a[i] = _ref3[0];
      a[j] = _ref3[1];
    }
    return a;
  }
  function deckItem(data, idx, deck) {
    if (!deck.current.length) deck.current = shuffleIndices(data.length);
    return data[deck.current[idx % deck.current.length]];
  }
  function deckNext(data, idx, deck, setIdx) {
    var next = idx + 1;
    if (next >= deck.current.length) {
      deck.current = shuffleIndices(data.length);
      setIdx(0);
    } else setIdx(next);
  }

  // ── Effects ───────────────────────────────────────────────────────────────────
  useEffect(function () {
    if (prevLevel.current !== null && prevLevel.current !== level) {
      setScIdx(0);
      setFlIdx(0);
      setFbIdx(0);
    }
    prevLevel.current = level;
  }, [level]); // eslint-disable-line

  useEffect(function () {
    scDeck.current = shuffleIndices(SCRAMBLE_WORDS[level].length);
    flDeck.current = [];
    fbDeck.current = [];
  }, [level]); // eslint-disable-line

  useEffect(function () {
    if (game === "scramble") {
      if (!scDeck.current.length) scDeck.current = shuffleIndices(SCRAMBLE_WORDS[level].length);
      var word = SCRAMBLE_WORDS[level][scDeck.current[scIdx % scDeck.current.length]];
      setScWord(shuffleW(word));
      setScInput("");
      setScResult(null);
    }
  }, [game, scIdx, level]); // eslint-disable-line

  useEffect(function () {
    if (game) qTime.current = Date.now();
  }, [game, scIdx, flIdx, fbIdx]); // eslint-disable-line

  // Fetch image for flashcard noun cards whenever the card index changes
  useEffect(function () {
    if (game !== "flashcard") return;
    var cards = FLASHCARDS_DATA[level];
    var f = deckItem(cards, flIdx, flDeck);
    setFlImage(null);
    if (f.type === "noun") {
      fetchWordImage(f.word).then(function (img) {
        if (img) setFlImage(img);
      });
    }
  }, [game, flIdx, level]); // eslint-disable-line

  // Weather greeting — cached per day so API only called once
  useEffect(function () {
    if (screen !== "home" || weatherGreeting || !profileName) return;
    var city = (profileCoords === null || profileCoords === void 0 ? void 0 : profileCoords.city) || profileLocation;
    if (!city) {
      setWeatherGreeting(timeGreeting(profileName));
      return;
    }
    var today = new Date().toDateString();
    var cacheKey = "ws_weather_" + today;
    window.storage.get(cacheKey).then(function (cached) {
      if (cached) {
        setWeatherGreeting(cached.value);
        return;
      }
      fetchWeatherGreeting(city, profileName).then(function (greeting) {
        setWeatherGreeting(greeting);
        window.storage.set(cacheKey, greeting).catch(function () {});
      });
    }).catch(function () {
      return fetchWeatherGreeting(city, profileName).then(setWeatherGreeting);
    });
  }, [screen, profileName]); // eslint-disable-line

  // Word / idiom screen
  useEffect(function () {
    if (screen !== "word") return;
    setWotdTranslation(null);
    setWotdTranslating(false);
    setWotdChunks(null);
    setWotdChunksLoading(false);
    setWotdImage(null);
    // Reset practice state so stale answers from a different word/level don't show
    setWotdInputs(["", "", "", ""]);
    setWotdResults([null, null, null, null]);
    setWotdLoading([false, false, false, false]);
    setWotdAccepted([false, false, false, false]);
    setIdiomInput("");
    setIdiomResult(null);
    setIdiomAccepted(false);
    var w = getWotd(level);
    // Fetch Wikipedia image for nouns (non-blocking)
    if (!isSaturday && w.type === "noun") {
      fetchWordImage(w.word).then(function (img) {
        if (img) setWotdImage(img);
      });
    }
    if (isSaturday) {
      var id = getIdiomOfWeek(level);
      if (id.examples) {
        setIdiomContent(id);
        setIdiomContentLoading(false);
      } else {
        setIdiomContent(null);
        setIdiomContentLoading(true);
        callAI("idiom_examples", {
          idiom: id.idiom,
          meaning: id.meaning,
          level: level
        }).then(function (content) {
          return setIdiomContent(_objectSpread(_objectSpread({}, id), content));
        }).catch(function () {
          return setIdiomContent(id);
        }).finally(function () {
          return setIdiomContentLoading(false);
        });
      }
    } else if (isPro) {
      // Generate word chunks for Pro users
      var _w = getWotd(level);
      setWotdChunksLoading(true);
      callAI("chunks", {
        word: _w.word,
        type: _w.type,
        level: level
      }).then(function (chunks) {
        return setWotdChunks(chunks);
      }).catch(function () {
        return setWotdChunks([]);
      }).finally(function () {
        return setWotdChunksLoading(false);
      });
    }
    // Load practice completion
    function loadPractice() {
      return _loadPractice.apply(this, arguments);
    }
    function _loadPractice() {
      _loadPractice = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var today, weekNum, r, d, _r, _d$s, _d$s2, _d$s3, _d, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              today = new Date().toDateString();
              weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
              _context.p = 1;
              _context.n = 2;
              return window.storage.get("ws_wotd_" + today);
            case 2:
              r = _context.v;
              if (r) {
                d = JSON.parse(r.value);
                [0, 1, 2, 3].forEach(function (idx) {
                  var _d$k, _d$k2, _d$k3;
                  var k = "s" + (idx + 1);
                  if ((_d$k = d[k]) !== null && _d$k !== void 0 && _d$k.sentence) setWotdInputs(function (p) {
                    var n = _toConsumableArray(p);
                    n[idx] = d[k].sentence;
                    return n;
                  });
                  if ((_d$k2 = d[k]) !== null && _d$k2 !== void 0 && _d$k2.result) setWotdResults(function (p) {
                    var n = _toConsumableArray(p);
                    n[idx] = d[k].result;
                    return n;
                  });
                  if ((_d$k3 = d[k]) !== null && _d$k3 !== void 0 && _d$k3.accepted) setWotdAccepted(function (p) {
                    var n = _toConsumableArray(p);
                    n[idx] = true;
                    return n;
                  });
                });
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
            case 4:
              _context.p = 4;
              _context.n = 5;
              return window.storage.get("ws_idiom_" + weekNum);
            case 5:
              _r = _context.v;
              if (_r) {
                _d = JSON.parse(_r.value);
                if ((_d$s = _d.s1) !== null && _d$s !== void 0 && _d$s.sentence) setIdiomInput(_d.s1.sentence);
                if ((_d$s2 = _d.s1) !== null && _d$s2 !== void 0 && _d$s2.result) setIdiomResult(_d.s1.result);
                if ((_d$s3 = _d.s1) !== null && _d$s3 !== void 0 && _d$s3.accepted) setIdiomAccepted(true);
              }
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t2 = _context.v;
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[4, 6], [1, 3]]);
      }));
      return _loadPractice.apply(this, arguments);
    }
    loadPractice();
  }, [screen, level]); // eslint-disable-line

  // ── Init ─────────────────────────────────────────────────────────────────────
  useEffect(function () {
    function init() {
      return _init.apply(this, arguments);
    }
    function _init() {
      _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var today, weekNum, keys, results, _results, rProfile, rPro, rStudied, rFreeze, rWotdCache, rDictSaved, rDailyXp, rNudge, rEmily, rPractice, rPlacement, rBadges, rStreak, rXp, needsProfile, saved, city, loadedTier, d, loadedFreeze, _JSON$parse, data, ts, needsPlacement, _saved, finalStreak, badges, _d2, yesterday, twoDaysAgo, ns, bonus, curWeek, usedThisWeek, limit, _ns, newFreeze, _bonus, unclaimed, _t3, _t4, _t5;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              today = new Date().toDateString();
              weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)); // Fire ALL storage reads in parallel — eliminates sequential wait
              keys = ["ws_profile", "ws_pro", "ws_studied", "ws_freeze", WOTD_CACHE_KEY, "ws_dict_saved", "ws_daily_xp_" + today, "ws_nudge_dismissed", "ws_emily_" + today, "ws_practice_" + today, "ws_placement", "ws_streak_badges", "ws_streak", "ws_xp"];
              _context4.n = 1;
              return Promise.all(keys.map(function (k) {
                return window.storage.get(k).catch(function () {
                  return null;
                });
              }));
            case 1:
              results = _context4.v;
              _results = _slicedToArray(results, 14), rProfile = _results[0], rPro = _results[1], rStudied = _results[2], rFreeze = _results[3], rWotdCache = _results[4], rDictSaved = _results[5], rDailyXp = _results[6], rNudge = _results[7], rEmily = _results[8], rPractice = _results[9], rPlacement = _results[10], rBadges = _results[11], rStreak = _results[12], rXp = _results[13]; // 1. Profile
              needsProfile = true;
              if (rProfile) {
                try {
                  saved = JSON.parse(rProfile.value);
                  if (saved.name) {
                    setProfileName(saved.name);
                    city = saved.city || saved.location || "";
                    setProfileLocation(city);
                    if (city) setProfileCoords({
                      city: city,
                      country: saved.country || ""
                    });
                    needsProfile = false;
                  }
                } catch (_unused3) {}
              }

              // 2. Pro status
              loadedTier = "none";
              if (rPro) {
                try {
                  d = JSON.parse(rPro.value);
                  if (d.active) {
                    loadedTier = d.tier || "monthly";
                    setIsPro(true);
                    setProTier(loadedTier);
                  }
                } catch (_unused4) {}
              }

              // 3. Flags
              if (rStudied) setHasStudied(true);
              loadedFreeze = {
                used: 0,
                week: 0
              };
              if (rFreeze) {
                try {
                  loadedFreeze = JSON.parse(rFreeze.value);
                  setFreezeInfo(loadedFreeze);
                } catch (_unused5) {}
              }

              // 4. WOTD cache (non-blocking refresh if stale)
              if (rWotdCache) {
                try {
                  _JSON$parse = JSON.parse(rWotdCache.value), data = _JSON$parse.data, ts = _JSON$parse.ts;
                  wotdData = data;
                  if (Date.now() - ts > WOTD_CACHE_TTL) {
                    fetch(WOTD_URL).then(function (r) {
                      return r.json();
                    }).then(/*#__PURE__*/function () {
                      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(d) {
                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              wotdData = d;
                              _context2.n = 1;
                              return window.storage.set(WOTD_CACHE_KEY, JSON.stringify({
                                data: d,
                                ts: Date.now()
                              }));
                            case 1:
                              return _context2.a(2);
                          }
                        }, _callee2);
                      }));
                      return function (_x6) {
                        return _ref4.apply(this, arguments);
                      };
                    }()).catch(function () {});
                  }
                } catch (_unused6) {}
              } else {
                fetch(WOTD_URL).then(function (r) {
                  return r.json();
                }).then(/*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(d) {
                    return _regenerator().w(function (_context3) {
                      while (1) switch (_context3.n) {
                        case 0:
                          wotdData = d;
                          _context3.n = 1;
                          return window.storage.set(WOTD_CACHE_KEY, JSON.stringify({
                            data: d,
                            ts: Date.now()
                          }));
                        case 1:
                          return _context3.a(2);
                      }
                    }, _callee3);
                  }));
                  return function (_x7) {
                    return _ref5.apply(this, arguments);
                  };
                }()).catch(function () {});
              }

              // 5. Dict, daily XP, nudge, usage counts
              if (rDictSaved) {
                try {
                  setDictSaved(JSON.parse(rDictSaved.value));
                } catch (_unused7) {}
              }
              if (rDailyXp) setDailyXp(parseInt(rDailyXp.value) || 0);
              if (rNudge) setNudgeDismissed(true);
              if (rEmily) setEmilyDailyCount(parseInt(rEmily.value) || 0);
              if (rPractice) setPracticeDailyCount(parseInt(rPractice.value) || 0);
              if (rXp) setXp(parseInt(rXp.value) || 0);

              // 6. Placement
              needsPlacement = true;
              if (rPlacement) {
                try {
                  _saved = JSON.parse(rPlacement.value);
                  if (LEVEL_ORDER.includes(_saved.level)) {
                    setPlacementLevel(_saved.level);
                    needsPlacement = false;
                  }
                } catch (_unused8) {}
              }
              placementDoneRef.current = !needsPlacement;

              // 7. Streak + badges
              finalStreak = 1;
              badges = new Set();
              if (rBadges) {
                try {
                  badges = new Set(JSON.parse(rBadges.value));
                  setEarnedBadges(badges);
                } catch (_unused9) {}
              }
              if (!rStreak) {
                _context4.n = 17;
                break;
              }
              _context4.p = 2;
              _d2 = JSON.parse(rStreak.value);
              yesterday = new Date(Date.now() - 86400000).toDateString();
              twoDaysAgo = new Date(Date.now() - 2 * 86400000).toDateString();
              if (!(_d2.lastVisit === today)) {
                _context4.n = 3;
                break;
              }
              setStreak(_d2.streak);
              finalStreak = _d2.streak;
              _context4.n = 11;
              break;
            case 3:
              if (!(_d2.lastVisit === yesterday)) {
                _context4.n = 5;
                break;
              }
              ns = _d2.streak + 1;
              setStreak(ns);
              finalStreak = ns;
              bonus = Math.min(ns * 5, 50);
              earnXp(bonus);
              setTimeout(function () {
                return showBonus("🔥 " + ns + "-day streak! +" + bonus + " XP", "#f59e0b");
              }, 800);
              _context4.n = 4;
              return window.storage.set("ws_streak", JSON.stringify({
                streak: ns,
                lastVisit: today
              }));
            case 4:
              _context4.n = 11;
              break;
            case 5:
              if (!(_d2.lastVisit === twoDaysAgo)) {
                _context4.n = 10;
                break;
              }
              curWeek = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
              usedThisWeek = loadedFreeze.week === curWeek ? loadedFreeze.used : 0;
              limit = loadedTier === "annual" ? 4 : loadedTier === "monthly" ? 3 : 2;
              if (!(usedThisWeek < limit)) {
                _context4.n = 8;
                break;
              }
              _ns = _d2.streak + 1;
              setStreak(_ns);
              finalStreak = _ns;
              newFreeze = {
                used: usedThisWeek + 1,
                week: curWeek
              };
              setFreezeInfo(newFreeze);
              _context4.n = 6;
              return window.storage.set("ws_freeze", JSON.stringify(newFreeze));
            case 6:
              _context4.n = 7;
              return window.storage.set("ws_streak", JSON.stringify({
                streak: _ns,
                lastVisit: today
              }));
            case 7:
              _bonus = Math.min(_ns * 5, 50);
              earnXp(_bonus);
              setTimeout(function () {
                return showBonus("🛡️ Streak freeze used! Streak saved.", "#06b6d4");
              }, 800);
              _context4.n = 9;
              break;
            case 8:
              setStreak(1);
              finalStreak = 1;
              _context4.n = 9;
              return window.storage.set("ws_streak", JSON.stringify({
                streak: 1,
                lastVisit: today
              }));
            case 9:
              _context4.n = 11;
              break;
            case 10:
              setStreak(1);
              finalStreak = 1;
              _context4.n = 11;
              return window.storage.set("ws_streak", JSON.stringify({
                streak: 1,
                lastVisit: today
              }));
            case 11:
              _context4.n = 16;
              break;
            case 12:
              _context4.p = 12;
              _t3 = _context4.v;
              setStreak(1);
              finalStreak = 1;
              _context4.p = 13;
              _context4.n = 14;
              return window.storage.set("ws_streak", JSON.stringify({
                streak: 1,
                lastVisit: today
              }));
            case 14:
              _context4.n = 16;
              break;
            case 15:
              _context4.p = 15;
              _t4 = _context4.v;
            case 16:
              _context4.n = 21;
              break;
            case 17:
              setStreak(1);
              finalStreak = 1;
              _context4.p = 18;
              _context4.n = 19;
              return window.storage.set("ws_streak", JSON.stringify({
                streak: 1,
                lastVisit: today
              }));
            case 19:
              _context4.n = 21;
              break;
            case 20:
              _context4.p = 20;
              _t5 = _context4.v;
            case 21:
              unclaimed = STREAK_MILESTONES.filter(function (m) {
                return m.days <= finalStreak && !badges.has(m.days);
              });
              if (unclaimed.length > 0) setTimeout(function () {
                return setStreakMilestone(unclaimed[unclaimed.length - 1]);
              }, 800);

              // 8. Route
              if (needsProfile) setScreen("profile");else if (needsPlacement) setScreen("placement");else {
                setAppReady(true);
                setScreen("home");
              }
            case 22:
              return _context4.a(2);
          }
        }, _callee4, null, [[18, 20], [13, 15], [2, 12]]);
      }));
      return _init.apply(this, arguments);
    }
    init();
  }, []); // eslint-disable-line

  // ── Placement ────────────────────────────────────────────────────────────────
  function quizPick(i) {
    if (quizSel !== null) return;
    setQuizSel(i);
    var correct = i === currentQuiz[quizStep].answer;
    var nextAnswers = [].concat(_toConsumableArray(quizAnswers), [correct]);
    setTimeout(function () {
      if (quizStep < currentQuiz.length - 1) {
        setQuizStep(function (s) {
          return s + 1;
        });
        setQuizSel(null);
        setQuizAnswers(nextAnswers);
      } else {
        setQuizResultLevel(scorePlacement(nextAnswers));
        setQuizAnswers(nextAnswers);
        setQuizPhase("result");
      }
    }, 1100);
  }
  function finishPlacement() {
    return _finishPlacement.apply(this, arguments);
  }
  function _finishPlacement() {
    _finishPlacement = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var lvl, _t9;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            lvl = quizResultLevel || "Beginner";
            setPlacementLevel(lvl);
            _context8.p = 1;
            _context8.n = 2;
            return window.storage.set("ws_placement", JSON.stringify({
              level: lvl
            }));
          case 2:
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t9 = _context8.v;
          case 4:
            setAppReady(true);
            setScreen("home");
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 3]]);
    }));
    return _finishPlacement.apply(this, arguments);
  }
  function retakePlacement() {
    setCurrentQuiz(generateQuiz());
    setQuizPhase("welcome");
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizSel(null);
    setQuizResultLevel(null);
    setScreen("placement");
  }

  // ── Profile onboarding ───────────────────────────────────────────────────────
  function handleFinishProfile() {
    return _handleFinishProfile.apply(this, arguments);
  } // ── Reset ────────────────────────────────────────────────────────────────────
  function _handleFinishProfile() {
    _handleFinishProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var name, location, result, city, country, _t0, _t1;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            name = profileNameInp.trim(), location = profileLocInp.trim();
            if (!(!name || !location || profileLocChecking)) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            setProfileLocChecking(true);
            setProfileLocError(null);
            setProfileLocConfirm(null);
            _context9.p = 2;
            _context9.n = 3;
            return validateCity(location);
          case 3:
            result = _context9.v;
            if (result.valid) {
              _context9.n = 4;
              break;
            }
            setProfileLocError("We couldn't find that place — could you check the spelling?");
            setProfileLocChecking(false);
            return _context9.a(2);
          case 4:
            city = result.city, country = result.country;
            setProfileLocConfirm("\uD83D\uDCCD Found: ".concat(city, ", ").concat(country));
            setProfileLocChecking(false);
            setProfileName(name);
            setProfileLocation(city);
            setProfileCoords({
              city: city,
              country: country
            });
            _context9.p = 5;
            _context9.n = 6;
            return window.storage.set("ws_profile", JSON.stringify({
              name: name,
              city: city,
              country: country
            }));
          case 6:
            _context9.n = 8;
            break;
          case 7:
            _context9.p = 7;
            _t0 = _context9.v;
          case 8:
            setTimeout(function () {
              setProfileLocConfirm(null);
              if (!placementDoneRef.current) setScreen("placement");else {
                setAppReady(true);
                setScreen("home");
              }
            }, 1200);
            _context9.n = 10;
            break;
          case 9:
            _context9.p = 9;
            _t1 = _context9.v;
            setProfileLocError("Something went wrong — please try again.");
            setProfileLocChecking(false);
          case 10:
            return _context9.a(2);
        }
      }, _callee9, null, [[5, 7], [2, 9]]);
    }));
    return _handleFinishProfile.apply(this, arguments);
  }
  function resetAllData() {
    return _resetAllData.apply(this, arguments);
  }
  function _resetAllData() {
    _resetAllData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var weekNum, today, _i, _arr, key, _t10;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
            today = new Date().toDateString();
            _i = 0, _arr = ["ws_profile", "ws_placement", "ws_streak", "ws_streak_badges", "ws_pro", "ws_freeze", "ws_studied", "ws_wotd_words", "ws_dict_saved", "ws_nudge_dismissed", "ws_xp", "ws_weather_".concat(today), "ws_daily_xp_".concat(today), "ws_wotd_".concat(today), "ws_idiom_".concat(weekNum), "ws_emily_".concat(today), "ws_practice_".concat(today)];
          case 1:
            if (!(_i < _arr.length)) {
              _context0.n = 6;
              break;
            }
            key = _arr[_i];
            _context0.p = 2;
            _context0.n = 3;
            return window.storage.delete(key);
          case 3:
            _context0.n = 5;
            break;
          case 4:
            _context0.p = 4;
            _t10 = _context0.v;
          case 5:
            _i++;
            _context0.n = 1;
            break;
          case 6:
            setProfileName("");
            setProfileLocation("");
            setProfileCoords(null);
            setProfileStep("name");
            setProfileNameInp("");
            setProfileLocInp("");
            setProfileLocError(null);
            setProfileLocConfirm(null);
            setProfileLocChecking(false);
            setWeatherGreeting(null);
            setPlacementLevel("Beginner");
            setXp(0);
            setStreak(1);
            setAppReady(false);
            setEarnedBadges(new Set());
            setStreakMilestone(null);
            setIsPro(false);
            setProTier("none");
            setEmilyDailyCount(0);
            setPracticeDailyCount(0);
            setPaywallSource(null);
            setFreezeInfo({
              used: 0,
              week: 0
            });
            setHasStudied(false);
            setDictSaved([]);
            setNudgeDismissed(false);
            setDailyXp(0);
            setResetConfirm(false);
            placementDoneRef.current = false;
            setScreen("profile");
          case 7:
            return _context0.a(2);
        }
      }, _callee0, null, [[2, 4]]);
    }));
    return _resetAllData.apply(this, arguments);
  }
  function claimMilestone() {
    return _claimMilestone.apply(this, arguments);
  }
  function _claimMilestone() {
    _claimMilestone = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var updated, _t11;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            if (streakMilestone) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            earnXp(streakMilestone.xp);
            showBonus(streakMilestone.emoji + " Milestone! +" + streakMilestone.xp + " XP", "#f59e0b");
            updated = new Set([].concat(_toConsumableArray(earnedBadges), [streakMilestone.days]));
            setEarnedBadges(updated);
            _context1.p = 2;
            _context1.n = 3;
            return window.storage.set("ws_streak_badges", JSON.stringify(_toConsumableArray(updated)));
          case 3:
            _context1.n = 5;
            break;
          case 4:
            _context1.p = 4;
            _t11 = _context1.v;
          case 5:
            setStreakMilestone(null);
          case 6:
            return _context1.a(2);
        }
      }, _callee1, null, [[2, 4]]);
    }));
    return _claimMilestone.apply(this, arguments);
  }
  function activatePro(_x8) {
    return _activatePro.apply(this, arguments);
  } // ── Game handlers ────────────────────────────────────────────────────────────
  function _activatePro() {
    _activatePro = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(tier) {
      var _t12;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            setIsPro(true);
            setProTier(tier);
            _context10.p = 1;
            _context10.n = 2;
            return window.storage.set("ws_pro", JSON.stringify({
              active: true,
              tier: tier
            }));
          case 2:
            _context10.n = 4;
            break;
          case 3:
            _context10.p = 3;
            _t12 = _context10.v;
          case 4:
            setPaywallSource(null);
            setTimeout(function () {
              return showBonus("✨ Welcome to WordSpark Pro!", "#8b5cf6");
            }, 300);
          case 5:
            return _context10.a(2);
        }
      }, _callee10, null, [[1, 3]]);
    }));
    return _activatePro.apply(this, arguments);
  }
  function shuffleW(w) {
    var a = w.split("");
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref6 = [a[j], a[i]];
      a[i] = _ref6[0];
      a[j] = _ref6[1];
    }
    if (a.join("") === w) {
      var _ref7 = [a[1], a[0]];
      a[0] = _ref7[0];
      a[1] = _ref7[1];
    }
    return a.join("");
  }
  function markStudied() {
    return _markStudied.apply(this, arguments);
  }
  function _markStudied() {
    _markStudied = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var _t13;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (!hasStudied) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            setHasStudied(true);
            _context11.p = 2;
            _context11.n = 3;
            return window.storage.set("ws_studied", "1");
          case 3:
            _context11.n = 5;
            break;
          case 4:
            _context11.p = 4;
            _t13 = _context11.v;
          case 5:
            return _context11.a(2);
        }
      }, _callee11, null, [[2, 4]]);
    }));
    return _markStudied.apply(this, arguments);
  }
  function checkSc() {
    var word = deckItem(SCRAMBLE_WORDS[level], scIdx, scDeck);
    var elapsed = Date.now() - qTime.current;
    markStudied();
    if (scInput.toUpperCase() === word) {
      setScResult("correct");
      var ns = cStreak + 1;
      setCStreak(ns);
      var bonus = 0;
      if (ns % 5 === 0) {
        bonus += 20;
        showBonus("🏆 Perfect x" + ns + "! +20 XP", "#8b5cf6");
      } else if (elapsed < 8000) {
        bonus += 5;
        showBonus("⚡ Speed bonus! +5 XP", "#06b6d4");
      }
      earnXp(10 + bonus);
    } else {
      setScResult("wrong");
      setCStreak(0);
    }
  }
  function pickFl(i) {
    if (flSel !== null) return;
    setFlSel(i);
    markStudied();
    var elapsed = Date.now() - qTime.current;
    var f = deckItem(FLASHCARDS_DATA[level], flIdx, flDeck);
    if (i === f.answer) {
      var ns = cStreak + 1;
      setCStreak(ns);
      var bonus = 0;
      if (ns % 5 === 0) {
        bonus += 20;
        showBonus("🏆 Perfect x" + ns + "! +20 XP", "#8b5cf6");
      } else if (elapsed < 8000) {
        bonus += 5;
        showBonus("⚡ Speed bonus! +5 XP", "#06b6d4");
      }
      earnXp(10 + bonus);
    } else setCStreak(0);
  }
  function pickFb(i) {
    if (fbSel !== null) return;
    setFbSel(i);
    markStudied();
    var fb = deckItem(FILL_DATA[level], fbIdx, fbDeck);
    if (i === fb.answer) {
      var ns = cStreak + 1;
      setCStreak(ns);
      var bonus = 0;
      if (ns % 5 === 0) {
        bonus += 20;
        showBonus("🏆 Perfect x" + ns + "! +20 XP", "#8b5cf6");
      } else {
        var elapsed = Date.now() - qTime.current;
        if (elapsed < 8000) {
          bonus += 5;
          showBonus("⚡ Speed bonus! +5 XP", "#06b6d4");
        }
      }
      earnXp(10 + bonus);
    } else setCStreak(0);
  }

  // ── Sentence practice ────────────────────────────────────────────────────────
  function checkWotdSentence(_x9) {
    return _checkWotdSentence.apply(this, arguments);
  }
  function _checkWotdSentence() {
    _checkWotdSentence = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(idx) {
      var w, sentence, already, newCount, result, today, existing, d2, _t14, _t15, _t16;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            w = getWotd(level);
            sentence = wotdInputs[idx].trim();
            if (!(!sentence || wotdLoading[idx] || wotdAccepted[idx])) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            // Block duplicate sentences across all boxes
            already = wotdInputs.filter(function (_, i) {
              return i !== idx && wotdAccepted[i];
            }).map(function (s) {
              return s.trim().toLowerCase();
            });
            if (!already.includes(sentence.toLowerCase())) {
              _context12.n = 2;
              break;
            }
            setWotdResults(function (p) {
              var n = _toConsumableArray(p);
              n[idx] = {
                correct: false,
                feedback: "You already used that sentence! Try writing a different one."
              };
              return n;
            });
            return _context12.a(2);
          case 2:
            if (!(!isPro && practiceDailyCount >= FREE_PRACTICE_LIMIT)) {
              _context12.n = 3;
              break;
            }
            setPaywallSource("practice");
            return _context12.a(2);
          case 3:
            setWotdLoading(function (p) {
              var n = _toConsumableArray(p);
              n[idx] = true;
              return n;
            });
            newCount = practiceDailyCount + 1;
            setPracticeDailyCount(newCount);
            _context12.p = 4;
            _context12.n = 5;
            return window.storage.set("ws_practice_" + new Date().toDateString(), String(newCount));
          case 5:
            _context12.n = 7;
            break;
          case 6:
            _context12.p = 6;
            _t14 = _context12.v;
          case 7:
            _context12.p = 7;
            _context12.n = 8;
            return callAI("check_sentence", {
              word: w.word,
              type: w.type,
              sentence: sentence,
              level: level
            });
          case 8:
            result = _context12.v;
            setWotdResults(function (p) {
              var n = _toConsumableArray(p);
              n[idx] = result;
              return n;
            });
            if (!result.correct) {
              _context12.n = 13;
              break;
            }
            setWotdAccepted(function (p) {
              var n = _toConsumableArray(p);
              n[idx] = true;
              return n;
            });
            earnXp(15);
            today = new Date().toDateString();
            _context12.p = 9;
            _context12.n = 10;
            return window.storage.get("ws_wotd_" + today);
          case 10:
            existing = _context12.v;
            d2 = existing ? JSON.parse(existing.value) : {};
            d2["s" + (idx + 1)] = {
              sentence: sentence,
              result: result,
              accepted: true
            };
            _context12.n = 11;
            return window.storage.set("ws_wotd_" + today, JSON.stringify(d2));
          case 11:
            _context12.n = 13;
            break;
          case 12:
            _context12.p = 12;
            _t15 = _context12.v;
          case 13:
            _context12.n = 15;
            break;
          case 14:
            _context12.p = 14;
            _t16 = _context12.v;
            setWotdResults(function (p) {
              var n = _toConsumableArray(p);
              n[idx] = {
                correct: false,
                feedback: "Something went wrong. Please try again."
              };
              return n;
            });
          case 15:
            setWotdLoading(function (p) {
              var n = _toConsumableArray(p);
              n[idx] = false;
              return n;
            });
          case 16:
            return _context12.a(2);
        }
      }, _callee12, null, [[9, 12], [7, 14], [4, 6]]);
    }));
    return _checkWotdSentence.apply(this, arguments);
  }
  function checkIdiomSentence() {
    return _checkIdiomSentence.apply(this, arguments);
  } // ── Translation ──────────────────────────────────────────────────────────────
  function _checkIdiomSentence() {
    _checkIdiomSentence = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var id, sentence, newCount, result, weekNum, _t17, _t18, _t19;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            id = getIdiomOfWeek(level);
            sentence = idiomInput.trim();
            if (!(!sentence || idiomLoading || idiomAccepted)) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            if (!(idiomResult && idiomInput.trim().toLowerCase() === (idiomResult._lastSentence || "").toLowerCase())) {
              _context13.n = 2;
              break;
            }
            setIdiomResult(_objectSpread(_objectSpread({}, idiomResult), {}, {
              feedback: "You already tried that sentence. Change it and try again!"
            }));
            return _context13.a(2);
          case 2:
            if (!(!isPro && practiceDailyCount >= FREE_PRACTICE_LIMIT)) {
              _context13.n = 3;
              break;
            }
            setPaywallSource("practice");
            return _context13.a(2);
          case 3:
            setIdiomLoading(true);
            newCount = practiceDailyCount + 1;
            setPracticeDailyCount(newCount);
            _context13.p = 4;
            _context13.n = 5;
            return window.storage.set("ws_practice_" + new Date().toDateString(), String(newCount));
          case 5:
            _context13.n = 7;
            break;
          case 6:
            _context13.p = 6;
            _t17 = _context13.v;
          case 7:
            _context13.p = 7;
            _context13.n = 8;
            return callAI("check_idiom", {
              idiom: id.idiom,
              meaning: id.meaning,
              sentence: sentence,
              level: level
            });
          case 8:
            result = _context13.v;
            setIdiomResult(_objectSpread(_objectSpread({}, result), {}, {
              _lastSentence: sentence
            }));
            if (!result.correct) {
              _context13.n = 12;
              break;
            }
            setIdiomAccepted(true);
            earnXp(20);
            weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
            _context13.p = 9;
            _context13.n = 10;
            return window.storage.set("ws_idiom_" + weekNum, JSON.stringify({
              s1: {
                sentence: sentence,
                result: result,
                accepted: true
              }
            }));
          case 10:
            _context13.n = 12;
            break;
          case 11:
            _context13.p = 11;
            _t18 = _context13.v;
          case 12:
            _context13.n = 14;
            break;
          case 13:
            _context13.p = 13;
            _t19 = _context13.v;
            setIdiomResult({
              correct: false,
              feedback: "Something went wrong. Please try again."
            });
          case 14:
            setIdiomLoading(false);
          case 15:
            return _context13.a(2);
        }
      }, _callee13, null, [[9, 11], [7, 13], [4, 6]]);
    }));
    return _checkIdiomSentence.apply(this, arguments);
  }
  var taS = {
    width: "100%",
    padding: "13px 15px",
    borderRadius: 14,
    border: "2px solid rgba(255,255,255,.3)",
    background: "rgba(0,0,0,.35)",
    color: "#fff",
    fontSize: 15,
    lineHeight: 1.65,
    outline: "none",
    resize: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    marginBottom: 8
  };
  function translateWord(_x0, _x1, _x10) {
    return _translateWord.apply(this, arguments);
  } // ── Dictionary lookup ────────────────────────────────────────────────────────
  function _translateWord() {
    _translateWord = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(word, setter, loadSetter) {
      var country, data, _t20;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            country = (profileCoords === null || profileCoords === void 0 ? void 0 : profileCoords.country) || profileLocation;
            if (country) {
              _context14.n = 1;
              break;
            }
            setter("Set your location to enable translation.");
            return _context14.a(2);
          case 1:
            loadSetter(true);
            _context14.p = 2;
            _context14.n = 3;
            return callAI("translate", {
              word: word,
              userLanguage: country
            });
          case 3:
            data = _context14.v;
            setter(data.text || (data.word ? "".concat(data.word, " \u2192 ").concat(data.definition) : "Translation unavailable."));
            _context14.n = 5;
            break;
          case 4:
            _context14.p = 4;
            _t20 = _context14.v;
            setter("Translation unavailable.");
          case 5:
            loadSetter(false);
          case 6:
            return _context14.a(2);
        }
      }, _callee14, null, [[2, 4]]);
    }));
    return _translateWord.apply(this, arguments);
  }
  function lookupWord(_x11) {
    return _lookupWord.apply(this, arguments);
  }
  function _lookupWord() {
    _lookupWord = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(word) {
      var q, res, data, _t21;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            q = (word || dictQuery).trim().toLowerCase();
            if (q) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2);
          case 1:
            setDictQuery(q);
            setDictLoading(true);
            setDictResult(null);
            setDictError(null);
            _context15.p = 2;
            _context15.n = 3;
            return fetch("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(encodeURIComponent(q)));
          case 3:
            res = _context15.v;
            if (!res.ok) {
              _context15.n = 5;
              break;
            }
            _context15.n = 4;
            return res.json();
          case 4:
            data = _context15.v;
            setDictResult(data);
            _context15.n = 6;
            break;
          case 5:
            setDictError('No definition found for "' + q + '". Check the spelling and try again.');
          case 6:
            _context15.n = 8;
            break;
          case 7:
            _context15.p = 7;
            _t21 = _context15.v;
            setDictError("Could not connect. Please check your internet connection.");
          case 8:
            setDictLoading(false);
          case 9:
            return _context15.a(2);
        }
      }, _callee15, null, [[2, 7]]);
    }));
    return _lookupWord.apply(this, arguments);
  }
  function toggleDictSave(_x12) {
    return _toggleDictSave.apply(this, arguments);
  }
  function _toggleDictSave() {
    _toggleDictSave = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(word) {
      var already, updated, _t22;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            already = dictSaved.includes(word);
            updated = already ? dictSaved.filter(function (w) {
              return w !== word;
            }) : [].concat(_toConsumableArray(dictSaved), [word]);
            setDictSaved(updated);
            _context16.p = 1;
            _context16.n = 2;
            return window.storage.set("ws_dict_saved", JSON.stringify(updated));
          case 2:
            _context16.n = 4;
            break;
          case 3:
            _context16.p = 3;
            _t22 = _context16.v;
          case 4:
            return _context16.a(2);
        }
      }, _callee16, null, [[1, 3]]);
    }));
    return _toggleDictSave.apply(this, arguments);
  }
  function speak(text) {
    if (!ttsOn || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    u.pitch = 1.1;
    var voices = window.speechSynthesis.getVoices();
    var pref = voices.find(function (v) {
      return v.lang.startsWith("en") && v.name.includes("Female");
    }) || voices.find(function (v) {
      return v.lang.startsWith("en");
    });
    if (pref) u.voice = pref;
    window.speechSynthesis.speak(u);
  }
  function pickTopic(t) {
    var clean = t.replace(/(?:[\u26BD\u2708\u2764\uFE0F]|\uD83C[\uDF10\uDF3F\uDF5C\uDFA8\uDFAC\uDFAD\uDFB5\uDFE0]|\uD83D[\uDCAA\uDCBB\uDCBC\uDCF0\uDD2D\uDECD])/g, "").trim();
    setTopic(clean || t);
    var greeting = "Hi there! I am Emily, your AI English tutor. You are at " + level + " level — great! Let's chat about " + (clean || t) + ". Tell me something about it — anything at all!";
    setMsgs([{
      role: "assistant",
      content: greeting
    }]);
    setTimeout(function () {
      return speak(greeting);
    }, 400);
  }
  function sendChat(_x13) {
    return _sendChat.apply(this, arguments);
  } // ── Monster Gauntlet ─────────────────────────────────────────────────────────
  function _sendChat() {
    _sendChat = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(forcedText) {
      var txt, next, newCount, system, emilyData, reply, uc, _t23, _t24;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            txt = (forcedText !== undefined ? forcedText : chatIn).trim();
            if (!(!txt || chatLoad)) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2);
          case 1:
            if (!(!isPro && emilyDailyCount >= FREE_EMILY_LIMIT)) {
              _context17.n = 2;
              break;
            }
            setPaywallSource("emily");
            return _context17.a(2);
          case 2:
            setChatIn("");
            next = [].concat(_toConsumableArray(msgs), [{
              role: "user",
              content: txt
            }]);
            setMsgs(next);
            setChatLoad(true);
            newCount = emilyDailyCount + 1;
            setEmilyDailyCount(newCount);
            _context17.p = 3;
            _context17.n = 4;
            return window.storage.set("ws_emily_" + new Date().toDateString(), String(newCount));
          case 4:
            _context17.n = 6;
            break;
          case 5:
            _context17.p = 5;
            _t23 = _context17.v;
          case 6:
            _context17.p = 6;
            system = proTier === "annual" ? "You are Emily, a friendly and funny native English speaker chatting with a language learner. You genuinely enjoy this conversation — react naturally, share your own (fictional) opinions and little personal stories, use light humour when it fits, and occasionally reference things the person mentioned earlier in the chat to show you were listening. You are at " + level + " level vocabulary so keep your language appropriate, but talk like a real person, not a teacher. Correct grammar mistakes by naturally using the right form in your own reply — never point them out explicitly. Don't always end with a question; sometimes just respond like a human would. Keep replies to 2-4 sentences.\n\nCONTENT POLICY: This is a family-friendly English learning app. If the user brings up sexual topics, child abuse, graphic violence, illegal activities, hate speech, or political topics, do NOT engage. Instead respond warmly: That is not something I can chat about here — let us get back to " + topic + "! Always stay friendly and immediately redirect." : "You are Emily, a warm and encouraging English language tutor. The student is at " + level + " level and the chosen topic is \"" + topic + "\". Keep all replies to 2-3 sentences. Gently correct any grammar mistakes by naturally showing the correct form. Always end with a follow-up question. Match your vocabulary to the student level.\n\nCONTENT POLICY: This is a family-friendly English learning app. If the user brings up sexual topics, child abuse, graphic violence, illegal activities, hate speech, or political topics, do NOT engage. Instead respond warmly: That is not something I can chat about here — I am here to help you practice English! Let us get back to [topic]. Always stay friendly and immediately redirect.";
            _context17.n = 7;
            return callAI("emily", {
              messages: next,
              system: system
            });
          case 7:
            emilyData = _context17.v;
            reply = emilyData.text || "Could you try again?";
            setMsgs([].concat(_toConsumableArray(next), [{
              role: "assistant",
              content: reply
            }]));
            speak(reply);
            earnXp(5);
            uc = next.filter(function (m) {
              return m.role === "user";
            }).length;
            if (uc === 1 || uc % 5 === 0) showBonus("💬 Chatting with Emily! +5 XP", "#059669");
            _context17.n = 9;
            break;
          case 8:
            _context17.p = 8;
            _t24 = _context17.v;
            setMsgs([].concat(_toConsumableArray(next), [{
              role: "assistant",
              content: "Oops! Something went wrong. Please try again."
            }]));
          case 9:
            setChatLoad(false);
          case 10:
            return _context17.a(2);
        }
      }, _callee17, null, [[6, 8], [3, 5]]);
    }));
    return _sendChat.apply(this, arguments);
  }
  function mgGenChallenge(type) {
    var ww = WORDS_DATA[level],
      fl = FLASHCARDS_DATA[level],
      fb = FILL_DATA[level];
    var rw = function rw() {
      return ww[Math.floor(Math.random() * ww.length)];
    };
    var rfl = function rfl() {
      return fl[Math.floor(Math.random() * fl.length)];
    };
    var rfb = function rfb() {
      return fb[Math.floor(Math.random() * fb.length)];
    };
    var ant = ANTONYM_DATA[level];
    if (type === "goblin") {
      var f = rfl();
      return _objectSpread({
        type: "flashcard"
      }, f);
    }
    if (type === "zombie") {
      var _f = rfb();
      return _objectSpread({
        type: "fillblank"
      }, _f);
    }
    if (type === "dracula") {
      var w = rw();
      return _objectSpread(_objectSpread({
        type: "scramble"
      }, w), {}, {
        scrambled: shuffleW(w.word)
      });
    }
    if (type === "dragon") return _objectSpread({
      type: "spell"
    }, rw());
    if (type === "ghost") {
      var a = ant[Math.floor(Math.random() * ant.length)];
      return {
        type: "antonym",
        word: a.word,
        correct: a.correct,
        options: a.options
      };
    }
    return _objectSpread({
      type: "flashcard"
    }, rfl());
  }
  function handleMGCorrect() {
    if (mgResult) return;
    setMgResult("win");
    setMgAnim("win");
    var gain = mgMonster !== null && mgMonster !== void 0 && mgMonster.isBoss ? 40 : 15;
    earnXp(gain);
    setMgScore(function (s) {
      return s + gain;
    });
    if (mgMonster !== null && mgMonster !== void 0 && mgMonster.isBoss) showBonus("👑 Boss slain! +40 XP", "#f59e0b");
    if (mgTimerRef.current) clearInterval(mgTimerRef.current);
    setTimeout(function () {
      setMgFloor(function (f) {
        return f + 1;
      });
      setMgResult(null);
      setMgSel(null);
      setMgInput("");
      setMgAnim(null);
      var types = ["goblin", "zombie", "dracula", "dragon", "ghost"];
      var nextFloor = mgFloor + 1;
      var isBoss = nextFloor % 5 === 0;
      var t = types[Math.floor(Math.random() * types.length)];
      var challenge = mgGenChallenge(t);
      setMgMonster(_objectSpread(_objectSpread(_objectSpread({}, MONSTERS[t]), challenge), {}, {
        monsterType: t,
        isBoss: isBoss,
        floor: nextFloor
      }));
      if (t === "dracula") {
        var tm = 15;
        setMgTimer(tm);
        mgTimerRef.current = setInterval(function () {
          tm--;
          setMgTimer(tm);
          if (tm <= 0) {
            clearInterval(mgTimerRef.current);
            handleMGFail();
          }
        }, 1000);
      } else setMgTimer(null);
    }, 2000);
  }
  function handleMGWrong() {
    if (mgResult) return;
    setMgResult("lose");
    setMgAnim("shake");
    setMgHearts(function (h) {
      return h - 1;
    });
    if (mgTimerRef.current) clearInterval(mgTimerRef.current);
    setTimeout(function () {
      setMgAnim(null);
      if (mgHearts - 1 <= 0) {
        setMgResult("dead");
        return;
      }
      setMgResult(null);
      setMgSel(null);
      setMgInput("");
    }, 1800);
  }
  function handleMGFail() {
    if (mgResult) return;
    setMgResult("lose");
    setMgAnim("shake");
    setMgHearts(function (h) {
      return h - 1;
    });
    if (mgTimerRef.current) clearInterval(mgTimerRef.current);
    setTimeout(function () {
      setMgAnim(null);
      if (mgHearts - 1 <= 0) {
        setMgResult("dead");
        return;
      }
      setMgResult(null);
      setMgSel(null);
      setMgInput("");
    }, 1800);
  }

  // ── Bookworm ──────────────────────────────────────────────────────────────────
  function submitBwWord() {
    return _submitBwWord.apply(this, arguments);
  } // ── Overlays ──────────────────────────────────────────────────────────────────
  function _submitBwWord() {
    _submitBwWord = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var word, minLen, result, pts, newGrid, withBurn, _t25;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            word = bwSel.map(function (i) {
              return bwGrid[i].letter;
            }).join("").toLowerCase();
            minLen = MIN_WORD[level];
            if (!(word.length < minLen)) {
              _context18.n = 1;
              break;
            }
            setBwMsg("Too short! Min " + minLen + " letters.");
            setTimeout(function () {
              return setBwMsg(null);
            }, 1500);
            setBwSel([]);
            return _context18.a(2);
          case 1:
            if (!bwWords.includes(word)) {
              _context18.n = 2;
              break;
            }
            setBwMsg("Already found!");
            setTimeout(function () {
              return setBwMsg(null);
            }, 1500);
            setBwSel([]);
            return _context18.a(2);
          case 2:
            setBwDefLoad(true);
            _context18.p = 3;
            _context18.n = 4;
            return callAI("bookworm", {
              word: word,
              level: level
            });
          case 4:
            result = _context18.v;
            if (result.valid) {
              pts = calcScore(bwSel, bwGrid);
              setBwWords(function (w) {
                return [].concat(_toConsumableArray(w), [word]);
              });
              setBwScore(function (s) {
                return s + pts;
              });
              earnXp(pts * 2);
              setBwDef(result.def);
              setBwMsg("+" + pts * 2 + " XP! " + word.toUpperCase());
              newGrid = _toConsumableArray(bwGrid);
              bwSel.forEach(function (i) {
                newGrid[i] = _objectSpread(_objectSpread({}, newGrid[i]), {}, {
                  letter: randL(),
                  special: Math.random() < 0.1 ? "green" : Math.random() < 0.03 ? "gold" : null,
                  heat: 0
                });
              });
              seedGrid(newGrid, level, 1, 0.2);
              withBurn = addBurn(newGrid);
              setBwGrid(withBurn);
            } else {
              setBwMsg("Not a word!");
              setBwDef(null);
            }
            _context18.n = 6;
            break;
          case 5:
            _context18.p = 5;
            _t25 = _context18.v;
            setBwMsg("Error checking!");
          case 6:
            setBwDefLoad(false);
            setTimeout(function () {
              return setBwMsg(null);
            }, 2000);
            setBwSel([]);
          case 7:
            return _context18.a(2);
        }
      }, _callee18, null, [[3, 5]]);
    }));
    return _submitBwWord.apply(this, arguments);
  }
  var highestBadge = [].concat(STREAK_MILESTONES).reverse().find(function (m) {
    return earnedBadges.has(m.days);
  });
  var overlays = /*#__PURE__*/React.createElement(React.Fragment, null, xpPop && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 16,
      right: 16,
      background: "#fbbf24",
      color: "#1e1b4b",
      fontWeight: 700,
      borderRadius: 20,
      padding: "7px 15px",
      zIndex: 1000,
      fontSize: 14,
      pointerEvents: "none",
      boxShadow: "0 4px 15px rgba(251,191,36,.5)"
    }
  }, "+XP \u2B50"), bonusPop && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: xpPop ? 58 : 16,
      right: 16,
      background: bonusPop.color,
      color: "#fff",
      fontWeight: 700,
      borderRadius: 20,
      padding: "7px 15px",
      zIndex: 1000,
      fontSize: 13,
      pointerEvents: "none",
      boxShadow: "0 4px 15px rgba(0,0,0,.3)"
    }
  }, bonusPop.msg), reviewMode && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 16,
      left: 16,
      background: isPro ? "rgba(139,92,246,.2)" : "rgba(251,191,36,.15)",
      border: "1.5px solid " + (isPro ? "#8b5cf6" : "rgba(251,191,36,.5)"),
      color: isPro ? "#c4b5fd" : "#fbbf24",
      borderRadius: 20,
      padding: "6px 13px",
      fontSize: 12,
      fontWeight: 700,
      zIndex: 999,
      pointerEvents: "none"
    }
  }, isPro ? "✨ Review · Full XP" : "📖 Review · ½ XP"), paywallSource && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.94)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 900,
      padding: "0 24px",
      textAlign: "center",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes proSlide{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "proSlide .4s ease both",
      width: "100%",
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      marginBottom: 12
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 900,
      color: "#fff",
      marginBottom: 8
    }
  }, paywallSource === "emily" ? "You've reached your daily limit" : paywallSource === "practice" ? "Daily check limit reached" : "Upgrade to WordSpark Pro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#c4b5fd",
      lineHeight: 1.65,
      marginBottom: 24
    }
  }, paywallSource === "emily" ? "Free users get " + FREE_EMILY_LIMIT + " Emily messages per day. Upgrade to chat without limits." : paywallSource === "practice" ? "Free users get " + FREE_PRACTICE_LIMIT + " AI sentence checks per day. Upgrade for unlimited feedback." : "Unlock the full WordSpark experience."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.06)",
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: 20,
      padding: "16px 20px",
      marginBottom: 20,
      textAlign: "left"
    }
  }, [["💬 Emily conversations", "10 / day", "Unlimited"], ["✏️ AI sentence checks", "3 / day", "Unlimited"], ["⭐ Review mode XP", "½ XP", "Full XP"], ["🔗 Word Chunks", "—", "Unlocked"], ["🛡️ Streak freezes", "2 / week", "3–4 / week"], ["🚀 Early access", "—", "New features first"]].map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 3),
      feat = _ref9[0],
      free = _ref9[1],
      pro = _ref9[2];
    return /*#__PURE__*/React.createElement("div", {
      key: feat,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 2,
        color: "#e0e7ff"
      }
    }, feat), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: "rgba(255,255,255,.35)",
        textAlign: "center",
        textDecoration: "line-through",
        fontSize: 12
      }
    }, free), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: "#a78bfa",
        fontWeight: 700,
        textAlign: "center"
      }
    }, pro));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      fontSize: 11,
      color: "rgba(255,255,255,.3)",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, "Free"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "center",
      color: "#a78bfa"
    }
  }, "Pro \u2728"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 14
    }
  }, [{
    price: "$3.99",
    period: "month",
    tier: "monthly",
    freezes: "3 freezes/week",
    best: false
  }, {
    price: "$23.99",
    period: "year",
    tier: "annual",
    freezes: "4 freezes/week · Save 50%",
    best: true
  }].map(function (_ref0) {
    var price = _ref0.price,
      period = _ref0.period,
      tier = _ref0.tier,
      freezes = _ref0.freezes,
      best = _ref0.best;
    return /*#__PURE__*/React.createElement("button", {
      key: tier,
      onClick: function onClick() {
        return activatePro(tier);
      },
      style: {
        flex: 1,
        background: best ? "rgba(139,92,246,.25)" : "rgba(255,255,255,.06)",
        border: "1.5px solid " + (best ? "#8b5cf6" : "rgba(255,255,255,.15)"),
        borderRadius: 16,
        padding: "14px 10px",
        textAlign: "center",
        cursor: "pointer",
        position: "relative",
        fontFamily: "inherit"
      }
    }, best && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: -10,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#8b5cf6",
        color: "#fff",
        fontSize: 10,
        fontWeight: 700,
        borderRadius: 10,
        padding: "2px 10px",
        whiteSpace: "nowrap"
      }
    }, "BEST VALUE"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 900,
        color: "#fff"
      }
    }, price), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#c4b5fd",
        marginTop: 2
      }
    }, "per ", period), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#a78bfa",
        marginTop: 4,
        fontWeight: 600
      }
    }, freezes));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPaywallSource(null);
    },
    style: {
      background: "none",
      border: "none",
      color: "rgba(196,181,253,.45)",
      cursor: "pointer",
      fontSize: 13,
      fontFamily: "inherit",
      padding: "8px",
      width: "100%"
    }
  }, "Maybe later"))), streakMilestone && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.93)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 800,
      padding: "0 28px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes milePop{0%{transform:scale(0) rotate(-10deg)}65%{transform:scale(1.25) rotate(4deg)}100%{transform:scale(1) rotate(0)}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 90,
      marginBottom: 16,
      animation: "milePop .6s cubic-bezier(.36,.07,.19,.97) both"
    }
  }, streakMilestone.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "#fbbf24",
      letterSpacing: 2.5,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Milestone Reached!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 900,
      color: "#fff",
      marginBottom: 8
    }
  }, streakMilestone.badge, " Streak!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "#c4b5fd",
      lineHeight: 1.65,
      marginBottom: 28,
      maxWidth: 280
    }
  }, streakMilestone.msg), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(251,191,36,.12)",
      border: "2px solid rgba(251,191,36,.6)",
      borderRadius: 22,
      padding: "18px 32px",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#fde68a",
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "One-Time Bonus"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      fontWeight: 900,
      color: "#fbbf24"
    }
  }, "+", streakMilestone.xp, " XP")), /*#__PURE__*/React.createElement("button", {
    onClick: claimMilestone,
    style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(135deg,#f59e0b,#ef4444)")), {}, {
      fontSize: 18,
      padding: "16px 32px",
      width: "auto"
    })
  }, "Claim Reward \uD83C\uDF89")));

  // ── LOADING ───────────────────────────────────────────────────────────────────
  if (!appReady && screen !== "profile" && screen !== "placement") return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, S.wrap()), {}, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48
    }
  }, "\u26A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#c4b5fd",
      marginTop: 10,
      fontSize: 14
    }
  }, "Loading WordSpark\u2026")));

  // ── PROFILE ONBOARDING ────────────────────────────────────────────────────────
  var inputStyle = {
    width: "100%",
    padding: "15px 18px",
    borderRadius: 16,
    border: "2px solid rgba(255,255,255,.2)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    fontSize: 17,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    marginBottom: 8
  };
  if (screen === "profile") {
    if (profileStep === "name") return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, S.wrap("linear-gradient(160deg,#1e1b4b,#3730a3,#312e81)")), {}, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 32px",
        textAlign: "center"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 48,
        marginBottom: 16
      }
    }, "\u26A1"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 30,
        fontWeight: 900,
        color: "#fff",
        marginBottom: 8
      }
    }, "Welcome to WordSpark!"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#c4b5fd",
        marginBottom: 32,
        lineHeight: 1.6
      }
    }, "Your AI-powered English vocabulary journey starts here."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        color: "#e0e7ff",
        marginBottom: 12,
        alignSelf: "flex-start"
      }
    }, "How should I call you?"), /*#__PURE__*/React.createElement("input", {
      value: profileNameInp,
      onChange: function onChange(e) {
        return setProfileNameInp(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && profileNameInp.trim() && setProfileStep("location");
      },
      placeholder: "Your name",
      autoFocus: true,
      style: inputStyle
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 16
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return profileNameInp.trim() && setProfileStep("location");
      },
      disabled: !profileNameInp.trim(),
      style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(135deg,#6366f1,#a855f7)")), {}, {
        opacity: profileNameInp.trim() ? 1 : .35,
        fontSize: 16,
        padding: "15px"
      })
    }, "Next \u2192"));
    if (profileStep === "location") return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, S.wrap("linear-gradient(160deg,#1e1b4b,#3730a3,#312e81)")), {}, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 32px",
        textAlign: "center"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 800,
        color: "#fff",
        marginBottom: 6,
        lineHeight: 1.4
      }
    }, "Where are you from,"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 30,
        fontWeight: 900,
        color: "#a78bfa",
        marginBottom: 10
      }
    }, profileNameInp, "?"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "rgba(196,181,253,.6)",
        marginBottom: 24,
        lineHeight: 1.6
      }
    }, "\uD83C\uDF24\uFE0F Used to personalise your daily weather greeting"), /*#__PURE__*/React.createElement("input", {
      value: profileLocInp,
      onChange: function onChange(e) {
        setProfileLocInp(e.target.value);
        setProfileLocError(null);
        setProfileLocConfirm(null);
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && profileLocInp.trim() && handleFinishProfile();
      },
      placeholder: "city, country",
      autoFocus: true,
      style: _objectSpread(_objectSpread({}, inputStyle), {}, {
        borderColor: profileLocError ? "#f87171" : profileLocConfirm ? "#4ade80" : "transparent"
      })
    }), profileLocError && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        marginBottom: 4,
        fontSize: 14,
        color: "#f87171",
        lineHeight: 1.5
      }
    }, "\u26A0\uFE0F ", profileLocError), profileLocConfirm && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        marginBottom: 4,
        fontSize: 15,
        color: "#4ade80",
        fontWeight: 600,
        lineHeight: 1.5
      }
    }, profileLocConfirm), /*#__PURE__*/React.createElement("div", {
      style: {
        height: profileLocError || profileLocConfirm ? 12 : 16
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: handleFinishProfile,
      disabled: !profileLocInp.trim() || profileLocChecking || !!profileLocConfirm,
      style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(135deg,#6366f1,#a855f7)")), {}, {
        opacity: profileLocInp.trim() && !profileLocChecking && !profileLocConfirm ? 1 : .4,
        fontSize: 16,
        padding: "15px"
      })
    }, profileLocChecking ? "Checking…" : profileLocConfirm ? "✓ Found!" : "Let's go! →"), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var name, _t6;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              // Skip location — proceed without weather greeting
              name = profileNameInp.trim();
              setProfileName(name);
              setProfileLocation("");
              _context5.p = 1;
              _context5.n = 2;
              return window.storage.set("ws_profile", JSON.stringify({
                name: name,
                city: "",
                country: ""
              }));
            case 2:
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t6 = _context5.v;
            case 4:
              setScreen("placement");
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3]]);
      })),
      style: {
        background: "rgba(255,255,255,.08)",
        border: "1.5px solid rgba(196,181,253,.25)",
        borderRadius: 12,
        color: "rgba(196,181,253,.7)",
        cursor: "pointer",
        fontSize: 14,
        fontFamily: "inherit",
        marginTop: 14,
        padding: "11px 20px",
        width: "100%"
      }
    }, "Skip for now \u2192"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setProfileStep("name");
        setProfileLocError(null);
        setProfileLocConfirm(null);
      },
      style: {
        background: "none",
        border: "none",
        color: "rgba(196,181,253,.45)",
        cursor: "pointer",
        fontSize: 13,
        fontFamily: "inherit",
        marginTop: 10,
        padding: "6px"
      }
    }, "\u2190 Back"));
  }

  // ── PLACEMENT QUIZ ────────────────────────────────────────────────────────────
  if (screen === "placement") {
    if (quizPhase === "welcome") return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, S.wrap("linear-gradient(160deg,#1e1b4b,#3730a3,#312e81)")), {}, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 32px",
        textAlign: "center"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 48,
        marginBottom: 16
      }
    }, "\uD83C\uDF93"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 800,
        color: "#fff",
        marginBottom: 32,
        lineHeight: 1.45
      }
    }, "Welcome, ", profileName, "! Let's find your English level with 8 quick questions."), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setQuizPhase("quiz");
      },
      style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(135deg,#6366f1,#a855f7)")), {}, {
        fontSize: 16,
        padding: "15px",
        marginBottom: 12
      })
    }, "Start Placement Quiz \u2192"), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _t7;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              setPlacementLevel("Beginner");
              _context6.p = 1;
              _context6.n = 2;
              return window.storage.set("ws_placement", JSON.stringify({
                level: "Beginner"
              }));
            case 2:
              _context6.n = 4;
              break;
            case 3:
              _context6.p = 3;
              _t7 = _context6.v;
            case 4:
              placementDoneRef.current = true;
              setAppReady(true);
              setScreen("home");
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 3]]);
      })),
      style: {
        background: "none",
        border: "1.5px solid rgba(196,181,253,.3)",
        borderRadius: 14,
        color: "#c4b5fd",
        cursor: "pointer",
        fontSize: 14,
        fontFamily: "inherit",
        padding: "13px",
        width: "100%",
        marginBottom: 8
      }
    }, "I'd rather start from scratch \uD83C\uDF31"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "rgba(196,181,253,.4)",
        marginTop: 4
      }
    }, "This will start you at Beginner level"));
    if (quizPhase === "quiz") {
      var q = currentQuiz[quizStep];
      var tm = TYPE_META[q.type];
      return /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, S.wrap()), {}, {
          padding: "0 20px 40px"
        })
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "28px 0 20px",
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: tm.color,
          marginBottom: 6
        }
      }, tm.emoji, " ", tm.label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "#c4b5fd"
        }
      }, "Question ", quizStep + 1, " of ", currentQuiz.length), /*#__PURE__*/React.createElement("div", {
        style: {
          height: 4,
          background: "rgba(255,255,255,.08)",
          borderRadius: 4,
          margin: "12px 0 0"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: "100%",
          width: (quizStep + 1) / currentQuiz.length * 100 + "%",
          background: tm.color,
          borderRadius: 4,
          transition: "width .4s"
        }
      }))), /*#__PURE__*/React.createElement("div", {
        style: {
          background: "rgba(255,255,255,.08)",
          borderRadius: 20,
          padding: "22px 20px",
          marginBottom: 20,
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "#c4b5fd",
          marginBottom: 8
        }
      }, q.type === "fillblank" ? "Complete the sentence:" : q.type === "reverse" ? "Which word means:" : q.type === "synonym" ? "Which word is a SYNONYM of:" : q.type === "antonym" ? "Which word is an ANTONYM of:" : "What does this word mean?"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: q.type === "fillblank" || q.type === "reverse" ? 16 : 28,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.45
        }
      }, q.type === "fillblank" ? q.sentence : q.type === "reverse" ? q.definition : q.word)), q.options.map(function (opt, i) {
        return /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: function onClick() {
            return quizPick(i);
          },
          disabled: quizSel !== null,
          style: S.opt(quizSel === null ? null : i === q.answer ? "correct" : quizSel === i ? "wrong" : null)
        }, opt);
      }));
    }
    if (quizPhase === "result") {
      var meta = LEVEL_META[quizResultLevel];
      return /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, S.wrap()), {}, {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "0 28px",
          textAlign: "center"
        })
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 56,
          marginBottom: 12
        }
      }, meta.emoji), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: meta.color,
          marginBottom: 8
        }
      }, "Your Level"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 32,
          fontWeight: 900,
          color: "#fff",
          marginBottom: 8
        }
      }, meta.label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          color: "#c4b5fd",
          lineHeight: 1.65,
          marginBottom: 32,
          maxWidth: 300
        }
      }, meta.desc), /*#__PURE__*/React.createElement("button", {
        onClick: finishPlacement,
        style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(135deg,#6366f1,#a855f7)")), {}, {
          fontSize: 16,
          padding: "15px",
          marginBottom: 12
        })
      }, "Start Learning! \uD83D\uDE80"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setQuizPhase("welcome");
          setQuizStep(0);
          setQuizAnswers([]);
          setQuizSel(null);
          setQuizResultLevel(null);
          setCurrentQuiz(generateQuiz());
        },
        style: {
          background: "none",
          border: "none",
          color: "rgba(196,181,253,.5)",
          cursor: "pointer",
          fontSize: 13,
          fontFamily: "inherit",
          padding: "8px"
        }
      }, "Retake quiz \u21BA"));
    }
  }

  // ── HOME SCREEN ───────────────────────────────────────────────────────────────
  if (screen === "home") return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, S.wrap()), {}, {
      overflowY: "auto"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 20px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 900,
      background: "linear-gradient(90deg,#a78bfa,#f472b6,#fb923c)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  }, "\u26A1 WordSpark", isPro ? " ✨" : ""), weatherGreeting ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e0e7ff",
      fontSize: 14,
      marginTop: 7,
      lineHeight: 1.55,
      padding: "0 10px"
    }
  }, weatherGreeting) : profileName ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#c4b5fd",
      fontSize: 13,
      marginTop: 5
    }
  }, "Welcome back, ", profileName, "! \uD83D\uDC4B") : /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#c4b5fd",
      fontSize: 13,
      marginTop: 4
    }
  }, "Your English journey, level by level"), isPro && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      background: "rgba(139,92,246,.2)",
      border: "1px solid rgba(139,92,246,.5)",
      borderRadius: 20,
      padding: "3px 12px",
      fontSize: 11,
      color: "#a78bfa",
      fontWeight: 700,
      marginTop: 8
    }
  }, "\u2728 Pro ", proTier === "annual" ? "Annual" : "Monthly")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px 0",
      display: "flex",
      gap: 10
    }
  }, [["🔥", streak, "Day Streak"], ["⭐", xp, "Total XP"], ["🎓", level, "Level"]].map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 3),
      ic = _ref12[0],
      v = _ref12[1],
      l = _ref12[2];
    var curWeek = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
    var usedThisWeek = freezeInfo.week === curWeek ? freezeInfo.used : 0;
    var fLimit = proTier === "annual" ? 4 : proTier === "monthly" ? 3 : 2;
    var fLeft = Math.max(0, fLimit - usedThisWeek);
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        flex: 1,
        background: "rgba(255,255,255,.08)",
        borderRadius: 18,
        padding: "14px 8px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22
      }
    }, ic), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: l === "Level" ? 11 : 20,
        fontWeight: 700,
        marginTop: 2,
        color: l === "Level" ? lvlColor : "#fff"
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#c4b5fd",
        marginTop: 2
      }
    }, l), l === "Day Streak" && highestBadge && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        marginTop: 3
      }
    }, highestBadge.emoji), l === "Day Streak" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        marginTop: 3,
        color: fLeft > 0 ? "#4ade80" : "rgba(196,181,253,.4)",
        fontWeight: 600
      }
    }, "\uD83D\uDEE1\uFE0F ", fLeft > 0 ? fLeft + " freeze" + (fLeft > 1 ? "s" : "") : "resets Mon"));
  })), xpNext && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "14px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "#c4b5fd",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", null, xp, " XP"), /*#__PURE__*/React.createElement("span", null, xpNext, " XP \u2014 next level")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "rgba(255,255,255,.08)",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: Math.min(100, xp / (xpNext || 1) * 100) + "%",
      background: "linear-gradient(90deg,#6366f1,#a855f7)",
      borderRadius: 4,
      transition: "width .8s"
    }
  }))), function () {
    var goal = 50;
    var pct = Math.min(100, Math.round(dailyXp / goal * 100));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "8px 20px 0",
        background: "rgba(255,255,255,.06)",
        borderRadius: 14,
        padding: "10px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: "rgba(255,255,255,.6)"
      }
    }, "\u26A1 Daily Goal"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: pct >= 100 ? "#fbbf24" : "rgba(255,255,255,.5)",
        fontWeight: 700
      }
    }, pct >= 100 ? "🎉 Goal reached!" : dailyXp + " / " + goal + " XP")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "rgba(255,255,255,.1)",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: pct + "%",
        background: pct >= 100 ? "linear-gradient(90deg,#f59e0b,#fbbf24)" : "linear-gradient(90deg,#6366f1,#a855f7)",
        borderRadius: 4,
        transition: "width .6s"
      }
    })));
  }(), xp === 0 && !nudgeDismissed && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "12px 20px 0",
      background: "linear-gradient(135deg,rgba(99,102,241,.2),rgba(139,92,246,.25))",
      border: "1.5px solid rgba(139,92,246,.5)",
      borderRadius: 18,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26
    }
  }, "\uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#e0e7ff",
      marginBottom: 3
    }
  }, "New here? Start with Vocab Games!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#a78bfa",
      lineHeight: 1.5
    }
  }, "Play a game to earn your first XP and unlock Review.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return go("vocab");
    },
    style: {
      background: "linear-gradient(135deg,#6366f1,#a855f7)",
      border: "none",
      borderRadius: 10,
      color: "#fff",
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 700,
      fontFamily: "inherit",
      padding: "6px 12px"
    }
  }, "Play \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var _t8;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            setNudgeDismissed(true);
            _context7.p = 1;
            _context7.n = 2;
            return window.storage.set("ws_nudge_dismissed", "1");
          case 2:
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t8 = _context7.v;
          case 4:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 3]]);
    })),
    style: {
      background: "none",
      border: "none",
      color: "rgba(196,181,253,.4)",
      cursor: "pointer",
      fontSize: 11,
      fontFamily: "inherit",
      padding: "2px"
    }
  }, "Dismiss"))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return go("word");
    },
    style: _objectSpread(_objectSpread({}, S.card(isSaturday ? "linear-gradient(135deg,#5b21b6,#8b5cf6)" : "linear-gradient(135deg,#1e3a8a,#2563eb,#3b82f6)")), {}, {
      margin: "14px 20px 0",
      display: "flex",
      alignItems: "center",
      gap: 14
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32
    }
  }, isSaturday ? "🗓️" : "📖"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1.5,
      color: isSaturday ? "#c4b5fd" : "#93c5fd",
      marginBottom: 3
    }
  }, isSaturday ? "Idiom of the Week" : "Word of the Day"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, isSaturday ? "\"".concat(getIdiomOfWeek(level).idiom, "\"") : getWotd(level).word), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.65)",
      marginTop: 2,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }
  }, isSaturday ? getIdiomOfWeek(level).meaning.slice(0, 52) + "…" : getWotd(level).definition.slice(0, 52) + "…")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      opacity: .6
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px 12px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return go("vocab");
    },
    style: _objectSpread(_objectSpread({}, S.card("linear-gradient(135deg,#6366f1,#8b5cf6)")), {}, {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }, xp === 0 && !nudgeDismissed ? {
      outline: "2px solid rgba(139,92,246,.8)",
      outlineOffset: "2px"
    } : {})
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36
    }
  }, "\uD83C\uDFAE"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Vocab Games"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .8,
      marginTop: 2
    }
  }, "Play, learn & earn XP! \uD83C\uDF1F"))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      setDictQuery("");
      setDictResult(null);
      setDictError(null);
      go("dict");
    },
    style: _objectSpread(_objectSpread({}, S.card("linear-gradient(135deg,#0e7490,#0891b2)")), {}, {
      display: "flex",
      flexDirection: "column",
      gap: 10
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36
    }
  }, "\uD83D\uDCD6"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Dictionary"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .8,
      marginTop: 2
    }
  }, "Look up any English word")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return go("speak");
    },
    style: _objectSpread(_objectSpread({}, S.card("linear-gradient(135deg,#059669,#10b981)")), {}, {
      display: "flex",
      alignItems: "center",
      gap: 16
    })
  }, /*#__PURE__*/React.createElement(EmilyFace, {
    size: 44
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "English Live! with Emily"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .85,
      marginTop: 2
    }
  }, proTier === "annual" ? "Chat with your witty English friend ✨" : "Speak and chat in real English")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return go("review");
    },
    style: _objectSpread(_objectSpread({}, S.card("linear-gradient(135deg,#92400e,#b45309,#d97706)")), {}, {
      display: "flex",
      alignItems: "center",
      gap: 16
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36
    }
  }, "\uD83D\uDCDA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Review & Strengthen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .85,
      marginTop: 2
    }
  }, isPro ? "Revisit what you've learnt · Full XP ✨" : "Revisit what you've learnt · ½ XP per activity")))), !isPro && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setPaywallSource("upgrade");
    },
    style: {
      margin: "0 20px 10px",
      background: "linear-gradient(135deg,rgba(99,102,241,.15),rgba(139,92,246,.2))",
      border: "1.5px solid rgba(139,92,246,.35)",
      borderRadius: 16,
      padding: "12px 16px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "#e0e7ff"
    }
  }, "Upgrade to Pro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#a78bfa",
      marginTop: 1
    }
  }, "Unlimited Emily \xB7 Full Review XP \xB7 More")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "#8b5cf6",
      fontSize: 18
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "0 20px 12px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: retakePlacement,
    style: {
      background: "rgba(255,255,255,.07)",
      border: "1.5px solid rgba(196,181,253,.25)",
      borderRadius: 14,
      color: "rgba(196,181,253,.75)",
      cursor: "pointer",
      fontSize: 14,
      fontFamily: "inherit",
      padding: "11px 20px",
      width: "100%"
    }
  }, "Not at the right level? Retake placement quiz \u21BA")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "0 20px 28px"
    }
  }, resetConfirm ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(239,68,68,.1)",
      border: "1px solid rgba(239,68,68,.3)",
      borderRadius: 14,
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#fca5a5",
      marginBottom: 10
    }
  }, "\u26A0\uFE0F This will erase all your progress, XP, and streak. Are you sure?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: resetAllData,
    style: {
      flex: 1,
      background: "rgba(239,68,68,.7)",
      border: "none",
      borderRadius: 10,
      color: "#fff",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 700,
      fontFamily: "inherit",
      padding: "9px"
    }
  }, "Yes, reset everything"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setResetConfirm(false);
    },
    style: {
      flex: 1,
      background: "rgba(255,255,255,.08)",
      border: "none",
      borderRadius: 10,
      color: "rgba(255,255,255,.7)",
      cursor: "pointer",
      fontSize: 13,
      fontFamily: "inherit",
      padding: "9px"
    }
  }, "Cancel"))) : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setResetConfirm(true);
    },
    style: {
      background: "none",
      border: "none",
      color: "rgba(196,181,253,.25)",
      cursor: "pointer",
      fontSize: 11,
      fontFamily: "inherit",
      padding: "4px"
    }
  }, "Reset all data")), firstXpPop && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,.6)",
      zIndex: 999,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      marginBottom: 12,
      animation: "bounce 0.6s infinite alternate"
    }
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 900,
      color: "#fbbf24",
      textAlign: "center",
      lineHeight: 1.3
    }
  }, "First XP earned!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "rgba(255,255,255,.8)",
      marginTop: 8
    }
  }, "You're on your way! Keep it up \uD83D\uDE80"), /*#__PURE__*/React.createElement("style", null, "@keyframes bounce { from { transform:translateY(0); } to { transform:translateY(-12px); } }"))));

  // ── WORD / IDIOM SCREEN ───────────────────────────────────────────────────────
  if (screen === "word") {
    if (isSaturday) {
      var id = getIdiomOfWeek(level);
      var ic = idiomContent;
      return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
        style: S.wrap("linear-gradient(160deg,#3b1f8c,#5b21b6,#7c3aed)")
      }, /*#__PURE__*/React.createElement("div", {
        style: S.hdr
      }, /*#__PURE__*/React.createElement("button", {
        style: S.back,
        onClick: function onClick() {
          return go("home");
        }
      }, "\u2190 Back")), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "0 20px 20px",
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "#c4b5fd",
          marginBottom: 10
        }
      }, "\uD83D\uDDD3\uFE0F Idiom of the Week"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 28,
          fontWeight: 900,
          margin: "0 0 8px",
          lineHeight: 1.3,
          fontStyle: "italic",
          color: "#fff"
        }
      }, "\"", id.idiom, "\""), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "inline-block",
          background: "rgba(167,139,250,.25)",
          border: "1px solid rgba(167,139,250,.4)",
          borderRadius: 20,
          padding: "4px 16px",
          fontSize: 12,
          color: "#e9d5ff",
          fontWeight: 600
        }
      }, id.level)), /*#__PURE__*/React.createElement("div", {
        style: {
          background: "rgba(255,255,255,.07)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 20,
          padding: "16px 20px",
          margin: "0 20px 10px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.2,
          color: "#a78bfa",
          marginBottom: 8
        }
      }, "\uD83D\uDCAC Meaning"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 16,
          lineHeight: 1.75,
          color: "#f0e9ff"
        }
      }, id.meaning)), idiomContentLoading ? /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: "center",
          padding: "24px 20px",
          color: "#a78bfa",
          fontSize: 14
        }
      }, "\u2728 Generating examples & tips\u2026") : ic !== null && ic !== void 0 && ic.examples ? /*#__PURE__*/React.createElement(React.Fragment, null, _toConsumableArray(ic.examples.map(function (ex, i) {
        return ["Example " + (i + 1) + " ✍️", ex, true];
      })).map(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 3),
          t = _ref15[0],
          v = _ref15[1],
          isExample = _ref15[2];
        return /*#__PURE__*/React.createElement("div", {
          key: t,
          style: {
            background: "rgba(255,255,255,.07)",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: 20,
            padding: "16px 20px",
            margin: "0 20px 10px"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.2,
            color: "#a78bfa",
            marginBottom: 8
          }
        }, t), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 16,
            lineHeight: 1.75,
            color: "#f0e9ff"
          }
        }, isExample ? /*#__PURE__*/React.createElement(React.Fragment, null, "\"", highlightTerm(v, id.idiom), "\"") : v));
      })) : null, /*#__PURE__*/React.createElement("div", {
        style: {
          margin: "6px 20px 32px",
          background: "rgba(0,0,0,.28)",
          border: "1.5px solid rgba(167,139,250,.3)",
          borderRadius: 20,
          padding: "20px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: "#e9d5ff",
          marginBottom: 6
        }
      }, "\u270F\uFE0F Practice \u2014 Write Your Own"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          color: "#c4b5fd",
          marginBottom: 16,
          lineHeight: 1.6
        }
      }, "Use ", /*#__PURE__*/React.createElement("strong", {
        style: {
          color: "#fff"
        }
      }, "\"", id.idiom, "\""), " in your own sentence to earn ", /*#__PURE__*/React.createElement("strong", {
        style: {
          color: "#fbbf24"
        }
      }, "20 XP"), "."), idiomAccepted ? /*#__PURE__*/React.createElement("div", {
        style: {
          background: "rgba(74,222,128,.12)",
          border: "1.5px solid #4ade80",
          borderRadius: 14,
          padding: "14px 16px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          color: "#4ade80",
          marginBottom: 6
        }
      }, "\u2705 +20 XP earned this week!"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          color: "#f0e9ff",
          fontStyle: "italic",
          marginBottom: 8
        }
      }, "\"", idiomInput, "\""), idiomResult && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "#86efac",
          lineHeight: 1.6
        }
      }, idiomResult.feedback)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "#a78bfa",
          marginBottom: 8
        }
      }, "Your sentence:"), /*#__PURE__*/React.createElement("textarea", {
        rows: 3,
        value: idiomInput,
        onChange: function onChange(e) {
          return setIdiomInput(e.target.value);
        },
        placeholder: "e.g. \"I was nervous about the speech, but I decided to give it a shot.\"",
        style: taS
      }), idiomResult && !idiomAccepted && /*#__PURE__*/React.createElement("div", {
        style: {
          background: "rgba(251,146,60,.15)",
          border: "1.5px solid #fb923c",
          borderRadius: 12,
          padding: "12px 15px",
          marginBottom: 10,
          fontSize: 14,
          color: "#fed7aa",
          lineHeight: 1.6
        }
      }, "\uD83D\uDCAC ", idiomResult.feedback), /*#__PURE__*/React.createElement("button", {
        onClick: checkIdiomSentence,
        disabled: !idiomInput.trim() || idiomLoading,
        style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(90deg,#7c3aed,#a855f7)")), {}, {
          opacity: !idiomInput.trim() || idiomLoading ? .45 : 1,
          fontSize: 15
        })
      }, idiomLoading ? "⏳ Checking with AI…" : "Check & Earn 20 XP →")))));
    }

    // Word of the Day
    var w = getWotd(level);
    return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: S.wrap("linear-gradient(160deg,#1e3a8a,#1d4ed8,#3b82f6)")
    }, /*#__PURE__*/React.createElement("div", {
      style: S.hdr
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        return go("home");
      }
    }, "\u2190 Back")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px 20px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "#93c5fd",
        marginBottom: 12
      }
    }, "\uD83D\uDCD6 Word of the Day"), wotdImage && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: wotdImage,
      alt: w.word,
      style: {
        width: 110,
        height: 110,
        borderRadius: 20,
        objectFit: "cover",
        border: "3px solid rgba(255,255,255,.2)",
        boxShadow: "0 8px 24px rgba(0,0,0,.3)"
      },
      onError: function onError(e) {
        e.target.style.display = "none";
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 42,
        fontWeight: 900,
        margin: "0 0 4px"
      }
    }, w.word), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#93c5fd",
        marginBottom: 6
      }
    }, w.pronunciation), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-block",
        background: "rgba(59,130,246,.25)",
        border: "1px solid rgba(59,130,246,.4)",
        borderRadius: 20,
        padding: "4px 16px",
        fontSize: 12,
        color: "#bfdbfe",
        fontWeight: 600
      }
    }, w.type, " \xB7 ", w.level)), [["Definition", w.definition, false]].concat(_toConsumableArray(w.examples.map(function (ex, i) {
      return ["Example " + (i + 1) + " ✍️", ex, true];
    }))).map(function (_ref16) {
      var _ref17 = _slicedToArray(_ref16, 3),
        t = _ref17[0],
        v = _ref17[1],
        isExample = _ref17[2];
      return /*#__PURE__*/React.createElement("div", {
        key: t,
        style: {
          background: "rgba(255,255,255,.07)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 20,
          padding: "16px 20px",
          margin: "0 20px 10px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.2,
          color: "#fcd34d",
          marginBottom: 8
        }
      }, t), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 16,
          lineHeight: 1.75,
          color: "#fff5e4"
        }
      }, isExample ? /*#__PURE__*/React.createElement(React.Fragment, null, "\"", highlightTerm(v, w.word), "\"") : v));
    }), isPro ? /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.07)",
        border: "1.5px solid rgba(251,191,36,.3)",
        borderRadius: 20,
        padding: "16px 20px",
        margin: "0 20px 10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1.2,
        color: "#fcd34d",
        marginBottom: 14
      }
    }, "\u2728 Word Chunks"), wotdChunksLoading ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#fde68a",
        fontSize: 14
      }
    }, "\u2728 Generating collocations\u2026") : wotdChunks !== null && wotdChunks !== void 0 && wotdChunks.length ? wotdChunks.map(function (_ref18) {
      var chunk = _ref18.chunk,
        example = _ref18.example;
      return /*#__PURE__*/React.createElement("div", {
        key: chunk,
        style: {
          marginBottom: 14
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          fontWeight: 700,
          color: "#fbbf24",
          marginBottom: 5
        }
      }, "\"", chunk, "\""), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          color: "#fff5e4",
          lineHeight: 1.75,
          fontStyle: "italic"
        }
      }, "\"", example, "\""));
    }) : null) : /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setPaywallSource("upgrade");
      },
      style: {
        margin: "0 20px 10px",
        background: "rgba(251,191,36,.06)",
        border: "1.5px dashed rgba(251,191,36,.3)",
        borderRadius: 20,
        padding: "16px 20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 26
      }
    }, "\u2728"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#fde68a"
      }
    }, "Word Chunks \u2014 Pro feature"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "rgba(253,230,138,.6)",
        marginTop: 3
      }
    }, "Upgrade to unlock collocations for every Word of the Day.")), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        color: "#fbbf24",
        fontSize: 18
      }
    }, "\u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "4px 20px 6px",
        textAlign: "center"
      }
    }, !wotdTranslation ? /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return translateWord(w.word, setWotdTranslation, setWotdTranslating);
      },
      disabled: wotdTranslating,
      style: {
        background: "none",
        border: "1.5px solid rgba(255,255,255,.18)",
        borderRadius: 20,
        padding: "7px 18px",
        color: "#c4b5fd",
        cursor: "pointer",
        fontSize: 13,
        fontFamily: "inherit",
        opacity: wotdTranslating ? .6 : 1
      }
    }, wotdTranslating ? "⏳ Translating…" : "🌐 Translate to my language") : /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.07)",
        border: "1px solid rgba(255,255,255,.1)",
        borderRadius: 18,
        padding: "14px 18px",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1.2,
        color: "#fcd34d",
        marginBottom: 6
      }
    }, "\uD83C\uDF10 Translation"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: "#fff5e4",
        lineHeight: 1.65
      }
    }, wotdTranslation))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "6px 20px 32px",
        background: "rgba(0,0,0,.28)",
        border: "1.5px solid rgba(59,130,246,.3)",
        borderRadius: 20,
        padding: "20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1.5,
        color: "#bfdbfe",
        marginBottom: 6
      }
    }, "\u270F\uFE0F Practice \u2014 Write Your Own"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#93c5fd",
        marginBottom: 16,
        lineHeight: 1.6
      }
    }, "Write ", isPro ? "up to 4" : "2", " sentences using ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "#fff"
      }
    }, w.word), " to earn ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "#fbbf24"
      }
    }, "15 XP"), " each", isPro && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#a78bfa"
      }
    }, " \u2014 up to 60 XP total \u2728"), "."), (isPro ? [0, 1, 2, 3] : [0, 1]).map(function (idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "#93c5fd",
          marginBottom: 6
        }
      }, "Sentence ", idx + 1, ":"), wotdAccepted[idx] ? /*#__PURE__*/React.createElement("div", {
        style: {
          background: "rgba(74,222,128,.12)",
          border: "1.5px solid #4ade80",
          borderRadius: 14,
          padding: "12px 15px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          color: "#4ade80",
          marginBottom: 4
        }
      }, "\u2705 +15 XP earned!"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          color: "#f0f9ff",
          fontStyle: "italic"
        }
      }, "\"", wotdInputs[idx], "\""), wotdResults[idx] && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "#86efac",
          marginTop: 6,
          lineHeight: 1.6
        }
      }, wotdResults[idx].feedback)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("textarea", {
        rows: 2,
        value: wotdInputs[idx],
        onChange: function onChange(e) {
          return setWotdInputs(function (p) {
            var n = _toConsumableArray(p);
            n[idx] = e.target.value;
            return n;
          });
        },
        placeholder: "Use \"".concat(w.word, "\" in a sentence\u2026"),
        style: taS
      }), wotdResults[idx] && !wotdAccepted[idx] && /*#__PURE__*/React.createElement("div", {
        style: {
          background: "rgba(251,146,60,.15)",
          border: "1.5px solid #fb923c",
          borderRadius: 12,
          padding: "10px 14px",
          marginBottom: 8,
          fontSize: 14,
          color: "#fed7aa",
          lineHeight: 1.6
        }
      }, "\uD83D\uDCAC ", wotdResults[idx].feedback), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return checkWotdSentence(idx);
        },
        disabled: !wotdInputs[idx].trim() || wotdLoading[idx],
        style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(90deg,#1d4ed8,#3b82f6)")), {}, {
          opacity: !wotdInputs[idx].trim() || wotdLoading[idx] ? .45 : 1,
          fontSize: 14
        })
      }, wotdLoading[idx] ? "⏳ Checking…" : "Check & Earn 15 XP →")));
    }))));
  }

  // ── VOCAB GAMES MENU ─────────────────────────────────────────────────────────
  if (screen === "vocab" && !game) return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
    style: S.wrap()
  }, /*#__PURE__*/React.createElement("div", {
    style: S.hdr
  }, /*#__PURE__*/React.createElement("button", {
    style: S.back,
    onClick: function onClick() {
      return go("home");
    }
  }, "\u2190 Back")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      marginBottom: 4
    }
  }, "\uD83C\uDFAE Vocab Games"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#c4b5fd",
      marginBottom: 20,
      fontSize: 14
    }
  }, "Play games, earn XP, level up your English!"), [{
    id: "scramble",
    ic: "🔤",
    title: "Word Scramble",
    desc: "Unscramble letters to find the hidden word",
    g: "linear-gradient(135deg,#4338ca,#6366f1)"
  }, {
    id: "flashcard",
    ic: "🃏",
    title: "Flashcard Quiz",
    desc: "Test your word meanings with multiple choice",
    g: "linear-gradient(135deg,#be185d,#ec4899)"
  }, {
    id: "fillblank",
    ic: "🧩",
    title: "Fill in the Blank",
    desc: "Choose the word that completes each sentence",
    g: "linear-gradient(135deg,#b45309,#f59e0b)"
  }, {
    id: "bookworm",
    ic: "📚",
    title: "Bookworm",
    desc: "Tap adjacent letters to spell words on the grid",
    g: "linear-gradient(135deg,#065f46,#10b981)"
  }, {
    id: "monster",
    ic: "👹",
    title: "Monster Gauntlet",
    desc: "Battle monsters with vocab challenges floor by floor",
    g: "linear-gradient(135deg,#991b1b,#ef4444)"
  }].map(function (g) {
    return /*#__PURE__*/React.createElement("div", {
      key: g.id,
      onClick: function onClick() {
        if (g.id === "bookworm") {
          setBwGrid(makeGrid(level));
          setBwSel([]);
          setBwScore(0);
          setBwWords([]);
          setBwDef(null);
          setBwMsg(null);
        }
        if (g.id === "monster") {
          setMgFloor(1);
          setMgHearts(3);
          setMgScore(0);
          setMgResult(null);
          setMgSel(null);
          setMgInput("");
          setMgAnim(null);
          var types = ["goblin", "zombie", "dracula", "dragon", "ghost"];
          var t = types[Math.floor(Math.random() * types.length)];
          var ch = mgGenChallenge(t);
          setMgMonster(_objectSpread(_objectSpread(_objectSpread({}, MONSTERS[t]), ch), {}, {
            monsterType: t,
            isBoss: false,
            floor: 1
          }));
          if (t === "dracula") {
            var _tm = 15;
            setMgTimer(_tm);
            mgTimerRef.current = setInterval(function () {
              _tm--;
              setMgTimer(_tm);
              if (_tm <= 0) {
                clearInterval(mgTimerRef.current);
                handleMGFail();
              }
            }, 1000);
          } else setMgTimer(null);
        }
        setGame(g.id);
      },
      style: _objectSpread(_objectSpread({}, S.card(g.g)), {}, {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 14
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 38
      }
    }, g.ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, g.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: .85,
        marginTop: 3
      }
    }, g.desc)));
  }))));

  // ── REVIEW MENU ───────────────────────────────────────────────────────────────
  if (screen === "review" && !game) return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
    style: S.wrap("linear-gradient(160deg,#431407,#7c2d12,#92400e)")
  }, /*#__PURE__*/React.createElement("div", {
    style: S.hdr
  }, /*#__PURE__*/React.createElement("button", {
    style: S.back,
    onClick: function onClick() {
      return go("home");
    }
  }, "\u2190 Back")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800
    }
  }, "\uD83D\uDCD6 Review & Strengthen"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fde68a",
      marginTop: 4,
      marginBottom: 6,
      fontSize: 14
    }
  }, "Reinforcing your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fbbf24",
      fontWeight: 700
    }
  }, level), " level vocabulary"), !hasStudied ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      marginBottom: 20
    }
  }, "\uD83D\uDCDA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: "#fff",
      marginBottom: 10
    }
  }, "Nothing here yet!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "#fde68a",
      lineHeight: 1.7,
      marginBottom: 28
    }
  }, "Play some vocab games first and your review activities will appear here."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return go("vocab");
    },
    style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(135deg,#6366f1,#a855f7)")), {}, {
      fontSize: 15
    })
  }, "Let's learn some words \u2192")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(251,191,36,.12)",
      border: "1.5px solid rgba(251,191,36,.3)",
      borderRadius: 14,
      padding: "10px 14px",
      marginBottom: 20,
      fontSize: 13,
      color: "#fde68a",
      lineHeight: 1.5
    }
  }, "\u26A1 XP is halved in review mode \u2014 but every rep makes it stick!"), [{
    id: "flashcard",
    ic: "🃏",
    title: "Flashcard Drill",
    desc: "Test your knowledge of word meanings",
    g: "linear-gradient(135deg,#7c2d12,#b91c1c)"
  }, {
    id: "fillblank",
    ic: "🧩",
    title: "Fill the Blank",
    desc: "Complete sentences with the right word",
    g: "linear-gradient(135deg,#78350f,#c2410c)"
  }, {
    id: "scramble",
    ic: "🔤",
    title: "Word Unscramble",
    desc: "Rearrange letters to recall the correct word",
    g: "linear-gradient(135deg,#713f12,#ca8a04)"
  }].map(function (a) {
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      onClick: function onClick() {
        setReviewMode(true);
        setGame(a.id);
      },
      style: _objectSpread(_objectSpread({}, S.card(a.g)), {}, {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 14
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 38
      }
    }, a.ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, a.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: .85,
        marginTop: 3
      }
    }, a.desc)));
  })))));

  // ── SCRAMBLE ─────────────────────────────────────────────────────────────────
  if (game === "scramble") {
    var words = SCRAMBLE_WORDS[level];
    var word = deckItem(words, scIdx, scDeck);
    var scTotal = scDeck.current.length || words.length;
    var hint = word.length + " letters · starts with " + word[0];
    return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: S.wrap()
    }, /*#__PURE__*/React.createElement("div", {
      style: S.hdr
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        return setGame(null);
      }
    }, reviewMode ? "← Review" : "← Games"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#c4b5fd"
      }
    }, scIdx % scTotal + 1, "/", scTotal, " \xB7 ", level)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        textAlign: "center",
        marginBottom: 4
      }
    }, "\uD83D\uDD24 Word Scramble"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        color: "#c4b5fd",
        fontSize: 13,
        marginBottom: 22
      }
    }, "Rearrange the letters \u2014 answer in 8s for a speed bonus!"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.08)",
        borderRadius: 22,
        padding: "22px 20px",
        marginBottom: 20,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: .65,
        marginBottom: 10
      }
    }, "\uD83D\uDCA1 ", hint), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 32,
        fontWeight: 900,
        letterSpacing: 6,
        color: "#fbbf24"
      }
    }, scWord)), /*#__PURE__*/React.createElement("input", {
      value: scInput,
      onChange: function onChange(e) {
        return setScInput(e.target.value.toUpperCase());
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && !scResult && checkSc();
      },
      placeholder: "Type your answer\u2026",
      disabled: !!scResult,
      style: S.inp
    }), !scResult && /*#__PURE__*/React.createElement("button", {
      onClick: checkSc,
      style: S.btn("linear-gradient(90deg,#6366f1,#a78bfa)")
    }, "Check Answer \u2713"), scResult && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: scResult === "correct" ? "rgba(74,222,128,.15)" : "rgba(248,113,113,.15)",
        border: "1.5px solid " + (scResult === "correct" ? "#4ade80" : "#f87171"),
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        marginBottom: 4
      }
    }, scResult === "correct" ? "✅ Correct! +" + (reviewMode ? 5 : 10) + " XP" : "❌ The word was: " + word), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: scResult === "correct" ? "#86efac" : "#fca5a5",
        marginTop: 4
      }
    }, scResult === "correct" ? "Well done! Keep going 🚀" : "Don't worry — you'll get it next time!")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        deckNext(words, scIdx, scDeck, setScIdx);
        setScResult(null);
      },
      style: S.btn("linear-gradient(90deg,#6366f1,#a78bfa)")
    }, "Next Word \u2192")))));
  }

  // ── FLASHCARD ────────────────────────────────────────────────────────────────
  if (game === "flashcard") {
    var cards = FLASHCARDS_DATA[level];
    var f = deckItem(cards, flIdx, flDeck);
    var flTotal = flDeck.current.length || cards.length;
    return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: S.wrap("linear-gradient(160deg,#831843,#9d174d,#be185d)")
    }, /*#__PURE__*/React.createElement("div", {
      style: S.hdr
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        setGame(null);
        setFlImage(null);
      }
    }, reviewMode ? "← Review" : "← Games"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#fbcfe8"
      }
    }, flIdx % flTotal + 1, "/", flTotal, " \xB7 ", level)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        textAlign: "center",
        marginBottom: 4
      }
    }, "\uD83C\uDCCF Flashcard Quiz"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        color: "#fbcfe8",
        fontSize: 13,
        marginBottom: 22
      }
    }, "What does this word mean? Answer in 8s for a speed bonus!"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.1)",
        borderRadius: 22,
        padding: "28px 20px",
        marginBottom: 20,
        textAlign: "center"
      }
    }, flImage && f.type === "noun" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: flImage,
      alt: f.word,
      style: {
        width: 90,
        height: 90,
        borderRadius: 16,
        objectFit: "cover",
        border: "2px solid rgba(255,255,255,.2)"
      },
      onError: function onError(e) {
        e.target.style.display = "none";
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 36,
        fontWeight: 900
      }
    }, f.word)), f.options.map(function (opt, i) {
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: function onClick() {
          return pickFl(i);
        },
        disabled: flSel !== null,
        style: S.opt(flSel === null ? null : i === f.answer ? "correct" : flSel === i ? "wrong" : null)
      }, opt);
    }), flSel !== null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        fontSize: 18,
        margin: "8px 0 12px"
      }
    }, flSel === f.answer ? "🎉 Correct! +" + (reviewMode ? 5 : 10) + " XP" : "Not quite — study this one!"), !flTranslation ? /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return translateWord(f.word, setFlTranslation, setFlTranslating);
      },
      disabled: flTranslating,
      style: {
        background: "none",
        border: "1.5px solid rgba(255,255,255,.18)",
        borderRadius: 20,
        padding: "7px 18px",
        color: "#fbcfe8",
        cursor: "pointer",
        fontSize: 13,
        fontFamily: "inherit",
        width: "100%",
        marginBottom: 12,
        opacity: flTranslating ? .6 : 1
      }
    }, flTranslating ? "⏳ Translating…" : "🌐 Translate to my language") : /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.08)",
        border: "1px solid rgba(255,255,255,.12)",
        borderRadius: 14,
        padding: "12px 16px",
        marginBottom: 12,
        fontSize: 14,
        color: "#fce7f3",
        lineHeight: 1.6
      }
    }, "\uD83C\uDF10 ", flTranslation), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        deckNext(cards, flIdx, flDeck, setFlIdx);
        setFlSel(null);
        setFlTranslation(null);
      },
      style: S.btn("linear-gradient(90deg,#ec4899,#f472b6)")
    }, "Next Card \u2192")))));
  }

  // ── FILL IN THE BLANK ────────────────────────────────────────────────────────
  if (game === "fillblank") {
    var fills = FILL_DATA[level];
    var fb = deckItem(fills, fbIdx, fbDeck);
    var fbTotal = fbDeck.current.length || fills.length;
    var _fb$sentence$split = fb.sentence.split("___"),
      _fb$sentence$split2 = _slicedToArray(_fb$sentence$split, 2),
      pre = _fb$sentence$split2[0],
      post = _fb$sentence$split2[1];
    return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: S.wrap("linear-gradient(160deg,#78350f,#92400e,#b45309)")
    }, /*#__PURE__*/React.createElement("div", {
      style: S.hdr
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        return setGame(null);
      }
    }, reviewMode ? "← Review" : "← Games"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#fde68a"
      }
    }, fbIdx % fbTotal + 1, "/", fbTotal, " \xB7 ", level)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        textAlign: "center",
        marginBottom: 4
      }
    }, "\uD83E\uDDE9 Fill in the Blank"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        color: "#fde68a",
        fontSize: 13,
        marginBottom: 22
      }
    }, "Choose the word that best completes the sentence."), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.1)",
        borderRadius: 22,
        padding: "22px 20px",
        marginBottom: 20,
        fontSize: 18,
        lineHeight: 1.8,
        textAlign: "center"
      }
    }, pre, /*#__PURE__*/React.createElement("span", {
      style: {
        background: "rgba(251,191,36,.3)",
        borderRadius: 8,
        padding: "2px 14px",
        fontWeight: 700,
        color: "#fbbf24",
        letterSpacing: 2
      }
    }, "___"), post), fb.options.map(function (opt, i) {
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: function onClick() {
          return pickFb(i);
        },
        disabled: fbSel !== null,
        style: S.opt(fbSel === null ? null : i === fb.answer ? "correct" : fbSel === i ? "wrong" : null)
      }, opt);
    }), fbSel !== null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        fontSize: 18,
        margin: "8px 0 10px"
      }
    }, fbSel === fb.answer ? "✅ Correct! +" + (reviewMode ? 5 : 10) + " XP" : "Keep practicing — you've got this!"), fbSel === fb.answer && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(74,222,128,.1)",
        border: "1px solid rgba(74,222,128,.3)",
        borderRadius: 14,
        padding: "12px 16px",
        marginBottom: 12,
        fontSize: 14,
        color: "#d1fae5",
        lineHeight: 1.6
      }
    }, "\uD83D\uDCDD ", fb.explanation), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        deckNext(fills, fbIdx, fbDeck, setFbIdx);
        setFbSel(null);
      },
      style: S.btn("linear-gradient(90deg,#d97706,#f59e0b)")
    }, "Next Question \u2192")))));
  }

  // ── BOOKWORM ─────────────────────────────────────────────────────────────────
  if (game === "bookworm") {
    var CELL = 52;
    var currentWord = bwSel.map(function (i) {
      return bwGrid[i].letter;
    }).join("");
    return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: S.wrap("linear-gradient(160deg,#065f46,#047857,#059669)")
    }, /*#__PURE__*/React.createElement("div", {
      style: S.hdr
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        if (mgTimerRef.current) clearInterval(mgTimerRef.current);
        setGame(null);
      }
    }, "\u2190 Games"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#6ee7b7"
      }
    }, "Score: ", bwScore), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#6ee7b7"
      }
    }, "Words: ", bwWords.length))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        textAlign: "center",
        marginBottom: 4
      }
    }, "\uD83D\uDCDA Bookworm"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        color: "#6ee7b7",
        fontSize: 13,
        marginBottom: 12
      }
    }, "Tap adjacent letters to spell words. Min ", MIN_WORD[level], " letters."), bwMsg && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        background: "rgba(0,0,0,.3)",
        borderRadius: 14,
        padding: "8px 16px",
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 700,
        color: bwMsg.includes("XP") ? "#fbbf24" : "#f87171"
      }
    }, bwMsg), bwDef && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        fontSize: 13,
        color: "#a7f3d0",
        marginBottom: 8,
        padding: "0 20px"
      }
    }, "\uD83D\uDCD6 ", bwDef), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(".concat(COLS, ",").concat(CELL, "px)"),
        gap: 4,
        margin: "0 auto 14px",
        width: "".concat(COLS * CELL + (COLS - 1) * 4, "px")
      }
    }, bwGrid.map(function (cell, idx) {
      var sel = bwSel.includes(idx);
      var selPos = bwSel.indexOf(idx);
      var isLast = selPos === bwSel.length - 1;
      var canSel = bwSel.length === 0 || isAdj(bwSel[bwSel.length - 1], idx) && !bwSel.includes(idx);
      return /*#__PURE__*/React.createElement("div", {
        key: cell.id,
        onClick: function onClick() {
          if (sel) {
            if (isLast) setBwSel(function (s) {
              return s.slice(0, -1);
            });
            return;
          }
          if (!canSel) return;
          setBwSel(function (s) {
            return [].concat(_toConsumableArray(s), [idx]);
          });
        },
        style: {
          width: CELL,
          height: CELL,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          fontWeight: 800,
          cursor: "pointer",
          userSelect: "none",
          background: cell.special === "burn" ? "linear-gradient(135deg,#991b1b,#ef4444)" : sel ? "linear-gradient(135deg,#1e40af,#3b82f6)" : cell.special === "gold" ? "linear-gradient(135deg,#78350f,#f59e0b)" : cell.special === "green" ? "linear-gradient(135deg,#065f46,#10b981)" : "rgba(255,255,255,.1)",
          border: sel ? "2px solid #60a5fa" : cell.special === "gold" ? "2px solid #fbbf24" : cell.special === "green" ? "2px solid #34d399" : cell.special === "burn" ? "2px solid #ef4444" : "1.5px solid rgba(255,255,255,.15)",
          transform: sel ? "scale(1.08)" : "scale(1)",
          transition: "all .15s",
          color: cell.special === "burn" ? "#fca5a5" : sel ? "#fff" : cell.special === "gold" ? "#fbbf24" : cell.special === "green" ? "#6ee7b7" : "#fff"
        }
      }, cell.letter, selPos >= 0 && !isLast && /*#__PURE__*/React.createElement("span", {
        style: {
          position: "absolute",
          fontSize: 8,
          top: 4,
          right: 5,
          color: "rgba(255,255,255,.6)"
        }
      }, selPos + 1));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: 4,
        color: "#fbbf24",
        minHeight: 32
      }
    }, currentWord || "—"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setBwSel([]);
      },
      style: _objectSpread(_objectSpread({}, S.btn("rgba(255,255,255,.1)")), {}, {
        flex: 1,
        fontSize: 14
      })
    }, "Clear"), /*#__PURE__*/React.createElement("button", {
      onClick: submitBwWord,
      disabled: currentWord.length < MIN_WORD[level] || bwDefLoad,
      style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(90deg,#059669,#10b981)")), {}, {
        flex: 2,
        fontSize: 14,
        opacity: currentWord.length < MIN_WORD[level] || bwDefLoad ? .5 : 1
      })
    }, bwDefLoad ? "Checking…" : "Submit Word ✓")), bwWords.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6ee7b7",
        marginBottom: 6
      }
    }, "Found words:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6
      }
    }, bwWords.map(function (w) {
      return /*#__PURE__*/React.createElement("span", {
        key: w,
        style: {
          background: "rgba(16,185,129,.2)",
          border: "1px solid #10b981",
          borderRadius: 20,
          padding: "3px 10px",
          fontSize: 12,
          color: "#a7f3d0",
          fontWeight: 600
        }
      }, w.toUpperCase());
    }))))));
  }

  // ── MONSTER GAUNTLET ─────────────────────────────────────────────────────────
  if (game === "monster") {
    if (!mgMonster) return null;
    var m = MONSTERS[mgMonster.monsterType];
    var isFlashcard = mgMonster.type === "flashcard";
    var isFillblank = mgMonster.type === "fillblank";
    var isScramble = mgMonster.type === "scramble";
    var isSpell = mgMonster.type === "spell";
    var isAntonym = mgMonster.type === "antonym";
    return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: S.wrap()
    }, /*#__PURE__*/React.createElement("style", null, "@keyframes mgshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}"), /*#__PURE__*/React.createElement("div", {
      style: S.hdr
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        if (mgTimerRef.current) clearInterval(mgTimerRef.current);
        setGame(null);
      }
    }, "\u2190 Games"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, "❤️".repeat(mgHearts)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#fbbf24"
      }
    }, "Floor ", mgFloor), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#a78bfa"
      }
    }, "+", mgScore, " XP"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px"
      }
    }, mgMonster.isBoss && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        background: "linear-gradient(90deg,#7f1d1d,#991b1b)",
        borderRadius: 12,
        padding: "6px",
        marginBottom: 10,
        fontSize: 12,
        fontWeight: 700,
        color: "#fca5a5",
        letterSpacing: 1
      }
    }, "\uD83D\uDC51 BOSS FLOOR!"), /*#__PURE__*/React.createElement(MonsterSVG, {
      type: mgMonster.monsterType,
      shake: mgAnim === "shake",
      boss: mgMonster.isBoss
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        color: m.color
      }
    }, m.name), mgTimer !== null && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 900,
        color: mgTimer <= 5 ? "#f87171" : "#fbbf24",
        marginTop: 4
      }
    }, "\u23F1 ", mgTimer, "s")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: m.bg,
        border: "1.5px solid " + m.color + "44",
        borderRadius: 16,
        padding: "14px 18px",
        marginBottom: 14,
        textAlign: "center",
        fontSize: 14,
        fontStyle: "italic",
        color: m.color
      }
    }, "\"", m.prompt, "\""), mgResult && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 14,
        padding: "14px",
        borderRadius: 16,
        background: mgResult === "win" ? "rgba(74,222,128,.15)" : mgResult === "dead" ? "rgba(0,0,0,.4)" : "rgba(248,113,113,.15)",
        border: "1.5px solid " + (mgResult === "win" ? "#4ade80" : mgResult === "dead" ? "#374151" : "#f87171")
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 8
      }
    }, mgResult === "win" ? m.win : mgResult === "dead" ? "💀 Game Over! Final score: " + mgScore + " XP" : m.lose), mgResult === "dead" && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMgFloor(1);
        setMgHearts(3);
        setMgScore(0);
        setMgResult(null);
        setMgSel(null);
        setMgInput("");
        var types = ["goblin", "zombie", "dracula", "dragon", "ghost"];
        var t = types[Math.floor(Math.random() * types.length)];
        var ch = mgGenChallenge(t);
        setMgMonster(_objectSpread(_objectSpread(_objectSpread({}, MONSTERS[t]), ch), {}, {
          monsterType: t,
          isBoss: false,
          floor: 1
        }));
        if (t === "dracula") {
          var _tm2 = 15;
          setMgTimer(_tm2);
          mgTimerRef.current = setInterval(function () {
            _tm2--;
            setMgTimer(_tm2);
            if (_tm2 <= 0) {
              clearInterval(mgTimerRef.current);
              handleMGFail();
            }
          }, 1000);
        } else setMgTimer(null);
      },
      style: S.btn("linear-gradient(90deg,#6366f1,#a78bfa)")
    }, "Play Again \u2192")), !mgResult && /*#__PURE__*/React.createElement(React.Fragment, null, (isFlashcard || isAntonym) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.1)",
        borderRadius: 16,
        padding: "16px",
        marginBottom: 14,
        textAlign: "center",
        fontSize: 22,
        fontWeight: 800
      }
    }, mgMonster.word), mgMonster.options.map(function (opt, i) {
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: function onClick() {
          if (mgSel !== null) return;
          setMgSel(i);
          if (isAntonym ? opt === mgMonster.correct : i === mgMonster.answer) handleMGCorrect();else handleMGWrong();
        },
        disabled: mgSel !== null,
        style: S.opt(mgSel === null ? null : isAntonym ? opt === mgMonster.correct ? "correct" : mgSel === i ? "wrong" : null : i === mgMonster.answer ? "correct" : mgSel === i ? "wrong" : null)
      }, opt);
    })), isFillblank && function () {
      var _mgMonster$sentence$s = mgMonster.sentence.split("___"),
        _mgMonster$sentence$s2 = _slicedToArray(_mgMonster$sentence$s, 2),
        pre2 = _mgMonster$sentence$s2[0],
        post2 = _mgMonster$sentence$s2[1];
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          background: "rgba(255,255,255,.1)",
          borderRadius: 16,
          padding: "16px",
          marginBottom: 14,
          fontSize: 16,
          lineHeight: 1.8,
          textAlign: "center"
        }
      }, pre2, /*#__PURE__*/React.createElement("span", {
        style: {
          background: "rgba(251,191,36,.3)",
          borderRadius: 8,
          padding: "2px 12px",
          fontWeight: 700,
          color: "#fbbf24"
        }
      }, "___"), post2), mgMonster.options.map(function (opt, i) {
        return /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: function onClick() {
            if (mgSel !== null) return;
            setMgSel(i);
            if (i === mgMonster.answer) handleMGCorrect();else handleMGWrong();
          },
          disabled: mgSel !== null,
          style: S.opt(mgSel === null ? null : i === mgMonster.answer ? "correct" : mgSel === i ? "wrong" : null)
        }, opt);
      }));
    }(), (isScramble || isSpell) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.1)",
        borderRadius: 16,
        padding: "16px",
        marginBottom: 14,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#c4b5fd",
        marginBottom: 6
      }
    }, isScramble ? "Unscramble:" : "Type the word for:"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: isScramble ? 28 : 16,
        fontWeight: 900,
        letterSpacing: isScramble ? 6 : 0,
        color: "#fbbf24",
        lineHeight: 1.5
      }
    }, isScramble ? mgMonster.scrambled : mgMonster.definition), isSpell && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#c4b5fd",
        marginTop: 6
      }
    }, "Hint: ", mgMonster.hint)), /*#__PURE__*/React.createElement("input", {
      value: mgInput,
      onChange: function onChange(e) {
        return setMgInput(e.target.value.toUpperCase());
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && mgInput.trim() && function () {
          if (mgInput.toUpperCase() === mgMonster.word) handleMGCorrect();else handleMGWrong();
        }();
      },
      placeholder: "Type your answer\u2026",
      style: S.inp
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (mgInput.toUpperCase() === mgMonster.word) handleMGCorrect();else handleMGWrong();
      },
      style: S.btn("linear-gradient(90deg,#6366f1,#a78bfa)")
    }, "Submit \u2192")), mgHearts < 5 && xp >= 30 && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setXp(function (p) {
          var next = Math.max(0, p - 30);
          window.storage.set("ws_xp", String(next)).catch(function () {});
          return next;
        });
        setMgHearts(function (h) {
          return Math.min(h + 1, 5);
        });
      },
      style: _objectSpread(_objectSpread({}, S.btn("rgba(255,255,255,.08)")), {}, {
        border: "1px solid rgba(255,255,255,.2)",
        marginTop: 10,
        fontSize: 14
      })
    }, "\u2764\uFE0F Buy 1 Heart \u2014 30 XP")))));
  }

  // ── DICTIONARY ────────────────────────────────────────────────────────────────
  if (screen === "dict") {
    var _entries$0$phonetics, _entries$0$phonetics2;
    var entries = dictResult || [];
    // Flatten all meanings across entries
    var allMeanings = entries.flatMap(function (e) {
      return e.meanings || [];
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, S.wrap("linear-gradient(160deg,#0e4f7e,#0e7490,#06b6d4)")), {}, {
        overflowY: "auto"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: S.hdr
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        return go("home");
      }
    }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontWeight: 700,
        fontSize: 16
      }
    }, "\uD83D\uDCD6 Dictionary")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("input", {
      ref: dictInputRef,
      value: dictQuery,
      onChange: function onChange(e) {
        return setDictQuery(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && lookupWord();
      },
      placeholder: "Search any English word\u2026",
      style: {
        flex: 1,
        padding: "13px 16px",
        borderRadius: 16,
        border: "2px solid rgba(255,255,255,.25)",
        background: "rgba(255,255,255,.1)",
        color: "#fff",
        fontSize: 16,
        outline: "none",
        fontFamily: "inherit"
      },
      autoFocus: true
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return lookupWord();
      },
      disabled: !dictQuery.trim() || dictLoading,
      style: _objectSpread(_objectSpread({}, S.btn("linear-gradient(135deg,#0284c7,#38bdf8)")), {}, {
        width: 56,
        padding: 0,
        borderRadius: 16,
        fontSize: 22,
        opacity: !dictQuery.trim() || dictLoading ? .4 : 1
      })
    }, dictLoading ? "⏳" : "🔍")), dictError && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        background: "rgba(248,113,113,.15)",
        border: "1.5px solid #f87171",
        borderRadius: 16,
        padding: "14px 16px",
        fontSize: 14,
        color: "#fca5a5",
        lineHeight: 1.6
      }
    }, dictError), entries.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.08)",
        borderRadius: 20,
        padding: "18px 20px",
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 30,
        fontWeight: 900
      }
    }, entries[0].word), ((_entries$0$phonetics = entries[0].phonetics) === null || _entries$0$phonetics === void 0 ? void 0 : _entries$0$phonetics.find(function (p) {
      return p.text;
    })) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#7dd3fc",
        marginTop: 4
      }
    }, entries[0].phonetics.find(function (p) {
      return p.text;
    }).text)), ((_entries$0$phonetics2 = entries[0].phonetics) === null || _entries$0$phonetics2 === void 0 ? void 0 : _entries$0$phonetics2.find(function (p) {
      return p.audio;
    })) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var a = new Audio(entries[0].phonetics.find(function (p) {
          return p.audio;
        }).audio);
        a.play();
      },
      style: {
        background: "rgba(255,255,255,.12)",
        border: "none",
        borderRadius: 50,
        width: 44,
        height: 44,
        cursor: "pointer",
        fontSize: 20
      }
    }, "\uD83D\uDD0A")), allMeanings.map(function (meaning, mi) {
      var _meaning$synonyms;
      return /*#__PURE__*/React.createElement("div", {
        key: mi,
        style: {
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 20,
          padding: "16px 18px",
          marginBottom: 10
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "inline-block",
          background: "rgba(56,189,248,.2)",
          border: "1px solid rgba(56,189,248,.4)",
          borderRadius: 20,
          padding: "3px 12px",
          fontSize: 12,
          color: "#7dd3fc",
          fontWeight: 700,
          marginBottom: 12
        }
      }, meaning.partOfSpeech), meaning.definitions.slice(0, 3).map(function (def, di) {
        return /*#__PURE__*/React.createElement("div", {
          key: di,
          style: {
            marginBottom: 10
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 15,
            color: "#f0f9ff",
            lineHeight: 1.65
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: "#7dd3fc",
            fontWeight: 700,
            marginRight: 8
          }
        }, di + 1, "."), def.definition), def.example && /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: "rgba(240,249,255,.6)",
            fontStyle: "italic",
            marginTop: 4,
            paddingLeft: 20
          }
        }, "\"", def.example, "\""));
      }), ((_meaning$synonyms = meaning.synonyms) === null || _meaning$synonyms === void 0 ? void 0 : _meaning$synonyms.length) > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 8,
          paddingTop: 8,
          borderTop: "1px solid rgba(255,255,255,.08)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          color: "#7dd3fc",
          fontWeight: 700
        }
      }, "Synonyms: "), meaning.synonyms.slice(0, 6).map(function (s, si) {
        return /*#__PURE__*/React.createElement("span", {
          key: si,
          onClick: function onClick() {
            return lookupWord(s);
          },
          style: {
            fontSize: 12,
            color: "#bae6fd",
            cursor: "pointer",
            marginRight: 8,
            textDecoration: "underline"
          }
        }, s);
      })));
    }), isPro ? /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleDictSave(entries[0].word);
      },
      style: _objectSpread(_objectSpread({}, S.btn(dictSaved.includes(entries[0].word) ? "rgba(255,255,255,.12)" : "linear-gradient(135deg,#0284c7,#0ea5e9)")), {}, {
        marginTop: 4,
        fontSize: 14
      })
    }, dictSaved.includes(entries[0].word) ? "✅ Saved to my list" : "💾 Save to my word list") : /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setPaywallSource("upgrade");
      },
      style: {
        marginTop: 4,
        background: "rgba(56,189,248,.08)",
        border: "1.5px dashed rgba(56,189,248,.3)",
        borderRadius: 16,
        padding: "13px 16px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\u2728"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#7dd3fc"
      }
    }, "Upgrade to Pro to save words to your personal list"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        color: "#38bdf8"
      }
    }, "\u2192"))), isPro && dictSaved.length > 0 && !dictResult && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#7dd3fc",
        textTransform: "uppercase",
        letterSpacing: 1.2,
        marginBottom: 10
      }
    }, "My Saved Words"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }
    }, dictSaved.map(function (w) {
      return /*#__PURE__*/React.createElement("div", {
        key: w,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(56,189,248,.3)",
          borderRadius: 20,
          padding: "6px 12px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return lookupWord(w);
        },
        style: {
          fontSize: 14,
          color: "#bae6fd",
          cursor: "pointer"
        }
      }, w), /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return toggleDictSave(w);
        },
        style: {
          fontSize: 12,
          color: "rgba(255,255,255,.35)",
          cursor: "pointer"
        }
      }, "\u2715"));
    }))), !dictResult && !dictError && !dictLoading && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "40px 20px",
        color: "rgba(255,255,255,.35)",
        fontSize: 14,
        lineHeight: 1.8
      }
    }, "Type any English word above and tap \uD83D\uDD0D", "\n", "to see its definition, pronunciation, and examples."))));
  }

  // ── EMILY / SPEAK ─────────────────────────────────────────────────────────────
  if (screen === "speak") {
    if (!topic) return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: S.wrap("linear-gradient(160deg,#065f46,#047857,#059669)")
    }, /*#__PURE__*/React.createElement("div", {
      style: S.hdr
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        return go("home");
      }
    }, "\u2190 Back")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px 40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(EmilyFace, {
      size: 72
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 800,
        marginTop: 12
      }
    }, "English Live! with Emily"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#6ee7b7",
        marginTop: 6,
        lineHeight: 1.6
      }
    }, proTier === "annual" ? "Chat with Emily Plus — your witty English friend 💬" : "Chat with Emily, your AI English tutor 📚"), !isPro && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6ee7b7",
        marginTop: 4
      }
    }, FREE_EMILY_LIMIT - emilyDailyCount, " messages left today"), isPro && proTier === "annual" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#f472b6",
        marginTop: 4,
        fontWeight: 700
      }
    }, "\u2728 Emily Plus"), isPro && proTier !== "annual" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#a78bfa",
        marginTop: 4,
        fontWeight: 700
      }
    }, "\u2728 Pro")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#6ee7b7",
        marginBottom: 12,
        textTransform: "uppercase",
        letterSpacing: 1.5
      }
    }, "Choose a topic:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }
    }, TOPICS.map(function (t) {
      return /*#__PURE__*/React.createElement("button", {
        key: t,
        onClick: function onClick() {
          return pickTopic(t);
        },
        style: {
          background: "rgba(255,255,255,.1)",
          border: "1.5px solid rgba(255,255,255,.18)",
          borderRadius: 20,
          padding: "9px 16px",
          color: "#fff",
          cursor: "pointer",
          fontSize: 13,
          fontFamily: "inherit"
        }
      }, t);
    })))));
    return /*#__PURE__*/React.createElement(React.Fragment, null, overlays, /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, S.wrap("linear-gradient(160deg,#065f46,#047857,#059669)")), {}, {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, S.hdr), {}, {
        flexShrink: 0
      })
    }, /*#__PURE__*/React.createElement("button", {
      style: S.back,
      onClick: function onClick() {
        var _window$speechSynthes;
        (_window$speechSynthes = window.speechSynthesis) === null || _window$speechSynthes === void 0 || _window$speechSynthes.cancel();
        setTopic(null);
        setMsgs([]);
        setChatIn("");
      }
    }, "\u2190 Topics"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15
      }
    }, "\uD83D\uDCAC ", topic), !isPro && /*#__PURE__*/React.createElement("span", {
      style: {
        color: emilyDailyCount >= FREE_EMILY_LIMIT - 2 ? "#f87171" : "#6ee7b7",
        fontSize: 12
      }
    }, " \xB7 ", FREE_EMILY_LIMIT - emilyDailyCount, " msg", FREE_EMILY_LIMIT - emilyDailyCount !== 1 ? "s" : "", " left today"), isPro && proTier === "annual" && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#f472b6",
        fontSize: 12
      }
    }, " \xB7 \u2728 Emily Plus"), isPro && proTier !== "annual" && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#a78bfa",
        fontSize: 12
      }
    }, " \xB7 \u2728 Pro")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setTtsOn(function (p) {
          return !p;
        });
      },
      style: {
        background: "none",
        border: "none",
        fontSize: 20,
        cursor: "pointer",
        opacity: ttsOn ? 1 : .4
      },
      title: "Toggle voice"
    }, "\uD83D\uDD0A")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "10px 16px"
      }
    }, msgs.map(function (m, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          justifyContent: m.role === "user" ? "flex-end" : "flex-start",
          marginBottom: 10,
          alignItems: "flex-end",
          gap: 8
        }
      }, m.role === "assistant" && /*#__PURE__*/React.createElement(EmilyFace, {
        size: 32
      }), /*#__PURE__*/React.createElement("div", {
        style: S.bubble(m.role === "user")
      }, m.content));
    }), chatLoad && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(EmilyFace, {
      size: 32
    }), /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, S.bubble(false)), {}, {
        color: "#a7f3d0",
        fontStyle: "italic"
      })
    }, "Emily is typing\u2026"))), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        padding: "10px 16px 20px",
        display: "flex",
        gap: 8,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      rows: 2,
      value: chatIn,
      onChange: function onChange(e) {
        return setChatIn(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendChat();
        }
      },
      placeholder: "Type your message\u2026",
      style: {
        flex: 1,
        padding: "12px 14px",
        borderRadius: 16,
        border: "2px solid rgba(255,255,255,.2)",
        background: "rgba(255,255,255,.08)",
        color: "#fff",
        fontSize: 14,
        outline: "none",
        resize: "none",
        fontFamily: "inherit"
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return sendChat();
      },
      disabled: !chatIn.trim() || chatLoad,
      style: {
        background: "linear-gradient(135deg,#059669,#10b981)",
        border: "none",
        borderRadius: 14,
        padding: "13px 18px",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 18,
        opacity: !chatIn.trim() || chatLoad ? .5 : 1
      }
    }, "\u2191"))));
  }
  return null;
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
