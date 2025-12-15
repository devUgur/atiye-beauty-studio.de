import { NextRequest, NextResponse } from "next/server";

/**
 * Calendly Webhook Handler (OPTIONAL - Only for Calendly Standard Plan or higher)
 * 
 * ⚠️ NOTE: This is NOT needed for Free Calendly Plan!
 * For Free Plan, use redirect to /termin-erfolgreich after booking instead.
 * 
 * This webhook is only useful if you have:
 * - Calendly Standard Plan or higher
 * - Need real-time notifications
 * - Want to integrate with CRM/database
 * 
 * Receives webhook events from Calendly when:
 * - invitee.created - A new appointment is booked
 * - invitee.canceled - An appointment is canceled
 * - invitee.rescheduled - An appointment is rescheduled
 * 
 * Environment Variables Required (if using webhooks):
 * - CALENDLY_WEBHOOK_SIGNING_KEY: Your Calendly webhook signing key for verification
 * 
 * Setup in Calendly (if using Standard Plan):
 * 1. Go to Calendly Settings > Integrations > Webhooks
 * 2. Add webhook URL: https://yourdomain.com/api/calendly/webhook
 * 3. Select events: invitee.created, invitee.canceled, invitee.rescheduled
 * 4. Copy the signing key and add to environment variables
 */

interface CalendlyInvitee {
  email: string;
  name: string;
  text_reminder_number?: string;
  canceled: boolean;
  canceler_name?: string;
  cancel_reason?: string;
  canceled_at?: string;
  rescheduled: boolean;
  old_invitee?: string;
  new_invitee?: string;
  payment?: {
    external_id: string;
    provider: string;
    amount: number;
    currency: string;
    terms: string;
    successful: boolean;
  };
  tracking?: {
    utm_campaign?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_content?: string;
    utm_term?: string;
    salesforce_uuid?: string;
  };
  questions_and_answers?: Array<{
    question: string;
    answer: string;
  }>;
  timezone: string;
  event_start_time: string;
  event_end_time: string;
}

interface CalendlyEvent {
  uri: string;
  name: string;
  meeting_notes?: string;
  start_time: string;
  end_time: string;
  location?: {
    type: string;
    location: string;
  };
  invitees: CalendlyInvitee[];
  created_at: string;
  updated_at: string;
}

interface CalendlyWebhookPayload {
  event: string;
  time: string;
  payload: {
    event_type: string;
    event: CalendlyEvent;
  };
}

export async function POST(request: NextRequest) {
  try {
    // Verify webhook signature (optional but recommended for production)
    const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
    if (signingKey) {
      // TODO: Implement signature verification
      // const signature = request.headers.get("calendly-webhook-signature");
      // if (!verifySignature(signature, body, signingKey)) {
      //   return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      // }
    }

    const body: CalendlyWebhookPayload = await request.json();

    // Handle different event types
    switch (body.event) {
      case "invitee.created":
        await handleInviteeCreated(body);
        break;
      case "invitee.canceled":
        await handleInviteeCanceled(body);
        break;
      case "invitee.rescheduled":
        await handleInviteeRescheduled(body);
        break;
      default:
        console.log("Unhandled Calendly event:", body.event);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing Calendly webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function handleInviteeCreated(payload: CalendlyWebhookPayload) {
  const calendlyEvent = payload.payload.event;
  const invitee = calendlyEvent.invitees[0];

  console.log("New appointment booked:", {
    eventName: calendlyEvent.name,
    inviteeName: invitee.name,
    inviteeEmail: invitee.email,
    startTime: invitee.event_start_time,
    endTime: invitee.event_end_time,
    phone: invitee.text_reminder_number,
    utm: invitee.tracking,
  });

  // TODO: Implement your business logic here:
  // - Save to database
  // - Send to CRM (e.g., Salesforce, HubSpot)
  // - Send Slack/Teams notification
  // - Trigger follow-up emails
  // - Update analytics

  // Example: Send to external service
  // await fetch('https://your-crm-api.com/appointments', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     name: invitee.name,
  //     email: invitee.email,
  //     phone: invitee.text_reminder_number,
  //     appointmentDate: invitee.event_start_time,
  //     eventType: calendlyEvent.name,
  //   }),
  // });
}

async function handleInviteeCanceled(payload: CalendlyWebhookPayload) {
  const calendlyEvent = payload.payload.event;
  const invitee = calendlyEvent.invitees[0];

  console.log("Appointment canceled:", {
    eventName: calendlyEvent.name,
    inviteeName: invitee.name,
    inviteeEmail: invitee.email,
    cancelReason: invitee.cancel_reason,
    canceledAt: invitee.canceled_at,
  });

  // TODO: Implement cancellation logic:
  // - Update database
  // - Notify team
  // - Send cancellation confirmation
  // - Free up resources
}

async function handleInviteeRescheduled(payload: CalendlyWebhookPayload) {
  const calendlyEvent = payload.payload.event;
  const invitee = calendlyEvent.invitees[0];

  console.log("Appointment rescheduled:", {
    eventName: calendlyEvent.name,
    inviteeName: invitee.name,
    inviteeEmail: invitee.email,
    oldTime: invitee.old_invitee,
    newTime: invitee.new_invitee,
    newStartTime: invitee.event_start_time,
  });

  // TODO: Implement rescheduling logic:
  // - Update database
  // - Send confirmation
  // - Update calendar
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Calendly webhook endpoint is active",
  });
}
