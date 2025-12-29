import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const API_KEY = process.env.NVIDIA_API_KEY;
    if (!API_KEY) {
      throw new Error("NVIDIA API key not configured");
    }
    
    const invokeUrl = "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";

    const response = await fetch(invokeUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling NVIDIA API:", error);
    return NextResponse.json(
      { error: "Failed to generate molecules" },
      { status: 500 }
    );
  }
}