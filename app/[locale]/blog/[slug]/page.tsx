import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { blogPosts } from "@/lib/data/site-data";
import { Card } from "@/components/ui/card";
import { BlogCard } from "@/components/sections/blog-card";

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations();
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const isGameBasedLearningPost = post.slug === "oyunla-ogrenme";
  const isEmotionRegulationPost = post.slug === "evde-duygu-duzenleme";
  const isTeenCoachingPost = post.slug === "ergen-koclugunda-denge";
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
            <p className="leading-7">
              Eğitim dünyasında uzun süre &quot;oyun&quot; ve &quot;öğrenme&quot; iki ayrı kutup olarak görüldü: Oyun eğlence
              içindi, öğrenme ise ciddi bir işti. Ancak modern pedagoji ve nörobilim, bu iki kavramın aslında
              birbirini tamamlayan güçlü bir bütün olduğunu kanıtladı.
            </p>
            <p className="leading-7">
              Peki, oyun oynamak neden sadece zaman geçirmek değil, aynı zamanda en etkili öğrenme yöntemlerinden
              biridir? İşte oyunla öğrenmenin bu kadar güçlü olmasının temel nedenleri:
            </p>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">1. Dopamin Etkisi ve Motivasyon</h2>
              <p className="leading-7">
                Oyunlar, beynimizdeki ödül mekanizmasını tetikler. Bir seviyeyi geçmek, rozet kazanmak veya zorlu
                bir bulmacayı çözmek beyinde dopamin salgılanmasına yardımcı olur.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Süreklilik:</strong> Dopamin, bireyin aktiviteye devam etme isteğini artırır.
                </li>
                <li>
                  <strong>Pozitif pekiştirme:</strong> Öğrenme süreci sıkıcı bir görevden, heyecan verici bir
                  serüvene dönüşür.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">2. Güvenli Bir Hata Yapma Alanı</h2>
              <p className="leading-7">
                Geleneksel eğitim sistemlerinde hata yapmak çoğu zaman başarısızlık korkusuyla eşleşir. Oyunlarda
                ise hata yapmak, sürecin doğal bir parçasıdır.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Deneme-yanılma:</strong> Oyuncu, bir sonraki denemede neyi farklı yapacağını öğrenir.
                </li>
                <li>
                  <strong>Stres yönetimi:</strong> Başarısızlık korkusu azaldığında beyin yeni bilgileri almaya
                  daha açık hale gelir.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">3. Aktif Katılım ve Akış Hali</h2>
              <p className="leading-7">
                Okumak veya dinlemek pasif eylemlerdir. Oyun oynamak ise aktif katılım gerektirir.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Akış (Flow) teorisi:</strong> Oyunlar, zorluk seviyesini kullanıcının becerisine göre
                  dengeleyerek derin odaklanmayı tetikler.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">4. Karmaşık Becerilerin Gelişimi</h2>
              <p className="leading-7">
                Oyunlar yalnızca bilgi ezberletmez; yaşamda ihtiyaç duyulan becerileri de güçlendirir:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Eleştirel düşünme:</strong> Strateji kurma ve problem çözme.
                </li>
                <li>
                  <strong>İş birliği:</strong> Çok oyunculu senaryolarda ekip çalışması ve iletişim.
                </li>
                <li>
                  <strong>Karar verme:</strong> Hızlı değişen durumlarda risk analizi yapma.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Geleneksel Öğrenme vs. Oyunla Öğrenme</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">Özellik</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">Geleneksel Öğrenme</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">Oyunla Öğrenme</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-slate-200 px-4 py-3 font-medium">Bilgi Akışı</td>
                      <td className="border-b border-slate-200 px-4 py-3">Pasif (Dinleme/Okuma)</td>
                      <td className="border-b border-slate-200 px-4 py-3">Aktif (Uygulama/Deneyimleme)</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 px-4 py-3 font-medium">Hata Algısı</td>
                      <td className="border-b border-slate-200 px-4 py-3">Cezalandırıcı / Korkutucu</td>
                      <td className="border-b border-slate-200 px-4 py-3">Eğitici / Teşvik Edici</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 px-4 py-3 font-medium">Geri Bildirim</td>
                      <td className="border-b border-slate-200 px-4 py-3">Gecikmeli (Sınav sonuçları)</td>
                      <td className="border-b border-slate-200 px-4 py-3">Anlık (Skorlar/Geri bildirimler)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Odak</td>
                      <td className="px-4 py-3">Ezber ve Müfredat</td>
                      <td className="px-4 py-3">Merak ve Keşif</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">Özetle</h2>
              <p className="leading-7">
                Oyunla öğrenme, insanın doğasındaki merak ve rekabet duygularını akademik hedeflerle birleştirir.
                Bilgiyi yalnızca zihne değil, deneyim yoluyla kalıcı hafızaya işler.
              </p>
              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                &quot;Çocuklar oyun oynarken aslında hayatın provasını yaparlar. Yetişkinler için ise oyun,
                yaratıcılığın ve esnek düşünmenin en kısa yoludur.&quot;
              </blockquote>
              <p className="leading-7">
                Öğrenme sürecine küçük bir oyunlaştırma öğesi eklemek bile, verimliliği ve kalıcılığı tahmin
                ettiğinizden çok daha fazla artırabilir.
              </p>
            </section>
          </div>
        ) : isEmotionRegulationPost ? (
          <div className="space-y-6 text-slate-700">
            <p className="leading-7">
              Modern yaşamın hızı ve günlük sorumluluklar, bazen duygusal olarak dengemizi kaybetmemize neden
              olabilir. Ev ortamı hem dinlendiğimiz hem de stresle başa çıkmaya çalıştığımız bir alan.
            </p>
            <p className="leading-7">
              Duygularınızı bir düşman olarak değil, size mesaj getiren elçiler olarak görmek; evde duygusal
              dayanıklılığı artırmanın en etkili yollarından biridir.
            </p>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">1. Dur ve Duyguyu İsimlendir</h2>
              <p className="leading-7">
                Yoğun bir duygu dalgası geldiğinde, tepki vermeden önce kısa bir duraklama yapmak dengeyi
                korumanıza yardımcı olur.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Fark et:</strong> &quot;Şu an ne hissediyorum?&quot; sorusunu kendinize sorun.
                </li>
                <li>
                  <strong>Etiketle:</strong> &quot;Şu an çok kaygılıyım&quot; gibi bir ifade, duygunun yoğunluğunu azaltmaya
                  yardımcı olur.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">2. Bedensel Taramaya Geçin</h2>
              <p className="leading-7">
                Duygular zihinde olduğu kadar bedende de hissedilir. Kaygı karında, öfke omuzlarda gerginlik
                yaratabilir.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Odaklanın:</strong> Gözlerinizi kapatıp dikkatinizi bedeninize yönlendirin.
                </li>
                <li>
                  <strong>Serbest bırakın:</strong> Çene, omuz ve boyun kaslarını bilinçli şekilde gevşetin.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">3. Nefesin Gücünü Kullanın</h2>
              <p className="leading-7">
                Nefes, sinir sistemine doğrudan etki edebileceğiniz en güçlü araçlardan biridir.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>4-7-8 tekniği:</strong> 4 saniye nefes alın, 7 saniye tutun, 8 saniyede yavaşça verin.
                </li>
                <li>
                  <strong>Neden önemli:</strong> Uzun nefes verme, vücudun sakinleşme sistemini aktive eder.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">4. Çevresel Uyarımı Değiştirin</h2>
              <p className="leading-7">
                Bazen bulunduğunuz ortam, duygusal yoğunluğu artırır. Küçük bir çevresel değişiklik bile regülasyonu
                destekler.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Mekan değişikliği:</strong> Oda değiştirin, balkona çıkın veya yüzünüzü soğuk suyla
                  yıkayın.
                </li>
                <li>
                  <strong>Duyusal değişim:</strong> Sakin bir müzik veya hoş bir koku ile odağı kriz anından
                  uzaklaştırın.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">5. Duyguyu Misafir Edin ve Serbest Bırakın</h2>
              <p className="leading-7">
                Duygular geçicidir; onları bastırmadan fark etmek ve akışına bırakmak daha sağlıklı bir yaklaşım
                sunar.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Gözlemci olun:</strong> Duygunun gelip geçmesine izin verin, onu yargılamayın.
                </li>
                <li>
                  <strong>Yazıya dökün:</strong> Hisleri kağıda aktarmak zihinsel yükü hafifletir.
                </li>
              </ul>
            </section>

            <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
              Unutmayın: Duygu düzenleme, duyguları yok etmek değil, onlarla birlikte dengede kalabilme becerisidir.
              Bu adımları her uyguladığınızda duygusal kaslarınız biraz daha güçlenir.
            </blockquote>
          </div>
        ) : isTeenCoachingPost ? (
          <div className="space-y-6 text-slate-700">
            <p className="leading-7">
              Ergenlik dönemi, bireyin kendi kimliğini inşa ettiği, bağımsızlık arayışını güçlendirdiği ve aynı
              anda rehberliğe ihtiyaç duyduğu yoğun bir süreçtir. Ergen koçluğu, bu dönemde gencin potansiyelini
              keşfetmesi için güçlü bir yol haritası sunar.
            </p>
            <p className="leading-7">
              Sürecin başarısı, koçun kurduğu hassas dengeye bağlıdır: Ebeveynin beklentileri ile gencin ihtiyaçları
              arasındaki denge.
            </p>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">1. Güven ve Gizlilik Sınırlarını Netleştirmek</h2>
              <p className="leading-7">
                Bir ergen için güven duygusu her şeyin önündedir. Paylaşımların anında ebeveyne aktarılacağı algısı,
                süreci daha başlamadan zayıflatır.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Şeffaflık:</strong> Koç, gizlilik sınırlarını süreç başında hem ebeveyne hem gence açıkça
                  anlatmalıdır.
                </li>
                <li>
                  <strong>Kritik istisna:</strong> Hayati risk veya yasal zorunluluk dışında, gencin rızası olmadan
                  bilgi paylaşımı yapılmamalıdır.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">2. Ebeveynin Beklentisi ve Gencin İhtiyacı Arasındaki Denge</h2>
              <p className="leading-7">
                Ebeveynler çoğu zaman koça belirli davranış sorunlarıyla gelir. Ancak koçluk, genci düzeltmeye yönelik
                bir tamir alanı değil, genci güçlendiren bir gelişim sürecidir.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Gencin gündemi:</strong> Seanslar, gencin o anki gerçek ihtiyacını merkeze almalıdır.
                </li>
                <li>
                  <strong>Orta yol:</strong> Koç, ebeveynin uzun vadeli hedefleri ile gencin kısa vadeli motivasyonu
                  arasında köprü kurmalıdır.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">3. Rehber Olmak, Otorite Olmamak</h2>
              <p className="leading-7">
                Ergenler zaten okulda ve evde otoriteyle yoğun şekilde karşılaşır. Koçun rolü, bu hiyerarşiyi
                çoğaltmak değil, güvenli bir düşünme alanı açmaktır.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Yol arkadaşlığı:</strong> Koç, emir veren değil, gencin kendi cevaplarını bulmasına eşlik
                  eden bir rehberdir.
                </li>
                <li>
                  <strong>Soru sorma yaklaşımı:</strong> Açık uçlu sorular, farkındalığı ve sorumluluk duygusunu
                  artırır.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">4. Beklenti Yönetimi ve Düzenli Geri Bildirim</h2>
              <p className="leading-7">
                Ebeveynleri süreçten tamamen uzak tutmak da sürdürülebilir değildir. Ebeveyn, doğru şekilde dahil
                olduğunda gelişimin güçlü destekçisi olur.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Üçlü değerlendirme:</strong> Belirli aralıklarla yapılan ortak görüşmeler, ortak hedefi
                  canlı tutar.
                </li>
                <li>
                  <strong>Gelişim odaklı raporlama:</strong> Yalnızca sonuç değil, gelişen beceriler de görünür
                  kılınmalıdır.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Koçluk Sürecinde Denge Matrisi</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">Unsur</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">Kaçınılması Gereken</th>
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold">Hedeflenen Denge</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-slate-200 px-4 py-3 font-medium">İletişim</td>
                      <td className="border-b border-slate-200 px-4 py-3">Genci ebeveyne şikayet etmek</td>
                      <td className="border-b border-slate-200 px-4 py-3">
                        Gencin kendini ifade etmesine köprü olmak
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 px-4 py-3 font-medium">Rol</td>
                      <td className="border-b border-slate-200 px-4 py-3">İkinci ebeveyn veya gardiyan</td>
                      <td className="border-b border-slate-200 px-4 py-3">
                        Tarafsız ve profesyonel yol arkadaşı
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Odak</td>
                      <td className="px-4 py-3">Sadece akademik başarı ve notlar</td>
                      <td className="px-4 py-3">Bütünsel gelişim: duygusal zeka ve akademik ilerleme</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">Sonuç: Sağlıklı Sınırlar, Güçlü Gelecek</h2>
              <p className="leading-7">
                Ergen koçluğunda denge kurmak, ebeveynin haklı kaygıları ile gencin bireyselleşme çabası arasında
                dikkatli bir yürüyüş gerektirir. Koç bu iki dünya arasında etkili bir tercüman olduğunda, genç yalnız
                başarılı değil, aynı zamanda mutlu ve farkındalığı yüksek bir birey olarak güçlenir.
              </p>
              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                Koçluk, gencin elinden tutup onu bir yere götürmek değil; gencin kendi ışığını yakmasına alan
                açmaktır.
              </blockquote>
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
