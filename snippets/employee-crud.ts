/**
 * Employee CRUD Operations
 *
 * Handles creation, updating, deletion,
 * and retrieval of employee records.
 *
 * Data is stored in the Supabase PostgreSQL database.
 */

import { supabase } from "@/integrations/supabase/client";

export async function getEmployees() {
  const { data, error } = await supabase
    .from("employees")
    .select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function createEmployee(employee: {
  name: string;
  department?: string;
  role?: string;
}) {
  const { data, error } = await supabase
    .from("employees")
    .insert(employee);

  if (error) {
    throw error;
  }

  return data;
}

export async function updateEmployee(id: string, updates: any) {
  const { data, error } = await supabase
    .from("employees")
    .update(updates)
    .eq("id", id);

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteEmployee(id: string) {
  const { error } = await supabase
    .from("employees")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}
