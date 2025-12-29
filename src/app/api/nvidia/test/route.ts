import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    console.log("=== Testing NVIDIA API Key ===");
    
    const API_KEY = process.env.NVIDIA_API_KEY;
    if (!API_KEY) {
      return NextResponse.json(
        { error: "NVIDIA API key not found in environment variables" },
        { status: 500 }
      );
    }
    
    console.log("API Key found, testing with a simple request...");
    
    // Try a simple test request to see if the API key works
    const testUrl = "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";
    
    // Test with minimal payload
    const testPayload = {
      algorithm: "CMA-ES",
      num_molecules: 1,
      property_name: "QED",
      minimize: false,
      min_similarity: 0.3,
      particles: 10,
      iterations: 1,
      smi: "CCO" // Simple ethanol molecule
    };

    const response = await fetch(testUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testPayload),
    });

    console.log("Test response status:", response.status);
    console.log("Test response headers:", Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log("Test response body:", responseText);

    return NextResponse.json({
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: responseText,
      apiKeyPresent: !!API_KEY,
      apiKeyLength: API_KEY.length,
      apiKeyPrefix: API_KEY.substring(0, 10) + "..."
    });

  } catch (error) {
    console.error("Error testing NVIDIA API:", error);
    return NextResponse.json(
      { error: "Failed to test API", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}