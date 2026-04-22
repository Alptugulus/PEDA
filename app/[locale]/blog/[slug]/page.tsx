import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { blogPosts } from "@/lib/data/site-data";
import { Card } from "@/components/ui/card";
import { BlogCard } from "@/components/sections/blog-card";

type SupportedLocale = "tr" | "en" | "de";

type GameSection = {
  title: string;
  body: string;
  bullets: { label: string; text: string }[];
};

type GameLearningContent = {
  intro1: string;
  intro2: string;
  sections: [GameSection, GameSection, GameSection, GameSection];
  tableTitle: string;
  tableHeaders: [string, string, string];
  tableRows: { feature: string; traditional: string; gameBased: string }[];
  summaryTitle: string;
  summaryBody: string;
  quote: string;
  summaryEnd: string;
};

type EmotionSection = {
  title: string;
  body: string;
  bullets: { label: string; text: string }[];
};

type EmotionContent = {
  intro1: string;
  intro2: string;
  sections: [EmotionSection, EmotionSection, EmotionSection, EmotionSection, EmotionSection];
  quote: string;
};

type TeenSection = {
  title: string;
  body: string;
  bullets: { label: string; text: string }[];
};

type TeenContent = {
  intro1: string;
  intro2: string;
  sections: [TeenSection, TeenSection, TeenSection, TeenSection];
  tableTitle: string;
  tableHeaders: [string, string, string];
  tableRows: { factor: string; avoid: string; target: string }[];
  conclusionTitle: string;
  conclusionBody: string;
  quote: string;
};

type LanguageSection = {
  title: string;
  body: string;
  bullets: { label: string; text: string }[];
};

type LanguageContent = {
  intro1: string;
  intro2: string;
  sections: [LanguageSection, LanguageSection, LanguageSection];
  tableTitle: string;
  tableHeaders: [string, string, string];
  tableRows: { feature: string; standard: string; workshops: string }[];
  processTitle: string;
  processSteps: [string, string, string];
  conclusionTitle: string;
  conclusionBody: string;
  quote: string;
};

