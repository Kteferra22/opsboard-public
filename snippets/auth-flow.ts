/**
 * Authentication Flow
 *
 * OpsBoard uses Supabase Authentication
 * to manage secure login sessions.
 *
 * This snippet demonstrates how user login
 * is handled and how session data is returned.
 */

import { supabase } from "@/integrations/supabase/client";

export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Authentication failed:", error);
    throw new Error("Login failed");
  }

  return data.session;
}
