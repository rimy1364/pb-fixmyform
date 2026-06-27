import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone } = await req.json();

  // Forward to Google Sheet via Apps Script webhook
  // Setup: go to script.google.com → new project → paste the script below → Deploy as web app
  //
  // function doPost(e) {
  //   const d = JSON.parse(e.postData.contents);
  //   SpreadsheetApp.getActiveSheet().appendRow([new Date(), d.name, d.email, d.phone]);
  //   return ContentService.createTextOutput(JSON.stringify({ok:true}))
  //     .setMimeType(ContentService.MimeType.JSON);
  // }
  //
  // Then set GOOGLE_SHEET_WEBHOOK in your .env.local to the deployed web app URL.

  const webhook = process.env.GOOGLE_SHEET_WEBHOOK;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
    } catch {
      // Non-fatal — still let the user download
    }
  }

  return NextResponse.json({ success: true });
}