const gameLearningByLocale: Record<SupportedLocale, GameLearningContent> = {
  tr: {
    intro1:
      "Eğitim dünyasında uzun süre \"oyun\" ve \"öğrenme\" iki ayrı kutup olarak görüldü: Oyun eğlence içindi, öğrenme ise ciddi bir işti. Ancak modern pedagoji ve nörobilim, bu iki kavramın aslında birbirini tamamlayan güçlü bir bütün olduğunu kanıtladı.",
    intro2:
      "Peki, oyun oynamak neden sadece zaman geçirmek değil, aynı zamanda en etkili öğrenme yöntemlerinden biridir? İşte oyunla öğrenmenin bu kadar güçlü olmasının temel nedenleri:",
    sections: [
      {
        title: "1. Dopamin Etkisi ve Motivasyon",
        body: "Oyunlar, beynimizdeki ödül mekanizmasını tetikler. Bir seviyeyi geçmek, rozet kazanmak veya zorlu bir bulmacayı çözmek beyinde dopamin salgılanmasına yardımcı olur.",
        bullets: [
          { label: "Süreklilik", text: "Dopamin, bireyin aktiviteye devam etme isteğini artırır." },
          { label: "Pozitif pekiştirme", text: "Öğrenme süreci sıkıcı bir görevden, heyecan verici bir serüvene dönüşür." }
        ]
      },
      {
        title: "2. Güvenli Bir Hata Yapma Alanı",
        body: "Geleneksel eğitim sistemlerinde hata yapmak çoğu zaman başarısızlık korkusuyla eşleşir. Oyunlarda ise hata yapmak, sürecin doğal bir parçasıdır.",
        bullets: [
          { label: "Deneme-yanılma", text: "Oyuncu, bir sonraki denemede neyi farklı yapacağını öğrenir." },
          { label: "Stres yönetimi", text: "Başarısızlık korkusu azaldığında beyin yeni bilgileri almaya daha açık hale gelir." }
        ]
      },
      {
        title: "3. Aktif Katılım ve Akış Hali",
        body: "Okumak veya dinlemek pasif eylemlerdir. Oyun oynamak ise aktif katılım gerektirir.",
        bullets: [
          { label: "Akış (Flow) teorisi", text: "Oyunlar, zorluk seviyesini kullanıcının becerisine göre dengeleyerek derin odaklanmayı tetikler." }
        ]
      },
      {
        title: "4. Karmaşık Becerilerin Gelişimi",
        body: "Oyunlar yalnızca bilgi ezberletmez; yaşamda ihtiyaç duyulan becerileri de güçlendirir:",
        bullets: [
          { label: "Eleştirel düşünme", text: "Strateji kurma ve problem çözme." },
          { label: "İş birliği", text: "Çok oyunculu senaryolarda ekip çalışması ve iletişim." },
          { label: "Karar verme", text: "Hızlı değişen durumlarda risk analizi yapma." }
        ]
      }
    ],
    tableTitle: "Geleneksel Öğrenme vs. Oyunla Öğrenme",
    tableHeaders: ["Özellik", "Geleneksel Öğrenme", "Oyunla Öğrenme"],
    tableRows: [
      { feature: "Bilgi Akışı", traditional: "Pasif (Dinleme/Okuma)", gameBased: "Aktif (Uygulama/Deneyimleme)" },
      { feature: "Hata Algısı", traditional: "Cezalandırıcı / Korkutucu", gameBased: "Eğitici / Teşvik Edici" },
      { feature: "Geri Bildirim", traditional: "Gecikmeli (Sınav sonuçları)", gameBased: "Anlık (Skorlar/Geri bildirimler)" },
      { feature: "Odak", traditional: "Ezber ve Müfredat", gameBased: "Merak ve Keşif" }
    ],
    summaryTitle: "Özetle",
    summaryBody: "Oyunla öğrenme, insanın doğasındaki merak ve rekabet duygularını akademik hedeflerle birleştirir. Bilgiyi yalnızca zihne değil, deneyim yoluyla kalıcı hafızaya işler.",
    quote: "\"Çocuklar oyun oynarken aslında hayatın provasını yaparlar. Yetişkinler için ise oyun, yaratıcılığın ve esnek düşünmenin en kısa yoludur.\"",
    summaryEnd: "Öğrenme sürecine küçük bir oyunlaştırma öğesi eklemek bile, verimliliği ve kalıcılığı tahmin ettiğinizden çok daha fazla artırabilir."
  },
  en: {
    intro1:
      "For a long time, the world of education treated \"play\" and \"learning\" as two separate poles: play was for fun, while learning was serious work. Yet modern pedagogy and neuroscience have shown that these two concepts actually form a powerful whole.",
    intro2:
      "So why is playing not just passing time, but also one of the most effective ways to learn? Here are the key reasons why play-based learning is so powerful:",
    sections: [
      {
        title: "1. Dopamine Effect and Motivation",
        body: "Games activate the brain's reward system. Passing a level, earning a badge, or solving a difficult puzzle helps trigger dopamine release.",
        bullets: [
          { label: "Continuity", text: "Dopamine increases the desire to keep going with the activity." },
          { label: "Positive reinforcement", text: "The learning process transforms from a boring task into an exciting journey." }
        ]
      },
      {
        title: "2. A Safe Space for Making Mistakes",
        body: "In traditional education systems, making mistakes is often tied to fear of failure. In games, however, mistakes are a natural part of the process.",
        bullets: [
          { label: "Trial and error", text: "The learner discovers what to do differently in the next attempt." },
          { label: "Stress management", text: "When fear of failure decreases, the brain becomes more open to new information." }
        ]
      },
      {
        title: "3. Active Participation and Flow",
        body: "Reading or listening are passive actions. Playing, by contrast, requires active participation.",
        bullets: [
          { label: "Flow theory", text: "By balancing challenge with skill level, games can trigger deep focus." }
        ]
      },
      {
        title: "4. Development of Complex Skills",
        body: "Games do not only make people memorize information; they also strengthen real-life skills:",
        bullets: [
          { label: "Critical thinking", text: "Strategy building and problem solving." },
          { label: "Collaboration", text: "Teamwork and communication in multiplayer scenarios." },
          { label: "Decision-making", text: "Risk analysis in rapidly changing situations." }
        ]
      }
    ],
    tableTitle: "Traditional Learning vs. Play-Based Learning",
    tableHeaders: ["Feature", "Traditional Learning", "Play-Based Learning"],
    tableRows: [
      { feature: "Information Flow", traditional: "Passive (Listening/Reading)", gameBased: "Active (Practice/Experience)" },
      { feature: "Perception of Mistakes", traditional: "Punitive / Intimidating", gameBased: "Educational / Encouraging" },
      { feature: "Feedback", traditional: "Delayed (Exam results)", gameBased: "Instant (Scores/feedback)" },
      { feature: "Focus", traditional: "Memorization and curriculum", gameBased: "Curiosity and exploration" }
    ],
    summaryTitle: "In Summary",
    summaryBody: "Play-based learning combines the natural human drives of curiosity and challenge with academic goals. It processes knowledge not only in the mind, but into long-term memory through experience.",
    quote:
      "\"When children play, they are actually rehearsing life. For adults, play is one of the shortest paths to creativity and flexible thinking.\"",
    summaryEnd: "Even adding a small element of gamification to learning can improve efficiency and retention far more than expected."
  },
  de: {
    intro1:
      "Lange Zeit wurden \"Spiel\" und \"Lernen\" in der Bildungswelt als zwei getrennte Pole gesehen: Spiel war Unterhaltung, Lernen war ernste Arbeit. Moderne Pädagogik und Neurowissenschaft zeigen jedoch, dass beide zusammen ein starkes Ganzes bilden.",
    intro2:
      "Warum ist Spielen also nicht nur Zeitvertreib, sondern zugleich eine der wirksamsten Lernmethoden? Hier sind die wichtigsten Gründe, warum spielbasiertes Lernen so kraftvoll ist:",
    sections: [
      {
        title: "1. Dopamin-Effekt und Motivation",
        body: "Spiele aktivieren das Belohnungssystem im Gehirn. Ein Level schaffen, ein Abzeichen gewinnen oder ein schwieriges Rätsel lösen fördert die Ausschüttung von Dopamin.",
        bullets: [
          { label: "Kontinuität", text: "Dopamin erhöht den Wunsch, mit der Aktivität weiterzumachen." },
          { label: "Positive Verstärkung", text: "Der Lernprozess wird von einer langweiligen Aufgabe zu einer spannenden Reise." }
        ]
      },
      {
        title: "2. Ein Sicherer Raum für Fehler",
        body: "In traditionellen Bildungssystemen sind Fehler oft mit Angst vor Misserfolg verbunden. In Spielen sind Fehler hingegen ein natürlicher Teil des Prozesses.",
        bullets: [
          { label: "Versuch und Irrtum", text: "Lernende erkennen im nächsten Versuch, was sie anders machen können." },
          { label: "Stressregulation", text: "Wenn die Angst vor Fehlern sinkt, wird das Gehirn aufnahmefähiger für neue Informationen." }
        ]
      },
      {
        title: "3. Aktive Beteiligung und Flow-Zustand",
        body: "Lesen oder Zuhören sind passive Handlungen. Spielen erfordert dagegen aktive Beteiligung.",
        bullets: [
          { label: "Flow-Theorie", text: "Spiele lösen durch die Balance von Schwierigkeit und Fähigkeit tiefe Konzentration aus." }
        ]
      },
      {
        title: "4. Entwicklung Komplexer Fähigkeiten",
        body: "Spiele fördern nicht nur das Behalten von Wissen, sondern auch zentrale Kompetenzen für den Alltag:",
        bullets: [
          { label: "Kritisches Denken", text: "Strategieentwicklung und Problemlösung." },
          { label: "Zusammenarbeit", text: "Teamarbeit und Kommunikation in Mehrspieler-Szenarien." },
          { label: "Entscheidungsfindung", text: "Risikoanalyse in dynamischen Situationen." }
        ]
      }
    ],
    tableTitle: "Traditionelles Lernen vs. Spielbasiertes Lernen",
    tableHeaders: ["Merkmal", "Traditionelles Lernen", "Spielbasiertes Lernen"],
    tableRows: [
      { feature: "Informationsfluss", traditional: "Passiv (Zuhören/Lesen)", gameBased: "Aktiv (Anwenden/Erleben)" },
      { feature: "Fehlerwahrnehmung", traditional: "Bestrafend / Einschüchternd", gameBased: "Lehrreich / Ermutigend" },
      { feature: "Rückmeldung", traditional: "Verzögert (Prüfungsergebnisse)", gameBased: "Sofort (Punkte/Feedback)" },
      { feature: "Fokus", traditional: "Auswendiglernen und Lehrplan", gameBased: "Neugier und Entdeckung" }
    ],
    summaryTitle: "Zusammengefasst",
    summaryBody:
      "Spielbasiertes Lernen verbindet die natürliche menschliche Neugier und den Wettbewerbsgeist mit akademischen Zielen. Wissen wird nicht nur kognitiv verarbeitet, sondern durch Erfahrung nachhaltig im Gedächtnis verankert.",
    quote:
      "\"Wenn Kinder spielen, proben sie das Leben. Für Erwachsene ist Spiel einer der kürzesten Wege zu Kreativität und flexiblem Denken.\"",
    summaryEnd:
      "Schon ein kleines Element von Gamification im Lernprozess kann Effizienz und Langzeitwirkung deutlich stärker erhöhen als erwartet."
  }
};

