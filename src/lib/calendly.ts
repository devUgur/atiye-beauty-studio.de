/**
 * Calendly API Utilities
 * 
 * Helper functions for interacting with Calendly API
 * Note: Calendly doesn't allow direct booking via API,
 * but we can fetch event types and availability.
 */

const CALENDLY_API_BASE = "https://api.calendly.com";

export interface CalendlyEventType {
  uri: string;
  name: string;
  active: boolean;
  slug: string;
  scheduling_url: string;
  duration: number;
  kind: "StandardEventType" | "AdhocEventType" | "CollectiveEventType";
  pooling_type?: string;
  type: "One-on-One" | "Group";
  color: string;
  created_at: string;
  updated_at: string;
  internal_note?: string;
  description_plain?: string;
  description_html?: string;
  profile: {
    type: string;
    owner: string;
    name: string;
  };
  secret?: boolean;
  booking_method?: string;
  custom_questions?: Array<{
    name: string;
    type: string;
    position: number;
    enabled: boolean;
    required: boolean;
    answer_choices?: string[];
    include_other?: boolean;
  }>;
}

export interface CalendlyAvailability {
  days: Array<{
    date: string;
    available: boolean;
    start_time?: string;
    end_time?: string;
  }>;
}

/**
 * Get Calendly event types for a user
 * Requires: CALENDLY_ACCESS_TOKEN environment variable
 */
export async function getEventTypes(
  userUri?: string
): Promise<CalendlyEventType[]> {
  const accessToken = process.env.CALENDLY_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("CALENDLY_ACCESS_TOKEN is not configured");
  }

  try {
    const url = userUri
      ? `${CALENDLY_API_BASE}/event_types?user=${encodeURIComponent(userUri)}`
      : `${CALENDLY_API_BASE}/event_types`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Calendly API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.collection || [];
  } catch (error) {
    console.error("Error fetching Calendly event types:", error);
    throw error;
  }
}

/**
 * Get current user's Calendly information
 */
export async function getCurrentUser() {
  const accessToken = process.env.CALENDLY_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("CALENDLY_ACCESS_TOKEN is not configured");
  }

  try {
    const response = await fetch(`${CALENDLY_API_BASE}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Calendly API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Calendly user:", error);
    throw error;
  }
}

/**
 * Generate Calendly embed URL with prefill data
 */
export function generateCalendlyUrl(
  eventTypeUrl: string,
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  }
): string {
  const url = new URL(eventTypeUrl);
  
  if (prefill?.name) {
    url.searchParams.set("name", prefill.name);
  }
  if (prefill?.email) {
    url.searchParams.set("email", prefill.email);
  }
  
  return url.toString();
}
