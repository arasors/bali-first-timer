import Script from "next/script";
import { Suspense } from "react";

import { PageViewTracker } from "./PageViewTracker";

const patterns = {
  ga: /^(?:G|GT|AW)-[A-Z0-9-]+$/,
  gtm: /^GTM-[A-Z0-9]+$/,
  numeric: /^\d+$/,
};

function validEnv(value: string | undefined, pattern: RegExp) {
  const normalized = value?.trim();
  return normalized && pattern.test(normalized) ? normalized : undefined;
}

export function TrackingScripts() {
  const gaMeasurementId = validEnv(
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    patterns.ga,
  );
  const gtmId = validEnv(process.env.NEXT_PUBLIC_GTM_ID, patterns.gtm);
  const yandexMetricaId = validEnv(
    process.env.NEXT_PUBLIC_YANDEX_METRICA_ID,
    patterns.numeric,
  );
  const metaPixelId = validEnv(
    process.env.NEXT_PUBLIC_META_PIXEL_ID,
    patterns.numeric,
  );
  const yandexWebvisor = process.env.NEXT_PUBLIC_YANDEX_WEBVISOR === "true";

  if (!gaMeasurementId && !gtmId && !yandexMetricaId && !metaPixelId) {
    return null;
  }

  return (
    <>
      {gtmId ? (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>`,
            }}
          />
        </>
      ) : null}

      {gaMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${gaMeasurementId}');`}
          </Script>
        </>
      ) : null}

      {yandexMetricaId ? (
        <Script id="yandex-metrica" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
ym(${yandexMetricaId},'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:${yandexWebvisor}});`}
        </Script>
      ) : null}

      {metaPixelId ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${metaPixelId}');fbq('track','PageView');`}
          </Script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1" />`,
            }}
          />
        </>
      ) : null}

      <Suspense fallback={null}>
        <PageViewTracker
          gaMeasurementId={gaMeasurementId}
          gtmEnabled={Boolean(gtmId)}
          yandexMetricaId={yandexMetricaId}
          metaPixelEnabled={Boolean(metaPixelId)}
        />
      </Suspense>
    </>
  );
}