const emotionRegulationByLocale: Record<SupportedLocale, EmotionContent> = {
  tr: {
    intro1:
      "Modern yaşamın hızı ve günlük sorumluluklar, bazen duygusal olarak dengemizi kaybetmemize neden olabilir. Ev ortamı hem dinlendiğimiz hem de stresle başa çıkmaya çalıştığımız bir alan.",
    intro2:
      "Duygularınızı bir düşman olarak değil, size mesaj getiren elçiler olarak görmek; evde duygusal dayanıklılığı artırmanın en etkili yollarından biridir.",
    sections: [
      {
        title: "1. Dur ve Duyguyu İsimlendir",
        body: "Yoğun bir duygu dalgası geldiğinde, tepki vermeden önce kısa bir duraklama yapmak dengeyi korumanıza yardımcı olur.",
        bullets: [
          { label: "Fark et", text: "\"Şu an ne hissediyorum?\" sorusunu kendinize sorun." },
          { label: "Etiketle", text: "\"Şu an çok kaygılıyım\" gibi bir ifade, duygunun yoğunluğunu azaltmaya yardımcı olur." }
        ]
      },
      {
        title: "2. Bedensel Taramaya Geçin",
        body: "Duygular zihinde olduğu kadar bedende de hissedilir. Kaygı karında, öfke omuzlarda gerginlik yaratabilir.",
        bullets: [
          { label: "Odaklanın", text: "Gözlerinizi kapatıp dikkatinizi bedeninize yönlendirin." },
          { label: "Serbest bırakın", text: "Çene, omuz ve boyun kaslarını bilinçli şekilde gevşetin." }
        ]
      },
      {
        title: "3. Nefesin Gücünü Kullanın",
        body: "Nefes, sinir sistemine doğrudan etki edebileceğiniz en güçlü araçlardan biridir.",
        bullets: [
          { label: "4-7-8 tekniği", text: "4 saniye nefes alın, 7 saniye tutun, 8 saniyede yavaşça verin." },
          { label: "Neden önemli", text: "Uzun nefes verme, vücudun sakinleşme sistemini aktive eder." }
        ]
      },
      {
        title: "4. Çevresel Uyarımı Değiştirin",
        body: "Bazen bulunduğunuz ortam, duygusal yoğunluğu artırır. Küçük bir çevresel değişiklik bile regülasyonu destekler.",
        bullets: [
          { label: "Mekan değişikliği", text: "Oda değiştirin, balkona çıkın veya yüzünüzü soğuk suyla yıkayın." },
          { label: "Duyusal değişim", text: "Sakin bir müzik veya hoş bir koku ile odağı kriz anından uzaklaştırın." }
        ]
      },
      {
        title: "5. Duyguyu Misafir Edin ve Serbest Bırakın",
        body: "Duygular geçicidir; onları bastırmadan fark etmek ve akışına bırakmak daha sağlıklı bir yaklaşım sunar.",
        bullets: [
          { label: "Gözlemci olun", text: "Duygunun gelip geçmesine izin verin, onu yargılamayın." },
          { label: "Yazıya dökün", text: "Hisleri kağıda aktarmak zihinsel yükü hafifletir." }
        ]
      }
    ],
    quote:
      "Unutmayın: Duygu düzenleme, duyguları yok etmek değil, onlarla birlikte dengede kalabilme becerisidir. Bu adımları her uyguladığınızda duygusal kaslarınız biraz daha güçlenir."
  },
  en: {
    intro1:
      "The pace of modern life and daily responsibilities can sometimes make us lose emotional balance. Home is where we both rest and try to cope with stress.",
    intro2:
      "Seeing your emotions not as enemies but as messengers can be one of the most effective ways to build emotional resilience at home.",
    sections: [
      {
        title: "1. Pause and Name the Emotion",
        body: "When an intense emotional wave comes up, a short pause before reacting helps you stay balanced.",
        bullets: [
          { label: "Notice", text: "Ask yourself: \"What am I feeling right now?\"" },
          { label: "Label", text: "A statement like \"I feel very anxious right now\" helps reduce emotional intensity." }
        ]
      },
      {
        title: "2. Shift to Body Scanning",
        body: "Emotions are felt in the body as much as in the mind. Anxiety can be felt in the stomach, anger as tension in the shoulders.",
        bullets: [
          { label: "Focus", text: "Close your eyes and direct your attention to your body." },
          { label: "Release", text: "Consciously relax your jaw, shoulders, and neck muscles." }
        ]
      },
      {
        title: "3. Use the Power of Breath",
        body: "Breathing is one of the strongest tools you can use to directly influence your nervous system.",
        bullets: [
          { label: "4-7-8 technique", text: "Inhale for 4 seconds, hold for 7 seconds, exhale slowly for 8 seconds." },
          { label: "Why it matters", text: "Long exhalation activates the body's calming system." }
        ]
      },
      {
        title: "4. Change Environmental Stimuli",
        body: "Sometimes your environment increases emotional intensity. Even a small environmental change supports regulation.",
        bullets: [
          { label: "Change place", text: "Switch rooms, step onto the balcony, or wash your face with cold water." },
          { label: "Sensory shift", text: "Use calming music or a pleasant scent to redirect focus away from crisis mode." }
        ]
      },
      {
        title: "5. Host the Emotion and Let It Pass",
        body: "Emotions are temporary. Noticing them without suppression and allowing them to pass is a healthier approach.",
        bullets: [
          { label: "Be an observer", text: "Let the feeling come and go without judging it." },
          { label: "Write it down", text: "Putting feelings on paper reduces mental load." }
        ]
      }
    ],
    quote:
      "Remember: emotional regulation is not about eliminating emotions, but about staying balanced with them. Every time you practice these steps, your emotional muscles become stronger."
  },
  de: {
    intro1:
      "Das Tempo des modernen Lebens und die täglichen Verpflichtungen können dazu führen, dass wir emotional aus dem Gleichgewicht geraten. Das Zuhause ist sowohl ein Ort der Ruhe als auch der Stressbewältigung.",
    intro2:
      "Emotionen nicht als Feinde, sondern als Boten zu sehen, ist einer der wirksamsten Wege, emotionale Widerstandskraft im Alltag zu stärken.",
    sections: [
      {
        title: "1. Anhalten und Emotion Benennen",
        body: "Wenn eine starke Gefühlswelle aufkommt, hilft eine kurze Pause vor der Reaktion, im Gleichgewicht zu bleiben.",
        bullets: [
          { label: "Wahrnehmen", text: "Fragen Sie sich: \"Was fühle ich gerade?\"" },
          { label: "Benennen", text: "Eine Aussage wie \"Ich bin gerade sehr angespannt\" kann die Intensität des Gefühls reduzieren." }
        ]
      },
      {
        title: "2. Körperwahrnehmung Aktivieren",
        body: "Emotionen werden nicht nur im Kopf, sondern auch im Körper gespürt. Angst kann im Bauch, Wut als Spannung in den Schultern auftreten.",
        bullets: [
          { label: "Fokussieren", text: "Schließen Sie die Augen und richten Sie die Aufmerksamkeit auf Ihren Körper." },
          { label: "Lösen", text: "Entspannen Sie bewusst Kiefer-, Schulter- und Nackenmuskulatur." }
        ]
      },
      {
        title: "3. Die Kraft des Atems Nutzen",
        body: "Der Atem ist eines der stärksten Werkzeuge, um direkt auf das Nervensystem einzuwirken.",
        bullets: [
          { label: "4-7-8-Methode", text: "4 Sekunden einatmen, 7 Sekunden halten, 8 Sekunden langsam ausatmen." },
          { label: "Warum wichtig", text: "Langes Ausatmen aktiviert das körpereigene Beruhigungssystem." }
        ]
      },
      {
        title: "4. Umgebungsreize Verändern",
        body: "Manchmal verstärkt die Umgebung die emotionale Intensität. Schon kleine Veränderungen unterstützen die Regulation.",
        bullets: [
          { label: "Ort wechseln", text: "Wechseln Sie den Raum, gehen Sie auf den Balkon oder waschen Sie das Gesicht mit kaltem Wasser." },
          { label: "Sensorischer Wechsel", text: "Beruhigende Musik oder ein angenehmer Duft helfen, den Fokus vom Krisenmoment zu lösen." }
        ]
      },
      {
        title: "5. Emotion Willkommen Heißen und Loslassen",
        body: "Emotionen sind vorübergehend. Sie wahrzunehmen, ohne sie zu unterdrücken, und sie ziehen zu lassen, ist ein gesünderer Umgang.",
        bullets: [
          { label: "Beobachtend bleiben", text: "Lassen Sie das Gefühl kommen und gehen, ohne es zu bewerten." },
          { label: "Aufschreiben", text: "Gefühle schriftlich festzuhalten entlastet mental." }
        ]
      }
    ],
    quote:
      "Denken Sie daran: Emotionsregulation bedeutet nicht, Gefühle zu beseitigen, sondern mit ihnen im Gleichgewicht zu bleiben. Mit jeder Anwendung dieser Schritte wird Ihre emotionale Stärke größer."
  }
};

