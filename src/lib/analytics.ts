import { v4 as uuidv4 } from "uuid";
import { UAParser } from "ua-parser-js";
import { supabase } from "@/lib/supabaseClient";

type TrackEventParams = {
  eventType: string;
  eventName: string;
  section?: string;
  email?: string;
  planSelected?: string;
  buttonText?: string;
  metadata?: Record<string, unknown> | null;
};

type BasePayload = {
  session_id: string;
  device_id: string;
  browser_name: string | null;
  os: string | null;
  device_type: string;
  user_agent: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
};

const SESSION_KEY = "ct_session_id";
const DEVICE_KEY = "ct_device_id";
const UTM_KEY = "ct_utm_params";

const sectionViews = new Set<string>();
const scrollDepths = new Set<number>();

let initialized = false;
let cachedBase: BasePayload | null = null;

const safeWindow = () => typeof window !== "undefined";

const getSessionId = () => {
  if (!safeWindow()) return "server";
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = uuidv4();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
};

const getDeviceId = () => {
  if (!safeWindow()) return "server";
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = uuidv4();
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
};

const captureUtmParams = () => {
  if (!safeWindow()) return;
  const existing = sessionStorage.getItem(UTM_KEY);
  if (existing) return;

  const params = new URLSearchParams(window.location.search);
  const utm = {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
  };

  sessionStorage.setItem(UTM_KEY, JSON.stringify(utm));
};

const getUtmParams = () => {
  if (!safeWindow()) {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
    };
  }

  const stored = sessionStorage.getItem(UTM_KEY);
  if (!stored) {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
    };
  }

  try {
    return JSON.parse(stored) as {
      utm_source: string | null;
      utm_medium: string | null;
      utm_campaign: string | null;
      utm_term: string | null;
      utm_content: string | null;
    };
  } catch {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
    };
  }
};

const getBasePayload = (): BasePayload => {
  if (cachedBase) return cachedBase;

  const parser = new UAParser();
  const result = parser.getResult();

  const utm = getUtmParams();
  cachedBase = {
    session_id: getSessionId(),
    device_id: getDeviceId(),
    browser_name: result.browser.name ?? null,
    os: result.os.name ?? null,
    device_type: result.device.type ?? "desktop",
    user_agent: safeWindow() ? navigator.userAgent : null,
    utm_source: utm.utm_source ?? null,
    utm_medium: utm.utm_medium ?? null,
    utm_campaign: utm.utm_campaign ?? null,
    utm_term: utm.utm_term ?? null,
    utm_content: utm.utm_content ?? null,
  };

  return cachedBase;
};

export const initAnalytics = () => {
  if (!safeWindow() || initialized) return;
  initialized = true;
  captureUtmParams();
  getBasePayload();
  trackEvent({
    eventType: "session_start",
    eventName: "session_start",
  });
  trackEvent({
    eventType: "page_view",
    eventName: "landing_page_view",
  });
};

export const trackEvent = async (params: TrackEventParams) => {
  if (!supabase || !safeWindow()) return;

  const base = getBasePayload();
  const payload = {
    event_type: params.eventType,
    event_name: params.eventName,
    section: params.section ?? null,
    email: params.email ?? null,
    plan_selected: params.planSelected ?? null,
    button_text: params.buttonText ?? null,
    source_url: window.location.href,
    referrer: document.referrer || null,
    session_id: base.session_id,
    device_id: base.device_id,
    browser_name: base.browser_name,
    os: base.os,
    device_type: base.device_type,
    user_agent: base.user_agent,
    utm_source: base.utm_source,
    utm_medium: base.utm_medium,
    utm_campaign: base.utm_campaign,
    utm_term: base.utm_term,
    utm_content: base.utm_content,
    metadata: params.metadata ?? null,
  };

  await supabase.from("events").insert(payload);
};

export const trackSectionView = (section: string) => {
  if (sectionViews.has(section)) return;
  sectionViews.add(section);
  void trackEvent({
    eventType: "section_view",
    eventName: `section_view_${section}`,
    section,
  });
};

export const trackScrollDepth = (percent: number) => {
  if (scrollDepths.has(percent)) return;
  scrollDepths.add(percent);
  void trackEvent({
    eventType: "scroll_depth",
    eventName: `scroll_depth_${percent}`,
    metadata: { percent },
  });
};
