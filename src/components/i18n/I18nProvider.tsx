"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { detectLocale, supportedLocales, translate, type Locale } from "./messages";

type I18nContextValue = {
  locale: Locale;
  ready: boolean;
  setLocale: (locale: Locale) => void;
  t: (text: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "bft-locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = supportedLocales.includes(stored as Locale)
      ? (stored as Locale)
      : detectLocale(navigator.languages.length ? navigator.languages : [navigator.language]);

    const timer = window.setTimeout(() => {
      setLocaleState(initial);
      document.documentElement.lang = initial;
      document.documentElement.dir = initial === "ar" ? "rtl" : "ltr";
      setReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      ready,
      setLocale,
      t: (text) => translate(locale, text),
    }),
    [locale, ready, setLocale],
  );

  return (
    <I18nContext.Provider value={value}>
      <AutoTranslator locale={locale} />
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}

function AutoTranslator({ locale }: { locale: Locale }) {
  const originals = useRef(new WeakMap<Text, string>());
  const localeRef = useRef(locale);

  useEffect(() => {
    localeRef.current = locale;

    const translateTextNode = (node: Text) => {
      const parent = node.parentElement;
      if (
        !parent ||
        parent.closest("[data-i18n-skip]") ||
        ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)
      ) {
        return;
      }

      const raw = node.nodeValue ?? "";
      const normalized = raw.trim().replace(/\s+/g, " ");
      if (!normalized) return;

      if (!originals.current.has(node)) originals.current.set(node, normalized);
      const original = originals.current.get(node) ?? normalized;
      const direct = translate(localeRef.current, original);
      const numberedHeading = original.match(/^(\d{2}\s+[—-]\s+)(.+)$/);
      const localized =
        direct !== original || !numberedHeading
          ? direct
          : `${numberedHeading[1]}${translate(localeRef.current, numberedHeading[2])}`;
      const leading = raw.match(/^\s*/)?.[0] ?? "";
      const trailing = raw.match(/\s*$/)?.[0] ?? "";
      const next = `${leading}${localized}${trailing}`;

      if (raw !== next) node.nodeValue = next;
    };

    const walk = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) {
        translateTextNode(root as Text);
        return;
      }
      if (!(root instanceof Element) || root.closest("[data-i18n-skip]")) return;

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        translateTextNode(node as Text);
        node = walker.nextNode();
      }
    };

    walk(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target as Text);
        } else {
          mutation.addedNodes.forEach(walk);
        }
      }
    });

    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, [locale]);

  return null;
}