const teenCoachingByLocale: Record<SupportedLocale, TeenContent> = {
  tr: {
    intro1:
      "Ergenlik dönemi, bireyin kendi kimliğini inşa ettiği, bağımsızlık arayışını güçlendirdiği ve aynı anda rehberliğe ihtiyaç duyduğu yoğun bir süreçtir. Ergen koçluğu, bu dönemde gencin potansiyelini keşfetmesi için güçlü bir yol haritası sunar.",
    intro2: "Sürecin başarısı, koçun kurduğu hassas dengeye bağlıdır: Ebeveynin beklentileri ile gencin ihtiyaçları arasındaki denge.",
    sections: [
      {
        title: "1. Güven ve Gizlilik Sınırlarını Netleştirmek",
        body: "Bir ergen için güven duygusu her şeyin önündedir. Paylaşımların anında ebeveyne aktarılacağı algısı, süreci daha başlamadan zayıflatır.",
        bullets: [
          { label: "Şeffaflık", text: "Koç, gizlilik sınırlarını süreç başında hem ebeveyne hem gence açıkça anlatmalıdır." },
          { label: "Kritik istisna", text: "Hayati risk veya yasal zorunluluk dışında, gencin rızası olmadan bilgi paylaşımı yapılmamalıdır." }
        ]
      },
      {
        title: "2. Ebeveynin Beklentisi ve Gencin İhtiyacı Arasındaki Denge",
        body: "Ebeveynler çoğu zaman koça belirli davranış sorunlarıyla gelir. Ancak koçluk, genci düzeltmeye yönelik bir tamir alanı değil, genci güçlendiren bir gelişim sürecidir.",
        bullets: [
          { label: "Gencin gündemi", text: "Seanslar, gencin o anki gerçek ihtiyacını merkeze almalıdır." },
          { label: "Orta yol", text: "Koç, ebeveynin uzun vadeli hedefleri ile gencin kısa vadeli motivasyonu arasında köprü kurmalıdır." }
        ]
      },
      {
        title: "3. Rehber Olmak, Otorite Olmamak",
        body: "Ergenler zaten okulda ve evde otoriteyle yoğun şekilde karşılaşır. Koçun rolü, bu hiyerarşiyi çoğaltmak değil, güvenli bir düşünme alanı açmaktır.",
        bullets: [
          { label: "Yol arkadaşlığı", text: "Koç, emir veren değil, gencin kendi cevaplarını bulmasına eşlik eden bir rehberdir." },
          { label: "Soru sorma yaklaşımı", text: "Açık uçlu sorular, farkındalığı ve sorumluluk duygusunu artırır." }
        ]
      },
      {
        title: "4. Beklenti Yönetimi ve Düzenli Geri Bildirim",
        body: "Ebeveynleri süreçten tamamen uzak tutmak da sürdürülebilir değildir. Ebeveyn, doğru şekilde dahil olduğunda gelişimin güçlü destekçisi olur.",
        bullets: [
          { label: "Üçlü değerlendirme", text: "Belirli aralıklarla yapılan ortak görüşmeler, ortak hedefi canlı tutar." },
          { label: "Gelişim odaklı raporlama", text: "Yalnızca sonuç değil, gelişen beceriler de görünür kılınmalıdır." }
        ]
      }
    ],
    tableTitle: "Koçluk Sürecinde Denge Matrisi",
    tableHeaders: ["Unsur", "Kaçınılması Gereken", "Hedeflenen Denge"],
    tableRows: [
      { factor: "İletişim", avoid: "Genci ebeveyne şikayet etmek", target: "Gencin kendini ifade etmesine köprü olmak" },
      { factor: "Rol", avoid: "İkinci ebeveyn veya gardiyan", target: "Tarafsız ve profesyonel yol arkadaşı" },
      { factor: "Odak", avoid: "Sadece akademik başarı ve notlar", target: "Bütünsel gelişim: duygusal zeka ve akademik ilerleme" }
    ],
    conclusionTitle: "Sonuç: Sağlıklı Sınırlar, Güçlü Gelecek",
    conclusionBody:
      "Ergen koçluğunda denge kurmak, ebeveynin haklı kaygıları ile gencin bireyselleşme çabası arasında dikkatli bir yürüyüş gerektirir. Koç bu iki dünya arasında etkili bir tercüman olduğunda, genç yalnız başarılı değil, aynı zamanda mutlu ve farkındalığı yüksek bir birey olarak güçlenir.",
    quote: "Koçluk, gencin elinden tutup onu bir yere götürmek değil; gencin kendi ışığını yakmasına alan açmaktır."
  },
  en: {
    intro1:
      "Adolescence is an intense period in which individuals build identity, seek independence, and still need guidance at the same time. Teen coaching offers a strong roadmap for discovering a young person's potential during this stage.",
    intro2: "The success of the process depends on a delicate balance: parent expectations and the teenager's needs.",
    sections: [
      {
        title: "1. Clarifying Trust and Confidentiality Boundaries",
        body: "For a teenager, trust comes first. If they assume everything will be immediately reported to parents, the process weakens before it even starts.",
        bullets: [
          { label: "Transparency", text: "The coach should clearly explain confidentiality boundaries to both parents and the teen at the start." },
          { label: "Critical exception", text: "Except for vital risk or legal obligation, no information should be shared without the teen's consent." }
        ]
      },
      {
        title: "2. Balancing Parent Expectations and Teen Needs",
        body: "Parents often seek coaching for specific behavioral concerns. But coaching is not a repair service; it is a growth process that strengthens the teen.",
        bullets: [
          { label: "Teen agenda", text: "Sessions should center the teen's real, current needs." },
          { label: "Middle ground", text: "The coach should build a bridge between parents' long-term goals and the teen's short-term motivation." }
        ]
      },
      {
        title: "3. Being a Guide, Not an Authority",
        body: "Teens already face strong authority at school and home. The coach's role is not to add hierarchy, but to create a safe space for thinking.",
        bullets: [
          { label: "Companionship", text: "A coach is not someone who commands, but someone who supports the teen in finding their own answers." },
          { label: "Questioning approach", text: "Open-ended questions increase awareness and responsibility." }
        ]
      },
      {
        title: "4. Expectation Management and Regular Feedback",
        body: "Keeping parents completely out of the process is not sustainable either. When included appropriately, parents become strong supporters of development.",
        bullets: [
          { label: "Triad reviews", text: "Joint meetings at regular intervals keep shared goals alive." },
          { label: "Growth-oriented reporting", text: "Not only outcomes, but also developing skills should be made visible." }
        ]
      }
    ],
    tableTitle: "Balance Matrix in the Coaching Process",
    tableHeaders: ["Factor", "To Avoid", "Target Balance"],
    tableRows: [
      { factor: "Communication", avoid: "Complaining about the teen to parents", target: "Building a bridge for self-expression" },
      { factor: "Role", avoid: "Acting like a second parent or guardian", target: "Neutral and professional guide" },
      { factor: "Focus", avoid: "Only grades and academic performance", target: "Holistic growth: emotional intelligence and academic progress" }
    ],
    conclusionTitle: "Conclusion: Healthy Boundaries, Strong Future",
    conclusionBody:
      "Building balance in teen coaching requires a careful walk between parents' valid concerns and the teen's individuation efforts. When the coach acts as an effective translator between these worlds, the teen grows not only as a successful learner but also as a happier and more self-aware person.",
    quote: "Coaching is not taking a teen by the hand and dragging them somewhere; it is opening space for them to ignite their own light."
  },
  de: {
    intro1:
      "Die Jugendphase ist eine intensive Zeit, in der Menschen ihre Identität aufbauen, mehr Unabhängigkeit suchen und gleichzeitig Begleitung brauchen. Jugendcoaching bietet in dieser Phase eine starke Orientierung, um Potenziale sichtbar zu machen.",
    intro2: "Der Erfolg des Prozesses hängt von einer sensiblen Balance ab: den Erwartungen der Eltern und den Bedürfnissen des Jugendlichen.",
    sections: [
      {
        title: "1. Vertrauen und Grenzen der Vertraulichkeit Klären",
        body: "Für Jugendliche steht Vertrauen an erster Stelle. Wenn sie glauben, dass alles sofort an Eltern weitergegeben wird, wird der Prozess schon zu Beginn geschwächt.",
        bullets: [
          { label: "Transparenz", text: "Die Grenzen der Vertraulichkeit sollten zu Beginn Eltern und Jugendlichen klar erklärt werden." },
          { label: "Kritische Ausnahme", text: "Außer bei akuter Gefahr oder rechtlicher Verpflichtung sollten Informationen nicht ohne Zustimmung weitergegeben werden." }
        ]
      },
      {
        title: "2. Balance zwischen Eltern-Erwartung und Jugend-Bedarf",
        body: "Eltern kommen häufig mit konkreten Verhaltenssorgen ins Coaching. Coaching ist jedoch kein Reparaturraum, sondern ein Entwicklungsprozess, der Jugendliche stärkt.",
        bullets: [
          { label: "Agenda des Jugendlichen", text: "Sitzungen sollten sich an den aktuellen realen Bedürfnissen des Jugendlichen orientieren." },
          { label: "Mittelweg", text: "Der Coach sollte eine Brücke zwischen langfristigen Elternzielen und kurzfristiger Motivation des Jugendlichen bauen." }
        ]
      },
      {
        title: "3. Begleiten statt Autorität Ausüben",
        body: "Jugendliche begegnen bereits in Schule und Zuhause viel Autorität. Die Rolle des Coachs ist es nicht, Hierarchie zu verstärken, sondern einen sicheren Denkraum zu schaffen.",
        bullets: [
          { label: "Wegbegleitung", text: "Ein Coach gibt keine Befehle, sondern unterstützt Jugendliche dabei, eigene Antworten zu finden." },
          { label: "Fragender Ansatz", text: "Offene Fragen fördern Selbstwahrnehmung und Verantwortungsgefühl." }
        ]
      },
      {
        title: "4. Erwartungsmanagement und Regelmäßiges Feedback",
        body: "Eltern vollständig aus dem Prozess herauszuhalten ist ebenfalls nicht nachhaltig. Bei passender Einbindung werden sie zu starken Entwicklungsbegleitern.",
        bullets: [
          { label: "Dreier-Gespräche", text: "Gemeinsame Gespräche in festen Abständen halten das gemeinsame Ziel lebendig." },
          { label: "Entwicklungsorientierte Rückmeldung", text: "Nicht nur Ergebnisse, sondern auch wachsende Kompetenzen sollten sichtbar gemacht werden." }
        ]
      }
    ],
    tableTitle: "Balance-Matrix im Coaching-Prozess",
    tableHeaders: ["Aspekt", "Zu Vermeiden", "Angestrebte Balance"],
    tableRows: [
      { factor: "Kommunikation", avoid: "Jugendliche bei Eltern zu beklagen", target: "Brücke für Selbstäußerung schaffen" },
      { factor: "Rolle", avoid: "Zweite Eltern- oder Kontrollrolle", target: "Neutrale und professionelle Begleitung" },
      { factor: "Fokus", avoid: "Nur Noten und schulische Leistung", target: "Ganzheitliche Entwicklung: emotionale Intelligenz und Lernfortschritt" }
    ],
    conclusionTitle: "Fazit: Gesunde Grenzen, Starke Zukunft",
    conclusionBody:
      "Balance im Jugendcoaching zu schaffen erfordert einen achtsamen Weg zwischen berechtigten Elternsorgen und dem Individuationsprozess Jugendlicher. Wenn der Coach zwischen diesen beiden Welten wirksam vermittelt, stärkt sich der Jugendliche nicht nur in Leistung, sondern auch in Wohlbefinden und Selbstbewusstsein.",
    quote: "Coaching bedeutet nicht, Jugendliche an der Hand irgendwohin zu führen, sondern Raum zu öffnen, damit sie ihr eigenes Licht entzünden."
  }
};

const languageWorkshopsByLocale: Record<SupportedLocale, LanguageContent> = {
  tr: {
    intro1:
      "Geleneksel dil kurslarındaki uzun gramer tablolarını ve ezber listelerini bir kenara bırakmanın zamanı geldi. Dil, kağıt üzerinde değil yaşamın içinde öğrenilir.",
    intro2:
      "İngilizce küresel iletişimin anahtarıdır, Almanca ise Avrupa ekonomisinde güçlü bir kapı açar. Atölye modeli, bu iki dili daha doğal ve daha hızlı öğrenmek için güçlü bir yöntem sunar.",
    sections: [
      {
        title: "1. Konuşamıyorum Bariyerini Yıkmak",
        body: "Birçok kişi dili anladığını ama konuşamadığını söyler. Atölye yaklaşımı bu bariyeri doğrudan hedef alır.",
        bullets: [
          { label: "Simülasyonlar", text: "Kafede siparişten iş toplantısında sunuma kadar gerçek yaşam senaryoları uygulanır." },
          { label: "Hata yapma özgürlüğü", text: "Yanlışlar, yargılanan bir hata değil öğrenmeyi hızlandıran bir geri bildirim fırsatıdır." }
        ]
      },
      {
        title: "2. Almanca: Korkulu Rüya Değil, Mantıklı Bir Sistem",
        body: "Almanca çoğu zaman zor bir dil olarak görülür. Doğru metotla bu algı kısa sürede değişebilir.",
        bullets: [
          { label: "Sistematik yaklaşım", text: "Dilin yapısı oyunlar ve mantık temelli etkinliklerle anlaşılır hale gelir." },
          { label: "Kültürel bağlam", text: "Kelimeler yalnızca ezberlenmez, günlük yaşam ve kültürel pratik içinde anlam kazanır." }
        ]
      },
      {
        title: "3. İngilizce: Küresel Vatandaşlığa Geçiş",
        body: "İngilizce artık yalnızca yabancı dil değil, doğrudan bir iletişim ve kariyer becerisidir.",
        bullets: [
          { label: "Aktif dinamikler", text: "Podcast analizleri, güncel içerik tartışmaları ve grup çalışmalarıyla dil canlı tutulur." },
          { label: "Mesleki odak", text: "Genel İngilizcenin yanında profesyonel ortamda gerekli ifade kalıpları da çalışılır." }
        ]
      }
    ],
    tableTitle: "Neden Bizim Atölyelerimiz?",
    tableHeaders: ["Özellik", "Standart Kurslar", "Dil Atölyelerimiz"],
    tableRows: [
      { feature: "Metot", standard: "Kitap ve teori odaklı", workshops: "Uygulama ve deneyim odaklı" },
      { feature: "Etkileşim", standard: "Öğretmenden öğrenciye", workshops: "Herkesten herkese grup dinamiği" },
      { feature: "Motivasyon", standard: "Sınav geçme kaygısı", workshops: "Kendini ifade etme tutkusu" },
      { feature: "Materyal", standard: "Standart müfredat", workshops: "Güncel medya, oyunlar ve rol yapma" }
    ],
    processTitle: "Atölye Süreci Nasıl İşler?",
    processSteps: [
      "Seviye belirleme yerine ihtiyaç analizi yapılır ve dilin nerede kullanılacağı merkeze alınır.",
      "Tematik oturumlarla seyahat, kariyer, sanat ve teknoloji gibi farklı başlıklarda ilerlenir.",
      "Kalıcı geri bildirim modeliyle hatalar anlık düzeltme ve alternatif ifadelerle geliştirilir."
    ],
    conclusionTitle: "Sonuç: Dili Yaşayın",
    conclusionBody:
      "Yeni bir dil öğrenmek, yeni bir dünya görüşü kazanmak demektir. İngilizce ile dünyayla iletişim kurabilir, Almanca ile kariyer yollarını güçlendirebilirsiniz.",
    quote: "Bir dil, bir insan; iki dil, iki insan. Bir dil aynı zamanda binlerce yeni fırsat demektir."
  },
  en: {
    intro1:
      "It is time to move beyond long grammar charts and memorization lists from traditional language courses. Language is learned not on paper, but in real life.",
    intro2:
      "English is the key to global communication, while German opens a strong door to the European economy. The workshop model offers a powerful way to learn both languages more naturally and faster.",
    sections: [
      {
        title: "1. Breaking the \"I Can't Speak\" Barrier",
        body: "Many people say they understand a language but cannot speak it. The workshop approach directly targets this barrier.",
        bullets: [
          { label: "Simulations", text: "Real-life scenarios are practiced, from ordering in a cafe to presenting in business meetings." },
          { label: "Freedom to make mistakes", text: "Mistakes are not judged as failures; they become feedback opportunities that accelerate learning." }
        ]
      },
      {
        title: "2. German: Not a Nightmare, but a Logical System",
        body: "German is often seen as difficult. With the right method, this perception can change quickly.",
        bullets: [
          { label: "Systematic approach", text: "Language structure becomes clear through games and logic-based activities." },
          { label: "Cultural context", text: "Words are not only memorized; they gain meaning through daily life and cultural practices." }
        ]
      },
      {
        title: "3. English: A Transition to Global Citizenship",
        body: "English is no longer just a foreign language; it is a direct communication and career skill.",
        bullets: [
          { label: "Active dynamics", text: "Language stays alive through podcast analysis, current-topic discussions, and group work." },
          { label: "Professional focus", text: "Along with general English, essential professional expressions are also practiced." }
        ]
      }
    ],
    tableTitle: "Why Our Workshops?",
    tableHeaders: ["Feature", "Standard Courses", "Our Language Workshops"],
    tableRows: [
      { feature: "Method", standard: "Book and theory focused", workshops: "Practice and experience focused" },
      { feature: "Interaction", standard: "Teacher to student", workshops: "Group dynamic: everyone to everyone" },
      { feature: "Motivation", standard: "Exam-passing anxiety", workshops: "Passion for self-expression" },
      { feature: "Materials", standard: "Standard curriculum", workshops: "Current media, games, and role-play" }
    ],
    processTitle: "How Does the Workshop Process Work?",
    processSteps: [
      "Instead of only level placement, needs analysis is conducted and language use context is centered.",
      "Progress is made through thematic sessions such as travel, career, art, and technology.",
      "With continuous feedback, mistakes are improved through instant correction and alternative expressions."
    ],
    conclusionTitle: "Result: Live the Language",
    conclusionBody:
      "Learning a new language means gaining a new worldview. With English, you can communicate globally; with German, you can strengthen your career paths.",
    quote: "One language, one person; two languages, two people. A language also means thousands of new opportunities."
  },
  de: {
    intro1:
      "Es ist Zeit, lange Grammatiktabellen und Auswendiglernlisten aus klassischen Sprachkursen hinter sich zu lassen. Sprache wird nicht auf dem Papier, sondern im Leben gelernt.",
    intro2:
      "Englisch ist der Schlüssel zur globalen Kommunikation, Deutsch öffnet starke Türen in die europäische Wirtschaft. Das Workshop-Modell bietet einen wirksamen Weg, beide Sprachen natürlicher und schneller zu lernen.",
    sections: [
      {
        title: "1. Die \"Ich-kann-nicht-sprechen\"-Barriere Überwinden",
        body: "Viele Menschen sagen, sie verstehen die Sprache, können aber nicht sprechen. Der Workshop-Ansatz setzt genau hier an.",
        bullets: [
          { label: "Simulationen", text: "Alltagsszenarien werden geübt, vom Bestellen im Cafe bis zur Präsentation im Meeting." },
          { label: "Freiheit, Fehler zu machen", text: "Fehler werden nicht verurteilt, sondern als Feedbackchance genutzt, die Lernen beschleunigt." }
        ]
      },
      {
        title: "2. Deutsch: Kein Schreckgespenst, sondern ein Logisches System",
        body: "Deutsch gilt oft als schwer. Mit der richtigen Methode kann sich dieses Bild schnell ändern.",
        bullets: [
          { label: "Systematischer Ansatz", text: "Sprachstrukturen werden durch Spiele und logikbasierte Übungen verständlich." },
          { label: "Kultureller Kontext", text: "Wörter werden nicht nur gelernt, sondern gewinnen Bedeutung im Alltag und in kulturellen Zusammenhängen." }
        ]
      },
      {
        title: "3. Englisch: Der Übergang zur Globalen Teilhabe",
        body: "Englisch ist längst nicht nur Fremdsprache, sondern eine direkte Kommunikations- und Karrierekompetenz.",
        bullets: [
          { label: "Aktive Dynamik", text: "Die Sprache bleibt lebendig durch Podcast-Analysen, aktuelle Diskussionen und Gruppenarbeit." },
          { label: "Beruflicher Fokus", text: "Neben allgemeinem Englisch werden auch Ausdrucksformen für berufliche Situationen trainiert." }
        ]
      }
    ],
    tableTitle: "Warum Unsere Workshops?",
    tableHeaders: ["Merkmal", "Standardkurse", "Unsere Sprachworkshops"],
    tableRows: [
      { feature: "Methode", standard: "Buch- und theorieorientiert", workshops: "Praxis- und erfahrungsorientiert" },
      { feature: "Interaktion", standard: "Von Lehrkraft zu Lernenden", workshops: "Gruppendynamik: alle mit allen" },
      { feature: "Motivation", standard: "Prüfungsdruck", workshops: "Freude am Selbstausdruck" },
      { feature: "Material", standard: "Standardlehrplan", workshops: "Aktuelle Medien, Spiele und Rollenspiele" }
    ],
    processTitle: "Wie Läuft der Workshop-Prozess Ab?",
    processSteps: [
      "Statt nur Einstufung wird eine Bedarfsanalyse gemacht und der spätere Sprachgebrauch in den Mittelpunkt gestellt.",
      "Mit thematischen Sitzungen wird zu Bereichen wie Reisen, Karriere, Kunst und Technologie gearbeitet.",
      "Durch kontinuierliches Feedback werden Fehler mit direkter Korrektur und alternativen Formulierungen verbessert."
    ],
    conclusionTitle: "Ergebnis: Sprache Leben",
    conclusionBody:
      "Eine neue Sprache zu lernen bedeutet, eine neue Perspektive auf die Welt zu gewinnen. Mit Englisch kommunizieren Sie global, mit Deutsch stärken Sie Ihre Karrierewege.",
    quote: "Eine Sprache, ein Mensch; zwei Sprachen, zwei Menschen. Eine Sprache bedeutet zugleich tausende neue Möglichkeiten."
  }
};

const resolveLocale = (locale: string): SupportedLocale => {
  if (locale === "en" || locale === "de") return locale;
  return "tr";
};

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations();
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const isGameBasedLearningPost = post.slug === "oyunla-ogrenme";
  const isEmotionRegulationPost = post.slug === "evde-duygu-duzenleme";
  const isTeenCoachingPost = post.slug === "ergen-koclugunda-denge";
  const isLanguageWorkshopPost = post.slug === "dil-atolyeleri-yeni-yol";
  const gameContent = gameLearningByLocale[resolveLocale(locale)];
  const emotionContent = emotionRegulationByLocale[resolveLocale(locale)];
  const teenContent = teenCoachingByLocale[resolveLocale(locale)];
  const languageContent = languageWorkshopsByLocale[resolveLocale(locale)];
  const featuredImageBySlug: Record<string, { src: string; alt: string }> = {
    "oyunla-ogrenme": {
      src: "/images/blog/oyunla-ogrenme-kapak.png",
      alt: "Oyunla Ogrenme Neden Gucludur?"
    },
    "evde-duygu-duzenleme": {
      src: "/images/blog/evde-duygu-duzenleme-kapak.png",
      alt: "Evde Duygu Duzenleme Icin 5 Pratik Adim"
    },
    "ergen-koclugunda-denge": {
      src: "/images/blog/ergen-koclugunda-denge-kapak.png",
      alt: "Ergen Koclugunda Denge Kurmak"
    },
    "dil-atolyeleri-yeni-yol": {
      src: "/images/blog/dil-atolyeleri-yeni-yol-kapak.png",
      alt: "Ingilizce ve Almanca Atolyeleri"
    }
  };
  const featuredImage = featuredImageBySlug[post.slug];

  return (
    <article className="container-peda py-14">
      {featuredImage ? (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            width={1536}
            height={1024}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      ) : (
        <div className="rounded-3xl bg-slate-200 p-20 text-center text-slate-500">{t("blog.featuredImagePlaceholder")}</div>
      )}
      <h1 className="mt-8 font-[var(--font-playfair)] text-4xl font-bold">{t(post.title)}</h1>
      <p className="mt-2 text-sm text-slate-500">{t(post.date)}</p>
      <Card className="mt-6">
        {isGameBasedLearningPost ? (
          <div className="space-y-6 text-slate-700">
            <p className="leading-7">{gameContent.intro1}</p>
            <p className="leading-7">{gameContent.intro2}</p>
            {gameContent.sections.map((section) => (
              <section key={section.title} className="space-y-2">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="leading-7">{section.body}</p>
                <ul className="list-disc space-y-1 pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.label}>
                      <strong>{bullet.label}:</strong> {bullet.text}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">{gameContent.tableTitle}</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{gameContent.tableHeaders[0]}</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{gameContent.tableHeaders[1]}</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{gameContent.tableHeaders[2]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gameContent.tableRows.map((row, index) => (
                      <tr key={row.feature}>
                        <td
                          className={`${index < gameContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3 font-medium`}
                        >
                          {row.feature}
                        </td>
                        <td className={`${index < gameContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3`}>
                          {row.traditional}
                        </td>
                        <td className={`${index < gameContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3`}>
                          {row.gameBased}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">{gameContent.summaryTitle}</h2>
              <p className="leading-7">{gameContent.summaryBody}</p>
              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">{gameContent.quote}</blockquote>
              <p className="leading-7">{gameContent.summaryEnd}</p>
            </section>
          </div>
        ) : isEmotionRegulationPost ? (
          <div className="space-y-6 text-slate-700">
            <p className="leading-7">{emotionContent.intro1}</p>
            <p className="leading-7">{emotionContent.intro2}</p>
            {emotionContent.sections.map((section) => (
              <section key={section.title} className="space-y-2">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="leading-7">{section.body}</p>
                <ul className="list-disc space-y-1 pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.label}>
                      <strong>{bullet.label}:</strong> {bullet.text}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">{emotionContent.quote}</blockquote>
          </div>
        ) : isTeenCoachingPost ? (
          <div className="space-y-6 text-slate-700">
            <p className="leading-7">{teenContent.intro1}</p>
            <p className="leading-7">{teenContent.intro2}</p>
            {teenContent.sections.map((section) => (
              <section key={section.title} className="space-y-2">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="leading-7">{section.body}</p>
                <ul className="list-disc space-y-1 pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.label}>
                      <strong>{bullet.label}:</strong> {bullet.text}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">{teenContent.tableTitle}</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{teenContent.tableHeaders[0]}</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{teenContent.tableHeaders[1]}</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{teenContent.tableHeaders[2]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teenContent.tableRows.map((row, index) => (
                      <tr key={row.factor}>
                        <td className={`${index < teenContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3 font-medium`}>
                          {row.factor}
                        </td>
                        <td className={`${index < teenContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3`}>
                          {row.avoid}
                        </td>
                        <td className={`${index < teenContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3`}>
                          {row.target}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">{teenContent.conclusionTitle}</h2>
              <p className="leading-7">{teenContent.conclusionBody}</p>
              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">{teenContent.quote}</blockquote>
            </section>
          </div>
        ) : isLanguageWorkshopPost ? (
          <div className="space-y-6 text-slate-700">
            <p className="leading-7">{languageContent.intro1}</p>
            <p className="leading-7">{languageContent.intro2}</p>
            {languageContent.sections.map((section) => (
              <section key={section.title} className="space-y-2">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="leading-7">{section.body}</p>
                <ul className="list-disc space-y-1 pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.label}>
                      <strong>{bullet.label}:</strong> {bullet.text}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">{languageContent.tableTitle}</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{languageContent.tableHeaders[0]}</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{languageContent.tableHeaders[1]}</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">{languageContent.tableHeaders[2]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {languageContent.tableRows.map((row, index) => (
                      <tr key={row.feature}>
                        <td className={`${index < languageContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3 font-medium`}>
                          {row.feature}
                        </td>
                        <td className={`${index < languageContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3`}>
                          {row.standard}
                        </td>
                        <td className={`${index < languageContent.tableRows.length - 1 ? "border-b" : ""} border-slate-200 px-4 py-3`}>
                          {row.workshops}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">{languageContent.processTitle}</h2>
              <ol className="list-decimal space-y-1 pl-5">
                {languageContent.processSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">{languageContent.conclusionTitle}</h2>
              <p className="leading-7">{languageContent.conclusionBody}</p>
              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">{languageContent.quote}</blockquote>
            </section>
          </div>
        ) : (
          <p className="leading-7 text-slate-700">{t("blog.articleBody")}</p>
        )}
      </Card>
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">{t("blog.related")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <BlogCard key={item.slug} href={`/blog/${item.slug}`} title={t(item.title)} excerpt={t(item.excerpt)} />
          ))}
        </div>
      </section>
    </article>
  );
}
